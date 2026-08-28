import React from 'react';
import { ProjectCard, type ProjectData } from './ProjectCard';

// eslint-disable-next-line react-refresh/only-export-components
export const PROJECTS: ProjectData[] = [
    {
        id: 'trustlens',
        category: 'LegalTech / AI SaaS',
        title: 'TrustLens: Entender lo que aceptas antes de dar clic',
        description: 'Extensión de Chrome con IA para analizar términos y condiciones y señalar cláusulas que podrían afectar datos, dinero o propiedad intelectual.',
        imageUrl: '/projects/trustlens/TrustLens - v1.0 - High risk.png',
        signal: 'Chrome Extension, LLM, Supabase',
    },
    {
        id: 'maternar',
        category: 'Social / HealthTech',
        title: 'Maternar: Más allá de una app de donaciones',
        description: 'Exploración de investigación y estrategia sobre cómo conectar apoyo material, comunidad y maternidad.',
        imageUrl: '/projects/maternar/Home - Dark theme.png',
        signal: 'User Research, Strategy, Figma',
    },
    {
        id: 'ecovis',
        category: 'Industrial / Energía',
        title: 'Ecovis México: De sitio corporativo a herramienta comercial',
        description: 'Rediseño B2B para comunicar mejor el valor de sus soluciones y facilitar el contacto con nuevos prospectos.',
        imageUrl: '/projects/ecovis/b2b-leads.png',
        signal: 'UX/UI, Webflow, B2B',
    },
];

export const ProjectsGrid: React.FC = () => {
    return (
        <section
            data-theme="dark"
            className="relative w-full px-5 py-14 sm:px-6 md:px-10 lg:px-12"
            id="work"
        >
            <div className="mx-auto max-w-7xl">
                <div className="mb-7 grid gap-4 lg:grid-cols-[0.95fr_0.65fr] lg:items-end">
                    <h2 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.035em] text-brand-cream md:text-5xl">
                        Casos donde la claridad tuvo consecuencias.
                    </h2>
                    <p className="max-w-xl text-base leading-7 text-brand-cream-dark">
                        Tres piezas para leer estrategia, criterio visual y ejecución de producto sin rodeos.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-5">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
};
