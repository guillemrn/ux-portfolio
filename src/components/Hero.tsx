import React from 'react';
import { PillButton } from './PillButton';
import { HeroVisual } from './HeroVisual';
import { ArrowDown, FileText } from 'lucide-react';

export const Hero: React.FC = () => {
    return (
        <section data-theme="light" className="relative min-h-[90vh] flex items-center px-6 pt-32 pb-20 md:px-12 lg:px-20 overflow-hidden">
            <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                {/* Left Side: Content */}
                <div className="animate-fade-in-up flex flex-col items-start gap-4 z-10">
                    {/* Refined Typography - H1 Serif */}
                    <h1 className="text-4xl md:text-5xl lg:text-5xl leading-[1.1] tracking-tighter text-brand-dark font-serif pb-8 w-full">
                        Diseño productos que las personas entienden y los negocios necesitan.
                    </h1>

                    {/* Subtitle - Sans-Serif */}
                    <div className="font-sans text-brand-dark max-w-xl text-left flex flex-col items-start gap-10">
                        <p className="text-xl md:text-2xl font-light text-brand-dark/80 leading-relaxed">
                            Product Designer con 5 años de experiencia y mentalidad de builder. Especializado en llevar ideas desde la investigación profunda hasta la ejecución técnica con No-Code y Frontend.
                        </p>

                        <div className="flex flex-wrap gap-6 pt-4">
                            <PillButton
                                variant="primary"
                                onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                                iconLeft={<ArrowDown size={20} strokeWidth={3} />}
                                className="text-sm uppercase tracking-widest font-black py-5 px-10"
                            >
                                Ver Proyectos
                            </PillButton>

                            <PillButton
                                variant="ghost"
                                onClick={() => window.open('/cv-guillermo-moreno.pdf', '_blank')}
                                iconLeft={<FileText size={20} />}
                                className="text-sm uppercase tracking-widest font-black py-5 px-8"
                            >
                                Descargar CV
                            </PillButton>
                        </div>
                    </div>
                </div>

                {/* Right Side: Visual Composition */}
                <div className="hidden lg:block relative z-0">
                    <HeroVisual />
                </div>

            </div>
        </section>
    );
};
