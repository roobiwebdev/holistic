"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

export function OurPhilosophy() {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Title (Centered Top) */}
        <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 md:mb-24"
        >
             <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary">
              Our Philosophy
            </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column: Video Placeholder */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 group cursor-pointer"
            >
                {/* Placeholder visual */}
                <div className="absolute inset-0 bg-secondary/30 backdrop-blur-sm flex items-center justify-center transition-all duration-500 group-hover:bg-secondary/20">
                    <div className="w-20 h-20 rounded-full border border-primary/50 flex items-center justify-center bg-black/50 backdrop-blur-md group-hover:scale-110 transition-transform duration-300">
                        <Play className="w-8 h-8 text-primary ml-1" fill="currentColor" />
                    </div>
                </div>
                {/* Decorative gradients */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-6 left-6 text-white font-serif text-xl z-20">
                    Watch our journey
                </div>
            </motion.div>

            {/* Right Column: Content */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col gap-8 text-foreground"
            >
                <div className="space-y-6 text-lg md:text-xl leading-relaxed font-sans text-muted-foreground">
                    <p>
                        At the heart of everything we do is <span className="text-primary font-serif italic text-2xl">love</span>. We believe in working with compassion, presence, and without judgement. We hold space — not with the aim to "fix" — but to support your own inner healing process.
                    </p>
                    <p>
                        We honour <span className="text-foreground font-semibold">fluidity, flexibility, and frequency</span>. Healing is not linear — it’s a layered, ongoing journey. Like peeling back the layers of an onion, each session may reveal something new. We walk beside you through each layer with care, respect, and unconditional support.
                    </p>
                    <p>
                        Our work is grounded in <span className="text-primary font-serif italic">frequency medicine</span> — combining modalities that carry different energetic vibrations to bring the body and mind back into homeostasis. We reset your system in-clinic, then provide tailored aftercare: simple, practical lifestyle shifts and supportive tools to help you carry that sense of balance and clarity into everyday life.
                    </p>
                    <p className="text-foreground font-semibold border-l-2 border-primary pl-6 py-2">
                        Whether you return for yoga, healing sound, or a new therapy to meet you at your next level — we are here for you.
                    </p>
                </div>
            </motion.div>
        </div>

      </div>
    </section>
  );
}
