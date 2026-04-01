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
                    {project.title}
                </h1>

                {/* Info & CTA Block - Wrapped in Cream Container */}
                <div className="w-full bg-brand-cream p-8 md:p-12 rounded-[2.5rem] flex flex-col gap-8">
                    {/* Row 1: Metadata Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-10 w-full">
                        <div className="flex flex-col gap-1">
                            <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-black text-brand-dark/70">Rol</span>
                            <span className="font-sans text-brand-dark text-base md:text-lg font-medium">{project.metadata["My Role"]}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-black text-brand-dark/70">Industria</span>
                            <span className="font-sans text-brand-dark text-base md:text-lg font-medium">{project.metadata["Industry"]}</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-black text-brand-dark/70">Entregables</span>
                            <span className="font-sans text-brand-dark text-base md:text-lg font-medium leading-relaxed">{project.metadata["Deliverables"]}</span>
                        </div>
                    </div>

                    {/* Row 2: Live URL CTA - Left Aligned */}
                    {project.liveUrl && (
                        <div className="w-full flex justify-start border-t border-brand-dark/5 pt-8">
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
                <div className="w-full max-w-5xl mx-auto aspect-video md:aspect-21/9 bg-brand-dark/5 rounded-3xl overflow-hidden relative group">
                    <button
                        className="w-full h-full block cursor-none pointer-events-auto"
                        onClick={() => setSelectedImage({ src: project.heroImage, title: project.title })}
                        aria-label={`View full image: ${project.title}`}
                    >
                        <img
                            src={project.heroImage}
                            alt={`${project.title} Preview`}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `https://placehold.co/1920x1080/1a1a1b/e9e3d5?text=${encodeURIComponent('En construcción...')}`;
                            }}
                        />
                        <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/10 transition-colors duration-500" />
                    </button>
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
