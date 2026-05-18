import React, { useState, useEffect } from 'react';
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

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedItem(null);
        };
        if (selectedItem) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedItem]);

    return (
        <section data-theme="light" className="w-full py-32 px-6 md:px-12 lg:px-20 bg-white" id="archive">
            <div className="max-w-6xl mx-auto">
                {/* Premium Pulsing Neon Green Badge & Centered Heading */}
                <div className="flex flex-col items-center text-center mb-16">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-dark font-sans font-black text-[9px] uppercase tracking-widest mb-4 shadow-[0_4px_16px_rgba(41,208,103,0.08)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                        02 / LABS & EXPLORATIONS
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-dark tracking-tighter max-w-2xl mb-4 leading-tight">
                        UI Archive & Prototipado Técnico<span className="text-brand-accent">.</span>
                    </h2>
                    <p className="font-sans text-brand-dark/70 text-base md:text-lg max-w-lg leading-relaxed">
                        Exploraciones de interfaz, interacciones avanzadas y prototipos experimentales que validan la estética y la técnica.
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[300px] gap-6 md:gap-8">
                    {ARCHIVE_ITEMS.map((item, index) => (
                        <motion.button
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`${item.span || 'md:col-span-4'} relative rounded-2xl overflow-hidden group cursor-none border border-brand-dark/10 hover:border-brand-accent/40 hover:shadow-[0_20px_40px_rgba(41,208,103,0.06)] transition-all duration-500 w-full text-left`}
                            onClick={() => setSelectedItem(item)}
                            aria-label={`View full project: ${item.title}`}
                        >
                            {/* Project Image */}
                            <div className="absolute inset-0 bg-brand-cream-dark/30 flex items-center justify-center overflow-hidden">
                                {item.image ? (
                                    <motion.img
                                        layoutId={`image-${item.id}`}
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        className="w-full h-full object-cover"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = `https://placehold.co/800x600/1a1a1b/e9e3d5?text=${encodeURIComponent('En construcción...')}`;
                                        }}
                                    />
                                ) : (
                                    <div className="w-full h-full bg-linear-to-br from-brand-dark/5 to-brand-accent/5" />
                                )}
                            </div>

                            {/* Hover Overlay - Ultra-premium Backdrop Blur Glassmorphism with Title & Category */}
                            <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-2 p-6 text-center">
                                <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-black text-brand-accent bg-brand-dark/80 px-4 py-2 rounded-full border border-brand-accent/30 shadow-[0_4px_16px_rgba(41,208,103,0.15)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                                    {item.category}
                                </span>
                                <span className="font-serif text-lg md:text-xl text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75">
                                    {item.title}
                                </span>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Modal Image Viewer */}
            <AnimatePresence>
                {selectedItem && (
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
                            onClick={() => setSelectedItem(null)}
                            className="absolute inset-0 bg-brand-dark/90 backdrop-blur-sm cursor-none"
                        />

                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            onClick={() => setSelectedItem(null)}
                            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors z-110 cursor-none"
                            aria-label="Cerrar"
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

