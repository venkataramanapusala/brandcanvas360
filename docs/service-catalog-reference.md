# Service Catalog Reference

## Purpose

This document defines the canonical service offering for BrandCanvas360. It prevents service names, links, descriptions, and ordering from drifting across the website.

## Single Source of Truth

All service content must come from `src/lib/services-data.ts`.

Do not create or maintain local service arrays, service link lists, or service option lists in page or component files. Import `services` from the shared catalog instead.

The shared catalog controls:

- Service listing cards at `/services`
- Generated pages at `/services/[service-slug]`
- Homepage service cards
- Header desktop and mobile service navigation
- Footer service links
- Contact-form service options

## Required Service Order

Display services in this exact buyer-journey order:

1. Branding & Design (`/services/branding-design`)
2. Web Development (`/services/web-development`)
3. Search Engine Optimization (`/services/seo`)
4. Performance Marketing (`/services/performance-marketing`)
5. Social Media Marketing (`/services/social-media-marketing`)
6. Content Marketing (`/services/content-marketing`)
7. Email Marketing (`/services/email-marketing`)
8. WhatsApp Automation (`/services/whatsapp-automation`)
9. Analytics & Reporting (`/services/analytics-reporting`)

This order moves from market positioning and conversion foundations, through customer acquisition, to retention and measurement.

## Service Content Standard

Every new service record must include:

- A unique, URL-safe `slug`
- A Lucide icon
- A clear `title` and shorter `shortTitle`
- A benefit-led `desc` for cards and SEO metadata
- A customer-focused `heroText`
- Four deliverables in `points`
- Four implementation steps in `process`
- Two service-specific FAQs

Do not rename or remove a service without checking existing inbound links, navigation, footer links, contact options, and blog or case-study references.

## Update Checklist

Before completing a service-catalog change:

1. Update only `src/lib/services-data.ts` for service content, links, icons, and order.
2. Confirm homepage, header, footer, contact form, and `/services` import the shared `services` export.
3. Search `src` for the removed or renamed slug and old service title; there must be no outdated links or labels.
4. Check `/`, `/services`, one new service URL, desktop navigation, mobile navigation, footer, and `/contact` in the browser.
5. Run `npm run build`.

## Homepage Presentation Rule

The homepage services section is a summary, not a separate catalog. It must use the shared `services` collection and link with `/services/${service.slug}`. If nine cards make the homepage too long, limit the display with `services.slice(0, 6)` and keep the existing “View All Services” link. Never replace the shared collection with hard-coded homepage services.