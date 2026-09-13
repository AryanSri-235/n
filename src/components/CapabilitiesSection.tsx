interface Capability {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
}

const capabilities: Capability[] = [
  {
    id: "CAPABILITY 01",
    icon: "explore",
    title: "GTM Strategy & Positioning",
    description:
      "A brilliant offer collapses without distinct positioning. I map granular ICPs, build angle hypotheses, and sequence validation before committing massive capital.",
    features: [
      "Ideal Customer Profile & Intent Mapping",
      "Channel Sequencing & Budget Hypotheses",
    ],
  },
  {
    id: "CAPABILITY 02",
    icon: "show_chart",
    title: "Performance Marketing",
    description:
      "Scalable Meta and search acquisition that optimizes strictly for downstream cash collected rather than shallow vanity metrics or unverified CTR spikes.",
    features: [
      "Full-Funnel Meta & Google Conversion APIs",
      "Multi-Angle Fatigue Cycling & Unit ROAS",
    ],
  },
  {
    id: "CAPABILITY 03",
    icon: "psychology",
    title: "AI-Powered Rapid Sprints",
    description:
      "Leveraging generative voice, Suno audio models, and algorithmic video editing to produce 20+ hook iterations in hours instead of slow 4-week production cycles.",
    features: [
      "Synthetic Voiceovers & Suno AI Audio Anthems",
      "High-Velocity Creative Batch Testing",
    ],
  },
  {
    id: "CAPABILITY 04",
    icon: "share",
    title: "Founder Inbound Engine",
    description:
      "Transforming static LinkedIn profiles into inbound conversion mechanics that attract corporate decision-makers, high-ticket buyers, and key investors.",
    features: [
      "Profile-to-Pipeline Conversion Architecture",
      "Pattern-Interrupt Authority Content",
    ],
  },
];

export default function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="w-full max-w-[1120px] mx-auto px-5 lg:px-8 py-16 scroll-mt-20"
    >
      {/* Section Header */}
      <div className="max-w-xl mb-12 space-y-2">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-coral-subtle text-coral-primary text-xs sm:text-sm font-medium">
          <span className="material-symbols-outlined text-[14px]">bolt</span>
          <span>Tactical Arsenal</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-[32px] lg:leading-[40px] text-text-primary font-medium tracking-tight">
          Four Ways I Help Businesses Grow
        </h2>
        <p className="text-sm sm:text-base text-text-secondary">
          Turning fleeting attention into predictable, repeatable balance-sheet
          performance.
        </p>
      </div>

      {/* 2x2 Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {capabilities.map((cap) => (
          <div
            key={cap.id}
            className="bg-surface-card p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col justify-between border border-border-subtle group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-full bg-coral-subtle flex items-center justify-center text-coral-primary">
                  <span className="material-symbols-outlined text-[20px]">
                    {cap.icon}
                  </span>
                </div>
                <span className="text-xs text-coral-primary font-mono font-medium">
                  {cap.id}
                </span>
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2 group-hover:text-coral-primary transition-colors">
                {cap.title}
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                {cap.description}
              </p>
            </div>

            <ul className="space-y-2.5 pt-4 bg-surface-container-lowest -mx-8 -mb-8 p-6 rounded-b-xl border-t border-border-subtle">
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
          </div>
        ))}
      </div>
    </section>
  );
}
