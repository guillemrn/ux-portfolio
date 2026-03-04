import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
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
            <div className="w-full px-6 md:px-12 max-w-5xl mx-auto mb-16 md:mb-24 flex flex-col items-start gap-8">
                {/* H1 Gigante */}
                <h1 className="font-serif text-5xl md:text-7xl lg:text-[5.5rem] text-brand-dark leading-[1.05] tracking-tighter max-w-5xl">
                    {project.title}.
                </h1>

                {/* Metadata Row */}
                <div className="flex flex-wrap items-center gap-4 text-brand-dark/70 font-sans text-sm md:text-base">
                    <span><strong>Rol:</strong> {project.metadata["My Role"]}</span>
                    <span className="text-brand-dark/20">|</span>
                    <span><strong>Entregables:</strong> {project.metadata["Deliverables"]}</span>
                    <span className="text-brand-dark/20">|</span>
                    <span><strong>Industria:</strong> {project.metadata["Industry"]}</span>
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
