"use client";

import React from "react";
import { experienceData as staticExperience } from "@/data/experience";
import { usePortfolioData } from "@/data/PortfolioContext";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export const ExperienceSection: React.FC = () => {
  const { data } = usePortfolioData();
  const activeExperience = data?.experienceData || staticExperience;

  return (
    <section id="experience" className="py-24 bg-surface/30 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs font-mono uppercase text-accent font-semibold tracking-widest">
            CAREER PROGRESSION // FIELD TIMELINE
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">
            Professional Experience
          </h2>
          <p className="text-sm sm:text-base text-text-secondary">
            Verified engineering roles spanning heavy infrastructure site operations, quality control, and consultancy drafting.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="max-w-4xl mx-auto relative border-l-2 border-border/80 pl-6 sm:pl-10 space-y-12">
          {activeExperience.map((exp, index) => (
            <div key={index} className="relative group">
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-[#0B0F14] border-4 border-accent shadow-md group-hover:scale-125 transition-transform" />

              <div className="bg-surface p-7 sm:p-8 rounded-2xl border border-border/80 hover:border-accent/50 transition-all shadow-xl space-y-5">
                {/* Header: Period & Company */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-border/60">
                  <div>
                    <span className="text-xs font-mono font-bold text-accent px-2.5 py-1 rounded bg-accent/10 border border-accent/20">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-bold text-text-primary mt-2">
                      {exp.role}
                    </h3>
                    <p className="text-sm font-semibold text-text-secondary mt-0.5">
                      {exp.company}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted">
                    <MapPin className="w-3.5 h-3.5 text-accent" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Narrative Summary */}
                <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
                  {exp.description}
                </p>

                {/* Verified Deliverables / Achievements */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono text-text-muted uppercase tracking-wider font-semibold">
                    Key Deliverables &amp; Field Responsibilities:
                  </h4>
                  <div className="grid grid-cols-1 gap-2.5">
                    {exp.achievements.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs text-text-secondary">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                        <span className="leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Skill Pills */}
                <div className="pt-2 flex flex-wrap gap-2">
                  {exp.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-[11px] font-mono px-2.5 py-1 rounded bg-surface-light text-text-primary border border-border/60"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
