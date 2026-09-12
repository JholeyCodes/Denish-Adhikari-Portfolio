# Civil Engineer Portfolio Website --- Design Specification

**Document:** `design.md`\
**Version:** 2.0\
**Status:** Design Proposal / Approval Draft\
**Design Reference:** Selfer-style dark personal portfolio\
**Website Type:** Professional Civil Engineer Portfolio\
**Primary Audience:** Employers, engineering firms, clients,
consultants, professional contacts\
**Geographic Identity:** Nepal

------------------------------------------------------------------------

## 1. Design Vision

The website should present the civil engineer as a **professional,
technically capable and trustworthy engineer**.

The visual direction combines:

-   A dark, modern personal-portfolio aesthetic
-   Large, image-led sections
-   Minimal and clean layouts
-   Strong typography
-   Subtle motion
-   Engineering drawings and construction photography
-   Civil-engineering-specific content
-   A restrained Nepal identity

The Selfer template is used only as a **visual and interaction
reference**. The website should have its own content, branding, imagery
and engineering-focused organization.

### Core design message

> **Professional enough for an employer, technical enough for an
> engineer, and simple enough for anyone to understand.**

------------------------------------------------------------------------

# 2. Design Principles

## 2.1 Professional first

The website should feel reliable and mature.

Avoid:

-   Excessive animation
-   Cartoon-like graphics
-   Too many colors
-   Overloaded dashboards
-   Generic developer/creative-portfolio language

## 2.2 Projects over decoration

Real engineering work should receive more visual importance than
decorative elements.

A strong project photograph or technical drawing is more valuable than a
complex animation.

## 2.3 Simple language

Technical information should be understandable to non-engineers while
retaining enough detail for engineering professionals.

## 2.4 Evidence-based portfolio

The site should show evidence of capability through:

-   Projects
-   Site photographs
-   Drawings
-   Software used
-   Responsibilities
-   Certifications
-   Experience
-   Verified achievements

## 2.5 Authenticity

Do not invent:

-   Projects
-   Experience
-   Clients
-   Certifications
-   Awards
-   Statistics
-   Skills
-   Testimonials

------------------------------------------------------------------------

# 3. Visual Identity

## 3.1 Overall Style

**Dark + Minimal + Architectural + Technical**

Visual keywords:

`Professional` `Engineering` `Construction` `Precision` `Modern`
`Reliable`

------------------------------------------------------------------------

# 4. Color System

Use a restrained palette.

  Token                Color       Purpose
  -------------------- ----------- --------------------------
  `--background`       `#0B0F14`   Main dark background
  `--surface`          `#111827`   Cards and panels
  `--surface-light`    `#1F2937`   Hover/secondary surfaces
  `--text-primary`     `#F8FAFC`   Main headings
  `--text-secondary`   `#A7B0BD`   Supporting text
  `--border`           `#273244`   Dividers and cards
  `--accent`           `#F97316`   Engineering orange
  `--accent-soft`      `#FB923C`   Hover/highlight

### Accent usage

Orange should be used sparingly for:

-   Primary CTA buttons
-   Active navigation
-   Project numbers
-   Small labels
-   Hover states
-   Important highlights

The accent must not dominate the page.

------------------------------------------------------------------------

# 5. Typography

## Primary font

**Inter**

Recommended weights:

-   400 --- body text
-   500 --- labels
-   600 --- navigation/subheadings
-   700 --- section headings
-   800 --- hero heading

## Alternative

**Manrope** or **Plus Jakarta Sans**

### Typography hierarchy

``` text
H1 — 64–88px desktop
H2 — 42–56px desktop
H3 — 24–32px
Body — 16–18px
Small text — 12–14px
```

Mobile typography should scale down automatically.

------------------------------------------------------------------------

# 6. Layout System

## Desktop

Maximum content width:

`1200–1280px`

Main page padding:

`32–64px`

## Tablet

Content width:

`90%`

## Mobile

Horizontal padding:

`20–24px`

### Grid

Use a responsive 12-column grid on desktop.

Projects:

-   3 columns for small cards
-   2 columns for medium cards
-   1 column on mobile

------------------------------------------------------------------------

