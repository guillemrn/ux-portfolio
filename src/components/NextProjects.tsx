import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS } from './ProjectsGrid';

export const NextProjects: React.FC<{ currentProjectId: string }> = ({ currentProjectId }) => {
    const nextProject = PROJECTS.find((project) => project.id !== currentProjectId);

    if (!nextProject) return null;

    return (
        <section data-theme="dark" className="w-full bg-brand-dark px-5 pb-20 sm:px-6 md:px-10 lg:px-12">
            <div className="mx-auto max-w-7xl border-t border-brand-cream/10 pt-10">
                <Link
                    to={`/project/${nextProject.id}`}
                    className="group grid gap-4 py-5 md:grid-cols-[0.35fr_1fr_auto] md:items-center"
                >
                    <p className="text-sm font-semibold text-brand-accent">Siguiente caso</p>
                    <h3 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-brand-cream md:text-4xl">
                        {nextProject.title}
                    </h3>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-brand-accent text-brand-dark transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                        <ArrowUpRight size={18} strokeWidth={2.4} />
                    </span>
                </Link>
            </div>
        </section>
    );
};
