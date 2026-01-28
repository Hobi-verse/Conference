import Link from "next/link";
import { footerSections } from "@/data/footer";

export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-20 py-10">
        <div className="grid gap-8 md:grid-cols-3">
          {footerSections.map((section) => (
            <section key={section.title}>
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>

        {/* Legal line */}
        <div className="mt-10 border-t border-border pt-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} International Computer Science
          Conference. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
