"use client";

import React from "react";
import { siteData as staticSiteData } from "@/data/siteData";
import { usePortfolioData } from "@/data/PortfolioContext";
import { ShieldCheck, Users, Compass, Briefcase } from "lucide-react";

export const StatsCounter: React.FC = () => {
  const { data } = usePortfolioData();
  const stats = data?.siteData?.stats || staticSiteData.stats;
  const statIcons = [ShieldCheck, Users, Compass, Briefcase];

  return (
    <section id="stats" className="py-12 bg-surface/50 border-y border-border/70 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center pb-6">
          <p className="text-xs font-mono uppercase text-accent font-semibold tracking-widest">
            VERIFIED METRICS // PRACTICE HIGHLIGHTS
          </p>
          <h2 className="text-xl sm:text-2xl font-bold text-text-primary mt-1">
            Engineering at a Glance
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <div
                key={stat.label}
                className="relative bg-surface p-6 rounded-2xl border border-border/80 hover:border-accent/40 transition-all text-center group shadow-md"
              >
                <div className="w-10 h-10 mx-auto rounded-xl bg-surface-light/60 border border-border flex items-center justify-center text-accent mb-3 group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <div className="text-3xl sm:text-4xl font-extrabold text-text-primary font-mono tracking-tight group-hover:text-accent transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm font-semibold text-text-primary mt-1">
                  {stat.label}
                </div>
                <div className="text-xs font-mono text-text-muted mt-1">
                  {stat.subtext}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
