import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { PillButton } from '../components/PillButton';
import { CaseStudy, PROJECTS_DATA } from '../components/CaseStudy';

export const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const projectId = id || "1";
    const project = PROJECTS_DATA[projectId] || PROJECTS_DATA["1"];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="pt-16 pb-32 bg-brand-cream min-h-screen relative z-10 w-full"
        >
            {/* Top Navigation - Sutil Back Button */}
            <div className="w-full px-6 md:px-12 flex items-center justify-start mb-16 md:mb-24 relative">
                <Link to="/#work" className="group flex items-center gap-2 text-brand-dark hover:text-brand-accent transition-colors duration-300 no-underline">
                    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-300" />
                    <span className="font-sans text-xs uppercase tracking-widest font-bold">Volver</span>
                </Link>
            </div>

            {/* Immersive Hero Header */}
            <div className="w-full px-6 md:px-12 max-w-5xl mx-auto mb-16 md:mb-24 flex flex-col items-start gap-12">
                {/* H1 Gigante */}
                <h1 className="font-serif text-5xl md:text-7xl lg:text-[6rem] text-brand-dark leading-[1.05] tracking-tighter max-w-5xl">
                    {project.title}.
                </h1>

                {/* Info & CTA Rows - Stacked Layout */}
                <div className="w-full border-t border-brand-dark/10 pt-10 flex flex-col gap-12">

                    {/* Row 1: Metadata Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-10 w-full">
                        <div className="flex flex-col gap-2">
                            <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-black text-brand-dark/40">Rol</span>
                            <span className="font-sans text-brand-dark text-base md:text-lg font-medium">{project.metadata["My Role"]}</span>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-black text-brand-dark/40">Industria</span>
                            <span className="font-sans text-brand-dark text-base md:text-lg font-medium">{project.metadata["Industry"]}</span>
                        </div>
                        <div className="flex flex-col gap-2 col-span-2 md:col-span-1">
                            <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-black text-brand-dark/40">Entregables</span>
                            <span className="font-sans text-brand-dark text-base md:text-lg font-medium leading-relaxed">{project.metadata["Deliverables"]}</span>
                        </div>
                    </div>

                    {/* Row 2: Live URL CTA - Left Aligned */}
                    {project.liveUrl && (
                        <div className="w-full flex justify-start">
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block w-full sm:w-fit">
                                <PillButton
                                    variant="accent"
                                    iconRight={<ArrowUpRight size={18} strokeWidth={3} />}
                                    className="w-full sm:w-fit whitespace-nowrap text-xs uppercase tracking-widest font-black py-4 px-10 shadow-xl shadow-brand-accent/20"
                                >
                                    Ver Proyecto en Vivo
                                </PillButton>
                            </a>
                        </div>
                    )}
                </div>
            </div>

            {/* Full-width Image Placeholder / Hero Image */}
            <div className="w-full px-6 md:px-12 mb-24 md:mb-40">
                <div className="w-full max-w-5xl mx-auto aspect-video md:aspect-21/9 bg-brand-dark/5 rounded-3xl overflow-hidden relative">
                    <img
                        src={project.heroImage}
                        alt={`${project.title} Preview`}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>

            {/* Main Content Component */}
            <CaseStudy id={projectId} />

        </motion.div>
    );
};
