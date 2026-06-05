import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import logo from "../../public/logo.png";

export function SiteHeader() {
  const tel = `tel:${site.phone.replace(/[^\d+]/g, "")}`;
  return (
    <div className="sticky top-0 z-40 w-full">
      {/* Blue call bar */}
      <div className="bg-primary text-primary-foreground">
        <a
          href={tel}
          className="mx-auto flex h-9 max-w-6xl items-center justify-center px-4 text-sm font-medium hover:underline"
        >
          Give Us a Call at {site.phone}
        </a>
      </div>

      {/* Header */}
      <header className="w-full border-b bg-background/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
          <Link href="/" className="flex items-center" aria-label={site.name}>
            <Image
              src={logo}
              alt={`${site.legalName} logo`}
              priority
              className="h-9 w-auto"
            />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {site.nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-semibold uppercase tracking-wide text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a href={tel} className="sm:hidden" aria-label="Call us">
              <Phone className="h-5 w-5 text-primary" />
            </a>
            <Button asChild>
              <Link href="/contact">Get a Free Quote</Link>
            </Button>
          </div>
        </div>
      </header>
    </div>
  );
}
