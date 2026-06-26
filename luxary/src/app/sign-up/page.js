import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import MotionSectionReveal from "@/components/motion/MotionSectionReveal";
import { signUp } from "@/lib/auth/actions";

export const metadata = {
  title: "Create Your Account | Luxary",
  description:
    "Join Luxary to discover curated brands, save stories, explore editorial content, and revisit immersive experiences.",
};

async function handleSignUp(formData) {
  "use server";

  const fullName = formData.get("name");
  const email = formData.get("email");
  const password = formData.get("password");

  console.log({
    fullName,
    email,
    password,
    emailType: typeof email,
  });

  const { error } = await signUp({
    fullName,
    email,
    password,
  });

  console.log(error);

  if (error) {
    console.error(error);
    return;
  }
}

export default function SignUpPage() {
  return (
    <div className="flex flex-col">
      <section className="bg-background py-20 sm:py-24 lg:py-28">
        <Container>
          <MotionSectionReveal>
            <div className="max-w-3xl">
              <Badge variant="accent">Member Registration</Badge>

              <h1 className="mt-6 font-display text-5xl font-light tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Create Your Account
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
                Build a more personal journey through heritage, craftsmanship,
                and contemporary luxury culture. Save stories, follow editorial
                themes, discover curated brands, and revisit immersive
                experiences that inspire your interests.
              </p>
            </div>
          </MotionSectionReveal>
        </Container>
      </section>

      <section className="bg-surface py-16 sm:py-20 lg:py-24">
        <Container>
          <MotionSectionReveal>
            <div className="mx-auto max-w-xl rounded-sm border border-foreground/10 bg-background p-6 sm:p-8 lg:p-10">
              <form action={handleSignUp} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-foreground"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-sm border border-foreground/15 bg-transparent px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
                  />
                </div>

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
                    placeholder="Create a password"
                    className="w-full rounded-sm border border-foreground/15 bg-transparent px-4 py-3 text-foreground outline-none transition-colors focus:border-accent"
                  />
                </div>

                <Button type="submit" className="w-full" variant="primary">
                  Create Account
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
              <Badge variant="muted">Already a Member</Badge>

              <h2 className="mt-6 font-display text-3xl font-light tracking-tight text-foreground sm:text-4xl">
                Continue Your Journey
              </h2>

              <p className="mt-5 text-lg leading-relaxed text-muted">
                Sign in to access your saved stories, editorial collections, and
                personalized discoveries across heritage, craftsmanship, and
                immersive luxury experiences.
              </p>

              <div className="mt-8 flex justify-center">
                <Button href="/sign-in" variant="secondary">
                  Sign In
                </Button>
              </div>
            </div>
          </MotionSectionReveal>
        </Container>
      </section>
    </div>
  );
}
