export interface Product {
  slug: string;
  name: string;
  tagline: string;
  taglineEn: string;
  category: ProductCategory;
  tags: ProductTag[];
  description: string;
  descriptionEn: string;
  features: ProductFeature[];
  featuresEn: ProductFeature[];
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
  | "ai"
  | "materials"
  | "additive-manufacturing"
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
    id: "ai",
    label: "Inteligencia Artificial",
    labelEn: "Artificial Intelligence",
    description:
      "Soluciones basadas en IA, machine learning, edge computing y análisis de datos para la transformación digital industrial.",
    descriptionEn:
      "AI, machine learning, edge computing and data analysis solutions for industrial digital transformation.",
    icon: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z",
    accentColor: "pangea-sky-blue",
  },
  {
    id: "materials",
    label: "Ciencia de Materiales",
    labelEn: "Materials Science",
    description:
      "Materiales funcionales, sensórica avanzada, electrónica impresa y recubrimientos para entornos industriales exigentes.",
    descriptionEn:
      "Functional materials, advanced sensorics, printed electronics and coatings for demanding industrial environments.",
    icon: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    accentColor: "pangea-roast-sand",
  },
  {
    id: "additive-manufacturing",
    label: "Fabricación Aditiva",
    labelEn: "Additive Manufacturing",
    description:
      "Simulación, fabricación aditiva metálica y caracterización avanzada para la industrialización de componentes de alto rendimiento.",
    descriptionEn:
      "Simulation, metal additive manufacturing and advanced characterization for the industrialization of high-performance components.",
    icon: "M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25",
    accentColor: "pangea-calm-blue",
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
  // ─── INTELIGENCIA ARTIFICIAL ──────────────────────────────────
  {
    slug: "imagia",
    name: "IMAGIA",
    tagline:
      "Detección automática de defectos y anomalías en imágenes de inspección.",
    taglineEn:
      "Automatic detection of defects and anomalies in inspection images.",
    category: "ai",
    tags: ["ai", "data"],
    description:
      "Plataforma para el tratamiento de imágenes de mantenimiento aeronáutico basada en IA, para acelerar inspecciones, mejorar la consistencia y respaldar decisiones técnicas con trazabilidad.",
    descriptionEn:
      "AI-based platform for aeronautical maintenance image processing, accelerating inspections, improving consistency and supporting technical decisions with traceability.",
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
    featuresEn: [
      {
        title: "Cloud & on-premise",
        description:
          "Flexible deployment in the cloud or on local infrastructure, adapting to the security and connectivity requirements of each organization.",
      },
      {
        title: "Lightweight (web platform)",
        description:
          "Lightweight web platform accessible from any browser, without the need for heavy installations or specialized hardware at the workstation.",
      },
      {
        title: "User-friendly",
        description:
          "Intuitive interface designed so that operators and engineers can manage data, train models and validate results without advanced programming knowledge.",
      },
      {
        title: "SOTA Deep Learning",
        description:
          "Incorporates state-of-the-art Deep Learning techniques to address complex detection and classification cases that cannot be solved with conventional models.",
      },
    ],
    icon: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    accentColor: "pangea-sky-blue",
    hexColor: "#1FA971",
    heroImage: "/images/Imagia.png",
  },
  {
    slug: "planifai",
    name: "PLANIFAI",
    tagline: "Planificación predictiva de recursos en entornos complejos.",
    taglineEn: "Predictive resource planning in complex environments.",
    category: "ai",
    tags: ["ai", "data"],
    description:
      "Optimización avanzada de la cadena de suministro: Estrategia, Predicción y Planificación, mediante modelos de análisis de datos e inteligencia artificial.",
    descriptionEn:
      "Advanced supply chain optimization: Strategy, Prediction and Planning, through data analysis models and artificial intelligence.",
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
    featuresEn: [
      {
        title: "Demand forecasting and anticipation",
        description:
          "The system incorporates advanced forecasting models capable of handling complex consumption patterns -- intermittent, erratic or highly variable -- providing more accurate estimates than traditional methods. It enables anticipating demand variations, optimizing stock levels and improving product availability while simultaneously reducing operational costs.",
      },
      {
        title: "Comprehensive process modeling",
        description:
          "The platform allows detailed modeling of production processes and available resources: plants, production lines, equipment, human resources and materials. Each task can be defined with its durations, dependencies, capacity constraints and availability schedules.",
      },
      {
        title: "Multi-objective optimization",
        description:
          "Based on the forecast and the defined model, the algorithmic engine automatically calculates the best assignment of tasks and resources over time. The system can optimize one or several objectives simultaneously, such as minimizing delays, reducing costs, maximizing critical asset utilization or minimizing operational risks. It incorporates probabilistic uncertainty treatment and partial re-scheduling capabilities for unforeseen events.",
      },
      {
        title: "Application in production and advanced maintenance",
        description:
          "The technology has been successfully applied in both industrial environments and high-criticality contexts. Notably, it has been used for the optimization of the maintenance plan for the Spanish Air and Space Force aircraft fleet, demonstrating that optimization not only improves production processes but also the strategic management of critical assets.",
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
      "Plataforma de recuperación inteligente de información técnica.",
    taglineEn:
      "Intelligent technical information retrieval platform.",
    category: "ai",
    tags: ["ai", "data"],
    description:
      "BuscAI transforma repositorios documentales complejos en una base de conocimiento interactiva, consultable en lenguaje natural, con máxima precisión y trazabilidad directa de la fuente original.",
    descriptionEn:
      "BuscAI transforms complex document repositories into an interactive knowledge base, queryable in natural language, with maximum precision and direct traceability to the original source.",
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
    featuresEn: [
      {
        title: "Advanced semantic search",
        description:
          "Language model-based search engine that understands the meaning of queries, not just keywords, enabling the retrieval of relevant information even when terminology varies.",
      },
      {
        title: "Enterprise document indexing",
        description:
          "Automatic processing and indexing of technical documents, manuals, regulations and internal knowledge bases in multiple formats (PDF, Word, Excel, images).",
      },
      {
        title: "AI-contextualized responses",
        description:
          "Generation of grounded responses from corporate documentation, with references to original sources to ensure traceability and verifiability.",
      },
      {
        title: "Corporate integration",
        description:
          "On-premise or private cloud deployment, with full control over information. Compatible with existing document management systems and workflows.",
      },
    ],
    icon: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
    accentColor: "pangea-sky-blue",
    hexColor: "#D4A017",
    heroImage: "/images/buscai-bg.png",
  },
  {
    slug: "fast-reporting-tool",
    name: "FAST REPORTING TOOL",
    tagline:
      "Automatización inteligente de informes de Ensayos No Destructivos.",
    taglineEn:
      "Intelligent automation of Non-Destructive Testing reports.",
    category: "ai",
    tags: ["ai", "data"],
    description:
      "Digitaliza y automatiza el proceso de inspección END: desde la orden de trabajo y la captura de evidencias hasta la generación automática del informe final listo para revisión y firma.",
    descriptionEn:
      "Digitizes and automates the NDT inspection process: from the work order and evidence capture to the automatic generation of the final report ready for review and signature.",
    features: [
      {
        title: "Automatización del informe END",
        description:
          "Desde la ODM y la evidencia del ensayo hasta el PDF final, con plantillas estandarizadas que garantizan consistencia y reducen errores manuales.",
      },
      {
        title: "Flujo guiado y homogéneo",
        description:
          "Propone los ensayos aplicables según la orden de trabajo y asegura que el registro siga un proceso consistente y estandarizado en cada inspección.",
      },
      {
        title: "Control de equipos y calibración",
        description:
          "Valida la disponibilidad y el estado de calibración de los equipos antes de cada ensayo, evitando usos no conformes.",
      },
      {
        title: "Evidencias y anomalías integradas",
        description:
          "Captura fotográfica requerida por el procedimiento y documentación estructurada de defectos y observaciones.",
      },
      {
        title: "Firma, trazabilidad y archivo",
        description:
          "Revisión y firma por perfiles autorizados, con histórico centralizado de informes y evidencias para auditorías y consultas.",
      },
    ],
    featuresEn: [
      {
        title: "NDT report automation",
        description:
          "From the work order and test evidence to the final PDF, with standardized templates that ensure consistency and reduce manual errors.",
      },
      {
        title: "Guided and uniform workflow",
        description:
          "Proposes applicable tests based on the work order and ensures that records follow a consistent and standardized process for each inspection.",
      },
      {
        title: "Equipment and calibration control",
        description:
          "Validates equipment availability and calibration status before each test, preventing non-conforming use.",
      },
      {
        title: "Integrated evidence and anomalies",
        description:
          "Photographic capture required by the procedure and structured documentation of defects and observations.",
      },
      {
        title: "Signature, traceability and archiving",
        description:
          "Review and signature by authorized profiles, with centralized report and evidence history for audits and queries.",
      },
    ],
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
    accentColor: "pangea-sky-blue",
    hexColor: "#6B5CF6",
    heroImage: "/images/fast-reporting-bg.png",
  },
  {
    slug: "dxter",
    name: "DXTER",
    tagline:
      "Optimización inteligente para sistemas complejos bajo restricciones reales.",
    taglineEn:
      "Intelligent optimization for complex systems under real constraints.",
    category: "ai",
    tags: ["data", "ai"],
    description:
      "Acelera la toma de decisiones en entornos complejos mediante modelos con estimación de incertidumbre y selección inteligente de candidatos.",
    descriptionEn:
      "Accelerates decision-making in complex environments through models with uncertainty estimation and intelligent candidate selection.",
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
    featuresEn: [
      {
        title: "Evidence capture and search space structuring",
        description:
          "Integrates observed results (tests, simulations or operational metrics) and defines variables, constraints and objectives. The system structures the search space around measurable factors and quantifiable responses, enabling complex problems to be addressed in an orderly manner.",
      },
      {
        title: "Surrogate model with uncertainty quantification",
        description:
          "Fits a probabilistic model (e.g., a Gaussian Process) that acts as a surrogate model of the real system. This model enables predicting results for unevaluated configurations and explicitly quantifying uncertainty in underexplored regions.",
      },
      {
        title: "Multi-objective Bayesian optimization",
        description:
          "Optimizes an acquisition function that balances exploration (uncertainty) and exploitation (predicted performance). The system proposes the most informative and feasible configurations under the defined operational constraints, converging faster toward optimal solutions.",
      },
      {
        title: "Assisted decision-making under real constraints",
        description:
          "Enables drastically reducing the number of required tests, evaluating trade-offs between competing objectives and converging faster toward viable and optimal solutions. Applicable to process optimization, strategic configuration tuning and parametric validation in simulated environments.",
      },
    ],
    icon: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125",
    accentColor: "pangea-sky-blue",
    hexColor: "#198D8F",
    heroImage: "/images/dxter-bg.png",
  },
  {
    slug: "dxter-simulators",
    name: "DXTER SIMULATORS",
    tagline:
      "Optimización inteligente para entornos de simulación complejos.",
    taglineEn:
      "Intelligent optimization for complex simulation environments.",
    category: "ai",
    tags: ["ai", "data"],
    description:
      "Explora automáticamente miles de configuraciones, ejecuta simulaciones externas y converge rápidamente hacia soluciones óptimas bajo restricciones operativas reales.",
    descriptionEn:
      "Automatically explores thousands of configurations, runs external simulations and rapidly converges toward optimal solutions under real operational constraints.",
    features: [
      {
        title: "Integración nativa con simuladores",
        description:
          "Se acopla al flujo de ejecución de software de simulación (FEM, CFD, multifísica) como capa de decisión, seleccionando automáticamente las configuraciones más prometedoras a evaluar en cada iteración.",
      },
      {
        title: "Reducción de tiempo de cálculo",
        description:
          "Minimiza el número de ejecuciones del simulador necesarias para converger hacia soluciones óptimas, reduciendo costes computacionales y tiempos de proyecto de semanas a días.",
      },
      {
        title: "Modelo sustituto adaptativo",
        description:
          "Construye y refina un modelo probabilístico del espacio de resultados del simulador, permitiendo predecir zonas prometedoras sin necesidad de ejecutar la simulación completa.",
      },
      {
        title: "Optimización multiobjetivo bajo restricciones",
        description:
          "Gestiona múltiples funciones objetivo y restricciones operativas simultáneamente, identificando frentes de Pareto y configuraciones viables en espacios paramétricos de alta dimensión.",
      },
    ],
    featuresEn: [
      {
        title: "Native simulator integration",
        description:
          "Couples with the execution workflow of simulation software (FEM, CFD, multiphysics) as a decision layer, automatically selecting the most promising configurations to evaluate at each iteration.",
      },
      {
        title: "Computation time reduction",
        description:
          "Minimizes the number of simulator executions needed to converge toward optimal solutions, reducing computational costs and project timelines from weeks to days.",
      },
      {
        title: "Adaptive surrogate model",
        description:
          "Builds and refines a probabilistic model of the simulator's result space, enabling the prediction of promising regions without running the full simulation.",
      },
      {
        title: "Multi-objective optimization under constraints",
        description:
          "Manages multiple objective functions and operational constraints simultaneously, identifying Pareto fronts and feasible configurations in high-dimensional parameter spaces.",
      },
    ],
    icon: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605",
    accentColor: "pangea-sky-blue",
    hexColor: "#2F5BD6",
    heroImage: "/images/sim-bg.png",
  },

  {
    slug: "fpgas",
    name: "Edge AI / FPGAs",
    tagline:
      "Inteligencia artificial embebida para dispositivos autónomos.",
    taglineEn:
      "Embedded artificial intelligence for autonomous devices.",
    category: "ai",
    tags: ["hardware"],
    description:
      "Arquitecturas de IA desplegadas directamente en hardware embebido capaces de procesar datos en tiempo real con latencia mínima, autonomía operativa y alta eficiencia energética.",
    descriptionEn:
      "AI architectures deployed directly on embedded hardware capable of real-time data processing with minimal latency, operational autonomy and high energy efficiency.",
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
    featuresEn: [
      {
        title: "High-speed processing",
        description:
          "Design of FPGA architectures optimized for massive parallel processing with nanosecond-level latencies, overcoming the limitations of conventional processors.",
      },
      {
        title: "Custom digital design",
        description:
          "Development of custom IP cores and digital logic for application-specific requirements: data acquisition, signal processing, real-time control and communications.",
      },
      {
        title: "Sensor integration",
        description:
          "Direct interface with sensors and data acquisition systems, enabling real-time preprocessing and data volume reduction before transmission or storage.",
      },
      {
        title: "Critical and demanding environments",
        description:
          "Solutions validated for industrial and defense environments with requirements for reliability, timing determinism and resilience against adverse environmental conditions.",
      },
    ],
    icon: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z",
    accentColor: "pangea-calm-blue",
    hexColor: "#0c7907",
    heroImage: "/images/fpgas-bg.png",
  },

  // ─── CIENCIA DE MATERIALES ───────────────────────────────────
  {
    slug: "sensorica",
    name: "SENSÓRICA",
    tagline:
      "Sensores impresos para monitorización avanzada de integridad estructural.",
    taglineEn:
      "Printed sensors for advanced structural integrity monitoring.",
    category: "materials",
    tags: ["hardware", "data"],
    description:
      "Diseño y fabricación de sensores por electrónica impresa capaces de detectar deformaciones, impactos y grietas directamente sobre estructuras metálicas o composites.",
    descriptionEn:
      "Design and manufacture of printed electronics sensors capable of detecting deformations, impacts and cracks directly on metallic structures or composites.",
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
    featuresEn: [
      {
        title: "Custom advanced sensors",
        description:
          "Design and development of specialized sensors tailored to the specific needs of each application: accelerometers, strain gauges, temperature, humidity, pressure and vibration sensors.",
      },
      {
        title: "Real-time data acquisition",
        description:
          "High-frequency acquisition systems with multi-channel synchronization to capture signals from multiple sensors simultaneously with temporal precision.",
      },
      {
        title: "Remote monitoring and edge computing",
        description:
          "Distributed architecture with edge processing to reduce latency, bandwidth and connectivity dependency, with centralized remote supervision.",
      },
      {
        title: "Integration with AI platforms",
        description:
          "Captured data integrates directly with TNP's AI platforms (IMAGIA, DxTER) for predictive analysis, anomaly detection and anticipatory maintenance.",
      },
    ],
    icon: "M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z",
    heroImage: "/images/sensorica-bg.png",
    accentColor: "pangea-calm-blue",
    hexColor: "#1C7CA6",
  },

  {
    slug: "heaters",
    name: "HEATERS",
    tagline:
      "Calentadores serigrafiados con control térmico de alta precisión.",
    taglineEn:
      "Screen-printed heaters with high-precision thermal control.",
    category: "materials",
    tags: ["nano", "manufacturing"],
    description:
      "Diseño y fabricación de calentadores resistivos impresos para utilización directa sobre o dentro de superficies metálicas o termoplásticas, con operación segura y uniforme entre 60 y 250 °C.",
    descriptionEn:
      "Design and manufacture of printed resistive heaters for direct use on or within metallic or thermoplastic surfaces, with safe and uniform operation between 60 and 250 °C.",
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
    featuresEn: [
      {
        title: "Custom thermal zoning",
        description:
          "Design of heatable tracks and thermal zoning that allows adapting the system from small repair areas to large complex and irregular surfaces, with precise adjustment to the functional area.",
      },
      {
        title: "Structural integration",
        description:
          "Direct integration onto or within metallic or thermoplastic surfaces, with low thickness and minimal structural interference. Compatible with flat and curved geometries.",
      },
      {
        title: "Superior thermal homogeneity",
        description:
          "Safe operation in the 60-250 degrees C range with maximum thermal homogeneity. Internal comparisons show superior temperature distribution compared to commercial blankets, without noticeable thermal strips or differences.",
      },
      {
        title: "High-precision control",
        description:
          "Compatible with standard electrical power supply systems and integrable with custom thermal controllers. Fast ramps, sustained stability and variations below 0.05 degrees C under validation conditions.",
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
      "Recubrimientos avanzados para reducir fricción y desgaste en conjuntos mecánicos.",
    taglineEn:
      "Advanced coatings to reduce friction and wear in mechanical assemblies.",
    category: "materials",
    tags: ["nano", "manufacturing"],
    description:
      "Formulaciones basadas en nanomateriales diseñadas para disminuir el coeficiente de fricción, reducir la huella de desgaste y extender significativamente la vida útil de componentes críticos.",
    descriptionEn:
      "Nanomaterial-based formulations designed to reduce the coefficient of friction, minimize the wear footprint and significantly extend the service life of critical components.",
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
    featuresEn: [
      {
        title: "Extreme friction reduction",
        description:
          "Reduction of the coefficient of friction (COF) from 0.77 to 0.15, an approximate 85% decrease with direct impact on efficiency and assembly service life.",
      },
      {
        title: "10x smaller wear scar",
        description:
          "The treatment reduces the wear scar by an order of magnitude, going from ~2 mm on untreated parts to ~0.3 mm with TNP coating.",
      },
      {
        title: "Optimized profilometry",
        description:
          "Reduction of scar depth from 170-180 um to 10-16 um, reinforcing coating stability under working conditions.",
      },
      {
        title: "Sprayable or liner-backed format",
        description:
          "Application in sprayable format or via coating previously deposited on a liner, facilitating integration into existing industrial processes.",
      },
    ],
    icon: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    accentColor: "pangea-roast-sand",
    hexColor: "#5D3F87",
    heroImage: "/images/Antifriccion.png",
  },

  // ─── FABRICACIÓN ADITIVA ─────────────────────────────────────
  {
    slug: "aditive-algorithm",
    name: "ADD2MAN",
    tagline:
      "Simulación termomecánica y optimización algorítmica para fabricación aditiva metálica.",
    taglineEn:
      "Thermomechanical simulation and algorithmic optimization for metal additive manufacturing.",
    category: "additive-manufacturing",
    tags: ["manufacturing", "ai"],
    description:
      "ADD2MAN permite predecir el comportamiento antes del proceso de fabricación y ajustar adaptativamente los parámetros de impresión para reducir defectos y acelerar la cualificación de componentes metálicos complejos.",
    descriptionEn:
      "ADD2MAN enables predicting behavior before the manufacturing process and adaptively adjusting printing parameters to reduce defects and accelerate the qualification of complex metal components.",
    features: [
      {
        title: "Plataforma ADD2MAN",
        description:
          "Plataforma propietaria basada en modelos FEM de proceso aditivo que predice distorsión geométrica, acumulación térmica, fisuración y tensiones residuales, integrando algoritmos de optimización que ajustan parámetros de fabricación de forma dinámica.",
      },
      {
        title: "Control adaptativo capa a capa",
        description:
          "A diferencia de los enfoques convencionales con parámetros constantes, el control algorítmico adapta potencia láser y velocidad de escaneo capa a capa en función de la geometría y del historial térmico de la pieza.",
      },
      {
        title: "Optimización multiláser patentada",
        description:
          "Tecnología patentada de optimización multiláser para LPBF, capaz de reducir los tiempos de fabricación más de un 25% sin comprometer la calidad metalúrgica (densidad superior al 99,9%).",
      },
      {
        title: "Eliminación del prueba y error",
        description:
          "La simulación predictiva permite cualificar materiales y procesos sin los ciclos iterativos de experimentación convencionales, acelerando la puesta en producción.",
      },
    ],
    featuresEn: [
      {
        title: "ADD2MAN Platform",
        description:
          "Proprietary platform based on additive process FEM models that predicts geometric distortion, thermal accumulation, cracking and residual stresses, integrating optimization algorithms that dynamically adjust manufacturing parameters.",
      },
      {
        title: "Layer-by-layer adaptive control",
        description:
          "Unlike conventional approaches with constant parameters, the algorithmic control adapts laser power and scan speed layer by layer based on the geometry and thermal history of the part.",
      },
      {
        title: "Patented multi-laser optimization",
        description:
          "Patented multi-laser optimization technology for LPBF, capable of reducing manufacturing times by more than 25% without compromising metallurgical quality (density above 99.9%).",
      },
      {
        title: "Elimination of trial and error",
        description:
          "Predictive simulation enables qualifying materials and processes without conventional iterative experimentation cycles, accelerating production readiness.",
      },
    ],
    icon: "M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z",
    accentColor: "pangea-roast-sand",
    hexColor: "#286181",
    heroImage: "/images/add2man-bg.png",
  },
  {
    slug: "aditive-manufacturing",
    name: "ADDITIVE MANUFACTURING",
    tagline:
      "Fabricación aditiva metálica.",
    taglineEn:
      "Metal additive manufacturing.",
    category: "additive-manufacturing",
    tags: ["manufacturing"],
    description:
      "Del desarrollo de materiales a la pieza funcional y certificable. 61HEX integra simulación, fabricación avanzada, caracterización y post-procesado para acelerar la industrialización de componentes metálicos.",
    descriptionEn:
      "From material development to the functional and certifiable part. 61HEX integrates simulation, advanced manufacturing, characterization and post-processing to accelerate the industrialization of metal components.",
    features: [
      {
        title: "Multi-tecnología de fabricación",
        description:
          "Ecosistema que incluye LPBF, WAAM y WLAM, además de línea de prototipado en polímero. La elección del proceso óptimo forma parte del propio proyecto de desarrollo.",
      },
      {
        title: "Materiales de alto rendimiento",
        description:
          "Trabajo habitual con Ti6Al4V, In718, In625, Scalmalloy, AlSi10Mg, 17-4PH, 316L y aceros de herramienta, con parámetros adaptados al nivel de madurez tecnológica (TRL).",
      },
      {
        title: "Caracterización avanzada",
        description:
          "Tomografía computerizada (CT Scan), ensayos mecánicos (ASTM E8, Charpy), microscopía SEM/LOM, difracción XRD, certificación de polvo metálico y metrología 3D.",
      },
      {
        title: "Post-procesado integrado",
        description:
          "Tratamientos térmicos, electropulido seco, sandblasting y mecanizado EDM, permitiendo entregar componentes funcionales listos para integración.",
      },
    ],
    featuresEn: [
      {
        title: "Multi-technology manufacturing",
        description:
          "Ecosystem that includes LPBF, WAAM and WLAM, plus a polymer prototyping line. Selecting the optimal process is part of the development project itself.",
      },
      {
        title: "High-performance materials",
        description:
          "Regular work with Ti6Al4V, In718, In625, Scalmalloy, AlSi10Mg, 17-4PH, 316L and tool steels, with parameters adapted to the technology readiness level (TRL).",
      },
      {
        title: "Advanced characterization",
        description:
          "Computed tomography (CT Scan), mechanical testing (ASTM E8, Charpy), SEM/LOM microscopy, XRD diffraction, metal powder certification and 3D metrology.",
      },
      {
        title: "Integrated post-processing",
        description:
          "Heat treatments, dry electropolishing, sandblasting and EDM machining, enabling delivery of functional components ready for integration.",
      },
    ],
    icon: "M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25",
    heroImage: "/images/aditive/aditive-bg.png",
    accentColor: "pangea-roast-sand",
    hexColor: "#286181",
  },

  // ─── BIOTECHNOLOGY ───────────────────────────────────────────
  {
    slug: "arquea",
    name: "ARQUEA",
    tagline:
      "Detección microbiológica avanzada para bioseguridad y protección estratégica.",
    taglineEn:
      "Advanced microbiological detection for biosecurity and strategic protection.",
    category: "biology",
    tags: ["bio"],
    description:
      "Plataforma orientada a la identificación rápida y fiable de microorganismos en entornos críticos, con aplicación actual en seguridad alimentaria y arquitectura escalable hacia bioseguridad y defensa biológica.",
    descriptionEn:
      "Platform focused on the rapid and reliable identification of microorganisms in critical environments, with current application in food safety and scalable architecture toward biosecurity and biological defense.",
    features: [
      {
        title: "Detección de alta sensibilidad",
        description:
          "Plataforma optimizada para identificar microorganismos vivos o material genético específico incluso en condiciones complejas, con tiempos de análisis drásticamente reducidos respecto a métodos tradicionales.",
      },
      {
        title: "Seguridad alimentaria",
        description:
          "Identificación de patógenos críticos como Listeria monocytogenes, Salmonella spp. y Escherichia coli en la cadena de producción agroalimentaria, con resultados digitales trazables.",
      },
      {
        title: "Aplicaciones de bioseguridad y defensa",
        description:
          "Arquitectura escalable hacia detección de agentes biológicos de riesgo, protección de infraestructuras críticas y monitorización microbiológica en entornos operativos.",
      },
      {
        title: "Análisis automatizado y trazable",
        description:
          "Sistema automatizado que reduce tiempos de incubación y diagnóstico, generando resultados digitales con trazabilidad completa para respuesta rápida ante contaminaciones.",
      },
    ],
    featuresEn: [
      {
        title: "High-sensitivity detection",
        description:
          "Platform optimized to identify living microorganisms or specific genetic material even under complex conditions, with drastically reduced analysis times compared to traditional methods.",
      },
      {
        title: "Food safety",
        description:
          "Identification of critical pathogens such as Listeria monocytogenes, Salmonella spp. and Escherichia coli in the agri-food production chain, with traceable digital results.",
      },
      {
        title: "Biosecurity and defense applications",
        description:
          "Scalable architecture toward detection of biological risk agents, protection of critical infrastructure and microbiological monitoring in operational environments.",
      },
      {
        title: "Automated and traceable analysis",
        description:
          "Automated system that reduces incubation and diagnosis times, generating digital results with full traceability for rapid response to contaminations.",
      },
    ],
    icon: "M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5",
    accentColor: "pangea-classic-blue",
    hexColor: "#104988",
    heroImage: "/images/arquea/arquea-bg.png",
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
  1: [],
  2: ["heaters", "antifriccion", "planifai"],
  3: ["planifai", "buscai", "dxter", "fpgas"],
  4: ["sensorica", "fpgas", "arquea"],
  5: ["fast-reporting-tool", "imagia", "buscai"],
  6: ["planifai", "buscai", "sensorica", "fpgas"],
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
