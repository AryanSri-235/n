interface CaseStudy {
  id: string;
  tag: string;
  title: string;
  metric: string;
  metricBadge: string;
  highlights: { icon: string; text: string }[];
}

const caseStudies: CaseStudy[] = [
  {
    id: "#01",
    tag: "Meta Ads · CAPI",
    title: "US Lead Generation",
    metric: "₹5–₹40 CPL",
    metricBadge: "-68% Cost Drop",
    highlights: [
      { icon: "target", text: "Targeted North America buyer ICPs" },
      { icon: "bolt", text: "Conversational micro-landers & CAPI" },
      { icon: "verified", text: "Zero ad fatigue scale mechanics" },
    ],
  },
  {
    id: "#02",
    tag: "Paid & AI Scale",
    title: "Champions 11 Cricket League",
    metric: "1M+ Reach",
    metricBadge: "Verified Views",
    highlights: [
      { icon: "campaign", text: "Full-funnel awareness takeover" },
      { icon: "psychology", text: "Generative sports hook variations" },
      { icon: "trending_up", text: "Segmented auction bid domination" },
    ],
  },
  {
    id: "#03",
    tag: "AI Creative Sprint",
    title: "Jagannath Yatra Flash Sprint",
    metric: "30+ Sales in 48h",
    metricBadge: "Rapid Velocity",
    highlights: [
      { icon: "music_note", text: "Custom Suno AI-composed anthems" },
      { icon: "movie", text: "Dynamic contextual video overlays" },
      { icon: "speed", text: "Zero agency overhead turnaround" },
    ],
  },
];

export default function CaseStudiesSection() {
  return (
    <section
      id="proof"
      className="w-full max-w-[1120px] mx-auto px-5 lg:px-8 py-20 scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-coral-subtle text-coral-primary text-xs sm:text-sm font-medium border border-coral-border/60">
            <span className="material-symbols-outlined text-[14px]">
              verified
            </span>
            <span>Case Logs</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] lg:leading-[42px] text-text-primary font-medium tracking-tight">
            Things I&apos;ve Built &amp; Scaled
          </h2>
          <p className="text-sm sm:text-base text-text-secondary">
            Real campaign metrics, unit economics, and rapid revenue sprints.
          </p>
        </div>
        <div className="text-xs font-semibold uppercase tracking-wider text-text-tertiary">
          03 Selected Deployments
        </div>
      </div>

      {/* Metric-First Bento Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {caseStudies.map((item) => (
          <article
            key={item.id}
            className="glass-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between group"
          >
            <div>
              {/* Header: Tag + ID */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center px-2.5 py-1 rounded-full bg-surface-container text-xs text-text-secondary font-medium">
                  {item.tag}
                </span>
                <span className="text-xs text-coral-primary font-mono font-semibold">
                  {item.id}
                </span>
              </div>

              {/* Bold Primary Metric Callout */}
              <div className="mb-4">
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl font-bold text-text-primary tracking-tight">
                    {item.metric}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-100">
                    {item.metricBadge}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-medium text-text-primary mt-1 group-hover:text-coral-primary transition-colors">
                  {item.title}
                </h3>
              </div>

              {/* Punchy Visual Highlights (No Long Text Walls) */}
              <div className="space-y-2 pt-3 border-t border-border-subtle">
                {item.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-text-secondary">
                    <span className="material-symbols-outlined text-coral-primary text-[15px] shrink-0">
                      {h.icon}
                    </span>
                    <span>{h.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Status bar */}
            <div className="mt-6 pt-3.5 border-t border-border-subtle flex items-center justify-between text-[11px] text-text-tertiary">
              <span>Verified Deployment</span>
              <span className="text-coral-primary font-medium group-hover:translate-x-0.5 transition-transform flex items-center gap-0.5">
                Case details →
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
