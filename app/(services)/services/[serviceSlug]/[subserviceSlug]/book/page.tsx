"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar } from "lucide-react";
import Link from "next/link";
import { getServiceBySlug } from "@/lib/services-data";

interface BookingPageProps {
  params: Promise<{
    serviceSlug: string;
    subserviceSlug: string;
  }>;
}

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
    }
  }, [service, subserviceSlug, router]);

  if (!service) {
    return null;
  }

  const subservice = service.subservices.find(
    (sub) => sub.slug === subserviceSlug
  );

  if (!subservice) {
    return null;
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 px-6 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto max-w-4xl">
          {/* Back Button */}
          <Link
            href={`/services/${serviceSlug}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to {service.hero.title}</span>
          </Link>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-6"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-bold">
              {subservice.title}
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {subservice.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Booking Placeholder Section */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card border border-white/10 rounded-2xl p-8 md:p-12 text-center space-y-8"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
              <Calendar className="w-8 h-8" />
            </div>
            <h2 className="font-serif text-3xl md:text-4xl text-foreground font-bold">
              Book Your Session
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Booking functionality will be available soon. Please contact us
              directly to schedule your {subservice.title} session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                variant="premium"
                size="lg"
                className="font-bold"
              >
                <a href="tel:+447726444360">Call to Book</a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="font-bold"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

