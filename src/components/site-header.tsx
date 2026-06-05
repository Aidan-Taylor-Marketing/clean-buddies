import Link from "next/link";
import { Sparkles, Phone } from "lucide-react";
import { site } from "@/lib/site";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Sparkles className="h-5 w-5" />
          </span>
          <span className="text-lg">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${site.phone.replace(/[^\d+]/g, "")}`}
            className="hidden items-center gap-1.5 text-sm font-medium sm:flex"
          >
            <Phone className="h-4 w-4 text-primary" />
            {site.phone}
          </a>
          <Button asChild size="sm">
            <Link href="/contact">Free quote</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
