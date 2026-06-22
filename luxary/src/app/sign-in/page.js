import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import MotionSectionReveal from "@/components/motion/MotionSectionReveal";

export const metadata = {
  title: "Sign In | Luxary",
  description:
    "Access your personalized Luxary experience, saved stories, editorial perspectives, and immersive discoveries.",
};

export default function SignInPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-background py-20 sm:py-24 lg:py-28">
        <Container>
          <MotionSectionReveal>
            <div className="max-w-3xl">
              <Badge variant="accent">Member Access</Badge>

              <h1 className="mt-6 font-display text-5xl font-light tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Sign In
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
                Continue your journey through heritage, craftsmanship, and
                cultural discovery. Access saved stories, editorial
                perspectives, and immersive experiences curated around your
                interests.
              </p>
            </div>
          </MotionSectionReveal>
        </Container>
      </section>

      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <Container>
          <MotionSectionReveal>
            <div className="mx-auto max-w-xl rounded-sm border border-foreground/10 bg-background p-6 sm:p-8 lg:p-10">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-sm border border-foreground/15 bg-transparent px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
                  />
                </div>

                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Password
                  </label>

                  <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    className="w-full rounded-sm border border-foreground/15 bg-transparent px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
                  />
                </div>

                <Button className="w-full" variant="primary">
                  Sign In
                </Button>
              </form>
            </div>
          </MotionSectionReveal>
        </Container>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <MotionSectionReveal>
            <div className="mx-auto max-w-3xl text-center">
              <Badge variant="muted">New to Luxary</Badge>

              <h2 className="mt-6 font-display text-3xl font-light tracking-tight text-foreground sm:text-4xl">
                Begin Your Discovery
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-muted">
                Create an account to build a personalized collection of stories,
                follow editorial themes, and revisit immersive experiences that
                reflect your interests across luxury culture, heritage, and
                craftsmanship.
              </p>

              <div className="mt-8 flex justify-center">
                <Button href="/sign-up" variant="secondary">
                  Create Account
                </Button>
              </div>
            </div>
          </MotionSectionReveal>
        </Container>
      </section>
    </div>
  );
}
