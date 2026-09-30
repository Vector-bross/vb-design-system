/**
 * Page templates — full-page compositions assembled ONLY from existing
 * components (single source: the template pages import the exact same
 * component files used by the styleguide, no markup duplication).
 *
 * `components` lists the composition in order. `reg` links a slot to a
 * registry id (for the "View component" links on the template detail page);
 * `variant` notes which variant of a multi-variant component is used.
 */
export interface TemplateSlot {
  /** Human label shown in the composition list. */
  label: string;
  /** Registry id, when the component exists in the Library (for deep links). */
  reg?: string;
  /** Variant note (multi-variant components). */
  variant?: string;
}

export interface TemplateEntry {
  id: string;
  name: string;
  description: string;
  category: string;
  status?: 'stable' | 'beta';
  /** Figma source nodes. */
  figma?: string;
  figmaMobile?: string;
  figmaMenu?: string;
  /** When set, this template belongs to a module (overview + detail pair). */
  module?: string;
  components: TemplateSlot[];
}

export const templateCategories: { id: string; label: string; description: string }[] = [
  { id: 'pages', label: 'Page templates', description: 'Full pages assembled from existing components.' },
];

/** Modules group an overview + detail page. Order defines display order. */
export const templateModules: { id: string; label: string }[] = [
  { id: 'services', label: 'Services' },
  { id: 'news', label: 'News' },
  { id: 'careers', label: 'Careers' },
  { id: 'team', label: 'Team' },
  { id: 'locations', label: 'Locations' },
];

/** Single pages (no module). */
export const singleTemplates = () => templates.filter((t) => !t.module);
/** Templates for a given module, in array order. */
export const moduleTemplates = (id: string) => templates.filter((t) => t.module === id);

