import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { SERVICES_DATA } from "@/lib/services-data";
import { notFound } from "next/navigation";

export default function NaturalGlowPage() {
  const service = SERVICES_DATA.find((s) => s.slug === "natural-glow");

  if (!service) {
    notFound();
  }

  return (
    <ServicePageTemplate
      title={service.hero.title}
      subtitle={service.hero.subtitle}
      description={service.hero.description}
      heroYoutubeVideoId={service.hero.youtubeVideoId}
      heroImage="/new_assets/Natural Glow.jpg"
      cards={service.subservices.map((sub) => ({
        title: sub.title,
        description: sub.description,
        image: sub.image,
        link: `/services/${service.slug}/${sub.slug}`,
        ctaLabel: sub.ctaLabel,
      }))}
      bottomContent={service.bottomContent}
    />
  );
}
