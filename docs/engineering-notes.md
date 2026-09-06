# Engineering Notes

## Change and validation workflow

- Make focused changes and validate the affected route or component immediately.
- Run `npm run build` before completing a change. This runs the production compile, ESLint, TypeScript checks, and static route generation.
- Inspect changed user-facing pages at desktop and mobile widths. Check readable contrast, no overflow, navigation, links, forms, and image loading.

## Next.js development server

- Do not run `npm run build` while `npm run dev` is running. Both commands write to `.next`, and this can leave the development server with missing webpack chunks and transient HTTP 500 responses.
- Stop the development server before a production build. Start a new development server after the build before browser testing.

## Site integrity rules

- Do not add `href="#"` links or controls without an action.
- Do not display a submission success message unless data has actually been sent. Without a form backend, use a clearly labelled mail-client handoff instead.
- Check foreground, border, placeholder, and hover colors against the actual surface background. Shared components must be checked on every layout they appear in.
- Create a real route for policy or legal links instead of redirecting them to an unrelated page.