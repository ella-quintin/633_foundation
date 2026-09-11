import Image from "next/image";
import { site } from "@/lib/site";
import { navLinks } from "@/lib/nav";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line/80">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.png"
            alt={`${site.name} logo`}
            width={44}
            height={38}
            className="h-10 w-auto"
          />
          <div>
            <p className="font-display text-base leading-tight">{site.name}</p>
            <p className="text-sm text-ink-soft">A Heart for Him</p>
          </div>
        </div>

        <nav aria-label="Footer" className="flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink-soft transition-colors hover:text-green"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <p className="text-sm text-ink-soft">
          &copy; {year} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
