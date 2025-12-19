"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

export function OurStory() {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Title */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-serif text-5xl md:text-5xl lg:text-6xl text-primary mb-12">
              Our Story
            </h2>
          </motion.div>

          {/* Main Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="prose prose-lg md:prose-xl prose-invert text-foreground leading-relaxed font-sans"
          >
            <p className="mb-8 text-xl">
              At <span className="text-primary font-bold">Holistic Rising</span>, we are more than just a healing clinic - we are a sanctuary for the soul, mind, and body.
              Founded by mother-and-son duo <span className="text-primary font-serif italic">Maria Sarmiento</span> and <span className="text-primary font-serif italic">Diego Robinson</span>, we come from a long lineage of South American shamanic healers.
            </p>
            <p className="text-xl">
              Together, we created <span className="text-primary font-bold">Holistic Rising</span> with a shared vision: to offer healing that is heartfelt, intentional, and rooted in ancient wisdom - while remaining fluid, adaptable, and fully present with each individual who walks through our doors.
            </p>
          </motion.div>

          {/* Locations Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-20 mb-12"
          >
            <h3 className="font-serif text-2xl text-foreground bg-primary/10 px-8 py-2 rounded-full border border-primary/20">
              We currently have three healing clinics
            </h3>
          </motion.div>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-3xl">
            
            {/* London Column */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col items-center p-8 bg-card border border-white/5 rounded-2xl hover:border-primary/30 transition-colors duration-500 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                 <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-serif text-2xl text-foreground mb-6">London</h4>
              <ul className="space-y-3 text-muted-foreground/80">
                <li className="flex flex-col">
                  <span className="font-semibold text-foreground">HR/DR Clinic</span>
                  <span className="text-sm">Wanstead, E11</span>
                </li>
                <li className="w-12 h-px bg-primary/20 mx-auto my-2" />
                <li className="flex flex-col">
                  <span className="font-semibold text-foreground">HR/DR Clinic</span>
                  <span className="text-sm">London, E18</span>
                </li>
              </ul>
            </motion.div>

            {/* Essex Column */}
             <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col items-center p-8 bg-card border border-white/5 rounded-2xl hover:border-primary/30 transition-colors duration-500 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                 <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-serif text-2xl text-foreground mb-6">Essex</h4>
              <ul className="space-y-3 text-muted-foreground/80">
                <li className="flex flex-col">
                  <span className="font-semibold text-foreground">HR Clinic</span>
                  <span className="text-sm">Romford, RM5</span>
                </li>
              </ul>
            </motion.div>

{/* Essex Column */}
             <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col items-center p-8 bg-card border border-white/5 rounded-2xl hover:border-primary/30 transition-colors duration-500 group"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                 <MapPin className="w-6 h-6 text-primary" />
              </div>
              <h4 className="font-serif text-2xl text-foreground mb-6">Essex</h4>
              <ul className="space-y-3 text-muted-foreground/80">
                <li className="flex flex-col">
                  <span className="font-semibold text-foreground">HR Clinic</span>
                  <span className="text-sm">Romford, RM5</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
