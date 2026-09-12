"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { siteData } from "@/data/siteData";
import { ArrowDown, FileText, ChevronRight, MapPin, Award, CheckCircle2 } from "lucide-react";

interface HeroProps {
  onOpenResume: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentRoleIndex((prev) => (prev + 1) % siteData.personal.rotatingRoles.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="hero" className="relative min-h-[92vh] pt-32 pb-16 flex items-center overflow-hidden">
      {/* Engineering Blueprint Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern bg-[size:32px_32px] opacity-40 pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-xs font-semibold tracking-wider">
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-ping" />
                CIVIL ENGINEER • NEPAL
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface border border-border text-text-secondary font-mono text-xs">
                <Award className="w-3.5 h-3.5 text-accent" />
                NEC Licensed (Oct 2024)
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <p className="text-sm sm:text-base font-mono text-text-muted uppercase tracking-widest">
                Professional Engineering Portfolio
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-text-primary tracking-tight leading-[1.1]">
                Er. Denish Adhikari
              </h1>
            </div>

            {/* Rotating Role Pill (Selfer adaptation) */}
            <div className="py-2">
              <div className="inline-flex items-center gap-3 px-4 py-2.5 rounded-xl bg-surface border border-border/90 shadow-lg">
                <span className="text-xs font-mono uppercase text-accent font-semibold">Specialization:</span>
                <span
                  key={currentRoleIndex}
                  className="text-base sm:text-lg font-bold text-text-primary transition-all duration-300 animate-in fade-in slide-in-from-bottom-2"
                >
                  {siteData.personal.rotatingRoles[currentRoleIndex]}
                </span>
              </div>
            </div>

            {/* Professional Summary Statement */}
            <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-2xl">
              Civil Engineer with practical site experience in{" "}
              <span className="text-text-primary font-semibold">wastewater treatment plant construction</span>,{" "}
              <span className="text-text-primary font-semibold">reinforced concrete (RCC) works</span>, and{" "}
              <span className="text-text-primary font-semibold">Total Station &amp; Auto Level surveying</span>.
              Proven track record managing 40–50 site laborers and maintaining strict structural compliance.
            </p>

            {/* Location & Contact Meta */}
            <div className="flex flex-wrap items-center gap-5 text-xs text-text-muted font-mono pt-1">
              <span className="flex items-center gap-1.5 text-text-secondary">
                <MapPin className="w-4 h-4 text-accent" />
                Kathmandu / Nepal
              </span>
              <span className="flex items-center gap-1.5 text-text-secondary">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                Available for Site &amp; Project Operations
              </span>
            </div>

            {/* CTA Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-accent text-white font-semibold text-sm hover:bg-accent-soft transition-all shadow-xl shadow-accent/25 hover:shadow-accent/40 group"
              >
                <span>Explore Projects</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-surface hover:bg-surface-light border border-border hover:border-accent text-text-primary font-semibold text-sm transition-all group"
              >
                <FileText className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                <span>Download CV (PDF)</span>
              </button>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-3.5 text-text-secondary hover:text-accent font-semibold text-sm transition-colors"
              >
                Contact Directly →
              </a>
            </div>
          </div>

          {/* Right Column: High-Fidelity Engineering Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Glow & Technical Frame */}
              <div className="relative rounded-2xl bg-surface border border-border p-3 shadow-2xl shadow-black/80 overflow-hidden group">
                <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-surface-dark border border-border/60">
                  <Image
                    src="/images/profile/profile-1.jpg"
                    alt="Er. Denish Adhikari - Civil Site Engineer & Surveyor (Nepal)"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    priority
                  />
                </div>

                {/* Floating On-Site Badge */}
                <div className="absolute bottom-6 left-6 right-6 bg-[#0B0F14]/95 backdrop-blur-md border border-border rounded-xl p-4 shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-[11px] font-mono text-accent font-semibold uppercase tracking-wider">
                        Sarathi Construction Pvt. Ltd.
                      </p>
                      <p className="text-sm font-bold text-text-primary">
                        Tokha WWTP &amp; RCC Tanks
                      </p>
                    </div>
                    <div className="text-right font-mono text-xs text-text-secondary">
                      <span className="text-emerald-400 font-bold">40–50</span> Workers
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator (Selfer Signature Arrow) */}
        <div className="pt-16 flex items-center justify-between border-t border-border/60 mt-16">
          <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
            <span className="w-2 h-2 rounded-full bg-accent" />
            SCROLL TO EXPLORE ENGINEERING PRACTICE
          </div>
          <a
            href="#stats"
            className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent transition-all group"
            aria-label="Scroll Down"
          >
            <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};
