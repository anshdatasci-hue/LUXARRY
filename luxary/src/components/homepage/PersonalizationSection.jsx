import Container from "@/components/ui/Container";
import SectionHeader from "@/components/ui/SectionHeader";
import Button from "@/components/ui/Button";
import MotionSectionReveal from "@/components/motion/MotionSectionReveal";

export default function PersonalizationSection({ content }) {
  return (
    <section
      aria-labelledby="personalization-heading"
      className="bg-section-alt py-16 sm:py-20 lg:py-24"
    >
      <Container>
        <MotionSectionReveal>
          <div className="mx-auto max-w-3xl text-center">
            <SectionHeader
              heading={content.heading}
              description={content.description}
              headingId="personalization-heading"
              align="center"
            />

            <ul className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-8">
              {content.benefits.map((benefit) => (
                <li
                  key={benefit.title}
                  className="rounded-sm border border-border bg-surface p-6 text-left"
                >
                  <h3 className="font-display text-lg font-medium text-foreground">
                    {benefit.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {benefit.description}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button href={content.primaryCTA.href} variant="primary">
                {content.primaryCTA.label}
              </Button>
            </div>
          </div>
        </MotionSectionReveal>
      </Container>
    </section>
  );
}
