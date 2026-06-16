import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import SectionFooterCTA from "@/components/ui/SectionFooterCTA";
import ExperienceCard from "@/components/cards/ExperienceCard";
import ExperiencePreviewItem from "@/components/cards/ExperiencePreviewItem";
import { experienceTypeLabels } from "@/content/homepage/experiences";
import MotionSectionReveal from "@/components/motion/MotionSectionReveal";

export default function ImmersiveExperiencesSection({ content }) {
  return (
    <section
      aria-labelledby="experiences-heading"
      className="bg-surface py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <MotionSectionReveal>
          <SectionHeader
            heading={content.heading}
            description={content.description}
            headingId="experiences-heading"
          />
          {content.introduction && (
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted">
              {content.introduction}
            </p>
          )}
        </MotionSectionReveal>

        <div className="mt-10 grid gap-8 lg:mt-14 lg:grid-cols-2">
          <MotionSectionReveal delay={0.1}>
            <ExperienceCard
              experience={content.featuredExperience}
              typeLabel={
                experienceTypeLabels[content.featuredExperience.experienceType]
              }
              featured
            />
          </MotionSectionReveal>

          <MotionSectionReveal delay={0.15}>
            <ul className="divide-y divide-border">
              {content.experiencePreviews.map((experience) => (
                <li key={experience.slug} className="py-5 first:pt-0 last:pb-0">
                  <ExperiencePreviewItem
                    experience={experience}
                    typeLabel={experienceTypeLabels[experience.experienceType]}
                  />
                </li>
              ))}
            </ul>
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
