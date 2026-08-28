import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
    Target,
    TrendingUp,
    CheckCircle,
    Users,
    Search,
    Layout,
    Zap,
    BarChart
} from 'lucide-react';

// Animation Variants
const staggerContainer: Variants = {
    initial: {},
    animate: {
        transition: {
            staggerChildren: 0.15
        }
    }
};

const fadeInUp: Variants = {
    initial: { opacity: 0, y: 40 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.25, 1, 0.5, 1] }
    }
};

// ==========================================
// PROJECT DATA DEFINITION
// ==========================================

interface ProjectData {
    title: string;
    subtitle: string;
    heroImage: string;
    overview: string;
    problem: string;
    metadata: Record<string, string>;
    personas: {
        name: string;
        role: string;
        goals: string;
        frustrations: string;
        phrase?: string;
    }[];
    process: {
        icon: React.ReactNode;
        title: string;
        desc: string;
    }[];
    outcomes: {
        label?: string;
        text: string;
        icon: React.ReactNode;
    }[];
    sectionLabels?: {
        challenge?: string;
        pivot?: string;
        process?: string;
        gallery?: string;
    };
    pivotLabels?: {
        hypothesis?: string;
        insight?: string;
        solution?: string;
    };
    galleryIntro?: string;
    reflection?: {
        title: string;
        text: string;
    };
    showTestimonial?: boolean;
    seo?: {
        title?: string;
        description?: string;
    };
    testimonial: {
        title: string;
        text: string;
        author: string;
        authorInitials: string;
        company: string;
    };
    liveUrl?: string;
    pivot?: {
        hypothesis: string;
        insight: string;
        solution: string;
    };
    gallery?: {
        image: string;
        title: string;
        category: string;
        aspectRatio?: 'video' | 'portrait' | 'square';
    }[];
}

