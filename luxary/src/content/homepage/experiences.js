import { cta } from "@/config/cta";

export const experiencesContent = {
  heading: "Immersive Experiences",
  description: "Explore luxury beyond traditional content.",
  introduction:
    "Step inside virtual ateliers, interactive timelines, and immersive journeys that bring luxury heritage to life.",
  sectionCTA: cta.exploreExperiencesSection,
  featuredExperience: {
    slug: "rolex-timeline",
    title: "Rolex Interactive Timeline",
    summary:
      "Journey through over a century of horological milestones — from the Oyster case to the deepest ocean depths.",
    href: "/experiences/rolex-timeline",
    experienceType: "timeline",
    image: {
      src: "https://picsum.photos/800/600?random=3",
      alt: "Interactive timeline experience exploring Rolex horological heritage",
    },
  },
  experiencePreviews: [
    {
      slug: "lv-atelier-ar",
      title: "Louis Vuitton Virtual Atelier",
      experienceType: "ar",
      href: "/experiences/louis-vuitton-atelier",
      status: "live",
    },
    {
      slug: "rolls-royce-virtual-tour",
      title: "Rolls-Royce Goodwood Virtual Tour",
      experienceType: "virtual-tour",
      href: "/experiences/rolls-royce-goodwood-tour",
      status: "live",
    },
    {
      slug: "dior-interactive-timeline",
      title: "Dior Heritage Timeline",
      experienceType: "timeline",
      href: "/experiences/dior-heritage-timeline",
      status: "live",
    },
    {
      slug: "future-vr-showroom",
      title: "Future VR Showroom",
      experienceType: "vr-showroom",
      href: "/experiences/future-vr-showroom",
      status: "coming-soon",
    },
  ],
};

export const experienceTypeLabels = {
  ar: "AR Experience",
  "virtual-tour": "Virtual Tour",
  timeline: "Interactive Timeline",
  "vr-showroom": "VR Showroom",
};
