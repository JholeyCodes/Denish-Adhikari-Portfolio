"use client";

import React from "react";
import Link from "next/link";
import { siteData } from "@/data/siteData";
import { experienceData } from "@/data/experience";
import { educationData } from "@/data/education";
import { ArrowLeft, Printer, Phone, Mail, MapPin, ShieldCheck } from "lucide-react";

export default function ResumePage() {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-[#0B0F14] text-text-primary py-8 sm:py-12">
      {/* Action Header (Excluded from Print) */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 mb-8 flex items-center justify-between no-print">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-text-secondary hover:text-accent transition-colors"
        >
          <ArrowLeft className="w-4 h-4 text-accent" />
          <span>RETURN TO PORTFOLIO</span>
        </Link>

        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-accent text-white font-bold text-xs uppercase tracking-wider hover:bg-accent-soft transition-all shadow-lg shadow-accent/25"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Save PDF (ATS)</span>
        </button>
      </div>

      {/* Main Resume Sheet */}
      <main className="max-w-4xl mx-auto px-6 sm:px-12 py-12 bg-surface rounded-2xl border border-border shadow-2xl space-y-8 font-sans">
        {/* Header */}
        <div className="text-center pb-6 border-b border-border space-y-2">
          <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-text-primary uppercase">
            {siteData.personal.name}
          </h1>
          <p className="text-sm font-mono text-accent font-bold">
            Civil Site Engineer &amp; Surveyor • Nepal Engineering Council (NEC Registered)
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-text-secondary pt-1">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-accent" />
              +977 9867730557
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-accent" />
              den.adh0709@gmail.com
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              Kathmandu, Nepal
            </span>
          </div>
        </div>

        {/* Professional Summary */}
        <section className="space-y-2">
          <h2 className="text-xs font-mono text-accent uppercase font-bold tracking-widest border-b border-border/80 pb-1">
            PROFESSIONAL SUMMARY
          </h2>
          <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
            Civil Engineer with practical experience in wastewater treatment plant construction, reinforced concrete works, surveying, and construction quality control. Skilled in Total Station and Auto Level operations, reinforcement inspection, concrete testing, and site supervision. Capable of managing workforce activities, verifying structural drawings, and maintaining technical compliance on construction sites.
          </p>
        </section>

        {/* Education & Licensing */}
        <section className="space-y-3">
          <h2 className="text-xs font-mono text-accent uppercase font-bold tracking-widest border-b border-border/80 pb-1">
            EDUCATION &amp; LICENSING
          </h2>
          <div className="space-y-3 text-xs">
            <div className="flex justify-between items-start">
              <div>
                <div className="font-bold text-text-primary text-sm">Bachelor in Civil Engineering</div>
                <div className="text-text-secondary">Lumbini Engineering, Management and Science College, Pokhara University</div>
              </div>
              <div className="text-right font-mono text-text-muted">Sep 2018 – Feb 2024</div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <div className="font-bold text-emerald-400 text-sm">Nepal Engineering Council (NEC)</div>
                <div className="text-text-secondary">Registered Civil Engineer (General)</div>
              </div>
              <div className="text-right font-mono text-text-muted">Oct 23, 2024 A.D.</div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <div className="font-bold text-text-primary">+2 / High School (Science)</div>
                <div className="text-text-secondary">Tilottama Secondary School, Rupandehi</div>
              </div>
              <div className="text-right font-mono text-text-muted">Completed 2018</div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <div className="font-bold text-text-primary">School Leaving Certificate (SLC)</div>
                <div className="text-text-secondary">Bethel English Boarding Secondary School</div>
              </div>
              <div className="text-right font-mono text-text-muted">Completed 2016</div>
            </div>
          </div>
        </section>

        {/* Key Project Experience */}
        <section className="space-y-4">
          <h2 className="text-xs font-mono text-accent uppercase font-bold tracking-widest border-b border-border/80 pb-1">
            KEY PROJECT EXPERIENCE
          </h2>

          {experienceData.map((exp, i) => (
            <div key={i} className="space-y-2">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                <div>
                  <span className="font-bold text-text-primary text-sm">{exp.role}</span>
                  <span className="text-text-secondary text-xs block sm:inline sm:ml-2">
                    – {exp.company}, {exp.location}
                  </span>
                </div>
                <span className="font-mono text-xs text-accent font-semibold">{exp.period}</span>
              </div>
              <ul className="space-y-1 text-xs text-text-secondary pl-3">
                {exp.achievements.map((ach, aIdx) => (
                  <li key={aIdx} className="list-disc leading-relaxed">
                    {ach}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        {/* Technical Skills */}
        <section className="space-y-2">
          <h2 className="text-xs font-mono text-accent uppercase font-bold tracking-widest border-b border-border/80 pb-1">
            TECHNICAL SKILLS &amp; FIELD EXPERTISE
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-secondary">
            <div>• Construction Site Supervision – RCC Structures</div>
            <div>• Surveying – Total Station &amp; Auto Level Operations</div>
            <div>• Setting Out &amp; Structural Grid Alignment</div>
            <div>• Reinforcement Inspection &amp; BBS Verification</div>
            <div>• Concrete Testing &amp; Aggregate Sieve Analysis</div>
            <div>• Quantity Estimation &amp; BOQ Preparation</div>
            <div>• AutoCAD 2D Drafting &amp; Detailing</div>
            <div>• Microsoft Office (Advanced Excel, Word)</div>
            <div>• Workforce Management (40–50 Site Laborers)</div>
            <div>• Technical Compliance &amp; Structural Safety</div>
          </div>
        </section>

        {/* Interests */}
        <section className="space-y-1">
          <h2 className="text-xs font-mono text-accent uppercase font-bold tracking-widest border-b border-border/80 pb-1">
            INTERESTS
          </h2>
          <p className="text-xs text-text-secondary">
            Football &amp; Futsal • Cricket • Hiking and Outdoor Activities • Volunteering
          </p>
        </section>
      </main>
    </div>
  );
}
