/**
 * Component registry — the single source of truth.
 * Files stay organised by Atomic Design; this metadata reclassifies the same
 * components into client-facing marketing categories (Relume-style) and powers
 * both the Library (client) and Foundations (dev) navigations.
 */
export type AtomicLevel = 'atom' | 'molecule' | 'organism' | 'section' | 'module';

export interface RegistryEntry {
  id: string;
  name: string;
  description: string;
  /** Client-facing marketing category (Library). */
  category: string;
  /** Internal atomic level (Foundations / dev). */
  atomicLevel: AtomicLevel;
  tags: string[];
  /** Atoms/molecules this component is built from (dev anchoring). */
  deps?: string[];
  /** When to use / notes shown on the component page. */
  usage?: string;
  status?: 'stable' | 'beta';
  /** Link to the source node in Figma (paste the node URL per component). */
  figma?: string;
}

export const categories: { id: string; label: string; description: string }[] = [
  { id: 'navigation', label: 'Navigation', description: 'Navigation bars and breadcrumbs.' },
  { id: 'headers', label: 'Headers & Heroes', description: 'Page headers and hero banners.' },
  { id: 'content', label: 'Content sections', description: 'Content blocks: news, team, services, stats and more.' },
  { id: 'forms', label: 'Forms & contact', description: 'Forms, newsletter and contact blocks.' },
  { id: 'faq', label: 'FAQ', description: 'Frequently asked questions.' },
  { id: 'careers', label: 'Careers', description: 'Job openings.' },
  { id: 'overlays', label: 'Overlays', description: 'Modals and overlays.' },
  { id: 'footers', label: 'Footers', description: 'Page footers.' },
];

