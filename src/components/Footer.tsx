import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-surface-card border-t border-border-subtle">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand & Subtitle */}
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2.5">
            <div className="w-6 h-6 rounded-md overflow-hidden border border-border-subtle shrink-0">
              <Image
                src="/logo.png"
                alt="Logo"
                width={24}
                height={24}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-lg font-semibold text-text-primary tracking-tight">
              Manas Srivastava
            </span>
          </div>
          <p className="text-xs sm:text-sm text-text-secondary text-center md:text-left">
            Scaling high-growth tech ventures through disciplined performance &amp;
            funnel architecture.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap items-center justify-center gap-6 text-text-secondary text-xs sm:text-sm">
          <Link
            href="#proof"
            className="hover:text-text-primary transition-colors"
          >
            Work
          </Link>
          <Link
            href="#capabilities"
            className="hover:text-text-primary transition-colors"
          >
            Capabilities
          </Link>
          <Link
            href="#audit"
            className="hover:text-text-primary transition-colors"
          >
            LinkedIn Audit
          </Link>
          <Link
            href="#contact"
            className="text-coral-primary hover:underline font-medium transition-colors"
          >
            Let&apos;s Talk
          </Link>
        </div>

        {/* Copyright */}
        <div className="text-xs text-text-tertiary">
          © {new Date().getFullYear()} Manas Srivastava. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
