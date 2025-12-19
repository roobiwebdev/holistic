"use client";

import { motion } from "framer-motion";

export function FrequencyMedicine() {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10 w-full">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left Column: Video Embed */}
            <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-full"
            >
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-primary/10">
                     <iframe 
                        className="absolute inset-0 w-full h-full"
                        src="https://www.youtube.com/embed/HrMH6nOvKzg?si=HolisticRising" 
                        title="Frequency Medicine at Holistic Rising" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                        referrerPolicy="strict-origin-when-cross-origin" 
                        allowFullScreen
                    />
                </div>
            </motion.div>

            {/* Right Column: Content */}
            <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col gap-6 text-foreground"
            >
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-primary mb-4 leading-tight">
                    Frequency Medicine at Holistic Rising: <br/>
                    <span className="text-white italic text-2xl md:text-3xl">A New Paradigm of Healing</span>
                </h2>

                <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-sans">
                    <p>
                        At the heart of Holistic Rising’s philosophy is <span className="text-foreground font-semibold">Frequency Medicine</span> — a forward-thinking approach that views the body as an energetic system where every cell, organ, and emotion vibrates at a specific frequency. When these frequencies become imbalanced — whether through stress, trauma, illness, or emotional overwhelm — our natural state of harmony is disrupted, leading to symptoms in the body, mind, or spirit.
                    </p>
                    <p>
                        Holistic Rising’s ethos is built on restoring these vibrational imbalances. Through a range of therapeutic practices that focus on energetic alignment — such as vibrational healing, sound work, intuitive bodywork, and meditative practices — clients are supported in returning to their natural state of resonance, wellbeing, and clarity.
                    </p>
                    <p>
                        This approach goes beyond symptom management. Frequency Medicine seeks to uncover and shift the root cause of imbalance, addressing the individual as a whole and inviting deep, lasting transformation. Every treatment is tailored, intuitive, and grounded in the understanding that healing occurs when the body is brought back into vibrational coherence.
                    </p>
                </div>
            </motion.div>

        </div>

      </div>
    </section>
  );
}
