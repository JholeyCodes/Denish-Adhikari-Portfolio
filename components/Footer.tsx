"use client";

import React from "react";
import Link from "next/link";
import { siteData } from "@/data/siteData";
import { ArrowUp, Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-surface-dark border-t border-border/80 pt-16 pb-12 text-text-secondary relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-border/60">
          {/* Col 1: Identity & Credentials */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-accent font-mono font-bold text-base shadow-inner">
                CE
              </div>
              <div>
                <h3 className="font-bold text-text-primary text-base">
                  Er. Denish Adhikari
                </h3>
                <p className="text-xs text-text-muted font-mono">
                  Civil Site Engineer &amp; Surveyor • Nepal
                </p>
              </div>
            </div>

            <p className="text-xs text-text-secondary leading-relaxed max-w-sm">
              Dedicated to structural compliance, precision surveying, quality control, and safe infrastructure delivery across Nepal.
            </p>

            <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 bg-emerald-950/50 px-3 py-1 rounded-full border border-emerald-800/40">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Nepal Engineering Council (NEC Registered)</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-mono text-text-primary uppercase font-bold tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              {siteData.navLinks.slice(0, 6).map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono text-text-primary uppercase font-bold tracking-wider">
              Direct Contact
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-accent" />
                <a href="tel:+9779867730557" className="hover:text-text-primary transition-colors">
                  +977 9867730557
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-accent" />
                <a href="mailto:den.adh0709@gmail.com" className="hover:text-text-primary transition-colors">
                  den.adh0709@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>Kathmandu, Nepal</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-text-muted">
          <div>
            © 2026 Er. Denish Adhikari. All engineering rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span className="hidden sm:inline">Back to Top</span>
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-lg bg-surface border border-border flex items-center justify-center text-text-primary hover:text-accent hover:border-accent transition-all shadow-md group"
              aria-label="Back to Top"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