# 7. Navigation

## Desktop

``` text
┌──────────────────────────────────────────────────────────────┐
│ CE / NAME     ABOUT  EXPERIENCE  PROJECTS  SKILLS  CONTACT │
│                                                    [CV]     │
└──────────────────────────────────────────────────────────────┘
```

### Navigation behavior

-   Fixed/sticky navigation
-   Transparent or dark background initially
-   Slight background change after scrolling
-   Smooth section navigation
-   Active section indicator

## Mobile

``` text
┌───────────────────────────────┐
│ CE / NAME                 ☰   │
└───────────────────────────────┘
```

Menu opens as a full-width/dark navigation panel.

------------------------------------------------------------------------

# 8. Home / Hero Section

The hero should be the strongest first impression.

## Layout

Two-column desktop layout:

``` text
┌──────────────────────────────┬─────────────────────────┐
│ SMALL LABEL                  │                         │
│                              │                         │
│ I AM                         │                         │
│ [ENGINEER NAME]              │     PROFESSIONAL       │
│                              │        PHOTO            │
│ CIVIL ENGINEER               │                         │
│                              │                         │
│ Short professional statement │                         │
│                              │                         │
│ [VIEW PROJECTS] [DOWNLOAD CV]│                         │
└──────────────────────────────┴─────────────────────────┘
```

## Recommended content

``` text
CIVIL ENGINEER
[ENGINEER NAME]

Designing and contributing to
safe, practical and lasting infrastructure.

[VIEW PROJECTS]
[DOWNLOAD CV]
```

### Hero image

Preferred:

-   Engineer at a construction site
-   Engineer with PPE
-   Engineer reviewing drawings
-   Professional engineering portrait

Image should be authentic and high quality.

------------------------------------------------------------------------

# 9. Engineering Expertise

This section adapts the reference template's service-card concept to
civil engineering.

## Heading

**MY EXPERTISE**

## Card categories

Use only relevant categories:

``` text
01
STRUCTURAL ENGINEERING

02
CONSTRUCTION MANAGEMENT

03
QUANTITY ESTIMATION

04
SURVEYING & SITE WORK

05
CAD / BIM

06
INFRASTRUCTURE DEVELOPMENT
```

Each card contains:

-   Number
-   Title
-   One-line explanation
-   Arrow icon

### Card behavior

On hover:

-   Border becomes more visible
-   Accent appears
-   Arrow moves slightly
-   Background changes subtly

------------------------------------------------------------------------

# 10. About Section

## Heading

**ABOUT THE ENGINEER**

### Layout

``` text
┌──────────────────────┬────────────────────────────────┐
│                      │ ABOUT ME                       │
│                      │                                │
│       PHOTO          │ Short biography                │
│                      │                                │
│                      │ Location                       │
│                      │ Education                      │
│                      │ Specialization                 │
│                      │                                │
│                      │ [DOWNLOAD CV] [CONTACT]        │
└──────────────────────┴────────────────────────────────┘
```

## Content

Include:

-   Short biography
-   Professional interests
-   Education
-   Location
-   Specialization
-   Career direction
-   Optional professional philosophy

Avoid long paragraphs.

------------------------------------------------------------------------

# 11. Skills Section

Do not use exaggerated percentage bars.

## Engineering Software

``` text
AutoCAD
Civil 3D
ETABS
STAAD.Pro
SAP2000
Revit
MS Excel
```

Only display verified software skills.

## Engineering Capabilities

``` text
Structural Analysis
Quantity Estimation
BOQ Preparation
Construction Supervision
Surveying
Technical Drawing
Site Management
Technical Documentation
```

### UI

Use compact technical cards or tags.

``` text
┌──────────────┐ ┌──────────────┐
│ AUTOCAD      │ │ ETABS        │
└──────────────┘ └──────────────┘
```

------------------------------------------------------------------------

# 12. Experience Section

Use a vertical timeline.

``` text
2026 — PRESENT
● Civil Engineer
│ Organization
│ Location
│
│ Responsibilities...
│
2025 — 2026
● Site Engineer
│ Organization
│ Location
│
│ Responsibilities...
│
2024 — 2025
● Engineering Intern
```

