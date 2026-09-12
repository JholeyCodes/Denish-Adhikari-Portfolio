"use client";

import React from "react";
import { expertiseData } from "@/data/expertise";
import { HardHat, Compass, CheckCircle2, Calculator, Layers, Building2, ArrowUpRight } from "lucide-react";

export const Expertise: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    HardHat,
    Compass,
    CheckCircle2,
    Calculator,
    Layers,
    Building2,
  };

  return (
    <section id="expertise" className="py-24 bg-surface/30 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs font-mono uppercase text-accent font-semibold tracking-widest">
            ENGINEERING CAPABILITIES // DOMAINS
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">
            My Engineering Expertise
          </h2>
          <p className="text-sm sm:text-base text-text-secondary leading-relaxed">
            Practical skills in structural execution, precision instrument surveying, quality compliance, and municipal documentation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {expertiseData.map((item) => {
            const Icon = iconMap[item.icon] || HardHat;
            return (
              <div
                key={item.number}
                className="group relative bg-surface p-7 rounded-2xl border border-border/80 hover:border-accent hover:bg-surface-light/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between pb-6 border-b border-border/60">
                    <span className="font-mono text-2xl font-extrabold text-accent">
                      {item.number}
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-surface-light border border-border flex items-center justify-center text-text-secondary group-hover:text-accent group-hover:border-accent/40 group-hover:scale-110 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div className="pt-6 space-y-3">
                    <h3 className="text-lg font-bold text-text-primary tracking-tight group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-text-secondary leading-relaxed">
                      {item.shortDesc}
                    </p>
                  </div>

                  {/* Deliverables Bullet List */}
                  <div className="pt-5 space-y-2">
                    <p className="text-[11px] font-mono text-text-muted uppercase tracking-wider">
                      Core Operations:
                    </p>
                    <ul className="space-y-1.5">
                      {item.deliverables.map((deliv) => (
                        <li key={deliv} className="flex items-center gap-2 text-xs text-text-secondary">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent/80" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Footer Link with animated arrow */}
                <div className="pt-6 mt-6 border-t border-border/60 flex items-center justify-between text-xs font-mono text-text-muted group-hover:text-accent transition-colors">
                  <span>VERIFIED PRACTICE</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
