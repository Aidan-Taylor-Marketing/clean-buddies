import Link from "next/link";
import Image from "next/image";
import { site, serviceCities } from "@/lib/site";
import { Button } from "@/components/ui/button";
import logo from "../../public/logo.png";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/contact", label: "Contact" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Resources" },
  { href: "/contact", label: "Careers" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto bg-[#0e182c] text-neutral-300">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-heading text-lg font-semibold text-white">
              Your Construction Crew&apos;s Cleaning Crew.
            </p>
            <Button asChild size="lg" className="mt-5">
              <Link href="/contact">Get a Fast Quote</Link>
            </Button>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">
              Quick Links
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm uppercase tracking-wide">
              {quickLinks.map((l, i) => (
                <li key={`${l.label}-${i}`}>
                  <Link href={l.href} className="text-neutral-400 hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-primary">
              Areas We Service
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm uppercase tracking-wide">
              {serviceCities.map((city) => (
                <li key={city}>
                  <Link
                    href="/service-areas"
                    className="text-neutral-400 hover:text-primary"
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center border-t border-white/10 pt-10">
          <div className="rounded-2xl bg-white/[0.06] px-8 py-5">
            <Image
              src={logo}
              alt={`${site.legalName} logo`}
              className="h-12 w-auto"
            />
          </div>
          <p className="mt-6 text-center text-xs text-neutral-500">
            © {new Date().getFullYear()} {site.legalName}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