Each position contains:

-   Position
-   Organization
-   Location
-   Dates
-   Responsibilities
-   Achievements, when verifiable

------------------------------------------------------------------------

# 13. Projects Section

## Importance

**Projects are the core of the portfolio.**

The section should be visually larger than ordinary text sections.

## Heading

**SELECTED PROJECTS**

Subheading:

> A selection of academic, professional and field-based engineering
> work.

------------------------------------------------------------------------

# 14. Project Filters

Optional filters:

``` text
ALL
BUILDINGS
STRUCTURAL
ROADS
HYDROPOWER
SURVEYING
ACADEMIC
```

Filtering should be instant and should not reload the page.

------------------------------------------------------------------------

# 15. Project Cards

Example:

``` text
┌─────────────────────────────────────┐
│                                     │
│          PROJECT IMAGE              │
│                                     │
├─────────────────────────────────────┤
│ 01                                  │
│                                     │
│ 3-STOREY RESIDENTIAL BUILDING       │
│ Kathmandu, Nepal                    │
│                                     │
│ RCC • STRUCTURAL • ETABS            │
│                                     │
│ VIEW CASE STUDY →                   │
└─────────────────────────────────────┘
```

### Card requirements

Every card should contain:

-   Project image
-   Project number
-   Project title
-   Location
-   Category
-   Key technologies/tools
-   Link to case study

------------------------------------------------------------------------

# 16. Project Case Study Page

Every important project gets a dedicated page.

## Header

``` text
RESIDENTIAL BUILDING

3-Storey RCC Residential Building

Kathmandu, Nepal
```

Large hero image.

------------------------------------------------------------------------

## Project Facts

``` text
TYPE
Residential

LOCATION
Kathmandu, Nepal

ROLE
Structural Design

DURATION
4 Months

TOOLS
AutoCAD · ETABS · Excel
```

------------------------------------------------------------------------

# 17. Project Content Structure

Each case study follows this order:

``` text
01 — PROJECT OVERVIEW
02 — MY ROLE
03 — RESPONSIBILITIES
04 — TECHNICAL APPROACH
05 — CHALLENGE
06 — SOLUTION
07 — OUTCOME
08 — DRAWINGS & DOCUMENTATION
09 — SITE PHOTOGRAPHS
```

This creates a consistent structure across projects.

------------------------------------------------------------------------

# 18. Technical Approach Diagram

Where useful, show the engineering workflow visually.

``` text
SITE INVESTIGATION
        ↓
STRUCTURAL PLANNING
        ↓
LOAD CALCULATION
        ↓
STRUCTURAL ANALYSIS
        ↓
DESIGN
        ↓
DRAWINGS
        ↓
ESTIMATION
        ↓
CONSTRUCTION
```

The exact process should be customized to each project.

------------------------------------------------------------------------

# 19. Drawings & Technical Documents

Project pages can include:

-   Floor plans
-   Elevations
-   Sections
-   Structural details
-   CAD drawings
-   Structural models
-   Site layouts

### Viewer

Clicking a drawing opens a full-screen viewer.

Features:

-   Zoom
-   Previous/next
-   Close
-   Caption
-   Optional download if permitted

------------------------------------------------------------------------

# 20. Engineering Statistics

The reference design uses a statistics section. Adapt it to engineering.

## Heading

**ENGINEERING AT A GLANCE**

Possible metrics:

``` text
08+
PROJECTS

12+
FIELD VISITS

05+
CERTIFICATIONS

04
YEARS EXPERIENCE
```

### Important rule

Use only real numbers.

For students/recent graduates, use meaningful alternatives:

``` text
ACADEMIC PROJECTS
FIELD EXPERIENCES
CERTIFICATIONS
SOFTWARE TOOLS
```

------------------------------------------------------------------------

# 21. Nepal Identity

The Nepal connection should feel authentic and professional.

## Recommended implementation

### Projects across Nepal

Use an optional Nepal map showing actual project locations.

``` text
              NEPAL

         ● Kathmandu
               ●
     ● Pokhara
                    ●
                 Chitwan
```

Clicking a location can show related projects.

### Avoid

