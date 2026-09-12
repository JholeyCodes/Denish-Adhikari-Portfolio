"use client";

import React from "react";
import { skillsData } from "@/data/skills";
import { Compass, HardHat, CheckCircle2, Layers, Users, Wrench } from "lucide-react";

export const SkillsSection: React.FC = () => {
  const categoryIcons = [Compass, HardHat, CheckCircle2, Layers, Users];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs font-mono uppercase text-accent font-semibold tracking-widest">
            TECHNICAL TOOLKIT // CORE COMPETENCIES
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">
            Engineering Skills &amp; Instruments
          </h2>
          <p className="text-sm sm:text-base text-text-secondary">
            Strictly verified practical abilities across instrument surveying, concrete laboratory testing, CAD drafting, and site management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillsData.map((category, idx) => {
            const Icon = categoryIcons[idx % categoryIcons.length];
            return (
              <div
                key={category.category}
                className="bg-surface rounded-2xl border border-border/80 p-6 sm:p-7 hover:border-accent/40 transition-all flex flex-col justify-between shadow-lg"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-5 border-b border-border/60">
                    <div className="w-10 h-10 rounded-xl bg-surface-light border border-border flex items-center justify-center text-accent">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-text-primary tracking-wide">
                        {category.category}
                      </h3>
                      <p className="text-[11px] text-text-muted mt-0.5">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Tag List */}
                  <div className="pt-5 space-y-3">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3 rounded-xl bg-surface-light/50 border border-border/60 hover:border-accent/30 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-text-primary">
                            {skill.name}
                          </span>
                          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
                            Verified
                          </span>
                        </div>
                        <p className="text-[11px] text-text-muted mt-1 leading-snug">
                          {skill.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-border/60 flex items-center justify-between text-[11px] font-mono text-text-muted">
                  <span>Standards: IS / NBC / BS</span>
                  <span className="text-accent font-semibold">Active Practice</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
