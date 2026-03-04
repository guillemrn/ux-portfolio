import React from 'react';
import { ProjectCard, type ProjectData } from './ProjectCard';
// import { PillButton } from './PillButton';
// import { ArrowRight } from 'lucide-react';

const PROJECTS: ProjectData[] = [
    {
        id: '1',
        category: 'B2B & CRO',
        title: 'Optimizando la Conversión B2B: +45% en Leads',
        description: 'Rediseño estratégico enfocado en transformar un catálogo industrial complejo en una herramienta fluida de generación de leads cualificados.',
        imageUrl: '/projects/b2b-leads.png',
        tags: ['UX Audit', 'Lead Gen', 'SEO Técnico'],
        layout: 'horizontal'
    },
    {
        id: '2',
        category: 'UX Research & Social',
        title: 'De App de Donaciones a Ecosistema de Apoyo',
        description: 'Pivote estratégico basado en investigación cualitativa para resolver el sentimiento de soledad en la maternidad.',
        imageUrl: '/projects/maternar.png',
        tags: ['Research', 'Prototipado', 'Figma'],
        layout: 'vertical'
    },
    {
        id: '3',
        category: 'SaaS & Mobile',
        title: 'Productizando la Gestión de Eventos: SaaS DFY',
        description: 'Eliminando la fricción logística de la industria de eventos mediante un modelo asíncrono y validación por QR.',
        imageUrl: '/projects/events-saas.png',
        tags: ['Product Strategy', 'UI', 'Mobile-First'],
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
