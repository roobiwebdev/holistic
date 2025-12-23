import { notFound } from "next/navigation";
import { Suspense } from "react";
import { SubServiceDetailTemplate } from "@/components/templates/SubServiceDetailTemplate";
import { SubServiceDetailSkeleton } from "@/components/templates/SubServiceDetailSkeleton";
import { getServiceBySlug } from "@/lib/services-data";

interface SubServiceDetailPageProps {
  params: Promise<{
    serviceSlug: string;
    subserviceSlug: string;
  }>;
}

async function SubServiceDetailContent({
  serviceSlug,
  subserviceSlug,
}: {
  serviceSlug: string;
  subserviceSlug: string;
}) {
  const service = getServiceBySlug(serviceSlug);

  if (!service) {
    notFound();
  }

  const subservice = service.subservices.find(
    (sub) => sub.slug === subserviceSlug
  );

  if (!subservice) {
    notFound();
  }

  return (
    <SubServiceDetailTemplate
      serviceTitle={service.hero.title}
      serviceSlug={serviceSlug}
      subservice={subservice}
      serviceVideoId={service.hero.youtubeVideoId}
    />
  );
}

export default async function SubServiceDetailPage({
  params,
}: SubServiceDetailPageProps) {
  const { serviceSlug, subserviceSlug } = await params;

  return (
    <Suspense fallback={<SubServiceDetailSkeleton />}>
      <SubServiceDetailContent
        serviceSlug={serviceSlug}
        subserviceSlug={subserviceSlug}
      />
    </Suspense>
  );
}

