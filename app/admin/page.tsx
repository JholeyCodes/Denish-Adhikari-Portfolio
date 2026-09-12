"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Lock,
  Eye,
  EyeOff,
  Save,
  Download,
  LogOut,
  ExternalLink,
  Plus,
  Trash2,
  Edit3,
  CheckCircle2,
  AlertCircle,
  FolderGit2,
  HardHat,
  Compass,
  FileText,
  Layers,
  Image as ImageIcon,
  UserCheck,
  RefreshCw,
} from "lucide-react";

import { ProfileData, profileData as defaultProfile } from "@/data/profile";
import { ProjectCaseStudy, projectsData as defaultProjects } from "@/data/projects";
import { ExperienceItem, experienceData as defaultExperience } from "@/data/experience";
import { SkillCategory, skillsData as defaultSkills } from "@/data/skills";
import { GalleryItem, galleryData as defaultGallery } from "@/data/gallery";

type TabKey = "profile" | "projects" | "experience" | "gallery" | "skills";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const [activeTab, setActiveTab] = useState<TabKey>("profile");
  const [saveLoading, setSaveLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState<{ text: string; type: "success" | "error" } | null>(null);
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  // Editable states
  const [profile, setProfile] = useState<ProfileData>(defaultProfile);
  const [projects, setProjects] = useState<ProjectCaseStudy[]>(defaultProjects);
  const [experience, setExperience] = useState<ExperienceItem[]>(defaultExperience);
  const [gallery, setGallery] = useState<GalleryItem[]>(defaultGallery);
  const [skills, setSkills] = useState<SkillCategory[]>(defaultSkills);

  // Editing modals
  const [editingProject, setEditingProject] = useState<ProjectCaseStudy | null>(null);
  const [isNewProject, setIsNewProject] = useState(false);

  // Check existing session on load
  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/admin/auth", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ action: "check" }),
        });
        const data = await res.json();
        if (data.authenticated) {
          setIsAuthenticated(true);
          loadRemoteContent();
        } else {
          setIsAuthenticated(false);
        }
      } catch (err) {
        setIsAuthenticated(false);
      }
    }
    checkAuth();
  }, []);

  async function loadRemoteContent() {
    try {
      const res = await fetch("/api/admin/content");
      if (res.ok) {
        const data = await res.json();
        if (data.profile) setProfile(data.profile);
        if (data.projects) setProjects(data.projects);
        if (data.experience) setExperience(data.experience);
        if (data.gallery) setGallery(data.gallery);
        if (data.skills) setSkills(data.skills);
      }
    } catch (e) {
      console.error("Failed to load existing content:", e);
    }
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "login", password }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsAuthenticated(true);
        loadRemoteContent();
      } else {
        setLoginError(data.error || "Authentication failed");
      }
    } catch (err) {
      setLoginError("Failed to reach authentication server");
    } finally {
      setLoginLoading(false);
    }
  }

  async function handleLogout() {
    try {
      await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ action: "logout" }),
      });
      setIsAuthenticated(false);
      setPassword("");
    } catch (e) {
      setIsAuthenticated(false);
    }
  }

  async function handleSaveContent() {
    setSaveLoading(true);
    setStatusMessage(null);

    try {
      const res = await fetch("/api/admin/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          profile,
          projects,
          experience,
          skills,
          gallery,
        }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setStatusMessage({ text: data.message || "Changes saved successfully!", type: "success" });
        setHasUnsavedChanges(false);
      } else {
        setStatusMessage({ text: data.error || "Failed to save changes", type: "error" });
      }
    } catch (err) {
      setStatusMessage({ text: "Error saving data. Please check network connection.", type: "error" });
    } finally {
      setSaveLoading(false);
      setTimeout(() => {
        setStatusMessage(null);
      }, 6000);
    }
  }

  function handleExportBackup() {
    const backupData = {
      profile,
      projects,
      experience,
      skills,
      gallery,
      exportedAt: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(backupData, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `denish_portfolio_backup_${new Date().toISOString().slice(0, 10)}.json`;
    link.click();
    URL.revokeObjectURL(url);
  }

  // Auth Loading State
  if (isAuthenticated === null) {
    return (
      <div className="min-h-screen bg-[#0B0F14] flex items-center justify-center">
        <div className="flex items-center gap-3 font-mono text-accent text-sm">
          <RefreshCw className="w-5 h-5 animate-spin" />
          <span>Verifying Civil Engineering Credentials...</span>
        </div>
      </div>
    );
  }

  // Unauthenticated Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0B0F14] flex items-center justify-center p-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:32px_32px] opacity-30 pointer-events-none" />
        <div className="max-w-md w-full relative z-10">
          <div className="bg-surface rounded-2xl border border-border p-8 shadow-2xl space-y-6">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-surface-light border border-border mx-auto flex items-center justify-center text-accent shadow-inner">
                <Lock className="w-6 h-6 text-accent" />
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/40 text-[11px] font-mono font-semibold text-emerald-400 mt-2">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>NEC NO. 79422 // AUTHORIZED PORTAL</span>
              </div>
              <h1 className="text-2xl font-bold text-text-primary">Engineer Administration</h1>
              <p className="text-xs text-text-muted font-mono">
                Er. Denish Adhikari • Content &amp; Case Study Management
              </p>
            </div>

            {loginError && (
              <div className="p-3.5 rounded-xl bg-red-950/50 border border-red-800/60 flex items-start gap-2.5 text-xs text-red-300">
                <AlertCircle className="w-4 h-4 text-red-400 mt-0.5 shrink-0" />
                <span>{loginError}</span>
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="block text-xs font-mono font-semibold uppercase text-text-secondary mb-1.5">
                  Master Admin Passcode
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter admin password..."
                    className="w-full px-4 py-3 rounded-xl bg-surface-dark border border-border text-sm text-text-primary focus:outline-none focus:border-accent font-mono transition-colors"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-3.5 text-text-muted hover:text-text-primary transition-colors"
                    aria-label="Toggle password visibility"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <button
                type="submit"
                disabled={loginLoading}
                className="w-full py-3.5 rounded-xl bg-accent hover:bg-accent-soft text-white text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-accent/25 flex items-center justify-center gap-2"
              >
                {loginLoading ? (
                  <>
                    <RefreshCw className="w-4 h-4 animate-spin" />
                    <span>Verifying...</span>
                  </>
                ) : (
                  <>
                    <UserCheck className="w-4 h-4" />
                    <span>Authenticate Console</span>
                  </>
                )}
              </button>
            </form>

            <div className="pt-2 text-center">
              <Link
                href="/"
                className="text-xs font-mono text-text-muted hover:text-accent transition-colors"
              >
                ← Return to Public Portfolio
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Authenticated Admin Dashboard
  return (
    <div className="min-h-screen bg-[#0B0F14] text-text-primary">
      {/* Top Header */}
      <header className="sticky top-0 z-40 bg-[#0B0F14]/90 backdrop-blur-md border-b border-border/80 px-4 sm:px-8 py-3.5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-surface border border-border flex items-center justify-center text-accent font-mono font-bold text-sm">
              CE
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-bold text-text-primary text-sm">Er. Denish Adhikari</span>
                <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-emerald-950/60 text-emerald-400 border border-emerald-800/40">
                  ADMIN CONSOLE
                </span>
              </div>
              <p className="text-[11px] text-text-muted font-mono">NEC Reg. No. 79422 "Civil"</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <Link
              href="/"
              target="_blank"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border hover:border-accent text-xs font-semibold text-text-secondary hover:text-text-primary transition-all"
            >
              <ExternalLink className="w-3.5 h-3.5 text-accent" />
              <span>View Live Site</span>
            </Link>

            <button
              onClick={handleExportBackup}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface border border-border hover:border-accent text-xs font-semibold text-text-secondary hover:text-text-primary transition-all"
              title="Download full JSON backup of portfolio"
            >
              <Download className="w-3.5 h-3.5 text-accent" />
              <span className="hidden md:inline">Export JSON</span>
            </button>

            <button
              onClick={handleSaveContent}
              disabled={saveLoading}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md shadow-emerald-600/20"
            >
              {saveLoading ? (
                <>
                  <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                  <span>Saving...</span>
                </>
              ) : (
                <>
                  <Save className="w-3.5 h-3.5" />
                  <span>Save &amp; Publish</span>
                </>
              )}
            </button>

            <button
              onClick={handleLogout}
              className="p-2 rounded-lg bg-surface border border-border hover:border-red-500 text-text-muted hover:text-red-400 transition-colors"
              title="Log out"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Status Alert */}
      {statusMessage && (
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-8 mt-4 ${
            statusMessage.type === "success" ? "text-emerald-300" : "text-red-300"
          }`}
        >
          <div
            className={`p-3.5 rounded-xl border flex items-center justify-between text-xs ${
              statusMessage.type === "success"
                ? "bg-emerald-950/60 border-emerald-800/60"
                : "bg-red-950/60 border-red-800/60"
            }`}
          >
            <div className="flex items-center gap-2">
              {statusMessage.type === "success" ? (
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
              ) : (
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              )}
              <span>{statusMessage.text}</span>
            </div>
            <button
              onClick={() => setStatusMessage(null)}
              className="text-text-muted hover:text-text-primary text-xs"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-8 py-8 space-y-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center gap-2 border-b border-border/70 pb-3">
          <button
            onClick={() => setActiveTab("profile")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              activeTab === "profile"
                ? "bg-accent text-white shadow-md shadow-accent/20"
                : "bg-surface border border-border text-text-secondary hover:text-text-primary"
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>PROFILE &amp; CONTACT</span>
          </button>

          <button
            onClick={() => setActiveTab("projects")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              activeTab === "projects"
                ? "bg-accent text-white shadow-md shadow-accent/20"
                : "bg-surface border border-border text-text-secondary hover:text-text-primary"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>PROJECTS ({projects.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("experience")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              activeTab === "experience"
                ? "bg-accent text-white shadow-md shadow-accent/20"
                : "bg-surface border border-border text-text-secondary hover:text-text-primary"
            }`}
          >
            <HardHat className="w-3.5 h-3.5" />
            <span>EXPERIENCE ({experience.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("gallery")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              activeTab === "gallery"
                ? "bg-accent text-white shadow-md shadow-accent/20"
                : "bg-surface border border-border text-text-secondary hover:text-text-primary"
            }`}
          >
            <ImageIcon className="w-3.5 h-3.5" />
            <span>GALLERY RECORDS ({gallery.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("skills")}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold transition-all ${
              activeTab === "skills"
                ? "bg-accent text-white shadow-md shadow-accent/20"
                : "bg-surface border border-border text-text-secondary hover:text-text-primary"
            }`}
          >
            <Compass className="w-3.5 h-3.5" />
            <span>SKILLS &amp; CODES</span>
          </button>
        </div>

        {/* TAB 1: Profile & Contact */}
        {activeTab === "profile" && (
          <div className="bg-surface rounded-2xl border border-border p-6 sm:p-8 space-y-6">
            <div className="border-b border-border/70 pb-4">
              <h2 className="text-lg font-bold text-text-primary">Profile &amp; Credentials</h2>
              <p className="text-xs text-text-secondary">
                Update public contact channels, license numbers, and introduction summaries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase text-text-secondary mb-1">
                  Full Engineer Name
                </label>
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) => {
                    setProfile({ ...profile, name: e.target.value });
                    setHasUnsavedChanges(true);
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-dark border border-border text-sm text-text-primary focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-text-secondary mb-1">
                  Professional Title
                </label>
                <input
                  type="text"
                  value={profile.title}
                  onChange={(e) => {
                    setProfile({ ...profile, title: e.target.value });
                    setHasUnsavedChanges(true);
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-dark border border-border text-sm text-text-primary focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-text-secondary mb-1">
                  Official Phone / Direct Call
                </label>
                <input
                  type="text"
                  value={profile.phone}
                  onChange={(e) => {
                    setProfile({ ...profile, phone: e.target.value });
                    setHasUnsavedChanges(true);
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-dark border border-border text-sm text-text-primary focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-text-secondary mb-1">
                  WhatsApp Direct URL
                </label>
                <input
                  type="text"
                  value={profile.whatsapp}
                  onChange={(e) => {
                    setProfile({ ...profile, whatsapp: e.target.value });
                    setHasUnsavedChanges(true);
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-dark border border-border text-sm text-text-primary focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-text-secondary mb-1">
                  Official Email Address
                </label>
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => {
                    setProfile({ ...profile, email: e.target.value });
                    setHasUnsavedChanges(true);
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-dark border border-border text-sm text-text-primary focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-text-secondary mb-1">
                  Current Base Location
                </label>
                <input
                  type="text"
                  value={profile.location}
                  onChange={(e) => {
                    setProfile({ ...profile, location: e.target.value });
                    setHasUnsavedChanges(true);
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-dark border border-border text-sm text-text-primary focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-text-secondary mb-1">
                  Nepal Engineering Council (NEC) Registration
                </label>
                <input
                  type="text"
                  value={profile.necRegistration}
                  onChange={(e) => {
                    setProfile({ ...profile, necRegistration: e.target.value });
                    setHasUnsavedChanges(true);
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-dark border border-border text-sm text-text-primary focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-text-secondary mb-1">
                  Workforce Supervision Stat
                </label>
                <input
                  type="text"
                  value={profile.workforceCount}
                  onChange={(e) => {
                    setProfile({ ...profile, workforceCount: e.target.value });
                    setHasUnsavedChanges(true);
                  }}
                  className="w-full px-4 py-2.5 rounded-xl bg-surface-dark border border-border text-sm text-text-primary focus:border-accent focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-text-secondary mb-1">
                Bio Summary Text
              </label>
              <textarea
                rows={4}
                value={profile.bioSummary}
                onChange={(e) => {
                  setProfile({ ...profile, bioSummary: e.target.value });
                  setHasUnsavedChanges(true);
                }}
                className="w-full px-4 py-3 rounded-xl bg-surface-dark border border-border text-sm text-text-primary focus:border-accent focus:outline-none leading-relaxed"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase text-text-secondary mb-1">
                Engineering Philosophy Quote
              </label>
              <input
                type="text"
                value={profile.bioQuote}
                onChange={(e) => {
                  setProfile({ ...profile, bioQuote: e.target.value });
                  setHasUnsavedChanges(true);
                }}
                className="w-full px-4 py-2.5 rounded-xl bg-surface-dark border border-border text-sm text-text-primary focus:border-accent focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* TAB 2: Projects Management */}
        {activeTab === "projects" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface p-6 rounded-2xl border border-border">
              <div>
                <h2 className="text-lg font-bold text-text-primary">Project Case Studies</h2>
                <p className="text-xs text-text-secondary">
                  Manage engineering projects, academic capstone, and technical scopes.
                </p>
              </div>
              <button
                onClick={() => {
                  const newProj: ProjectCaseStudy = {
                    id: `proj-${Date.now()}`,
                    slug: `new-project-${Date.now()}`,
                    number: `0${projects.length + 1}`,
                    title: "New Civil Engineering Project",
                    subtitle: "RCC Execution & Quality Control",
                    category: "INFRASTRUCTURE",
                    location: "Kathmandu, Nepal",
                    firm: "Sarathi Construction",
                    duration: "2024",
                    role: "Civil Site Engineer",
                    tools: ["Total Station", "AutoCAD", "Auto Level"],
                    image: "/images/site/site-24.jpg",
                    summary: "Project overview and structural description.",
                    facts: [
                      { label: "Execution Standard", value: "NBC 105:2020" },
                      { label: "Material Grade", value: "M25 RCC / Fe500" },
                    ],
                    overview: "Detailed engineering overview of the site operations.",
                    myRole: "Direct field supervision and instrumental setting out.",
                    responsibilities: [
                      "Conducted layout alignment and level checks.",
                      "Supervised concrete placement and vibration.",
                    ],
                    technicalApproach: [
                      "Grid transfer from permanent benchmark.",
                    ],
                    challenges: [
                      "Water table fluctuations during deep excavation.",
                    ],
                    solutions: [
                      "Installed dewatering submersible pump network.",
                    ],
                    outcomes: [
                      "Achieved 100% structural tolerance compliance.",
                    ],
                    drawings: [],
                    sitePhotos: [],
                  };
                  setEditingProject(newProj);
                  setIsNewProject(true);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent hover:bg-accent-soft text-white text-xs font-semibold shadow-lg shadow-accent/20 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add New Project</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {projects.map((proj, idx) => (
                <div
                  key={proj.id}
                  className="bg-surface rounded-2xl border border-border p-5 flex flex-col justify-between space-y-4 hover:border-accent/40 transition-colors"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-accent px-2 py-0.5 rounded bg-accent/10 border border-accent/20">
                        {proj.category}
                      </span>
                      <span className="font-mono text-xs text-text-muted">#{proj.number}</span>
                    </div>

                    <h3 className="font-bold text-text-primary text-base leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-xs text-text-muted">{proj.subtitle}</p>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {proj.tools.map((t, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-surface-dark text-[11px] font-mono text-text-secondary border border-border/60"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-border/70 flex items-center justify-between">
                    <span className="text-xs font-mono text-text-muted">{proj.location}</span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setEditingProject({ ...proj });
                          setIsNewProject(false);
                        }}
                        className="p-2 rounded-lg bg-surface-dark hover:bg-accent/10 border border-border hover:border-accent text-text-secondary hover:text-accent transition-colors"
                        title="Edit Project"
                      >
                        <Edit3 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => {
                          if (confirm(`Are you sure you want to delete "${proj.title}"?`)) {
                            setProjects(projects.filter((p) => p.id !== proj.id));
                            setHasUnsavedChanges(true);
                          }
                        }}
                        className="p-2 rounded-lg bg-surface-dark hover:bg-red-950/40 border border-border hover:border-red-500 text-text-muted hover:text-red-400 transition-colors"
                        title="Delete Project"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: Experience Management */}
        {activeTab === "experience" && (
          <div className="bg-surface rounded-2xl border border-border p-6 sm:p-8 space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border/70 pb-4">
              <div>
                <h2 className="text-lg font-bold text-text-primary">Professional Work Experience</h2>
                <p className="text-xs text-text-secondary">
                  Manage engineering appointments, key accomplishments, and supervised operations.
                </p>
              </div>
              <button
                onClick={() => {
                  const newExp: ExperienceItem = {
                    period: "2025 — PRESENT",
                    role: "Senior Civil Site Engineer",
                    company: "Engineering Organization",
                    location: "Kathmandu, Nepal",
                    description: "Site engineering supervision and structural execution.",
                    achievements: ["Supervised RCC casting and structural compliance."],
                    skills: ["Total Station", "RCC Supervision"],
                  };
                  setExperience([...experience, newExp]);
                  setHasUnsavedChanges(true);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent hover:bg-accent-soft text-white text-xs font-semibold shadow-lg shadow-accent/20 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add Position</span>
              </button>
            </div>

            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="bg-surface-dark p-6 rounded-xl border border-border space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[11px] font-mono uppercase text-text-muted mb-1">
                        Role Title
                      </label>
                      <input
                        type="text"
                        value={exp.role}
                        onChange={(e) => {
                          const updated = [...experience];
                          updated[idx].role = e.target.value;
                          setExperience(updated);
                          setHasUnsavedChanges(true);
                        }}
                        className="w-full px-3.5 py-2 rounded-lg bg-surface border border-border text-sm text-text-primary focus:border-accent focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-text-muted mb-1">
                        Company / Contractor
                      </label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => {
                          const updated = [...experience];
                          updated[idx].company = e.target.value;
                          setExperience(updated);
                          setHasUnsavedChanges(true);
                        }}
                        className="w-full px-3.5 py-2 rounded-lg bg-surface border border-border text-sm text-text-primary focus:border-accent focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-text-muted mb-1">
                        Period / Duration
                      </label>
                      <input
                        type="text"
                        value={exp.period}
                        onChange={(e) => {
                          const updated = [...experience];
                          updated[idx].period = e.target.value;
                          setExperience(updated);
                          setHasUnsavedChanges(true);
                        }}
                        className="w-full px-3.5 py-2 rounded-lg bg-surface border border-border text-sm text-text-primary focus:border-accent focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-mono uppercase text-text-muted mb-1">
                        Site Location
                      </label>
                      <input
                        type="text"
                        value={exp.location}
                        onChange={(e) => {
                          const updated = [...experience];
                          updated[idx].location = e.target.value;
                          setExperience(updated);
                          setHasUnsavedChanges(true);
                        }}
                        className="w-full px-3.5 py-2 rounded-lg bg-surface border border-border text-sm text-text-primary focus:border-accent focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase text-text-muted mb-1">
                      Role Overview Description
                    </label>
                    <textarea
                      rows={2}
                      value={exp.description}
                      onChange={(e) => {
                        const updated = [...experience];
                        updated[idx].description = e.target.value;
                        setExperience(updated);
                        setHasUnsavedChanges(true);
                      }}
                      className="w-full px-3.5 py-2 rounded-lg bg-surface border border-border text-sm text-text-primary focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-[11px] font-mono uppercase text-text-muted">
                        Key Responsibilities &amp; Achievements ({exp.achievements.length})
                      </label>
                      <button
                        onClick={() => {
                          const updated = [...experience];
                          updated[idx].achievements.push("New verified field responsibility.");
                          setExperience(updated);
                          setHasUnsavedChanges(true);
                        }}
                        className="text-xs font-mono text-accent hover:underline flex items-center gap-1"
                      >
                        <Plus className="w-3 h-3" /> Add Item
                      </button>
                    </div>

                    <div className="space-y-2">
                      {exp.achievements.map((ach, achIdx) => (
                        <div key={achIdx} className="flex items-center gap-2">
                          <input
                            type="text"
                            value={ach}
                            onChange={(e) => {
                              const updated = [...experience];
                              updated[idx].achievements[achIdx] = e.target.value;
                              setExperience(updated);
                              setHasUnsavedChanges(true);
                            }}
                            className="flex-1 px-3 py-1.5 rounded-lg bg-surface border border-border text-xs text-text-secondary focus:border-accent focus:outline-none"
                          />
                          <button
                            onClick={() => {
                              const updated = [...experience];
                              updated[idx].achievements.splice(achIdx, 1);
                              setExperience(updated);
                              setHasUnsavedChanges(true);
                            }}
                            className="p-1.5 text-text-muted hover:text-red-400"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 flex justify-end">
                    <button
                      onClick={() => {
                        if (confirm(`Delete position "${exp.role}"?`)) {
                          setExperience(experience.filter((_, i) => i !== idx));
                          setHasUnsavedChanges(true);
                        }
                      }}
                      className="text-xs font-mono text-red-400 hover:text-red-300 flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" /> Remove Position
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 4: Gallery Records */}
        {activeTab === "gallery" && (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface p-6 rounded-2xl border border-border">
              <div>
                <h2 className="text-lg font-bold text-text-primary">Construction &amp; Survey Records</h2>
                <p className="text-xs text-text-secondary">
                  Photographic field documentation and structural inspection logs.
                </p>
              </div>
              <button
                onClick={() => {
                  const newPhoto: GalleryItem = {
                    id: `g-${Date.now()}`,
                    title: "New Site Inspection Record",
                    category: "CONSTRUCTION",
                    location: "Kathmandu Valley, Nepal",
                    date: "Ongoing Phase",
                    caption: "Photographic inspection of reinforcement and concrete placement.",
                    image: "/images/site/site-12.jpg",
                    tags: ["Site Supervision", "Quality Control"],
                  };
                  setGallery([newPhoto, ...gallery]);
                  setHasUnsavedChanges(true);
                }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-accent hover:bg-accent-soft text-white text-xs font-semibold shadow-lg shadow-accent/20 transition-all"
              >
                <Plus className="w-4 h-4" />
                <span>Add Photo Record</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {gallery.map((item, idx) => (
                <div
                  key={item.id}
                  className="bg-surface rounded-2xl border border-border overflow-hidden p-4 space-y-3"
                >
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-surface-dark border border-border">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-[#0B0F14]/90 border border-border text-[10px] font-mono text-accent">
                      {item.category}
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase text-text-muted mb-0.5">
                      Record Title
                    </label>
                    <input
                      type="text"
                      value={item.title}
                      onChange={(e) => {
                        const updated = [...gallery];
                        updated[idx].title = e.target.value;
                        setGallery(updated);
                        setHasUnsavedChanges(true);
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-surface-dark border border-border text-xs text-text-primary focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase text-text-muted mb-0.5">
                      Image Path
                    </label>
                    <input
                      type="text"
                      value={item.image}
                      onChange={(e) => {
                        const updated = [...gallery];
                        updated[idx].image = e.target.value;
                        setGallery(updated);
                        setHasUnsavedChanges(true);
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-surface-dark border border-border text-xs text-text-secondary focus:border-accent focus:outline-none font-mono"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase text-text-muted mb-0.5">
                      Caption Description
                    </label>
                    <textarea
                      rows={2}
                      value={item.caption}
                      onChange={(e) => {
                        const updated = [...gallery];
                        updated[idx].caption = e.target.value;
                        setGallery(updated);
                        setHasUnsavedChanges(true);
                      }}
                      className="w-full px-3 py-1.5 rounded-lg bg-surface-dark border border-border text-xs text-text-secondary focus:border-accent focus:outline-none"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between border-t border-border/60">
                    <span className="text-[11px] font-mono text-text-muted">{item.location}</span>
                    <button
                      onClick={() => {
                        if (confirm(`Remove record "${item.title}"?`)) {
                          setGallery(gallery.filter((g) => g.id !== item.id));
                          setHasUnsavedChanges(true);
                        }
                      }}
                      className="text-xs font-mono text-red-400 hover:text-red-300 flex items-center gap-1"
                    >
                      <Trash2 className="w-3 h-3" /> Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 5: Skills & Competencies */}
        {activeTab === "skills" && (
          <div className="bg-surface rounded-2xl border border-border p-6 sm:p-8 space-y-6">
            <div className="border-b border-border/70 pb-4">
              <h2 className="text-lg font-bold text-text-primary">Skills, Software &amp; Codes</h2>
              <p className="text-xs text-text-secondary">
                Technical competencies, engineering instrumentation, and building code standards.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((cat, catIdx) => (
                <div
                  key={catIdx}
                  className="bg-surface-dark p-5 rounded-xl border border-border space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="font-mono text-xs font-bold text-accent tracking-wide uppercase">
                      {cat.category}
                    </h3>
                    <button
                      onClick={() => {
                        const updated = [...skills];
                        updated[catIdx].skills.push({
                          name: "New Competency",
                          note: "Field application note",
                        });
                        setSkills(updated);
                        setHasUnsavedChanges(true);
                      }}
                      className="text-[11px] font-mono text-text-muted hover:text-accent flex items-center gap-1"
                    >
                      <Plus className="w-3 h-3" /> Add Skill
                    </button>
                  </div>
                  <p className="text-xs text-text-muted">{cat.description}</p>

                  <div className="space-y-2 pt-2">
                    {cat.skills.map((s, sIdx) => (
                      <div
                        key={sIdx}
                        className="bg-surface p-2.5 rounded-lg border border-border/80 space-y-1.5"
                      >
                        <div className="flex items-center justify-between gap-2">
                          <input
                            type="text"
                            value={s.name}
                            onChange={(e) => {
                              const updated = [...skills];
                              updated[catIdx].skills[sIdx].name = e.target.value;
                              setSkills(updated);
                              setHasUnsavedChanges(true);
                            }}
                            className="font-semibold text-xs text-text-primary bg-transparent focus:outline-none flex-1 border-b border-transparent focus:border-accent"
                          />
                          <button
                            onClick={() => {
                              const updated = [...skills];
                              updated[catIdx].skills.splice(sIdx, 1);
                              setSkills(updated);
                              setHasUnsavedChanges(true);
                            }}
                            className="text-text-muted hover:text-red-400 p-1"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        </div>
                        <input
                          type="text"
                          value={s.note}
                          onChange={(e) => {
                            const updated = [...skills];
                            updated[catIdx].skills[sIdx].note = e.target.value;
                            setSkills(updated);
                            setHasUnsavedChanges(true);
                          }}
                          className="w-full text-[11px] text-text-muted bg-transparent focus:outline-none border-b border-transparent focus:border-border"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      {/* Project Editor Modal */}
      {editingProject && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-surface rounded-2xl border border-border max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-border/80 pb-4">
              <h2 className="text-lg font-bold text-text-primary">
                {isNewProject ? "Add New Civil Project" : `Edit Project: ${editingProject.title}`}
              </h2>
              <button
                onClick={() => setEditingProject(null)}
                className="text-text-muted hover:text-text-primary text-sm font-mono"
              >
                ✕ Close
              </button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block font-mono uppercase text-text-muted mb-1">Title</label>
                <input
                  type="text"
                  value={editingProject.title}
                  onChange={(e) => setEditingProject({ ...editingProject, title: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-surface-dark border border-border text-text-primary focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-mono uppercase text-text-muted mb-1">Category</label>
                <select
                  value={editingProject.category}
                  onChange={(e) =>
                    setEditingProject({
                      ...editingProject,
                      category: e.target.value as any,
                    })
                  }
                  className="w-full px-3.5 py-2 rounded-lg bg-surface-dark border border-border text-text-primary focus:border-accent focus:outline-none font-mono"
                >
                  <option value="INFRASTRUCTURE">INFRASTRUCTURE</option>
                  <option value="BUILDINGS">BUILDINGS</option>
                  <option value="SURVEYING">SURVEYING</option>
                  <option value="ACADEMIC">ACADEMIC</option>
                </select>
              </div>

              <div>
                <label className="block font-mono uppercase text-text-muted mb-1">Location</label>
                <input
                  type="text"
                  value={editingProject.location}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, location: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-lg bg-surface-dark border border-border text-text-primary focus:border-accent focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-mono uppercase text-text-muted mb-1">
                  Contractor / Firm
                </label>
                <input
                  type="text"
                  value={editingProject.firm}
                  onChange={(e) => setEditingProject({ ...editingProject, firm: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-surface-dark border border-border text-text-primary focus:border-accent focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-mono uppercase text-text-muted mb-1">Subtitle</label>
                <input
                  type="text"
                  value={editingProject.subtitle}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, subtitle: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-lg bg-surface-dark border border-border text-text-primary focus:border-accent focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-mono uppercase text-text-muted mb-1">
                  Summary Description
                </label>
                <textarea
                  rows={3}
                  value={editingProject.summary}
                  onChange={(e) =>
                    setEditingProject({ ...editingProject, summary: e.target.value })
                  }
                  className="w-full px-3.5 py-2 rounded-lg bg-surface-dark border border-border text-text-primary focus:border-accent focus:outline-none leading-relaxed"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-mono uppercase text-text-muted mb-1">
                  Tools &amp; Standards (Comma separated)
                </label>
                <input
                  type="text"
                  value={editingProject.tools.join(", ")}
                  onChange={(e) =>
                    setEditingProject({
                      ...editingProject,
                      tools: e.target.value
                        .split(",")
                        .map((t) => t.trim())
                        .filter(Boolean),
                    })
                  }
                  className="w-full px-3.5 py-2 rounded-lg bg-surface-dark border border-border text-text-primary focus:border-accent focus:outline-none"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block font-mono uppercase text-text-muted mb-1">
                  Thumbnail Image Path
                </label>
                <input
                  type="text"
                  value={editingProject.image}
                  onChange={(e) => setEditingProject({ ...editingProject, image: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-lg bg-surface-dark border border-border text-text-primary focus:border-accent focus:outline-none font-mono"
                />
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-border/80">
              <button
                onClick={() => setEditingProject(null)}
                className="px-4 py-2 rounded-xl bg-surface border border-border text-xs font-semibold text-text-secondary hover:text-text-primary"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  if (isNewProject) {
                    setProjects([...projects, editingProject]);
                  } else {
                    setProjects(
                      projects.map((p) => (p.id === editingProject.id ? editingProject : p))
                    );
                  }
                  setHasUnsavedChanges(true);
                  setEditingProject(null);
                }}
                className="px-5 py-2 rounded-xl bg-accent hover:bg-accent-soft text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-accent/20"
              >
                Save Project Changes
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
