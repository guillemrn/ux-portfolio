import React from 'react';

export const Footer: React.FC = () => {
    return (
        <footer className="w-full bg-brand-dark text-white pt-40 pb-12 px-6 md:px-12 flex flex-col justify-end min-h-[85vh] relative" id="contact">
            <div className="max-w-7xl mx-auto w-full flex flex-col grow justify-end">
                <div className="w-full flex justify-center mb-8">
                    {/* Extreme Typography - Using brand-accent for visibility */}
                    <h2 className="text-[14vw] leading-[0.8] tracking-tighter font-serif lowercase w-full text-brand-accent animate-fade-in-up">
                        let's talk.
                    </h2>
                </div>

                <div className="border-t border-white/10 pt-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-12 font-sans text-sm tracking-[0.2em] uppercase font-bold">
                    <div className="flex flex-col gap-6">
                        <span className="text-white/30 text-[10px]">Conecta</span>
                        <div className="flex gap-12">
                            <a href="mailto:hola@guillermo.design" className="hover:text-brand-accent transition-colors duration-300">Email</a>
                            <a href="#" className="hover:text-brand-accent transition-colors duration-300">LinkedIn</a>
                            <a href="#" className="hover:text-brand-accent transition-colors duration-300">Resume</a>
                        </div>
                    </div>

                    <div className="flex flex-col items-start md:items-end gap-6">
                        <img
                            src="/logo-white.svg"
                            alt="Guillermo Moreno Logo"
                            className="w-20 h-20 object-contain transition-all duration-500"
                        />
                        <div className="flex flex-col items-start md:items-end gap-2">
                            <span className="text-white/30 text-[10px]">© {new Date().getFullYear()}</span>
                            <span className="text-white font-sans text-[10px] tracking-widest uppercase">Hecho por Guillermo Moreno</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
