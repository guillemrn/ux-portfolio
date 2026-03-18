import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from './ProjectsGrid';

export const NextProjects: React.FC<{ currentProjectId: string }> = ({ currentProjectId }) => {
    // Filter out the current project and limit to 2 for the grid
    const nextProjects = PROJECTS.filter(p => p.id !== currentProjectId).slice(0, 2);

    if (nextProjects.length === 0) return null;

    return (
        <section
            data-theme="light"
            className="w-full pt-16 pb-24 md:py-32 bg-brand-cream border-t border-brand-dark/10 relative z-10"
        >
            <div className="max-w-5xl mx-auto px-6 md:px-12">
                <h3 className="font-serif text-3xl md:text-5xl text-brand-dark mb-12 md:mb-16 tracking-tighter">
                    Sigue explorando
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {nextProjects.map((project) => (
                        <Link
                            key={project.id}
                            to={`/project/${project.id}`}
                            className="group flex flex-col gap-6 no-underline"
                        >
                            {/* Image Container with subtle hover scale */}
                            <div className="w-full aspect-video bg-brand-dark/5 rounded-2xl overflow-hidden relative border border-brand-dark/10">
                                <img
                                    src={project.imageUrl}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.33,1,0.68,1)] group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-brand-dark/0 transition-colors duration-500 group-hover:bg-brand-dark/5 pointer-events-none" />
                            </div>

                            {/* Text Content */}
                            <div className="flex flex-col gap-3">
                                {/* Category Badge/Label */}
                                <span className="font-sans text-xs uppercase tracking-widest font-black text-brand-accent">
                                    {project.category}
                                </span>

                                {/* Title */}
                                <h4 className="font-serif text-2xl md:text-3xl text-brand-dark leading-tight group-hover:text-brand-accent transition-colors duration-300">
                                    {project.title}
                                </h4>

                                {/* Link Prompt */}
                                <div className="flex items-center gap-2 mt-2 text-brand-dark/70 font-sans text-sm tracking-widest uppercase font-bold group-hover:text-brand-dark transition-colors duration-300">
                                    <span>Leer caso completo</span>
                                    <ArrowUpRight size={14} className="group-hover:translate-x-1 transition-transform duration-300" strokeWidth={3} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};
