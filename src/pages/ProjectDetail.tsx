import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, X } from 'lucide-react';
import { PillButton } from '../components/PillButton';
import { CaseStudy, PROJECTS_DATA } from '../components/CaseStudy';
import { NextProjects } from '../components/NextProjects';

export const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const projectId = id || "ecovis";
    const project = PROJECTS_DATA[projectId] || PROJECTS_DATA["ecovis"];
    const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedImage(null);
        };
        if (selectedImage) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
            className="pt-16 bg-white min-h-screen relative z-10 w-full flex flex-col"
        >
            {/* Top Navigation - Sutil Back Button */}
            <div className="w-full px-6 md:px-12 flex items-center justify-start mb-12 md:mb-16 relative">
                <Link to="/#work" className="group flex items-center gap-3 text-brand-dark hover:text-brand-accent transition-all duration-300 no-underline cursor-none">
                    <div className="w-8 h-8 rounded-full border border-brand-dark/10 flex items-center justify-center group-hover:border-brand-accent/40 group-hover:bg-brand-accent/5 transition-all duration-300">
                        <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform duration-300 text-brand-dark group-hover:text-brand-accent" />
                    </div>
                    <span className="font-sans text-[10px] uppercase tracking-widest font-black text-brand-dark/70 group-hover:text-brand-dark">Volver a Proyectos</span>
                </Link>
            </div>

            {/* Immersive Hero Header (Editorial Grid) */}
            <div className="w-full px-6 md:px-12 max-w-5xl mx-auto mb-16 md:mb-24 flex flex-col gap-12 relative">
                
                {/* Thin top divider */}
                <div className="w-full h-px bg-brand-dark/10 relative">
                    <div className="absolute right-0 top-0 -translate-y-1/2 font-sans text-[9px] uppercase tracking-[0.25em] font-black text-brand-accent bg-white pl-4">
                        PROYECTO / {project.metadata["Timeline"] ? project.metadata["Timeline"].toUpperCase() : "SPRINT ÁGIL"}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Left Column: Title & Subtitle */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        {/* Premium Pulsing Neon Green Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-dark font-sans font-black text-[9px] uppercase tracking-widest shadow-[0_4px_16px_rgba(41,208,103,0.08)] max-w-fit">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                            CASE STUDY & UX DESIGN / {project.metadata["Industry"] || "Product Design"}
                        </div>

                        {/* H1 Gigante - detailed with neon green accent period */}
                        <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-brand-dark leading-[1.08] tracking-tighter">
                            {project.title}<span className="text-brand-accent">.</span>
                        </h1>
                        
                        {/* Elegant italic summary */}
                        <p className="font-serif text-xl md:text-2xl text-brand-dark/80 italic leading-relaxed font-normal max-w-3xl mt-2 border-l-2 border-brand-accent pl-6">
                            {project.subtitle}
                        </p>
                    </div>

                    {/* Right Column: Metadata details in an elegant editorial sheet */}
                    <div className="lg:col-span-4 lg:border-l lg:border-brand-dark/10 lg:pl-10 flex flex-col gap-8 w-full">
                        <div className="flex flex-col gap-6">
                            <div className="flex flex-col gap-1.5 pb-4 border-b border-brand-dark/5">
                                <span className="font-sans text-[9px] uppercase tracking-[0.25em] font-black text-brand-dark/50">Rol Técnico</span>
                                <span className="font-serif text-lg text-brand-dark font-semibold">{project.metadata["My Role"]}</span>
                            </div>
                            <div className="flex flex-col gap-1.5 pb-4 border-b border-brand-dark/5">
                                <span className="font-sans text-[9px] uppercase tracking-[0.25em] font-black text-brand-dark/50">Sector / Industria</span>
                                <span className="font-serif text-lg text-brand-dark font-semibold">{project.metadata["Industry"]}</span>
                            </div>
                            <div className="flex flex-col gap-1.5 pb-4 border-b border-brand-dark/5">
                                <span className="font-sans text-[9px] uppercase tracking-[0.25em] font-black text-brand-dark/50">Línea de Trabajo</span>
                                <span className="font-serif text-lg text-brand-dark font-semibold leading-relaxed">{project.metadata["Deliverables"]}</span>
                            </div>
                        </div>

                        {/* Live URL CTA - Beautifully integrated as an editorial button */}
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block w-full cursor-none">
                                <PillButton
                                    variant="accent"
                                    iconRight={<ArrowUpRight size={16} strokeWidth={3} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />}
                                    className="w-full justify-between text-[10px] uppercase tracking-widest font-black py-4 px-8 shadow-lg shadow-brand-accent/15 group hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
                                >
                                    Ver en Vivo
                                </PillButton>
                            </a>
                        )}
                    </div>
                </div>
            </div>



            {/* Main Content Component */}
            <CaseStudy id={projectId} onImageClick={setSelectedImage} />

            {/* Siguientes Casos Navigation */}
            <NextProjects currentProjectId={projectId} />

            {/* Full-screen Image Viewer (Lightbox) */}
            <AnimatePresence>
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-100 flex items-center justify-center p-6 md:p-12 lg:p-20"
                        role="dialog"
                        aria-modal="true"
                        aria-label="Image viewer"
                    >
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
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-110 cursor-none"
                            aria-label="Cerrar"
                        >
                            <X size={32} />
                        </motion.button>

                        <motion.div className="relative z-105 flex flex-col items-center justify-center p-4 max-w-7xl w-full pointer-events-none">
                            <motion.img
                                layoutId={`image-${selectedImage.src}`}
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="h-auto max-h-[80vh] w-auto max-w-full rounded-2xl shadow-2xl pointer-events-auto"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = `https://placehold.co/1280x720/1a1a1b/e9e3d5?text=${encodeURIComponent('En construcción...')}`;
                                }}
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
        </motion.div>
    );
};
