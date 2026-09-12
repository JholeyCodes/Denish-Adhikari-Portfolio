import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";
import fs from "fs";
import path from "path";

import { profileData } from "@/data/profile";
import { projectsData } from "@/data/projects";
import { experienceData } from "@/data/experience";
import { skillsData } from "@/data/skills";
import { galleryData } from "@/data/gallery";

const ADMIN_SECRET = process.env.ADMIN_PASSWORD || "denish2026!";
const SESSION_COOKIE = "denish_admin_session";

function isAuthenticated(request: NextRequest): boolean {
  const token = request.cookies.get(SESSION_COOKIE)?.value;
  if (!token) return false;
  const expected = crypto.createHmac("sha256", "denish_portfolio_salt_2026").update(ADMIN_SECRET).digest("hex");
  return token === expected;
}

export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  return NextResponse.json({
    profile: profileData,
    projects: projectsData,
    experience: experienceData,
    skills: skillsData,
    gallery: galleryData,
  });
}

export async function POST(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ error: "Unauthorized access" }, { status: 401 });
  }

  try {
    const payload = await request.json();
    const { profile, projects, experience, skills, gallery } = payload;

    // Strict input validation
    if (!profile && !projects && !experience && !skills && !gallery) {
      return NextResponse.json({ error: "No valid content payload provided" }, { status: 400 });
    }

    const modifiedFiles: string[] = [];

    // Local file persistence (if running in local environment or Node server)
    try {
      const dataDir = path.join(process.cwd(), "data");

      if (profile) {
        const fileContent = `export interface ProfileData {
  name: string;
  title: string;
  specializations: string[];
  necRegistration: string;
  necDate: string;
  phone: string;
  email: string;
  location: string;
  whatsapp: string;
  linkedin: string;
  github: string;
  bioSummary: string;
  bioQuote: string;
  workforceCount: string;
  surveyCount: string;
  experienceYears: string;
  education: {
    degree: string;
    institution: string;
    period: string;
  }[];
}

export const profileData: ProfileData = ${JSON.stringify(profile, null, 2)};
`;
        fs.writeFileSync(path.join(dataDir, "profile.ts"), fileContent, "utf-8");
        modifiedFiles.push("data/profile.ts");
      }

      if (Array.isArray(projects)) {
        const fileContent = `export interface ProjectCaseStudy {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: "INFRASTRUCTURE" | "BUILDINGS" | "SURVEYING" | "ACADEMIC";
  location: string;
  firm: string;
  duration: string;
  role: string;
  tools: string[];
  image: string;
  summary: string;
  facts: {
    label: string;
    value: string;
  }[];
  overview: string;
  myRole: string;
  responsibilities: string[];
  technicalApproach: string[];
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  drawings: {
    title: string;
    description: string;
    type: string;
  }[];
  sitePhotos: {
    caption: string;
    stage: string;
    image?: string;
  }[];
}

export const projectsData: ProjectCaseStudy[] = ${JSON.stringify(projects, null, 2)};
`;
        fs.writeFileSync(path.join(dataDir, "projects.ts"), fileContent, "utf-8");
        modifiedFiles.push("data/projects.ts");
      }

      if (Array.isArray(experience)) {
        const fileContent = `export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export const experienceData: ExperienceItem[] = ${JSON.stringify(experience, null, 2)};
`;
        fs.writeFileSync(path.join(dataDir, "experience.ts"), fileContent, "utf-8");
        modifiedFiles.push("data/experience.ts");
      }

      if (Array.isArray(skills)) {
        const fileContent = `export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level?: string;
    note: string;
  }[];
}

export const skillsData: SkillCategory[] = ${JSON.stringify(skills, null, 2)};
`;
        fs.writeFileSync(path.join(dataDir, "skills.ts"), fileContent, "utf-8");
        modifiedFiles.push("data/skills.ts");
      }

      if (Array.isArray(gallery)) {
        const fileContent = `export interface GalleryItem {
  id: string;
  title: string;
  category: "CONSTRUCTION" | "SURVEYING" | "STRUCTURES" | "TESTING";
  location: string;
  date: string;
  caption: string;
  image: string;
  tags: string[];
}

export const galleryData: GalleryItem[] = ${JSON.stringify(gallery, null, 2)};
`;
        fs.writeFileSync(path.join(dataDir, "gallery.ts"), fileContent, "utf-8");
        modifiedFiles.push("data/gallery.ts");
      }
    } catch (fsError) {
      console.warn("Local filesystem write skipped (serverless environment):", fsError);
    }

    // Optional GitHub Sync (for remote Vercel environments if GITHUB_PAT is set)
    let gitHubSynced = false;
    const githubToken = process.env.GITHUB_TOKEN || process.env.GITHUB_PAT;
    const repoOwner = process.env.GITHUB_REPO_OWNER || "JholeyCodes";
    const repoName = process.env.GITHUB_REPO_NAME || "Denish-Adhikari-Portfolio";

    if (githubToken) {
      try {
        const filesToSync: { path: string; content: string }[] = [];

        if (profile) {
          filesToSync.push({
            path: "data/profile.ts",
            content: `export interface ProfileData {
  name: string;
  title: string;
  specializations: string[];
  necRegistration: string;
  necDate: string;
  phone: string;
  email: string;
  location: string;
  whatsapp: string;
  linkedin: string;
  github: string;
  bioSummary: string;
  bioQuote: string;
  workforceCount: string;
  surveyCount: string;
  experienceYears: string;
  education: {
    degree: string;
    institution: string;
    period: string;
  }[];
}

export const profileData: ProfileData = ${JSON.stringify(profile, null, 2)};\n`,
          });
        }

        if (Array.isArray(projects)) {
          filesToSync.push({
            path: "data/projects.ts",
            content: `export interface ProjectCaseStudy {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  category: "INFRASTRUCTURE" | "BUILDINGS" | "SURVEYING" | "ACADEMIC";
  location: string;
  firm: string;
  duration: string;
  role: string;
  tools: string[];
  image: string;
  summary: string;
  facts: {
    label: string;
    value: string;
  }[];
  overview: string;
  myRole: string;
  responsibilities: string[];
  technicalApproach: string[];
  challenges: string[];
  solutions: string[];
  outcomes: string[];
  drawings: {
    title: string;
    description: string;
    type: string;
  }[];
  sitePhotos: {
    caption: string;
    stage: string;
    image?: string;
  }[];
}

export const projectsData: ProjectCaseStudy[] = ${JSON.stringify(projects, null, 2)};\n`,
          });
        }

        for (const file of filesToSync) {
          // 1. Get current file sha
          const getRes = await fetch(
            `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${file.path}`,
            {
              headers: {
                Authorization: `Bearer ${githubToken}`,
                Accept: "application/vnd.github.v3+json",
              },
            }
          );

          let sha: string | undefined;
          if (getRes.ok) {
            const data = await getRes.json();
            sha = data.sha;
          }

          // 2. Put updated file
          const putRes = await fetch(
            `https://api.github.com/repos/${repoOwner}/${repoName}/contents/${file.path}`,
            {
              method: "PUT",
              headers: {
                Authorization: `Bearer ${githubToken}`,
                Accept: "application/vnd.github.v3+json",
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                message: `chore(cms): update ${file.path} via admin portal`,
                content: Buffer.from(file.content).toString("base64"),
                sha: sha,
                branch: "main",
              }),
            }
          );

          if (putRes.ok) {
            gitHubSynced = true;
          }
        }
      } catch (ghError) {
        console.error("Failed to sync to GitHub:", ghError);
      }
    }

    return NextResponse.json({
      success: true,
      message: gitHubSynced
        ? "Changes published directly to GitHub. Vercel is now rebuilding your live site (~30s)."
        : "Changes saved to local files successfully.",
      modifiedFiles,
      gitHubSynced,
    });
  } catch (error) {
    return NextResponse.json({ error: "Failed to save updates" }, { status: 500 });
  }
}
