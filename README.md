# Er. Denish Adhikari — Professional Civil Engineering Portfolio

[![Live Portfolio](https://img.shields.io/badge/Live%20Demo-denish--adhikari--portfolio.vercel.app-0070F3?style=for-the-badge&logo=vercel&logoColor=white)](https://denish-adhikari-portfolio.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/NEC%20License-No.%2079422%20Civil-emerald?style=for-the-badge&logo=civicwork&logoColor=white)](https://nec.gov.np)

> Official engineering portfolio and project showcase for **Er. Denish Adhikari**, a licensed Civil Engineer registered with the **Nepal Engineering Council (NEC Reg. No. 79422 "Civil")**. Specialized in wastewater treatment infrastructure, reinforced concrete (RCC) execution, precision surveying (Total Station & Auto Level), and structural compliance.

---

## 🏗️ Live Preview

- **Production URL:** [https://denish-adhikari-portfolio.vercel.app/](https://denish-adhikari-portfolio.vercel.app/)
- **Printable ATS Resume:** [https://denish-adhikari-portfolio.vercel.app/resume](https://denish-adhikari-portfolio.vercel.app/resume)
- **Source Code:** [https://github.com/JholeyCodes/Denish-Adhikari-Portfolio](https://github.com/JholeyCodes/Denish-Adhikari-Portfolio)

---

## 📐 Portfolio Highlights & Features

| Feature | Description |
| :--- | :--- |
| **Field Case Studies** | Comprehensive documentation of real-world civil projects, including the Tokha Wastewater Treatment Plant (RCC clarifiers, aeration tanks, and 40–50 labor force management) and Deep Bored Cast-in-Situ Piling. |
| **Interactive Nepal Project Map** | Interactive SVG-based geographical visualization highlighting project execution locations across Kathmandu, Pokhara, Gandaki Province, and Bagmati Province. |
| **Category-Filtered Projects** | Dynamic filtering covering Infrastructure, Buildings, Surveying, and Academic Capstone (ETABS Seismic Analysis per NBC 105:2020). |
| **Construction & Survey Records Lightbox** | Modal gallery with Prev/Next controls and keyboard shortcuts (`Esc`, `←`, `→`) inspecting high-resolution photographic field records. |
| **ATS-Friendly Digital Resume** | Dedicated `/resume` route with clean typography and `@media print` styling for 1-click PDF generation and municipal compliance dossiers. |
| **Branded OpenGraph & Meta Assets** | Custom civil engineering monogram favicons (`/icon.svg`) and high-contrast 1200×630px social cards (`/og-image.png`). |

---

## 🛠️ Tech Stack & Architecture

- **Framework:** [Next.js 14 (App Router)](https://nextjs.org/)
- **Language:** TypeScript
- **Styling:** Tailwind CSS (Custom dark slate & blueprint aesthetic)
- **Icons:** Lucide React
- **Typography:** Inter & JetBrains Mono (Google Fonts)
- **Hosting & CI/CD:** [Vercel](https://vercel.com/) (Edge CDN, Automated Deployments from `main`)

---

## 📂 Project Structure

```bash
denish_portfolio/
├── app/
│   ├── favicon.ico
│   ├── globals.css              # Global tokens, blueprint grid, print styles
│   ├── icon.svg                 # SVG monogram favicon
│   ├── apple-icon.svg           # High-res mobile touch icon
│   ├── layout.tsx               # Root layout, dynamic metadataBase & SEO
│   ├── page.tsx                 # Main single-page interactive experience
│   ├── projects/[slug]/         # Dynamic project deep-dive pages
│   └── resume/                  # ATS-formatted printable resume route
├── components/
│   ├── AboutSection.tsx         # Engineering credentials & background
│   ├── CaseStudyModal.tsx       # Detailed project breakdown modal
│   ├── ContactSection.tsx       # Contact form + Direct WhatsApp action
│   ├── ExperienceSection.tsx    # Professional & internship timeline
│   ├── GallerySection.tsx       # Responsive field records lightbox
│   ├── Header.tsx               # Sticky navigation with section spy
│   ├── HeroSection.tsx          # Hero banner with dynamic specialization ticker
│   ├── NepalMapSection.tsx      # SVG interactive project map
│   ├── ProjectsSection.tsx      # Filterable project cards & case studies
│   ├── SkillsSection.tsx        # Technical software & field methodologies
│   └── StatsSection.tsx         # Verified numerical highlights
├── data/
│   ├── experience.ts            # Career history & responsibilities
│   ├── gallery.ts               # Construction site photography & metadata
│   ├── projects.ts              # Detailed project specs, scopes & outcomes
│   └── skills.ts                # Software, standards & field competencies
└── public/
    ├── images/                  # Project photos, blueprints & portrait assets
    └── og-image.png             # 1200x630px high-contrast social preview card
```

---

## 💻 Local Development Setup

Clone the repository and run the development server locally:

```bash
# 1. Clone repository
git clone https://github.com/JholeyCodes/Denish-Adhikari-Portfolio.git

# 2. Navigate to project directory
cd Denish-Adhikari-Portfolio

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

To verify a production build:
```bash
npm run build
npm run start
```

---

## 👨‍💼 Contact Er. Denish Adhikari

- **License:** Nepal Engineering Council (NEC No. 79422 "Civil")
- **Email:** [den.adh0709@gmail.com](mailto:den.adh0709@gmail.com)
- **Phone / WhatsApp:** [+977 9867730557](https://wa.me/9779867730557)
- **Location:** Kathmandu, Nepal
- **LinkedIn:** [linkedin.com/in/denish-adhikari](https://www.linkedin.com/in/denish-adhikari/)

---

*Engineered with precision for modern civil engineering practice.*
