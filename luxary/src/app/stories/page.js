import { getStories } from "@/lib/stories";
import StoriesClient from "./StoriesClient";

export default async function StoriesPage() {
  const stories = await getStories();

  return <StoriesClient stories={stories} />;
}

// "use client";

// import { useMemo, useState } from "react";

// import Badge from "@/components/ui/Badge";
// import Button from "@/components/ui/Button";
// import Container from "@/components/ui/Container";
// import ContentCardGrid from "@/components/ui/ContentCardGrid";
// import SectionFooterCTA from "@/components/ui/SectionFooterCTA";
// import SectionHeader from "@/components/ui/SectionHeader";
// import StoryCard from "@/components/cards/StoryCard";
// import MotionSectionReveal from "@/components/motion/MotionSectionReveal";
// import StoryCategoryFilter from "@/components/stories/StoryCategoryFilter";

// import stories from "@/data/stories";

// export default function StoriesPage() {
//   const featuredStory = stories[0];

//   const categories = [
//     "All Stories",
//     "Heritage",
//     "Craftsmanship",
//     "Watchmaking",
//     "Jewelry",
//     "Fashion",
//     "Automotive",
//   ];

//   const [activeCategory, setActiveCategory] = useState("All Stories");

//   const [searchQuery, setSearchQuery] = useState("");

//   const featuredStories = stories.filter((story) => story.featured);

//   const filteredStories = useMemo(() => {
//     let filtered = stories;

//     if (activeCategory !== "All Stories") {
//       filtered = filtered.filter((story) => story.category === activeCategory);
//     }

//     if (searchQuery.trim()) {
//       const query = searchQuery.toLowerCase();

//       filtered = filtered.filter(
//         (story) =>
//           story.title.toLowerCase().includes(query) ||
//           story.summary.toLowerCase().includes(query) ||
//           story.category.toLowerCase().includes(query),
//       );
//     }

//     return filtered;
//   }, [activeCategory, searchQuery]);

//   console.log(stories[0]);
//   return (
//     <div className="flex flex-col">
//       <section className="bg-background py-20 sm:py-24 lg:py-28">
//         <Container>
//           <MotionSectionReveal>
//             <div className="max-w-3xl">
//               <Badge variant="accent">Editorial Archive</Badge>
//               <h1 className="mt-6 font-display text-5xl font-light tracking-tight text-foreground sm:text-6xl lg:text-7xl">
//                 Stories
//               </h1>
//               <p className="mt-6 text-lg leading-relaxed text-muted sm:text-xl">
//                 Explore the histories, archives, founders, cultural moments, and
//                 workshop disciplines that give luxury its deeper meaning. These
//                 are narratives of heritage, craft, and continuity.
//               </p>
//               <div className="mt-8 flex flex-col gap-3 sm:flex-row">
//                 <Button href="#featured-story" variant="primary">
//                   Read Featured Story
//                 </Button>
//                 <Button href="#craftsmanship-narratives" variant="secondary">
//                   Explore Craft
//                 </Button>
//               </div>
//             </div>
//           </MotionSectionReveal>
//         </Container>
//       </section>

//       <section
//         id="featured-story"
//         aria-labelledby="featured-story-heading"
//         className="bg-surface py-16 sm:py-20 lg:py-24"
//       >
//         <Container>
//           <MotionSectionReveal>
//             <SectionHeader
//               heading="Featured Story"
//               description="A heritage-focused narrative from the archive of luxury culture."
//               headingId="featured-story-heading"
//             />
//           </MotionSectionReveal>

//           <MotionSectionReveal className="mt-10 max-w-5xl lg:mt-14">
//             <StoryCard story={featuredStory} featured />
//           </MotionSectionReveal>
//         </Container>
//       </section>

//       {featuredStories.length > 0 && (
//         <section className="border-t border-neutral-200 py-16 sm:py-20">
//           <Container>
//             <MotionSectionReveal>
//               <SectionHeader
//                 heading="Featured Stories"
//                 description="Curated editorial selections from the Luxary archive."
//               />
//             </MotionSectionReveal>

//             <MotionSectionReveal className="mt-10 lg:mt-14">
//               <ContentCardGrid columns={3}>
//                 {featuredStories.map((story) => (
//                   <StoryCard key={story.slug} story={story} />
//                 ))}
//               </ContentCardGrid>
//             </MotionSectionReveal>
//           </Container>
//         </section>
//       )}

//       <section className="py-16 sm:py-20 lg:py-24">
//         <Container>
//           <MotionSectionReveal>
//             <SectionHeader
//               heading="Editorial Archive"
//               description="Browse stories across heritage, craftsmanship, watchmaking, jewelry, fashion, and automotive culture."
//             />
//           </MotionSectionReveal>

//           <MotionSectionReveal className="mt-10">
//             <div className="flex flex-col gap-6">
//               <input
//                 type="text"
//                 placeholder="Search stories..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="
//         w-full
//         rounded-full
//         border
//         border-neutral-300
//         px-5
//         py-3
//         text-sm
//         outline-none
//         transition
//         focus:border-black
//       "
//               />

//               <StoryCategoryFilter
//                 categories={categories}
//                 activeCategory={activeCategory}
//                 onChange={setActiveCategory}
//               />
//             </div>
//           </MotionSectionReveal>

//           <MotionSectionReveal className="mt-12 lg:mt-14">
//             {filteredStories.length > 0 ? (
//               <ContentCardGrid columns={3}>
//                 {filteredStories.map((story) => (
//                   <StoryCard key={story.slug} story={story} />
//                 ))}
//               </ContentCardGrid>
//             ) : (
//               <div className="rounded-2xl border border-neutral-200 p-12 text-center">
//                 <h3 className="text-xl font-light">
//                   No stories available in this category.
//                 </h3>

//                 <p className="mt-3 text-muted">
//                   Please explore another editorial category.
//                 </p>
//               </div>
//             )}
//           </MotionSectionReveal>

//           <SectionFooterCTA href="/editorial" label="Explore Editorial" />
//         </Container>
//       </section>
//     </div>
//   );
// }
