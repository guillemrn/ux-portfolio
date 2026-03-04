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
            staggerChildren: 0.1
        }
    }
};

const fadeInUp: Variants = {
    initial: { opacity: 0, y: 30 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: "easeOut" }
    }
};

const scaleIn: Variants = {
    initial: { opacity: 0, scale: 0.95 },
    animate: {
        opacity: 1,
        scale: 1,
        transition: { duration: 1, ease: "easeOut" }
    }
};

interface ProjectData {
    title: string;
    subtitle: string;
    heroImage: string;
    overview: string;
    problem: string;
    metadata: Record<string, string>;
    persona: {
        name: string;
        role: string;
        goals: string;
        frustrations: string;
    };
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
}

export const PROJECTS_DATA: Record<string, ProjectData> = {
    "1": {
        title: "Optimizando la Conversión B2B",
        subtitle: "+45% en Leads",
        heroImage: "/projects/b2b-leads.png",
        overview: "Lideré un rediseño estratégico enfocado en transformar la plataforma de un simple catálogo informativo a una herramienta de generación de leads. El cliente buscaba inicialmente una mejora táctica en su blog.",
        problem: "Tras una Auditoría UX, identifiqué que el sitio enfrentaba un reto mayor: un lenguaje excesivamente técnico y una navegación inconsistente que generaban fricción y no lograban convertir el tráfico B2B en prospectos reales.",
        metadata: {
            Industry: "B2B / Industrial",
            "My Role": "Lead Product Designer",
            Deliverables: "UX Audit, CRO, SEO Técnico",
            Timeline: "Sprint Ágil"
        },
        persona: {
            name: "Comprador Industrial",
            role: "Director de Operaciones / Compras B2B",
            goals: "Encontrar soluciones de eficiencia energética y seguridad rápidamente. Evaluar viabilidad técnica sin fricciones.",
            frustrations: "Sitios web que parecen catálogos estáticos. Fricción excesiva para contactar a ventas o solicitar cotizaciones."
        },
        process: [
            {
                icon: <Search size={20} />,
                title: "01 User Persona",
                desc: "Trabajamos en definir al cliente ideal industrial para alinear el lenguaje y diseño, comunicando valor en los primeros segundos."
            },
            {
                icon: <Layout size={20} />,
                title: "02 Arquitectura UX",
                desc: "Diseñé un flujo global intuitivo que guía al usuario corporativo sin confusiones hacia la toma de contacto."
            },
            {
                icon: <Zap size={20} />,
                title: "03 CRO & Micro-copy",
                desc: "Reemplazamos botones genéricos por micro-copy persuasivo diseñado para capturar la intención de compra."
            },
            {
                icon: <BarChart size={20} />,
                title: "04 SEO & Rendimiento",
                desc: "Estructuración técnica para asegurar el posicionamiento orgánico en un nicho altamente competitivo."
            }
        ],
        outcomes: [
            { text: "Aumento tangible en captación de leads cualificados.", icon: <TrendingUp size={24} /> },
            { text: "Reducción drástica de fricción en la experiencia B2B.", icon: <Zap size={24} /> },
            { text: "Mejora en posicionamiento de marca corporativa.", icon: <CheckCircle size={24} /> }
        ],
        testimonial: {
            title: "Validación del Negocio",
            text: "\"Transformó la plataforma en un sitio funcional. Lo más importante: hemos notado un aumento real en la llegada de prospectos cualificados. Su capacidad para entender necesidades y ejecutar hizo el proceso muy fluido.\"",
            author: "Estefanía",
            authorInitials: "E",
            company: "Ecovis México"
        }
    },
    "2": {
        title: "De App de Donaciones a Ecosistema de Apoyo",
        subtitle: "UX Research & Estrategia de Producto",
        heroImage: "/projects/maternar-hero.png",
        overview: "Identifiqué una doble oportunidad en la experiencia de las madres primerizas: la acumulación de artículos de bebé y la falta de canales seguros para donarlos.",
        problem: "Mi hipótesis inicial era una plataforma de donaciones. Sin embargo, la investigación reveló un problema mucho más profundo: un abrumador sentimiento de soledad y la pérdida de identidad individual tras la maternidad.",
        metadata: {
            Industry: "Social / HealthTech",
            "My Role": "UX Researcher & Product Strategist",
            Deliverables: "UX Strategy, User Research, Prototyping",
            Timeline: "3 Months"
        },
        persona: {
            name: "Madre Primeriza",
            role: "Pivote Emocional",
            goals: "Encontrar artículos para su bebé. Sentirse comprendida y acompañada en su nueva etapa.",
            frustrations: "Los grupos en redes sociales a menudo las exponen a situaciones de vulnerabilidad. Sentimiento de aislamiento y falta de una red de apoyo real."
        },
        process: [
            {
                icon: <Search size={20} />,
                title: "01 Descubrimiento",
                desc: "Inicié una fase de investigación cualitativa con entrevistas a profundidad para entender las necesidades reales."
            },
            {
                icon: <Target size={20} />,
                title: "02 Insight Clave",
                desc: "Descubrí que el verdadero problema a resolver no era material, sino emocional y social. La necesidad era pertenecer a una comunidad."
            },
            {
                icon: <Zap size={20} />,
                title: "03 Pivote Estratégico",
                desc: "La visión evolucionó de una app de donaciones a un ecosistema de apoyo basado en tres pilares."
            },
            {
                icon: <Layout size={20} />,
                title: "04 Diseño y Prototipado",
                desc: "Iteré los flujos para reflejar los pilares de apoyo material, emocional y profesional."
            }
        ],
        outcomes: [
            { text: "Validación de un producto centrado en la soledad materna.", icon: <TrendingUp size={24} /> },
            { text: "Diseño de dos perfiles flexibles (donar, recibir, conectar).", icon: <Layout size={24} /> },
            { text: "Eliminación del estigma y fomento del empoderamiento.", icon: <Users size={24} /> }
        ],
        testimonial: {
            title: "Impacto Social",
            text: "\"Logramos entender que la maternidad no debe vivirse en soledad. Maternar es ahora un puente entre la necesidad material y el soporte emocional que toda madre necesita.\"",
            author: "Comunidad Maternar",
            authorInitials: "M",
            company: "Fundación Maternar"
        }
    },
    "3": {
        title: "Productizando la Gestión de Eventos",
        subtitle: "SaaS DFY & Mobile-First Design",
        heroImage: "/projects/events-saas.png",
        overview: "El proyecto nació de una necesidad personal que me llevó a descubrir una industria arcaica y llena de fricción para el usuario: procesos manuales, cotizaciones lentas y confirmaciones desorganizadas. Diseñé un modelo de negocio asíncrono y escalable.",
        problem: "Las soluciones existentes en el mercado competían únicamente por estética, pero fallaban catastróficamente en la Experiencia de Usuario (UX) y la logística real del evento.",
        metadata: {
            Industry: "SaaS / EventTech",
            "My Role": "Lead Product Designer & Founder",
            Deliverables: "Product Strategy, Flujos de Usuario, UI Mobile-First",
            Timeline: "Founder Vision"
        },
        persona: {
            name: "Organizador de Eventos",
            role: "Anfitrión",
            goals: "Evitar pagar platillos de invitados que no asisten (ahorro). Tener un control exacto de quién entra al evento.",
            frustrations: "Perseguir a la gente por WhatsApp para el RSVP, lidiar con pagos por transferencia y el estrés de los invitados \"colados\"."
        },
        process: [
            {
                icon: <Target size={20} />,
                title: "01 Insight de Negocio",
                desc: "Tras un análisis competitivo, definí que el verdadero dolor no es el diseño, es la logística. El producto debía evolucionar de un \"gasto estético\" a una \"inversión de ahorro\"."
            },
            {
                icon: <CheckCircle size={20} />,
                title: "02 Checkout Transparente",
                desc: "Diseñé un flujo de compra directa con 3 Tiers de precios validados, eliminando por completo el ida y vuelta de cotizaciones."
            },
            {
                icon: <Zap size={20} />,
                title: "03 Onboarding Automatizado",
                desc: "Tras el pago, el usuario recibe un formulario optimizado para recolectar los datos del evento, reduciendo la carga cognitiva y permitiendo entregas en 48 hrs."
            },
            {
                icon: <Layout size={20} />,
                title: "04 Logística Mobile-First",
                desc: "El 99% de interacciones ocurren por enlace de WhatsApp. Implementé una lógica estricta de base de datos para el RSVP y validación por QR en puerta."
            }
        ],
        outcomes: [
            { text: "Creación de un flujo \"Done-For-You\" sin fricción y 100% asíncrono.", icon: <Zap size={24} /> },
            { text: "Control exacto de pases y validación QR resolviendo el problema #1 de los eventos.", icon: <Target size={24} /> },
            { text: "Modelo de negocio validado y productizado en 3 niveles de precio.", icon: <TrendingUp size={24} /> }
        ],
        testimonial: {
            title: "Visión de Producto",
            text: "\"Al asumir el rol de Founder y Product Designer, aprendí que la mejor interfaz es aquella que resuelve un problema operativo real. La estética atrae, pero la eliminación de la fricción logística es lo que verdaderamente retiene y convierte.\"",
            author: "Guillermo Moreno",
            authorInitials: "GM",
            company: "Founder & Lead Designer"
        }
    }
};

