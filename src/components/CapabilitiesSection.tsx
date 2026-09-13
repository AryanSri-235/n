interface Capability {
  id: string;
  icon: string;
  title: string;
  targetOutcome: string;
  features: string[];
}

const capabilities: Capability[] = [
  {
    id: "CAPABILITY 01",
    icon: "explore",
    title: "GTM Strategy & Positioning",
    targetOutcome: "Validate offer angles before burning ad budget",
    features: [
      "Granular ICP & intent mapping",
      "Channel sequencing & unit budget hypotheses",
    ],
  },
  {
    id: "CAPABILITY 02",
    icon: "show_chart",
    title: "Performance Marketing",
    targetOutcome: "Optimize for downstream cash collected, not vanity CTR",
    features: [
      "Meta CAPI & Server-side attribution setup",
      "Multi-angle creative fatigue cycling & ROAS",
    ],
  },
  {
    id: "CAPABILITY 03",
    icon: "psychology",
    title: "AI-Powered Creative Sprints",
    targetOutcome: "20+ hook variations in hours instead of 4-week agency lags",
    features: [
      "Custom Suno AI audio anthems & voiceovers",
      "High-velocity creative testing frameworks",
    ],
  },
  {
    id: "CAPABILITY 04",
    icon: "share",
    title: "Founder Inbound Engine",
    targetOutcome: "Turn passive profile views into qualified high-ticket DMs",
    features: [
      "Profile-to-pipeline conversion architecture",
      "Pattern-interrupt executive authority content",
    ],
  },
];

import SpotlightCard from "./SpotlightCard";

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="w-full max-w-[1120px] mx-auto px-5 lg:px-8 py-20 scroll-mt-20"
    >
      {/* Section Header */}
      <div className="max-w-xl mb-12 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-coral-subtle text-coral-primary text-xs sm:text-sm font-medium border border-coral-border/60">
          <span className="material-symbols-outlined text-[14px]">bolt</span>
          <span>Tactical Arsenal</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-[34px] lg:leading-[42px] text-text-primary font-medium tracking-tight">
          Four Ways I Help Businesses Grow
        </h2>
        <p className="text-sm sm:text-base text-text-secondary">
          Turning fleeting attention into predictable, repeatable balance-sheet performance.
        </p>
      </div>

      {/* 2x2 Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {capabilities.map((cap) => (
          <SpotlightCard
            key={cap.id}
            className="glass-card p-6 sm:p-8 rounded-2xl flex flex-col justify-between group"
          >
            <div>
              {/* Header row: Icon + ID */}
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-xl bg-coral-subtle border border-coral-border/60 flex items-center justify-center text-coral-primary group-hover:scale-105 transition-transform">
                  <span className="material-symbols-outlined text-[20px]">
                    {cap.icon}
                  </span>
                </div>
                <span className="text-xs text-coral-primary font-mono font-semibold">
                  {cap.id}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-lg font-medium text-text-primary mb-2.5 group-hover:text-coral-primary transition-colors">
                {cap.title}
              </h3>

              {/* Punchy Target Outcome Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-surface-container text-xs text-text-secondary font-medium mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-coral-primary" />
                <span>Target: {cap.targetOutcome}</span>
              </div>
            </div>

            {/* Checklist features */}
            <ul className="space-y-2 pt-4 border-t border-border-subtle">
              {cap.features.map((feat, idx) => (
                <li
                  key={idx}
                  className="flex items-center gap-2 text-xs sm:text-sm text-text-secondary"
                >
                  <span className="material-symbols-outlined text-coral-primary text-[16px] shrink-0">
                    check
                  </span>
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </SpotlightCard>
        ))}
      </div>
    </section>
  );
}
