/**
 * Catalog — maps a registry id to its Astro component (for live preview) and
 * its raw source (for the code export). Keeps the atomic file structure intact.
 */
import type { AstroComponentFactory } from 'astro/runtime/server/index.js';

import Navbar from '../components/organisms/Navbar.astro';
import Breadcrumb from '../components/organisms/Breadcrumb.astro';
import Hero from '../components/organisms/Hero.astro';
import Header from '../components/organisms/Header.astro';
import Newsletter from '../components/organisms/Newsletter.astro';
import Footer from '../components/organisms/Footer.astro';
import Modal from '../components/organisms/Modal.astro';
import NewsSection from '../components/sections/NewsSection.astro';
import TeamSection from '../components/sections/TeamSection.astro';
import UspSection from '../components/sections/UspSection.astro';
import ServicesSection from '../components/sections/ServicesSection.astro';
import JobsSection from '../components/sections/JobsSection.astro';
import LocationsSection from '../components/sections/LocationsSection.astro';
import FaqSection from '../components/sections/FaqSection.astro';
import StatsSection from '../components/sections/StatsSection.astro';
import BrandsSection from '../components/sections/BrandsSection.astro';
import FormSection from '../components/sections/FormSection.astro';
import TextContentSection from '../components/sections/TextContentSection.astro';
import IntroBanner from '../components/tiles/IntroBanner.astro';
import Quote from '../components/tiles/Quote.astro';
import Gallery from '../components/tiles/Gallery.astro';
import CtaSmall from '../components/sections/CtaSmall.astro';
import CtaLarge from '../components/sections/CtaLarge.astro';
import CkEditorStyles from '../components/sections/CkEditorStyles.astro';

import NavbarSrc from '../components/organisms/Navbar.astro?raw';
import BreadcrumbSrc from '../components/organisms/Breadcrumb.astro?raw';
import HeroSrc from '../components/organisms/Hero.astro?raw';
import HeaderSrc from '../components/organisms/Header.astro?raw';
import NewsletterSrc from '../components/organisms/Newsletter.astro?raw';
import FooterSrc from '../components/organisms/Footer.astro?raw';
import ModalSrc from '../components/organisms/Modal.astro?raw';
import NewsSectionSrc from '../components/sections/NewsSection.astro?raw';
import TeamSectionSrc from '../components/sections/TeamSection.astro?raw';
import UspSectionSrc from '../components/sections/UspSection.astro?raw';
import ServicesSectionSrc from '../components/sections/ServicesSection.astro?raw';
import JobsSectionSrc from '../components/sections/JobsSection.astro?raw';
import LocationsSectionSrc from '../components/sections/LocationsSection.astro?raw';
import FaqSectionSrc from '../components/sections/FaqSection.astro?raw';
import StatsSectionSrc from '../components/sections/StatsSection.astro?raw';
import BrandsSectionSrc from '../components/sections/BrandsSection.astro?raw';
import FormSectionSrc from '../components/sections/FormSection.astro?raw';
import TextContentSectionSrc from '../components/sections/TextContentSection.astro?raw';
import IntroBannerSrc from '../components/tiles/IntroBanner.astro?raw';
import QuoteSrc from '../components/tiles/Quote.astro?raw';
import GallerySrc from '../components/tiles/Gallery.astro?raw';
import CtaSmallSrc from '../components/sections/CtaSmall.astro?raw';
import CtaLargeSrc from '../components/sections/CtaLarge.astro?raw';
import CkEditorStylesSrc from '../components/sections/CkEditorStyles.astro?raw';

export interface CatalogItem { Component: AstroComponentFactory; src: string; }

/**
 * Strip the styleguide showcase scaffolding from a component's raw source so the
 * exported / copied code is the clean component only:
 *  - the per-variant toggle bar (label + Mobile switch)
 *  - the `data-tile` demo-wrapper markers
 * Component scripts (dropdowns, accordions, sliders…) are kept.
 */
export function cleanSource(src: string): string {
  let out = src;
  // remove the toggle bar divs (label + Mobile switch)
  out = out.replace(/[ \t]*<div class="flex items-center justify-between rounded-box[\s\S]*?<\/div>\n?/g, '');
  // drop the demo-wrapper marker attribute
  out = out.replace(/ data-tile/g, '');
  // collapse 3+ blank lines left behind
  out = out.replace(/\n{3,}/g, '\n\n');
  return out.trim() + '\n';
}

export const catalog: Record<string, CatalogItem> = {
  'navbar': { Component: Navbar, src: NavbarSrc },
  'breadcrumb': { Component: Breadcrumb, src: BreadcrumbSrc },
  'hero': { Component: Hero, src: HeroSrc },
  'header': { Component: Header, src: HeaderSrc },
  'newsletter': { Component: Newsletter, src: NewsletterSrc },
  'footer': { Component: Footer, src: FooterSrc },
  'modal': { Component: Modal, src: ModalSrc },
  'news-section': { Component: NewsSection, src: NewsSectionSrc },
  'team-section': { Component: TeamSection, src: TeamSectionSrc },
  'usp-section': { Component: UspSection, src: UspSectionSrc },
  'services-section': { Component: ServicesSection, src: ServicesSectionSrc },
  'jobs-section': { Component: JobsSection, src: JobsSectionSrc },
  'locations-section': { Component: LocationsSection, src: LocationsSectionSrc },
  'faq-section': { Component: FaqSection, src: FaqSectionSrc },
  'stats-section': { Component: StatsSection, src: StatsSectionSrc },
  'brands-section': { Component: BrandsSection, src: BrandsSectionSrc },
  'form-section': { Component: FormSection, src: FormSectionSrc },
  'text-content': { Component: TextContentSection, src: TextContentSectionSrc },
  'intro-banner': { Component: IntroBanner, src: IntroBannerSrc },
  'quote': { Component: Quote, src: QuoteSrc },
  'gallery': { Component: Gallery, src: GallerySrc },
  'cta-small': { Component: CtaSmall, src: CtaSmallSrc },
  'cta-large': { Component: CtaLarge, src: CtaLargeSrc },
  'ckeditor': { Component: CkEditorStyles, src: CkEditorStylesSrc },
};
