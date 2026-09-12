"use client";

import React from "react";
import { educationData } from "@/data/education";
import { Award, GraduationCap, ShieldCheck, CheckCircle2, Calendar, MapPin } from "lucide-react";

export const EducationCertSection: React.FC = () => {
  return (
    <section className="py-24 bg-surface/30 border-t border-border/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs font-mono uppercase text-accent font-semibold tracking-widest">
            QUALIFICATIONS // OFFICIAL CREDENTIALS
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">
            Education &amp; Professional Licensing
          </h2>
          <p className="text-sm sm:text-base text-text-secondary">
            Verified academic qualifications and government engineering council authorization for professional practice in Nepal.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Official NEC Engineering License Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl bg-gradient-to-br from-surface to-surface-dark border-2 border-accent/40 p-6 sm:p-8 shadow-2xl space-y-6">
              <div className="flex items-center justify-between pb-5 border-b border-border/70">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-accent/15 border border-accent/30 flex items-center justify-center text-accent">
                    <ShieldCheck className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-text-primary">
                      Nepal Engineering Council
                    </h3>
                    <p className="text-xs font-mono text-text-muted">Statutory Regulatory Body</p>
                  </div>
                </div>
                <span className="text-[10px] font-mono font-bold px-2.5 py-1 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-800/40">
                  ACTIVE
                </span>
              </div>

              {/* License Card Preview Details */}
              <div className="p-4 rounded-xl bg-surface-dark border border-border/80 space-y-3 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="text-text-muted">PROFESSION:</span>
                  <span className="text-text-primary font-bold">Civil Engineer (General)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">LICENSE STATUS:</span>
                  <span className="text-emerald-400 font-bold">Registered (Oct 23, 2024)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">AUTHORIZATION:</span>
                  <span className="text-text-secondary">All Civil Practice in Nepal</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-text-muted">VERIFIED HOLDER:</span>
                  <span className="text-accent font-bold">Er. Denish Adhikari</span>
                </div>
              </div>

              <div className="space-y-2 text-xs text-text-secondary leading-relaxed">
                <p>
                  Officially registered and authorized by the Nepal Engineering Council (NEC) to plan, design, supervise, and certify civil infrastructure and building works under Nepal law.
                </p>
              </div>

              <div className="pt-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-accent">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Licensed for Municipal &amp; Structural Submissions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Academic Degrees Timeline */}
          <div className="lg:col-span-7 space-y-6">
            {educationData
              .filter((e) => e.type !== "LICENSE")
              .map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-surface rounded-2xl border border-border/80 p-6 sm:p-7 hover:border-accent/40 transition-all shadow-lg space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-border/60">
                    <div>
                      <span className="text-[11px] font-mono font-bold text-accent px-2.5 py-0.5 rounded bg-accent/10 border border-accent/20">
                        {edu.period}
                      </span>
                      <h4 className="text-lg font-bold text-text-primary mt-1.5">
                        {edu.degree}
                      </h4>
                      <p className="text-xs sm:text-sm font-semibold text-text-secondary">
                        {edu.institution}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-text-muted">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    {edu.highlights.map((point, pIdx) => (
                      <div key={pIdx} className="flex items-start gap-2 text-xs text-text-secondary leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent/80 mt-1.5 flex-shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