export const CaseStudy: React.FC<{ id: string }> = ({ id }) => {
    const project = PROJECTS_DATA[id] || PROJECTS_DATA["1"];

    return (
        <article className="w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col gap-32 md:gap-48 pb-40">

            {/* 1. The Context (60/40 Split) */}
            <motion.section
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24"
            >
                {/* Left Column (60%) */}
                <div className="lg:col-span-7 flex flex-col gap-8">
                    <motion.div variants={fadeInUp}>
                        <h2 className="font-serif text-3xl md:text-5xl text-brand-dark leading-tight tracking-tighter mb-8">
                            El Reto del Lenguaje Técnico.
                        </h2>
                        <p className="font-sans text-brand-dark/80 text-lg md:text-xl leading-relaxed">
                            {project.overview} {project.problem}
                        </p>
                    </motion.div>
                </div>

                {/* Right Column (40%) */}
                <div className="lg:col-span-5 flex flex-col gap-8 lg:pt-2">
                    <motion.div variants={fadeInUp}>
                        <h2 className="font-serif text-2xl md:text-4xl text-brand-dark leading-tight tracking-tighter mb-8">
                            La Estrategia.
                        </h2>
                        <p className="font-sans text-brand-dark/80 text-lg md:text-xl leading-relaxed">
                            Transformar la plataforma de un simple catálogo informativo a una máquina de generación de leads cualificados.
                        </p>
                    </motion.div>
                </div>
            </motion.section>



            {/* 2. The Process (Single Column, Interleaved Images) */}
            <motion.section
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="w-full max-w-5xl mx-auto flex flex-col gap-24"
            >
                {project.process.map((step, idx) => (
                    <motion.div key={idx} variants={fadeInUp} className="flex flex-col gap-8 text-left">
                        <div className="flex flex-col gap-6">
                            <h3 className="font-sans text-sm md:text-base text-brand-dark uppercase tracking-widest font-bold">
                                0{idx + 1} / {step.title.replace(/^[0-9]+ /, '')}
                            </h3>
                            <p className="font-sans text-brand-dark/80 text-lg md:text-xl leading-relaxed">
                                {step.desc}
                            </p>
                        </div>

                        {/* Large Image Placeholder for each process step */}
                        <div className="w-full aspect-video md:aspect-16/10 bg-brand-dark/5 rounded-2xl overflow-hidden mt-4">
                            {/* Insert generic placeholders or specific wireframes if accessible */}
                            <div className="w-full h-full flex items-center justify-center text-brand-dark/20 font-sans text-sm tracking-widest uppercase">
                                Visual Placeholder {idx + 1}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.section>

            {/* 3. The Impact (Dark Section Full-Width) */}
            <div className="w-screen relative left-1/2 -px-1/2 ml-[-50vw] bg-brand-dark py-32 md:py-48 px-6">
                <div className="max-w-5xl mx-auto flex flex-col items-center">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 text-center">
                        <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="flex flex-col gap-6">
                            <span className="font-serif text-6xl md:text-8xl lg:text-[7rem] text-brand-accent tracking-tighter leading-none">
                                +45%
                            </span>
                            <span className="font-sans text-brand-cream text-lg md:text-xl leading-relaxed">
                                Incremento en Captación de Leads
                            </span>
                        </motion.div>
                        <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="flex flex-col gap-6">
                            <span className="font-serif text-6xl md:text-8xl lg:text-[7rem] text-brand-accent tracking-tighter leading-none">
                                B2B
                            </span>
                            <span className="font-sans text-brand-cream text-lg md:text-xl leading-relaxed">
                                Optimización del flujo de ventas
                            </span>
                        </motion.div>
                        <motion.div variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="flex flex-col gap-6">
                            <span className="font-serif text-6xl md:text-8xl lg:text-[7rem] text-brand-accent tracking-tighter leading-none">
                                SEO
                            </span>
                            <span className="font-sans text-brand-cream text-lg md:text-xl leading-relaxed">
                                Mejora de posicionamiento orgánico
                            </span>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* 4. Testimonial & Footer */}
            <motion.section
                variants={scaleIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="w-full max-w-5xl mx-auto flex flex-col items-center text-center mt-32 md:mt-48 gap-8"
            >
                <h3 className="font-serif text-3xl md:text-5xl lg:text-6xl text-brand-dark leading-[1.2] tracking-tight italic">
                    "{project.testimonial.text.replace(/"/g, '')}"
                </h3>
                <div className="flex flex-col items-center gap-1 mt-8">
                    <span className="font-sans text-brand-dark text-sm tracking-widest uppercase font-bold">
                        {project.testimonial.author}
                    </span>
                    <span className="font-serif text-brand-dark/60 text-lg italic">
                        {project.testimonial.company}
                    </span>
                </div>
            </motion.section>

        </article>
    );
};
