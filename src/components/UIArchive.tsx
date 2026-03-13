import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ArchiveItem {
    id: number;
    title: string;
    category: string;
    span?: string;
    image?: string;
}

const ARCHIVE_ITEMS: ArchiveItem[] = [
    { id: 1, title: 'Subs Tracker', category: 'SaaS', span: 'md:col-span-8 md:row-span-2', image: '/UI/subs-tracker-2.webp' },
    { id: 2, title: 'Crypto Wallet', category: 'Fintech', span: 'md:col-span-4 md:row-span-1', image: '/UI/crypto-app-2.webp' },
    { id: 3, title: 'Health Analytics', category: 'Healthcare', span: 'md:col-span-4 md:row-span-2', image: '/UI/dashboard-health-light.webp' },
    { id: 4, title: 'Health Analytics', category: 'Healthcare', span: 'md:col-span-4 md:row-span-1', image: '/UI/dashboard-health-dark.webp' },
    { id: 5, title: 'Branding UX', category: 'Portfolio', span: 'md:col-span-4 md:row-span-1', image: '/UI/Web.png' },
];

export const UIArchive: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<ArchiveItem | null>(null);

    return (
        <section data-theme="light" className="w-full py-32 px-6 md:px-12 lg:px-20 bg-white" id="archive">
            <div className="max-w-5xl mx-auto">
                {/* Section Header */}
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="font-serif text-4xl md:text-5xl text-brand-dark mb-6 tracking-tight leading-none"
                    >
                        UI Archive & Explorations.
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="font-sans text-brand-dark/70 text-md md:text-lg max-w-sm leading-relaxed"
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
                            className={`${item.span || 'md:col-span-4'} relative rounded-2xl overflow-hidden group cursor-pointer border border-brand-dark/10`}
                            onClick={() => setSelectedItem(item)}
                        >
                            {/* Project Image */}
                            <div className="absolute inset-0 bg-brand-cream-dark/30 flex items-center justify-center overflow-hidden">
                                {item.image ? (
                                    <motion.img
                                        layoutId={`image-${item.id}`}
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                    />
                                ) : (
                                    <div className="w-full h-full bg-linear-to-br from-brand-dark/5 to-brand-accent/5" />
                                )}
                            </div>

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-brand-dark/0 group-hover:bg-brand-dark/40 transition-colors duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                <div className="flex flex-col items-center">
                                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-black text-white mb-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                        {item.category}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Image Viewer */}
            <AnimatePresence>
                {selectedItem && (
                    <div className="fixed inset-0 z-100 flex items-center justify-center p-6 md:p-12 lg:p-20">
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedItem(null)}
                            className="absolute inset-0 bg-brand-dark/90 backdrop-blur-sm cursor-none"
                        />

                        {/* Close Button */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={() => setSelectedItem(null)}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-110"
                        >
                            <X size={32} />
                        </motion.button>

                        {/* Image Container */}
                        <motion.div className="relative z-105 flex flex-col items-center justify-center p-4">
                            <motion.img
                                layoutId={`image-${selectedItem.id}`}
                                src={selectedItem.image}
                                alt={selectedItem.title}
                                className="h-auto max-h-[85vh] w-auto max-w-full rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] pointer-events-auto"
                            />

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: 20 }}
                                className="mt-8 text-center"
                            >
                                <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-black text-brand-accent mb-2 block">
                                    {selectedItem.category}
                                </span>
                                <h3 className="font-serif text-2xl md:text-3xl text-white tracking-tight">
                                    {selectedItem.title}
                                </h3>
                            </motion.div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};

