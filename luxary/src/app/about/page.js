import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import SectionFooterCTA from "@/components/ui/SectionFooterCTA";
import SectionHeader from "@/components/ui/SectionHeader";
import MotionSectionReveal from "@/components/motion/MotionSectionReveal";

export const metadata = {
  title: "About | Luxary",
  description:
    "Learn about Luxary, a luxury discovery platform focused on heritage, storytelling, and craftsmanship.",
};

const philosophyPillars = [
  {
    title: "Heritage",
    description:
      "We believe luxury is a dialogue between the past and the present. We prioritize houses that maintain a deep connection to their archives and lineage.",
  },
  {
    title: "Storytelling",
    description:
      "A product is a culmination of a narrative. We focus on the founders, the milestones, and the human ambition that define iconic Maisons.",
  },
  {
    title: "Craftsmanship",
    description:
      "We celebrate the 'savoir-faire'—the specialized knowledge and artisan skills that turn raw materials into objects of cultural value.",
  },
  {
    title: "Cultural Significance",
    description:
      "Luxury does not exist in a vacuum. We explore how these houses influence art, design, and history, and how they evolve with the world.",
  },
];

const curationTypes = [
  {
    title: "Brands",
    description: "Curated profiles of Maisons defined by craft and legacy.",
  },
  {
    title: "Stories",
    description: "In-depth explorations of brand history and innovation.",
  },
  {
    title: "Editorial",
    description: "Thoughtful perspectives on the evolving luxury landscape.",
  },
  {
    title: "Experiences",
    description: "Immersive AR and VR journeys into the heart of luxury.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-background py-20 sm:py-24 lg:py-28">
        <Container>
          <MotionSectionReveal>
            <div className="max-w-3xl">
              <Badge variant="accent">Our Mission</Badge>
              <h1 className="mt-6 font-display text-5xl font-light tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                About Luxary
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
                Luxary is a luxury discovery platform dedicated to the heritage,
                storytelling, and craftsmanship behind the world&apos;s most
                iconic houses. We are not a marketplace; we are a destination
                for education and inspiration.
              </p>
              <div className="mt-8">
                <Button href="/brands" variant="primary">
                  Explore the Ecosystem
                </Button>
              </div>
            </div>
          </MotionSectionReveal>
        </Container>
      </section>

      {/* Our Philosophy */}
      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <Container>
          <MotionSectionReveal>
            <SectionHeader
              heading="Our Philosophy"
              description="Our approach is guided by principles that value time, expertise, and depth over immediate consumption."
            />
          </MotionSectionReveal>

          <div className="mt-12 grid gap-12 sm:grid-cols-2 lg:mt-16">
            {philosophyPillars.map((pillar) => (
              <MotionSectionReveal key={pillar.title}>
                <div className="flex flex-col">
                  <h3 className="font-display text-2xl font-light text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted">
                    {pillar.description}
                  </p>
                </div>
              </MotionSectionReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* What We Curate */}
      <section className="bg-section-alt py-16 sm:py-20 lg:py-24">
        <Container>
          <MotionSectionReveal>
            <SectionHeader
              heading="What We Curate"
              description="Luxary organizes knowledge into distinct categories of exploration, ensuring a comprehensive view of the luxury world."
            />
          </MotionSectionReveal>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
            {curationTypes.map((item) => (
              <MotionSectionReveal key={item.title}>
                <div className="flex flex-col border-l border-border/50 pl-6">
                  <h3 className="font-display text-xl font-light text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </MotionSectionReveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Editorial Standards */}
      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <MotionSectionReveal>
            <div className="max-w-3xl">
              <h2 className="font-display text-3xl font-light tracking-tight text-foreground sm:text-4xl">
                Editorial Standards
              </h2>
              <p className="mt-6 text-base leading-relaxed text-muted">
                Our content is produced with a commitment to authenticity and
                rigor. We prioritize long-form storytelling and visual
                excellence, ensuring that every brand story and craftsmanship
                highlight meets the standards of the houses we feature.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Authenticity and historical accuracy",
                  "Emphasis on heritage and legacy",
                  "Focus on craftsmanship and technical expertise",
                  "Exploration of cultural relevance",
                  "High-quality, immersive storytelling",
                ].map((item) => (
                  <li key={item} className="flex items-start text-muted">
                    <span className="mr-3 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </MotionSectionReveal>

          <MotionSectionReveal className="mt-16">
            <SectionFooterCTA
              href="/sign-up"
              label="Join the community to save your discoveries"
            />
          </MotionSectionReveal>
        </Container>
      </section>
    </div>
  );
}
