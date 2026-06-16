import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ContentCardGrid from "@/components/ui/ContentCardGrid";
import SectionFooterCTA from "@/components/ui/SectionFooterCTA";
import SectionHeader from "@/components/ui/SectionHeader";
import EditorialCard from "@/components/cards/EditorialCard";
import MotionSectionReveal from "@/components/motion/MotionSectionReveal";

export const metadata = {
  title: "Editorial | Luxary",
  description:
    "Read Luxary editorial perspectives on luxury culture, design thinking, craftsmanship, heritage, travel, art, and creative leadership.",
};

const editorsPick = {
  slug: "luxury-as-cultural-intelligence",
  title: "Luxury as Cultural Intelligence",
  summary:
    "A long-form perspective on how enduring houses translate heritage, restraint, craft, and imagination into cultural relevance.",
  href: "/editorial/luxury-as-cultural-intelligence",
  image: {
    src: "https://picsum.photos/960/600?random=31",
    alt: "Editorial scene with archival materials, design references, and cultural objects",
  },
};

const perspectiveArticles = [
  {
    slug: "design-thinking-in-the-maison",
    title: "Design Thinking in the Maison",
    summary:
      "How creative direction, proportion, material judgment, and restraint shape the identity of a luxury house.",
    href: "/editorial/design-thinking-in-the-maison",
    image: {
      src: "https://picsum.photos/800/600?random=32",
      alt: "Design studio table with sketches and refined material samples",
    },
  },
  {
    slug: "architecture-of-quiet-prestige",
    title: "The Architecture of Quiet Prestige",
    summary:
      "A study of spaces where luxury is expressed through scale, silence, craft, and considered detail.",
    href: "/editorial/architecture-of-quiet-prestige",
    image: {
      src: "https://picsum.photos/800/600?random=33",
      alt: "Refined architectural interior with calm luxury details",
    },
  },
  {
    slug: "creative-leadership-and-continuity",
    title: "Creative Leadership & Continuity",
    summary:
      "Why the strongest creative directors interpret a house before they attempt to transform it.",
    href: "/editorial/creative-leadership-and-continuity",
    image: {
      src: "https://picsum.photos/800/600?random=34",
      alt: "Editorial workspace representing creative leadership and heritage research",
    },
  },
  {
    slug: "travel-as-luxury-memory",
    title: "Travel as Luxury Memory",
    summary:
      "From grand hotels to private journeys, travel has long shaped the rituals and symbols of luxury culture.",
    href: "/editorial/travel-as-luxury-memory",
    image: {
      src: "https://picsum.photos/800/600?random=35",
      alt: "Elegant travel setting with heritage luggage and architectural detail",
    },
  },
  {
    slug: "art-patronage-and-modern-maison",
    title: "Art Patronage and the Modern Maison",
    summary:
      "How houses engage artists, museums, and cultural institutions to extend meaning beyond the atelier.",
    href: "/editorial/art-patronage-and-modern-maison",
    image: {
      src: "https://picsum.photos/800/600?random=36",
      alt: "Museum gallery scene connecting luxury houses with contemporary art",
    },
  },
  {
    slug: "the-new-language-of-rarity",
    title: "The New Language of Rarity",
    summary:
      "Rarity today is less about scarcity alone and more about time, authorship, preservation, and cultural depth.",
    href: "/editorial/the-new-language-of-rarity",
    image: {
      src: "https://picsum.photos/800/600?random=37",
      alt: "Curated editorial still life of rare materials and archival references",
    },
  },
];

const cultureCraftArticles = [
  {
    slug: "craftsmanship-after-modernity",
    title: "Craftsmanship After Modernity",
    summary:
      "An essay on why handwork still matters in a world shaped by speed, systems, and digital precision.",
    href: "/editorial/craftsmanship-after-modernity",
    image: {
      src: "https://picsum.photos/800/600?random=38",
      alt: "Artisan hands working with refined tools in a modern atelier",
    },
  },
  {
    slug: "heritage-without-nostalgia",
    title: "Heritage Without Nostalgia",
    summary:
      "The maisons that endure are those able to treat history as a living discipline rather than a decorative mood.",
    href: "/editorial/heritage-without-nostalgia",
    image: {
      src: "https://picsum.photos/800/600?random=39",
      alt: "Heritage archive with contemporary design references",
    },
  },
  {
    slug: "cultural-influence-of-savoir-faire",
    title: "The Cultural Influence of Savoir-Faire",
    summary:
      "How specialist knowledge shapes taste, preserves regional identity, and gives luxury its intellectual weight.",
    href: "/editorial/cultural-influence-of-savoir-faire",
    image: {
      src: "https://picsum.photos/800/600?random=40",
      alt: "Traditional craft tools and materials arranged for editorial study",
    },
  },
];

export default function EditorialPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-background py-20 sm:py-24 lg:py-28">
        <Container>
          <MotionSectionReveal>
            <div className="max-w-3xl">
              <Badge variant="accent">Magazine</Badge>
              <h1 className="mt-6 font-display text-5xl font-light tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Editorial
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
                Read perspectives on luxury culture, design thinking,
                craftsmanship, heritage, architecture, travel, art, and the
                creative leadership behind enduring houses.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#editors-pick" variant="primary">
                  Read Editor&apos;s Pick
                </Button>
                <Button href="#culture-craft" variant="secondary">
                  Explore Culture & Craft
                </Button>
              </div>
            </div>
          </MotionSectionReveal>
        </Container>
      </section>

      <section
        id="editors-pick"
        aria-labelledby="editors-pick-heading"
        className="bg-surface py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <MotionSectionReveal>
            <SectionHeader
              heading="Editor's Pick"
              description="A long-form editorial perspective selected for its cultural depth and point of view."
              headingId="editors-pick-heading"
            />
          </MotionSectionReveal>

          <MotionSectionReveal className="mt-10 max-w-5xl lg:mt-14">
            <EditorialCard article={editorsPick} featured />
          </MotionSectionReveal>
        </Container>
      </section>

      <section
        aria-labelledby="perspectives-analysis-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <MotionSectionReveal>
            <SectionHeader
              heading="Perspectives & Analysis"
              description="Commentary on the ideas, spaces, creative decisions, and cultural forces shaping luxury today."
              headingId="perspectives-analysis-heading"
            />
          </MotionSectionReveal>

          <MotionSectionReveal className="mt-10 lg:mt-14">
            <ContentCardGrid columns={3}>
              {perspectiveArticles.map((article) => (
                <EditorialCard key={article.slug} article={article} />
              ))}
            </ContentCardGrid>
          </MotionSectionReveal>
        </Container>
      </section>

      <section
        id="culture-craft"
        aria-labelledby="culture-craft-heading"
        className="bg-section-alt py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <MotionSectionReveal>
            <SectionHeader
              heading="Culture & Craft"
              description="Essays on savoir-faire, heritage, cultural influence, and the slow intelligence of exceptional making."
              headingId="culture-craft-heading"
            />
          </MotionSectionReveal>

          <MotionSectionReveal className="mt-10 lg:mt-14">
            <ContentCardGrid columns={3}>
              {cultureCraftArticles.map((article) => (
                <EditorialCard key={article.slug} article={article} />
              ))}
            </ContentCardGrid>
          </MotionSectionReveal>

          <SectionFooterCTA href="/experiences" label="Explore Experiences" />
        </Container>
      </section>
    </div>
  );
}
