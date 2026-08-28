import React from 'react';
import { motion } from 'framer-motion';

const EXPERIENCE = [
    {
        company: 'Prey',
        period: 'Nov 2021 - Mar 2026',
        role: 'Product Designer',
        summary: 'Diseño end-to-end para productos de ciberseguridad junto a Producto, Ingeniería y QA.',
        proof: 'Design system de 100+ componentes, dashboards y HEART.'
    },
    {
        company: 'Fortia Technology',
        period: 'Dic 2020 - Nov 2021',
        role: 'UI Designer',
        summary: 'Interfaces y prototipos para HR Tech, con documentación de comportamiento y handoff.',
        proof: 'Librería de 30+ componentes y handoff accesible.'
    }
];

export const ExperienceSection: React.FC = () => {
    return (
        <section className="w-full px-5 py-14 sm:px-6 md:px-10 lg:px-12" id="experience">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-start">
                    <div className="lg:sticky lg:top-28">
                        <h2 className="max-w-2xl text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-brand-cream md:text-5xl">
                            Experiencia en producto real.
                        </h2>
                        <p className="mt-5 max-w-xl text-base leading-7 text-brand-cream-dark">
                            5+ años diseñando productos digitales junto a equipos de Producto e Ingeniería.
                        </p>
                    </div>

                    <div className="grid gap-3">
                        {EXPERIENCE.map((item, index) => (
                            <motion.article
                                key={item.company}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-80px' }}
                                transition={{ delay: index * 0.06, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                className="border-t border-brand-cream/10 py-5"
                            >
                                <div className="grid gap-4 md:grid-cols-[0.5fr_1fr]">
                                    <div>
                                        <p className="text-sm font-semibold text-brand-accent">{item.period}</p>
                                        <h3 className="mt-2 text-3xl font-semibold tracking-[-0.03em] text-brand-cream">
                                            {item.company}
                                        </h3>
                                        <p className="mt-2 text-base font-semibold text-brand-cream-dark">{item.role}</p>
                                    </div>

                                    <div>
                                        <p className="text-base leading-7 text-brand-cream-dark">{item.summary}</p>
                                        <p className="mt-3 text-sm font-semibold text-brand-cream">{item.proof}</p>
                                    </div>
                                </div>
                            </motion.article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
