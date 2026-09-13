import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="w-full max-w-[1120px] mx-auto px-5 lg:px-8 pt-12 pb-16 md:pb-20">
      <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
        {/* Avatar with Availability Badge */}
        <div className="relative">
          <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-border-subtle shadow-sm mx-auto ring-4 ring-surface-card bg-surface-container relative">
            <Image
              src="/avatar.jpg"
              alt="Manas Srivastava - Head of Growth & Performance"
              width={112}
              height={112}
              priority
              className="w-full h-full object-cover object-center"
            />
          </div>
          <span
            className="absolute bottom-1 right-1 sm:bottom-1.5 sm:right-1.5 w-4 h-4 bg-emerald-500 border-2 border-surface-canvas rounded-full shadow-sm"
            title="Available for Q2"
          />
        </div>

        {/* Tactical Focus Tag */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-coral-subtle text-coral-primary text-xs sm:text-sm font-medium tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-coral-primary animate-pulse" />
          <span>GTM Strategy · Performance Marketing · Founder Growth</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-4xl lg:text-[44px] lg:leading-[52px] text-text-primary tracking-tight font-medium max-w-2xl">
          Growth campaigns built to{" "}
          <span className="text-coral-primary font-semibold">compound revenue.</span>
        </h1>

        {/* Subhead Description */}
        <p className="text-base sm:text-lg text-text-secondary max-w-lg leading-relaxed">
          High-velocity acquisition systems, multi-angle paid funnels, and personal
          inbound engines designed for real balance-sheet scale.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-1">
          <Link
            href="#proof"
            className="inline-flex items-center gap-2 rounded-full bg-coral-primary hover:bg-coral-hover text-on-primary text-sm sm:text-base font-medium px-7 py-3 transition-colors shadow-sm"
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
            className="inline-flex items-center gap-2 rounded-full bg-surface-card hover:bg-surface-container-low text-text-primary text-sm sm:text-base font-medium px-6 py-3 transition-colors shadow-sm border border-border-subtle"
          >
            <span className="material-symbols-outlined text-coral-primary text-[18px]">
              hub
            </span>
            <span>Connect on LinkedIn</span>
          </a>
        </div>

        {/* Metrics Benchmark Banner */}
        <div className="w-full mt-6 p-6 bg-surface-card rounded-xl shadow-sm border border-border-subtle">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {/* Metric 1 */}
            <div className="flex flex-col gap-1 p-3 rounded-lg bg-surface-container-lowest">
              <span className="text-xs font-semibold text-text-tertiary uppercase tracking-wider">
                US Lead Generation
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-[22px] text-text-primary font-semibold">
                  ₹5–₹40
                </span>
                <span className="text-xs font-medium text-tertiary bg-on-tertiary-container px-2 py-0.5 rounded-full">
                  -68% Avg CPL
                </span>
              </div>
              <p className="text-xs text-text-secondary mt-1">
                High-intent Meta campaigns across North America verticals.
              </p>
            </div>

            {/* Metric 2 */}
            <div className="flex flex-col gap-1 p-3 rounded-lg bg-surface-container-lowest">
              <span className="text-xs font-semibold text-text-tertiary uppercase tracking-wider">
                Multimodal Distribution
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-[22px] text-text-primary font-semibold">
                  1M+
                </span>
                <span className="text-xs font-medium text-coral-primary bg-coral-subtle px-2 py-0.5 rounded-full">
                  Verified Reach
                </span>
              </div>
              <p className="text-xs text-text-secondary mt-1">
                Organic &amp; paid algorithmic resonance for sports tech &amp; D2C.
              </p>
            </div>

            {/* Metric 3 */}
            <div className="flex flex-col gap-1 p-3 rounded-lg bg-surface-container-lowest">
              <span className="text-xs font-semibold text-text-tertiary uppercase tracking-wider">
                Rapid Sprint Velocity
              </span>
              <div className="flex items-baseline gap-2">
                <span className="text-2xl sm:text-[22px] text-text-primary font-semibold">
                  30+ Sales
                </span>
                <span className="text-xs font-medium text-secondary bg-surface-container px-2 py-0.5 rounded-full">
                  In 48 Hours
                </span>
              </div>
              <p className="text-xs text-text-secondary mt-1">
                Contextual AI creative hooks paired with rapid checkout funnels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
