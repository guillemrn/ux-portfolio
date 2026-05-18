import React from 'react';
import { PillButton } from './PillButton';
import { ArrowDown, FileText } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section data-theme="light" className="relative min-h-[100vh] flex items-center justify-center px-6 pt-36 pb-20 md:px-12 lg:px-20 overflow-hidden">
            {/* Subtle editorial warm glow backdrop */}
            <div className="absolute inset-0 bg-gradient-to-b from-brand-cream/30 via-transparent to-transparent pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full flex flex-col items-center text-center gap-6 sm:gap-8 animate-fade-in-up z-10">

                {/* Premium Pulsing Neon Green Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/30 text-brand-dark font-sans font-black text-[9px] uppercase tracking-widest mb-2 shadow-[0_4px_16px_rgba(41,208,103,0.08)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-pulse" />
                    Product Design & UX/UI
                </div>

                {/* Refined Typography - H1 Serif (Made wider and detailed in neon green) */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[1.12] tracking-tighter text-brand-dark font-serif max-w-6xl">
                    Diseño productos digitales <span className="relative inline-block px-1 text-brand-dark z-10">accesibles<span className="absolute bottom-1 sm:bottom-2 left-0 w-full h-[0.22em] bg-brand-accent -z-10 rounded-full" /></span> que las personas realmente pueden usar<span className="text-brand-accent">.</span>
                </h1>

                {/* Details Wrapper - Centered Editorial Layout (Made wider) */}
                <div className="font-sans text-brand-dark max-w-3xl flex flex-col items-center gap-8 w-full">
                    <p className="text-lg sm:text-xl md:text-2xl font-light text-brand-dark/80 leading-relaxed max-w-2xl">
                        Product Designer con 5 años de exp. Design systems escalables,
                        accesibilidad (WCAG), y ejecución técnica (HTML/CSS/JS/Tailwind).
                    </p>

                    {/* Credibility Paragraph - Horizontal Editorial Frame (Styled with Neon Green borders) */}
                    <div className="w-full border-t border-b border-brand-accent/30 py-4 px-6 my-2 text-sm sm:text-base md:text-lg font-light text-brand-dark/80 leading-relaxed font-serif italic">
                        Trabajé con <span className="font-bold text-brand-dark not-italic">Prey</span> (8M+ dispositivos protegidos) y <span className="font-bold text-brand-dark not-italic">Fortia</span> (HR Tech para LATAM). Actualmente building <span className="font-bold text-brand-dark not-italic">TrustLens</span>.
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 pt-2 w-full sm:w-auto">
                        <PillButton
                            variant="primary"
                            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                            iconLeft={<ArrowDown size={20} strokeWidth={3} />}
                            className="w-full sm:w-fit text-sm uppercase tracking-widest font-black py-4.5 px-8"
                        >
                            Ver casos de estudio
                        </PillButton>

                        <PillButton
                            variant="ghost"
                            onClick={() => window.open('/cv-guillermo-moreno.pdf', '_blank')}
                            iconLeft={<FileText size={20} />}
                            className="w-full sm:w-fit text-sm uppercase tracking-widest font-black py-4.5 px-8"
                        >
                            Descargar CV
                        </PillButton>
                    </div>
                </div>
            </div>
        </section>
    );
};
