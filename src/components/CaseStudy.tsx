import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants } from 'framer-motion';
import {
    Target,
    TrendingUp,
    CheckCircle,
    Users,
    Search,
    Layout,
    Zap,
    BarChart,
    X
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
        image?: string;
        visual?: React.ReactNode;
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
}

export const PROJECTS_DATA: Record<string, ProjectData> = {
    "1": {
        title: "Ecovis México: Optimizando la Conversión B2B",
        subtitle: "Sector Industrial",
        heroImage: "/projects/ecovis/b2b-leads.png",
        overview: "Ecovis México, empresa especializada en el diseño y manufactura de soluciones energéticas industriales, me contactó inicialmente para una mejora táctica en su blog. Tras realizar una Auditoría UX profunda, identifiqué que el sitio enfrentaba un reto mayor:",
        problem: "un lenguaje excesivamente técnico y una navegación inconsistente que generaban fricción y no lograban convertir el tráfico B2B en prospectos reales.",
        metadata: {
            Industry: "Industrial / Energía",
            "My Role": "Product Designer",
            Deliverables: "UX Audit, Arquitectura de Información, UI/UX, CRO, SEO Técnico",
            Timeline: "Sprint Ágil"
        },
        personas: [
            {
                name: "Comprador Industrial",
                role: "Director de Operaciones / Compras B2B",
                goals: "Encontrar soluciones de eficiencia energética y seguridad rápidamente. Evaluar viabilidad técnica sin fricciones.",
                frustrations: "Sitios web que parecen catálogos estáticos. Fricción excesiva para contactar a ventas o solicitar cotizaciones."
            }
        ],
        process: [
            {
                icon: <Search size={20} />,
                title: "01 User Persona",
                desc: "Trabajamos en definir al cliente ideal industrial para alinear el lenguaje y diseño, comunicando valor (eficiencia energética, seguridad) en los primeros segundos.",
                image: "/projects/ecovis/ecovis-hero.png"
            },
            {
                icon: <Layout size={20} />,
                title: "02 Arquitectura de Información y Navegación",
                desc: "Diseñé un flujo global intuitivo que guía al usuario corporativo sin confusiones hacia la toma de contacto.",
                image: "/projects/ecovis/navbar.png"
            },
            {
                icon: <Zap size={20} />,
                title: "03 Optimización de CTAs y Conversión",
                desc: "Reemplazamos botones genéricos por micro-copy persuasivo diseñado para capturar la intención de compra del sector B2B.",
                image: "/projects/ecovis/contact-footer.png"
            },
            {
                icon: <BarChart size={20} />,
                title: "04 SEO y Rendimiento",
                desc: "Estructuración técnica para asegurar el posicionamiento orgánico en un nicho altamente competitivo.",
                image: "/projects/ecovis/seo.png"
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
        liveUrl: "https://ecovismexico.com"
    },
    "2": {
        title: "Maternar: Diseñando una Red de Apoyo para Madres",
        subtitle: "UX Research & Estrategia de Producto",
        heroImage: "/projects/maternar-hero.png",
        overview: "Identifiqué una doble oportunidad en la experiencia de las madres primerizas: por un lado, la acumulación de artículos de bebé y, por otro, la falta de canales seguros y dignos para donarlos o recibirlos.",
        problem: "Mi hipótesis inicial era una plataforma de donaciones. Sin embargo, la investigación reveló un problema mucho más profundo: un abrumador sentimiento de soledad y la pérdida de identidad individual tras la maternidad.",
        metadata: {
            Industry: "Social / HealthTech",
            "My Role": "Product Designer & Líder de Proyecto",
            Deliverables: "UX Strategy, User Research, Prototyping",
            Timeline: "3 Meses"
        },
        personas: [
            {
                name: "El Rol de Receptora: Ana",
                role: "Estado mental: Necesidad de seguridad y dignidad.",
                phrase: "Quiero darle lo mejor a mi bebé, pero mi presupuesto es muy ajustado ahora mismo. Busco una mano amiga, en un lugar donde no me sienta juzgada.",
                goals: "Encontrar artículos específicos de forma gratuita y en buen estado. Sentirse segura y respetada. Conectar de manera digna. Coordinar la entrega de forma privada.",
                frustrations: "La Vergüenza y el Estigma (miedo a ser juzgada). La Seguridad Personal (temor a lugares desconocidos). El Rechazo y la Desilusión."
            },
            {
                name: "El Rol de Donadora: Gabriela",
                role: "Estado mental: Deseo de impacto real y eficiencia.",
                phrase: "Tengo ropa, una cuna y juguetes que mi hijo ya no usa. Están en perfecto estado y quiero que alguien que de verdad los necesite les dé una segunda vida.",
                goals: "Publicar artículos de forma rápida y sencilla. Sentir que su donación tiene un impacto real. Asegurarse de que los objetos van a manos correctas.",
                frustrations: "Pérdida de Tiempo (gente que no se presenta). Desconfianza y Seguridad. Abuso del Sistema (posible reventa)."
            }
        ],
        process: [
            {
                icon: <Search size={20} />,
                title: "01 Investigación y Descubrimiento",
                desc: "Inicié una fase de investigación cualitativa con entrevistas a profundidad para entender las necesidades emocionales reales más allá de lo material."
            },
            {
                icon: <Target size={20} />,
                title: "02 Insight Clave y Redefinición",
                desc: "Descubrí que la mayor necesidad no era recibir artículos, sino pertenecer a una comunidad de apoyo que las entendiera y fortaleciera emocionalmente."
            },
            {
                icon: <Zap size={20} />,
                title: "03 Pivote: Ecosistema de Apoyo",
                desc: "La visión evolucionó a un ecosistema basado en tres pilares: apoyo material (donaciones), apoyo emocional (comunidad) y apoyo profesional (independencia financiera)."
            },
            {
                icon: <Layout size={20} />,
                title: "04 Diseño y Prototipado Figma",
                desc: "Diseñé dos perfiles flexibles permitiendo a cada madre donar, recibir, conectar y ofrecer servicios, eliminando estigmas y fomentando el empoderamiento."
            }
        ],
        outcomes: [
            { text: "Validación de solución para la soledad materna.", icon: <TrendingUp size={24} /> },
            { text: "Diseño de perfiles flexibles y polifacéticos.", icon: <Layout size={24} /> },
            { text: "Fomento del empoderamiento y rol activo en la comunidad.", icon: <Users size={24} /> }
        ],
        testimonial: {
            title: "Impacto Social",
            text: "\"Logramos entender que la maternidad no debe vivirse en soledad. Maternar es ahora un puente entre la necesidad material y el soporte emocional que toda madre necesita.\"",
            author: "Comunidad Maternar",
            authorInitials: "M",
            company: "Fundación Maternar"
        },
        liveUrl: "https://www.behance.net/gallery/maternar-ux-research"
    },
    "3": {
        title: "Invitaciones Digitales: Productizando la Gestión de Eventos",
        subtitle: "SaaS DFY & Mobile-First Design",
        heroImage: "/projects/events-saas.png",
        overview: "El proyecto nació de una necesidad personal al organizar el cumpleaños de mi hija. Al investigar el mercado, descubrí una industria arcaica y llena de fricción: procesos manuales, pagos lentos y confirmaciones desorganizadas.",
        problem: "Las soluciones existentes competían solo por estética, pero fallaban catastróficamente en la Experiencia de Usuario (UX) y la logística real, lo que inspiró un modelo de negocio asíncrono y escalable.",
        metadata: {
            Industry: "SaaS / EventTech",
            "My Role": "Lead Product Designer & Founder",
            Deliverables: "Product Strategy, Análisis Competitivo, Flujos de Usuario, UI Mobile-First, E-commerce Integration",
            Timeline: "Founder Vision"
        },
        personas: [
            {
                name: "Anfitrión del Evento",
                role: "Organizador / Padre de familia",
                phrase: "El verdadero dolor no es el diseño de la invitación, es la pesadilla logística que viene después.",
                goals: "Evitar pagar platillos de invitados que no asisten (ahorro real). Tener un control absoluto de quién entra al evento. Eliminar el ida y vuelta de cotizaciones.",
                frustrations: "Perseguir confirmaciones por WhatsApp de forma manual. Estrés por invitados \"colados\". Falta de transparencia en precios de proveedores."
            }
        ],
        process: [
            {
                icon: <Target size={20} />,
                title: "01 Análisis Competitivo e Insight",
                desc: "Realicé un análisis profundo asistido por IA, descubriendo que el producto debía evolucionar de un 'gasto estético' a una 'inversión de ahorro' logística."
            },
            {
                icon: <CheckCircle size={20} />,
                title: "02 Solución UX: Flujo \"Done-For-You\"",
                desc: "Diseñé un sistema sin fricción con Checkout transparente y 3 Tiers de precios validados, eliminando por completo la necesidad de reuniones innecesarias."
            },
            {
                icon: <Zap size={20} />,
                title: "03 Onboarding Automatizado",
                desc: "Tras el pago, implementé un formulario optimizado que recolecta datos del evento en minutos, permitiendo entregas estandarizadas en menos de 48 horas."
            },
            {
                icon: <Layout size={20} />,
                title: "04 Logística Mobile-First y QR",
                desc: "Implementé una lógica estricta de base de datos para RSVP y validación por QR en puerta, resolviendo el problema #1 de los eventos sociales."
            }
        ],
        outcomes: [
            { text: "Flujo DFY 100% asíncrono y escalable.", icon: <Zap size={24} /> },
            { text: "Control exacto de pases y validación QR en puerta.", icon: <Target size={24} /> },
            { text: "Transformación de gasto estético a inversión de ahorro.", icon: <TrendingUp size={24} /> }
        ],
        testimonial: {
            title: "Visión de Producto",
            text: "\"Al asumir el rol de Founder y Product Designer, aprendí que la estética atrae, pero la eliminación de la fricción logística es lo que verdaderamente retiene y convierte. El éxito no fue el diseño de la invitación, sino convertirla en una herramienta de gestión estratégica.\"",
            author: "Guillermo Moreno",
            authorInitials: "GM",
            company: "Founder & Lead Designer"
        },
        liveUrl: "https://events-saas-demo.com"
    }
};

export const CaseStudy: React.FC<{ id: string }> = ({ id }) => {
    const project = PROJECTS_DATA[id] || PROJECTS_DATA["1"];
    const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

    return (
        <>
            <article className="w-full max-w-5xl mx-auto px-6 md:px-12 flex flex-col gap-24 md:gap-32 pb-40">

                {/* 1. The Context */}
                <motion.section
                    data-theme="light"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="w-full max-w-4xl"
                >
                    <motion.div variants={fadeInUp} className="flex flex-col gap-8">
                        <h2 className="font-serif text-3xl md:text-5xl text-brand-dark leading-tight tracking-tighter">
                            El Reto y la Situación
                        </h2>
                        <p className="font-sans text-brand-dark/80 text-xl md:text-2xl leading-relaxed">
                            {project.overview} <span className="text-brand-dark font-medium">{project.problem}</span>
                        </p>
                    </motion.div>
                </motion.section>

                {/* 1.5 The User Persona (Dark Section) */}
                <motion.section
                    data-theme="dark"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="w-screen relative left-1/2 ml-[-50vw] bg-brand-dark py-24 md:py-32 px-6"
                >
                    <div className="max-w-5xl mx-auto flex flex-col gap-24">
                        <div className="flex flex-col gap-4 text-center">
                            <span className="font-sans text-brand-accent text-sm tracking-[0.2em] font-black uppercase">
                                User Personas
                            </span>
                            <h2 className="font-serif text-4xl md:text-6xl text-brand-cream tracking-tighter">
                                Entendiendo la Necesidad
                            </h2>
                        </div>

                        <div className={`grid grid-cols-1 ${project.personas.length > 1 ? 'lg:grid-cols-2' : ''} gap-12 md:gap-16`}>
                            {project.personas.map((persona, idx) => (
                                <motion.div
                                    key={idx}
                                    variants={fadeInUp}
                                    className="bg-white/5 rounded-[2.5rem] p-10 md:p-14 flex flex-col gap-10 border border-white/10 hover:border-brand-accent/30 transition-colors duration-500"
                                >
                                    <div className="flex flex-col gap-6">
                                        <h3 className="font-serif text-3xl md:text-4xl text-brand-cream leading-tight">
                                            {persona.name}
                                        </h3>
                                        <p className="font-sans text-brand-accent text-base uppercase tracking-widest font-bold">
                                            {persona.role}
                                        </p>
                                        {persona.phrase && (
                                            <p className="font-sans text-xl md:text-2xl text-brand-cream/80 italic leading-relaxed">
                                                "{persona.phrase}"
                                            </p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-white/10 pt-10 mt-auto">
                                        <div className="flex flex-col gap-4">
                                            <span className="font-sans text-brand-cream/30 text-xs tracking-[0.2em] font-bold uppercase relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-brand-accent">
                                                Objetivos
                                            </span>
                                            <p className="font-sans text-brand-cream/90 text-sm md:text-base leading-relaxed">
                                                {persona.goals}
                                            </p>
                                        </div>
                                        <div className="flex flex-col gap-4">
                                            <span className="font-sans text-brand-cream/30 text-xs tracking-[0.2em] font-bold uppercase relative pl-4 before:content-[''] before:absolute before:left-0 before:top-0 before:h-full before:w-[2px] before:bg-[#ff4d4d]">
                                                Frustraciones
                                            </span>
                                            <p className="font-sans text-brand-cream/90 text-sm md:text-base leading-relaxed">
                                                {persona.frustrations}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.section>



                {/* 2. The Process (Alternating Layout) */}
                <motion.section
                    data-theme="light"
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="w-full max-w-5xl mx-auto flex flex-col gap-32 my-32"
                >
                    {project.process.map((step, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <motion.div key={idx} variants={fadeInUp} className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center`}>
                                {/* Text Content */}
                                <div className={`flex flex-col gap-6 w-full ${isEven ? 'md:order-1 text-left' : 'md:order-2 md:text-right text-left'}`}>
                                    <div className={`w-14 h-14 rounded-full bg-brand-dark/5 flex items-center justify-center text-brand-dark shadow-sm ${isEven ? '' : 'md:ml-auto'}`}>
                                        {step.icon}
                                    </div>
                                    <h3 className="font-serif text-3xl md:text-4xl text-brand-dark leading-tight">
                                        {step.title}
                                    </h3>
                                    <p className="font-sans text-brand-dark/80 text-lg md:text-xl leading-relaxed">
                                        {step.desc}
                                    </p>
                                </div>

                                {/* Image Placeholder or Visual Component */}
                                <div
                                    className={`w-full aspect-square md:aspect-4/3 bg-white rounded-3xl overflow-hidden border border-brand-dark/5 shadow-2xl shadow-brand-dark/5 ${isEven ? 'md:order-2' : 'md:order-1'} flex items-center justify-center p-6 md:p-12 ${step.image ? 'cursor-pointer group' : ''}`}
                                    onClick={() => step.image && setSelectedImage({ src: step.image, title: step.title })}
                                >
                                    {step.visual ? (
                                        step.visual
                                    ) : step.image ? (
                                        <div className="relative w-full h-full overflow-hidden">
                                            <motion.img
                                                layoutId={`image-${step.image}`}
                                                src={step.image}
                                                alt={step.title}
                                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                            />
                                            <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors duration-500" />
                                        </div>
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center text-brand-dark/20 font-sans text-sm tracking-[0.2em] uppercase font-bold">
                                            Strategic Visual {idx + 1}
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.section>

                {/* 3. The Impact (Dark Section Full-Width) */}
                <div data-theme="dark" className="w-screen relative left-1/2 ml-[-50vw] bg-brand-dark py-32 md:py-48 px-6">
                    <div className="max-w-5xl mx-auto flex flex-col items-center">
                        <h2 className="font-serif text-4xl md:text-6xl text-brand-cream tracking-tighter mb-20 text-center">
                            Resultados Clave
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-24 text-center">
                            {project.outcomes.map((outcome, idx) => (
                                <motion.div key={idx} variants={fadeInUp} initial="initial" whileInView="animate" viewport={{ once: true }} className="flex flex-col items-center gap-6">
                                    <div className="text-brand-accent w-24 h-24 rounded-full bg-brand-accent/10 flex items-center justify-center mb-4">
                                        {React.cloneElement(outcome.icon as React.ReactElement<any>, { size: 48, strokeWidth: 1.5 })}
                                    </div>
                                    <span className="font-sans text-brand-cream text-lg md:text-xl leading-relaxed font-medium">
                                        {outcome.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* 4. Testimonial & Footer - Wrapped in Cream Container */}
                <motion.section
                    data-theme="light"
                    variants={scaleIn}
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    className="w-full max-w-5xl mx-auto bg-brand-cream p-12 md:p-20 rounded-4xl flex flex-col items-center text-center gap-12"
                >
                    <h3 className="font-serif text-xl md:text-3xl lg:text-4xl text-brand-dark leading-[1.3] tracking-tight italic max-w-4xl">
                        "{project.testimonial.text.replace(/"/g, '')}"
                    </h3>
                    <div className="flex flex-col items-center gap-2">
                        <span className="font-sans text-brand-dark text-sm tracking-[0.2em] uppercase font-black">
                            {project.testimonial.author}
                        </span>
                        <span className="font-serif text-brand-dark/50 text-xl italic mt-1">
                            {project.testimonial.company}
                        </span>
                    </div>
                </motion.section>
            </article>

            {/* Full-screen Image Viewer */}
            <AnimatePresence>
                {selectedImage && (
                    <div className="fixed inset-0 z-100 flex items-center justify-center p-6 md:p-12 lg:p-20">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                            className="absolute inset-0 bg-brand-dark/95 backdrop-blur-md cursor-zoom-out"
                        />

                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={() => setSelectedImage(null)}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-110"
                        >
                            <X size={32} />
                        </motion.button>

                        <motion.div className="relative z-105 flex flex-col items-center justify-center p-4 max-w-7xl w-full pointer-events-none">
                            <motion.img
                                layoutId={`image-${selectedImage.src}`}
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="h-auto max-h-[80vh] w-auto max-w-full rounded-2xl shadow-2xl pointer-events-auto"
                            />
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="mt-8 text-center"
                            >
                                <h3 className="font-serif text-2xl text-brand-cream tracking-tight">
                                    {selectedImage.title}
                                </h3>
                            </motion.div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};