-   Repeated Nepal flags
-   Excessive national colors
-   Decorative symbols unrelated to engineering

The identity should come primarily from:

-   Actual Nepal projects
-   Locations
-   Infrastructure photographs
-   Engineering context

------------------------------------------------------------------------

# 22. Gallery

## Heading

**FIELD NOTES / GALLERY**

Categories:

``` text
ALL
CONSTRUCTION
SURVEYING
SITE VISITS
STRUCTURES
INFRASTRUCTURE
```

Use a masonry-style image grid.

Each image may include:

-   Project
-   Location
-   Date
-   Short caption

### Image interaction

Hover:

-   Slight zoom
-   Dark overlay
-   Project name

Click:

-   Full-screen image viewer

------------------------------------------------------------------------

# 23. Certifications

Display certificates as clean cards.

``` text
┌───────────────────────────┐
│ CERTIFICATE PREVIEW       │
│                           │
│ AutoCAD Training          │
│ Organization              │
│ 2025                      │
│                           │
│ VIEW CERTIFICATE →        │
└───────────────────────────┘
```

Do not show certificates that cannot be verified.

------------------------------------------------------------------------

# 24. Education

Use a simple timeline/card.

``` text
BACHELOR'S DEGREE
Civil Engineering

[University]
[Location]

[Start Year] — [End Year]
```

Optional:

-   Relevant coursework
-   Academic projects
-   Achievements

------------------------------------------------------------------------

# 25. Professional References / Testimonials

Use only genuine testimonials.

Recommended heading:

**PROFESSIONAL REFERENCES**

Each testimonial:

``` text
"Short genuine statement..."

— Name
  Position / Organization
```

If there are no legitimate testimonials, hide this section instead of
filling it with placeholder reviews.

------------------------------------------------------------------------

# 26. Call-to-Action Section

Inspired by the strong CTA structure of the reference design.

## Main message

**LET'S BUILD SOMETHING THAT LASTS.**

Supporting text:

> Have an engineering project, professional opportunity, or simply want
> to connect?

Button:

**GET IN TOUCH →**

This section should be visually prominent.

------------------------------------------------------------------------

# 27. Contact Section

## Heading

**GET IN TOUCH**

Show:

``` text
LOCATION
Nepal

EMAIL
[professional email]

PHONE
[optional]

LINKEDIN
[profile]
```

Then contact form:

``` text
NAME
EMAIL
SUBJECT
MESSAGE

[SEND MESSAGE]
```

### Form behavior

-   Validate required fields
-   Show success/error message
-   Include spam protection
-   Do not expose private information

------------------------------------------------------------------------

# 28. Resume

Provide:

**View Resume**

**Download PDF**

The online resume should contain:

-   Profile
-   Experience
-   Education
-   Skills
-   Certifications
-   Selected projects

The PDF should be ATS-friendly.

------------------------------------------------------------------------

# 29. Footer

``` text
CE / ENGINEER NAME

Civil Engineer
Nepal

ABOUT
EXPERIENCE
PROJECTS
CONTACT

LinkedIn
Email

© 2026 [Engineer Name]
All rights reserved.
```

Keep the footer minimal.

------------------------------------------------------------------------

# 30. Animation System

Animations should support navigation and hierarchy, not distract.

## Page load

-   Hero text fade/reveal
-   Image reveal

## Scroll

-   Section fade-up
-   Project cards reveal
-   Statistics count-up, if appropriate

## Hover

-   Image zoom
-   Arrow movement
-   Border/accent transition

## Navigation

-   Smooth scrolling
-   Active section indicator

### Animation principle

**Subtle, fast and professional.**

Avoid:

-   Excessive parallax
-   Spinning elements
-   Large bouncing animations
-   Constant movement

------------------------------------------------------------------------

# 31. Responsive Design

The website must work on:

-   Desktop
-   Laptop
-   Tablet
-   Mobile

## Mobile layout

Hero becomes:

``` text
CIVIL ENGINEER

[NAME]

Professional statement

[VIEW PROJECTS]
[DOWNLOAD CV]

[PHOTO]
```

Project cards become one column.

Technical drawings open in a dedicated viewer.

Navigation becomes a menu.

