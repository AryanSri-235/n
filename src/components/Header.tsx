"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-surface-canvas/90 backdrop-blur-md border-b border-border-subtle">
      <div className="h-20 max-w-[1120px] mx-auto px-5 lg:px-8 flex items-center justify-between gap-4">
        {/* Logo / Personal Brand */}
        <Link href="#" className="flex flex-col group">
          <span className="text-lg font-semibold text-text-primary tracking-tight group-hover:text-coral-primary transition-colors">
            Manas Srivastava
          </span>
          <span className="text-xs text-text-secondary">
            Head of Growth &amp; Performance
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="#proof"
            className="text-sm font-normal text-text-secondary hover:text-text-primary transition-colors"
          >
            Proof &amp; Work
          </Link>
          <Link
            href="#capabilities"
            className="text-sm font-normal text-text-secondary hover:text-text-primary transition-colors"
          >
            Capabilities
          </Link>
          <Link
            href="#audit"
            className="text-sm font-normal text-text-secondary hover:text-text-primary transition-colors"
          >
            LinkedIn Audit
          </Link>
        </nav>

        {/* Action Button & Avatar */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-coral-primary hover:bg-coral-hover text-on-primary text-sm font-medium px-6 py-2.5 transition-colors shadow-sm"
          >
            Let&apos;s Talk
          </Link>
          <div
            className="w-8 h-8 rounded-full bg-coral-primary flex items-center justify-center shrink-0 shadow-sm"
            aria-label="Profile Avatar"
          >
            <span className="material-symbols-outlined text-white text-[18px]">
              person
            </span>
          </div>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <Link
            href="#contact"
            className="inline-flex sm:hidden items-center justify-center rounded-full bg-coral-primary hover:bg-coral-hover text-on-primary text-xs font-medium px-4 py-2 transition-colors"
          >
            Let&apos;s Talk
          </Link>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-text-secondary hover:text-text-primary focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-[24px]">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-surface-card border-b border-border-subtle px-6 py-4 space-y-3 shadow-lg">
          <Link
            href="#proof"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-text-secondary hover:text-text-primary py-1"
          >
            Proof &amp; Work
          </Link>
          <Link
            href="#capabilities"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-text-secondary hover:text-text-primary py-1"
          >
            Capabilities
          </Link>
          <Link
            href="#audit"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-text-secondary hover:text-text-primary py-1"
          >
            LinkedIn Audit
          </Link>
          <Link
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-coral-primary py-1"
          >
            Contact &amp; Growth Brief →
          </Link>
        </div>
      )}
    </header>
  );
}
