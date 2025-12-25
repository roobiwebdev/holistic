"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { getServiceBySlug } from "@/lib/services-data";

interface BookingPageProps {
  params: Promise<{
    serviceSlug: string;
    subserviceSlug: string;
  }>;
}

/**
 * Booking page redirects to the subservice detail page
 * where the Vagaro booking widget is available via the "Book Now" button
 */
export default function BookingPage({ params }: BookingPageProps) {
  const router = useRouter();
  const { serviceSlug, subserviceSlug } = use(params);
  const service = getServiceBySlug(serviceSlug);

  useEffect(() => {
    if (!service) {
      router.push("/404");
      return;
    }
    
    const subservice = service.subservices.find(
      (sub) => sub.slug === subserviceSlug
    );
    
    if (!subservice) {
      router.push("/404");
      return;
    }

    // Redirect to the subservice detail page where booking widget is available
    router.replace(`/services/${serviceSlug}/${subserviceSlug}`);
  }, [service, serviceSlug, subserviceSlug, router]);

  // Show nothing while redirecting
  return null;
}

