export interface Product {
  slug: string;
  name: string;
  tagline: string;
  taglineEn: string;
  category: ProductCategory;
  tags: ProductTag[];
  description: string;
  features: ProductFeature[];
  icon: string; // SVG path data for a representative icon
  accentColor: string; // Tailwind color class
  hexColor: string; // Hex value for dynamic styles
  heroImage?: string; // Path to a hero/preview image (relative to /public)
  externalUrl?: string; // If set, links to an external landing page instead of internal product page
}

export interface ProductFeature {
  title: string;
  description: string;
}

export type ProductCategory =
  | "ai-digital"
  | "hardware-electronics"
  | "materials-industrial"
  | "biology";

// The 6 eXponential Technologies
export type ProductTag =
  | "data"
  | "ai"
  | "manufacturing"
  | "hardware"
  | "nano"
  | "bio";

export interface TagInfo {
  id: ProductTag;
  label: string;
  labelEn: string;
  color: string; // Tailwind bg color class
  textColor: string; // Tailwind text color class
}

export interface CategoryInfo {
  id: ProductCategory;
  label: string;
  labelEn: string;
  description: string;
  descriptionEn: string;
  icon: string;
  accentColor: string;
}

// Tags matching the 6 eXponential Technologies from Services.astro
export const tags: TagInfo[] = [
  {
    id: "data",
    label: "Data Utilities",
    labelEn: "Data Utilities",
    color: "bg-sky-500/20",
    textColor: "text-sky-300",
  },
  {
    id: "ai",
    label: "Inteligencia Artificial",
    labelEn: "Artificial Intelligence",
    color: "bg-orange-500/20",
    textColor: "text-orange-300",
  },
  {
    id: "manufacturing",
    label: "Fabricación Avanzada",
    labelEn: "Advanced Manufacturing",
    color: "bg-cyan-500/20",
    textColor: "text-cyan-300",
  },
  {
    id: "hardware",
    label: "Hardware & Robótica",
    labelEn: "Hardware & Robotics",
    color: "bg-amber-500/20",
    textColor: "text-amber-300",
  },
  {
    id: "nano",
    label: "NanoTecnología",
    labelEn: "NanoTechnology",
    color: "bg-violet-500/20",
    textColor: "text-violet-300",
  },
  {
    id: "bio",
    label: "BioTecnología",
    labelEn: "BioTechnology",
    color: "bg-emerald-500/20",
    textColor: "text-emerald-300",
  },
];

export const categories: CategoryInfo[] = [
  {
    id: "ai-digital",
    label: "Inteligencia Artificial & Digital",
    labelEn: "Artificial Intelligence & Digital",
    description:
      "Soluciones basadas en IA, machine learning y análisis de datos para la transformación digital industrial.",
    descriptionEn:
      "AI, machine learning and data analysis solutions for industrial digital transformation.",
    icon: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z",
    accentColor: "pangea-sky-blue",
  },
  {
    id: "hardware-electronics",
    label: "Hardware & Electrónica",
    labelEn: "Hardware & Electronics",
    description:
      "Tecnologías avanzadas en electrónica, sensores y sistemas embebidos para entornos industriales exigentes.",
    descriptionEn:
      "Advanced electronics, sensors and embedded systems for demanding industrial environments.",
    icon: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z",
    accentColor: "pangea-calm-blue",
  },
  {
    id: "materials-industrial",
    label: "Materiales & Fabricación Avanzada",
    labelEn: "Materials & Advanced Manufacturing",
    description:
      "Innovación en materiales, procesos de fabricación y simulación para la industria del futuro.",
    descriptionEn:
      "Innovation in materials, manufacturing processes and simulation for the industry of the future.",
    icon: "M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25",
    accentColor: "pangea-roast-sand",
  },
  {
    id: "biology",
    label: "Biotecnología",
    labelEn: "Biotechnology",
    description:
      "Soluciones biotecnológicas avanzadas basadas en biología molecular para la detección de amenazas biológicas y la protección de la salud pública.",
    descriptionEn:
      "Advanced biotech solutions based on molecular biology for biological threat detection and public health protection.",
    icon: "M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5",
    accentColor: "pangea-classic-blue",
  },
];

