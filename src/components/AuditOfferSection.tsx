export default function AuditOfferSection() {
  return (
    <section
      id="audit"
      className="w-full max-w-[1120px] mx-auto px-5 lg:px-8 py-16 scroll-mt-20"
    >
      <div className="bg-surface-card rounded-2xl p-8 md:p-12 shadow-sm border border-border-subtle relative overflow-hidden">
        {/* Section Title */}
        <div className="max-w-2xl mb-10 space-y-2">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-coral-subtle text-coral-primary text-xs sm:text-sm font-medium">
            <span className="material-symbols-outlined text-[14px]">star</span>
            <span>Exclusive Cohort</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[32px] lg:leading-[40px] text-text-primary font-medium tracking-tight">
            Turn Your LinkedIn Profile Into An Inbound Engine
          </h2>
          <p className="text-sm sm:text-base text-text-secondary">
            Most executive accounts sit as passive resumes. Here is how we turn
            yours into a deal magnet.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 4 Clean Pillars (7 columns) */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-surface-container-low border border-border-subtle flex flex-col justify-center">
              <div className="flex items-center gap-2 text-coral-primary mb-1.5">
                <span className="material-symbols-outlined text-[18px]">
                  verified_user
                </span>
                <h3 className="text-sm font-medium text-text-primary">
                  Credibility Engine
                </h3>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Establish category command before hopping on a single prospective sales call.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low border border-border-subtle flex flex-col justify-center">
              <div className="flex items-center gap-2 text-coral-primary mb-1.5">
                <span className="material-symbols-outlined text-[18px]">
                  dynamic_feed
                </span>
                <h3 className="text-sm font-medium text-text-primary">
                  Attention Magnet
                </h3>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Unpack complex operational playbooks into high-virality, narrative posts.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low border border-border-subtle flex flex-col justify-center">
              <div className="flex items-center gap-2 text-coral-primary mb-1.5">
                <span className="material-symbols-outlined text-[18px]">
                  contact_page
                </span>
                <h3 className="text-sm font-medium text-text-primary">
                  Executive Access
                </h3>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Direct asynchronous reach to Tier-1 investors, directors, and strategic partners.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-surface-container-low border border-border-subtle flex flex-col justify-center">
              <div className="flex items-center gap-2 text-coral-primary mb-1.5">
                <span className="material-symbols-outlined text-[18px]">
                  forward_to_inbox
                </span>
                <h3 className="text-sm font-medium text-text-primary">
                  Inbound Pipeline
                </h3>
              </div>
              <p className="text-xs text-text-secondary leading-relaxed">
                Wake up to qualified inbound DMs already pre-sold on your methodologies.
              </p>
            </div>
          </div>

          {/* Audit Offer Card (5 columns) */}
          <div className="lg:col-span-5 bg-surface-container-lowest p-5 sm:p-6 rounded-xl shadow-sm border border-border-subtle flex flex-col justify-center space-y-3.5">
            <div className="flex items-center justify-between">
              <span className="text-xs text-coral-primary font-medium px-2.5 py-0.5 rounded-full bg-coral-subtle">
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
                className="w-full flex items-center justify-center gap-2 rounded-full bg-coral-primary hover:bg-coral-hover text-on-primary text-sm py-2.5 transition-colors shadow-sm font-medium"
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
          </div>
        </div>
      </div>
    </section>
  );
}