------------------------------------------------------------------------

# 32. Accessibility

The website should meet modern accessibility expectations.

Requirements:

-   Keyboard navigation
-   Proper heading hierarchy
-   Alt text for meaningful images
-   Good text/background contrast
-   Visible focus states
-   Form labels
-   Accessible buttons
-   Reduced-motion consideration

------------------------------------------------------------------------

# 33. Performance

Target:

``` text
Performance       90+
Accessibility     95+
SEO               95+
Best Practices    95+
```

Use:

-   WebP/AVIF
-   Responsive image sizes
-   Lazy loading
-   Next.js image optimization
-   Static rendering where possible
-   Minimal client-side JavaScript

------------------------------------------------------------------------

# 34. Recommended Technology Stack

## Frontend

**Next.js + TypeScript**

Purpose:

-   Modern web application
-   SEO
-   Fast page loading
-   Project detail pages
-   Maintainability

## Styling

**Tailwind CSS**

Purpose:

-   Consistent design system
-   Responsive layouts
-   Rapid development

## Animation

**Framer Motion**

Purpose:

-   Page transitions
-   Scroll reveals
-   Hover effects

## Icons

**Lucide React**

Purpose:

-   Clean engineering-style icons

## Content

**MDX**

Purpose:

-   Easy project and article management
-   Developer-friendly content structure

## Optional Backend

**Supabase**

For:

-   Database
-   Authentication
-   File storage
-   Contact submissions
-   Future admin dashboard

## Image hosting

**Cloudinary** or equivalent image CDN if the gallery becomes large.

## Hosting

**Vercel**

## Version control

**GitHub**

------------------------------------------------------------------------

# 35. Recommended Architecture

``` text
USER
  │
  ▼
NEXT.JS WEBSITE
  │
  ├── Home
  ├── About
  ├── Experience
  ├── Projects
  │     └── Project Details
  ├── Skills
  ├── Education
  ├── Certifications
  ├── Gallery
  ├── Resume
  └── Contact
          │
          ▼
       OPTIONAL
       SUPABASE
```

------------------------------------------------------------------------

# 36. Suggested Project Data Structure

Each project should contain:

``` text
title
slug
category
location
date
duration
role
description
responsibilities[]
software[]
technicalApproach[]
challenges[]
solutions[]
outcomes[]
images[]
drawings[]
featured
```

This makes it easy to add new projects without redesigning the website.

------------------------------------------------------------------------

# 37. Suggested Folder Structure

``` text
civil-engineer-portfolio/

├── app/
│   ├── page.tsx
│   ├── about/
│   ├── experience/
│   ├── projects/
│   │   └── [slug]/
│   ├── skills/
│   ├── education/
│   ├── certifications/
│   ├── gallery/
│   ├── resume/
│   └── contact/
│
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Expertise.tsx
│   ├── About.tsx
│   ├── Experience.tsx
│   ├── Skills.tsx
│   ├── ProjectCard.tsx
│   ├── ProjectGrid.tsx
│   ├── Gallery.tsx
│   ├── ContactForm.tsx
│   └── Footer.tsx
│
├── content/
│   ├── projects/
│   └── blog/
│
├── public/
│   ├── images/
│   ├── drawings/
│   └── resume/
│
└── lib/
```

------------------------------------------------------------------------

# 38. SEO

Site title:

``` text
[Engineer Name] | Civil Engineer Nepal
```

Meta description:

``` text
Professional portfolio of [Engineer Name],
Civil Engineer from Nepal specializing in
[verified specialization].
```

Project pages should have unique metadata.

Also include:

-   Sitemap
-   robots.txt
-   Open Graph metadata
-   Descriptive image alt text
-   Structured data where appropriate
-   Clean URLs

Example:

``` text
/projects/three-storey-residential-building
```

------------------------------------------------------------------------

# 39. Content Requirements

Before development, collect:

## Personal

-   Full name
-   Professional title
-   Professional photograph
-   Biography
-   Location
-   Email
-   Phone, if desired
-   LinkedIn

## Education

-   Degree
-   Institution
-   Dates
-   Achievements

## Experience

-   Company
-   Position
-   Location
-   Dates
-   Responsibilities
-   Achievements

