"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Phone } from "lucide-react";
import {
  site,
  services,
  additionalServices,
  ongoingServices,
  serviceCities,
} from "@/lib/site";
import { Button } from "@/components/ui/button";
import logo from "../../public/logo.png";

const serviceColumns = [
  { title: "Construction Cleaning", items: services.map((s) => s.aka) },
  { title: "Additional Services", items: additionalServices.map((s) => s.name) },
  { title: "Ongoing Support", items: ongoingServices.map((s) => s.name) },
];

type MenuKey = "services" | "areas" | null;

export function SiteHeader() {
  const tel = `tel:${site.phone.replace(/[^\d+]/g, "")}`;
  const [open, setOpen] = useState<MenuKey>(null);

  const trigger = (key: Exclude<MenuKey, null>, label: string) => (
    <button
      type="button"
      onMouseEnter={() => setOpen(key)}
      onFocus={() => setOpen(key)}
      onClick={() => setOpen(open === key ? null : key)}
      aria-expanded={open === key}
      className="flex items-center gap-1 text-sm font-semibold uppercase tracking-wide text-foreground/80 transition-colors hover:text-primary aria-expanded:text-primary"
    >
      {label}
      <ChevronDown
        className={`h-4 w-4 transition-transform ${open === key ? "rotate-180" : ""}`}
      />
    </button>
  );

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
      <header
        className="relative w-full border-b bg-background/95 backdrop-blur"
        onMouseLeave={() => setOpen(null)}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
          <Link href="/" className="flex items-center" aria-label={site.name}>
            <Image src={logo} alt={`${site.legalName} logo`} priority className="h-9 w-auto" />
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {trigger("services", "Services")}
            <Link
              href="/about"
              className="text-sm font-semibold uppercase tracking-wide text-foreground/80 transition-colors hover:text-primary"
              onMouseEnter={() => setOpen(null)}
            >
              About Us
            </Link>
            {trigger("areas", "Service Areas")}
            <Link
              href="/blog"
              className="text-sm font-semibold uppercase tracking-wide text-foreground/80 transition-colors hover:text-primary"
              onMouseEnter={() => setOpen(null)}
            >
              Resources
            </Link>
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

        {/* Mega-menu panels */}
        {open && (
          <div className="absolute inset-x-0 top-full hidden border-t bg-background shadow-lg lg:block">
            <div className="mx-auto max-w-6xl px-4 py-8">
              {open === "services" && (
                <div className="grid gap-8 md:grid-cols-3">
                  {serviceColumns.map((col) => (
                    <div key={col.title}>
                      <p className="text-xs font-bold uppercase tracking-widest text-primary">
                        {col.title}
                      </p>
                      <ul className="mt-3 space-y-2.5">
                        {col.items.map((item) => (
                          <li key={item}>
                            <Link
                              href="/services"
                              className="text-sm text-foreground/80 hover:text-primary"
                              onClick={() => setOpen(null)}
                            >
                              {item}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}

              {open === "areas" && (
                <div>
                  <p className="text-xs font-bold uppercase tracking-widest text-primary">
                    All of Maricopa County
                  </p>
                  <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-3 lg:grid-cols-4">
                    {serviceCities.map((city) => (
                      <li key={city}>
                        <Link
                          href="/service-areas"
                          className="text-sm text-foreground/80 hover:text-primary"
                          onClick={() => setOpen(null)}
                        >
                          {city}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