// eslint-disable-next-line react-refresh/only-export-components
export const PROJECTS_DATA: Record<string, ProjectData> = {
    "ecovis": {
        title: "Ecovis México: De sitio corporativo a herramienta comercial",
        subtitle: "Rediseño de un sitio B2B para comunicar mejor el valor de sus soluciones y facilitar el contacto con nuevos prospectos.",
        heroImage: "/projects/ecovis/b2b-leads.png",
        overview: "Años después de haber desarrollado el primer sitio de Ecovis, el equipo de Marketing volvió a contactarme por algunos problemas con el blog. La solicitud parecía puntual, pero al revisar el sitio completo encontré un problema mayor:",
        problem: "años de modificaciones habían dejado navegaciones diferentes, estilos inconsistentes, problemas de rendimiento y una experiencia fragmentada entre páginas. La oportunidad dejó de ser reparar el blog y pasó a ser replantear cómo Ecovis utilizaba su sitio para presentar sus soluciones y generar oportunidades comerciales.",
        metadata: {
            Industry: "Industrial / Energía",
            "My Role": "Product Designer & Webflow Developer",
            Deliverables: "UX/UI, Information Architecture, Web Design",
            Timeline: "Rediseño"
        },
        sectionLabels: {
            challenge: "Un sitio que había crecido sin una dirección clara.",
            pivot: "Entender qué necesitaba comunicar el sitio.",
            process: "Cómo tomó forma.",
            gallery: "Evidencia visual."
        },
        pivotLabels: {
            hypothesis: "Lo que tenía",
            insight: "Lo que aprendí",
            solution: "La oportunidad"
        },
        pivot: {
            hypothesis: "El sitio estaba centrado principalmente en Ecovis: quiénes eran, qué fabricaban y las características técnicas de sus soluciones.",
            insight: "En una sesión con Marketing entendí mejor cómo ocurría la decisión de compra: quien investigaba y preparaba una propuesta no siempre era quien tomaba la decisión final dentro de la empresa.",
            solution: "Ecovis ya tenía argumentos comerciales fuertes: ahorro, eficiencia energética y resultados de sus soluciones. La propuesta fue llevar ese valor al frente de la experiencia y facilitar el camino desde entender una solución hasta contactar al equipo."
        },
        personas: [
            {
                name: "Comprador Industrial",
                role: "Director de Operaciones / Compras B2B",
                phrase: "Necesito validar la viabilidad técnica y cotizar rápidamente sin perder tiempo en sitemaps obsoletos.",
                goals: "Encontrar soluciones de eficiencia energética y seguridad rápidamente. Evaluar viabilidad técnica sin fricciones.",
                frustrations: "Sitios web que parecen catálogos estáticos. Fricción excesiva para contactar a ventas o solicitar cotizaciones."
            }
        ],
        process: [
            {
                icon: <Search size={20} />,
                title: "01 — Entender el proceso comercial",
                desc: "Trabajé con la responsable de Marketing para entender qué tipo de empresas buscaba Ecovis, quién investigaba sus soluciones y quién participaba en la decisión de compra. Con esa información construí un perfil inicial que sirvió para orientar la comunicación y la jerarquía del sitio."
            },
            {
                icon: <Layout size={20} />,
                title: "02 — Unificar la experiencia",
                desc: "Reorganicé la arquitectura y navegación para eliminar inconsistencias acumuladas y crear una estructura común entre las distintas áreas del sitio. El objetivo era que una persona pudiera entender qué resuelve Ecovis, explorar sus soluciones y saber qué hacer después."
            },
            {
                icon: <Zap size={20} />,
                title: "03 — Hablar primero del problema del cliente",
                desc: "La comunicación pasó de estar centrada principalmente en la empresa y sus productos a destacar el resultado que sus soluciones podían generar: ahorro, eficiencia energética y modernización de procesos industriales. Los CTAs y formularios se reorganizaron alrededor de esa intención."
            },
            {
                icon: <BarChart size={20} />,
                title: "04 — Implementación en Webflow",
                desc: "Además del rediseño, implementé la nueva experiencia en Webflow manteniendo una necesidad importante del proyecto original: que Marketing pudiera administrar y publicar contenido sin depender de desarrollo."
            }
        ],
        outcomes: [
            { label: "Experiencia", text: "Unificamos navegación, estructura y comunicación de un sitio que se había fragmentado con los años.", icon: <CheckCircle size={24} /> },
            { label: "Posicionamiento", text: "El cliente reportó una mejora significativa en el posicionamiento digital después del rediseño y trabajo de SEO.", icon: <Zap size={24} /> },
            { label: "Negocio", text: "Aproximadamente mes y medio después, Marketing reportó un aumento real en la llegada de prospectos cualificados.", icon: <TrendingUp size={24} /> }
        ],
        galleryIntro: "Algunas de las decisiones que transformaron la experiencia y comunicación del sitio.",
        reflection: {
            title: "Lo que haría diferente hoy.",
            text: "El feedback posterior confirmó una señal positiva de negocio, pero no definimos una línea base ni tuve acceso directo a las métricas comerciales. Hoy establecería esos indicadores antes de comenzar para poder medir el impacto del rediseño más allá del feedback cualitativo."
        },
        showTestimonial: true,
        seo: {
            title: "Ecovis México | Caso de estudio B2B en Webflow",
            description: "Caso de estudio de Ecovis México, rediseño de un sitio B2B en Webflow para unificar la experiencia, comunicar valor comercial y facilitar el contacto con prospectos."
        },
        testimonial: {
            title: "Validación del Negocio",
            text: "\"Guillermo nos apoyó con el rediseño del sitio web de Ecovis con un enfoque estratégico y muy profesional. Su visión y capacidad técnica nos permitieron transformar la plataforma en un sitio funcional con mejor experiencia de usuario y optimizar el SEO, fortaleciendo significativamente el posicionamiento digital de la marca en el sector industrial. Lo más importante: hemos notado un aumento real en la llegada de prospectos cualificados.\"",
            author: "Estefanía",
            authorInitials: "E",
            company: "Ecovis México"
        },
        liveUrl: "https://ecovismexico.com",
        gallery: [
            { image: "/projects/ecovis/ecovis-hero.png", title: "De producto industrial a beneficio para el cliente", category: "Propuesta de valor" },
            { image: "/projects/ecovis/navbar.png", title: "Una navegación consistente para todo el sitio", category: "Arquitectura" },
            { image: "/projects/ecovis/contact-footer.png", title: "Un camino más claro hacia el equipo comercial", category: "Contacto" }
        ]
    },
    "maternar": {
        title: "Maternar: Más allá de una app de donaciones",
        subtitle: "Una exploración sobre cómo el diseño podía conectar apoyo material, comunidad y maternidad.",
        heroImage: "/projects/maternar/Home - Dark theme.png",
        overview: "Maternar comenzó con una observación sencilla: muchos artículos de bebé dejan de utilizarse rápidamente, mientras otras familias podrían necesitarlos. La primera idea fue crear una forma más segura y digna de donarlos.",
        problem: "Pero antes de construirla, necesitábamos entender si ese era realmente el problema que valía la pena resolver.",
        metadata: {
            Industry: "Social / HealthTech",
            "My Role": "Product Designer & Líder de Proyecto",
            Deliverables: "User Research, Product Strategy, Prototyping",
            Timeline: "3 meses"
        },
        sectionLabels: {
            pivot: "La investigación cambió la pregunta.",
            process: "Cómo tomó forma.",
            gallery: "Evidencia visual."
        },
        pivotLabels: {
            insight: "Lo que escuchamos",
            solution: "Nueva dirección"
        },
        pivot: {
            hypothesis: "Facilitar la donación segura de artículos de bebé podía generar valor para madres que querían darles una segunda vida.",
            insight: "Entrevisté a cinco madres mediante conversaciones semiestructuradas. Incluso cuando los artículos no formaban parte de la pregunta, aparecían espontáneamente temas como soledad, pérdida de identidad y necesidad de conectar con otras madres.",
            solution: "Las donaciones seguían teniendo valor, pero parecían formar parte de una necesidad más amplia. Maternar pasó de explorar el intercambio de artículos a explorar una red de apoyo entre madres."
        },
        personas: [
            {
                name: "Ana (Receptora)",
                role: "Estado mental: Necesidad de seguridad y dignidad.",
                phrase: "Quiero darle lo mejor a mi bebé, pero mi presupuesto es muy ajustado ahora. Busco una mano amiga sin sentirme juzgada.",
                goals: "Encontrar artículos específicos de forma gratuita y en buen estado. Sentirse segura y respetada. Conectar de manera digna. Coordinar la entrega de forma privada.",
                frustrations: "La Vergüenza y el Estigma (miedo a ser juzgada). La Seguridad Personal (temor a lugares desconocidos). El Rechazo y la Desilusión."
            },
            {
                name: "Gabriela (Donadora)",
                role: "Estado mental: Deseo de impacto real y eficiencia.",
                phrase: "Tengo ropa, cuna y juguetes que mi hijo ya no usa. Quiero que de verdad le sirvan a alguien que los necesite.",
                goals: "Publicar artículos de forma rápida y sencilla. Sentir que su donación tiene un impacto real. Asegurarse de que los objetos van a manos correctas.",
                frustrations: "Pérdida de Tiempo (gente que no se presenta). Desconfianza y Seguridad. Abuso del Sistema (posible reventa)."
            }
        ],
        process: [
            {
                icon: <Search size={20} />,
                title: "01 — Cinco conversaciones, una señal inesperada",
                desc: "Preparamos una guía para las entrevistas, pero mantuve las conversaciones abiertas para poder profundizar en lo que cada participante consideraba importante. Los artículos aparecieron en las conversaciones, pero no eran el tema más urgente. La necesidad de sentirse acompañadas apareció repetidamente."
            },
            {
                icon: <Target size={20} />,
                title: "02 — Replantear la propuesta",
                desc: "En lugar de abandonar la idea original, la integramos dentro de una propuesta más amplia con tres dimensiones: apoyo material para donar y recibir artículos, apoyo emocional para conectar con otras madres, y apoyo profesional para ofrecer servicios y recuperar espacios de independencia."
            },
            {
                icon: <Zap size={20} />,
                title: "03 — Volver con las participantes",
                desc: "Diseñé un prototipo interactivo en Figma y regresamos con las mismas cinco madres para poner la propuesta frente a ellas. Las sesiones nos permitieron observar cómo entendían esta combinación de donar, recibir, conectar y ofrecer servicios, y detectar oportunidades para seguir refinando la experiencia."
            }
        ],
        outcomes: [
            { text: "La investigación cambió el problema que inicialmente queríamos resolver.", icon: <TrendingUp size={24} /> },
            { text: "Cinco participantes entrevistadas volvieron para probar la propuesta.", icon: <Users size={24} /> },
            { text: "El proyecto evolucionó de una experiencia de donaciones hacia una hipótesis más amplia de comunidad y apoyo.", icon: <Layout size={24} /> }
        ],
        galleryIntro: "Del concepto a una experiencia que pudiéramos poner frente a las participantes.",
        reflection: {
            title: "Lo que me dejó Maternar.",
            text: "Maternar fue uno de los primeros proyectos en los que una conversación con usuarios cambió significativamente la dirección que tenía en mente. También me enseñó algo que hoy aplicaría con mayor rigor: encontrar evidencia de un problema no significa haber validado su solución. El siguiente paso habría sido ampliar la investigación y realizar nuevas rondas de prueba antes de avanzar hacia un producto real."
        },
        seo: {
            title: "Maternar | Caso de estudio de investigación UX",
            description: "Caso de estudio de Maternar, una exploración de UX research y estrategia de producto sobre donaciones, comunidad y apoyo entre madres."
        },
        testimonial: {
            title: "Impacto Social",
            text: "\"La maternidad no se diseñó para vivirse en aislamiento. Maternar evolucionó para ser el ecosistema donde el apoyo material y la contención emocional por fin se encuentran.\"",
            author: "Comunidad Maternar",
            authorInitials: "M",
            company: "Fundación Maternar"
        },
        liveUrl: "https://www.figma.com/design/GhQLTFzQK0UhUEKPfbTqH6/Maternar?node-id=75-1673&t=XbszKEceXJpW8dre-1",
        gallery: [
            { image: "/projects/maternar/Home - Dark theme.png", title: "Pantalla de Inicio (Dark)", category: "UI Principal", aspectRatio: 'portrait' },
            { image: "/projects/maternar/Home.png", title: "Pantalla de Inicio (Light)", category: "UI Principal", aspectRatio: 'portrait' },
            { image: "/projects/maternar/Articulos.png", title: "Listado de Artículos", category: "UI Listado", aspectRatio: 'portrait' },
            { image: "/projects/maternar/Detalle del Artículo.png", title: "Detalle del Artículo", category: "UI Detalle", aspectRatio: 'portrait' },
            { image: "/projects/maternar/Detalle del Artículo - Dark theme.png", title: "Detalle del Artículo (Dark)", category: "UI Detalle", aspectRatio: 'portrait' },
            { image: "/projects/maternar/Onboarding - Step 1.png", title: "Onboarding - Paso 1", category: "UI Onboarding", aspectRatio: 'portrait' },
            { image: "/projects/maternar/Onboarding - Step 2.png", title: "Onboarding - Paso 2", category: "UI Onboarding", aspectRatio: 'portrait' },
            { image: "/projects/maternar/Onboarding - Step 3.png", title: "Onboarding - Paso 3", category: "UI Onboarding", aspectRatio: 'portrait' }
        ]
    },
    "artisan": {
        title: "Artisan: De llevar mi negocio en Excel a construir una herramienta para emprendedores",
        subtitle: "Una plataforma para registrar ventas, gastos e inventario y entender mejor cómo está funcionando un pequeño negocio.",
        heroImage: "/projects/artisan/dashboard-demo.png",
        overview: "Cuando comenzamos Almara necesitábamos llevar control de ventas, gastos, inventario y costos. Excel funcionaba, hasta que el negocio empezó a crecer. Durante las entregas registraba lo que ocurría en notas o mensajes de WhatsApp y, al regresar a casa, tenía que pasar nuevamente todo a Excel.",
        problem: "El problema no era tener mejores reportes. Era registrar la operación sin hacer el trabajo dos veces y poder confiar en los números al final del día.",
        metadata: {
            Industry: "SaaS / Small Business",
            "My Role": "Product Designer & Builder",
            Deliverables: "Product Strategy, User Research, AI-assisted Development",
            Timeline: "Producto activo"
        },
        sectionLabels: {
            challenge: "Todo empezó con nuestro propio negocio.",
            pivot: "De problema propio a hipótesis de producto.",
            process: "Construir antes que diseñar de más.",
            gallery: "Evidencia visual."
        },
        pivotLabels: {
            hypothesis: "Problema inicial",
            insight: "Hipótesis",
            solution: "Primera solución"
        },
        pivot: {
            hypothesis: "Registrar una venta fuera de casa implicaba recordarla o anotarla para capturarla nuevamente después.",
            insight: "Si pudiera registrar cada movimiento desde el celular en el momento en que ocurre, podría eliminar el doble trabajo y mantener ventas, gastos e inventario actualizados.",
            solution: "Construir una herramienta sencilla que concentrara la operación diaria del negocio y me permitiera registrar movimientos en segundos, especialmente durante entregas y ventas fuera de casa."
        },
        personas: [
            {
                name: "Emprendedor local",
                role: "Operador de un pequeño negocio",
                phrase: "Necesito registrar lo que pasa durante el día sin volver a capturarlo todo cuando llego a casa.",
                goals: "Registrar ventas, gastos, inventario y cobros pendientes en el momento en que ocurren.",
                frustrations: "Doble captura, números poco confiables al final del día y procesos repartidos entre Excel, notas y WhatsApp."
            }
        ],
        process: [
            {
                icon: <Zap size={20} />,
                title: "01 — Llevar decisiones de producto a software funcionando",
                desc: "Artisan pasó poco tiempo en Figma. En lugar de desarrollar primero un prototipo completo, utilicé IA y herramientas de desarrollo para llevar rápidamente las decisiones de producto a una versión funcional y probarla en la operación real de Almara."
            },
            {
                icon: <Search size={20} />,
                title: "02 — Salir de mi propio problema",
                desc: "Que Artisan funcionara para Almara no significaba que otros negocios lo necesitaran. Empecé a conversar con emprendedores en mercados y eventos para entender cómo llevaban sus ventas, inventario y costos, encontrando problemas similares y otros que no había considerado."
            },
            {
                icon: <Target size={20} />,
                title: "03 — Convertir conversaciones en decisiones",
                desc: "El feedback empezó a cuestionar mis propias suposiciones. Artisan comenzó pensando en productos artesanales, pero usuarios de servicios revelaron necesidades distintas. En lugar de convertir cada petición en una funcionalidad, empecé a separar lo que pedían del problema que necesitaban resolver."
            },
            {
                icon: <BarChart size={20} />,
                title: "04 — Del uso a la evidencia",
                desc: "Los primeros usuarios plantearon una nueva pregunta: registrarse no significa haber encontrado valor. Instrumenté Artisan para observar qué utilizan, dónde abandonan y qué comportamientos pueden indicar que la herramienta empieza a formar parte de su operación."
            }
        ],
        outcomes: [
            { text: "Construir rápidamente puede acercarme antes al problema, siempre que no confunda tener software funcionando con haber validado un producto.", icon: <Zap size={24} /> },
            { text: "Lo que un usuario pide y el problema que necesita resolver no siempre son lo mismo.", icon: <Search size={24} /> },
            { text: "Los registros importan menos que descubrir por qué alguien incorpora una herramienta a su trabajo y decide volver.", icon: <TrendingUp size={24} /> },
            { text: "Diseño, tecnología y negocio dejan de ser disciplinas separadas cuando eres responsable del producto completo.", icon: <CheckCircle size={24} /> }
        ],
        galleryIntro: "Producto real en uso y evidencia visual de cómo Artisan traduce operación diaria en una experiencia más clara.",
        reflection: {
            title: "Lo que todavía no sé.",
            text: "Artisan sigue siendo un producto en validación. Todavía quiero entender qué tipo de negocio obtiene mayor valor de la plataforma, cuáles son las acciones que predicen uso recurrente y si el principal valor está en registrar la operación o en entender mejor el negocio a partir de esos datos. No tener todavía esas respuestas forma parte del proyecto. El siguiente paso es aprender lo suficiente de usuarios reales para decidir hacia dónde debe crecer Artisan."
        },
        seo: {
            title: "Artisan | Caso de estudio SaaS para pequeños negocios",
            description: "Caso de estudio de Artisan, una plataforma para registrar ventas, gastos e inventario, nacida de un problema propio y llevada a producto activo para emprendedores."
        },
        testimonial: {
            title: "Producto en validación",
            text: "\"Artisan me está enseñando a distinguir entre construir software, validar un problema y entender qué hace que una persona vuelva a usar una herramienta en su negocio.\"",
            author: "Guillermo Moreno",
            authorInitials: "GM",
            company: "Product Designer & Builder"
        },
        liveUrl: "https://artisan.guillermoml.com",
        gallery: [
            { image: "/projects/artisan/dashboard-demo.png", title: "Dashboard operativo con datos demo", category: "Producto activo", aspectRatio: 'video' },
            { image: "/projects/artisan/metrics-demo.png", title: "Ventas, costos, ganancia e inventario en una sola vista", category: "Métricas", aspectRatio: 'video' },
            { image: "/projects/artisan/sales-demo.png", title: "Historial de ventas y cobros pendientes", category: "Operación diaria", aspectRatio: 'video' }
        ]
    },
    "trustlens": {
        title: "TrustLens: Entender lo que aceptas antes de dar clic",
        subtitle: "Una extensión de Chrome que utiliza IA para analizar términos y condiciones y señalar cláusulas que podrían afectar tus datos, dinero o propiedad intelectual.",
        heroImage: "/projects/trustlens/hero.png",
        overview: "Aceptamos términos y condiciones constantemente, pero leer documentos de decenas de páginas antes de probar una nueva herramienta simplemente no es realista. Con TrustLens quise explorar una pregunta:",
        problem: "¿Podría una extensión detectar las cláusulas que realmente merecen nuestra atención y explicarlas mientras navegamos?",
        metadata: {
            Industry: "LegalTech / AI SaaS",
            "My Role": "Product Designer & Builder",
            Deliverables: "AI-assisted development, Chrome Extension",
            Timeline: "Side Project"
        },
        sectionLabels: {
            pivot: "De la idea al producto.",
            process: "Cómo lo construí.",
            gallery: "Evidencia visual."
        },
        pivotLabels: {
            insight: "Lo que encontré",
            solution: "La propuesta"
        },
        pivot: {
            hypothesis: "Si los riesgos importantes pudieran identificarse directamente en el navegador, sería más fácil tomar una decisión informada antes de aceptar los términos de un servicio.",
            insight: "Al compartir la idea en comunidades como Indie Hackers, Reddit y #BuildInPublic, las conversaciones se concentraron especialmente en dos preocupaciones: suscripciones y cargos difíciles de detectar, y derechos sobre el contenido creado por los usuarios.",
            solution: "Una extensión capaz de analizar los términos de un servicio con un LLM, identificar cláusulas relevantes y resaltarlas directamente sobre el documento original."
        },
        personas: [
            {
                name: "Usuario de SaaS / Creador Digital",
                role: "Early Adopter / Trabajador Digital",
                phrase: "Pruebo nuevas herramientas de IA y SaaS constantemente, pero nunca leo los ToS. Temo perder mi dinero por suscripciones trampa o que la plataforma se adueñue de mis diseños.",
                goals: "Proteger el capital contra suscripciones abusivas u ocultas. Asegurar la propiedad intelectual y el copyright del trabajo que sube a herramientas de terceros.",
                frustrations: "Términos y condiciones incomprensibles de 50 páginas. Falta de tiempo. Miedo a perder derechos intelectuales por un engaño escondido en la jerga."
            }
        ],
        process: [
            {
                icon: <Search size={20} />,
                title: "01 — Un MVP que realmente funciona",
                desc: "Construí una extensión de Chrome funcional que analiza una página de términos y condiciones mediante un LLM y devuelve los principales puntos de atención. En lugar de reemplazar el documento, TrustLens inyecta indicadores directamente sobre la página para mantener el contexto original."
            },
            {
                icon: <Layout size={20} />,
                title: "02 — Diseñar también para el costo de la IA",
                desc: "Analizar el mismo documento cada vez generaba latencia y consumo innecesario de tokens. Implementé persistencia en Supabase para reutilizar análisis recientes. Si un documento ya había sido procesado, TrustLens podía recuperar el resultado sin volver a llamar al modelo."
            },
            {
                icon: <Zap size={20} />,
                title: "03 — El límite que no logré resolver",
                desc: "Mi objetivo era que TrustLens funcionara desde cualquier página de un producto: entrar a un SaaS, detectar automáticamente sus documentos legales y mostrar el análisis. El MVP no llegó hasta ahí. La versión funcional necesita que el usuario esté directamente en la página de términos y condiciones para realizar el análisis."
            },
            {
                icon: <Users size={20} />,
                title: "04 — Construir en público",
                desc: "Publiqué el proyecto y su landing en comunidades de tecnología y emprendimiento para obtener feedback temprano. El proyecto consiguió sus primeros registros y las conversaciones en Indie Hackers me ayudaron a cuestionar el enfoque inicial."
            }
        ],
        outcomes: [
            { text: "Extensión de Chrome funcional conectada a un LLM.", icon: <CheckCircle size={24} /> },
            { text: "Primeros registros y feedback obtenidos mediante Build in Public.", icon: <Users size={24} /> },
            { text: "Identificación de una limitación clave antes de continuar desarrollando el producto.", icon: <TrendingUp size={24} /> }
        ],
        galleryIntro: "Un producto funcional, no solamente un prototipo.",
        reflection: {
            title: "Lo que haría diferente hoy.",
            text: "TrustLens fue uno de mis primeros experimentos construyendo un producto completo con IA. Conseguí llevar la idea hasta un MVP funcional, pero invertí demasiado pronto en la solución antes de validar suficientemente el problema. Si lo retomara hoy, empezaría por entender con mayor profundidad cuándo y por qué las personas sienten la necesidad de revisar los términos de un servicio antes de desarrollar una experiencia más automatizada."
        },
        seo: {
            title: "TrustLens | Caso de estudio LegalTech con IA",
            description: "Caso de estudio de TrustLens, una extensión de Chrome con IA para analizar términos y condiciones, detectar cláusulas relevantes y validar un MVP en público."
        },
        testimonial: {
            title: "Visión del Founder",
            text: "\"TrustLens demuestra cómo la IA puede devolverle el poder al usuario. Mi objetivo fue transformar documentos diseñados para confundir en herramientas de protección financiera y creativa, probando que viabilidad técnica y ética van de la mano.\"",
            author: "Guillermo Moreno",
            authorInitials: "GM",
            company: "Product Builder"
        },
        liveUrl: "https://www.gettrustlens.com/",
        gallery: [
            { image: "/projects/trustlens/TrustLens - v1.0.png", title: "Dashboard - Estado Principal", category: "Chrome UI", aspectRatio: 'portrait' },
            { image: "/projects/trustlens/TrustLens - v1.0 - Skeleton.png", title: "Carga - Animación de Skeleton", category: "Chrome UI", aspectRatio: 'portrait' },
            { image: "/projects/trustlens/TrustLens - v1.0 - Empty state.png", title: "Búsqueda - Estado Vacío", category: "Chrome UI", aspectRatio: 'portrait' },
            { image: "/projects/trustlens/TrustLens - v1.0 - Low risk.png", title: "Análisis - Riesgo Bajo", category: "Chrome UI", aspectRatio: 'portrait' },
            { image: "/projects/trustlens/TrustLens - v1.0 - Low risk - Opened.png", title: "Detalle - Riesgo Bajo Abierto", category: "Chrome UI", aspectRatio: 'portrait' },
            { image: "/projects/trustlens/TrustLens - v1.0 - Medium risk.png", title: "Análisis - Riesgo Medio", category: "Chrome UI", aspectRatio: 'portrait' },
            { image: "/projects/trustlens/TrustLens - v1.0 - Medium risk - Opened.png", title: "Detalle - Riesgo Medio Abierto", category: "Chrome UI", aspectRatio: 'portrait' },
            { image: "/projects/trustlens/TrustLens - v1.0 - High risk.png", title: "Análisis - Riesgo Alto", category: "Chrome UI", aspectRatio: 'portrait' },
            { image: "/projects/trustlens/TrustLens - v1.0 - High risk - Opened.png", title: "Detalle - Riesgo Alto Abierto", category: "Chrome UI", aspectRatio: 'portrait' }
        ]
    }
};