export const products: Product[] = [
  // ─── AI & DIGITAL ────────────────────────────────────────────
  {
    slug: "imagia",
    name: "IMAGIA",
    tagline:
      "Aceleración de etiquetado y generación de modelos de visión por computador.",
    taglineEn:
      "Labeling acceleration and computer vision model generation platform.",
    category: "ai-digital",
    tags: ["ai", "data"],
    description:
      "IMAGIA es una plataforma para procesar datos industriales de visión automáticamente mediante algoritmos de IA. Acelera el etiquetado y la generación de modelos de visión por computador, estandarizando formatos de datos para unificar el acceso. Compatible con ultrasonidos de transmisión, pulso-eco, tomografías, termografías y radiografías. Disponible en cloud y on-premise, es ligera (plataforma web), fácil de usar y utiliza técnicas SOTA de Deep Learning.",
    features: [
      {
        title: "Cloud & on-premise",
        description:
          "Despliegue flexible en la nube o en infraestructura local, adaptándose a los requisitos de seguridad y conectividad de cada organización.",
      },
      {
        title: "Lightweight (web platform)",
        description:
          "Plataforma web ligera accesible desde cualquier navegador, sin necesidad de instalaciones pesadas ni hardware especializado en el puesto de trabajo.",
      },
      {
        title: "User-friendly",
        description:
          "Interfaz intuitiva diseñada para que operadores e ingenieros puedan gestionar datos, entrenar modelos y validar resultados sin conocimientos avanzados de programación.",
      },
      {
        title: "SOTA Deep Learning",
        description:
          "Incorpora técnicas estado del arte de Deep Learning para abordar casos complejos de detección y clasificación que no se resuelven con modelos convencionales.",
      },
    ],
    icon: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    accentColor: "pangea-sky-blue",
    hexColor: "#6B7280",
    heroImage: "/images/Imagia.png",
  },
  {
    slug: "planifai",
    name: "PLANIFAI",
    tagline: "Plataforma integrada de optimización de recursos",
    taglineEn: "Integrated Resource Optimization Platform",
    category: "ai-digital",
    tags: ["ai", "data"],
    description:
      "Este producto es una plataforma avanzada de planificación y optimización de recursos que integra predicción, estrategia y planificación en un único entorno tecnológico. Combina la experiencia en optimización de la cadena de suministro con un núcleo algorítmico diferencial capaz de modelar procesos reales y transformarlos en decisiones operativas óptimas.",
    features: [
      {
        title: "Predicción de demanda y anticipación",
        description:
          "El sistema incorpora modelos avanzados de predicción capaces de trabajar con patrones de consumo complejos —intermitentes, erráticos o altamente variables— proporcionando estimaciones más precisas que los métodos tradicionales. Permite anticipar variaciones en la demanda, optimizar niveles de stock y mejorar la disponibilidad de producto, reduciendo simultáneamente costes operativos.",
      },
      {
        title: "Modelado integral de procesos",
        description:
          "La plataforma permite modelar con gran detalle procesos productivos y recursos disponibles: plantas, líneas de producción, equipos, recursos humanos y materiales. Cada tarea puede definirse con sus duraciones, dependencias, restricciones de capacidad y calendarios de disponibilidad.",
      },
      {
        title: "Optimización multiobjetivo",
        description:
          "A partir de la predicción y el modelo definido, el motor algorítmico calcula automáticamente la mejor asignación de tareas y recursos en el tiempo. El sistema permite optimizar uno o varios objetivos simultáneamente, como minimizar retrasos, reducir costes, maximizar utilización de activos críticos o minimizar riesgos operativos. Incorpora tratamiento probabilístico de la incertidumbre y capacidades de re-scheduling parcial ante imprevistos.",
      },
      {
        title: "Aplicación en producción y mantenimiento avanzado",
        description:
          "La tecnología ha sido aplicada con éxito tanto en entornos industriales como en contextos de alta criticidad. Destaca su utilización para la optimización del plan de mantenimiento de la flota de aeronaves del Ejército del Aire y del Espacio, demostrando que la optimización no solo mejora procesos productivos, sino también la gestión estratégica de activos críticos.",
      },
    ],
    icon: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6",
    accentColor: "pangea-sky-blue",
    hexColor: "#F47321",
    heroImage: "/images/PlanifAI.png",
  },
  {
    slug: "buscai",
    name: "BUSCAI",
    tagline:
      "Motor de búsqueda inteligente potenciado por IA para entornos empresariales.",
    taglineEn:
      "AI-powered intelligent search engine for enterprise environments.",
    category: "ai-digital",
    tags: ["ai", "data"],
    description:
      "BUSCAI es un motor de búsqueda inteligente potenciado por Inteligencia Artificial, diseñado para entornos empresariales e industriales. Permite localizar, organizar y contextualizar grandes volúmenes de información no estructurada de forma rápida y precisa.",
    features: [
      {
        title: "Búsqueda semántica avanzada",
        description:
          "Motor de búsqueda basado en modelos de lenguaje que comprende el significado de las consultas, no solo las palabras clave, permitiendo encontrar información relevante incluso cuando la terminología varía.",
      },
      {
        title: "Indexación de documentación empresarial",
        description:
          "Procesamiento e indexación automática de documentos técnicos, manuales, normativas y bases de conocimiento internas en múltiples formatos (PDF, Word, Excel, imágenes).",
      },
      {
        title: "Respuestas contextualizadas con IA",
        description:
          "Generación de respuestas fundamentadas a partir de la documentación corporativa, con referencias a las fuentes originales para garantizar trazabilidad y verificabilidad.",
      },
      {
        title: "Integración corporativa",
        description:
          "Despliegue on-premise o en cloud privado, con control total sobre la información. Compatible con sistemas de gestión documental y flujos de trabajo existentes.",
      },
    ],
    icon: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
    accentColor: "pangea-sky-blue",
    hexColor: "#7C3AED",
    heroImage: "/images/BuscAI.png",
  },
  {
    slug: "fast-reporting-tool",
    name: "FAST REPORTING TOOL",
    tagline:
      "Herramienta de generación de informes rápidos y automatizados para entornos industriales.",
    taglineEn:
      "Rapid automated report generation tool for industrial environments.",
    category: "ai-digital",
    tags: ["ai", "data"],
    description:
      "Fast Reporting Tool es una herramienta avanzada para la generación automatizada de informes técnicos y de negocio en entornos industriales. Permite sintetizar datos complejos en reportes claros y accionables en tiempo récord.",
    features: [
      {
        title: "Generación automatizada de informes",
        description:
          "Creación automática de informes técnicos y de negocio a partir de datos estructurados y no estructurados, reduciendo el tiempo de elaboración de horas a minutos.",
      },
      {
        title: "Plantillas configurables",
        description:
          "Sistema de plantillas personalizables que permite definir estructura, formato y contenido de los reportes según los estándares y requisitos de cada organización.",
      },
      {
        title: "Síntesis inteligente con IA",
        description:
          "Algoritmos de IA que extraen, resumen y contextualizan la información clave de múltiples fuentes, generando narrativas claras y accionables.",
      },
      {
        title: "Exportación multi-formato",
        description:
          "Generación de informes en múltiples formatos (PDF, Word, Excel, HTML) con integración directa en flujos de trabajo y sistemas corporativos existentes.",
      },
    ],
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
    accentColor: "pangea-sky-blue",
    hexColor: "#06B6D4",
  },
  {
    slug: "dxter",
    name: "DXTER",
    tagline:
      "Optimización inteligente para sistemas complejos bajo restricciones reales.",
    taglineEn:
      "Intelligent optimization for complex systems under real constraints.",
    category: "ai-digital",
    tags: ["data", "ai"],
    description:
      "DxTER es una plataforma basada en Inteligencia Artificial diseñada para acelerar la búsqueda de configuraciones óptimas en problemas con múltiples parámetros y múltiples objetivos. En lugar de evaluar alternativas de forma secuencial o manual, DxTER modeliza el comportamiento del sistema, estima la incertidumbre asociada y propone de forma iterativa las combinaciones más prometedoras dentro del espacio de decisión.",
    features: [
      {
        title: "Captura de evidencias y estructuración del espacio de búsqueda",
        description:
          "Integra resultados observados (ensayos, simulaciones o métricas operativas) y define variables, restricciones y objetivos. El sistema estructura el espacio de búsqueda en torno a factores medibles y respuestas cuantificables, permitiendo abordar problemas complejos de forma ordenada.",
      },
      {
        title: "Modelo sustituto con cuantificación de incertidumbre",
        description:
          "Ajusta un modelo probabilístico (por ejemplo, un Proceso Gaussiano) que actúa como modelo sustituto del sistema real. Este modelo permite predecir resultados en configuraciones no evaluadas y cuantificar explícitamente la incertidumbre en regiones poco exploradas.",
      },
      {
        title: "Optimización bayesiana multiobjetivo",
        description:
          "Optimiza una función de adquisición que equilibra exploración (incertidumbre) y explotación (rendimiento previsto). El sistema propone las configuraciones más informativas y viables bajo las restricciones operativas definidas, convergiendo más rápido hacia soluciones óptimas.",
      },
      {
        title: "Decisión asistida bajo restricciones reales",
        description:
          "Permite reducir drásticamente el número de ensayos necesarios, evaluar compromisos entre objetivos contrapuestos y converger más rápido hacia soluciones viables y óptimas. Es aplicable a optimización de procesos, ajuste estratégico de configuraciones y validación paramétrica en entornos simulados.",
      },
    ],
    icon: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125",
    accentColor: "pangea-sky-blue",
    hexColor: "#198D8F",
    heroImage: "/images/dxter.png",
  },
  {
    slug: "dxter-simulators",
    name: "DXTER SIMULATORS",
    tagline:
      "Simulación avanzada de procesos industriales potenciada por IA, basada en la plataforma DXTER.",
    taglineEn:
      "AI-powered advanced industrial process simulation, built on the DXTER platform.",
    category: "ai-digital",
    tags: ["ai", "data"],
    externalUrl: "https://dxter.ai",
    description:
      "DXTER SIMULATORS es la extensión de la plataforma DXTER orientada a la simulación avanzada de procesos industriales. Aprovecha la inteligencia artificial y los modelos de datos de DXTER para crear simulaciones digitales precisas que permiten modelar, predecir y optimizar procesos productivos de forma virtual antes de su implementación real.",
    features: [],
    icon: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605",
    accentColor: "pangea-sky-blue",
    hexColor: "#0EA5E9",
  },

  // ─── HARDWARE & ELECTRONICS ──────────────────────────────────
  {
    slug: "fpgas",
    name: "FPGAs",
    tagline:
      "Diseño y desarrollo de soluciones basadas en FPGAs para procesamiento de alta velocidad.",
    taglineEn:
      "Design and development of FPGA-based solutions for high-speed processing.",
    category: "hardware-electronics",
    tags: ["hardware"],
    description:
      "Soluciones de diseño y desarrollo basadas en FPGAs (Field-Programmable Gate Arrays) para aplicaciones de procesamiento de alta velocidad y baja latencia en entornos industriales y científicos.",
    features: [
      {
        title: "Procesamiento de alta velocidad",
        description:
          "Diseño de arquitecturas FPGA optimizadas para procesamiento paralelo masivo con latencias del orden de nanosegundos, superando las limitaciones de los procesadores convencionales.",
      },
      {
        title: "Diseño digital a medida",
        description:
          "Desarrollo de IP cores y lógica digital personalizada para requisitos específicos de cada aplicación: adquisición de datos, procesado de señal, control en tiempo real y comunicaciones.",
      },
      {
        title: "Integración con sensórica",
        description:
          "Interfaz directa con sensores y sistemas de adquisición de datos, permitiendo preprocesado en tiempo real y reducción del volumen de información antes de su transmisión o almacenamiento.",
      },
      {
        title: "Entornos críticos y exigentes",
        description:
          "Soluciones validadas para entornos industriales y de defensa con requisitos de fiabilidad, determinismo temporal y resiliencia frente a condiciones ambientales adversas.",
      },
    ],
    icon: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z",
    accentColor: "pangea-calm-blue",
    hexColor: "#F59E0B",
  },
  {
    slug: "sensorica",
    name: "SENSORICA",
    tagline:
      "Desarrollo de sensores avanzados y sistemas de monitorización industrial.",
    taglineEn:
      "Advanced sensor development and industrial monitoring systems.",
    category: "hardware-electronics",
    tags: ["hardware", "data"],
    description:
      "SENSORICA abarca el desarrollo de sensores avanzados y sistemas de monitorización para la adquisición precisa de datos en tiempo real en entornos industriales exigentes.",
    features: [
      {
        title: "Sensores avanzados a medida",
        description:
          "Diseño y desarrollo de sensores especializados adaptados a las necesidades específicas de cada aplicación: acelerómetros, galgas, sensores de temperatura, humedad, presión y vibración.",
      },
      {
        title: "Adquisición de datos en tiempo real",
        description:
          "Sistemas de adquisición de alta frecuencia con sincronización multicanal para capturar señales de múltiples sensores simultáneamente con precisión temporal.",
      },
      {
        title: "Monitorización remota y edge computing",
        description:
          "Arquitectura distribuida con procesamiento en el borde (edge) para reducir latencia, ancho de banda y dependencia de conectividad, con supervisión remota centralizada.",
      },
      {
        title: "Integración con plataformas de IA",
        description:
          "Los datos capturados se integran directamente con las plataformas de IA de TNP (IMAGIA, DxTER) para análisis predictivo, detección de anomalías y mantenimiento anticipado.",
      },
    ],
    icon: "M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z",
    accentColor: "pangea-calm-blue",
    hexColor: "#10B981",
  },

  // ─── MATERIALS & ADVANCED MANUFACTURING ──────────────────────
  {
    slug: "heaters",
    name: "HEATERS",
    tagline:
      "Calentadores serigrafiados integrables con control térmico de alta precisión.",
    taglineEn:
      "Screen-printed integrable heaters with high-precision thermal control.",
    category: "materials-industrial",
    tags: ["nano", "manufacturing"],
    description:
      "HEATERS es una familia de calentadores resistivos serigrafiados, basados en materiales carbonosos flexibles y diseñados para su integración directa sobre o dentro de superficies metálicas o termoplásticas. La arquitectura combina tintas resistivas con capas funcionales dieléctricas, conductoras y de protección mecánica/química, permitiendo desarrollar geometrías a medida con bajo espesor y mínima interferencia estructural.",
    features: [
      {
        title: "Zonificación térmica a medida",
        description:
          "Diseño de pistas calefactables y zonificación térmica que permite adaptar el sistema desde pequeñas áreas de reparación hasta grandes superficies complejas e irregulares, con ajuste preciso al área funcional.",
      },
      {
        title: "Integración estructural",
        description:
          "Integración directa sobre o dentro de superficies metálicas o termoplásticas, con bajo espesor y mínima interferencia estructural. Compatible con geometrías planas y curvadas.",
      },
      {
        title: "Homogeneidad térmica superior",
        description:
          "Operación segura en rango 60–250 °C con máxima homogeneidad térmica. Comparativas internas muestran distribución de temperatura superior frente a mantas comerciales, sin franjas ni diferencias térmicas apreciables.",
      },
      {
        title: "Control de alta precisión",
        description:
          "Compatible con sistemas de alimentación eléctrica estándar e integrables con controladores térmicos a medida. Rampas rápidas, estabilidad sostenida y variaciones inferiores a 0,05 °C bajo condiciones de validación.",
      },
    ],
    icon: "M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z",
    accentColor: "pangea-roast-sand",
    hexColor: "#AC2423",
    heroImage: "/images/Heaters.png",
  },
  {
    slug: "antifriccion",
    name: "ANTIFRICCIÓN",
    tagline:
      "Recubrimientos avanzados basados en nanomateriales para reducir fricción y desgaste en conjuntos mecánicos.",
    taglineEn:
      "Advanced nanomaterial-based coatings to reduce friction and wear in mechanical assemblies.",
    category: "materials-industrial",
    tags: ["nano", "manufacturing"],
    description:
      "ANTIFRICCIÓN es una línea de recubrimientos desarrollados por TNP a partir de compuestos basados en nanomateriales para mejorar el rendimiento de conjuntos mecánicos sometidos a fricción y desgaste. Las formulaciones se han optimizado para ajustar la naturaleza y la cantidad de aditivos, logrando una reducción significativa del coeficiente de fricción (COF) y una protección más estable de la superficie.",
    features: [
      {
        title: "Reducción extrema de fricción",
        description:
          "Reducción del coeficiente de fricción (COF) de 0,77 a 0,15, una disminución aproximada del 85% con impacto directo en eficiencia y vida útil del conjunto.",
      },
      {
        title: "Huella de desgaste x10 menor",
        description:
          "El tratamiento reduce la huella de desgaste en un orden de magnitud, pasando de ~2 mm en piezas sin tratar a ~0,3 mm con recubrimiento TNP.",
      },
      {
        title: "Perfilometría optimizada",
        description:
          "Reducción de la profundidad de huella desde 170–180 µm hasta 10–16 µm, reforzando la estabilidad del recubrimiento en condiciones de trabajo.",
      },
      {
        title: "Formato sprayable o sobre liner",
        description:
          "Aplicación en formato sprayable o mediante recubrimiento previamente depositado sobre liner, facilitando la integración en procesos industriales existentes.",
      },
    ],
    icon: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    accentColor: "pangea-roast-sand",
    hexColor: "#5D3F87",
    heroImage: "/images/Antifriccion.png",
  },
  {
    slug: "hex61",
    name: "HEX61",
    tagline:
      "Plataforma de fabricación aditiva avanzada y prototipado rápido industrial.",
    taglineEn:
      "Advanced additive manufacturing platform and rapid industrial prototyping.",
    category: "materials-industrial",
    tags: ["manufacturing"],
    externalUrl: "https://trisquelmedias1.sg-host.com/",
    description:
      "HEX61 es una plataforma de fabricación aditiva avanzada y prototipado rápido orientada a la producción industrial, permitiendo crear piezas funcionales con geometrías complejas y materiales de alto rendimiento.",
    features: [],
    icon: "M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25",
    accentColor: "pangea-roast-sand",
    hexColor: "#EC4899",
  },

  // ─── BIOTECHNOLOGY ───────────────────────────────────────────
  {
    slug: "arquea",
    name: "ARQUEA",
    tagline:
      "Precisión molecular para garantizar la Salud Pública. Detección temprana de amenazas biológicas.",
    taglineEn:
      "Molecular precision to safeguard Public Health. Early detection of biological threats.",
    category: "biology",
    tags: ["bio"],
    externalUrl: "https://arquea.bio",
    description:
      "Arquea Biological Innovations es una empresa biotecnológica cuya misión es proteger la Salud Pública a través de la detección temprana de cualquier amenaza biológica. Sus productos, basados en biología molecular y con un enfoque innovador y disruptor, ofrecen una solución rápida para la identificación de patógenos, abordando la creciente necesidad de calidad y seguridad alimentaria en los procesos de fabricación. Su producto estrella, el SURFACE LISTERIA KIT basado en la tecnología LifeTrace®, permite detectar Listeria viva in situ, entre 15 y 60 minutos, sin necesidad de cultivo ni personal especializado.",
    features: [
      {
        title: "Tecnología LifeTrace®",
        description:
          "Método molecular patentado con una sensibilidad superior a la de los métodos tradicionales y la capacidad de diferenciar bacterias vivas de muertas, evitando así los falsos positivos que generan otras técnicas como la PCR tradicional.",
      },
      {
        title: "Rapidez y autonomía",
        description:
          "El proceso completo, desde la toma de la muestra hasta la obtención del resultado digital, se realiza en un intervalo de 15 a 60 minutos, sin necesidad de laboratorio, cultivo ni personal técnico especializado.",
      },
      {
        title: "Portabilidad y facilidad de uso",
        description:
          "El kit es portátil, digital y muy fácil de usar. No requiere conocimientos técnicos ni laboratorio. Con el detector se pueden analizar hasta cuatro muestras de forma simultánea y obtener los resultados con reporte automatizado.",
      },
      {
        title: "Validación y trazabilidad",
        description:
          "La tecnología Arquea está en proceso de validación por la AOAC, es compatible con la norma ISO 16140 y ha sido verificada por el CNTA (Centro Nacional de Tecnología Alimentaria). Todos los resultados se integran en la plataforma Arquea con cifrado de extremo a extremo.",
      },
    ],
    icon: "M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5",
    accentColor: "pangea-classic-blue",
    hexColor: "#22C55E",
  },
];

