import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { SERVICES_DATA } from "@/lib/services-data";

export default function ServicesPage() {
  const cards = SERVICES_DATA.map(service => ({
    title: service.hero.title,
    description: service.hero.description,
    image: service.subservices[0]?.image || "/new_assets/The essence_.jpg",
    link: `/${service.slug}`,
    ctaLabel: "View Service"
  }));

  return (
    <ServicePageTemplate
      title="Holistic Treatments & Therapies"
      subtitle="Our Offerings"
      description="Explore our full range of treatments designed to heal, restore, and empower your journey to wellness."
      heroImage="/new_assets/Holistic Therapies.jpg"
      cards={cards}
    />
  );
}
