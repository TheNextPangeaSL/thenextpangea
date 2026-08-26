# Formulario de contacto — relay SMTP en AWS

El sitio se publica en GitHub Pages, que solo sirve archivos estáticos y no
puede ejecutar código de servidor. El formulario, por tanto, no puede hablar
SMTP por sí mismo ni guardar una contraseña: envía un POST a API Gateway, que
invoca una Lambda, y es la Lambda la que entrega el correo por SES vía SMTP.
Las credenciales viven solo en AWS, nunca en el navegador.

```
Navegador (GitHub Pages)  --POST JSON-->  API Gateway --> Lambda --SMTP 587--> SES eu-west-3
                                                                                     |
                                                                     contact@thenextpangea.com
```

## Recursos desplegados

Cuenta `565661111846`, región `eu-west-3` (París).

| Recurso            | Nombre / valor                                             |
| ------------------ | ---------------------------------------------------------- |
| Lambda             | `bacsi-contact-form` (Node.js 20, arm64, 256 MB, 10 s)     |
| Rol IAM            | `bacsi-contact-form-role` (+ `AWSLambdaBasicExecutionRole`) |
| API Gateway        | HTTP API `bacsi-contact-form`, id `9ryn41h3t1`              |
| Endpoint público   | `https://9ryn41h3t1.execute-api.eu-west-3.amazonaws.com/`  |
| Logs               | `/aws/lambda/bacsi-contact-form` en CloudWatch             |
| Host SMTP          | `email-smtp.eu-west-3.amazonaws.com:587` (STARTTLS)        |
| Remitente          | `iam@thenextpangea.com` (verificado en SES)                |
| Destino            | `contact@thenextpangea.com`                                |
| Asunto             | `Web - BACSI - <asunto del formulario>`                     |

SES tiene **acceso de producción** concedido en esta cuenta (50.000 envíos/día,
14/s), así que no hay restricción de sandbox.

> **Por qué API Gateway y no una Function URL.** Se intentó primero con una
> Lambda Function URL pública. Aunque el `AuthType: NONE` y la política de
> recursos eran correctos, AWS devolvía 403 sin llegar a invocar la función: la
> cuenta tiene bloqueado el acceso público a Lambda a nivel de organización.
> API Gateway es la vía soportada y usa el mismo formato de evento (payload
> 2.0), así que el código no cambió.

## Mantenimiento

Para desplegar un cambio en el código de la Lambda:

```bash
cd lambda/contact
npm install
npm run bundle
aws lambda update-function-code --region eu-west-3 \
  --function-name bacsi-contact-form \
  --zip-file fileb://../contact-lambda.zip
```

Ver los logs de un fallo de envío:

```bash
aws logs tail /aws/lambda/bacsi-contact-form --region eu-west-3 --follow
```

## Configuración original

## Puesta en marcha

### 1. Verificar el remitente en SES

En la consola de SES, **región eu-west-3**, `iam@thenextpangea.com` debe
aparecer como identidad verificada. Lo ideal es verificar el dominio completo
`thenextpangea.com` y activar **DKIM**, añadiendo los CNAME que SES indique en
el DNS. Sin DKIM los correos salen, pero muchos acaban en spam.

### 2. Comprobar si la cuenta sigue en sandbox

Toda cuenta de SES arranca en **sandbox**: solo envía a direcciones
verificadas, con un máximo de 200 correos al día. Si es el caso, verificad
también `contact@thenextpangea.com` para que lleguen los avisos, y pedid
acceso de producción en **SES > Account dashboard > Request production
access**. AWS suele responder en 24-48 h.

### 3. Empaquetar y crear la Lambda

```bash
cd lambda/contact
npm run bundle        # genera lambda/contact-lambda.zip
```

En la consola de Lambda, **misma región eu-west-3**:

- Runtime **Node.js 20.x**, arquitectura `arm64`, timeout **10 s**.
  El timeout por defecto (3 s) se queda corto para un handshake SMTP.
