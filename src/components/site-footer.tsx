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

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M12 2.2c3.2 0 3.6 0 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s0 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58 0-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.2 15.58 2.2 15.2 2.2 12s0-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.2 8.8 2.2 12 2.2Zm0 1.8c-3.15 0-3.5 0-4.74.07-.9.04-1.38.19-1.71.32-.43.17-.74.37-1.06.69-.32.32-.52.63-.69 1.06-.13.33-.28.81-.32 1.71C3.4 8.5 3.4 8.85 3.4 12s0 3.5.07 4.74c.04.9.19 1.38.32 1.71.17.43.37.74.69 1.06.32.32.63.52 1.06.69.33.13.81.28 1.71.32 1.24.07 1.59.07 4.74.07s3.5 0 4.74-.07c.9-.04 1.38-.19 1.71-.32.43-.17.74-.37 1.06-.69.32-.32.52-.63.69-1.06.13-.33.28-.81.32-1.71.07-1.24.07-1.59.07-4.74s0-3.5-.07-4.74c-.04-.9-.19-1.38-.32-1.71a2.86 2.86 0 0 0-.69-1.06 2.86 2.86 0 0 0-1.06-.69c-.33-.13-.81-.28-1.71-.32C15.5 4 15.15 4 12 4Zm0 3.06A4.94 4.94 0 1 1 7.06 12 4.94 4.94 0 0 1 12 7.06Zm0 1.8A3.14 3.14 0 1 0 15.14 12 3.14 3.14 0 0 0 12 8.86Zm5.14-3.24a1.15 1.15 0 1 1-1.15 1.15 1.15 1.15 0 0 1 1.15-1.15Z",
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    path: "M23.5 6.5a3 3 0 0 0-2.1-2.1C19.5 4 12 4 12 4s-7.5 0-9.4.4A3 3 0 0 0 .5 6.5C.1 8.4.1 12 .1 12s0 3.6.4 5.5a3 3 0 0 0 2.1 2.1C4.5 20 12 20 12 20s7.5 0 9.4-.4a3 3 0 0 0 2.1-2.1c.4-1.9.4-5.5.4-5.5s0-3.6-.4-5.5ZM9.6 15.5v-7l6.3 3.5-6.3 3.5Z",
  },
  {
    label: "X",
    href: "https://x.com",
    path: "M18.9 2H22l-7.3 8.3L23.3 22h-6.8l-5.3-7-6.1 7H2l7.8-8.9L1.7 2h7l4.8 6.4L18.9 2Zm-2.4 18h1.9L7.6 4H5.6l10.9 16Z",
  },
];

export function SiteFooter() {
  return (
    <footer className="mt-auto border-t bg-background">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <p className="font-heading text-lg font-semibold">
              Your Construction Crew&apos;s Cleaning Crew.
            </p>
            <Button asChild size="lg" className="mt-5">
              <Link href="/contact">Get a Fast Quote</Link>
            </Button>
            <div className="mt-6 flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-primary"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Quick Links
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm uppercase tracking-wide">
              {quickLinks.map((l, i) => (
                <li key={`${l.label}-${i}`}>
                  <Link href={l.href} className="text-muted-foreground hover:text-primary">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-foreground">
              Areas We Service
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm uppercase tracking-wide">
              {serviceCities.map((city) => (
                <li key={city}>
                  <Link
                    href="/service-areas"
                    className="text-muted-foreground hover:text-primary"
                  >
                    {city}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center border-t pt-10">
          <Image
            src={logo}
            alt={`${site.legalName} logo`}
            className="h-14 w-auto"
          />
          <p className="mt-6 text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} {site.legalName}. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
