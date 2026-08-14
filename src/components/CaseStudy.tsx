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

const scaleIn: Variants = {
    initial: { opacity: 0, scale: 0.96 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] }
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
        text: string;
        icon: React.ReactNode;
    }[];
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
        title: "Ecovis México: Optimizando la Conversión B2B",
        subtitle: "Sector Industrial",
        heroImage: "/projects/ecovis/b2b-leads.png",
        overview: "Ecovis México, empresa especializada en el diseño y manufactura de soluciones energéticas industriales, me contactó inicialmente para una mejora táctica en su blog. Tras realizar una Auditoría UX profunda, identifiqué que el sitio enfrentaba un reto mayor:",
        problem: "un lenguaje excesivamente técnico y una navegación inconsistente que generaban fricción y no lograban convertir el tráfico B2B en prospectos reales.",
        metadata: {
            Industry: "Industrial / Energía",
            "My Role": "Lead Product Designer",
            Deliverables: "UX Audit, Arquitectura de Información, UI/UX, CRO (Optimización de Tasa de Conversión), SEO Técnico",
            Timeline: "Sprint Ágil"
        },
        pivot: {
            hypothesis: "El cliente corporativo busca catálogos técnicos masivos y especificaciones duras en formato PDF.",
            insight: "Los directores de compras B2B buscan validar la viabilidad energética de forma extremadamente rápida, sin fricciones en los primeros 10 segundos.",
            solution: "Simplificar la propuesta de valor hacia el ahorro de costos y eficiencia, implementando flujos de contacto optimizados (CRO) y SEO semántico."
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
                title: "01 Definición del User Persona",
                desc: "Trabajamos en definir al cliente ideal industrial para alinear el lenguaje y diseño, comunicando valor (eficiencia energética, seguridad) en los primeros segundos."
            },
            {
                icon: <Layout size={20} />,
                title: "02 Arquitectura de Información y Navegación",
                desc: "Diseñé un flujo global intuitivo que guía al usuario corporativo sin confusiones hacia la toma de contacto."
            },
            {
                icon: <Zap size={20} />,
                title: "03 Optimización de CTAs y Conversión",
                desc: "Reemplazamos botones genéricos por micro-copy persuasivo diseñado para capturar la intención de compra del sector B2B."
            },
            {
                icon: <BarChart size={20} />,
                title: "04 SEO y Rendimiento",
                desc: "Estructuración técnica para asegurar el posicionamiento orgánico en un nicho altamente competitivo."
            }
        ],
        outcomes: [
            { text: "Aumento tangible en la captación de leads cualificados.", icon: <TrendingUp size={24} /> },
            { text: "Transformación de catálogo a herramienta de generación de leads.", icon: <Zap size={24} /> },
            { text: "Mejora en el posicionamiento orgánico (SEO) y de la marca corporativa.", icon: <CheckCircle size={24} /> }
        ],
        testimonial: {
            title: "Validación del Negocio",
            text: "\"Guillermo nos apoyó con el rediseño con un enfoque estratégico y muy profesional. Su visión nos permitió transformar la plataforma en un sitio funcional con mejor experiencia de usuario y optimizar el SEO. Lo más importante: hemos notado un aumento real en la llegada de prospectos cualificados. Su capacidad para entender necesidades, proponer soluciones y ejecutar con eficiencia hizo el proceso muy fluido.\"",
            author: "Estefanía",
            authorInitials: "E",
            company: "Ecovis México"
        },
        liveUrl: "https://ecovismexico.com",
        gallery: [
            { image: "/projects/ecovis/ecovis-hero.png", title: "Propuesta de Valor Principal B2B", category: "UI Landing" },
            { image: "/projects/ecovis/navbar.png", title: "Sitemap y Flujo de Máquinas", category: "Arquitectura" },
            { image: "/projects/ecovis/contact-footer.png", title: "Formulario de Registro Optimizado", category: "Conversión (CRO)" }
        ]
    },
    "maternar": {
        title: "Maternar: Diseñando una Red de Apoyo para Madres",
        subtitle: "De app de donaciones a ecosistema de apoyo para la soledad materna.",
        heroImage: "/projects/maternar/Home - Dark theme.png",
        overview: "La oportunidad inicial parecía material: madres con artículos de bebé en buen estado y otras madres sin canales seguros para recibirlos.",
        problem: "La investigación mostró algo más profundo: las redes existentes resolvían objetos, pero no dignidad, seguridad ni pertenencia.",
        metadata: {
            Industry: "Social / HealthTech",
            "My Role": "Product Designer & Líder de Proyecto",
            Deliverables: "UX Strategy, User Research, Prototyping",
            Timeline: "3 Meses"
        },
        pivot: {
            hypothesis: "Una plataforma centralizada de donaciones seguras podía mejorar el bienestar material de la comunidad.",
            insight: "El problema real no era material, sino emocional y social: soledad, vulnerabilidad y pérdida de identidad tras la maternidad.",
            solution: "Redefinir Maternar como ecosistema de apoyo: material, emocional y profesional."
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
                title: "01 Investigación cualitativa",
                desc: "Las entrevistas validaron el valor emocional de donar, pero revelaron una urgencia mayor: muchas madres necesitaban sentirse acompañadas y comprendidas."
            },
            {
                icon: <Target size={20} />,
                title: "02 Pivote estratégico",
                desc: "La visión cambió de intercambio de artículos a una red donde pedir, donar, conectar y ofrecer servicios pudiera suceder sin estigma."
            },
            {
                icon: <Zap size={20} />,
                title: "03 Prototipo en Figma",
                desc: "El prototipo permitió probar una solución multifacética: apoyo material, comunidad emocional y espacios para independencia profesional."
            }
        ],
        outcomes: [
            { text: "El caso dejó de centrarse en objetos y pasó a resolver pertenencia, seguridad y apoyo.", icon: <TrendingUp size={24} /> },
            { text: "El prototipo validó perfiles flexibles: donar, recibir, conectar y ofrecer servicios.", icon: <Layout size={24} /> },
            { text: "La propuesta redujo el estigma al convertir la ayuda en participación activa dentro de una comunidad.", icon: <Users size={24} /> }
        ],
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
    "trustlens": {
        title: "TrustLens: De \"punto ciego\" legal a escudo financiero con IA",
        subtitle: "Extensión de Chrome impulsada por IA que traduce términos de servicio complejos en alertas de IP y suscripciones abusivas.",
        heroImage: "/projects/trustlens/hero.png",
        overview: "Millones de usuarios aceptan Términos de Servicio (ToS) de 50 páginas sin leerlos. A los usuarios no les asusta el uso de datos en apps famosas, les aterra el \"Salvaje Oeste\" del internet (nuevas apps de IA, SaaS independientes)",
        problem: "donde exponen su dinero (renovaciones automáticas ocultas) y su propiedad intelectual (derechos sobre su trabajo) sin saberlo.",
        metadata: {
            Industry: "LegalTech / AI SaaS",
            "My Role": "Product Designer & Builder",
            Deliverables: "AI Engineering, Chrome Extension",
            Timeline: "MVP (Build in Public)"
        },
        pivot: {
            hypothesis: "Desarrollar una extensión para proteger la privacidad general de datos contra gigantes como Google y Facebook.",
            insight: "Los usuarios creativos y early adopters están dispuestos a compartir datos con marcas conocidas, pero temen perder propiedad intelectual (IP) o ser estafados por micro-cobros en nuevas herramientas independientes.",
            solution: "Crear un detector ágil de micro-cláusulas enfocado en cláusulas de IP, políticas de reembolso secreto y suscripciones ocultas, con alertas visuales rápidas y un Trust Score."
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
                title: "01 Pivot: De Privacidad a Activos",
                desc: "Originalmente enfocado en la privacidad contra las Big Tech, descubrí que el dolor real radica en las 'Trampas Financieras' y el 'Robo de IP' al probar nuevas apps."
            },
            {
                icon: <Layout size={20} />,
                title: "02 Escudo Digital ante la Letra Chiquita",
                desc: "Diseñando la extensión de Chrome bajo la restricción técnica de 400x600px; transformando cláusulas abusivas y riesgos de IP en alertas críticas, un Trust Score y un Dashboard de Ahorro."
            },
            {
                icon: <Zap size={20} />,
                title: "03 El Motor Detrás de la Magia",
                desc: "Para lograr procesar miles de palabras sin congelar la futura extensión, estoy implementando una arquitectura por fragmentos con resultados almacenados en Supabase. Esto evitará llamadas innecesarias a la IA, asegurando que el usuario reciba su Trust Score al instante y sin tiempos de carga frustrantes."
            },
            {
                icon: <Users size={20} />,
                title: "04 Validación #BuildInPublic",
                desc: "Lanzamiento y validación temprana en comunidades tech. Creación de landing page con Next.js + Tailwind enfocada en captar leads y recolectar feedback de early adopters."
            }
        ],
        outcomes: [
            { text: "Lanzamiento y validación del MVP funcional con la comunidad indie.", icon: <CheckCircle size={24} /> },
            { text: "Arquitectura híbrida escalable con Supabase y de salida determinista.", icon: <Zap size={24} /> },
            { text: "Reducción radical de la fricción cognitiva al probar nuevos SaaS.", icon: <TrendingUp size={24} /> }
        ],
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

