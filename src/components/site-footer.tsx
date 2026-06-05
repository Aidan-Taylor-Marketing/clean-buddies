import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { site, serviceCities } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-[#0a0f1a] text-neutral-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <p className="text-xl font-extrabold tracking-tight text-white">
            CLEAN <span className="text-primary">BUDDIES</span>
          </p>
          <p className="mt-1 text-xs font-semibold uppercase tracking-widest text-primary">
            Construction Cleaning
          </p>
          <p className="mt-4 max-w-xs text-sm text-neutral-400">
            {site.tagline} Locally owned, Phoenix-based, fully insured.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Company</h4>
          <ul className="mt-3 space-y-2 text-sm text-neutral-400">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-primary">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Service area</h4>
          <p className="mt-3 flex items-center gap-2 text-sm text-neutral-400">
            <MapPin className="h-4 w-4 text-primary" /> {site.serviceArea}
          </p>
          <p className="mt-2 text-sm text-neutral-500">
            {serviceCities.slice(0, 8).join(", ")} &amp; more.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Get in touch</h4>
          <a
            href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
            className="mt-3 flex items-center gap-2 text-sm text-neutral-300 hover:text-primary"
          >
            <Phone className="h-4 w-4 text-primary" /> {site.phone}
          </a>
          <Link
            href="/contact"
            className="mt-4 inline-flex rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90"
          >
            Get a free quote
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10 py-4">
        <p className="mx-auto max-w-6xl px-4 text-xs text-neutral-500">
          © {new Date().getFullYear()} {site.legalName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
