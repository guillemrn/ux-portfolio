import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer data-theme="dark" className="w-full px-5 pb-8 pt-14 sm:px-6 md:px-10 lg:px-12" id="contact">
            <div className="mx-auto max-w-7xl border-t border-brand-cream/10 pt-10">
                <div className="grid gap-8 lg:grid-cols-[1.05fr_0.55fr] lg:items-end">
                    <div>
                        <h2 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-brand-cream md:text-5xl">
                            Hablemos de producto.
                        </h2>
                        <p className="mt-5 max-w-2xl text-base leading-7 text-brand-cream-dark">
                            De entender el problema a construir una solución.
                        </p>
                    </div>

                    <div className="grid gap-4">
                        <a
                            href="https://calendar.app.google/XMitpYAAxeGATFc28"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-brand-accent px-7 py-4 text-center font-semibold text-brand-dark transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98]"
                        >
                            Agendar llamada
                            <ArrowUpRight size={18} strokeWidth={2.4} />
                        </a>
                        <a
                            href="mailto:hola@guillermoml.com"
                            className="text-center text-sm font-semibold text-brand-cream-dark transition-colors hover:text-brand-cream lg:text-left"
                        >
                            hola@guillermoml.com
                        </a>
                    </div>
                </div>

                <div className="mt-10 flex flex-col gap-6 border-t border-brand-cream/10 pt-8 text-sm text-brand-cream-dark md:flex-row md:items-center md:justify-between">
                    <div className="flex flex-wrap gap-5">
                        <a href="https://linkedin.com/in/guillemrn" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-cream">
                            LinkedIn
                        </a>
                        <a href="/cv-guillermo-moreno.pdf" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-brand-cream">
                            CV
                        </a>
                        <a href="#work" className="transition-colors hover:text-brand-cream">
                            Proyectos
                        </a>
                    </div>
                    <p>© {new Date().getFullYear()} Guillermo Moreno.</p>
                </div>
            </div>
        </footer>
    );
};
