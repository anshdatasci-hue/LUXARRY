import HomepageLayout from "@/components/homepage/HomepageLayout";
import HeroSection from "@/components/homepage/HeroSection";
import FeaturedBrandsSection from "@/components/homepage/FeaturedBrandsSection";
import HeritageLegacyStoriesSection from "@/components/homepage/HeritageLegacyStoriesSection";
import CraftsmanshipSpotlightSection from "@/components/homepage/CraftsmanshipSpotlightSection";
import EditorialFeaturesSection from "@/components/homepage/EditorialFeaturesSection";
import ImmersiveExperiencesSection from "@/components/homepage/ImmersiveExperiencesSection";
import ExploreByCategorySection from "@/components/homepage/ExploreByCategorySection";
import PersonalizationSection from "@/components/homepage/PersonalizationSection";
import { homepageContent } from "@/content/homepage";
import { siteConfig } from "@/config/navigation";
import FeaturedProducts from "@/components/homepage/FeaturedProducts";
import { getCurrentUser } from "@/lib/auth/user";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: siteConfig.name,
      description: siteConfig.tagline,
      url: "https://luxary.com",
    },
    {
      "@type": "Organization",
      name: siteConfig.name,
      description: siteConfig.tagline,
      url: "https://luxary.com",
    },
  ],
};

export default async function Home() {
  const user = await getCurrentUser();

  const {
    hero,
    featuredBrands,
    heritageStories,
    craftsmanship,
    editorial,
    experiences,
    exploreByCategory,
    personalization,
  } = homepageContent;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomepageLayout>
        <HeroSection content={hero} />
        <FeaturedProducts />
        <FeaturedBrandsSection content={featuredBrands} />
        <HeritageLegacyStoriesSection content={heritageStories} />
        <CraftsmanshipSpotlightSection content={craftsmanship} />
        <EditorialFeaturesSection content={editorial} />
        <ImmersiveExperiencesSection content={experiences} />
        <ExploreByCategorySection content={exploreByCategory} />
        <PersonalizationSection content={personalization} />
      </HomepageLayout>
    </>
  );
}
