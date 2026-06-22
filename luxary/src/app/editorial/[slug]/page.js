import { notFound } from "next/navigation";
import { stories } from "@/data/stories";

export default async function StoryPage({ params }) {
  const story = stories.find((item) => item.slug === params.slug);

  if (!story) {
    notFound();
  }

  return (
    <main className="max-w-4xl mx-auto px-6 py-20">
      <div className="mb-4 text-sm uppercase tracking-widest">
        {story.category}
      </div>

      <h1 className="text-5xl mb-6">{story.title}</h1>

      <p className="mb-10 text-neutral-600">{story.summary}</p>

      <article className="prose max-w-none">{story.content}</article>
    </main>
  );
}
