import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import DiscoveryImage from "@/components/ui/DiscoveryImage";
import MotionSectionReveal from "@/components/motion/MotionSectionReveal";

export default function HeroSection({ content }) {
  return (
    <section aria-labelledby="hero-heading" className="relative overflow-hidden">
      <Container className="py-16 sm:py-20 lg:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <MotionSectionReveal>
            <div>
              <p className="text-xs font-medium tracking-[0.2em] uppercase text-accent">
                {content.pillars.join(" · ")}
              </p>
              <h1
                id="hero-heading"
                className="mt-4 font-display text-4xl font-light leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
              >
                {content.headline}
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-muted sm:text-lg">
                {content.supportingCopy}
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button href={content.primaryCTA.href} variant="primary">
                  {content.primaryCTA.label}
                </Button>
                <Button href={content.secondaryCTA.href} variant="secondary">
                  {content.secondaryCTA.label}
                </Button>
              </div>
              {content.trustLayer && (
                <p className="mt-8 text-sm text-muted-foreground">
                  {content.trustLayer.text}
                </p>
              )}
            </div>
          </MotionSectionReveal>

          <MotionSectionReveal delay={0.1}>
            <DiscoveryImage
              src={content.visual.src}
              alt={content.visual.alt}
              priority
              aspectRatio="aspect-[4/5] sm:aspect-[4/5] lg:aspect-[3/4]"
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="rounded-sm"
            />
          </MotionSectionReveal>
        </div>
      </Container>
    </section>
  );
}
