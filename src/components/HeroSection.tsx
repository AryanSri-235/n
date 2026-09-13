import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full max-w-[1120px] mx-auto px-5 lg:px-8 min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center py-12 overflow-hidden">
      {/* Ambient Radial Blue Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[580px] h-[580px] bg-[radial-gradient(circle,rgba(10,102,194,0.08)_0%,rgba(10,102,194,0.02)_50%,transparent_70%)] pointer-events-none -z-10 blur-3xl" />

      <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6 relative z-10">
        {/* Avatar with Availability Badge */}
        <div className="relative group">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-border-strong shadow-md mx-auto ring-4 ring-white/80 bg-surface-container relative transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/speaker-manas.jpg"
              alt="Manas Srivastava - Head of Growth & Performance"
              width={128}
              height={128}
              priority
              className="w-full h-full object-cover object-[50%_18%]"
            />
          </div>
          <span
            className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 w-4 h-4 bg-emerald-500 border-2 border-white rounded-full shadow-sm"
            title="Available for Q2"
          />
        </div>

        {/* Tactical Focus Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coral-subtle text-coral-primary text-xs sm:text-sm font-medium tracking-wide border border-coral-border/60 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-coral-primary animate-pulse" />
          <span>GTM Strategy · Performance Marketing · Founder Growth</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-[46px] lg:leading-[54px] text-text-primary tracking-tight font-medium max-w-2xl">
          Growth campaigns built to{" "}
          <span className="text-coral-primary font-semibold">compound revenue.</span>
        </h1>

        {/* Crisp 1-Sentence Subhead */}
        <p className="text-base sm:text-lg text-text-secondary max-w-xl leading-relaxed">
          Paid acquisition systems and founder inbound engines built for real balance-sheet scale.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
          <Link
            href="#proof"
            className="inline-flex items-center gap-2 rounded-full bg-coral-primary hover:bg-coral-hover text-on-primary text-sm sm:text-base font-medium px-7 py-3 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
          >
            <span>View Case Studies</span>
            <span className="material-symbols-outlined text-[18px]">
              arrow_downward
            </span>
          </Link>
          <a
            href="https://www.linkedin.com/in/personalbrandingmanas/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-slate-50 text-text-primary text-sm sm:text-base font-medium px-6 py-3 transition-all duration-200 shadow-xs hover:shadow-sm hover:-translate-y-0.5 border border-border-strong"
          >
            <span className="material-symbols-outlined text-coral-primary text-[18px]">
              hub
            </span>
            <span>Connect on LinkedIn</span>
          </a>
        </div>

        {/* Quick Credibility Micro-Pills (Zero Fluff, High Impact) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 pt-4">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-border-subtle shadow-2xs text-xs text-text-secondary font-medium">
            <span className="material-symbols-outlined text-coral-primary text-[16px]">
              payments
            </span>
            <span><strong className="text-text-primary font-semibold">₹10Cr+</strong> Managed Spend</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-border-subtle shadow-2xs text-xs text-text-secondary font-medium">
            <span className="material-symbols-outlined text-emerald-600 text-[16px]">
              trending_down
            </span>
            <span><strong className="text-text-primary font-semibold">₹5–₹40</strong> US &amp; India CPL</span>
          </div>

          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-border-subtle shadow-2xs text-xs text-text-secondary font-medium">
            <span className="material-symbols-outlined text-coral-primary text-[16px]">
              visibility
            </span>
            <span><strong className="text-text-primary font-semibold">1M+</strong> Direct Reach</span>
          </div>
        </div>
      </div>
    </section>
  );
}
