"use client";

import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { ArrowLeft, Check, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { SubService } from "@/lib/services-data";
import { VagaroBookButton } from "@/components/booking/VagaroBookButton";

interface SubServiceDetailTemplateProps {
  serviceTitle: string;
  serviceSlug: string;
  subservice: SubService;
  serviceVideoId?: string; // Fallback to service hero video
}

export function SubServiceDetailTemplate({
  serviceTitle,
  serviceSlug,
  subservice,
  serviceVideoId,
}: SubServiceDetailTemplateProps) {
  // Use sub-service video if available, otherwise fallback to service hero video
  const videoId = subservice.videoId || serviceVideoId;
  const videoEmbedUrl = videoId
    ? `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`
    : null;

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
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg md:text-xl text-muted-foreground max-w-4xl leading-relaxed mb-12"
          >
            {subservice.fullDescription || subservice.description}
          </motion.p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 md:py-24 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Video or Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              {videoEmbedUrl ? (
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
                  <iframe
                    src={videoEmbedUrl}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    title={subservice.title}
                  />
                </div>
              ) : subservice.image ? (
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl">
                  <Image
                    src={subservice.image}
                    alt={subservice.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    quality={90}
                  />
                </div>
              ) : (
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 shadow-2xl flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-white/20 mx-auto mb-4" />
                    <p className="text-white/40 text-sm">Video Coming Soon</p>
                  </div>
                </div>
              )}
            </motion.div>

            {/* Right: Benefits and Pricing */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2 space-y-12"
            >
              {/* Benefits Section */}
              {subservice.benefits && subservice.benefits.length > 0 && (
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground font-bold mb-8">
                    Benefits
                  </h2>
                  <ul className="space-y-4">
                    {subservice.benefits.map((benefit, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="flex items-start gap-4 text-muted-foreground"
                      >
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mt-1">
                          <Check className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-base md:text-lg leading-relaxed">
                          {benefit}
                        </span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Pricing Section */}
              {subservice.pricingOptions &&
              subservice.pricingOptions.length > 0 ? (
                <div>
                  <h2 className="font-serif text-3xl md:text-4xl text-foreground font-bold mb-8">
                    Pricing
                  </h2>
                  <div className="space-y-4">
                    {subservice.pricingOptions.map((option, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="bg-card border border-white/10 rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-all duration-300"
                      >
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                          <div>
                            <h3 className="font-serif text-xl md:text-2xl text-foreground font-bold mb-1">
                              {subservice.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {option.duration}
                            </p>
                          </div>
                          <div className="text-right">
                            <p className="font-serif text-2xl md:text-3xl text-primary font-bold">
                              {option.price}
                            </p>
                          </div>
                        </div>
                        <VagaroBookButton
                          variant="premium"
                          size="lg"
                          className="w-full font-bold"
                          bookingUrl={subservice.bookingUrl}
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
                  className="bg-card border border-white/10 rounded-2xl p-6 md:p-8"
                >
                  <VagaroBookButton
                    variant="premium"
                    size="lg"
                    className="w-full font-bold"
                    bookingUrl={subservice.bookingUrl}
                  >
                    Book a Session
                  </VagaroBookButton>
                </motion.div>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}

