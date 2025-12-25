"use client";

import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { memo, useState } from "react";

export interface ServiceCardData {
  image?: string; // URL placeholder
  title: string;
  description: string;
  link?: string;
  ctaLabel?: string; // Custom button label (defaults to "More Info")
}

interface ServicePageTemplateProps {
  title: string;
  subtitle?: string;
  description?: string; // Main description below title
  heroYoutubeVideoId?: string; // YouTube video ID for background
  cards?: ServiceCardData[];
}

export function ServicePageTemplate({
  title,
  subtitle,
  description,
  heroYoutubeVideoId,
  cards = [],
}: ServicePageTemplateProps) {
  // Use cards directly - no need for default fallback in production
  const displayCards = cards;

  // Generate YouTube embed URL
  const youtubeEmbedUrl = heroYoutubeVideoId
    ? `https://www.youtube.com/embed/${heroYoutubeVideoId}?autoplay=1&mute=1&loop=1&playlist=${heroYoutubeVideoId}&controls=0&showinfo=0&rel=0&playsinline=1&enablejsapi=1&iv_load_policy=3`
    : null;

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 z-0 bg-neutral-900">
          {youtubeEmbedUrl ? (
            <>
              {/* Helper overlay to darken video slightly */}
              <div className="absolute inset-0 bg-black/40 z-10" />
              {/* YouTube Video Embed */}
              <div className="relative w-full h-full overflow-hidden">
                <iframe
                  className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
                  src={youtubeEmbedUrl}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  style={{ border: "none" }}
                  loading="lazy"
                  title="Background video"
                  allowFullScreen={false}
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90 z-10" />
            </>
          ) : (
            <>
              {/* Fallback placeholder if no video */}
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="border border-white/20 rounded-full p-6 backdrop-blur-sm animate-pulse">
                  <Play className="w-12 h-12 text-white/50 fill-white/20" />
                </div>
              </div>
            </>
          )}
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto space-y-6">
          {subtitle && (
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="inline-block text-primary font-bold tracking-[0.2em] uppercase text-sm md:text-base"
            >
              {subtitle}
            </motion.span>
          )}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05, ease: "easeOut" }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight leading-tight"
          >
            {title}
          </motion.h1>
          {description && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
              className="text-lg md:text-2xl text-white/80 max-w-3xl mx-auto font-sans font-light leading-relaxed"
            >
              {description}
            </motion.p>
          )}
        </div>
      </section>

      {/* Cards Grid Section */}
      <section className="py-24 px-6 bg-background relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {displayCards.map((card, index) => (
              <ServiceCardComponent
                key={`${card.title}-${card.link || index}`}
                card={card}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

// Memoized card component for better performance
const ServiceCardComponent = memo(
  function ServiceCardComponent({
    card,
    index,
  }: {
    card: ServiceCardData;
    index: number;
  }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const MAX_LENGTH = 150; // Characters before showing "read more"
    const shouldTruncate = card.description.length > MAX_LENGTH;
    const displayText =
      shouldTruncate && !isExpanded
        ? card.description.slice(0, MAX_LENGTH)
        : card.description;

    const hasLink = !!card.link;
    const isPriority = index < 6; // Load first 6 images with priority

    const cardContent = (
      <>
        {/* Card Image */}
        <div className="aspect-[16/10] bg-neutral-800 relative overflow-hidden shrink-0">
          {card.image ? (
            <Image
              src={card.image}
              alt={card.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              loading={isPriority ? "eager" : "lazy"}
              priority={isPriority}
              quality={75}
              unoptimized={false}
              fetchPriority={isPriority ? "high" : "auto"}
            />
          ) : (
            <>
              <div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 flex items-center justify-center text-white/10 font-serif text-5xl">
                {index + 1}
              </div>
            </>
          )}
        </div>

        {/* Card Content */}
        <div className="p-6 md:p-8 flex-1 flex flex-col gap-4 md:gap-6">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-white group-hover:text-primary transition-colors duration-200">
            {card.title}
          </h3>
          <p className="text-white/70 text-sm md:text-base leading-relaxed flex-1 font-medium">
            {displayText}
            {shouldTruncate && (
              <>
                {!isExpanded && "..."}
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setIsExpanded(!isExpanded);
                  }}
                  className="text-primary hover:text-primary/80 font-semibold ml-1 underline underline-offset-2 transition-colors"
                >
                  {isExpanded ? "Show less" : "Read more"}
                </button>
              </>
            )}
          </p>

          {/* Button Design */}
          <div className="mt-6 md:mt-8 pt-4 md:pt-6 w-full border-t border-white/10">
            {hasLink ? (
              <div className="w-full rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)] flex justify-between items-center px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-bold transition-all duration-200 group/btn text-white cursor-pointer relative overflow-hidden">
                <span className="relative z-10 truncate">
                  {card.ctaLabel || "More Info"}
                </span>
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover/btn:translate-x-1 relative z-10 flex-shrink-0 ml-2" />
              </div>
            ) : (
              <div
                className="w-full rounded-full border border-white/10 bg-white/5 backdrop-blur-sm hover:border-primary/50 hover:bg-primary/10 hover:shadow-[0_0_20px_-5px_rgba(124,58,237,0.5)] flex justify-between items-center px-4 md:px-6 py-3 md:py-4 text-sm md:text-base font-bold transition-all duration-200 group/btn text-white/50 cursor-pointer relative overflow-hidden"
                onClick={(e) => {
                  e.preventDefault();
                  setIsExpanded(!isExpanded);
                }}
              >
                <span className="relative z-10">
                  {isExpanded ? "Show Less" : "Read More"}
                </span>
                <ArrowRight
                  className={`w-4 h-4 md:w-5 md:h-5 transition-transform duration-200 relative z-10 flex-shrink-0 ml-2 ${
                    isExpanded ? "-rotate-90" : "group-hover/btn:translate-x-1"
                  }`}
                />
              </div>
            )}
          </div>
        </div>
      </>
    );

    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "0px" }}
        transition={{
          duration: 0.3,
          delay: Math.min(index * 0.02, 0.15),
          ease: [0.25, 0.1, 0.25, 1],
        }}
        className="group flex flex-col bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-xl h-full"
      >
        {card.link ? (
          <Link href={card.link} className="block h-full flex flex-col">
            {cardContent}
          </Link>
        ) : (
          <div className="block h-full flex flex-col">{cardContent}</div>
        )}
      </motion.div>
    );
  },
  (prevProps, nextProps) => {
    // Custom comparison for memo - only re-render if card data actually changed
    return (
      prevProps.card.title === nextProps.card.title &&
      prevProps.card.description === nextProps.card.description &&
      prevProps.card.image === nextProps.card.image &&
      prevProps.card.link === nextProps.card.link &&
      prevProps.card.ctaLabel === nextProps.card.ctaLabel &&
      prevProps.index === nextProps.index
    );
  }
);
