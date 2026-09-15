export interface ProjectCaseStudy {
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

export const projectsData: ProjectCaseStudy[] = [
  {
    "id": "wwtp-tokha",
    "slug": "tokha-wastewater-treatment-plant",
    "number": "01",
    "title": "Tokha Wastewater Treatment Plant & RCC Infrastructure",
    "subtitle": "Heavy RCC Tank Construction, Deep Foundation & Pipeline Alignment",
    "category": "INFRASTRUCTURE",
    "location": "Tokha-07, Kathmandu, Nepal",
    "firm": "Sarathi Construction Private Limited",
    "duration": "Contract Duration (2024 — Present)",
    "role": "Civil Site Engineer / Surveyor",
    "tools": [
      "Total Station",
      "Auto Level",
      "AutoCAD",
      "MS Excel (BBS)",
      "Rotary Piling Rig",
      "Cube Testing Machine"
    ],
    "image": "/images/site/site-24.jpg",
    "summary": "Comprehensive site engineering and geomatic alignment for large-scale reinforced concrete wastewater treatment units, aeration tanks, deep excavations, and heavy piping networks.",
    "facts": [
      {
        "label": "PROJECT TYPE",
        "value": "Sanitary / Heavy RCC Infrastructure"
      },
      {
        "label": "LOCATION",
        "value": "Tokha-07, Kathmandu, Nepal"
      },
      {
        "label": "CONTRACTOR",
        "value": "Sarathi Construction Pvt. Ltd."
      },
      {
        "label": "ROLE",
        "value": "Civil Site Engineer & Field Surveyor"
      },
      {
        "label": "WORKFORCE",
        "value": "40–50 Site Laborers & Specialized Trades"
      },
      {
        "label": "CORE FOCUS",
        "value": "Setting Out, BBS, Concreting & Testing"
      }
    ],
    "overview": "The Tokha Wastewater Treatment Plant project is a vital municipal environmental infrastructure initiative designed to collect, treat, and safely discharge wastewater in northern Kathmandu. The structural works demanded exceptionally stringent water-tight concrete specifications, strict reinforcement cover controls, and zero tolerance for benchmark deviation in foundation tanks.",
    "myRole": "Directly led on-site survey operations and day-to-day engineering execution. Responsible for horizontal and vertical setting out using Total Station, structural drawing verification, reinforcement inspection, quality testing of aggregates and fresh concrete, and workforce deployment.",
    "responsibilities": [
      "Executed setting out, benchmark transfer, and level control for RCC tanks, retaining walls, and underground pipeline trenches using Total Station and Auto Level.",
      "Supervised deep earthwork excavation, PCC base preparation, and heavy raft foundation casting.",
      "Conducted thorough reinforcement rebar inspections against structural drawings and verified Bar Bending Schedules (BBS) to minimize steel wastage.",
      "Monitored concrete mix pouring, slump consistency, compaction with mechanical vibrators, and proper curing regimes for water-retaining structures.",
      "Prepared standard concrete test cubes and coordinated laboratory compressive strength failure testing.",
      "Conducted sieve analysis to ensure strict compliance with fineness modulus and grading curves.",
      "Coordinated daily workflows for 40–50 workers, maintaining stringent site safety and preparing Daily Progress Reports (DPR)."
    ],
    "technicalApproach": [
      "Station establishment using permanent survey pillars and double-run leveling from municipal benchmarks.",
      "Gridline coordinates plotted in CAD and uploaded to Total Station for precise tank corner setting out.",
      "Systematic pre-pour checklists for formwork alignment, cover block placement (50mm clear cover for water-retaining elements), and tie wire security.",
      "Controlled slump testing at 25-minute intervals during transit mixer pours, followed by standard cube sampling (3, 7, and 28-day curing)."
    ],
    "challenges": [
      "High groundwater table and soil instability during deep excavation adjacent to natural drainage channels.",
      "Strict water-tightness tolerances requiring defect-free monolithic pours and careful construction joint treatment with water-bars.",
      "Logistical coordination of heavy concrete deliveries within congested Kathmandu access roads."
    ],
    "solutions": [
      "Implemented staged dewatering sumps and perimeter trench drainage to maintain a dry subgrade for PCC casting.",
      "Enforced hydro-expansive waterstop installation and meticulous surface preparation at all horizontal and vertical cold joints.",
      "Organized phased night and early morning concrete pours with synchronized batching plant dispatches."
    ],
    "outcomes": [
      "Achieved 100% structural drawing compliance across all RCC tank units and pipeline alignments.",
      "All 28-day concrete compressive test cubes satisfied or exceeded target characteristic strengths.",
      "Steel cutting wastage reduced by ~4% through optimized BBS rebar utilization.",
      "Zero site safety lost-time incidents recorded under direct shift supervision."
    ],
    "drawings": [
      {
        "title": "RCC Aeration Tank Structural Plan",
        "description": "General arrangement and reinforcement detail drawing of primary containment unit.",
        "type": "Structural Detail / CAD"
      },
      {
        "title": "Pipeline Profile & Longitudinal Section",
        "description": "Slope gradients, invert levels, and manhole drop elevations.",
        "type": "Survey / Engineering Profile"
      },
      {
        "title": "Retaining Wall & Raft Sump Detail",
        "description": "Rebar spacing, lap lengths, and waterstop joint installation layout.",
        "type": "Reinforcement Detail"
      }
    ],
    "sitePhotos": [
      {
        "caption": "Complete aeration tank formwork and vertical wall rebar shuttering",
        "stage": "Formwork & Shuttering",
        "image": "/images/site/site-24.jpg"
      },
      {
        "caption": "Massive RCC raft reinforcement mat inspection with perimeter drainage",
        "stage": "Raft Slab Rebar",
        "image": "/images/site/site-28.jpg"
      },
      {
        "caption": "Hydro-expansive PVC water-stop seal installation at wall cold joint",
        "stage": "Waterproofing Joint",
        "image": "/images/site/site-32.jpg"
      },
      {
        "caption": "Standard 150mm concrete test cubes with casting batch labels",
        "stage": "Compressive QC Test",
        "image": "/images/site/site-05.jpg"
      }
    ]
  },
  {
    "id": "deep-foundation-piling",
    "slug": "deep-foundation-bored-cast-in-situ-piling",
    "number": "02",
    "title": "Deep Foundation Bored Cast-in-Situ Piling Operations",
    "subtitle": "Heavy Rotary Hydraulic Rig, Pile Cage Lowering & Night Concreting",
    "category": "INFRASTRUCTURE",
    "location": "Tokha Site, Kathmandu, Nepal",
    "firm": "Sarathi Construction Pvt. Ltd.",
    "duration": "Execution Phase",
    "role": "Lead Foundation Engineer",
    "tools": [
      "Rotary Piling Rig",
      "Total Station",
      "Tremie Pipe",
      "Concrete Transit Mixers",
      "Slump Cone"
    ],
    "image": "/images/site/site-44.jpg",
    "summary": "Execution of deep cast-in-situ concrete piles for heavy structural foundation support in alluvial soil conditions with groundwater table control.",
    "facts": [
      {
        "label": "FOUNDATION TYPE",
        "value": "Bored Cast-in-Situ Reinforced Piles"
      },
      {
        "label": "LOCATION",
        "value": "Tokha Site, Kathmandu"
      },
      {
        "label": "EQUIPMENT",
        "value": "Hydraulic Crawler Rotary Piling Rig"
      },
      {
        "label": "ROLE",
        "value": "Site Inspection & Borehole Alignment"
      },
      {
        "label": "POUR METHOD",
        "value": "Submerged Tremie Pipe Concreting"
      },
      {
        "label": "CHALLENGE",
        "value": "Alluvial Silt & Night Logistics"
      }
    ],
    "overview": "Deep foundation piles were required to transfer heavy superstructure and hydraulic tank loads through soft upper alluvial strata down to competent load-bearing strata. Operations encompassed mechanical auger boring, bentonite slurry stabilization, lowering 12m-long circular rebar cages with cover spacers, and tremie underwater concreting.",
    "myRole": "Monitored borehole verticality, checked drill depth, inspected circular rebar cage tying, ensured cover block spacer placement, and supervised continuous tremie concrete pouring.",
    "responsibilities": [
      "Checked borehole center-line alignment using Total Station before rig positioning.",
      "Inspected spiral ties, main longitudinal bars, and concrete roller spacers on pile cages.",
      "Supervised tremie pipe assembly to maintain minimum 2.0m embedment in fresh concrete throughout the pour.",
      "Coordinated night shift workers and floodlight logistics for continuous concrete pours."
    ],
    "technicalApproach": [
      "Rigid centering verification with secondary reference pins offset 2.0m from borehole center.",
      "Periodic slump testing (180 ± 20mm required for tremie concrete workability).",
      "Immediate collection of test cubes from every concrete transit mixer batch."
    ],
    "challenges": [
      "Risk of borehole collapse from unconsolidated silty sand layers.",
      "Preventing cold joints during night pours amid transit mixer transit delays."
    ],
    "solutions": [
      "Maintained hydrostatic head with bentonite slurry throughout boring operations.",
      "Coordinated synchronized two-mixer dispatch batches to guarantee uninterrupted tremie flow."
    ],
    "outcomes": [
      "All piles successfully bored and concreted without cage flotation or necking defects.",
      "Integrity tests confirmed continuous, sound concrete shaft geometry throughout depth."
    ],
    "drawings": [
      {
        "title": "Pile Layout & Grid Coordinate Sheet",
        "description": "Borehole centers, cut-off levels, and pile cap arrangements.",
        "type": "Foundation Layout"
      },
      {
        "title": "Circular Pile Cage Reinforcement Schedule",
        "description": "Main longitudinal bars, helical spiral pitch, and lap splices.",
        "type": "Structural Detail"
      }
    ],
    "sitePhotos": [
      {
        "caption": "Rotary hydraulic piling rig hoisting circular rebar cage with spacers",
        "stage": "Cage Lowering",
        "image": "/images/site/site-44.jpg"
      },
      {
        "caption": "Night concreting and pile cage alignment under floodlights",
        "stage": "Night Concreting",
        "image": "/images/site/site-46.jpg"
      },
      {
        "caption": "Borehole drilling rig setup and workforce briefing",
        "stage": "Rig Alignment",
        "image": "/images/site/site-40.jpg"
      }
    ]
  },
  {
    "id": "residential-design",
    "slug": "residential-architectural-structural-detailing",
    "number": "03",
    "title": "Residential Structural Planning & Column Shuttering",
    "subtitle": "AutoCAD 2D Drafting, Column Box Formwork & Municipal Compliance",
    "category": "BUILDINGS",
    "location": "Kathmandu Valley, Nepal",
    "firm": "Ujyalo Consultancy & Site Practice",
    "duration": "March 2024 – July 2024",
    "role": "Engineering Intern / Site Supervisor",
    "tools": [
      "AutoCAD 2D",
      "MS Excel",
      "Nepal National Building Code (NBC)",
      "Auto Level"
    ],
    "image": "/images/site/site-36.jpg",
    "summary": "Preparation of comprehensive architectural floor plans, municipal sanction drawings, foundation layouts, and site shuttering inspection for urban residential buildings.",
    "facts": [
      {
        "label": "PROJECT TYPE",
        "value": "Residential RCC Frame Structures"
      },
      {
        "label": "LOCATION",
        "value": "Kathmandu Valley, Nepal"
      },
      {
        "label": "STANDARDS",
        "value": "Nepal National Building Code (NBC 105 / 205)"
      },
      {
        "label": "ROLE",
        "value": "Drafting & Site Inspection"
      },
      {
        "label": "KEY FOCUS",
        "value": "Column Detailing, Shuttering & BOQ"
      }
    ],
    "overview": "Urban housing in Nepal requires rigorous compliance with the Nepal National Building Code (NBC), seismic detailing mandates, and municipal bylaws. At Ujyalo Engineering Consultancy and associated residential sites, I contributed to municipal permit sets, developing structural framing layouts, and inspecting column formwork shuttering.",
    "myRole": "Assisted with 2D drafting, structural detailing of isolated column footings, plinth beams, staircase reinforcement, and checking column formwork plumbness and tie bracing on site.",
    "responsibilities": [
      "Drafted 2D architectural drawings conforming to municipal sanction rules.",
      "Prepared foundation layout drawings, column schedules, and ductile detailing of beam-column joints following NBC guidelines.",
      "Inspected column shuttering box bracing, tie rods, and vertical plumb lines on site before concrete pouring.",
      "Prepared comprehensive Bill of Quantities (BOQ) covering earthwork, PCC, RCC, and steel reinforcement."
    ],
    "technicalApproach": [
      "Site dimension verification prior to drafting architectural schemes.",
      "Check plumbness of column boxes using plumb bob from two perpendicular directions.",
      "Systematic quantity takeoff spreadsheets developed in Excel cross-referencing DUDBC District Rates."
    ],
    "challenges": [
      "Irregular urban plot boundaries requiring innovative column layouts to avoid eccentric foundation loads.",
      "Preventing formwork bulging under lateral hydrostatic pressure of fresh concrete."
    ],
    "solutions": [
      "Utilized combined footings and strap beams along property boundary lines.",
      "Enforced heavy steel props and external clamp collars at 400mm vertical centers on column formwork."
    ],
    "outcomes": [
      "Permit drawings approved by municipal authorities without structural objections.",
      "Zero formwork deformation or bulging during vertical column concrete casting."
    ],
    "drawings": [
      {
        "title": "Municipal Approval Floor Plans",
        "description": "Ground and typical floor layouts with opening schedules.",
        "type": "Architectural CAD"
      },
      {
        "title": "Foundation & Plinth Beam Layout",
        "description": "Isolated and strap footing plans with reinforcement tie schedules.",
        "type": "Structural Layout"
      }
    ],
    "sitePhotos": [
      {
        "caption": "Column shuttering box with diagonal steel props and tie clamps",
        "stage": "Formwork Check",
        "image": "/images/site/site-36.jpg"
      },
      {
        "caption": "Wall reinforcement cages and scaffolding setup",
        "stage": "Rebar Detailing",
        "image": "/images/site/site-20.jpg"
      }
    ]
  },
  {
    "id": "survey-geomatics",
    "slug": "precision-surveying-geomatic-operations",
    "number": "04",
    "title": "Precision Field Surveying & Geomatic Setting Out",
    "subtitle": "Total Station Traversing, Excavation Setting Out & Benchmark Transfer",
    "category": "SURVEYING",
    "location": "Kathmandu & Lumbini Province, Nepal",
    "firm": "Sarathi Construction / Field Practice",
    "duration": "Ongoing Field Practice",
    "role": "Lead Field Surveyor",
    "tools": [
      "Electronic Total Station",
      "Auto Level",
      "Prism Poles",
      "AutoCAD Civil",
      "Excel"
    ],
    "image": "/images/site/site-10.jpg",
    "summary": "Precision geodetic setting out, closed-traverse surveying, level network establishment, and construction alignment across wide excavation sites.",
    "facts": [
      {
        "label": "INSTRUMENTS",
        "value": "Total Station, Auto Level, Digital Theodolite"
      },
      {
        "label": "ACCURACY",
        "value": "High-precision second-order leveling"
      },
      {
        "label": "OPERATIONS",
        "value": "Traverse, Staking, Longitudinal Profiles"
      },
      {
        "label": "APPLICATIONS",
        "value": "Tanks, Trenches, Roads & Pipelines"
      }
    ],
    "overview": "Accurate geodetic control is the foundation of any civil engineering project. This ongoing practice covers the field execution of closed traverses, high-accuracy Auto Level loops, structural center-line marking, and pipeline invert gradient control under challenging site conditions.",
    "myRole": "Lead instrumentalist and site surveyor. Setting instrument stations, performing backsight/foresight checks, computing coordinates, and physically staking out construction center lines.",
    "responsibilities": [
      "Carried out closed-traverse surveying to establish horizontal and vertical control points around project boundaries.",
      "Executed precise differential leveling using Auto Level to transfer National Geodetic Benchmarks to internal site benchmarks.",
      "Staked out building column centers, retaining wall footings, and pipeline slope alignments with millimeter precision.",
      "Prepared contour maps and cross-sectional profile sheets in CAD for earthwork cut-and-fill volume estimations."
    ],
    "technicalApproach": [
      "Rigorous two-peg test calibration on Auto Level prior to critical leveling runs to eliminate collimation error.",
      "Dual-point orientation using known control points for Total Station setup with coordinate verification before staking out.",
      "Calculation of closing errors and systematic distribution using Bowditch Rule."
    ],
    "challenges": [
      "Dense urban obstructions and uneven terrain disrupting lines of sight.",
      "Preserving temporary benchmarks in active heavy-machinery excavation areas."
    ],
    "solutions": [
      "Constructed protected concrete benchmark pillars with steel pins away from haul roads.",
      "Employed intermediate traverse turning points to navigate around physical obstacles while maintaining closed-loop integrity."
    ],
    "outcomes": [
      "Zero setting-out errors across critical deep foundations and water tank bases.",
      "Accurate cut/fill volume calculations that eliminated contractor dispute over earthwork quantities."
    ],
    "drawings": [
      {
        "title": "Site Topographical & Contour Plan",
        "description": "1-meter interval contours and existing spot levels.",
        "type": "Topographical Plan"
      },
      {
        "title": "Road & Trench Longitudinal Profile",
        "description": "Natural ground level vs. proposed design bed levels.",
        "type": "L-Section & Cross Sections"
      }
    ],
    "sitePhotos": [
      {
        "caption": "Wide excavation bed setting out with center-line string lines and pegs",
        "stage": "Site Setting Out",
        "image": "/images/site/site-10.jpg"
      },
      {
        "caption": "Structural steel rebar delivery inspection with logistics team",
        "stage": "Material Delivery",
        "image": "/images/site/site-08.jpg"
      }
    ]
  },
  {
    "id": "academic-seismic-design",
    "slug": "seismic-analysis-and-structural-design-rcc-building",
    "number": "05",
    "title": "Seismic Analysis & Structural Design of Multi-Storey RCC Building",
    "subtitle": "ETABS 3D Finite Element Modeling, Dynamic Response Spectrum & NBC 105 Compliance",
    "category": "ACADEMIC",
    "location": "Pokhara University / LEMSC",
    "firm": "Lumbini Engineering College (Bachelor Capstone)",
    "duration": "Academic Final Year Project",
    "role": "Lead Structural Modeler & Analyst",
    "tools": [
      "ETABS",
      "AutoCAD 2D",
      "MS Excel",
      "IS 1893:2016",
      "IS 456:2000",
      "NBC 105:2020"
    ],
    "image": "/images/site/site-20.jpg",
    "summary": "Comprehensive structural analysis and ductile seismic design of a multi-storey commercial-residential reinforced concrete framed building following Nepal National Building Code (NBC 105:2020).",
    "facts": [
      {
        "label": "PROJECT TYPE",
        "value": "Academic Capstone / Structural Analysis"
      },
      {
        "label": "INSTITUTION",
        "value": "Lumbini Engineering College (Pokhara Univ.)"
      },
      {
        "label": "FRAMING SYSTEM",
        "value": "Special Moment Resisting Frame (SMRF)"
      },
      {
        "label": "SOFTWARE",
        "value": "ETABS v19 & AutoCAD"
      },
      {
        "label": "SEISMIC CODE",
        "value": "NBC 105:2020 & IS 1893:2016"
      },
      {
        "label": "FOCUS",
        "value": "Base Shear, Inter-Storey Drift & Ductile Detailing"
      }
    ],
    "overview": "As the final year capstone thesis at Lumbini Engineering, Management and Science College (affiliated with Pokhara University), this project delivered an end-to-end structural design of a multi-storey reinforced concrete framed building situated in high-seismicity zone Nepal. The investigation encompassed architectural grid harmonization, preliminary member sizing, dead and live load assessments, Equivalent Static and Response Spectrum dynamic seismic analyses in ETABS, member design, and ductile reinforcement detailing.",
    "myRole": "Spearheaded 3D finite element structural modeling in ETABS, defined material grades (M25 concrete, Fe500 steel), assigned diaphragm constraints, verified modal participation mass ratios, calculated design base shears, and prepared structural detailing sheets.",
    "responsibilities": [
      "Generated three-dimensional mathematical model in ETABS with rigid floor diaphragm idealizations.",
      "Calculated gravity dead loads (self-weight, masonry infill, floor finishes) and live loads in accordance with IS 875 (Parts 1 & 2).",
      "Conducted Equivalent Lateral Force (ELF) and Response Spectrum analysis under seismic parameters of NBC 105:2020.",
      "Verified serviceability criteria including maximum lateral deflection, inter-storey drift limit (within 0.004 h), and soft-storey stiffness regularity.",
      "Executed capacity design of critical frame members ensuring Strong-Column Weak-Beam ductile hierarchy.",
      "Drafted reinforcement schedules for isolated column footings, strap beams, plinth beams, slabs, and column-beam moment joints in AutoCAD per IS 13920."
    ],
    "technicalApproach": [
      "Rigid floor diaphragm assigned at each floor level to simulate in-plane slab rigidity.",
      "Response Spectrum function configured matching seismic zone factors (Zone V, Z=0.36) and medium soil parameters.",
      "Modal analysis confirmed >90% mass participation achieved within the first 12 vibration modes.",
      "P-Delta geometric non-linearity checked to ensure secondary moments remained within allowable threshold."
    ],
    "challenges": [
      "Irregular floor plan leading to minor torsional irregularity under asymmetric lateral seismic excitation.",
      "Ensuring inter-storey drift ratios in the upper levels satisfied the tight 0.004 limit under NBC 105:2020 without over-sizing column dimensions."
    ],
    "solutions": [
      "Strategically optimized peripheral column dimensions (from 400x400mm to 450x450mm) to increase torsional stiffness and center-of-mass/rigidity alignment.",
      "Utilized ductile shear stirrups with 135-degree seismic hooks and 10d extensions in confinement zones following IS 13920."
    ],
    "outcomes": [
      "Thesis and complete calculation dossier defended before university external engineering examiners.",
      "Full set of structural permit drawings produced, complete with Bar Bending Schedules and material quantity take-offs.",
      "Solidified proficiency in structural engineering software and seismic code compliance."
    ],
    "drawings": [
      {
        "title": "ETABS 3D Finite Element Frame Model",
        "description": "Three-dimensional perspective showing member extrusion, loading cases, and nodal displacements.",
        "type": "Structural Analytical Model"
      },
      {
        "title": "Beam-Column Joint Ductile Reinforcement Detail",
        "description": "Special confining rebar spacing, development lengths (Ld), and 135-degree seismic hook details per IS 13920.",
        "type": "Ductile Detailing Sheet"
      },
      {
        "title": "Foundation Footing & Plinth Grid Layout",
        "description": "Isolated footings with combined boundary footings, tie beams, and column axial load schedule.",
        "type": "Structural Foundation Drawing"
      }
    ],
    "sitePhotos": [
      {
        "caption": "Reinforced concrete wall and frame reinforcement detailing check",
        "stage": "Structural Execution",
        "image": "/images/site/site-20.jpg"
      },
      {
        "caption": "Column shuttering and vertical alignment verification on residential frame build",
        "stage": "Frame Supervision",
        "image": "/images/site/site-36.jpg"
      }
    ]
  }
];
