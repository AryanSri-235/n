"use client";

import { useState } from "react";

type GrowthGoal = "lead-gen" | "founder-brand" | "ai-sprint" | "gtm";

interface GoalOption {
  id: GrowthGoal;
  label: string;
}

const goalOptions: GoalOption[] = [
  { id: "lead-gen", label: "Scale Meta Ads" },
  { id: "founder-brand", label: "LinkedIn Inbound" },
  { id: "ai-sprint", label: "AI Creative Sprint" },
  { id: "gtm", label: "Full GTM Overhaul" },
];

export default function ContactSection() {
  const [selectedGoal, setSelectedGoal] = useState<GrowthGoal>("lead-gen");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate brief reception
    setIsSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="w-full max-w-[1120px] mx-auto px-5 lg:px-8 py-16 mb-12 scroll-mt-20"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        {/* Left Column: Context & Fast-Track (5 cols) */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-coral-subtle text-coral-primary text-xs sm:text-sm font-medium mb-4">
              <span className="material-symbols-outlined text-[14px]">send</span>
              <span>Direct Line</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-[32px] lg:leading-[40px] text-text-primary font-medium tracking-tight mb-4">
              Ready To Scale?
            </h2>
            <p className="text-sm sm:text-base text-text-secondary leading-relaxed mb-6">
              Whether you need a full GTM overhaul, performance acquisition sprint,
              or personal brand distribution engine, let’s run the numbers.
            </p>

            <blockquote className="p-5 rounded-xl bg-surface-card shadow-sm border-l-4 border-coral-primary mb-6 border-y border-r border-border-subtle">
              <p className="text-sm sm:text-base text-text-primary italic">
                &ldquo;Creative enough to get attention. Data-driven enough to
                prove it worked.&rdquo;
              </p>
              <cite className="block text-xs text-text-secondary mt-2 not-italic font-medium">
                — Manas Srivastava
              </cite>
            </blockquote>
          </div>

          <div className="space-y-3">
            <span className="text-xs font-semibold text-text-tertiary uppercase tracking-wider">
              Fast-Track Communication
            </span>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://wa.me/919999999999?text=Hi%20Manas,%20I'd%20like%20to%20talk%20about%20growth%20campaigns."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-card hover:bg-surface-container-low text-text-primary text-sm shadow-sm transition-colors border border-border-subtle"
              >
                <span className="material-symbols-outlined text-tertiary text-[18px]">
                  chat
                </span>
                <span>WhatsApp Direct</span>
              </a>
              <a
                href="https://www.linkedin.com/in/personalbrandingmanas/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface-card hover:bg-surface-container-low text-text-primary text-sm shadow-sm transition-colors border border-border-subtle"
              >
                <span className="material-symbols-outlined text-coral-primary text-[18px]">
                  hub
                </span>
                <span>LinkedIn DM</span>
              </a>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Form (7 cols) */}
        <div className="lg:col-span-7 bg-surface-card p-8 md:p-10 rounded-2xl shadow-sm border border-border-subtle">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label
                    htmlFor="name"
                    className="block text-xs font-semibold text-text-primary"
                  >
                    Your Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    placeholder="e.g. Alex Rivera"
                    className="w-full px-4 py-3 bg-surface-container-lowest rounded-lg text-sm text-text-primary border border-border-strong placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-coral-border focus:border-coral-primary transition-all"
                  />
                </div>
                <div className="space-y-1.5">
                  <label
                    htmlFor="email"
                    className="block text-xs font-semibold text-text-primary"
                  >
                    Work Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 bg-surface-container-lowest rounded-lg text-sm text-text-primary border border-border-strong placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-coral-border focus:border-coral-primary transition-all"
                  />
                </div>
              </div>

              {/* Goal Selector Chips */}
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-text-primary">
                  Primary Growth Goal
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {goalOptions.map((opt) => {
                    const isSelected = selectedGoal === opt.id;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => setSelectedGoal(opt.id)}
                        className={`flex items-center justify-start gap-2 p-3 text-left rounded-lg text-xs font-medium transition-all ${
                          isSelected
                            ? "border border-coral-primary bg-coral-subtle text-coral-primary shadow-xs"
                            : "border border-border-strong bg-surface-container-lowest text-text-secondary hover:text-text-primary hover:border-text-secondary"
                        }`}
                      >
                        <span
                          className={`material-symbols-outlined text-[16px] ${
                            isSelected
                              ? "text-coral-primary"
                              : "text-text-tertiary"
                          }`}
                        >
                          {isSelected
                            ? "check_circle"
                            : "radio_button_unchecked"}
                        </span>
                        <span>{opt.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message / Scope */}
              <div className="space-y-1.5">
                <label
                  htmlFor="details"
                  className="block text-xs font-semibold text-text-primary"
                >
                  Project Scope &amp; Monthly Budget
                </label>
                <textarea
                  id="details"
                  name="details"
                  rows={4}
                  required
                  value={formData.details}
                  onChange={(e) =>
                    setFormData({ ...formData, details: e.target.value })
                  }
                  placeholder="Tell me about your product, current traction, and what target outcome we need to hit..."
                  className="w-full px-4 py-3 bg-surface-container-lowest rounded-lg text-sm text-text-primary border border-border-strong placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-coral-border focus:border-coral-primary transition-all resize-none"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 rounded-full bg-coral-primary hover:bg-coral-hover text-on-primary text-sm sm:text-base py-3.5 transition-colors shadow-sm font-medium cursor-pointer"
              >
                <span>Send Growth Brief</span>
                <span className="material-symbols-outlined text-[18px]">
                  arrow_forward
                </span>
              </button>
            </form>
          ) : (
            /* Submission Confirmation State */
            <div className="text-center py-12 space-y-4">
              <div className="w-14 h-14 rounded-full bg-coral-subtle text-coral-primary flex items-center justify-center mx-auto shadow-sm">
                <span className="material-symbols-outlined text-[28px]">
                  task_alt
                </span>
              </div>
              <h3 className="text-xl font-medium text-text-primary">
                Brief Received, {formData.name || "friend"}!
              </h3>
              <p className="text-sm text-text-secondary max-w-sm mx-auto leading-relaxed">
                Thanks for reaching out. I review every project personally and
                will respond within 24 hours.
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setFormData({ name: "", email: "", details: "" });
                }}
                className="text-xs text-coral-primary hover:underline pt-2 font-medium"
              >
                ← Send another note
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