export const templates: TemplateEntry[] = [
  {
    id: 'homepage',
    name: 'Homepage',
    description: 'The full homepage: navigation, hero, editorial content, services, news, team, brands, stats, FAQ and conversion bands.',
    category: 'pages',
    status: 'stable',
    figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=12334-33379',
    figmaMobile: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14259-71072',
    figmaMenu: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14284-97134',
    components: [
      { label: 'Navbar', reg: 'navbar', variant: 'default' },
      { label: 'Hero banner', reg: 'hero', variant: 'With image' },
      { label: 'IntroBanner', reg: 'intro-banner' },
      { label: 'Text content', reg: 'text-content' },
      { label: 'Quote', reg: 'quote' },
      { label: 'Services section', reg: 'services-section' },
      { label: 'CTA — small', reg: 'cta-small' },
      { label: 'News section', reg: 'news-section' },
      { label: 'Why us? section', reg: 'usp-section' },
      { label: 'Team section', reg: 'team-section' },
      { label: 'Brands section', reg: 'brands-section' },
      { label: 'Stats section', reg: 'stats-section' },
      { label: 'FAQ section', reg: 'faq-section' },
      { label: 'CTA — large', reg: 'cta-large' },
      { label: 'Newsletter', reg: 'newsletter' },
      { label: 'Footer', reg: 'footer' },
    ],
  },
  {
    id: 'aboutus',
    name: 'About us',
    description: 'The About us page: navigation, breadcrumb, page header, editorial content, values, testimonial, team, stats and conversion bands.',
    category: 'pages',
    status: 'stable',
    figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14284-96146',
    figmaMenu: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14284-97134',
    components: [
      { label: 'Navbar', reg: 'navbar', variant: 'default' },
      { label: 'Breadcrumb', reg: 'breadcrumb' },
      { label: 'Headers-content', reg: 'header', variant: 'Title page · image right' },
      { label: 'Text content', reg: 'text-content' },
      { label: 'Why us? section', reg: 'usp-section' },
      { label: 'Quote', reg: 'quote' },
      { label: 'Team section', reg: 'team-section' },
      { label: 'Stats section', reg: 'stats-section' },
      { label: 'CTA — large', reg: 'cta-large' },
      { label: 'Newsletter', reg: 'newsletter' },
      { label: 'Footer', reg: 'footer' },
    ],
  },
  {
    id: 'services',
    module: 'services',
    name: 'Services',
    description: 'The Services page: navigation, breadcrumb, the full services list and conversion bands.',
    category: 'pages',
    status: 'stable',
    figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14284-92566',
    figmaMenu: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14284-97134',
    components: [
      { label: 'Navbar', reg: 'navbar', variant: 'default' },
      { label: 'Breadcrumb', reg: 'breadcrumb' },
      { label: 'Services section', reg: 'services-section' },
      { label: 'CTA — large', reg: 'cta-large' },
      { label: 'Newsletter', reg: 'newsletter' },
      { label: 'Footer', reg: 'footer' },
    ],
  },
  {
    id: 'service-detail',
    module: 'services',
    name: 'Service detail',
    description: 'A single service page: navigation, breadcrumb, header, editorial content, testimonial, FAQ, related news and conversion bands.',
    category: 'pages',
    status: 'stable',
    figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14284-92590',
    figmaMenu: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14284-97134',
    components: [
      { label: 'Navbar', reg: 'navbar', variant: 'default' },
      { label: 'Breadcrumb', reg: 'breadcrumb' },
      { label: 'Headers-content', reg: 'header', variant: 'Title page · image right' },
      { label: 'Text content', reg: 'text-content' },
      { label: 'Quote', reg: 'quote' },
      { label: 'FAQ section', reg: 'faq-section' },
      { label: 'CTA — small', reg: 'cta-small' },
      { label: 'News section', reg: 'news-section' },
      { label: 'CTA — large', reg: 'cta-large' },
      { label: 'Newsletter', reg: 'newsletter' },
      { label: 'Footer', reg: 'footer' },
    ],
  },
  {
    id: 'careers',
    module: 'careers',
    name: 'Careers',
    description: 'The Careers page: navigation, breadcrumb, header, open positions, editorial content, FAQ and conversion bands.',
    category: 'pages',
    status: 'stable',
    figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14278-86276',
    figmaMenu: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14284-97134',
    components: [
      { label: 'Navbar', reg: 'navbar', variant: 'default' },
      { label: 'Breadcrumb', reg: 'breadcrumb' },
      { label: 'Headers-content', reg: 'header', variant: 'Title page · image right' },
      { label: 'Jobs section', reg: 'jobs-section' },
      { label: 'CTA — small', reg: 'cta-small' },
      { label: 'Text content', reg: 'text-content' },
      { label: 'FAQ section', reg: 'faq-section' },
      { label: 'CTA — large', reg: 'cta-large' },
      { label: 'Newsletter', reg: 'newsletter' },
      { label: 'Footer', reg: 'footer' },
    ],
  },
  {
    id: 'career-detail',
    module: 'careers',
    name: 'Career detail',
    description: 'A single job posting: navigation, breadcrumb, job header, rich-text description, application form and conversion bands.',
    category: 'pages',
    status: 'stable',
    figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14280-91058',
    figmaMenu: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14284-97134',
    components: [
      { label: 'Navbar', reg: 'navbar', variant: 'default' },
      { label: 'Breadcrumb', reg: 'breadcrumb' },
      { label: 'Headers-content', reg: 'header', variant: 'Job' },
      { label: 'CKEditor styles', reg: 'ckeditor' },
      { label: 'Form section', reg: 'form-section', variant: 'Apply' },
      { label: 'CTA — large', reg: 'cta-large' },
      { label: 'Newsletter', reg: 'newsletter' },
      { label: 'Footer', reg: 'footer' },
    ],
  },
  {
    id: 'news',
    module: 'news',
    name: 'News',
    description: 'The Newsroom page: navigation, breadcrumb, the article grid and conversion bands.',
    category: 'pages',
    status: 'stable',
    figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14278-82935',
    figmaMenu: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14284-97134',
    components: [
      { label: 'Navbar', reg: 'navbar', variant: 'default' },
      { label: 'Breadcrumb', reg: 'breadcrumb' },
      { label: 'News section', reg: 'news-section' },
      { label: 'CTA — large', reg: 'cta-large' },
      { label: 'Newsletter', reg: 'newsletter' },
      { label: 'Footer', reg: 'footer' },
    ],
  },
  {
    id: 'news-detail',
    module: 'news',
    name: 'News detail',
    description: 'A single article: navigation, breadcrumb, blog header, rich-text article, related news, values and conversion bands.',
    category: 'pages',
    status: 'stable',
    figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14278-82963',
    figmaMenu: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14284-97134',
    components: [
      { label: 'Navbar', reg: 'navbar', variant: 'default' },
      { label: 'Breadcrumb', reg: 'breadcrumb' },
      { label: 'Headers-content', reg: 'header', variant: 'Blog' },
      { label: 'CKEditor styles', reg: 'ckeditor' },
      { label: 'News section', reg: 'news-section' },
      { label: 'Why us? section', reg: 'usp-section' },
      { label: 'CTA — large', reg: 'cta-large' },
      { label: 'Newsletter', reg: 'newsletter' },
      { label: 'Footer', reg: 'footer' },
    ],
  },
  {
    id: 'team',
    module: 'team',
    name: 'Team',
    description: 'The Team page: navigation, breadcrumb, the team grid and conversion bands.',
    category: 'pages',
    status: 'stable',
    figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14273-80223',
    components: [
      { label: 'Navbar', reg: 'navbar', variant: 'default' },
      { label: 'Breadcrumb', reg: 'breadcrumb' },
      { label: 'Team section', reg: 'team-section' },
      { label: 'CTA — large', reg: 'cta-large' },
      { label: 'Newsletter', reg: 'newsletter' },
      { label: 'Footer', reg: 'footer' },
    ],
  },
  {
    id: 'team-detail',
    module: 'team',
    name: 'Team detail',
    description: 'A single team-member page: navigation, breadcrumb, person header, editorial content, values and conversion bands.',
    category: 'pages',
    status: 'stable',
    figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14273-80251',
    components: [
      { label: 'Navbar', reg: 'navbar', variant: 'default' },
      { label: 'Breadcrumb', reg: 'breadcrumb' },
      { label: 'Headers-content', reg: 'header', variant: 'Person profile' },
      { label: 'Text content', reg: 'text-content' },
      { label: 'Why us? section', reg: 'usp-section' },
      { label: 'CTA — large', reg: 'cta-large' },
      { label: 'Newsletter', reg: 'newsletter' },
      { label: 'Footer', reg: 'footer' },
    ],
  },
  {
    id: 'locations',
    module: 'locations',
    name: 'Locations',
    description: 'The Locations page: navigation, breadcrumb, the locations grid and conversion bands.',
    category: 'pages',
    status: 'stable',
    figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14272-78703',
    components: [
      { label: 'Navbar', reg: 'navbar', variant: 'default' },
      { label: 'Breadcrumb', reg: 'breadcrumb' },
      { label: 'Locations section', reg: 'locations-section' },
      { label: 'CTA — large', reg: 'cta-large' },
      { label: 'Newsletter', reg: 'newsletter' },
      { label: 'Footer', reg: 'footer' },
    ],
  },
  {
    id: 'location-detail',
    module: 'locations',
    name: 'Location detail',
    description: 'A single location page: navigation, breadcrumb, location header, gallery, FAQ, related news, values and conversion bands.',
    category: 'pages',
    status: 'stable',
    figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14272-75513',
    components: [
      { label: 'Navbar', reg: 'navbar', variant: 'default' },
      { label: 'Breadcrumb', reg: 'breadcrumb' },
      { label: 'Headers-content', reg: 'header', variant: 'Location detail' },
      { label: 'Gallery', reg: 'gallery' },
      { label: 'FAQ section', reg: 'faq-section' },
      { label: 'News section', reg: 'news-section' },
      { label: 'Why us? section', reg: 'usp-section' },
      { label: 'CTA — large', reg: 'cta-large' },
      { label: 'Newsletter', reg: 'newsletter' },
      { label: 'Footer', reg: 'footer' },
    ],
  },
  {
    id: 'contact',
    name: 'Contact',
    description: 'The Contact page: navigation, breadcrumb, contact header, contact form and newsletter.',
    category: 'pages',
    status: 'stable',
    figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14270-74400',
    components: [
      { label: 'Navbar', reg: 'navbar', variant: 'default' },
      { label: 'Breadcrumb', reg: 'breadcrumb' },
      { label: 'Headers-content', reg: 'header', variant: 'Contact us' },
      { label: 'Form section', reg: 'form-section', variant: 'Contact' },
      { label: 'Newsletter', reg: 'newsletter' },
      { label: 'Footer', reg: 'footer' },
    ],
  },
  {
    id: 'privacy',
    name: 'Privacy',
    description: 'The Privacy / legal page: navigation, breadcrumb, rich-text content and newsletter.',
    category: 'pages',
    status: 'stable',
    figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14269-72478',
    components: [
      { label: 'Navbar', reg: 'navbar', variant: 'default' },
      { label: 'Breadcrumb', reg: 'breadcrumb' },
      { label: 'CKEditor styles', reg: 'ckeditor' },
      { label: 'Newsletter', reg: 'newsletter' },
      { label: 'Footer', reg: 'footer' },
    ],
  },
  {
    id: 'faqs',
    name: 'FAQs',
    description: 'The FAQs page: navigation, breadcrumb, the FAQ accordion and newsletter.',
    category: 'pages',
    status: 'stable',
    figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14761-11523',
    components: [
      { label: 'Navbar', reg: 'navbar', variant: 'default' },
      { label: 'Breadcrumb', reg: 'breadcrumb' },
      { label: 'FAQ section', reg: 'faq-section' },
      { label: 'Newsletter', reg: 'newsletter' },
      { label: 'Footer', reg: 'footer' },
    ],
  },
  {
    id: '404',
    name: '404',
    description: 'The 404 / not-found page: navigation, empty state and newsletter.',
    category: 'pages',
    status: 'stable',
    figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14269-73691',
    components: [
      { label: 'Navbar', reg: 'navbar', variant: 'default' },
      { label: 'Empty state (404)' },
      { label: 'Newsletter', reg: 'newsletter' },
      { label: 'Footer', reg: 'footer' },
    ],
  },
];

export const templateById = (id: string) => templates.find((t) => t.id === id);