// ─── BACSI Functional Areas (AF1–AF6) → Product mapping ──────

export type FunctionalArea = 1 | 2 | 3 | 4 | 5 | 6;

export interface FunctionalAreaInfo {
  id: FunctionalArea;
  label: string;
  labelEn: string;
  shortLabel: string;
  icon: string;
}

/** Which products belong to each AF (derived from FunctionalAreas.astro data) */
export const afProductMapping: Record<FunctionalArea, string[]> = {
  1: ["fpgas"],
  2: ["heaters", "antifriccion", "planifai"],
  3: ["planifai", "buscai", "dxter"],
  4: ["sensorica", "fpgas", "arquea"],
  5: ["fast-reporting-tool", "imagia", "buscai"],
  6: ["planifai", "buscai", "hex61", "sensorica"],
};

export const functionalAreas: FunctionalAreaInfo[] = [
  { id: 1, label: "AF1 · Conectividad", labelEn: "AF1 · Connectivity", shortLabel: "AF1", icon: "M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5a17.92 17.92 0 0 1-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" },
  { id: 2, label: "AF2 · Energía", labelEn: "AF2 · Energy", shortLabel: "AF2", icon: "M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" },
  { id: 3, label: "AF3 · GIC", labelEn: "AF3 · GIC", shortLabel: "AF3", icon: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" },
  { id: 4, label: "AF4 · Protección", labelEn: "AF4 · Protection", shortLabel: "AF4", icon: "M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" },
  { id: 5, label: "AF5 · Seguridad", labelEn: "AF5 · Safety", shortLabel: "AF5", icon: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" },
  { id: 6, label: "AF6 · Sostenimiento", labelEn: "AF6 · Sustainment", shortLabel: "AF6", icon: "M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 1 1-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 0 0 4.486-6.336l-3.276 3.277a3.004 3.004 0 0 1-2.25-2.25l3.276-3.276a4.5 4.5 0 0 0-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085" },
];

/** Get the AF areas a product belongs to */
export function getProductAfs(slug: string): FunctionalArea[] {
  const result: FunctionalArea[] = [];
  for (const [af, slugs] of Object.entries(afProductMapping)) {
    if (slugs.includes(slug)) result.push(Number(af) as FunctionalArea);
  }
  return result.sort();
}

/** Get products that belong to a given AF */
export function getProductsByAf(af: FunctionalArea): Product[] {
  const slugs = afProductMapping[af] || [];
  return products.filter((p) => slugs.includes(p.slug));
}

// ─── Helpers ──────────────────────────────────────────────────

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: ProductCategory): Product[] {
  return products.filter((p) => p.category === category);
}

export function getProductsByTag(tag: ProductTag): Product[] {
  return products.filter((p) => p.tags.includes(tag));
}

export function getTagInfo(tag: ProductTag): TagInfo | undefined {
  return tags.find((t) => t.id === tag);
}

export function getProductTags(product: Product): TagInfo[] {
  return product.tags
    .map((t) => tags.find((tag) => tag.id === t))
    .filter((t): t is TagInfo => t !== undefined);
}

export function getCategoryInfo(
  category: ProductCategory,
): CategoryInfo | undefined {
  return categories.find((c) => c.id === category);
}

export function getAllSlugs(): string[] {
  return products.map((p) => p.slug);
}

export function getProductUrl(product: Product, baseUrl: string = "/"): string {
  return product.externalUrl ?? `${baseUrl}productos/${product.slug}/`;
}

export function isExternalProduct(product: Product): boolean {
  return !!product.externalUrl;
}

/**
 * Find a product by name with case-insensitive, partial matching.
 * Strips non-alphanumeric characters before comparing.
 */
export function findProductByName(name: string): Product | undefined {
  const lower = name.toLowerCase().replace(/[^a-z\u00e1\u00e9\u00ed\u00f3\u00fa\u00f10-9]/gi, "");
  return products.find((p) => {
    const pLower = p.name.toLowerCase().replace(/[^a-z\u00e1\u00e9\u00ed\u00f3\u00fa\u00f10-9]/gi, "");
    return pLower.includes(lower) || lower.includes(pLower);
  });
}