## Projects

For every project:

-   Name
-   Location
-   Type
-   Date
-   Duration
-   Role
-   Responsibilities
-   Software
-   Technical information
-   Challenges
-   Solutions
-   Results
-   Photos
-   Drawings

## Certifications

-   Certificate name
-   Issuing organization
-   Date
-   Certificate file

## Visual assets

-   Professional portrait
-   Site photographs
-   Project photographs
-   Drawings
-   CAD/3D screenshots
-   Optional logo

------------------------------------------------------------------------

# 40. Content Quality Rules

1.  Never invent professional information.
2.  Use real project photographs.
3.  Use only authorized photographs and documents.
4.  Remove confidential project information.
5.  Explain technical work in plain language.
6.  Keep dates and locations consistent.
7.  Use real testimonials only.
8.  Keep the portfolio updated.
9.  Prioritize quality over the number of projects.
10. Show the engineer's actual contribution, not only the project's
    overall achievement.

------------------------------------------------------------------------

# 41. Version 1 Scope

The first launch should include:

### Essential

-   Home
-   About
-   Experience
-   Projects
-   Project detail pages
-   Skills
-   Education
-   Certifications
-   Gallery
-   Resume
-   Contact
-   Responsive design
-   SEO
-   Performance optimization

### Optional

-   Blog
-   Nepal project map
-   Testimonials

------------------------------------------------------------------------

# 42. Version 2 --- Future Features

Future development may add:

``` text
ADMIN DASHBOARD
       │
       ├── Add Project
       ├── Edit Project
       ├── Upload Drawings
       ├── Upload Photos
       ├── Add Experience
       ├── Add Certificates
       ├── Update Skills
       └── Publish Blog
```

Other possible additions:

-   Interactive Nepal project map
-   Multiple CV versions
-   Project analytics
-   Client inquiry management
-   CMS
-   Search
-   Multi-language support

------------------------------------------------------------------------

# 43. Design Approval Checklist

The design is ready for development when the reviewer agrees that:

-   [ ] The dark visual style is appropriate.
-   [ ] The Selfer-inspired layout is suitable as a reference.
-   [ ] The website feels like a civil engineer's portfolio, not a
    generic creative portfolio.
-   [ ] The Home page gives a clear first impression.
-   [ ] Projects are the central feature.
-   [ ] Project case studies show actual engineering contribution.
-   [ ] The navigation is simple.
-   [ ] The color palette is acceptable.
-   [ ] The typography is readable.
-   [ ] The website will work well on mobile.
-   [ ] The Nepal identity is subtle and professional.
-   [ ] The CV is easy to find.
-   [ ] Contact information is easy to find.
-   [ ] Animations are restrained.
-   [ ] No unverified information will be published.
-   [ ] Version 1 scope is understood and approved.

------------------------------------------------------------------------

# 44. Final Design Summary

The final website should feel like a **digital engineering portfolio and
professional identity**, not simply an online CV.

### Visual formula

``` text
SELFer-inspired dark aesthetic
            +
Civil Engineering content
            +
Large project photography
            +
Technical drawings
            +
Case-study storytelling
            +
Subtle Nepal identity
            +
Minimal professional animation
            =
DISTINCTIVE CIVIL ENGINEER PORTFOLIO
```

### Primary user journey

``` text
LAND ON WEBSITE
      ↓
UNDERSTAND WHO THE ENGINEER IS
      ↓
SEE ENGINEERING EXPERTISE
      ↓
VIEW REAL PROJECTS
      ↓
OPEN PROJECT CASE STUDY
      ↓
VERIFY SKILLS / EXPERIENCE
      ↓
VIEW CV
      ↓
CONTACT ENGINEER
```

### Core design principle

> **Show the engineering work first. Use design to make that work easier
> to understand.**

------------------------------------------------------------------------

# 45. Approval

**Project:** Civil Engineer Portfolio Website

**Design version:** 2.0

**Design status:** Proposed for approval

**Approved by:**
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Date:**
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

**Comments / required changes:**

------------------------------------------------------------------------

------------------------------------------------------------------------

------------------------------------------------------------------------

**Final approval:**
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
