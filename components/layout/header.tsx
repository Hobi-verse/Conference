"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { branding } from "@/data/branding";
import { navigation } from "@/data/navigation";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-border bg-card fixed w-full z-50">
      <div className="mx-auto max-w-7xl px-20">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src={branding.logo.src}
              alt={branding.logo.alt}
              width={80}
              height={80}
              priority
              className="w-16 h-16 object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <nav
            aria-label="Primary Navigation"
            className="hidden lg:flex items-center gap-6"
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-foreground hover:underline underline-offset-4"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <Button
            className="lg:hidden border border-border p-2"
            aria-label="Toggle navigation menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </Button>
        </div>

        {/* Mobile / Tablet Menu */}
        {open && (
          <nav
            aria-label="Mobile Navigation"
            className="lg:hidden border-t border-border py-4"
          >
            <ul className="flex flex-col gap-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block text-sm font-medium text-foreground"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
