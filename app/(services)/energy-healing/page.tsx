import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { SERVICES_DATA } from "@/lib/services-data";
import { notFound } from "next/navigation";

export default function EnergyHealingPage() {
  const service = SERVICES_DATA.find((s) => s.slug === "energy-healing");

  if (!service) {
    notFound();
  }

  return (
    <ServicePageTemplate
      title={service.hero.title}
      subtitle={service.hero.subtitle}
      description={service.hero.description}
      heroYoutubeVideoId={service.hero.youtubeVideoId}
      heroImage="/new_assets/Energy healing.jpg"
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
