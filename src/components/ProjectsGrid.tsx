import React from 'react';
import { ProjectCard, type ProjectData } from './ProjectCard';
// import { PillButton } from './PillButton';
// import { ArrowRight } from 'lucide-react';

// eslint-disable-next-line react-refresh/only-export-components
export const PROJECTS: ProjectData[] = [
    {
        id: 'ecovis',
        category: 'B2B & CRO',
        title: 'Ecovis México: Optimizando la Conversión B2B',
        description: 'Rediseño estratégico enfocado en transformar un catálogo industrial en una herramienta de generación de leads.',
        imageUrl: '/projects/ecovis/b2b-leads.png',
        tags: ['UX Audit', 'CRO', 'SEO'],
        layout: 'horizontal'
    },
    {
        id: 'maternar',
        category: 'UX Research & Social',
        title: 'Maternar: Diseñando una Red de Apoyo para Madres',
        description: 'Pivote estratégico de una app de donaciones a un ecosistema de apoyo para resolver la soledad materna.',
        imageUrl: '/projects/maternar/maternar.png',
        tags: ['UX Strategy', 'Research', 'Figma'],
        layout: 'vertical'
    },
    // {
    //     id: 'invitaciones-digitales',
    //     category: 'SaaS & Mobile',
    //     title: 'Invitaciones Digitales: Productizando la Gestión de Eventos',
    //     description: 'Eliminando la fricción logística mediante un modelo "Done-For-You" y validación por QR en puerta.',
    //     imageUrl: '/projects/events-saas.png',
    //     tags: ['Product', 'Mobile-First'],
    //     layout: 'vertical'
    // },
    {
        id: 'trustlens',
        category: 'AI & SaaS',
        title: 'TrustLens: De "punto ciego" legal a escudo financiero con IA',
        description: 'Extensión de Chrome impulsada por IA que traduce términos de servicio complejos en insights claros para proteger el capital y la IP.',
        imageUrl: '/projects/trustlens/hero.png',
        tags: ['AI Product', 'UX/UI', 'Extension'],
        layout: 'vertical'
    }
];

export const ProjectsGrid: React.FC = () => {
    return (
        <section
            data-theme="light"
            className="w-full pt-32 pb-40 px-6 md:px-12 lg:px-20 bg-brand-cream relative"
            id="work"
        >
            <div className="max-w-5xl mx-auto">
                {/* Section Title */}
                <h2 className="text-4xl md:text-5xl font-serif text-brand-dark mb-16">
                    Selected Work
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 lg:gap-8 mb-16">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                {/* <div className="flex justify-center mt-20">
                    <PillButton
                        variant="accent"
                        className="w-full md:w-auto min-w-[320px] py-6 text-base justify-between px-10 group"
                        iconRight={<ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />}
                    >
                        View All Cases
                    </PillButton>
                </div> */}
            </div>
        </section>
    );
};
