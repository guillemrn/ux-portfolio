import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
    return (
        <header className="fixed top-6 left-0 right-0 z-50 px-6 pointer-events-none">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-fit mx-auto pointer-events-auto"
            >
                <div className="flex items-center gap-6 md:gap-8 px-5 py-2.5 backdrop-blur-xl bg-white/70 border border-brand-dark/5 rounded-full shadow-[0_8px_32px_rgba(0,0,0,0.04)]">
                    <Link to="/" className="flex items-center group transition-transform hover:scale-105 active:scale-95">
                        <img
                            src="/Logo.svg"
                            alt="Guillermo Moreno Logo"
                            className="w-7 h-7 md:w-8 md:h-8 object-contain"
                        />
                    </Link>

                    <div className="w-px h-3 bg-brand-dark/10" />

                    <nav className="flex items-center gap-6">
                        <a
                            href="#work"
                            className="text-[9px] md:text-[10px] font-sans uppercase tracking-[0.2em] font-black text-brand-dark/60 hover:text-brand-dark transition-colors duration-300"
                        >
                            Proyectos
                        </a>
                        <a
                            href="#contact"
                            className="text-[9px] md:text-[10px] font-sans uppercase tracking-[0.2em] font-black text-brand-dark/60 hover:text-brand-dark transition-colors duration-300"
                        >
                            Contacto
                        </a>
                    </nav>
                </div>
            </motion.div>
        </header>
    );
};
