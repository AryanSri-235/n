"use client";

import { useState } from "react";
import SpotlightCard from "./SpotlightCard";

interface ComparisonPoint {
  category: string;
  icon: string;
  before: {
    metric: string;
    badge: string;
    detail: string;
  };
  after: {
    metric: string;
    badge: string;
    detail: string;
  };
}

const comparisonData: ComparisonPoint[] = [
  {
    category: "Cost Per Lead (CPL)",
    icon: "payments",
    before: {
      metric: "₹120 – ₹180+",
      badge: "Budget Drain",
      detail: "Broad targeting & generic audiences burning ad budget",
    },
    after: {
      metric: "₹5 – ₹40",
      badge: "-78% Cost Drop",
      detail: "Hyper-segmented ICPs + Conversational micro-funnels",
    },
  },
  {
    category: "Creative Velocity",
    icon: "bolt",
    before: {
      metric: "1 Banner / 3 Wks",
      badge: "Ad Fatigue",
      detail: "Endless agency design cycles and stale creative fatigue",
    },
    after: {
      metric: "15+ Angles / Wk",
      badge: "AI-Powered",
      detail: "Suno AI audio anthems & rapid iterative video hooks",
    },
  },
  {
    category: "Lead Conversion Flow",
    icon: "chat",
    before: {
      metric: "CSV on Friday",
      badge: "Cold Leads",
      detail: "Dead forms dumped into spreadsheets; 48h response lag",
    },
    after: {
      metric: "< 60s Response",
      badge: "WhatsApp API",
      detail: "Automated instant qualification & calendar booking",
    },
  },
  {
    category: "Attribution & ROAS",
    icon: "monitoring",
    before: {
      metric: "Vanity Clicks",
      badge: "Zero Tracking",
      detail: "Fluffy CTR reports that don't reflect bank receipts",
    },
    after: {
      metric: "Meta CAPI + Cash",
      badge: "Verified ROAS",
      detail: "Server-side server attribution tied to actual deals closed",
    },
  },
];

