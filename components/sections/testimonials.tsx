"use client";

import { motion } from "framer-motion";

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary"
            >
                Testimonials
            </motion.h2>
        </div>

        {/* Dynamic Widget Placeholder Container */}
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full max-w-5xl mx-auto"
        >
            <div className="w-full min-h-[400px] border border-primary/30 rounded-3xl bg-card/50 flex flex-col items-center justify-center p-12 text-center relative overflow-hidden group">
                
                {/* Decorative Elements */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 opacity-50" />
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />

                <div className="relative z-10 max-w-lg">
                    <p className="font-serif text-2xl md:text-3xl text-foreground/80 mb-4">
                        Client Love
                    </p>
                    <p className="font-sans text-muted-foreground">
                        Loading dynamic reviews from Vagaro...
                    </p>
                    
                    {/* Simulated Loading State Visual */}
                    <div className="mt-8 flex gap-2 justify-center">
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.3s]" />
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce [animation-delay:-0.15s]" />
                        <div className="w-2 h-2 bg-primary rounded-full animate-bounce" />
                    </div>
                </div>

            </div>
            
            <p className="text-center text-xs text-muted-foreground mt-4 uppercase tracking-widest opacity-50">
                Powered by Vagaro
            </p>

        </motion.div>

      </div>
    </section>
  );
}
