export interface ExpertiseItem {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  deliverables: string[];
  icon: string;
}

export const expertiseData: ExpertiseItem[] = [
  {
    number: "01",
    title: "CONSTRUCTION SITE MANAGEMENT & RCC",
    shortDesc: "Hands-on supervision of reinforced concrete tanks, foundations, slabs, and site quality control.",
    fullDesc:
      "Comprehensive site execution covering deep excavation, formwork inspection, reinforcement verification against Bar Bending Schedules (BBS), and monolithic concrete pours with strict slump and vibration control.",
    deliverables: [
      "RCC tank & foundation supervision",
      "Reinforcement & BBS verification",
      "Workforce coordination (40–50 laborers)",
      "Daily site progress reporting (DPR)",
    ],
    icon: "HardHat",
  },
  {
    number: "02",
    title: "SURVEYING & GEOMATICS ALIGNMENT",
    shortDesc: "Precision setting out, benchmark transfer, and level control using Total Station & Auto Level.",
    fullDesc:
      "High-precision geodetic setting out for heavy foundations, structural gridlines, and pipeline invert levels. Skilled in Total Station coordinate setup, closed traversing, and differential leveling.",
    deliverables: [
      "Total Station station setup & grid layout",
      "Auto Level differential leveling",
      "Pipeline slope & invert level control",
      "Contour mapping & cut/fill estimation",
    ],
    icon: "Compass",
  },
  {
    number: "03",
    title: "QUALITY CONTROL & MATERIALS TESTING",
    shortDesc: "Field and laboratory testing of concrete, aggregates, and construction materials for code compliance.",
    fullDesc:
      "Standard quality assurance protocols including fresh concrete slump testing, casting standard test cubes, monitoring curing, aggregate sieve analysis, and verifying compressive strength results.",
    deliverables: [
      "Concrete cube casting & 7/28-day testing",
      "Aggregate sieve analysis & grading",
      "Slump test & water-cement ratio checks",
      "Material receipt & batching verification",
    ],
    icon: "CheckCircle2",
  },
  {
    number: "04",
    title: "QUANTITY ESTIMATION & BOQ PREPARATION",
    shortDesc: "Detailed structural takeoffs, material schedules, and Bill of Quantities conforming to district rates.",
    fullDesc:
      "Accurate material takeoffs for earthwork, PCC, RCC, reinforcement steel, masonry, and finishing works. Development of automated Excel calculation templates to eliminate quantity disputes.",
    deliverables: [
      "Bill of Quantities (BOQ) preparation",
      "Bar Bending Schedule (BBS) calculation",
      "Material consumption reconciliation",
      "Item-rate contract documentation",
    ],
    icon: "Calculator",
  },
  {
    number: "05",
    title: "CAD DRAFTING & MUNICIPAL DETAILING",
    shortDesc: "AutoCAD 2D architectural plans, structural layouts, and municipal permit drawing sets.",
    fullDesc:
      "Drafting building permit drawings strictly compliant with Nepal National Building Code (NBC) guidelines, ductile seismic detailing for beam-column joints, and clear construction detail sheets.",
    deliverables: [
      "AutoCAD 2D architectural drawings",
      "Foundation & column grid layouts",
      "Ductile reinforcement detailing",
      "Municipal permit submission sets",
    ],
    icon: "Layers",
  },
  {
    number: "06",
    title: "INFRASTRUCTURE & SANITARY WORKS",
    shortDesc: "Wastewater treatment plants, sewer networks, retaining structures, and municipal utility works.",
    fullDesc:
      "Practical experience in municipal environmental infrastructure including water-retaining concrete tanks, dewatering systems, underground piping, and slope stability retaining structures.",
    deliverables: [
      "Wastewater treatment unit construction",
      "Underground gravity & pressure pipelines",
      "Retaining walls & drainage sumps",
      "Waterstop & cold-joint waterproofing",
    ],
    icon: "Building2",
  },
];
