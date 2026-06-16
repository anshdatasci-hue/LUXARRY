import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionFooterCTA from "@/components/ui/SectionFooterCTA";
import StoryCard from "@/components/cards/StoryCard";
import MotionSectionReveal from "@/components/motion/MotionSectionReveal";

export default function HeritageLegacyStoriesSection({ content }) {
  return (
    <section
      aria-labelledby="heritage-stories-heading"
      className="py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <MotionSectionReveal>
          <SectionHeader
            heading={content.heading}
            description={content.description}
            headingId="heritage-stories-heading"
          />
        </MotionSectionReveal>

        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-2">
          <MotionSectionReveal delay={0.1}>
            <StoryCard story={content.featuredStory} featured />
          </MotionSectionReveal>

          <MotionSectionReveal delay={0.15}>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-1">
              {content.supportingStories.map((story) => (
                <StoryCard key={story.slug} story={story} />
              ))}
            </div>
          </MotionSectionReveal>
        </div>

        <SectionFooterCTA
          href={content.sectionCTA.href}
          label={content.sectionCTA.label}
        />
      </Container>
    </section>
  );
}
