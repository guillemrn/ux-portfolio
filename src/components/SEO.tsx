import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PROJECTS_DATA } from './CaseStudy';

const SITE_URL = 'https://guillermoml.com';
const SITE_NAME = 'Guillermo Moreno';
const LINKEDIN_URL = 'https://linkedin.com/in/guillemrn';
const DEFAULT_TITLE = 'Guillermo Moreno | Product Designer & Builder';
const DEFAULT_DESCRIPTION =
    'Product Designer que diseña y construye productos digitales para SaaS, B2B, comunidades y herramientas con IA.';
const DEFAULT_IMAGE = `${SITE_URL}/og-image.png`;

const normalizeDescription = (text: string) => {
    const cleanText = text.replace(/\s+/g, ' ').trim();
    return cleanText.length > 158 ? `${cleanText.slice(0, 155).trim()}...` : cleanText;
};

const setMeta = (attribute: 'name' | 'property', key: string, content: string) => {
    let meta = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);

    if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attribute, key);
        document.head.appendChild(meta);
    }

    meta.setAttribute('content', content);
};

const setCanonical = (href: string) => {
    let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');

    if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
    }

    link.setAttribute('href', href);
};

const setStructuredData = (data: Record<string, unknown>) => {
    const id = 'portfolio-structured-data';
    let script = document.getElementById(id) as HTMLScriptElement | null;

    if (!script) {
        script = document.createElement('script');
        script.id = id;
        script.type = 'application/ld+json';
        document.head.appendChild(script);
    }

    script.textContent = JSON.stringify(data);
};

export const SEO: React.FC = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        const projectMatch = pathname.match(/^\/project\/([^/]+)/);
        const projectId = projectMatch?.[1];
        const project = projectId ? PROJECTS_DATA[projectId] : null;
        const canonicalPath = pathname === '/' ? '/' : pathname;
        const canonicalUrl = `${SITE_URL}${canonicalPath}`;

        const title = project
            ? `${project.seo?.title || project.title} - Guillermo Moreno`
            : DEFAULT_TITLE;
        const description = project
            ? normalizeDescription(project.seo?.description || `${project.subtitle} ${project.overview} ${project.problem}`)
            : DEFAULT_DESCRIPTION;
        const image = DEFAULT_IMAGE;
        const type = project ? 'article' : 'website';

        document.title = title;
        setCanonical(canonicalUrl);

        setMeta('name', 'description', description);
        setMeta('name', 'robots', 'index, follow');
        setMeta('name', 'author', 'Guillermo Moreno');
        setMeta('name', 'theme-color', '#07100c');

        setMeta('property', 'og:locale', 'es_MX');
        setMeta('property', 'og:site_name', SITE_NAME);
        setMeta('property', 'og:type', type);
        setMeta('property', 'og:url', canonicalUrl);
        setMeta('property', 'og:title', title);
        setMeta('property', 'og:description', description);
        setMeta('property', 'og:image', image);
        setMeta('property', 'og:image:width', '1200');
        setMeta('property', 'og:image:height', '630');
        setMeta('property', 'og:image:alt', 'Guillermo Moreno, Product Designer & Builder');

        setMeta('name', 'twitter:card', 'summary_large_image');
        setMeta('name', 'twitter:title', title);
        setMeta('name', 'twitter:description', description);
        setMeta('name', 'twitter:image', image);
        setMeta('name', 'twitter:image:alt', 'Guillermo Moreno, Product Designer & Builder');

        setStructuredData(project ? {
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: project.title,
            headline: project.title,
            description,
            image,
            url: canonicalUrl,
            inLanguage: 'es-MX',
            author: {
                '@type': 'Person',
                name: 'Guillermo Moreno',
                jobTitle: 'Product Designer',
                url: SITE_URL,
            },
            about: project.metadata.Industry,
            keywords: [
                'Product Design',
                'UX/UI',
                project.metadata.Industry,
                project.metadata.Deliverables,
            ].filter(Boolean),
        } : {
            '@context': 'https://schema.org',
            '@type': 'Person',
            name: 'Guillermo Moreno',
            jobTitle: 'Product Designer',
            url: SITE_URL,
            image,
            knowsAbout: [
                'Product Design',
                'UX/UI',
                'Design Systems',
                'SaaS',
                'B2B',
                'Accessibility',
                'Frontend',
                'AI-assisted prototyping',
            ],
            sameAs: [
                LINKEDIN_URL,
            ],
        });
    }, [pathname]);

    return null;
};
