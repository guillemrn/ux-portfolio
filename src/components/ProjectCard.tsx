import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export interface ProjectData {
    id: string;
    title: string;
    category: string;
    description: string;
    imageUrl: string;
    signal: string;
}

interface ProjectCardProps {
    project: ProjectData;
    index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    return (
        <motion.article
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: index * 0.08, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="group"
        >
            <Link
                to={`/project/${project.id}`}
                className="grid h-full overflow-hidden rounded-2xl border border-brand-cream/10 bg-brand-panel transition-all duration-500 hover:-translate-y-1 hover:border-brand-accent/35 hover:shadow-[0_24px_64px_rgba(0,0,0,0.34)] lg:h-[520px]"
            >
                <div className="grid h-full grid-rows-[240px_1fr] lg:grid-rows-[260px_260px]">
                    <div className="relative overflow-hidden bg-brand-dark">
                        <img
                            src={project.imageUrl}
                            alt={`Vista del proyecto ${project.title}`}
                            loading={index === 0 ? 'eager' : 'lazy'}
                            {...(index === 0 ? { fetchPriority: 'high' } : {})}
                            className={`h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.035] ${project.id === 'ecovis' ? 'object-cover' : 'object-contain p-4 sm:p-5'}`}
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `https://placehold.co/1280x720/07100c/e8efe7?text=${encodeURIComponent('Imagen pendiente')}`;
                            }}
                        />
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_0%,rgba(155,255,114,0.2),transparent_42%)] opacity-80" />
                        <div className="absolute bottom-4 left-4 rounded-full border border-brand-cream/12 bg-brand-dark/72 px-3 py-1.5 text-sm font-semibold text-brand-cream backdrop-blur-md">
                            {project.signal}
                        </div>
                    </div>

                    <div className="flex min-h-0 flex-col justify-between gap-5 p-5 sm:p-6">
                        <div>
                            <p className="mb-3 text-xs font-semibold text-brand-accent">{project.category}</p>
                            <h3 className="text-2xl font-semibold leading-[1.03] tracking-[-0.03em] text-brand-cream">
                                {project.title}
                            </h3>
                            <p className="mt-3 line-clamp-2 text-sm leading-6 text-brand-cream-dark">
                                {project.description}
                            </p>
                        </div>

                        <div className="flex flex-col items-start gap-3 border-t border-brand-cream/10 pt-4 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                            <span className="text-xs font-semibold text-brand-cream-dark">Caso completo</span>
                            <span className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full bg-brand-accent px-3.5 text-xs font-semibold text-brand-dark transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1">
                                Ver caso
                                <ArrowUpRight size={18} strokeWidth={2.4} />
                            </span>
                        </div>
                    </div>
                </div>
            </Link>
        </motion.article>
    );
};
