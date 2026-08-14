import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export const Header: React.FC = () => {
    return (
        <header className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
            <motion.div
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="mx-auto w-full max-w-6xl pointer-events-auto"
            >
                <div className="flex h-16 items-center justify-start gap-3 rounded-2xl border border-brand-cream/10 bg-brand-panel/82 px-4 shadow-[0_20px_70px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:justify-between sm:px-5">
                    <Link to="/" className="flex min-w-0 items-center gap-3 group transition-transform hover:scale-[1.02] active:scale-[0.98]">
                        <img
                            src="/logo.svg"
                            alt="Guillermo Moreno Logo"
                            className="h-8 w-8 rounded-full bg-brand-accent p-1 object-contain"
                        />
                        <span className="hidden text-sm font-semibold text-brand-cream sm:block">
                            Guillermo Moreno
                        </span>
                    </Link>

                    <nav className="flex shrink-0 items-center gap-1 text-sm">
                        <a
                            href="#experience"
                            className="hidden rounded-full px-3 py-2 font-medium text-brand-cream-dark transition-colors duration-300 hover:bg-brand-cream/8 hover:text-brand-cream md:inline-flex"
                        >
                            Experiencia
                        </a>
                        <a
                            href="#work"
                            className="hidden rounded-full px-3 py-2 font-medium text-brand-cream-dark transition-colors duration-300 hover:bg-brand-cream/8 hover:text-brand-cream sm:inline-flex"
                        >
                            Proyectos
                        </a>
                        <a
                            href="#archive"
                            className="hidden rounded-full px-3 py-2 font-medium text-brand-cream-dark transition-colors duration-300 hover:bg-brand-cream/8 hover:text-brand-cream sm:inline-flex"
                        >
                            Archivo
                        </a>
                        <a
                            href="#contact"
                            className="rounded-full bg-brand-accent px-3 py-2 font-semibold text-brand-dark transition-transform duration-300 hover:scale-[1.02] active:scale-[0.98] sm:px-4"
                        >
                            <span className="sm:hidden">Hola</span>
                            <span className="hidden sm:inline">Contacto</span>
                        </a>
                    </nav>
                </div>
            </motion.div>
        </header>
    );
};
