import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { PillButton } from '../components/PillButton';
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
            className="pt-24 pb-32 bg-white min-h-screen relative z-10 w-full"
        >
            {/* Top Navigation Bar */}
            <div className="w-full px-6 md:px-12 flex items-center justify-between mb-24 relative border-b border-brand-dark/5 pb-10">

                {/* Left: Back Button with PillButton */}
                <div className="flex-1 flex justify-start z-10">
                    <Link to="/#work">
                        <PillButton
                            variant="ghost"
                            iconLeft={<ArrowLeft size={14} />}
                            className="text-[10px] uppercase tracking-[0.2em] font-black border-brand-dark/10"
                        >
                            Back
                        </PillButton>
                    </Link>
                </div>

                {/* Center: Metadata (Information Architecture from Image) */}
                <div className="flex-2 flex items-center justify-center gap-4 lg:gap-8 whitespace-nowrap px-4 text-center">
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-black text-brand-dark/40">
                        Case 0{projectId}
                    </span>
                    <div className="flex flex-col items-center">
                        <h1 className="font-serif italic text-xl md:text-2xl lg:text-3xl text-brand-dark leading-none">
                            {project.title}
                        </h1>
                        <span className="font-sans text-[9px] uppercase tracking-[0.2em] font-black text-brand-dark/20 mt-1">
                            {project.subtitle}
                        </span>
                    </div>
                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-black text-brand-dark/40 hidden md:block">
                        {project.metadata["Industry"]}
                    </span>
                </div>

                {/* Right: Decorative Circle to balance and match reference */}
                <div className="flex-1 flex justify-end items-center pr-4">
                    <div className="w-8 h-8 rounded-full border border-brand-dark/10 flex items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-dark/20 animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* Main Content Component */}
            <CaseStudy id={projectId} />

        </motion.div>
    );
};