const cleanStepTitle = (title: string) => title.replace(/^\d+\s*/, '').trim();

const ProcessBoard: React.FC<{
    process: ProjectData['process'];
}> = ({ process }) => {
    return (
        <div className="border-y border-brand-cream/10">
            {process.map((step, idx) => (
                <div
                    key={step.title}
                    className="grid gap-4 border-b border-brand-cream/10 py-5 last:border-b-0 md:grid-cols-[56px_1fr]"
                >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-cream/7 text-brand-accent">
                        {React.isValidElement(step.icon) ? React.cloneElement(step.icon as React.ReactElement<{ size?: number, strokeWidth?: number }>, { size: 16, strokeWidth: 1.9 }) : step.icon}
                    </span>
                    <div>
                        <p className="text-sm font-semibold text-brand-accent">{String(idx + 1).padStart(2, '0')}</p>
                        <h3 className="mt-1 text-2xl font-semibold leading-tight tracking-[-0.03em] text-brand-cream">
                            {cleanStepTitle(step.title)}
                        </h3>
                        <p className="mt-3 max-w-3xl text-base leading-7 text-brand-cream-dark">{step.desc}</p>
                    </div>
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

    return (
        <div className="w-full bg-brand-dark">
            <article className="mx-auto flex w-full max-w-7xl flex-col gap-16 px-5 pb-20 sm:px-6 md:px-10 lg:px-12">
                <motion.section
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-80px' }}
                    className="max-w-4xl"
                >
                    <motion.div variants={fadeInUp}>
                        <h2 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-brand-cream md:text-5xl">
                            El reto real detrás de la pantalla.
                        </h2>
                        <p className="mt-6 max-w-3xl text-lg leading-8 text-brand-cream-dark">
                            {project.overview} <strong className="font-semibold text-brand-cream">{project.problem}</strong>
                        </p>
                    </motion.div>
                </motion.section>

                {project.pivot && (
                    <motion.section
                        variants={staggerContainer}
                        initial="initial"
                        whileInView="animate"
                        viewport={{ once: true, margin: '-80px' }}
                        className="grid gap-6"
                    >
                        <div className="max-w-3xl">
                            <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-brand-cream md:text-5xl">
                                La decisión que cambió el enfoque.
                            </h2>
                        </div>

                        <div className="grid gap-0 border-y border-brand-cream/10">
                            {[
                                ['Hipótesis', project.pivot.hypothesis],
                                ['Insight', project.pivot.insight],
                                ['Solución', project.pivot.solution]
                            ].map(([label, text]) => (
                                <motion.div
                                    key={label}
                                    variants={fadeInUp}
                                    className="grid gap-3 border-b border-brand-cream/10 py-5 last:border-b-0 md:grid-cols-[160px_1fr]"
                                >
                                    <p className="text-sm font-semibold text-brand-accent">{label}</p>
                                    <p className="text-base leading-7 text-brand-cream-dark">{text}</p>
                                </motion.div>
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
                            Cómo se tomó forma.
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
                                Evidencia visual.
                            </h2>
                            <p className="max-w-2xl text-base leading-7 text-brand-cream-dark lg:justify-self-end">
                                Las pantallas necesarias para entender la solución. Se pueden abrir para inspeccionar detalle.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                            {keyGallery.map((item, idx) => (
                                <motion.button
                                    key={`${item.image}-${idx}`}
                                    variants={fadeInUp}
                                    type="button"
                                    onClick={() => onImageClick({ src: item.image, title: item.title })}
                                    className="group relative aspect-[4/5] min-h-[320px] overflow-hidden rounded-2xl border border-brand-cream/10 bg-brand-panel text-left transition-all duration-500 hover:-translate-y-1 hover:border-brand-accent/35 sm:min-h-0"
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
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-accent text-brand-dark">
                                    {React.isValidElement(outcome.icon) ? React.cloneElement(outcome.icon as React.ReactElement<{ size?: number, strokeWidth?: number }>, { size: 22, strokeWidth: 2 }) : outcome.icon}
                                </div>
                                <p className="text-base font-semibold leading-7 text-brand-cream">{outcome.text}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.section>

                <motion.section
                    variants={scaleIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true, margin: '-80px' }}
                    className="border-t border-brand-accent/30 pt-8"
                >
                    <p className="max-w-5xl text-2xl font-semibold leading-[1.18] tracking-[-0.03em] text-brand-cream md:text-3xl">
                        “{project.testimonial.text.replace(/"/g, '')}”
                    </p>
                    <div className="mt-8 flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-accent text-sm font-semibold text-brand-dark">
                            {project.testimonial.authorInitials}
                        </div>
                        <div>
                            <p className="font-semibold text-brand-cream">{project.testimonial.author}</p>
                            <p className="text-sm text-brand-cream-dark">{project.testimonial.company}</p>
                        </div>
                    </div>
                </motion.section>
            </article>
        </div>
    );
};
