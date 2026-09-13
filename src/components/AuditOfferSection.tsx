import SpotlightCard from "./SpotlightCard";

export default function AuditOfferSection() {
  const pillars = [
    {
      icon: "verified_user",
      title: "Credibility Engine",
      desc: "Pre-sell high-intent prospects before hopping on the first call.",
    },
    {
      icon: "dynamic_feed",
      title: "Attention Magnet",
      desc: "Turn complex operational playbooks into viral narrative posts.",
    },
    {
      icon: "contact_page",
      title: "Executive Access",
      desc: "Direct asynchronous reach to Tier-1 investors & founders.",
    },
    {
      icon: "forward_to_inbox",
      title: "Inbound Pipeline",
      desc: "Wake up to qualified DMs already pre-sold on your system.",
    },
  ];

  return (
    <section
      id="audit"
      className="w-full max-w-[1120px] mx-auto px-5 lg:px-8 py-20 scroll-mt-20"
    >
      <div className="glass-card rounded-2xl p-7 sm:p-10 relative overflow-hidden">
        {/* Ambient Corner Glow */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(circle,rgba(10,102,194,0.06)_0%,transparent_70%)] pointer-events-none -z-0 blur-2xl" />

        {/* Section Title */}
        <div className="max-w-2xl mb-10 space-y-2 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-coral-subtle text-coral-primary text-xs sm:text-sm font-medium border border-coral-border/60">
            <span className="material-symbols-outlined text-[14px]">star</span>
            <span>Founder Growth</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] lg:leading-[42px] text-text-primary font-medium tracking-tight">
            Turn Your LinkedIn Profile Into An Inbound Engine
          </h2>
          <p className="text-sm sm:text-base text-text-secondary">
            Most executive accounts sit as passive resumes. Here is how we turn yours into a deal magnet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
          {/* 4 Clean Pillars (7 columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {pillars.map((p, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white/70 border border-border-subtle hover:border-coral-border transition-colors flex flex-col justify-center shadow-2xs group"
              >
                <div className="flex items-center gap-2 text-coral-primary mb-1.5">
                  <span className="material-symbols-outlined text-[18px] group-hover:scale-110 transition-transform">
                    {p.icon}
                  </span>
                  <h3 className="text-sm font-semibold text-text-primary">
                    {p.title}
                  </h3>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Audit Offer Card (5 columns) */}
          <SpotlightCard className="lg:col-span-5 bg-white p-6 rounded-xl shadow-xs border border-border-strong flex flex-col justify-center space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="text-xs text-coral-primary font-medium px-2.5 py-0.5 rounded-full bg-coral-subtle border border-coral-border/50">
                Strictly 5 Spots/Mo
              </span>
              <span className="text-xs text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full flex items-center gap-1.5 font-medium border border-emerald-100">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                2 Left This Month
              </span>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold text-text-primary">
                Free 1:1 Inbound Teardown
              </h3>
              <p className="text-xs text-text-secondary leading-relaxed mt-1">
                Get a personalized voice note &amp; action plan auditing your headline hook, banner, and inbound funnel.
              </p>
            </div>

            <div className="space-y-2 pt-1">
              <a
                href="https://www.linkedin.com/in/personalbrandingmanas/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 rounded-full bg-coral-primary hover:bg-coral-hover text-on-primary text-sm py-2.5 transition-all duration-200 shadow-sm font-medium hover:shadow-md"
              >
                <span>Request Profile Audit</span>
                <span className="material-symbols-outlined text-[16px]">
                  open_in_new
                </span>
              </a>
              <p className="text-[11px] text-center text-text-tertiary">
                Send a direct DM with &ldquo;AUDIT&rdquo; to secure your slot
              </p>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}
