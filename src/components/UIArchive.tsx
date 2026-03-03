import React from 'react';
import { motion } from 'framer-motion';

interface ArchiveItem {
    id: number;
    title: string;
    category: string;
    span?: string;
}

const ARCHIVE_ITEMS: ArchiveItem[] = [
    { id: 1, title: 'Glassmorphic Dashboard', category: 'SaaS', span: 'md:col-span-8 md:row-span-2' },
    { id: 2, title: 'Typography Study', category: 'Editorial', span: 'md:col-span-4 md:row-span-1' },
    { id: 3, title: 'Data Visualization', category: 'Fintech', span: 'md:col-span-4 md:row-span-2' },
    { id: 4, title: 'Mobile E-commerce', category: 'Retail', span: 'md:col-span-4 md:row-span-1' },
    { id: 5, title: 'Minimalist Landing', category: 'Portfolio', span: 'md:col-span-4 md:row-span-1' },
];

export const UIArchive: React.FC = () => {
    return (
        <section className="w-full py-32 px-6 md:px-12 lg:px-20 bg-brand-cream" id="archive">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-serif text-4xl md:text-5xl lg:text-6xl text-brand-dark mb-6 tracking-tight leading-none"
                    >
                        UI Archive & Explorations.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-sans text-brand-dark/70 text-sm md:text-base max-w-sm leading-relaxed"
                    >
                        Una selección curada de interfaces, sistemas de diseño y experimentación visual enfocada en la estética funcional.
                    </motion.p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] gap-6 md:gap-8">
                    {ARCHIVE_ITEMS.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`${item.span || 'md:col-span-4'} relative rounded-2xl overflow-hidden group cursor-none`}
                        >
                            {/* Stylized Placeholder Image */}
                            <div className="absolute inset-0 bg-brand-cream-dark/30 flex items-center justify-center overflow-hidden">
                                <motion.div
                                    className="w-full h-full bg-linear-to-br from-brand-dark/5 to-brand-accent/5"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                />
                                {/* Abstract UI Pattern */}
                                <div className="absolute inset-0 flex flex-col p-8 opacity-20 pointer-events-none">
                                    <div className="w-1/2 h-4 bg-brand-dark rounded-full mb-4" />
                                    <div className="w-full h-32 bg-brand-dark rounded-xl mb-4" />
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 bg-brand-accent rounded-full" />
                                        <div className="grow h-12 bg-brand-dark rounded-xl" />
                                    </div>
                                </div>
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/40 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="flex flex-col items-center">
                                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-black text-white/60 mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {item.category}
                                    </span>
                                    <button className="bg-brand-accent text-brand-dark px-6 py-3 rounded-full font-sans text-[10px] uppercase font-black tracking-widest transform scale-90 group-hover:scale-100 transition-all duration-300 hover:bg-white">
                                        View Full Shot
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
