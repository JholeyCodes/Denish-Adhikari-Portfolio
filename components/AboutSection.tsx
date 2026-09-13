"use client";

import React from "react";
import Image from "next/image";
import { siteData as staticSiteData } from "@/data/siteData";
import { usePortfolioData } from "@/data/PortfolioContext";
import { FileText, Mail, Phone, MapPin, GraduationCap, Award, Compass, HardHat } from "lucide-react";

interface AboutSectionProps {
  onOpenResume: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume }) => {
  const { data } = usePortfolioData();
  const personal = data?.siteData?.personal || staticSiteData.personal;
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Profile Card */}
          <div className="lg:col-span-5">
            <div className="relative bg-surface rounded-2xl border border-border p-3 shadow-xl group">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden bg-surface-dark border border-border/80">
                <Image
                  src="/images/profile/profile-2.jpg"
                  alt="Er. Denish Adhikari - Civil Engineer Nepal"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Technical Annotation Tag */}
              <div className="mt-3 p-4 rounded-xl bg-surface-light/40 border border-border/60">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                    <HardHat className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-xs font-mono font-semibold uppercase text-text-primary">
                      Civil Site Operations
                    </h4>
                    <p className="text-xs text-text-muted">
                      Reinforcement Checking • Total Station • Concrete QC
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Technical Specifications */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <p className="text-xs font-mono uppercase text-accent font-semibold tracking-widest">
                ABOUT THE ENGINEER // PROFILE
              </p>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary mt-2">
                Engineering Practical, Safe &amp; Lasting Infrastructure
              </h2>
            </div>

            <p className="text-base text-text-secondary leading-relaxed">
              {personal.fullBio || personal.shortBio}
            </p>

            {/* Philosophy Block */}
            <blockquote className="p-4 rounded-xl bg-surface border-l-4 border-accent text-sm sm:text-base italic text-text-primary">
              &ldquo;{personal.philosophy || "Designing and executing safe, compliant, and durable infrastructure where technical precision and structural safety come first."}&rdquo;
            </blockquote>

            {/* Quick Facts 2-Column Technical Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-surface border border-border flex items-start gap-3">
                <Award className="w-4 h-4 text-accent mt-0.5" />
                <div>
                  <div className="text-[11px] font-mono text-text-muted uppercase">Council Registration</div>
                  <div className="text-sm font-semibold text-text-primary">{personal.license} ({personal.licenseDate})</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-surface border border-border flex items-start gap-3">
                <GraduationCap className="w-4 h-4 text-accent mt-0.5" />
                <div>
                  <div className="text-[11px] font-mono text-text-muted uppercase">Degree Qualification</div>
                  <div className="text-sm font-semibold text-text-primary">B.E. Civil (Pokhara Univ.)</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-surface border border-border flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-0.5" />
                <div>
                  <div className="text-[11px] font-mono text-text-muted uppercase">Primary Location</div>
                  <div className="text-sm font-semibold text-text-primary">{personal.location}</div>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-surface border border-border flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent mt-0.5" />
                <div>
                  <div className="text-[11px] font-mono text-text-muted uppercase">Official Email</div>
                  <div className="text-sm font-semibold text-text-primary truncate">{personal.email}</div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-accent text-white font-semibold text-xs uppercase tracking-wider hover:bg-accent-soft transition-all shadow-lg shadow-accent/20"
              >
                <FileText className="w-4 h-4" />
                Download CV (PDF)
              </button>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-surface hover:bg-surface-light border border-border text-text-primary font-semibold text-xs uppercase tracking-wider transition-colors"
              >
                Connect With Engineer
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
