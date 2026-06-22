import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ContentCardGrid from "@/components/ui/ContentCardGrid";
import SectionFooterCTA from "@/components/ui/SectionFooterCTA";
import SectionHeader from "@/components/ui/SectionHeader";
import ExperienceCard from "@/components/cards/ExperienceCard";
import ExperiencePreviewItem from "@/components/cards/ExperiencePreviewItem";
import MotionSectionReveal from "@/components/motion/MotionSectionReveal";

export const metadata = {
  title: "Experiences | Luxary",
  description:
    "Discover immersive luxury experiences across heritage destinations, ateliers, cultural journeys, architecture, and craftsmanship.",
};

const experienceTypeLabels = {
  archive: "Private Archive",
  atelier: "Atelier Visit",
  journey: "Cultural Journey",
  architecture: "Architectural Discovery",
  craft: "Craft Encounter",
  heritage: "Heritage Destination",
};

const featuredExperience = {
  slug: "inside-the-maison-archive",
  title: "Inside the Maison Archive",
  summary:
    "A quiet journey through sketches, prototypes, founder records, and the preserved ideas that continue to guide a house.",
  href: "/experiences/inside-the-maison-archive",
  experienceType: "archive",
  image: {
    src: "/images/homepage/MAISON.jpg",
    alt: "Private luxury archive with sketches, ledgers, and heritage objects",
  },
};

const curatedExperiences = [
  {
    slug: "paris-atelier-morning",
    title: "A Morning in the Paris Atelier",
    summary:
      "Follow the rhythm of pattern tables, hand finishing, material review, and the disciplined calm of artisan work.",
    // href: "/experiences/paris-atelier-morning",
    experienceType: "atelier",
    image: {
      src: "/images/experiences/morning.jpg",
      alt: "Paris atelier table with fabric, sketches, and artisan tools",
    },
  },
  {
    slug: "grand-hotel-cultural-route",
    title: "Grand Hotel Cultural Route",
    summary:
      "Trace the architecture, rituals, and social memory of landmark hotels that shaped luxury travel.",
    // href: "/experiences/grand-hotel-cultural-route",
    experienceType: "journey",
    image: {
      src: "/images/experiences/hotel.jpg",
      alt: "Elegant heritage hotel interior with architectural detail",
    },
  },
  {
    slug: "goodwood-craft-perspective",
    title: "Goodwood Craft Perspective",
    summary:
      "An editorial look at bespoke automotive making, from wood veneer selection to hand-finished interiors.",
    // href: "/experiences/goodwood-craft-perspective",
    experienceType: "craft",
    image: {
      src: "/images/experiences/goodwood.jpg",
      alt: "Bespoke automotive interior craftsmanship and refined materials",
    },
  },
  {
    slug: "villa-and-garden-heritage-walk",
    title: "Villa & Garden Heritage Walk",
    summary:
      "Explore the relationship between landscape, architecture, patronage, and the culture of private refinement.",
    // href: "/experiences/villa-and-garden-heritage-walk",
    experienceType: "architecture",
    image: {
      src: "/images/experiences/villa.jpg",
      alt: "Historic villa and garden architecture for cultural discovery",
    },
  },
  {
    slug: "watchmaking-workbench-study",
    title: "Watchmaking Workbench Study",
    summary:
      "A close view of horological patience, precision, and the specialist knowledge behind mechanical time.",
    // href: "/experiences/watchmaking-workbench-study",
    experienceType: "craft",
    image: {
      src: "/images/experiences/making.jpg",
      alt: "Watchmaking workbench with tools and mechanical movement details",
    },
  },
  {
    slug: "heritage-house-city-map",
    title: "Heritage House City Map",
    summary:
      "Discover the addresses, ateliers, salons, and cultural sites that shaped enduring luxury houses.",
    // href: "/experiences/heritage-house-city-map",
    experienceType: "heritage",
    image: {
      src: "/images/experiences/heri.jpg",
      alt: "Historic city architecture connected to luxury heritage houses",
    },
  },
];

