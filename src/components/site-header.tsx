import Link from "next/link";
import Image from "next/image";
import { Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";
import logo from "../../public/logo.png";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center" aria-label={site.name}>
          <Image
            src={logo}
            alt={`${site.legalName} logo`}
            priority
            className="h-9 w-auto"
          />
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
            className="hidden items-center gap-1.5 text-sm font-semibold sm:flex"
          >
            <Phone className="h-4 w-4 text-primary" />
            {site.phone}
          </a>
          <Button asChild size="sm" className="font-semibold">
            <Link href="/contact">Get a free quote</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
