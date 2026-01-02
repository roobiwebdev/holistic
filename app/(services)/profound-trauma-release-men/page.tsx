import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { SERVICES_DATA } from "@/lib/services-data";

export default function ProfoundTraumaReleaseMenPage() {
  const service = SERVICES_DATA.find((s) => s.slug === "profound-trauma-release-men");

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <ServicePageTemplate
      title={service.hero.title}
      subtitle={service.hero.subtitle}
      description={service.hero.description}
      heroYoutubeVideoId={service.hero.youtubeVideoId}
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
