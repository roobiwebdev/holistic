import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ServicePageTemplate } from "@/components/templates/ServicePageTemplate";
import { ServicePageSkeleton } from "@/components/templates/ServicePageSkeleton";
import { getServiceBySlug, getSubServiceDetailUrl } from "@/lib/services-data";

interface ServicePageProps {
  params: Promise<{
    serviceSlug: string;
  }>;
}

async function ServicePageContent({ serviceSlug }: { serviceSlug: string }) {
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  // Transform subservices to cards with detail page URLs
  const cards = service.subservices.map((subservice) => ({
    title: subservice.title,
    description: subservice.description,
    image: subservice.image,
    link: getSubServiceDetailUrl(service.slug, subservice.slug),
  }));

  return (
    <ServicePageTemplate
      title={service.hero.title}
      subtitle={service.hero.subtitle}
      description={service.hero.description}
      heroYoutubeVideoId={service.hero.youtubeVideoId}
      cards={cards}
    />
  );
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { serviceSlug } = await params;

  return (
    <Suspense fallback={<ServicePageSkeleton />}>
      <ServicePageContent serviceSlug={serviceSlug} />
    </Suspense>
  );
}
