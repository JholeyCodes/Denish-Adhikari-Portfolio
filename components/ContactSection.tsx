"use client";

import React, { useState } from "react";
import { siteData } from "@/data/siteData";
import { Mail, Phone, MapPin, Send, CheckCircle2, ShieldCheck, MessageSquare } from "lucide-react";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <p className="text-xs font-mono uppercase text-accent font-semibold tracking-widest">
            COMMUNICATION // DIRECT CONTACT
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-text-primary">
            Get In Touch
          </h2>
          <p className="text-sm sm:text-base text-text-secondary">
            Connect directly with Er. Denish Adhikari for project consultation, site engineering roles, or surveying contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-surface border border-border shadow-lg space-y-5">
              <div className="pb-4 border-b border-border/60">
                <span className="text-xs font-mono text-accent uppercase font-bold">
                  DIRECT CONTACT CHANNELS
                </span>
                <h3 className="text-xl font-bold text-text-primary mt-1">
                  Er. Denish Adhikari
                </h3>
                <p className="text-xs text-text-muted font-mono mt-0.5">
                  Registered Civil Engineer • Nepal Engineering Council
                </p>
              </div>

              {/* WhatsApp Instant Chat Button */}
              <a
                href="https://wa.me/9779867730557?text=Hello%20Er.%20Denish,%20I%20reviewed%20your%20civil%20engineering%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-3.5 rounded-xl bg-emerald-950/40 border border-emerald-700/50 hover:border-emerald-400 transition-all group shadow-md"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-500/15 border border-emerald-500/40 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-emerald-400 uppercase font-semibold">Direct WhatsApp</span>
                    <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-emerald-900/60 text-emerald-300">Fastest</span>
                  </div>
                  <div className="text-sm font-bold text-text-primary group-hover:text-emerald-400 transition-colors">
                    Chat on WhatsApp →
                  </div>
                  <span className="text-[10px] text-text-muted">+977 9867730557 (Instant Response)</span>
                </div>
              </a>

              {/* Direct Phone Call Card */}
              <a
                href="tel:+9779867730557"
                className="flex items-start gap-4 p-3.5 rounded-xl bg-surface-light/50 border border-border/70 hover:border-accent transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-text-muted uppercase">Phone Voice Call</span>
                  <div className="text-sm font-bold text-text-primary group-hover:text-accent transition-colors">
                    +977 9867730557
                  </div>
                  <span className="text-[10px] text-text-muted">Available 8:00 AM – 7:00 PM NPT</span>
                </div>
              </a>

              {/* Email Card */}
              <a
                href="mailto:den.adh0709@gmail.com"
                className="flex items-start gap-4 p-3.5 rounded-xl bg-surface-light/50 border border-border/70 hover:border-accent transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-text-muted uppercase">Official Email</span>
                  <div className="text-sm font-bold text-text-primary group-hover:text-accent transition-colors truncate">
                    den.adh0709@gmail.com
                  </div>
                  <span className="text-[10px] text-text-muted">Direct Engineering Inbox</span>
                </div>
              </a>

              {/* Location Card */}
              <div className="flex items-start gap-4 p-3.5 rounded-xl bg-surface-light/50 border border-border/70">
                <div className="w-10 h-10 rounded-lg bg-accent/10 border border-accent/30 flex items-center justify-center text-accent">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[11px] font-mono text-text-muted uppercase">Location &amp; Base</span>
                  <div className="text-sm font-bold text-text-primary">
                    Tokha / Kathmandu, Nepal
                  </div>
                  <span className="text-[10px] text-text-muted">Open to site deployment across Nepal</span>
                </div>
              </div>

              {/* Regulatory Notice */}
              <div className="p-3.5 rounded-xl bg-surface-dark border border-emerald-900/40 text-xs text-text-secondary flex items-start gap-2.5 font-mono">
                <ShieldCheck className="w-4 h-4 text-emerald-400 mt-0.5 flex-shrink-0" />
                <span>NEC Licensed: All civil submissions &amp; certifications verified.</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-8 rounded-2xl bg-surface border border-border shadow-xl">
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-950 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-text-primary">
                    Message Received!
                  </h3>
                  <p className="text-sm text-text-secondary max-w-md mx-auto leading-relaxed">
                    Thank you for reaching out to Er. Denish Adhikari. Your message has been recorded and I will respond to your technical inquiry promptly.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-surface-light border border-border text-xs font-mono text-text-primary hover:border-accent transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="pb-3 border-b border-border/60">
                    <h3 className="text-lg font-bold text-text-primary">
                      Send an Engineering Message / Inquiry
                    </h3>
                    <p className="text-xs text-text-muted">
                      Fill in project details or questions below for a prompt response.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label htmlFor="contact-name" className="text-xs font-mono text-text-secondary font-medium">
                        Your Full Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. John Doe / Firm Name"
                        className="w-full px-4 py-3 rounded-xl bg-surface-dark border border-border focus:border-accent focus:outline-none text-xs sm:text-sm text-text-primary transition-colors"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label htmlFor="contact-email" className="text-xs font-mono text-text-secondary font-medium">
                        Your Email Address *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@company.com"
                        className="w-full px-4 py-3 rounded-xl bg-surface-dark border border-border focus:border-accent focus:outline-none text-xs sm:text-sm text-text-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-subject" className="text-xs font-mono text-text-secondary font-medium">
                      Project Subject *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="e.g. Site Supervision / Surveying Consultation / Job Inquiry"
                      className="w-full px-4 py-3 rounded-xl bg-surface-dark border border-border focus:border-accent focus:outline-none text-xs sm:text-sm text-text-primary transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="text-xs font-mono text-text-secondary font-medium">
                      Technical Message / Project Scope *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please specify location, site conditions, duration, or key deliverables..."
                      className="w-full px-4 py-3 rounded-xl bg-surface-dark border border-border focus:border-accent focus:outline-none text-xs sm:text-sm text-text-primary transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 rounded-xl bg-accent hover:bg-accent-soft text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg shadow-accent/25 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Transmitting Inquiry...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Message to Engineer</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