const cleanStepTitle = (title: string) => title.replace(/^\d+\s*(?:[—-]\s*)?/, '').trim();

const ProcessBoard: React.FC<{
    process: ProjectData['process'];
}> = ({ process }) => {
    return (
        <div className="border-y border-brand-cream/10">
            {process.map((step) => (
                <div
                    key={step.title}
                    className="border-b border-brand-cream/10 py-5 last:border-b-0"
                >
                    <h3 className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-brand-cream">
                        {cleanStepTitle(step.title)}
                    </h3>
                    <p className="mt-3 max-w-3xl text-base leading-7 text-brand-cream-dark">{step.desc}</p>
                </div>
            ))}
        </div>
    );
};

export const CaseStudy: React.FC<{
    id: string;
    onImageClick: (image: { src: string; title: string }) => void;
}> = ({ id, onImageClick }) => {
    const project = PROJECTS_DATA[id] || PROJECTS_DATA.ecovis;
    const keyGallery = project.gallery?.slice(0, 3) || [];
    const pivotLabels = {
        hypothesis: project.pivotLabels?.hypothesis || 'Hipótesis',
        insight: project.pivotLabels?.insight || 'Insight',
        solution: project.pivotLabels?.solution || 'Solución'
    };

    return (
        <div className="w-full bg-brand-dark">
            <article className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-5 pb-20 sm:px-6 md:px-10 lg:px-12">
                <motion.section
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-80px' }}
                    className="max-w-4xl"
                >
                    <motion.div variants={fadeInUp}>
                        <h2 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-brand-cream md:text-5xl">
                            {project.sectionLabels?.challenge || 'El reto real detrás de la pantalla.'}
                        </h2>
                        <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-cream-dark">
                            {project.overview} <strong className="font-semibold text-brand-cream">{project.problem}</strong>
                        </p>
                    </motion.div>
                </motion.section>

                {project.pivot && (
                    <motion.section
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="grid gap-6"
                    >
                        <div className="max-w-3xl">
                            <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-brand-cream md:text-5xl">
                                {project.sectionLabels?.pivot || 'La decisión que cambió el enfoque.'}
                            </h2>
                        </div>

                        <div className="grid gap-0 border-y border-brand-cream/10">
                            {[
                                [pivotLabels.hypothesis, project.pivot.hypothesis],
                                [pivotLabels.insight, project.pivot.insight],
                                [pivotLabels.solution, project.pivot.solution]
                            ].map(([label, text]) => (
                                <div
                                    key={label}
                                    className="grid gap-3 border-b border-brand-cream/10 py-5 last:border-b-0 md:grid-cols-[160px_1fr]"
                                >
                                    <p className="text-sm font-semibold text-brand-accent">{label}</p>
                                    <p className="text-base leading-7 text-brand-cream-dark">{text}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                )}

                <motion.section
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                    className="grid gap-8"
                >
                    <div className="max-w-3xl">
                        <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-brand-cream md:text-5xl">
                            {project.sectionLabels?.process || 'Cómo se tomó forma.'}
                        </h2>
                    </div>
                    <ProcessBoard process={project.process} />
                </motion.section>

                {keyGallery.length > 0 && (
                    <motion.section
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: '-80px' }}
                        className="grid gap-8"
                    >
                        <div className="grid gap-5 lg:grid-cols-[0.7fr_1fr] lg:items-end">
                            <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-brand-cream md:text-5xl">
                                {project.sectionLabels?.gallery || 'Evidencia visual.'}
                            </h2>
                            <p className="max-w-2xl text-base leading-7 text-brand-cream-dark lg:justify-self-end">
                                {project.galleryIntro || 'Las pantallas necesarias para entender la solución. Se pueden abrir para inspeccionar detalle.'}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {keyGallery.map((item, idx) => (
                                <motion.button
                                    key={`${item.image}-${idx}`}
                                    variants={fadeInUp}
                                    type="button"
                                    onClick={() => onImageClick({ src: item.image, title: item.title })}
                                    className={`group relative overflow-hidden rounded-2xl border border-brand-cream/10 bg-brand-panel text-left transition-all duration-500 hover:-translate-y-1 hover:border-brand-accent/35 ${item.aspectRatio === 'video' ? 'aspect-video min-h-[240px] sm:min-h-0' : 'aspect-[4/5] min-h-[320px] sm:min-h-0'}`}
                                    aria-label={`Ampliar pantalla: ${item.title}`}
                                >
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-contain p-4 transition-transform duration-700 group-hover:scale-[1.035]"
                                        loading="lazy"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = `https://placehold.co/900x700/07100c/e8efe7?text=${encodeURIComponent(item.title)}`;
                                        }}
                                    />
                                    <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-brand-dark via-brand-dark/78 to-transparent p-4 pt-16">
                                        <p className="text-xs font-semibold text-brand-accent">{item.category}</p>
                                        <h3 className="mt-1 overflow-hidden text-base font-semibold leading-tight tracking-[-0.02em] text-brand-cream [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                                            {item.title}
                                        </h3>
                                    </div>
                                </motion.button>
                            ))}
                        </div>
                    </motion.section>
                )}

                <motion.section
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-80px' }}
                    className="grid gap-8"
                >
                    <div className="grid gap-0 border-y border-brand-cream/10">
                        {project.outcomes.map((outcome, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="grid gap-4 border-b border-brand-cream/10 py-5 last:border-b-0 md:grid-cols-[140px_1fr]"
                            >
                                <p className="text-sm font-semibold text-brand-accent">
                                    {String(idx + 1).padStart(2, '0')}{outcome.label ? ` — ${outcome.label}` : ''}
                                </p>
                                <p className="text-base font-semibold leading-7 text-brand-cream">{outcome.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                {project.showTestimonial && (
                    <motion.section
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="border-t border-brand-cream/10 pt-8"
                    >
                        <p className="max-w-4xl text-2xl font-semibold leading-[1.18] tracking-[-0.03em] text-brand-cream md:text-3xl">
                            “{project.testimonial.text.replace(/"/g, '')}”
                        </p>
                        <div className="mt-7">
                            <p className="font-semibold text-brand-cream">{project.testimonial.author}</p>
                            <p className="text-sm text-brand-cream-dark">{project.testimonial.company}</p>
                        </div>
                    </motion.section>
                )}

                {project.reflection && (
                    <motion.section
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                        className="border-t border-brand-cream/10 pt-8"
                    >
                        <h2 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-brand-cream md:text-5xl">
                            {project.reflection.title}
                        </h2>
                        <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-cream-dark">
                            {project.reflection.text}
                        </p>
                    </motion.section>
                )}
            </article>
        </div>
    );
};
