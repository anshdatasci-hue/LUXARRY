import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionFooterCTA from "@/components/ui/SectionFooterCTA";
import ContentCardGrid from "@/components/ui/ContentCardGrid";
import BrandCard from "@/components/cards/BrandCard";
import MotionSectionReveal from "@/components/motion/MotionSectionReveal";

export default function FeaturedBrandsSection({ content }) {
  return (
    <section
      aria-labelledby="featured-brands-heading"
      className="bg-surface py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <MotionSectionReveal>
          <SectionHeader
            heading={content.heading}
            description={content.description}
            headingId="featured-brands-heading"
          />
        </MotionSectionReveal>

        <MotionSectionReveal delay={0.1}>
          <ContentCardGrid columns={4} className="mt-10 lg:mt-14">
            {content.brands.map((brand, index) => (
              <BrandCard key={brand.slug} brand={brand} priority={index < 2} />
            ))}
          </ContentCardGrid>
        </MotionSectionReveal>

        <SectionFooterCTA
          href={content.sectionCTA.href}
          label={content.sectionCTA.label}
        />
      </Container>
    </section>
  );
}
