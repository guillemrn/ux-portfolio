import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export interface ProjectData {
    id: string;
    title: string;
    category: string;
    description: string;
    imageUrl: string;
    tags: string[];
    layout: 'horizontal' | 'vertical';
}

interface ProjectCardProps {
    project: ProjectData;
    index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
    const isHorizontal = project.layout === 'horizontal';

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.215, 0.61, 0.355, 1] }}
            className={`${isHorizontal ? 'col-span-12' : 'col-span-12 md:col-span-6'} group`}
        >
            <Link
                to={`/project/${project.id}`}
                className={`block h-full bg-white rounded-[2.5rem] p-4 md:p-5 border border-brand-cream-dark/10 transition-all duration-500 hover:border-brand-accent/40 hover:shadow-[0_24px_64px_-16px_rgba(41,208,103,0.08)] group no-underline text-inherit`}
            >
                <div className={`flex flex-col ${isHorizontal ? 'lg:flex-row' : ''} h-full gap-8 md:gap-12`}>

                    {/* Visual Element / Mockup */}
                    <div className={`${isHorizontal ? 'lg:w-[45%] aspect-4/3 lg:aspect-auto' : 'w-full aspect-square'} relative overflow-hidden bg-brand-cream/10 rounded-3xl md:rounded-4xl`}>
                        <motion.img
                            src={project.imageUrl}
                            alt={`Thumbnail for ${project.title}`}
                            loading={index === 0 ? "eager" : "lazy"}
                            {...(index === 0 ? { fetchpriority: "high" } : {})}
                            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                            onError={(e) => {
                                const target = e.target as HTMLImageElement;
                                target.src = `https://placehold.co/1280x720/1a1a1b/e9e3d5?text=${encodeURIComponent('En construcción...')}`;
                            }}
                        />
                        {/* Subtle overlay */}
                        <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/5 transition-colors duration-500" />
                    </div>

                    {/* Content Section */}
                    <div className={`flex flex-col py-4 md:py-6 ${isHorizontal ? 'lg:w-[55%] lg:justify-center pr-4 md:pr-6' : 'grow px-2 md:px-4 pb-4'}`}>
                        {/* Meta Category */}
                        <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-black text-brand-dark/70 mb-3 block">
                            {project.category}
                        </span>

                        {/* Title - Slids in elegant neon green arrow on hover */}
                        <h3 className="font-serif text-xl md:text-2xl lg:text-3xl text-brand-dark tracking-tighter leading-tight mb-4 flex items-baseline justify-between gap-4 transition-colors duration-500">
                            <span>{project.title}</span>
                            <span className="text-brand-accent opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-500 ease-out font-sans font-bold text-lg md:text-xl lg:text-2xl shrink-0">
                                →
                            </span>
                        </h3>

                        {/* Description */}
                        <p className="font-sans text-brand-dark/70 text-sm md:text-base leading-relaxed mb-6 max-w-sm">
                            {project.description}
                        </p>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {project.tags.map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-4 py-1.5 rounded-full bg-brand-dark/95 border border-brand-accent/20 text-brand-accent text-[9px] md:text-[10px] uppercase font-black tracking-widest transition-colors duration-300 hover:bg-brand-dark hover:border-brand-accent"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Link>
        </motion.div>
    );
};
