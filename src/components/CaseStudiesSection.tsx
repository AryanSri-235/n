interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  description: string;
  metricLabel: string;
  metricValue: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "#01",
    tag: "Meta Ads · Acquisition",
    title: "US Lead Generation",
    description:
      "Engineered rigorous US geographical angle tests, conversational micro-landers, and CAPI events to capture high-intent leads without ad fatigue.",
    metricLabel: "Acquisition Efficiency",
    metricValue: "₹5–₹40 CPL",
  },
  {
    id: "#02",
    tag: "Scaling · Paid & AI",
    title: "Champions 11 Cricket League",
    description:
      "Architected full-funnel activation campaigns pairing generative sports hook variations with segmented auction bidding to dominate tournament awareness.",
    metricLabel: "Direct Audience Reach",
    metricValue: "1M+ Impressions",
  },
  {
    id: "#03",
    tag: "AI Creatives · Rapid Sprint",
    title: "Jagannath Yatra Flash Sprint",
    description:
      "Produced custom AI-composed anthems with Suno AI, deploying dynamic video overlays into high-urgency purchase cycles with zero agency overhead.",
    metricLabel: "Flash Conversion",
    metricValue: "30+ Orders in 48h",
  },
];

export default function CaseStudiesSection() {
  return (
    <section
      id="proof"
      className="w-full max-w-[1120px] mx-auto px-5 lg:px-8 py-16 scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-coral-subtle text-coral-primary text-xs sm:text-sm font-medium">
            <span className="material-symbols-outlined text-[14px]">
              verified
            </span>
            <span>Case Logs</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] lg:leading-[40px] text-text-primary font-medium tracking-tight">
            Things I&apos;ve Built &amp; Scaled
          </h2>
          <p className="text-sm sm:text-base text-text-secondary">
            Real campaign metrics, unit economics, and rapid-turnaround revenue sprints.
          </p>
        </div>
        <div className="text-xs text-text-tertiary">
          03 Selected Deployments · 2024–2025
        </div>
      </div>

      {/* 3 Case Study Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((item) => (
          <article
            key={item.id}
            className="flex flex-col justify-between bg-surface-card rounded-xl p-6 shadow-sm hover:shadow-md transition-all duration-200 border border-border-subtle group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-5">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-surface-container-low text-xs text-text-secondary font-medium">
                  {item.tag}
                </span>
                <span className="text-xs text-coral-primary font-mono font-medium">
                  {item.id}
                </span>
              </div>
              <h3 className="text-lg font-medium text-text-primary mb-2 group-hover:text-coral-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-text-secondary leading-relaxed mb-6">
                {item.description}
              </p>
            </div>

            <div className="pt-4 bg-surface-container-lowest -mx-6 -mb-6 p-6 rounded-b-xl flex items-center justify-between border-t border-border-subtle">
              <span className="text-xs text-text-tertiary">
                {item.metricLabel}
              </span>
              <span className="text-base sm:text-lg text-coral-primary font-semibold">
                {item.metricValue}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