- Subir `contact-lambda.zip` como código de la función.
- Variables de entorno:

  | Variable         | Valor                                |
  | ---------------- | ------------------------------------ |
  | `SMTP_HOST`      | `email-smtp.eu-west-3.amazonaws.com` |
  | `SMTP_PORT`      | `587`                                |
  | `SMTP_USER`      | el usuario SMTP de SES (`AKIA…`)     |
  | `SMTP_PASS`      | la contraseña SMTP de SES            |
  | `MAIL_FROM`      | `iam@thenextpangea.com`              |
  | `MAIL_TO`        | `contact@thenextpangea.com`          |
  | `ALLOWED_ORIGIN` | `https://bacsi.thenextpangea.com`    |

> **Sobre `SMTP_PASS`.** Las variables de entorno de Lambda son visibles para
> cualquiera con permiso de lectura sobre la función. Lo recomendable es
> guardar la contraseña en **AWS Secrets Manager** y leerla desde el código, o
> como mínimo cifrar la variable con una clave KMS propia y restringir quién
> puede ver la configuración de la función.

- Si la Lambda está dentro de una VPC, necesita salida a internet por el puerto
  587 (NAT Gateway) o un **VPC endpoint de SES**. Fuera de VPC no hay que hacer
  nada.

### 4. Crear la Function URL

En la Lambda: **Configuration > Function URL > Create**.

- Auth type: **NONE**. El endpoint es público; la protección es el filtro de
  Origin, el honeypot y el límite por IP que implementa el propio código.
- CORS: dejarlo **desactivado** en la consola. El código ya devuelve las
  cabeceras CORS correctas, y activarlo en ambos sitios genera cabeceras
  duplicadas que el navegador rechaza.

Copiad la URL resultante.

### 5. Conectar el sitio

En GitHub: **Settings > Secrets and variables > Actions > Variables > New
repository variable**.

- Nombre: `PUBLIC_CONTACT_ENDPOINT`
- Valor: la Function URL del paso anterior.

El workflow de despliegue ya la inyecta en el build. Para desarrollo local,
copiad `.env.example` de la raíz a `.env` con el mismo valor.

Sin esa variable, el formulario muestra el aviso ámbar de "no se ha podido
enviar" en lugar de fingir un envío correcto.

## Probar sin desplegar

```bash
cd lambda/contact
npm install
cp .env.example .env          # rellenar SMTP_USER y SMTP_PASS
node --env-file=.env test-local.mjs
```

Envía un correo real a `MAIL_TO` ejecutando el mismo handler que usará la
Lambda. Requiere Node 20.6+.

## Notas

- **Rotación de credenciales.** Las credenciales SMTP de SES se derivan de un
  usuario IAM. Si una contraseña se expone (en un chat, un commit, un ticket),
  hay que borrarla en IAM y generar otra: no se puede "despublicar". Es la
  razón principal para no tenerlas nunca en el repositorio.
- **Límite de peticiones.** El contador por IP del código es orientativo: los
  contenedores de Lambda son efímeros y cada uno lleva su propia cuenta. Si el
  endpoint recibe abuso, poned **AWS WAF** delante con una regla de rate limit,
  o añadid un captcha (Cloudflare Turnstile, hCaptcha) al formulario.
- **Protección antispam actual.** Campo honeypot oculto + validación estricta
  en servidor + filtro de Origin. Suficiente para bots genéricos, no para
  alguien que ataque el endpoint a propósito.
- **Métricas.** Vigilad en SES la tasa de rebotes y quejas. Si suben, AWS puede
  suspender la capacidad de envío de la cuenta.
- **Política de privacidad.** Las páginas legales describen el tratamiento de
  los datos del formulario. Conviene revisarlas ahora que el envío es real, y
  arreglar de paso la incoherencia del correo de contacto: la política de
  cookies indica `info@thenextpangea.com` mientras el resto del sitio usa
  `contact@thenextpangea.com`.
