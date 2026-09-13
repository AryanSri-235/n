"use client";

export default function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center">
      <div className="relative flex items-center justify-center">
        {/* Slow Smooth Radar Wave 1 */}
        <span
          className="absolute inset-0 rounded-full bg-coral-primary/35 animate-ping pointer-events-none"
          style={{ animationDuration: "2.8s" }}
        />

        {/* Slow Smooth Radar Wave 2 (Offset for continuous breathing ripple) */}
        <span
          className="absolute inset-0 rounded-full bg-coral-primary/20 animate-ping pointer-events-none"
          style={{ animationDuration: "2.8s", animationDelay: "1.4s" }}
        />

        {/* Main Button */}
        <a
          href="https://wa.me/919999999999?text=Hi%20Manas,%20I'd%20like%20to%20talk%20about%20growth%20campaigns."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="relative z-10 flex items-center gap-2.5 pl-3.5 pr-4 py-3 rounded-full bg-coral-primary hover:bg-coral-hover text-on-primary shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 group cursor-pointer"
        >
          {/* WhatsApp Icon */}
          <svg
            className="w-5 h-5 fill-current shrink-0 group-hover:rotate-12 transition-transform duration-300"
            viewBox="0 0 24 24"
          >
            <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m4.52 11.66c-.25.7-.72 1.3-1.37 1.67-.5.29-1.15.42-1.74.38-2.66-.18-5.07-1.76-6.42-4.04-.69-1.15-1.06-2.48-1.06-3.83 0-1.43.54-2.48 1.13-3.09.28-.29.67-.44 1.07-.44h.77c.25 0 .47.16.55.4l.75 2.12c.08.24.01.5-.17.68l-.48.49c.32.65.77 1.23 1.31 1.72.58.52 1.26.92 2 1.16l.54-.53c.18-.18.45-.25.69-.16l2.16.89c.23.09.38.32.36.57-.01.21-.05.41-.09.61Z" />
          </svg>

          {/* Text Label */}
          <span className="text-xs sm:text-sm font-semibold tracking-tight whitespace-nowrap">
            Quick Chat
          </span>
        </a>
      </div>
    </div>
  );
}
