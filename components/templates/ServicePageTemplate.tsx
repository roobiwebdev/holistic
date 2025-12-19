"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

interface ServiceCard {
  image?: string; // URL placeholder
  title: string;
  description: string;
  link?: string;
}

interface ServicePageTemplateProps {
  title: string;
  subtitle?: string;
  description?: string; // Main description below title
  cards?: ServiceCard[];
}

export function ServicePageTemplate({
  title,
  subtitle,
  description,
  cards = [],
}: ServicePageTemplateProps) {
  
  // Default cards if none provided (for scaffolding/placeholder)
  const displayCards = cards.length > 0 ? cards : Array(8).fill({
    title: "Service Feature",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  });

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Video Placeholder */}
        <div className="absolute inset-0 z-0 bg-neutral-900">
           {/* Simulate Video with CSS Pattern or Placeholder */}
           <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1920&auto=format&fit=crop')] bg-cover bg-center opacity-40 mix-blend-overlay" />
           <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/20 to-black/90" />
           
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="border border-white/20 rounded-full p-6 backdrop-blur-sm animate-pulse">
                    <Play className="w-12 h-12 text-white/50 fill-white/20" />
                </div>
           </div>
           <div className="absolute bottom-8 right-8 text-white/20 text-xs font-mono border border-white/10 px-2 py-1 rounded">
                Background Video 
           </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto space-y-6">
            {subtitle && (
                <motion.span 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block text-primary font-bold tracking-[0.2em] uppercase text-sm md:text-base"
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-bold tracking-tight leading-tight"
            >
                {title}
            </motion.h1>
            {description && (
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
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
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="group flex flex-col bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden hover:border-primary/50 transition-colors duration-500 shadow-xl"
                    >
                        {/* Card Image */}
                        <div className="aspect-[16/10] bg-neutral-800 relative overflow-hidden">
                             {/* Placeholder Image */}
                             <div className="absolute inset-0 bg-neutral-800 group-hover:scale-105 transition-transform duration-700" />
                             <div className="absolute inset-0 flex items-center justify-center text-white/10 font-serif text-5xl">
                                {index + 1}
                             </div>
                        </div>

                        {/* Card Content */}
                        <div className="p-8 flex-1 flex flex-col gap-6">
                            <h3 className="text-3xl font-serif font-bold text-white group-hover:text-primary transition-colors">
                                {card.title} {index + 1}
                            </h3>
                            <p className="text-white/70 text-base leading-relaxed flex-1 font-medium">
                                {card.description}
                            </p>
                            
                            <Button 
                                variant="outline" 
                                size="lg" 
                                className="w-full mt-4 rounded-full border-2 border-white/10 hover:border-primary hover:text-primary hover:bg-white/5 justify-between group/btn text-base font-bold py-6"
                            >
                                <span>More Info</span>
                                <ArrowRight className="w-5 h-5 transition-transform group-hover/btn:translate-x-1" />
                            </Button>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
      </section>

    </main>
  );
}
