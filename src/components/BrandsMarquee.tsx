export default function BrandsMarquee() {
  const brands = [
    {
      name: "Meta Ads",
      tag: "Acquisition & CAPI",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.24.19 2.24.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02Z" />
        </svg>
      ),
    },
    {
      name: "Google Ads",
      tag: "Search & Performance Max",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48Z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn Growth",
      tag: "Inbound & B2B Pipeline",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z" />
        </svg>
      ),
    },
    {
      name: "Suno AI",
      tag: "Generative Audio & Anthems",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
        </svg>
      ),
    },
    {
      name: "Shopify Plus",
      tag: "Checkout & CVR Funnels",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M15.87 3.56c-.05-.44-.39-.77-.83-.79-.44-.03-.84.25-.97.67-.34 1.13-1.18 3.01-2.42 3.66-.58.3-1.26.41-1.92.36-.08-.47-.29-.91-.6-1.28-.9-1.07-2.34-1.57-3.77-1.31-.19.04-.38.1-.55.19L3.5 19.38c-.08.38.12.76.49.88l13.88 4.47c.07.02.14.03.21.03.32 0 .61-.2.72-.51l4.9-14.86-7.83-5.83Zm-3.52 4.14c.82-.43 1.48-1.56 1.81-2.49.33.93.99 2.06 1.81 2.49-1.06.49-2.56.49-3.62 0Z" />
        </svg>
      ),
    },
    {
      name: "WhatsApp API",
      tag: "Direct Inbound Closing",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25.7-.72 1.3-1.37 1.67-.5.29-1.15.42-1.74.38-2.66-.18-5.07-1.76-6.42-4.04-.69-1.15-1.06-2.48-1.06-3.83 0-1.43.54-2.48 1.13-3.09.28-.29.67-.44 1.07-.44h.77c.25 0 .47.16.55.4l.75 2.12c.08.24.01.5-.17.68l-.48.49c.32.65.77 1.23 1.31 1.72.58.52 1.26.92 2 1.16l.54-.53c.18-.18.45-.25.69-.16l2.16.89c.23.09.38.32.36.57-.01.21-.05.41-.09.61Z" />
        </svg>
      ),
    },
    {
      name: "Champions 11",
      tag: "1M+ Tournament Scale",
      icon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 0 1 3 3h-15a3 3 0 0 1 3-3m9 0v-3.375c0-.621-.504-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.003 0H9.497m5.003 0a7.487 7.487 0 0 0 1.996-5.25v-2.25h2.25a2.25 2.25 0 0 0 2.25-2.25v-.75a.75.75 0 0 0-.75-.75h-3.75v-.75a2.25 2.25 0 0 0-2.25-2.25h-4.5a2.25 2.25 0 0 0-2.25 2.25v.75H5.25a.75.75 0 0 0-.75.75v.75a2.25 2.25 0 0 0 2.25 2.25h2.25v2.25c0 1.986.772 3.791 2.046 5.25" />
        </svg>
      ),
    },
  ];

  // Repeat twice for seamless infinite marquee loop
  const marqueeList = [...brands, ...brands];

  return (
    <section className="w-full py-10 bg-surface-canvas border-y border-border-subtle overflow-hidden relative">
      <div className="max-w-[1120px] mx-auto px-5 lg:px-8 mb-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-widest text-text-tertiary">
          Platforms, Channels &amp; Ecosystems Scaled
        </p>
      </div>

      {/* Left and Right Fade Gradients */}
      <div className="absolute top-0 left-0 w-20 md:w-36 h-full bg-gradient-to-r from-surface-canvas to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 right-0 w-20 md:w-36 h-full bg-gradient-to-l from-surface-canvas to-transparent z-10 pointer-events-none" />

      {/* Scrolling Track */}
      <div className="w-full overflow-hidden flex">
        <div className="animate-marquee flex items-center gap-6 md:gap-8">
          {marqueeList.map((brand, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 px-5 py-3 rounded-xl bg-surface-card border border-border-subtle shadow-xs hover:border-coral-border hover:shadow-sm transition-all group shrink-0"
            >
              <div className="text-text-secondary group-hover:text-coral-primary transition-colors">
                {brand.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-semibold text-text-primary tracking-tight group-hover:text-coral-primary transition-colors">
                  {brand.name}
                </span>
                <span className="text-[10px] text-text-tertiary">
                  {brand.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
