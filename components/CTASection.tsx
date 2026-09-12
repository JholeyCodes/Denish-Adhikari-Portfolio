"use client";

import React from "react";
import { ArrowRight, FileText, Compass, HardHat } from "lucide-react";

interface CTASectionProps {
  onOpenResume: () => void;
}

export const CTASection: React.FC<CTASectionProps> = ({ onOpenResume }) => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-surface/40 via-surface to-surface-dark border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-xs font-semibold">
          <HardHat className="w-4 h-4 text-accent" />
          <span>CIVIL SITE OPERATIONS // READY FOR ENGAGEMENT</span>
        </div>

        <div className="space-y-4">
          <h2 className="text-3xl sm:text-5xl font-black text-text-primary tracking-tight uppercase">
            Let’s Build Something That Lasts.
          </h2>
          <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Have a civil infrastructure project, RCC construction site, surveying assignment, or consultancy opportunity? Let’s connect and review technical requirements.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent text-white font-bold text-sm hover:bg-accent-soft transition-all shadow-xl shadow-accent/25 hover:shadow-accent/40 group"
          >
            <span>Get In Touch</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <button
            onClick={onOpenResume}
            className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-surface border border-border hover:border-accent text-text-primary font-bold text-sm transition-all group"
          >
            <FileText className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
            <span>Download CV (PDF)</span>
          </button>
        </div>
      </div>
    </section>
  );
};
