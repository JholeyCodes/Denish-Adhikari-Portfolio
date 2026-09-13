"use client";

import React from "react";
import { siteData as staticSiteData } from "@/data/siteData";
import { experienceData as staticExperience } from "@/data/experience";
import { educationData } from "@/data/education";
import { skillsData as staticSkills } from "@/data/skills";
import { usePortfolioData } from "@/data/PortfolioContext";
import { X, Printer, Download, Mail, Phone, MapPin, Award, CheckCircle2 } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { data } = usePortfolioData();
  const personal = data?.siteData?.personal || staticSiteData.personal;
  const activeExperience = data?.experienceData || staticExperience;
  const activeSkills = data?.skillsData || staticSkills;

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in">
      <div className="relative w-full max-w-4xl bg-surface border border-border rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[95vh] flex flex-col">
        {/* Modal Action Header (Excluded from Print) */}
        <div className="p-4 sm:p-5 bg-surface-dark border-b border-border flex items-center justify-between no-print">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-accent uppercase font-bold">
              CURRICULUM VITAE // ATS FORMAT
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40">
              Verified 2026
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-accent text-white text-xs font-semibold hover:bg-accent-soft transition-colors shadow-md shadow-accent/20"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / Save PDF</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg bg-surface border border-border text-text-secondary hover:text-text-primary hover:border-accent transition-colors"
              aria-label="Close Resume"
            >
              <X className="w-5 h-5 text-accent" />
            </button>
          </div>
        </div>

        {/* Printable ATS Resume Paper Content */}
        <div className="p-8 sm:p-12 overflow-y-auto bg-[#0B0F14] text-text-primary space-y-8 font-sans">
          {/* Header */}
          <div className="text-center pb-6 border-b border-border space-y-2">
            <h1 className="text-3xl sm:text-4xl font-black tracking-tight text-text-primary uppercase">
              {personal.name}
            </h1>
            <p className="text-sm font-mono text-accent font-semibold">
              {personal.role} • {personal.license}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-text-secondary pt-1">
              <span className="flex items-center gap-1">
                <Phone className="w-3.5 h-3.5 text-accent" />
                {personal.phone}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Mail className="w-3.5 h-3.5 text-accent" />
                {personal.email}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                {personal.location}
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono text-accent uppercase font-bold tracking-widest border-b border-border/80 pb-1">
              PROFESSIONAL SUMMARY
            </h2>
            <p className="text-xs sm:text-sm text-text-secondary leading-relaxed">
              {personal.fullBio || personal.shortBio}
            </p>
          </div>

          {/* Education & Licensing */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono text-accent uppercase font-bold tracking-widest border-b border-border/80 pb-1">
              EDUCATION &amp; LICENSING
            </h2>
            <div className="space-y-3 text-xs">
              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-text-primary">Bachelor in Civil Engineering</div>
                  <div className="text-text-secondary">Lumbini Engineering, Management and Science College, Pokhara University</div>
                </div>
                <div className="text-right font-mono text-text-muted">Sep 2018 – Feb 2024</div>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <div className="font-bold text-emerald-400">Nepal Engineering Council (NEC)</div>
                  <div className="text-text-secondary">Official Registered Civil Engineer License</div>
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
          </div>

          {/* Key Project Experience */}
          <div className="space-y-4">
            <h2 className="text-xs font-mono text-accent uppercase font-bold tracking-widest border-b border-border/80 pb-1">
              KEY PROJECT EXPERIENCE
            </h2>

            {activeExperience.map((exp, i) => (
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
          </div>

          {/* Technical Skills */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono text-accent uppercase font-bold tracking-widest border-b border-border/80 pb-1">
              TECHNICAL SKILLS &amp; COMPETENCIES
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-text-secondary">
              <div>• Construction Site Supervision – RCC Structures</div>
              <div>• Surveying – Total Station and Auto Level</div>
              <div>• Setting Out and Structural Alignment</div>
              <div>• Reinforcement Inspection &amp; BBS Verification</div>
              <div>• Concrete Testing &amp; Aggregate Sieve Analysis</div>
              <div>• Quantity Estimation &amp; BOQ Preparation</div>
              <div>• AutoCAD 2D Drafting &amp; Detailing</div>
              <div>• Microsoft Office (Advanced Excel, Word)</div>
              <div>• Leadership &amp; Workforce Coordination (40–50)</div>
              <div>• Technical Problem Solving &amp; Safety Compliance</div>
            </div>
          </div>

          {/* Interests */}
          <div className="space-y-1">
            <h2 className="text-xs font-mono text-accent uppercase font-bold tracking-widest border-b border-border/80 pb-1">
              INTERESTS
            </h2>
            <p className="text-xs text-text-secondary">
              Football &amp; Futsal • Cricket • Hiking and Outdoor Activities • Engineering Volunteering
            </p>
          </div>
        </div>

        {/* Modal Bottom Close (Excluded from Print) */}
        <div className="p-4 bg-surface border-t border-border flex justify-end no-print">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-surface-light hover:bg-border text-text-primary text-xs font-mono transition-colors"
          >
            Close Resume
          </button>
        </div>
      </div>
    </div>
  );
};
