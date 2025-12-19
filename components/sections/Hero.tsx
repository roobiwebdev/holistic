"use client";

import * as React from "react";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-black">
      {/* Video Background Layer */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0">
        {/* Helper overlay to darken video slightly before the main gradient */}
        <div className="absolute inset-0 bg-black/40 z-10" />

        {/* The wrapper ensures the iframe covers the screen (CSS aspect ratio trick) */}
        <div className="relative w-full h-full overflow-hidden">
          {/* 
                Scale 150% is a hack to zoom in and avoid black bars/controls showing on most screens.
                For perfect cover, we'd use JS or complex CSS aspect-ratio media queries.
                For now, a generous scale works well for 'atmospheric' backgrounds.
              */}
          <iframe
            className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none"
            src="https://www.youtube.com/embed/S_-e1AOuPug?autoplay=1&mute=1&loop=1&playlist=S_-e1AOuPug&controls=0&showinfo=0&rel=0&playsinline=1&enablejsapi=1&iv_load_policy=3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{ border: "none" }}
          />
        </div>
      </div>

      {/* Main Content Overlay */}
      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center">
        {/* Top Location Tag */}
        <div className="mb-6 animate-fade-in-up">
          <span className="text-xs md:text-sm uppercase tracking-[0.3em] text-white/70">
            London • Essex • Dubai
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight max-w-5xl tracking-normal animate-fade-in-up delay-100">
          An Alternative <br />
          Approach to <span className="italic text-primary">Healing</span>
        </h1>

        {/* Subheading Description */}
        <p className="font-sans text-white/80 text-lg md:text-xl max-w-2xl mb-12 leading-relaxed animate-fade-in-up delay-200">
          A sanctuary for the soul, mind, and body. Rooted in ancient wisdom,
          designed for modern healing.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row items-center gap-6 animate-fade-in-up delay-300">
          <Button
            variant="default"
            className="bg-primary text-primary-foreground hover:bg-primary/90 border-none min-w-[200px] rounded-full font-bold"
          >
            Explore the Experience
          </Button>
          <Button
            variant="outline"
            className="text-white border-white/30 hover:bg-white/10 hover:border-white min-w-[200px] rounded-full backdrop-blur-sm font-bold"
          >
            Our Philosophy
          </Button>
        </div>
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce cursor-pointer opacity-70 hover:opacity-100 transition-opacity">
        <div className="w-[30px] h-[50px] rounded-full border border-white/30 flex justify-center p-2">
          <div className="w-1 h-2 bg-white rounded-full animate-scroll-indicator" />
        </div>
      </div>

      {/* Decorative Gradient at bottom to blend with next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-primary/20 dark:from-background to-transparent z-10" />
    </section>
  );
}
