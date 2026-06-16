import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionFooterCTA from "@/components/ui/SectionFooterCTA";
import CategoryTile from "@/components/cards/CategoryTile";
import MotionSectionReveal from "@/components/motion/MotionSectionReveal";

export default function ExploreByCategorySection({ content }) {
  return (
    <section
      aria-labelledby="categories-heading"
      className="py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <MotionSectionReveal>
          <SectionHeader
            heading={content.heading}
            description={content.description}
            headingId="categories-heading"
          />
        </MotionSectionReveal>

        <MotionSectionReveal delay={0.1}>
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:mt-14 lg:gap-8">
            {content.categories.map((category) => (
              <CategoryTile key={category.slug} category={category} />
            ))}
          </div>
        </MotionSectionReveal>

        <SectionFooterCTA
          href={content.sectionCTA.href}
          label={content.sectionCTA.label}
        />
      </Container>
    </section>
  );
}
