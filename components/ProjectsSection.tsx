"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { projectsData as staticProjects, ProjectCaseStudy } from "@/data/projects";
import { usePortfolioData } from "@/data/PortfolioContext";
import { CaseStudyModal } from "./CaseStudyModal";
import { MapPin, ArrowRight, Layers, Eye } from "lucide-react";

export const ProjectsSection: React.FC = () => {
  const { data } = usePortfolioData();
  const [selectedCategory, setSelectedCategory] = useState<string>("ALL");
  const [activeProject, setActiveProject] = useState<ProjectCaseStudy | null>(null);

  const activeProjects = data?.projectsData || staticProjects;
  const categories = ["ALL", "INFRASTRUCTURE", "BUILDINGS", "SURVEYING", "ACADEMIC"];

  const filteredProjects =
    selectedCategory === "ALL"
      ? activeProjects
      : activeProjects.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading per design.md */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-xs font-mono uppercase text-accent font-semibold tracking-widest">
              CASE STUDIES // PRACTICAL EVIDENCE
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary mt-2">
              Selected Projects
            </h2>
            <p className="text-sm sm:text-base text-text-secondary mt-2 max-w-xl">
              A selection of academic, professional and field-based engineering work demonstrating hands-on structural and surveying execution.
            </p>
          </div>

          {/* Category Filter Pills (instant client-side filtering) */}
          <div className="flex flex-wrap items-center gap-2 bg-surface p-1.5 rounded-xl border border-border">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono font-semibold rounded-lg transition-all ${
                  selectedCategory === cat
                    ? "bg-accent text-white shadow-md shadow-accent/20"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface-light"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid or Empty State */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 rounded-2xl bg-surface border border-border text-center space-y-4">
            <div className="w-12 h-12 mx-auto rounded-xl bg-surface-light border border-border flex items-center justify-center text-accent">
              <Layers className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-bold text-text-primary">
              No projects found in this category
            </h3>
            <p className="text-xs text-text-secondary max-w-md mx-auto">
              No archived projects are currently listed under &ldquo;{selectedCategory}&rdquo;. Try selecting another engineering category.
            </p>
            <button
              onClick={() => setSelectedCategory("ALL")}
              className="px-4 py-2 rounded-xl bg-accent text-white text-xs font-mono font-semibold hover:bg-accent-soft transition-colors"
            >
              Reset to All Projects
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((proj) => (
              <div
                key={proj.id}
                className="group bg-surface rounded-2xl border border-border hover:border-accent transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-xl"
              >
                {/* Image Preview Container */}
                <div
                  onClick={() => setActiveProject(proj)}
                  className="relative aspect-[16/10] w-full bg-surface-dark overflow-hidden cursor-pointer border-b border-border/80"
                >
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Category & Number Badges */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-[#0B0F14]/90 text-accent border border-border backdrop-blur-md">
                      {proj.category}
                    </span>
                    <span className="font-mono text-xl font-extrabold text-white/90 drop-shadow-md">
                      {proj.number}
                    </span>
                  </div>

                  {/* Hover Reveal Overlay */}
                  <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0B0F14]/90 text-white text-xs font-mono font-bold border border-accent">
                      <Eye className="w-4 h-4 text-accent" />
                      Open Engineering Case Study
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 sm:p-7 space-y-4 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-text-muted">
                      <MapPin className="w-3.5 h-3.5 text-accent" />
                      <span>{proj.location}</span>
                    </div>

                    <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors leading-snug">
                      {proj.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-text-secondary leading-relaxed line-clamp-2">
                      {proj.summary}
                    </p>
                  </div>

                  {/* Tools & Tech Chips */}
                  <div className="pt-2">
                    <div className="flex flex-wrap gap-1.5">
                      {proj.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-[11px] font-mono px-2.5 py-1 rounded bg-surface-light border border-border/60 text-text-muted"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Actions */}
                  <div className="pt-4 border-t border-border/60 flex items-center justify-between">
                    <button
                      onClick={() => setActiveProject(proj)}
                      className="inline-flex items-center gap-2 text-xs font-mono font-bold text-accent group-hover:text-accent-soft transition-colors"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>

                    <Link
                      href={`/projects/${proj.slug}`}
                      className="text-[11px] font-mono text-text-muted hover:text-text-primary underline transition-colors"
                    >
                      Dedicated Page →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Case Study Deep View Modal */}
      <CaseStudyModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
