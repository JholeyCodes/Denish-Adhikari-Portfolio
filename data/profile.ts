export interface ProfileData {
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

export const profileData: ProfileData = {
  name: "Er. Denish Adhikari",
  title: "Civil Site Engineer & Surveyor",
  specializations: [
    "Civil Site Engineer",
    "Surveyor (Total Station / Auto Level)",
    "RCC Structural Execution Specialist",
    "Construction Quality Control & BBS",
  ],
  necRegistration: "NEC Reg. No. 79422 \"Civil\"",
  necDate: "October 2024",
  phone: "+977 9867730557",
  email: "den.adh0709@gmail.com",
  location: "Kathmandu, Nepal",
  whatsapp: "https://wa.me/9779867730557",
  linkedin: "https://www.linkedin.com/in/denish-adhikari/",
  github: "https://github.com/JholeyCodes",
  bioSummary:
    "I am a licensed Civil Engineer from Nepal (NEC Registered) with proven experience supervising heavy RCC construction, Total Station and Auto Level setting out, and structural compliance. Having coordinated 40–50 site laborers at Sarathi Construction on wastewater infrastructure, I bridge the gap between design drawings, structural integrity, and day-to-day site execution.",
  bioQuote:
    "Designing and executing safe, compliant, and durable infrastructure where technical precision and structural safety come first.",
  workforceCount: "40–50+",
  surveyCount: "100+",
  experienceYears: "2+",
  education: [
    {
      degree: "Bachelor in Civil Engineering",
      institution: "Lumbini Engineering, Management and Science College, Pokhara University",
      period: "Sep 2018 – Feb 2024",
    },
    {
      degree: "Higher Secondary (+2 Science)",
      institution: "Tilottama Secondary School, Rupandehi",
      period: "Completed 2018",
    },
    {
      degree: "School Leaving Certificate (SLC)",
      institution: "Bethel English Boarding Secondary School",
      period: "Completed 2016",
    },
  ],
};
