import { createFileRoute } from "@tanstack/react-router";

import {
  ConversionSection,
  Faq,
  Features,
  FinalCta,
  Footer,
  Hero,
  HowToUse,
  Lifestyle,
  OrderThroughMe,
  ProductDetails,
  ProductIntro,
  StickyCta,
  WhyPeopleLikeIt,
} from "@/components/landing/Sections";
import { PRODUCT } from "@/config/site";

const TITLE = "Aloe Vera Plus | NeoLife Aloe Vera Drink | Order on WhatsApp";
const DESCRIPTION =
  "Discover Aloe Vera Plus by NeoLife, made with 100% pure filtered Aloe Vera and a Herbal Tea Blend. Learn more and order directly through WhatsApp.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          name: PRODUCT.name,
          sku: PRODUCT.code,
          brand: { "@type": "Brand", name: PRODUCT.brand },
          description:
            "A daily wellness drink made with 100% pure filtered Aloe Vera, enhanced with NeoLife's Herbal Tea Blend. 1 litre bottle.",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <main>
        <Hero />
        <Lifestyle />
        <ProductIntro />
        <Features />
        <WhyPeopleLikeIt />
        <HowToUse />
        <ProductDetails />
        <OrderThroughMe />
        <ConversionSection />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <StickyCta />
    </div>
  );
}
