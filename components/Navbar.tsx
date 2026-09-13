"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteData as staticSiteData } from "@/data/siteData";
import { usePortfolioData } from "@/data/PortfolioContext";
import { FileText, Menu, X, ShieldCheck, Compass, Calculator } from "lucide-react";

interface NavbarProps {
  onOpenResume: () => void;
  onOpenEstimator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenResume, onOpenEstimator }) => {
  const { data } = usePortfolioData();
  const personal = data?.siteData?.personal || staticSiteData.personal;
  const navLinks = data?.siteData?.navLinks || staticSiteData.navLinks;

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = ["hero", "about", "expertise", "projects", "experience", "skills", "gallery", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0B0F14]/95 backdrop-blur-md border-b border-border/80 py-3 shadow-xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo & Registration */}
        <Link href="#hero" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-accent font-mono font-bold text-base group-hover:border-accent transition-colors shadow-inner">
            CE
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-text-primary text-base tracking-wide group-hover:text-accent transition-colors">
                {personal.name}
              </span>
              <span className="hidden sm:inline-flex items-center gap-1 text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                <ShieldCheck className="w-3 h-3 text-emerald-400" />
                NEC REG
              </span>
            </div>
            <p className="text-xs text-text-muted font-mono tracking-tight">
              Civil Engineer • Nepal
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace("#", "");
            const isActive = activeSection === sectionId;
            return (
              <a
                key={link.label}
                href={link.href}
                className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider rounded-md transition-all ${
                  isActive
                    ? "text-accent bg-accent/10 border border-accent/20 font-semibold"
                    : "text-text-secondary hover:text-text-primary hover:bg-surface-light/40"
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Actions (CV, Estimator & Contact) */}
        <div className="hidden sm:flex items-center gap-2.5">
          {onOpenEstimator && (
            <button
              onClick={onOpenEstimator}
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-surface-dark border border-accent/40 text-xs font-mono font-semibold text-accent hover:bg-accent hover:text-white transition-all shadow-sm group"
              title="RCC Concrete & Material Estimator"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>RCC Tool</span>
            </button>
          )}

          <button
            onClick={onOpenResume}
            className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-surface border border-border text-xs font-semibold text-text-primary hover:border-accent hover:text-accent transition-all group"
            id="nav-cv-btn"
          >
            <FileText className="w-3.5 h-3.5 text-accent group-hover:scale-110 transition-transform" />
            <span>CV</span>
          </button>
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-accent text-white text-xs font-semibold hover:bg-accent-soft transition-colors shadow-lg shadow-accent/20"
          >
            Hire / Connect
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-lg bg-surface border border-border text-text-secondary hover:text-text-primary"
          aria-label="Toggle Navigation"
        >
          {mobileMenuOpen ? <X className="w-5 h-5 text-accent" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0B0F14]/98 border-b border-border px-4 pt-3 pb-6 space-y-2 mt-3 shadow-2xl animate-in slide-in-from-top duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-border/60">
            <span className="text-xs font-mono text-text-muted">MENU NAVIGATION</span>
            <span className="inline-flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/40">
              <ShieldCheck className="w-3 h-3" />
              NEC Licensed
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-xs font-medium text-text-secondary hover:text-accent hover:bg-surface rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="pt-4 flex flex-col gap-2 border-t border-border/60">
            {onOpenEstimator && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenEstimator();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-surface-dark border border-accent/40 text-xs font-mono font-semibold text-accent hover:bg-surface"
              >
                <Calculator className="w-4 h-4" />
                RCC Concrete Mix Estimator
              </button>
            )}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-surface border border-border text-xs font-semibold text-text-primary hover:border-accent"
            >
              <FileText className="w-4 h-4 text-accent" />
              View &amp; Download CV (PDF)
            </button>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-lg bg-accent text-white text-xs font-semibold hover:bg-accent-soft"
            >
              Get In Touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
