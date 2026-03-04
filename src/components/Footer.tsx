import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-brand-dark text-white py-32 px-6 md:px-12 flex flex-col justify-end min-h-[70vh] relative" id="contact">
            <div className="max-w-7xl mx-auto w-full flex flex-col grow justify-between">

                {/* Main Content Area: Split 50/50 Desktop, Stack Mobile */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24 mb-32">

                    {/* Left Column - Elegant Serif Typography */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start gap-6">
                        <span className="font-sans text-[10px] uppercase tracking-[0.2em] font-black text-brand-accent/80 block">
                            Abierto a nuevas oportunidades
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-7xl leading-[1.1] tracking-tighter font-serif text-white w-full animate-fade-in-up">
                            ¿Hablamos de tu próximo reto de negocio?
                        </h2>
                    </div>

                    {/* Right Column - Conversion and Contact */}
                    <div className="w-full lg:w-1/2 flex flex-col items-start lg:pt-8">
                        <p className="font-sans text-brand-cream-dark text-lg md:text-xl font-light leading-relaxed mb-10 max-w-lg">
                            Si buscas escalar tu producto digital con UX estratégico, o necesitas un Product Designer con habilidades Frontend para tu próximo proyecto B2B/SaaS, hablemos.
                        </p>

                        <div className="flex flex-col items-start w-full">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-fit bg-brand-accent text-brand-dark px-10 py-5 rounded-full font-sans text-sm uppercase tracking-widest font-black inline-flex items-center gap-3 hover:bg-brand-cream hover:scale-[1.02] transition-all duration-300 no-underline shadow-xl shadow-brand-accent/20"
                            >
                                Agendar Consulta Estratégica <span>↗</span>
                            </a>

                            <p className="font-sans text-brand-cream-dark/80 text-sm md:text-base mt-6 text-left">
                                O escríbeme directo a:{' '}
                                <a
                                    href="mailto:hola@guillermoml.com"
                                    className="text-white underline decoration-brand-accent/30 hover:decoration-brand-accent hover:text-brand-accent transition-colors duration-300 ml-1 font-medium"
                                >
                                    hola@guillermoml.com
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-brand-cream/10 pt-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 font-sans">
                    {/* Left: Links */}
                    <div className="flex gap-8 md:gap-12 flex-wrap justify-center text-[11px] tracking-[0.2em] uppercase font-bold text-brand-cream/80">
                        <a href="mailto:hola@guillermoml.com" className="hover:text-brand-accent transition-colors duration-300 no-underline">
                            Email
                        </a>
                        <a href="https://linkedin.com/in/guillemrn" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors duration-300 no-underline">
                            LinkedIn
                        </a>
                        <a href="/cv-guillermo-moreno.pdf" target="_blank" rel="noopener noreferrer" className="hover:text-brand-accent transition-colors duration-300 no-underline">
                            Resume
                        </a>
                    </div>

                    {/* Right: Copyright */}
                    <div className="text-brand-cream/40 text-[10px] md:text-xs text-center font-medium tracking-wide">
                        © {new Date().getFullYear()}. DISEÑO POR GUILLERMO MORENO.
                    </div>
                </div>

            </div>
        </footer>
    );
};
