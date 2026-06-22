"use client";

import { useMemo, useState } from "react";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Container from "@/components/ui/Container";
import ContentCardGrid from "@/components/ui/ContentCardGrid";
import SectionFooterCTA from "@/components/ui/SectionFooterCTA";
import SectionHeader from "@/components/ui/SectionHeader";
import StoryCard from "@/components/cards/StoryCard";
import MotionSectionReveal from "@/components/motion/MotionSectionReveal";
import StoryCategoryFilter from "@/components/stories/StoryCategoryFilter";

import stories from "@/data/stories";

// export const metadata = {
//   title: "Stories | Luxary",
//   description:
//     "Explore Luxary stories on heritage, archives, founders, cultural influence, craftsmanship, and savoir-faire.",
// };

// const featuredStory = {
//   slug: "archives-that-shape-luxury",
//   title: "Archives That Shape Luxury Memory",
//   summary:
//     "Inside the sketches, ledgers, photographs, and workshop records that help great houses carry their founding ideas into the present.",
//   href: "/stories/archives-that-shape-luxury",
//   image: {
//     src: "https://picsum.photos/960/600?random=21",
//     alt: "Historic luxury archive with sketches, fabric records, and atelier notes",
//   },
// };

// const heritageStories = [
//   {
//     slug: "founders-with-lasting-vision",
//     title: "Founders With Lasting Vision",
//     summary:
//       "How early convictions about craft, service, elegance, and restraint continue to define maison identities.",
//     href: "/stories/founders-with-lasting-vision",
//     image: {
//       src: "https://picsum.photos/800/600?random=22",
//       alt: "Vintage portrait wall and atelier references representing luxury founders",
//     },
//   },
//   {
//     slug: "the-language-of-house-codes",
//     title: "The Language of House Codes",
//     summary:
//       "Symbols, silhouettes, motifs, and materials become cultural shorthand when they are refined over generations.",
//     href: "/stories/the-language-of-house-codes",
//     image: {
//       src: "https://picsum.photos/800/600?random=23",
//       alt: "Luxury archive details showing enduring house codes and patterns",
//     },
//   },
//   {
//     slug: "legacy-beyond-the-atelier",
//     title: "Legacy Beyond the Atelier",
//     summary:
//       "The stories of houses whose influence reaches architecture, cinema, travel, design, and public imagination.",
//     href: "/stories/legacy-beyond-the-atelier",
//     image: {
//       src: "https://picsum.photos/800/600?random=24",
//       alt: "Cultural exhibition space reflecting luxury heritage and influence",
//     },
//   },
//   {
//     slug: "moments-that-redefined-elegance",
//     title: "Moments That Redefined Elegance",
//     summary:
//       "A look at decisive creative gestures that changed how luxury is remembered, worn, preserved, and discussed.",
//     href: "/stories/moments-that-redefined-elegance",
//     image: {
//       src: "https://picsum.photos/800/600?random=25",
//       alt: "Historic fashion and design references representing changing elegance",
//     },
//   },
//   {
//     slug: "objects-as-cultural-record",
//     title: "Objects as Cultural Record",
//     summary:
//       "Why certain crafted forms become documents of taste, travel, ceremony, and social change.",
//     href: "/stories/objects-as-cultural-record",
//     image: {
//       src: "https://picsum.photos/800/600?random=26",
//       alt: "Museum-like display of crafted luxury objects as cultural records",
//     },
//   },
//   {
//     slug: "the-power-of-continuity",
//     title: "The Power of Continuity",
//     summary:
//       "Luxury storytelling often begins with what remains: a gesture, a technique, a proportion, a point of view.",
//     href: "/stories/the-power-of-continuity",
//     image: {
//       src: "https://picsum.photos/800/600?random=27",
//       alt: "Workshop detail showing continuity of traditional luxury craft",
//     },
//   },
// ];

// const craftsmanshipStories = [
//   {
//     slug: "inside-the-quiet-atelier",
//     title: "Inside the Quiet Atelier",
//     summary:
//       "The rhythm of pattern tables, hand finishing, and patient adjustment behind work that appears effortless.",
//     href: "/stories/inside-the-quiet-atelier",
//     image: {
//       src: "https://picsum.photos/800/600?random=28",
//       alt: "Artisans working at a refined atelier table",
//     },
//   },
//   {
//     slug: "materials-with-memory",
//     title: "Materials With Memory",
//     summary:
//       "Leather, silk, precious metals, wood, and stone each carry histories that skilled hands learn to respect.",
//     href: "/stories/materials-with-memory",
//     image: {
//       src: "https://picsum.photos/800/600?random=29",
//       alt: "Refined natural materials prepared for artisan craftsmanship",
//     },
//   },
//   {
//     slug: "savoir-faire-as-living-practice",
//     title: "Savoir-Faire as Living Practice",
//     summary:
//       "Inherited techniques remain meaningful when artisans adapt them with judgment, discipline, and care.",
//     href: "/stories/savoir-faire-as-living-practice",
//     image: {
//       src: "https://picsum.photos/800/600?random=30",
//       alt: "Traditional artisan tools arranged for savoir-faire practice",
//     },
//   },
// ];

