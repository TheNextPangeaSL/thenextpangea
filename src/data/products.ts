export interface Product {
  slug: string;
  name: string;
  tagline: string;
  category: ProductCategory;
  tags: ProductTag[];
  description: string;
  features: ProductFeature[];
  icon: string; // SVG path data for a representative icon
  accentColor: string; // Tailwind color class
  hexColor: string; // Hex value for dynamic styles
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
      "Plataforma digital basada en Inteligencia Artificial para el análisis de imágenes y detección de defectos.",
    category: "ai-digital",
    tags: ["ai", "data"],
    description:
      "IMAGIA es una plataforma digital basada en Inteligencia Artificial que automatiza el análisis de imágenes para optimizar procesos de inspección y control de calidad en entornos industriales. Utiliza procesamiento avanzado de imágenes y técnicas modernas de Deep Learning para abordar casos complejos que no suelen resolverse fácilmente con modelos convencionales. La solución, desarrollada por TNP, permite crear modelos adaptados a necesidades reales de producción, reduciendo tiempos de análisis y aumentando la consistencia y confiabilidad en la detección de defectos.",
    features: [
      {
        title: "Precisión y automatización",
        description:
          "Los algoritmos alcanzan alta precisión en la detección de objetos, patrones y anomalías en datos industriales complejos, gracias al análisis de grandes volúmenes de información, automatizando tareas de inspección y reduciendo la intervención manual.",
      },
      {
        title: "Especialización",
        description:
          "Los modelos se ajustan a los datos y condiciones específicas de cada entorno industrial, permitiendo desarrollar soluciones a medida que responden a necesidades concretas de producción, control de calidad e inspección.",
      },
      {
        title: "AI Lifecycle",
        description:
          "La solución permite una mejora continua: a medida que se incorporan nuevos datos y se refinan los modelos, aumenta de forma sostenida la precisión, la efectividad y la capacidad de adaptación a cambios en el proceso.",
      },
      {
        title: "Asistencia en la toma de decisiones",
        description:
          "Integra importación de datos desde distintos formatos y fuentes, con homogeneización posterior para garantizar consistencia y trazabilidad. Ofrece una experiencia de uso fluida e intuitiva, facilitando el trabajo diario y respaldando decisiones estratégicas basadas en datos para mejorar calidad y eficiencia.",
      },
    ],
    icon: "M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    accentColor: "pangea-sky-blue",
    hexColor: "#66CCFF",
  },
  {
    slug: "planifai",
    name: "PLANIFAI",
    tagline: "Integrated Resource Optimization Platform",
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
    hexColor: "#66CCFF",
  },
  {
    slug: "buscai",
    name: "BUSCAI",
    tagline:
      "Motor de búsqueda inteligente potenciado por IA para entornos empresariales.",
    category: "ai-digital",
    tags: ["ai", "data"],
    description:
      "BUSCAI es un motor de búsqueda inteligente potenciado por Inteligencia Artificial, diseñado para entornos empresariales e industriales. Permite localizar, organizar y contextualizar grandes volúmenes de información no estructurada de forma rápida y precisa.",
    features: [],
    icon: "m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z",
    accentColor: "pangea-sky-blue",
    hexColor: "#66CCFF",
  },
  {
    slug: "fast-reporting-tool",
    name: "FAST REPORTING TOOL",
    tagline:
      "Herramienta de generación de informes rápidos y automatizados para entornos industriales.",
    category: "ai-digital",
    tags: ["ai", "data"],
    description:
      "Fast Reporting Tool es una herramienta avanzada para la generación automatizada de informes técnicos y de negocio en entornos industriales. Permite sintetizar datos complejos en reportes claros y accionables en tiempo récord.",
    features: [],
    icon: "M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z",
    accentColor: "pangea-sky-blue",
    hexColor: "#66CCFF",
  },
  {
    slug: "dxter",
    name: "DXTER",
    tagline:
      "Plataforma de extracción y procesamiento inteligente de datos industriales.",
    category: "ai-digital",
    tags: ["data", "ai"],
    externalUrl: "https://dxter.ai",
    description:
      "DXTER es una plataforma de extracción y procesamiento inteligente de datos diseñada para entornos industriales complejos. Facilita la captura, limpieza y estructuración de datos desde múltiples fuentes heterogéneas.",
    features: [],
    icon: "M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125",
    accentColor: "pangea-sky-blue",
    hexColor: "#66CCFF",
  },
  {
    slug: "dxter-simulators",
    name: "DXTER SIMULATORS",
    tagline:
      "Simulación avanzada de procesos industriales potenciada por IA, basada en la plataforma DXTER.",
    category: "ai-digital",
    tags: ["ai", "data"],
    description:
      "DXTER SIMULATORS es la extensión de la plataforma DXTER orientada a la simulación avanzada de procesos industriales. Aprovecha la inteligencia artificial y los modelos de datos de DXTER para crear simulaciones digitales precisas que permiten modelar, predecir y optimizar procesos productivos de forma virtual antes de su implementación real.",
    features: [],
    icon: "M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605",
    accentColor: "pangea-sky-blue",
    hexColor: "#66CCFF",
  },

  // ─── HARDWARE & ELECTRONICS ──────────────────────────────────
  {
    slug: "fpgas",
    name: "FPGAs",
    tagline:
      "Diseño y desarrollo de soluciones basadas en FPGAs para procesamiento de alta velocidad.",
    category: "hardware-electronics",
    tags: ["hardware"],
    description:
      "Soluciones de diseño y desarrollo basadas en FPGAs (Field-Programmable Gate Arrays) para aplicaciones de procesamiento de alta velocidad y baja latencia en entornos industriales y científicos.",
    features: [],
    icon: "M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 19.5V21M12 3v1.5m0 15V21m3.75-18v1.5m0 15V21m-9-1.5h10.5a2.25 2.25 0 0 0 2.25-2.25V6.75a2.25 2.25 0 0 0-2.25-2.25H6.75A2.25 2.25 0 0 0 4.5 6.75v10.5a2.25 2.25 0 0 0 2.25 2.25Zm.75-12h9v9h-9v-9Z",
    accentColor: "pangea-calm-blue",
    hexColor: "#88B0D8",
  },
  {
    slug: "sensorica",
    name: "SENSORICA",
    tagline:
      "Desarrollo de sensores avanzados y sistemas de monitorización industrial.",
    category: "hardware-electronics",
    tags: ["hardware", "data"],
    description:
      "SENSORICA abarca el desarrollo de sensores avanzados y sistemas de monitorización para la adquisición precisa de datos en tiempo real en entornos industriales exigentes.",
    features: [],
    icon: "M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425 2.121a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546M5.106 18.894c-3.808-3.807-3.808-9.98 0-13.788m13.788 0c3.808 3.807 3.808 9.98 0 13.788M12 12h.008v.008H12V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z",
    accentColor: "pangea-calm-blue",
    hexColor: "#88B0D8",
  },

  // ─── MATERIALS & ADVANCED MANUFACTURING ──────────────────────
  {
    slug: "heaters",
    name: "HEATERS",
    tagline:
      "Sistemas de calentamiento de alta eficiencia para procesos industriales.",
    category: "materials-industrial",
    tags: ["nano", "manufacturing"],
    description:
      "HEATERS engloba el diseño y desarrollo de sistemas de calentamiento de alta eficiencia para procesos industriales, con tecnología avanzada de control térmico y materiales de última generación.",
    features: [],
    icon: "M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z",
    accentColor: "pangea-roast-sand",
    hexColor: "#C5BCA4",
  },
  {
    slug: "antifriccion",
    name: "ANTIFRICCIÓN",
    tagline:
      "Materiales y recubrimientos antifricción de nueva generación para la industria.",
    category: "materials-industrial",
    tags: ["nano", "manufacturing"],
    description:
      "ANTIFRICCIÓN abarca el desarrollo de materiales y recubrimientos de nueva generación diseñados para minimizar la fricción y el desgaste en componentes industriales críticos.",
    features: [],
    icon: "M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z",
    accentColor: "pangea-roast-sand",
    hexColor: "#C5BCA4",
  },
  {
    slug: "hex61",
    name: "HEX61",
    tagline:
      "Plataforma de fabricación aditiva avanzada y prototipado rápido industrial.",
    category: "materials-industrial",
    tags: ["manufacturing"],
    description:
      "HEX61 es una plataforma de fabricación aditiva avanzada y prototipado rápido orientada a la producción industrial, permitiendo crear piezas funcionales con geometrías complejas y materiales de alto rendimiento.",
    features: [],
    icon: "M21 7.5l-2.25-1.313M21 7.5v2.25m0-2.25l-2.25 1.313M3 7.5l2.25-1.313M3 7.5l2.25 1.313M3 7.5v2.25m9 3l2.25-1.313M12 12.75l-2.25-1.313M12 12.75V15m0 6.75l2.25-1.313M12 21.75V19.5m0 2.25l-2.25-1.313m0-16.875L12 2.25l2.25 1.313M21 14.25v2.25l-2.25 1.313m-13.5 0L3 16.5v-2.25",
    accentColor: "pangea-roast-sand",
    hexColor: "#C5BCA4",
  },

  // ─── BIOTECHNOLOGY ───────────────────────────────────────────
  {
    slug: "arquea",
    name: "ARQUEA",
    tagline:
      "Precisión molecular para garantizar la Salud Pública. Detección temprana de amenazas biológicas.",
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
    hexColor: "#336699",
  },
];

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
  return product.externalUrl ?? `${baseUrl}productos/${product.slug}`;
}

export function isExternalProduct(product: Product): boolean {
  return !!product.externalUrl;
}
