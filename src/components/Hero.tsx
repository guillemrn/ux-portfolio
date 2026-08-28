import React from 'react';
import { ArrowDown, FileText } from 'lucide-react';
import { PillButton } from './PillButton';

const PRACTICE_SIGNALS = ['Producto digital', 'Automatización', 'Desarrollo asistido por IA'];

export const Hero: React.FC = () => {
    return (
        <section className="relative w-full max-w-full overflow-hidden px-5 pt-24 pb-12 sm:px-6 md:px-10 lg:px-12 lg:pt-24">
            <div className="pointer-events-none absolute inset-0 opacity-80">
                <div className="absolute inset-0 bg-[linear-gradient(rgba(232,239,231,0.055)_1px,transparent_1px),linear-gradient(90deg,rgba(232,239,231,0.055)_1px,transparent_1px)] bg-[size:44px_44px] [mask-image:linear-gradient(to_bottom,black,transparent_78%)]" />
            </div>

            <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:min-h-[650px] lg:grid-cols-[1.04fr_0.72fr]">
                <div className="max-w-4xl">
                    <p className="mb-5 max-w-[21rem] text-base font-medium leading-7 text-brand-cream-dark sm:max-w-lg">
                        Product Designer · Producto, tecnología e IA
                    </p>

                    <h1 className="max-w-[21rem] text-[clamp(2.25rem,9.2vw,4rem)] font-semibold leading-[0.98] tracking-[-0.032em] text-brand-cream sm:max-w-5xl sm:text-6xl lg:text-7xl">
                        Diseño y construyo soluciones que vuelven simple lo difícil.
                    </h1>

                    <div className="mt-7 flex max-w-2xl flex-wrap gap-x-5 gap-y-2 text-sm font-semibold text-brand-cream-dark">
                        {PRACTICE_SIGNALS.map((signal) => (
                            <span key={signal} className="border-b border-brand-cream/16 pb-1">{signal}</span>
                        ))}
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <PillButton
                            variant="accent"
                            onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
                            iconLeft={<ArrowDown size={18} strokeWidth={2.4} />}
                            className="w-full px-7 py-4 text-sm sm:w-fit"
                        >
                            Ver trabajo
                        </PillButton>

                        <PillButton
                            variant="ghost"
                            onClick={() => window.open('/cv-guillermo-moreno.pdf', '_blank')}
                            iconLeft={<FileText size={18} strokeWidth={2.2} />}
                            className="w-full px-7 py-4 text-sm sm:w-fit"
                        >
                            Descargar CV
                        </PillButton>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                    <div className="relative overflow-hidden rounded-2xl border border-brand-cream/12 bg-brand-panel-soft p-3">
                        <img
                            src="/guillermo.PNG"
                            alt="Guillermo Moreno"
                            className="h-[380px] w-full rounded-xl object-cover grayscale contrast-110 sm:h-[460px]"
                            loading="eager"
                            fetchPriority="high"
                        />
                        <p className="mt-3 px-1 text-sm leading-6 text-brand-cream-dark">
                            5+ años conectando producto, usuarios, negocio y tecnología.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};
