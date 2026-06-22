import { notFound } from "next/navigation";
import { stories } from "@/data/stories";
import StoryCard from "@/components/cards/StoryCard";
import ReadingProgressBar from "@/components/stories/ReadingProgressBar";

export async function generateStaticParams() {
  return stories.map((story) => ({
    slug: story.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;

  const story = stories.find((item) => item.slug === slug);

  if (!story) {
    return {
      title: "Story Not Found | Luxary",
    };
  }

  return {
    title: `${story.title} | Luxary`,
    description: story.summary,
  };
}

export default async function StoryPage({ params }) {
  const { slug } = await params;

  const story = stories.find((item) => item.slug === slug);

  if (!story) {
    notFound();
  }

  const relatedStories = stories
    .filter(
      (item) => item.category === story.category && item.slug !== story.slug,
    )
    .slice(0, 3);

  const paragraphs = story.content
    .split("\n")
    .filter((paragraph) => paragraph.trim() !== "");

  return (
    <main className="bg-white text-neutral-900">
      <ReadingProgressBar />
      {/* Hero */}

      <section className="relative h-[70vh] overflow-hidden">
        {/* <img
          src={story.heroImage}
          alt={story.title}
          className="h-full w-full object-cover"
        /> */}

        {/* <img
          src={story.image.src}
          alt={story.image.alt}
          className="h-full w-full object-cover"
        /> */}

        <img src={story.heroImage} alt={story.alt} />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-0 left-0 right-0 max-w-7xl mx-auto px-6 pb-16 text-white">
          <p className="uppercase tracking-[0.35em] text-xs mb-4">
            {story.category}
          </p>

          <h1 className="max-w-5xl text-5xl md:text-7xl font-light leading-tight">
            {story.title}
          </h1>
        </div>
      </section>

      {/* Meta */}

      <section className="border-b border-neutral-200">
        <div className="max-w-4xl mx-auto px-6 py-8 flex flex-wrap gap-6 text-sm text-neutral-600">
          <span>{story.author}</span>
          <span>{story.publishedAt}</span>
          <span>{story.readTime}</span>
        </div>
      </section>

      {/* Article */}

      <article className="max-w-4xl mx-auto px-6 py-20">
        <div className="space-y-10">
          {paragraphs.map((paragraph, index) => (
            <p
              key={index}
              className="text-lg md:text-xl leading-relaxed text-neutral-700"
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Divider */}

        <div className="my-20 border-t border-neutral-200" />

        {/* Pull Quote */}

        <blockquote className="max-w-3xl mx-auto text-center">
          <p className="text-3xl md:text-4xl font-light leading-relaxed text-neutral-900">
            “Luxury evolves while preserving identity.”
          </p>
        </blockquote>

        <div className="my-20 border-t border-neutral-200" />

        {/* Closing Text */}

        <div className="max-w-3xl">
          <p className="text-lg leading-relaxed text-neutral-700">
            The world's most respected maisons understand that excellence is not
            a destination but a continuous pursuit. Heritage, craftsmanship, and
            innovation remain the foundations of lasting luxury.
          </p>
        </div>
      </article>

      {relatedStories.length > 0 && (
        <section className="border-t border-neutral-200 py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-12">
              <h2 className="text-3xl md:text-4xl font-light">
                Related Stories
              </h2>

              <p className="mt-4 text-neutral-600">
                Continue exploring the worlds of heritage, craftsmanship, and
                luxury culture.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {relatedStories.map((relatedStory) => (
                <StoryCard key={relatedStory.slug} story={relatedStory} />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
