"use client";

import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import Link from "next/link";
import { SubService } from "@/lib/services-data";
import { VagaroBookButton } from "@/components/booking/VagaroBookButton";

interface SubServiceDetailTemplateProps {
  serviceTitle: string;
  serviceSlug: string;
  subservice: SubService;
}

export function SubServiceDetailTemplate({
  serviceTitle,
  serviceSlug,
  subservice,
}: SubServiceDetailTemplateProps) {


  // Booking now handled by Vagaro widget - no need for bookingUrl

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 md:py-24 px-6 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto max-w-7xl">
          {/* Back Button */}
          <Link
            href={`/services/${serviceSlug}`}
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Back to {serviceTitle}</span>
          </Link>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-bold mb-6"
          >
            {subservice.title}
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed mb-12"
          >
            <p>{subservice.description}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="max-w-4xl mx-auto mb-24">
            {/* Benefits Narrative */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary font-bold text-center lg:text-left">
                Benefits
              </h2>
              <div className="text-base md:text-lg text-muted-foreground leading-relaxed space-y-6">
                {(subservice.fullDescription || "").split("\n").map((line, i) => {
                  const trimmedLine = line.trim();
                  if (!trimmedLine) return null;

                  if (trimmedLine.startsWith("•") || trimmedLine.startsWith("-")) {
                    return (
                      <div key={i} className="flex gap-3 pl-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span>{trimmedLine.replace(/^[•-]\s*/, "")}</span>
                      </div>
                    );
                  }

                  return <p key={i}>{trimmedLine}</p>;
                })}
              </div>

              {/* Highlights List if present */}
              {subservice.benefits && subservice.benefits.length > 0 && (
                <div className="pt-8 border-t border-white/10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {subservice.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-center gap-3 text-muted-foreground">
                        <Check className="w-5 h-5 text-primary shrink-0" />
                        <span className="text-sm font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </div>

          {/* Pricing Section - Centered below */}
          {subservice.pricingOptions && subservice.pricingOptions.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-serif text-3xl md:text-4xl text-foreground font-bold mb-12 text-start">
                Pricing & Booking
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {subservice.pricingOptions.map((option, index) => (
                  <div
                    key={index}
                    className="bg-card border border-white/10 rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 flex flex-col h-full items-center text-center"
                  >
                    <h3 className="font-serif text-xl md:text-2xl text-foreground font-bold mb-2">
                      {option.duration}
                    </h3>
                    <p className="font-serif text-3xl md:text-4xl text-primary font-bold mb-8">
                      {option.price}
                    </p>
                    <VagaroBookButton
                      variant="premium"
                      size="lg"
                      className="w-full font-bold"
                      bookingUrl={option.bookingUrl}
                    >
                      Book Now
                    </VagaroBookButton>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </main>
  );
}

