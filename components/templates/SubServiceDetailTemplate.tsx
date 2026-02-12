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
          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed mb-12 space-y-4"
          >
            {(subservice.fullDescription || subservice.description)
              .split("\n")
              .map((paragraph, index) =>
                paragraph.trim() ? (
                  <p key={index}>{paragraph}</p>
                ) : null
              )}
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-16"
          >
            {/* Benefits Section */}
            {subservice.benefits && subservice.benefits.length > 0 && (
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground font-bold mb-8 text-center">
                  Benefits
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                  {subservice.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.05 }}
                      className="flex items-start gap-4 text-muted-foreground"
                    >
                      <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-base md:text-lg leading-relaxed">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            )}

            {/* Pricing Section */}
            {subservice.pricingOptions &&
              subservice.pricingOptions.length > 0 ? (
              <div>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground font-bold mb-8 text-center">
                  Pricing & Booking
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {subservice.pricingOptions.map((option, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="bg-card border border-white/10 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300 flex flex-col h-full"
                    >
                      <div className="flex flex-col gap-2 mb-6 flex-grow">
                        <div>
                          <h3 className="font-serif text-xl md:text-2xl text-foreground font-bold mb-1">
                            {option.duration}
                          </h3>
                        </div>
                        <div className="">
                          <p className="font-serif text-2xl md:text-3xl text-primary font-bold">
                            {option.price}
                          </p>
                        </div>
                      </div>
                      <VagaroBookButton
                        variant="premium"
                        size="lg"
                        className="w-full font-bold"
                        bookingUrl={option.bookingUrl}
                      >
                        Book Now
                      </VagaroBookButton>
                    </motion.div>
                  ))}
                </div>
              </div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
                className="max-w-md mx-auto"
              >
                <VagaroBookButton
                  variant="premium"
                  size="lg"
                  className="w-full font-bold"
                >
                  Book a Session
                </VagaroBookButton>
              </motion.div>
            )}
          </motion.div>
        </div>
      </section>
    </main>
  );
}

