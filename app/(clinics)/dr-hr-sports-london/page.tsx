import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { SERVICES_DATA } from "@/lib/services-data";
import { notFound } from "next/navigation";

export default function DrHrSportsLondonPage() {
  const service = SERVICES_DATA.find((s) => s.slug === "dr-hr-sports-london");

  if (!service) {
    notFound();
  }

  return (
    <ServicePageTemplate
      title={service.hero.title}
      subtitle={service.hero.subtitle}
      description={service.hero.description}
      heroYoutubeVideoId={service.hero.youtubeVideoId}
      heroImage="/new_assets/DR_HR sports clinic_.jpg"
      cards={service.subservices.map((sub) => ({
        title: sub.title,
        description: sub.description,
        image: sub.image,
        link: sub.pricingOptions?.[0]?.bookingUrl, // Linking directly to booking for now as per my previous draft logic
      }))}
      bottomContent={service.bottomContent}
    />
  );
}
