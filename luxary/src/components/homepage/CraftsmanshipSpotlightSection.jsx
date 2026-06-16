import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionFooterCTA from "@/components/ui/SectionFooterCTA";
import ContentCardGrid from "@/components/ui/ContentCardGrid";
import CraftTopicTile from "@/components/cards/CraftTopicTile";
import MotionSectionReveal from "@/components/motion/MotionSectionReveal";

export default function CraftsmanshipSpotlightSection({ content }) {
  return (
    <section
      aria-labelledby="craftsmanship-heading"
      className="bg-section-alt py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <MotionSectionReveal>
          <SectionHeader
            heading={content.heading}
            description={content.description}
            headingId="craftsmanship-heading"
          />
          {content.intro && (
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted">
              {content.intro}
            </p>
          )}
        </MotionSectionReveal>

        <MotionSectionReveal delay={0.1}>
          <ContentCardGrid columns={4} className="mt-10 lg:mt-14">
            {content.topics.map((topic) => (
              <CraftTopicTile key={topic.slug} topic={topic} />
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