const immersiveJourneys = [
  {
    slug: "private-archive-notes",
    title: "Private Archive Notes",
    experienceType: "archive",
    // href: "/experiences/private-archive-notes",
    status: "live",
  },
  {
    slug: "silk-atelier-encounter",
    title: "Silk Atelier Encounter",
    experienceType: "atelier",
    // href: "/experiences/silk-atelier-encounter",
    status: "live",
  },
  {
    slug: "architecture-of-arrival",
    title: "Architecture of Arrival",
    experienceType: "architecture",
    // href: "/experiences/architecture-of-arrival",
    status: "live",
  },
  {
    slug: "craftsmanship-demonstration-series",
    title: "Craftsmanship Demonstration Series",
    experienceType: "craft",
    // href: "/experiences/craftsmanship-demonstration-series",
    status: "coming-soon",
  },
  {
    slug: "heritage-destination-journal",
    title: "Heritage Destination Journal",
    experienceType: "journey",
    // href: "/experiences/heritage-destination-journal",
    status: "live",
  },
];

function getTypeLabel(experience) {
  return experienceTypeLabels[experience.experienceType];
}

export default function ExperiencesPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-background py-20 sm:py-24 lg:py-28">
        <Container>
          <MotionSectionReveal>
            <div className="max-w-3xl">
              <Badge variant="accent">Immersive Discovery</Badge>
              <h1 className="mt-6 font-display text-5xl font-light tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Experiences
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
                Step into heritage destinations, private archives, ateliers,
                architectural spaces, and craft encounters that reveal luxury
                through culture, access, and storytelling.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#featured-experience" variant="primary">
                  Explore Featured
                </Button>
                <Button href="#immersive-journeys" variant="secondary">
                  View Journeys
                </Button>
              </div>
            </div>
          </MotionSectionReveal>
        </Container>
      </section>

      <section
        id="featured-experience"
        aria-labelledby="featured-experience-heading"
        className="bg-surface py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <MotionSectionReveal>
            <SectionHeader
              heading="Featured Experience"
              description="An immersive view into the archives, spaces, and preserved gestures behind luxury heritage."
              headingId="featured-experience-heading"
            />
          </MotionSectionReveal>

          <MotionSectionReveal className="mt-10 max-w-5xl lg:mt-14">
            <ExperienceCard
              experience={featuredExperience}
              typeLabel={getTypeLabel(featuredExperience)}
              featured
            />
          </MotionSectionReveal>
        </Container>
      </section>

      <section
        aria-labelledby="curated-experiences-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <MotionSectionReveal>
            <SectionHeader
              heading="Curated Experiences"
              description="Editorial pathways through heritage, travel, culture, architecture, and craftsmanship."
              headingId="curated-experiences-heading"
            />
          </MotionSectionReveal>

          <MotionSectionReveal className="mt-10 lg:mt-14">
            <ContentCardGrid columns={3}>
              {curatedExperiences.map((experience) => (
                <ExperienceCard
                  key={experience.slug}
                  experience={experience}
                  typeLabel={getTypeLabel(experience)}
                />
              ))}
            </ContentCardGrid>
          </MotionSectionReveal>
        </Container>
      </section>

      <section
        id="immersive-journeys"
        aria-labelledby="immersive-journeys-heading"
        className="bg-section-alt py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <MotionSectionReveal>
            <SectionHeader
              heading="Immersive Journeys"
              description="Additional discovery paths into private archives, ateliers, craft demonstrations, and cultural places."
              headingId="immersive-journeys-heading"
            />
          </MotionSectionReveal>

          <MotionSectionReveal className="mt-10 lg:mt-14">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {immersiveJourneys.map((experience) => (
                <ExperiencePreviewItem
                  key={experience.slug}
                  experience={experience}
                  typeLabel={getTypeLabel(experience)}
                />
              ))}
            </div>
          </MotionSectionReveal>

          <SectionFooterCTA href="/about" label="Learn About Luxary" />
        </Container>
      </section>
    </div>
  );
}