export default function StoriesPage() {
  const featuredStory = stories[0];

  // const heritageStories = stories.filter(
  //   (story) => story.category === "Heritage",
  // );

  // const craftsmanshipStories = stories.filter(
  //   (story) => story.category === "Craftsmanship",
  // );

  const categories = [
    "All Stories",
    "Heritage",
    "Craftsmanship",
    "Watchmaking",
    "Jewelry",
    "Fashion",
    "Automotive",
  ];

  const [activeCategory, setActiveCategory] = useState("All Stories");

  const [searchQuery, setSearchQuery] = useState("");

  const featuredStories = stories.filter((story) => story.featured);

  const filteredStories = useMemo(() => {
    let filtered = stories;

    if (activeCategory !== "All Stories") {
      filtered = filtered.filter((story) => story.category === activeCategory);
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();

      filtered = filtered.filter(
        (story) =>
          story.title.toLowerCase().includes(query) ||
          story.summary.toLowerCase().includes(query) ||
          story.category.toLowerCase().includes(query),
      );
    }

    return filtered;
  }, [activeCategory, searchQuery]);

  console.log(stories[0]);
  return (
    <div className="flex flex-col">
      <section className="bg-background py-20 sm:py-24 lg:py-28">
        <Container>
          <MotionSectionReveal>
            <div className="max-w-3xl">
              <Badge variant="accent">Editorial Archive</Badge>
              <h1 className="mt-6 font-display text-5xl font-light tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Stories
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
                Explore the histories, archives, founders, cultural moments, and
                workshop disciplines that give luxury its deeper meaning. These
                are narratives of heritage, craft, and continuity.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#featured-story" variant="primary">
                  Read Featured Story
                </Button>
                <Button href="#craftsmanship-narratives" variant="secondary">
                  Explore Craft
                </Button>
              </div>
            </div>
          </MotionSectionReveal>
        </Container>
      </section>

      <section
        id="featured-story"
        aria-labelledby="featured-story-heading"
        className="bg-surface py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <MotionSectionReveal>
            <SectionHeader
              heading="Featured Story"
              description="A heritage-focused narrative from the archive of luxury culture."
              headingId="featured-story-heading"
            />
          </MotionSectionReveal>

          <MotionSectionReveal className="mt-10 max-w-5xl lg:mt-14">
            <StoryCard story={featuredStory} featured />
          </MotionSectionReveal>
        </Container>
      </section>

      {featuredStories.length > 0 && (
        <section className="border-t border-neutral-200 py-16 sm:py-20">
          <Container>
            <MotionSectionReveal>
              <SectionHeader
                heading="Featured Stories"
                description="Curated editorial selections from the Luxary archive."
              />
            </MotionSectionReveal>

            <MotionSectionReveal className="mt-10 lg:mt-14">
              <ContentCardGrid columns={3}>
                {featuredStories.map((story) => (
                  <StoryCard key={story.slug} story={story} />
                ))}
              </ContentCardGrid>
            </MotionSectionReveal>
          </Container>
        </section>
      )}

      {/* <section
        aria-labelledby="heritage-legacy-heading"
        className="py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <MotionSectionReveal>
            <SectionHeader
              heading="Heritage & Legacy Collection"
              description="Stories of archives, founders, cultural influence, and the house codes that keep memory alive."
              headingId="heritage-legacy-heading"
            />
          </MotionSectionReveal>

          <MotionSectionReveal className="mt-10 lg:mt-14">
            <ContentCardGrid columns={3}>
              {heritageStories.map((story) => (
                <StoryCard key={story.slug} story={story} />
              ))}
            </ContentCardGrid>
          </MotionSectionReveal>
        </Container>
      </section> */}

      {/* <section
        id="craftsmanship-narratives"
        aria-labelledby="craftsmanship-narratives-heading"
        className="bg-section-alt py-16 sm:py-20 lg:py-24"
      >
        <Container>
          <MotionSectionReveal>
            <SectionHeader
              heading="Craftsmanship Narratives"
              description="Ateliers, materials, artisans, and techniques told through the patient language of savoir-faire."
              headingId="craftsmanship-narratives-heading"
            />
          </MotionSectionReveal>

          <MotionSectionReveal className="mt-10 lg:mt-14">
            <ContentCardGrid columns={3}>
              {craftsmanshipStories.map((story) => (
                <StoryCard key={story.slug} story={story} />
              ))}
            </ContentCardGrid>
          </MotionSectionReveal>

          <SectionFooterCTA href="/editorial" label="Explore Editorial" />
        </Container>
      </section> */}

      <section className="py-16 sm:py-20 lg:py-24">
        <Container>
          <MotionSectionReveal>
            <SectionHeader
              heading="Editorial Archive"
              description="Browse stories across heritage, craftsmanship, watchmaking, jewelry, fashion, and automotive culture."
            />
          </MotionSectionReveal>

          <MotionSectionReveal className="mt-10">
            <div className="flex flex-col gap-6">
              <input
                type="text"
                placeholder="Search stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="
        w-full
        rounded-full
        border
        border-neutral-300
        px-5
        py-3
        text-sm
        outline-none
        transition
        focus:border-black
      "
              />

              <StoryCategoryFilter
                categories={categories}
                activeCategory={activeCategory}
                onChange={setActiveCategory}
              />
            </div>
          </MotionSectionReveal>

          <MotionSectionReveal className="mt-12 lg:mt-14">
            {filteredStories.length > 0 ? (
              <ContentCardGrid columns={3}>
                {filteredStories.map((story) => (
                  <StoryCard key={story.slug} story={story} />
                ))}
              </ContentCardGrid>
            ) : (
              <div className="rounded-2xl border border-neutral-200 p-12 text-center">
                <h3 className="text-xl font-light">
                  No stories available in this category.
                </h3>

                <p className="mt-3 text-muted">
                  Please explore another editorial category.
                </p>
              </div>
            )}
          </MotionSectionReveal>

          <SectionFooterCTA href="/editorial" label="Explore Editorial" />
        </Container>
      </section>
    </div>
  );
}
