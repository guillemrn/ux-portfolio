import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

interface ArchiveItem {
    id: number;
    title: string;
    category: string;
    image?: string;
}

const ARCHIVE_ITEMS: ArchiveItem[] = [
    { id: 1, title: 'Subs Tracker 2.0', category: 'SaaS', image: '/UI/subs-tracker-2.webp' },
    { id: 2, title: 'Crypto Wallet App', category: 'Fintech', image: '/UI/crypto-app-2.webp' },
    { id: 3, title: 'Health Analytics Light', category: 'Healthcare', image: '/UI/dashboard-health-light.webp' },
    { id: 4, title: 'Health Analytics Dark', category: 'Healthcare', image: '/UI/dashboard-health-dark.webp' },
    { id: 5, title: 'Branding UX Web', category: 'Portfolio', image: '/UI/Web.png' },
    { id: 6, title: 'Interactive Hover Cards', category: 'Microinteractions', image: '/UI/Hover.png' },
    { id: 7, title: 'Auth Experience Flow', category: 'UI Design', image: '/UI/Login.png' },
    { id: 8, title: 'OTIF Live Analytics', category: 'Logistics', image: '/UI/OTIF Live - Popup.png' },
    { id: 9, title: 'Subscription Manager', category: 'SaaS', image: '/UI/subs-tracker.webp' }
];

const ROW_1_ITEMS = [
    ARCHIVE_ITEMS[0], // subs-tracker-2.webp
    ARCHIVE_ITEMS[1], // crypto-app-2.webp
    ARCHIVE_ITEMS[2], // dashboard-health-light.webp
    ARCHIVE_ITEMS[4], // Web.png
    ARCHIVE_ITEMS[8], // subs-tracker.webp
];

const ROW_2_ITEMS = [
    ARCHIVE_ITEMS[3], // dashboard-health-dark.webp
    ARCHIVE_ITEMS[5], // Hover.png
    ARCHIVE_ITEMS[6], // Login.png
    ARCHIVE_ITEMS[7], // OTIF Live - Popup.png
    ARCHIVE_ITEMS[1], // crypto-app-2.webp (duplicate to balance row size)
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
        <section data-theme="light" className="w-full py-32 bg-white overflow-hidden" id="archive">
            <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-20 mb-16">
                {/* Premium Pulsing Neon Green Badge & Centered Heading */}
                <div className="flex flex-col items-center text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-dark font-sans font-black text-[9px] uppercase tracking-widest mb-4 shadow-[0_4px_16px_rgba(41,208,103,0.08)]">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                        02 / LABS & EXPLORATIONS
                    </div>
                    <h2 className="text-4xl md:text-5xl font-serif text-brand-dark tracking-tighter max-w-2xl mb-4 leading-tight">
                        UI Archive<span className="text-brand-accent">.</span>
                    </h2>
                    <p className="font-sans text-brand-dark/70 text-base md:text-lg max-w-lg leading-relaxed">
                        Exploraciones de interfaz, interacciones avanzadas y prototipos experimentales que validan la estética y la técnica.
                    </p>
                </div>
            </div>

            {/* Infinite Marquee Carousels */}
            <div className="flex flex-col gap-8 relative select-none">
                {/* Fade overlays on edges */}
                <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none" />

                {/* Track 1: Moves Left */}
                <div className="w-full overflow-hidden">
                    <div className="flex gap-6 w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animation-none">
                        {[...ROW_1_ITEMS, ...ROW_1_ITEMS].map((item, index) => (
                            <button
                                key={`row1-${item.id}-${index}`}
                                className="w-[280px] sm:w-[350px] md:w-[400px] h-[180px] sm:h-[220px] md:h-[260px] relative rounded-2xl overflow-hidden group cursor-none border border-brand-dark/10 hover:border-brand-accent/40 hover:shadow-[0_20px_40px_rgba(41,208,103,0.06)] transition-all duration-500 text-left flex-shrink-0"
                                onClick={() => setSelectedItem(item)}
                                aria-label={`View full project: ${item.title}`}
                            >
                                {/* Project Image */}
                                <div className="absolute inset-0 bg-brand-cream-dark/30 flex items-center justify-center overflow-hidden">
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = `https://placehold.co/800x600/1a1a1b/e9e3d5?text=${encodeURIComponent('En construcción...')}`;
                                            }}
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-linear-to-br from-brand-dark/5 to-brand-accent/5" />
                                    )}
                                </div>

                                {/* Hover Overlay - Premium Backdrop Blur Glassmorphism */}
                                <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-2 p-6 text-center">
                                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-black text-brand-accent bg-brand-dark/80 px-4 py-2 rounded-full border border-brand-accent/30 shadow-[0_4px_16px_rgba(41,208,103,0.15)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                                        {item.category}
                                    </span>
                                    <span className="font-serif text-base md:text-lg text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75">
                                        {item.title}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Track 2: Moves Right */}
                <div className="w-full overflow-hidden">
                    <div className="flex gap-6 w-max animate-marquee-reverse hover:[animation-play-state:paused] motion-reduce:animation-none">
                        {[...ROW_2_ITEMS, ...ROW_2_ITEMS].map((item, index) => (
                            <button
                                key={`row2-${item.id}-${index}`}
                                className="w-[280px] sm:w-[350px] md:w-[400px] h-[180px] sm:h-[220px] md:h-[260px] relative rounded-2xl overflow-hidden group cursor-none border border-brand-dark/10 hover:border-brand-accent/40 hover:shadow-[0_20px_40px_rgba(41,208,103,0.06)] transition-all duration-500 text-left flex-shrink-0"
                                onClick={() => setSelectedItem(item)}
                                aria-label={`View full project: ${item.title}`}
                            >
                                {/* Project Image */}
                                <div className="absolute inset-0 bg-brand-cream-dark/30 flex items-center justify-center overflow-hidden">
                                    {item.image ? (
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            loading="lazy"
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                            onError={(e) => {
                                                const target = e.target as HTMLImageElement;
                                                target.src = `https://placehold.co/800x600/1a1a1b/e9e3d5?text=${encodeURIComponent('En construcción...')}`;
                                            }}
                                        />
                                    ) : (
                                        <div className="w-full h-full bg-linear-to-br from-brand-dark/5 to-brand-accent/5" />
                                    )}
                                </div>

                                {/* Hover Overlay - Premium Backdrop Blur Glassmorphism */}
                                <div className="absolute inset-0 bg-brand-dark/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-2 p-6 text-center">
                                    <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-black text-brand-accent bg-brand-dark/80 px-4 py-2 rounded-full border border-brand-accent/30 shadow-[0_4px_16px_rgba(41,208,103,0.15)] transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out">
                                        {item.category}
                                    </span>
                                    <span className="font-serif text-base md:text-lg text-white font-medium transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75">
                                        {item.title}
                                    </span>
                                </div>
                            </button>
                        ))}
                    </div>
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
                        <motion.div 
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 30 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-105 flex flex-col items-center justify-center p-4"
                        >
                            <img
                                src={selectedItem.image}
                                alt={selectedItem.title}
                                className="h-auto max-h-[85vh] w-auto max-w-full rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] pointer-events-auto"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = `https://placehold.co/1280x720/1a1a1b/e9e3d5?text=${encodeURIComponent('En construcción...')}`;
                                }}
                            />

                            <div className="mt-8 text-center">
                                <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-black text-brand-accent mb-2 block">
                                    {selectedItem.category}
                                </span>
                                <h3 className="font-serif text-2xl md:text-3xl text-white tracking-tight">
                                    {selectedItem.title}
                                </h3>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </section>
    );
};