export const registry: RegistryEntry[] = [
  // Navigation
  { id: 'navbar', name: 'Navbar', description: 'Main navigation bar (menu, Services dropdown, language switcher, meta bar) with a mobile variant.', category: 'navigation', atomicLevel: 'organism', tags: ['nav', 'menu', 'dropdown', 'mobile'], deps: ['Logo', 'Button', 'Caret'], usage: 'At the top of every page. The Services dropdown and the EN/FR/NL switcher open on hover; the mobile variant opens a full-screen panel.', figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15484-888' },
  { id: 'breadcrumb', name: 'Breadcrumb', description: 'Chip-style breadcrumb trail (Home / Level / Current).', category: 'navigation', atomicLevel: 'organism', tags: ['breadcrumb', 'nav'], deps: ['Tag', 'Caps'], usage: 'Below the navigation, to place the page within the site hierarchy.', figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=12430-59639' },

  // Headers & Heroes
  { id: 'hero', name: 'Hero banner', description: 'Full-width hero banner: With image (light) and With background (dark).', category: 'headers', atomicLevel: 'organism', tags: ['hero', 'banner', 'cta'], deps: ['Button', 'Image'], usage: 'First section of a landing page. Full-bleed background, content capped at 1120px.', figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15559-29048' },
  { id: 'header', name: 'Headers-content', description: 'Page headers: Title page (image left/right), Blog, Job, Person profile, Location detail, Contact us.', category: 'headers', atomicLevel: 'organism', tags: ['header', 'title', 'blog', 'contact'], deps: ['Button', 'Tag', 'Image', 'Social', 'Logo'], usage: 'Inner-page header depending on the content type.', figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15669-11468' },

  // Content sections
  { id: 'news-section', name: 'News section', description: 'Grid of blog cards with a “View all” link. Horizontal slider on mobile.', category: 'content', atomicLevel: 'section', tags: ['news', 'blog', 'cards', 'slider'], deps: ['Card', 'Tag', 'Button'], figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15615-29522' },
  { id: 'team-section', name: 'Team section', description: 'Grid of team-member cards with a “View all” link. Slider on mobile.', category: 'content', atomicLevel: 'section', tags: ['team', 'cards', 'slider'], deps: ['Card', 'Button'], figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15594-12310' },
  { id: 'usp-section', name: 'Why us? section', description: 'Grid of ServiceTiles (icon + title + text).', category: 'content', atomicLevel: 'section', tags: ['usp', 'features', 'icons'], deps: ['ServiceTile'], figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15594-12313' },
  { id: 'services-section', name: 'Services section', description: 'List of horizontal cards.', category: 'content', atomicLevel: 'section', tags: ['services', 'cards'], deps: ['Card horizontal', 'Button'], figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15594-12314' },
  { id: 'stats-section', name: 'Stats section', description: 'Key figures (large numbers) with images, three columns.', category: 'content', atomicLevel: 'section', tags: ['stats', 'numbers'], deps: ['Image'], figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15594-12311' },
  { id: 'locations-section', name: 'Locations section', description: 'Grid of location cards (two columns). Slider on mobile.', category: 'content', atomicLevel: 'section', tags: ['locations', 'cards', 'slider'], deps: ['Card', 'Button'], figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15661-31935' },
  { id: 'brands-section', name: 'Brands section', description: 'Partner grid; each logo turns blue on hover (name + url).', category: 'content', atomicLevel: 'section', tags: ['partners', 'logos'], deps: ['Logo'], figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15594-12312' },

  { id: 'intro-banner', name: 'IntroBanner', description: 'Full-width intro band (dark): image beside a short heading and a primary button.', category: 'content', atomicLevel: 'molecule', tags: ['intro', 'banner', 'media'], deps: ['Image', 'Button'], usage: 'Short introduction band near the top of a page.', figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15479-27042' },
  { id: 'text-content', name: 'Text content', description: 'Rich content block: display title, intro, alternating media objects and a “View all” action.', category: 'content', atomicLevel: 'organism', tags: ['text', 'content', 'rich', 'media'], deps: ['MediaObject', 'Button'], usage: 'Long-form editorial content on pages (About, detail pages). Composes the MediaObject molecule.', figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15690-36591' },
  { id: 'quote', name: 'Quote', description: 'Testimonial band (grey): quote text, author with avatar, and prev/next arrows cycling several quotes.', category: 'content', atomicLevel: 'molecule', tags: ['quote', 'testimonial', 'slider'], deps: ['Avatar', 'Button'], usage: 'Social proof / testimonials on a page.', figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15536-11676' },
  { id: 'gallery', name: 'Gallery', description: 'Full-width image gallery (dark band): heading and a slider of images with dots and arrows.', category: 'content', atomicLevel: 'molecule', tags: ['gallery', 'slider', 'images'], deps: ['Image'], usage: 'Image galleries on detail pages.', figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15690-35017' },
  { id: 'cta-small', name: 'CTA — small', description: 'Call-to-action with media: heading, text and a primary button beside an image.', category: 'content', atomicLevel: 'molecule', tags: ['cta', 'call to action', 'media'], deps: ['Button', 'Image'], usage: 'Mid-page conversion prompt with a supporting image.', figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15506-888' },
  { id: 'ckeditor', name: 'CKEditor styles', description: 'Rich-text (CKEditor output) styles: H1–H6, lead, paragraphs, links, bullet & numbered lists, gallery, table, testimonial, buttons and a questions banner.', category: 'content', atomicLevel: 'organism', tags: ['rich text', 'ckeditor', 'prose', 'wysiwyg'], deps: ['TextList', 'NumberedList', 'Table', 'Quote', 'CTA', 'Button'], usage: 'The styles applied to CMS rich-text (CKEditor) output on blog / detail pages.', figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=14278-85431' },
  { id: 'cta-large', name: 'CTA — large', description: 'Full-width call-to-action: dark panel (heading, text, primary button) beside a large image.', category: 'content', atomicLevel: 'molecule', tags: ['cta', 'call to action', 'banner'], deps: ['Button', 'Image'], usage: 'Strong end-of-page conversion band.', figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15506-889' },

  // FAQ
  { id: 'faq-section', name: 'FAQ section', description: 'Title with an interactive accordion (expand/collapse).', category: 'faq', atomicLevel: 'section', tags: ['faq', 'accordion'], deps: ['Accordion'], figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15594-12309' },

  // Careers
  { id: 'jobs-section', name: 'Jobs section', description: 'List of job openings (JobOpening).', category: 'careers', atomicLevel: 'section', tags: ['jobs', 'careers'], deps: ['JobOpening', 'Button'], figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15661-31869' },

  // Forms & contact
  { id: 'newsletter', name: 'Newsletter', description: 'Sign-up block (email field + button + terms).', category: 'forms', atomicLevel: 'organism', tags: ['newsletter', 'form'], deps: ['Input', 'Button'], figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15506-890' },
  { id: 'form-section', name: 'Form section', description: 'Apply / Contact form on a dark background (fields, CV upload, checkbox).', category: 'forms', atomicLevel: 'section', tags: ['form', 'contact', 'apply'], deps: ['Field', 'Input', 'Upload', 'Checkbox', 'Button'], figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15690-35599' },

  // Overlays
  { id: 'modal', name: 'Modal', description: 'Modal window (image, title, text, CTA) with overlay and close.', category: 'overlays', atomicLevel: 'organism', tags: ['modal', 'overlay', 'dialog'], deps: ['Button', 'Image'], figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15753-38004' },

  // Footers
  { id: 'footer', name: 'Footer', description: 'Page footer: brand + contact + socials, three menu columns, credits.', category: 'footers', atomicLevel: 'organism', tags: ['footer'], deps: ['Logo', 'Social', 'Signature'], figma: 'https://www.figma.com/design/Y2Tg1bc4gkFux4bDiH38bL/vb-kickstarter-design-v02?node-id=15387-889' },
];

export const byId = (id: string) => registry.find((e) => e.id === id);
export const byCategory = (cat: string) => registry.filter((e) => e.category === cat);
