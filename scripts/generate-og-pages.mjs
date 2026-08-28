import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const SITE_URL = 'https://guillermoml.com';
const SITE_NAME = 'Guillermo Moreno';
const DIST_DIR = path.resolve('dist');
const INDEX_PATH = path.join(DIST_DIR, 'index.html');

const PROJECTS = {
  artisan: {
    title: 'Artisan | Caso de estudio SaaS para pequeños negocios - Guillermo Moreno',
    description:
      'Caso de estudio de Artisan, una plataforma para registrar ventas, gastos e inventario, nacida de un problema propio y llevada a producto activo para emprendedores.',
    image: '/projects/artisan/dashboard-demo.png',
    alt: 'Dashboard de Artisan con datos demo',
  },
  trustlens: {
    title: 'TrustLens | Caso de estudio LegalTech con IA - Guillermo Moreno',
    description:
      'Caso de estudio de TrustLens, una extensión de Chrome con IA para analizar términos y condiciones, detectar cláusulas relevantes y validar un MVP en público.',
    image: '/projects/trustlens/TrustLens - v1.0 - High risk.png',
    alt: 'Interfaz de TrustLens analizando términos y condiciones',
  },
  maternar: {
    title: 'Maternar | Caso de estudio de investigación UX - Guillermo Moreno',
    description:
      'Caso de estudio de Maternar, una exploración de UX research y estrategia de producto sobre donaciones, comunidad y apoyo entre madres.',
    image: '/projects/maternar/Home - Dark theme.png',
    alt: 'Interfaz de Maternar en modo oscuro',
  },
  ecovis: {
    title: 'Ecovis México | Caso de estudio B2B en Webflow - Guillermo Moreno',
    description:
      'Caso de estudio de Ecovis México, rediseño de un sitio B2B en Webflow para unificar la experiencia, comunicar valor comercial y facilitar el contacto con prospectos.',
    image: '/projects/ecovis/b2b-leads.png',
    alt: 'Rediseño del sitio de Ecovis México',
  },
};

const escapeHtml = (value) =>
  value
    .replaceAll('&', '&amp;')
    .replaceAll('"', '&quot;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;');

const absoluteUrl = (value) => {
  if (value.startsWith('http')) return value;
  return `${SITE_URL}${value.startsWith('/') ? value : `/${value}`}`;
};

const replaceTag = (html, selector, replacement) => {
  const escapedSelector = selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`<meta\\s+[^>]*${escapedSelector}[^>]*>`, 'i');
  return html.replace(pattern, replacement);
};

const setTitle = (html, title) => html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(title)}</title>`);

const setCanonical = (html, url) =>
  html.replace(/<link rel="canonical" href="[^"]*" \/>/i, `<link rel="canonical" href="${escapeHtml(url)}" />`);

const injectMeta = (html, project, url) => {
  const image = absoluteUrl(project.image);
  const description = escapeHtml(project.description);
  const title = escapeHtml(project.title);
  const alt = escapeHtml(project.alt);

  let next = setTitle(html, project.title);
  next = setCanonical(next, url);
  next = replaceTag(next, 'name="description"', `<meta name="description" content="${description}" />`);
  next = replaceTag(next, 'property="og:site_name"', `<meta property="og:site_name" content="${SITE_NAME}" />`);
  next = replaceTag(next, 'property="og:type"', '<meta property="og:type" content="article" />');
  next = replaceTag(next, 'property="og:url"', `<meta property="og:url" content="${escapeHtml(url)}" />`);
  next = replaceTag(next, 'property="og:title"', `<meta property="og:title" content="${title}" />`);
  next = replaceTag(next, 'property="og:description"', `<meta property="og:description" content="${description}" />`);
  next = replaceTag(next, 'property="og:image"', `<meta property="og:image" content="${escapeHtml(image)}" />`);
  next = replaceTag(next, 'property="og:image:alt"', `<meta property="og:image:alt" content="${alt}" />`);
  next = replaceTag(next, 'name="twitter:title"', `<meta name="twitter:title" content="${title}" />`);
  next = replaceTag(next, 'name="twitter:description"', `<meta name="twitter:description" content="${description}" />`);
  next = replaceTag(next, 'name="twitter:image"', `<meta name="twitter:image" content="${escapeHtml(image)}" />`);
  next = replaceTag(next, 'name="twitter:image:alt"', `<meta name="twitter:image:alt" content="${alt}" />`);

  return next;
};

const baseHtml = await readFile(INDEX_PATH, 'utf8');

await Promise.all(
  Object.entries(PROJECTS).map(async ([slug, project]) => {
    const url = `${SITE_URL}/project/${slug}`;
    const routeDir = path.join(DIST_DIR, 'project', slug);
    await mkdir(routeDir, { recursive: true });
    await writeFile(path.join(routeDir, 'index.html'), injectMeta(baseHtml, project, url));
  }),
);

console.log(`Generated Open Graph HTML for ${Object.keys(PROJECTS).length} project pages.`);