export default function BeforeAfterSection() {
  const [activeTab, setActiveTab] = useState<"compare" | "manas" | "before">("compare");

  return (
    <section
      id="comparison"
      className="w-full max-w-[1120px] mx-auto px-5 lg:px-8 py-20 scroll-mt-20"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-coral-subtle text-coral-primary text-xs sm:text-sm font-medium border border-coral-border/60">
            <span className="material-symbols-outlined text-[14px]">tune</span>
            <span>The Performance Difference</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] lg:leading-[42px] text-text-primary font-medium tracking-tight">
            Typical Agency vs. The Manas Engine
          </h2>
          <p className="text-sm sm:text-base text-text-secondary">
            Why traditional retainers burn ad spend and how high-velocity growth infrastructure scales profitably.
          </p>
        </div>

        {/* Godly Interactive View Toggle */}
        <div className="inline-flex p-1 rounded-xl bg-surface-container border border-border-strong/70 self-start md:self-auto shrink-0 shadow-2xs">
          <button
            onClick={() => setActiveTab("compare")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
              activeTab === "compare"
                ? "bg-white text-coral-primary shadow-xs"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            <span className="material-symbols-outlined text-[15px]">compare</span>
            <span>Side-by-Side</span>
          </button>
          <button
            onClick={() => setActiveTab("manas")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
              activeTab === "manas"
                ? "bg-coral-primary text-white shadow-xs"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            <span className="material-symbols-outlined text-[15px]">verified</span>
            <span>With Manas</span>
          </button>
          <button
            onClick={() => setActiveTab("before")}
            className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-1.5 ${
              activeTab === "before"
                ? "bg-rose-600 text-white shadow-xs"
                : "text-text-secondary hover:text-text-primary"
            }`}
          >
            <span className="material-symbols-outlined text-[15px]">block</span>
            <span>Status Quo</span>
          </button>
        </div>
      </div>

      {/* Interactive Bento Comparison Matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* LEFT COLUMN: Status Quo / Traditional Setup */}
        {(activeTab === "compare" || activeTab === "before") && (
          <SpotlightCard
            spotlightColor="rgba(225, 29, 72, 0.08)"
            className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 ${
              activeTab === "before" ? "md:col-span-2 max-w-2xl mx-auto w-full" : ""
            } bg-white/70 border-rose-100 shadow-2xs`}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-rose-100 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-rose-50 border border-rose-200 flex items-center justify-center text-rose-600">
                    <span className="material-symbols-outlined text-[18px]">cancel</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary">Standard Agency Setup</h3>
                    <p className="text-[11px] text-text-tertiary">Common budget waste model</p>
                  </div>
                </div>
                <span className="text-[11px] font-medium text-rose-600 bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-200">
                  Leaky Pipeline
                </span>
              </div>

              {/* Rows */}
              <div className="space-y-4">
                {comparisonData.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-surface-container-low/60 border border-border-subtle hover:border-rose-200 transition-colors"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-text-tertiary flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[15px] text-rose-400">
                          {item.icon}
                        </span>
                        {item.category}
                      </span>
                      <span className="text-[11px] font-semibold text-rose-600 bg-rose-50 px-2 py-0.5 rounded-md border border-rose-100">
                        {item.before.badge}
                      </span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-text-primary tracking-tight">
                      {item.before.metric}
                    </div>
                    <p className="text-xs text-text-secondary mt-0.5">{item.before.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Insight */}
            <div className="mt-6 pt-4 border-t border-border-subtle flex items-center justify-between text-xs text-text-tertiary">
              <span className="flex items-center gap-1 text-rose-600">
                <span className="material-symbols-outlined text-[16px]">trending_down</span>
                40–60% ad spend wasted on fatigue
              </span>
            </div>
          </SpotlightCard>
        )}

        {/* RIGHT COLUMN: The Manas Srivastava Engine */}
        {(activeTab === "compare" || activeTab === "manas") && (
          <SpotlightCard
            spotlightColor="rgba(10, 102, 194, 0.16)"
            className={`rounded-2xl p-6 sm:p-7 border transition-all duration-300 ${
              activeTab === "manas" ? "md:col-span-2 max-w-2xl mx-auto w-full" : ""
            } glass-card border-coral-border/80 shadow-md ring-1 ring-coral-primary/10`}
          >
            <div>
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-coral-border/40 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-coral-subtle border border-coral-border flex items-center justify-center text-coral-primary">
                    <span className="material-symbols-outlined text-[18px]">verified</span>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-text-primary flex items-center gap-1.5">
                      With Manas Srivastava
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    </h3>
                    <p className="text-[11px] text-text-tertiary">Performance &amp; Growth Engine</p>
                  </div>
                </div>
                <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Profitable Scale
                </span>
              </div>

              {/* Rows */}
              <div className="space-y-4">
                {comparisonData.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-white/90 border border-coral-border/50 hover:border-coral-primary/60 transition-colors shadow-2xs group"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-coral-primary flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[15px]">
                          {item.icon}
                        </span>
                        {item.category}
                      </span>
                      <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-100">
                        {item.after.badge}
                      </span>
                    </div>
                    <div className="text-base sm:text-lg font-bold text-text-primary tracking-tight group-hover:text-coral-primary transition-colors">
                      {item.after.metric}
                    </div>
                    <p className="text-xs text-text-secondary mt-0.5">{item.after.detail}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Action */}
            <div className="mt-6 pt-4 border-t border-border-subtle flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <span className="flex items-center gap-1 text-emerald-700 font-medium">
                <span className="material-symbols-outlined text-[16px]">check_circle</span>
                Guaranteed full-funnel attribution &amp; speed
              </span>
              <a
                href="#audit"
                className="inline-flex items-center gap-1 text-coral-primary font-semibold hover:text-coral-hover transition-colors"
              >
                <span>Claim Teardown Audit</span>
                <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
              </a>
            </div>
          </SpotlightCard>
        )}
      </div>

      {/* Godly Live Delta Stat Bar */}
      <div className="mt-8 p-4 sm:p-5 rounded-2xl bg-white border border-border-strong/70 shadow-xs flex flex-wrap items-center justify-around gap-4 text-center">
        <div>
          <div className="text-xs text-text-tertiary">Average CPL Reduction</div>
          <div className="text-xl sm:text-2xl font-bold text-emerald-700">-68% to -78%</div>
        </div>
        <div className="h-8 w-px bg-border-strong hidden sm:block" />
        <div>
          <div className="text-xs text-text-tertiary">Creative Velocity</div>
          <div className="text-xl sm:text-2xl font-bold text-coral-primary">15+ Hooks/Wk</div>
        </div>
        <div className="h-8 w-px bg-border-strong hidden sm:block" />
        <div>
          <div className="text-xs text-text-tertiary">Direct Response Time</div>
          <div className="text-xl sm:text-2xl font-bold text-text-primary">&lt; 60 Seconds</div>
        </div>
        <div className="h-8 w-px bg-border-strong hidden sm:block" />
        <div>
          <div className="text-xs text-text-tertiary">Managed Spend Tracked</div>
          <div className="text-xl sm:text-2xl font-bold text-emerald-700">₹10Cr+ Real ROAS</div>
        </div>
      </div>
    </section>
  );
}
