import React, { useEffect, useMemo, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, ExternalLink, X } from 'lucide-react';
import { CaseStudy, PROJECTS_DATA } from '../components/CaseStudy';
import { NextProjects } from '../components/NextProjects';

export const ProjectDetail: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const projectId = id || 'ecovis';
    const project = PROJECTS_DATA[projectId] || PROJECTS_DATA.ecovis;
    const [selectedImage, setSelectedImage] = useState<{ src: string; title: string } | null>(null);

    const heroImage = useMemo(() => {
        return project.gallery?.[0]?.image || project.heroImage;
    }, [project.gallery, project.heroImage]);
    const heroIsPortrait = project.gallery?.[0]?.aspectRatio === 'portrait';

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedImage(null);
        };
        if (selectedImage) window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedImage]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 flex min-h-screen w-full flex-col overflow-x-hidden bg-brand-dark pt-32 text-brand-cream md:pt-36"
        >
            <section className="relative overflow-hidden px-5 pb-10 sm:px-6 md:px-10 lg:px-12">
                <div className="pointer-events-none absolute inset-x-0 top-0 h-[460px] bg-[radial-gradient(circle_at_46%_0%,rgba(155,255,114,0.09),transparent_46%)]" />
                <div className="relative mx-auto max-w-7xl">
                    <Link
                        to="/#work"
                        className="mb-10 inline-flex items-center gap-2 text-sm font-semibold text-brand-cream-dark transition-colors hover:text-brand-cream md:mb-12"
                    >
                        <ArrowLeft size={16} strokeWidth={2.2} />
                        Volver a proyectos
                    </Link>

                    <div className="grid gap-8 lg:grid-cols-[0.98fr_0.82fr] lg:items-center">
                        <div className="max-w-full lg:max-w-4xl">
                            <p className="mb-4 text-sm font-semibold text-brand-accent">
                                {project.metadata.Industry || 'Product Design'}
                            </p>
                            <h1 className="max-w-[21rem] break-words text-[clamp(2.2rem,9vw,3.4rem)] font-semibold leading-[0.98] tracking-[-0.035em] text-brand-cream sm:max-w-3xl md:text-[clamp(3rem,5.8vw,4.35rem)] lg:max-w-4xl">
                                {project.title}
                            </h1>
                            <p className="mt-5 max-w-[21rem] text-base leading-7 text-brand-cream-dark sm:max-w-2xl md:text-lg">
                                {project.subtitle}
                            </p>

                            {project.liveUrl && (
                                <a
                                    href={project.liveUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-accent px-5 py-3 text-sm font-semibold text-brand-dark transition-transform hover:scale-[1.02] active:scale-[0.98]"
                                >
                                    Ver proyecto
                                    <ExternalLink size={17} strokeWidth={2.3} />
                                </a>
                            )}
                        </div>

                        <div className="overflow-hidden rounded-2xl border border-brand-cream/10 bg-brand-panel p-2 lg:max-w-[520px] lg:justify-self-end">
                            <button
                                type="button"
                                onClick={() => setSelectedImage({ src: heroImage, title: project.title })}
                                className="group relative block w-full overflow-hidden rounded-2xl bg-brand-dark text-left"
                                aria-label={`Ampliar imagen principal de ${project.title}`}
                            >
                                <img
                                    src={heroImage}
                                    alt={`Imagen principal del caso ${project.title}`}
                                    className={`h-[260px] w-full transition-transform duration-700 group-hover:scale-[1.03] md:h-[320px] ${heroIsPortrait ? 'object-contain p-3' : 'object-cover'}`}
                                    loading="eager"
                                    fetchPriority="high"
                                    onError={(e) => {
                                        const target = e.target as HTMLImageElement;
                                        target.src = `https://placehold.co/1280x900/07100c/e8efe7?text=${encodeURIComponent(project.title)}`;
                                    }}
                                />
                                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-4 bg-linear-to-t from-brand-dark via-brand-dark/72 to-transparent p-4 pt-16">
                                    <span className="text-xs font-semibold text-brand-cream">Abrir evidencia</span>
                                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-accent text-brand-dark">
                                        <ArrowUpRight size={17} strokeWidth={2.4} />
                                    </span>
                                </div>
                            </button>
                        </div>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-x-2 gap-y-1 border-t border-brand-cream/10 pt-5 text-sm leading-6 text-brand-cream-dark">
                        <span className="font-semibold text-brand-accent">{project.metadata['My Role']}</span>
                        <span className="text-brand-cream/28">/</span>
                        <span>{project.metadata.Deliverables}</span>
                        <span className="text-brand-cream/28">/</span>
                        <span>{project.metadata.Timeline}</span>
                    </div>
                </div>
            </section>

            <CaseStudy id={projectId} onImageClick={setSelectedImage} />
            <NextProjects currentProjectId={projectId} />

            <AnimatePresence>
                {selectedImage && (
                    <div
                        className="fixed inset-0 z-100 flex items-center justify-center p-5 sm:p-8"
                        role="dialog"
                        aria-modal="true"
                        aria-label={`Vista ampliada de ${selectedImage.title}`}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedImage(null)}
                            className="absolute inset-0 bg-brand-dark/94 backdrop-blur-md"
                        />

                        <motion.button
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.92 }}
                            onClick={() => setSelectedImage(null)}
                            className="absolute right-5 top-5 z-110 flex h-11 w-11 items-center justify-center rounded-full bg-brand-cream text-brand-dark transition-transform hover:scale-[1.03] active:scale-[0.98]"
                            aria-label="Cerrar"
                        >
                            <X size={22} />
                        </motion.button>

                        <motion.div
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 24 }}
                            transition={{ duration: 0.42, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-105 grid max-h-[88vh] w-full max-w-7xl gap-5"
                        >
                            <img
                                src={selectedImage.src}
                                alt={selectedImage.title}
                                className="mx-auto max-h-[78vh] w-auto max-w-full rounded-2xl border border-brand-cream/10 shadow-[0_32px_90px_rgba(0,0,0,0.5)]"
                            />
                            <h3 className="text-center text-xl font-semibold tracking-[-0.02em] text-brand-cream">
                                {selectedImage.title}
                            </h3>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};
