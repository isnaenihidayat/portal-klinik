import { SiteApp } from "@/components/SiteApp";

/**
 * Root page — delegates all rendering to SiteApp (client component).
 * Keeping this as a Server Component means Next.js can still emit
 * the correct HTML shell and metadata from layout.tsx.
 */
export default function HomePage() {
  return <SiteApp />;
}
