import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { SERVICES_DATA } from "@/lib/services-data";
import { notFound } from "next/navigation";

export default function HealingMovementPage() {
  const service = SERVICES_DATA.find((s) => s.slug === "healing-movement");

  if (!service) {
    notFound();
  }

  return (
    <ServicePageTemplate
      title={service.hero.title}
      subtitle={service.hero.subtitle}
      description={service.hero.description}
      heroYoutubeVideoId={service.hero.youtubeVideoId}
      heroImage="/new_assets/IMG_5591.jpg"
      cards={service.subservices.map((sub) => ({
        title: sub.title,
        description: sub.description,
        image: sub.image,
        link: sub.bookingUrl,
        ctaLabel: sub.ctaLabel,
      }))}
      bottomContent={service.bottomContent}
    />
  );
}
