"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import Image from "next/image";

const VALUES = [
  {
    title: "Heart-Led Healing",
    description: "We do everything with love. Every session, every treatment, and every interaction is guided by genuine care, presence, and compassion. We hold space for our clients without judgement, attachment, or ego — offering healing that is grounded in sincerity and soul.",
    color: "bg-purple-500/10 border-purple-500/20",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Frequency & Energetic Integrity",
    description: "We believe in the wisdom of energy. From the therapies we offer to the presence we hold, everything at Holistic Rising is designed to support energetic coherence and inner balance. We use frequency-based modalities to help reset the system and return the body and mind to homeostasis.",
    color: "bg-blue-500/10 border-blue-500/20",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Fluidity & Flexibility",
    description: "Healing is not linear. We honour the uniqueness of every individual and remain adaptable in our approach. By fusing modalities and flowing with intuition, we meet our clients exactly where they are — moment to moment — with the tools they need at that time.",
    color: "bg-emerald-500/10 border-emerald-500/20",
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    title: "Self-Love & Empowerment",
    description: "We are ambassadors for self-love. Our work supports deep connection to self — not by fixing, but by walking alongside each person on their healing journey. We empower our clients with tools, knowledge, and care so they leave feeling seen, supported, and more connected to their true essence.",
    color: "bg-rose-500/10 border-rose-500/20",
    image: "https://images.unsplash.com/photo-1515023115689-589c33041697?q=80&w=1200&auto=format&fit=crop"
  },
];

export function CoreValues() {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-24 md:mb-32">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary"
            >
                Core Values at Holistic Rising
            </motion.h2>
        </div>

        {/* Values List */}
        <div className="flex flex-col gap-24 md:gap-32">
            {VALUES.map((value, index) => (
                <div key={index} className={cn(
                    "flex flex-col md:flex-row items-center gap-12 md:gap-24",
                    index % 2 === 1 ? "md:flex-row-reverse" : ""
                )}>
                    
                    {/* Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="flex-1 text-center md:text-left"
                    >
                        <h3 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
                            {value.title}
                        </h3>
                        <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-sans">
                            {value.description}
                        </p>
                    </motion.div>

                    {/* Image Placeholder */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex-1 w-full"
                    >
                        <div className={cn(
                            "aspect-video md:aspect-[4/3] w-full rounded-2xl border overflow-hidden relative group shadow-2xl",
                            value.color
                        )}>
                             <Image
                                src={value.image}
                                alt={value.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                sizes="(max-width: 768px) 100vw, 50vw"
                             />
                             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                    </motion.div>

                </div>
            ))}
        </div>

      </div>
    </section>
  );
}
