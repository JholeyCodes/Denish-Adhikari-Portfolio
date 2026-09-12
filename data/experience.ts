export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  location: string;
  description: string;
  achievements: string[];
  skills: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    period: "2024 — PRESENT",
    role: "Civil Site Engineer / Surveyor",
    company: "Sarathi Construction Private Limited",
    location: "Tokha-07, Kathmandu, Nepal",
    description:
      "Leading on-site engineering execution, setting out, and quality control on heavy reinforced concrete wastewater treatment plant units, tanks, and underground pipeline installations.",
    achievements: [
      "Conducted high-accuracy horizontal and vertical setting out for RCC tanks, foundations, and pipelines using Total Station and Auto Level.",
      "Supervised excavation, PCC base preparation, and heavy RCC slab and wall casting operations in strict accordance with design drawings.",
      "Conducted rigorous reinforcement rebar inspection, checked formwork stability, and monitored concrete vibration during pours.",
      "Managed and coordinated daily task assignments for 40–50 site laborers, maintaining steady workflow and site safety compliance.",
      "Cast standard concrete test cubes and performed laboratory compressive strength testing.",
      "Conducted aggregate sieve analysis to verify grading quality and fineness modulus.",
      "Verified Bar Bending Schedules (BBS) to minimize steel cutting waste and compiled Daily Progress Reports (DPR).",
    ],
    skills: ["Total Station", "Auto Level", "RCC Construction", "BBS Verification", "Quality Testing", "Site Management"],
  },
  {
    period: "MAR 2024 — JUL 2024",
    role: "Engineering Intern",
    company: "Ujyalo Engineering Consultancy",
    location: "Kathmandu Valley, Nepal",
    description:
      "Contributed to architectural 2D drafting, structural drawing preparation, foundation planning, and quantity estimation for residential buildings under the supervision of senior engineers.",
    achievements: [
      "Developed comprehensive 2D architectural drawings (floor plans, elevations, sections) for residential buildings using AutoCAD.",
      "Assisted in foundation layout planning, plinth beam details, and column reinforcement schedules conforming to Nepal National Building Code (NBC).",
      "Prepared item-wise Bill of Quantities (BOQ) and calculated material requirements using Microsoft Excel.",
      "Participated in field visits for site dimension verification, plot setback checking, and foundation excavation inspection.",
    ],
    skills: ["AutoCAD 2D", "Structural Detailing", "Quantity Estimation", "NBC Guidelines", "Site Inspection"],
  },
];
