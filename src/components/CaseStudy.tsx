import React from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
    Target,
    AlertCircle,
    TrendingUp,
    CheckCircle,
    Quote,
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
        <article className="w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col gap-24 md:gap-40 pb-32">

            {/* 1. Hero Image */}
            <motion.section
                variants={scaleIn}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="w-full"
            >
                <div className="w-full aspect-video md:aspect-21/9 bg-white rounded-3xl md:rounded-4xl overflow-hidden border border-brand-dark/10 shadow-sm relative">
                    <img
                        src={project.heroImage}
                        alt="Project Mockup"
                        className="w-full h-full object-cover"
                    />
                </div>
            </motion.section>

            {/* 2. Project Overview & Meta (Split Column) */}
            <motion.section
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20"
            >
                {/* Left: Text */}
                <div className="lg:col-span-8 flex flex-col gap-16">
                    <motion.div variants={fadeInUp}>
                        <h2 className="font-serif text-2xl md:text-3xl mb-6 text-brand-dark leading-tight flex items-center gap-4">
                            <span className="w-8 h-px bg-brand-dark/20"></span>
                            Project Overview
                        </h2>
                        <p className="font-sans text-brand-dark/80 text-lg md:text-xl leading-loose max-w-3xl">
                            {project.overview}
                        </p>
                    </motion.div>
                    <motion.div variants={fadeInUp}>
                        <h2 className="font-serif text-2xl md:text-3xl mb-6 text-brand-dark leading-tight flex items-center gap-4">
                            <span className="w-8 h-px bg-brand-dark/20"></span>
                            Problem Statement
                        </h2>
                        <p className="font-sans text-brand-dark/80 text-lg md:text-xl leading-loose max-w-3xl">
                            {project.problem}
                        </p>
                    </motion.div>
                </div>

                {/* Right: Meta Bento Box */}
                <motion.div variants={fadeInUp} className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
                    <div className="bg-brand-cream rounded-4xl p-8 md:p-10 border border-brand-dark/5 flex flex-col gap-8 shadow-sm">
                        {Object.entries(project.metadata).map(([key, value]) => (
                            <div key={key} className="flex flex-col gap-2">
                                <h3 className="font-sans text-[10px] uppercase tracking-[0.2em] font-black text-brand-dark/30">{key}</h3>
                                <p className="font-serif text-lg text-brand-dark leading-tight">{value}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.section>

            {/* 3. Persona Section */}
            <motion.section
                variants={fadeInUp}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="w-full"
            >
                <div className="flex items-center justify-center gap-4 mb-12">
                    <span className="w-12 h-px bg-brand-dark/10"></span>
                    <h2 className="font-serif text-2xl md:text-3xl text-brand-dark italic">Persona</h2>
                    <span className="w-12 h-px bg-brand-dark/10"></span>
                </div>

                <div className="bg-brand-cream rounded-4xl p-6 md:p-12 border border-brand-dark/5 w-full flex flex-col md:flex-row gap-12 relative overflow-hidden">
                    {/* Background Decorative Icon */}
                    <Users className="absolute -right-8 -bottom-8 w-64 h-64 text-brand-dark/2 -rotate-12 pointer-events-none" />

                    {/* Persona Identity */}
                    <div className="md:w-1/3 flex flex-col gap-6 border-b md:border-b-0 md:border-r border-brand-dark/5 pb-8 md:pb-0 md:pr-12">
                        <div className="w-16 h-16 bg-white rounded-2xl border border-brand-dark/5 shadow-sm flex items-center justify-center text-brand-dark/20">
                            <Users size={28} strokeWidth={1.5} />
                        </div>
                        <div>
                            <h3 className="font-serif text-3xl text-brand-dark leading-tight mb-2">{project.persona.name}</h3>
                            <p className="font-sans text-brand-dark/50 text-xs uppercase tracking-widest font-black leading-none">{project.persona.role}</p>
                        </div>
                    </div>

                    {/* Persona Details */}
                    <div className="md:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                        <div className="flex flex-col gap-5">
                            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] font-black text-brand-accent flex items-center gap-2">
                                <Target size={14} /> Goals
                            </h4>
                            <p className="font-sans text-brand-dark/80 text-base leading-relaxed">{project.persona.goals}</p>
                        </div>
                        <div className="flex flex-col gap-4">
                            <h4 className="font-sans text-[10px] uppercase tracking-[0.2em] font-black text-brand-dark/40 flex items-center gap-2">
                                <AlertCircle size={14} /> Frustrations
                            </h4>
                            <p className="font-sans text-brand-dark/80 text-base leading-relaxed">{project.persona.frustrations}</p>
                        </div>
                    </div>

                </div>
            </motion.section>

            {/* 4. Process Grid */}
            <motion.section
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="w-full"
            >
                <div className="flex items-center justify-center gap-4 mb-12">
                    <span className="w-12 h-px bg-brand-dark/10"></span>
                    <h2 className="font-serif text-2xl md:text-3xl text-brand-dark italic">Process</h2>
                    <span className="w-12 h-px bg-brand-dark/10"></span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {project.process.map((step, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInUp}
                            className="bg-brand-cream rounded-4xl p-8 md:p-10 border border-brand-dark/5 flex flex-col gap-8 group hover:border-brand-accent/30 transition-colors duration-500 relative overflow-hidden"
                        >
                            {/* Visual Indicator */}
                            <div className="w-12 h-12 bg-white rounded-xl border border-brand-dark/5 flex items-center justify-center text-brand-dark/40 group-hover:text-brand-accent group-hover:rotate-12 transition-all duration-500 shadow-sm relative z-10">
                                {step.icon}
                            </div>

                            <div className="relative z-10">
                                <h4 className="font-sans font-black text-brand-dark/30 text-[10px] tracking-[0.2em] uppercase mb-4">{step.title}</h4>
                                <p className="font-sans text-brand-dark text-lg leading-relaxed">{step.desc}</p>
                            </div>

                            {/* Large Background Decorative Number */}
                            <span className="absolute -right-4 -bottom-6 font-serif text-[120px] text-brand-dark/3 italic font-black pointer-events-none group-hover:text-brand-accent/5 transition-colors duration-700">
                                0{idx + 1}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* 5. Outcomes & Impact Container */}
            <section className="w-full flex flex-col gap-24 md:gap-32">

                {/* Outcomes (High Contrast) */}
                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                >
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <span className="w-12 h-px bg-brand-dark/10"></span>
                        <h2 className="font-serif text-3xl md:text-4xl text-brand-dark tracking-tighter">Outcomes</h2>
                        <span className="w-12 h-px bg-brand-dark/10"></span>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {project.outcomes.map((outcome, idx) => (
                            <motion.div
                                key={idx}
                                variants={fadeInUp}
                                className="bg-brand-dark rounded-4xl p-8 md:p-10 border border-brand-dark shadow-xl flex flex-col gap-8 group hover:-translate-y-2 transition-transform duration-500"
                            >
                                <div className="text-brand-accent/50 group-hover:text-brand-accent transition-colors duration-500">
                                    {outcome.icon}
                                </div>
                                <p className="font-sans text-white font-medium text-lg md:text-xl leading-snug">
                                    {outcome.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Key Learnings / Testimonial */}
                <motion.div
                    variants={scaleIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="mt-12"
                >
                    <div className="flex items-center justify-center gap-4 mb-12">
                        <span className="w-12 h-px bg-brand-dark/10"></span>
                        <h2 className="font-serif text-2xl md:text-3xl text-brand-dark italic">{project.testimonial.title}</h2>
                        <span className="w-12 h-px bg-brand-dark/10"></span>
                    </div>

                    <div className="bg-brand-cream rounded-4xl p-8 md:p-12 border border-brand-dark/5 max-w-5xl mx-auto flex flex-col items-center text-center gap-12 relative overflow-hidden">
                        {/* Decorative Quote Icon */}
                        <Quote className="absolute top-12 left-12 w-24 h-24 text-brand-dark/3 -scale-x-100" />

                        <p className="font-serif text-1xl md:text-2xl lg:text-3xl text-brand-dark leading-tight italic max-w-4xl relative z-10">
                            {project.testimonial.text}
                        </p>

                        <div className="flex flex-col items-center gap-6 relative z-10">
                            <div className="w-16 h-16 bg-white border border-brand-dark/5 rounded-full flex items-center justify-center font-serif text-xl text-brand-dark shadow-sm">
                                {project.testimonial.authorInitials}
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-sans text-brand-dark text-xs tracking-[0.3em] uppercase font-black">
                                    {project.testimonial.author}
                                </span>
                                <span className="font-serif text-brand-dark/40 text-sm italic">{project.testimonial.company}</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </section>

        </article>
    );
};
