"use client";

import { Navbar } from "@/components/layout/Navbar";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { memo } from "react";

export interface ServiceCardData {
  image?: string; // URL placeholder
  title: string;
  description: string;
  link?: string;
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
  // Default cards if none provided (for scaffolding/placeholder)
  const displayCards =
    cards.length > 0
      ? cards
      : Array(8).fill({
          title: "Service Feature",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        });

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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {displayCards.map((card, index) => (
              <ServiceCardComponent
                key={`${card.title}-${index}`}
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
const ServiceCardComponent = memo(function ServiceCardComponent({
  card,
  index,
}: {
  card: ServiceCardData;
  index: number;
}) {
  const cardContent = (
    <>
      {/* Card Image */}
      <div className="aspect-[16/10] bg-neutral-800 relative overflow-hidden">
        {card.image ? (
          <Image
            src={card.image}
            alt={card.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
            loading={index < 3 ? "eager" : "lazy"}
            quality={85}
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        ) : (
          <>
            <div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-500 will-change-transform" />
            <div className="absolute inset-0 flex items-center justify-center text-white/10 font-serif text-5xl">
              {index + 1}
            </div>
          </>
        )}
      </div>

      {/* Card Content */}
      <div className="p-8 flex-1 flex flex-col gap-6">
        <h3 className="text-3xl font-serif font-bold text-white group-hover:text-primary transition-colors duration-300">
          {card.title}
        </h3>
        <p className="text-white/70 text-base leading-relaxed flex-1 font-medium">
          {card.description}
        </p>

        <div className="w-full mt-4 rounded-full border-2 border-white/10 hover:border-primary hover:text-primary hover:bg-white/5 justify-between group/btn text-base font-bold py-6 transition-all duration-300 flex items-center px-6 cursor-pointer">
          <span>More Info</span>
          <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
        </div>
      </div>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.03, 0.3),
        ease: "easeOut",
      }}
      className="group flex flex-col bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:border-primary/50 transition-all duration-300 shadow-xl will-change-transform"
    >
      {card.link ? (
        <Link href={card.link} className="block">
          {cardContent}
        </Link>
      ) : (
        <div className="block">{cardContent}</div>
      )}
    </motion.div>
  );
});
