import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';

interface ArchiveItem {
    id: number;
    title: string;
    category: string;
    image: string;
}

const ARCHIVE_ITEMS: ArchiveItem[] = [
    { id: 1, title: 'Subs Tracker 2.0', category: 'SaaS', image: '/UI/subs-tracker-2.webp' },
    { id: 2, title: 'Crypto Wallet App', category: 'Fintech', image: '/UI/crypto-app-2.webp' },
    { id: 3, title: 'Health Analytics Light', category: 'Healthcare', image: '/UI/dashboard-health-light.webp' },
    { id: 4, title: 'Health Analytics Dark', category: 'Healthcare', image: '/UI/dashboard-health-dark.webp' },
    { id: 6, title: 'Interactive Hover Cards', category: 'Microinteractions', image: '/UI/Hover.png' },
    { id: 7, title: 'Auth Experience Flow', category: 'UI Design', image: '/UI/Login.png' },
    { id: 8, title: 'OTIF Live Analytics', category: 'Logistics', image: '/UI/OTIF Live - Popup.png' }
];

export const UIArchive: React.FC = () => {
    const [selectedItem, setSelectedItem] = useState<ArchiveItem | null>(null);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setSelectedItem(null);
        };
        if (selectedItem) window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [selectedItem]);

    return (
        <section data-theme="dark" className="w-full px-5 py-14 sm:px-6 md:px-10 lg:px-12" id="archive">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 grid gap-5 lg:grid-cols-[0.75fr_1fr] lg:items-end">
                    <h2 className="text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-brand-cream md:text-5xl">
                        Archivo de producto.
                    </h2>
                    <p className="max-w-2xl text-base leading-7 text-brand-cream-dark lg:justify-self-end">
                        Interfaces, experimentos y cosas que he construido a lo largo del camino.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
                    {ARCHIVE_ITEMS.map((item, index) => (
                        <motion.button
                            key={item.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-70px' }}
                            transition={{ delay: index * 0.04, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                            onClick={() => setSelectedItem(item)}
                            className={`group relative min-h-[230px] overflow-hidden rounded-2xl border border-brand-cream/10 bg-brand-panel text-left transition-all duration-500 hover:-translate-y-1 hover:border-brand-accent/35 ${index === 0 ? 'lg:col-span-6 lg:row-span-2 lg:min-h-[480px]' : 'lg:col-span-3'
                                }`}
                            aria-label={`Ver exploración ${item.title}`}
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                loading="lazy"
                                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                                onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.src = `https://placehold.co/900x700/07100c/e8efe7?text=${encodeURIComponent('Imagen pendiente')}`;
                                }}
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-linear-to-t from-brand-dark via-brand-dark/74 to-transparent p-5 pt-16">
                                <p className="text-sm font-semibold text-brand-accent">{item.category}</p>
                                <p className="mt-1 text-lg font-semibold tracking-[-0.02em] text-brand-cream">{item.title}</p>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {selectedItem && (
                    <div
                        className="fixed inset-0 z-100 flex items-center justify-center p-5 sm:p-8"
                        role="dialog"
                        aria-modal="true"
                        aria-label={`Vista ampliada de ${selectedItem.title}`}
                    >
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedItem(null)}
                            className="absolute inset-0 bg-brand-dark/94 backdrop-blur-md"
                        />

                        <motion.button
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.92 }}
                            onClick={() => setSelectedItem(null)}
                            className="absolute right-5 top-5 z-110 flex h-11 w-11 items-center justify-center rounded-full bg-brand-cream text-brand-dark transition-transform hover:scale-[1.03] active:scale-[0.98]"
                            aria-label="Cerrar"
                        >
                            <X size={22} />
                        </motion.button>

                        <motion.div
                            initial={{ opacity: 0, y: 26 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 26 }}
                            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                            className="relative z-105 grid max-h-[88vh] w-full max-w-6xl gap-5"
                        >
                            <img
                                src={selectedItem.image}
                                alt={selectedItem.title}
                                className="mx-auto max-h-[78vh] w-auto max-w-full rounded-2xl border border-brand-cream/10 shadow-[0_32px_90px_rgba(0,0,0,0.5)]"
                            />
                            <div className="text-center">
                                <p className="text-sm font-semibold text-brand-accent">{selectedItem.category}</p>
                                <h3 className="mt-1 text-2xl font-semibold tracking-[-0.03em] text-brand-cream">
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
