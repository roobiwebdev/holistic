"use client";

import { motion } from "framer-motion";
import { MapPin, Clock, Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";

const LOCATIONS = [
  {
    name: "London — Wanstead",
    address: "15 High Street Wanstead, London, E11 2AA"
  },
  {
    name: "London — South Woodford",
    address: "9 The Shrubberies, London, E18 1BD"
  },
  {
    name: "Essex — Romford",
    address: "6 Hog Hill Road, Romford, RM5 2DH"
  }
];

const HOURS = [
  { day: "Sunday", time: "10:00 AM - 9:00 PM" },
  { day: "Monday", time: "10:00 AM - 9:00 PM" },
  { day: "Tuesday", time: "10:00 AM - 9:00 PM" },
  { day: "Wednesday", time: "10:00 AM - 9:00 PM" },
  { day: "Thursday", time: "10:00 AM - 9:00 PM" },
  { day: "Friday", time: "10:00 AM - 9:00 PM" },
  { day: "Saturday", time: "10:00 AM - 9:00 PM" },
];

export function VisitUs() {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 md:mb-24">
            <motion.p 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-primary text-sm uppercase tracking-[0.2em] mb-4 font-semibold"
            >
                Visit Us
            </motion.p>
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
            >
                Begin your healing journey
            </motion.h2>
            <motion.p
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="text-muted-foreground font-sans text-lg"
            >
                Every session is designed to meet you where you are.
            </motion.p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start max-w-7xl mx-auto">
            
            {/* 1. Locations Card */}
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-card/30 border border-white/10 rounded-3xl p-8 md:p-10 h-full hover:border-primary/30 transition-colors"
            >
                <div className="flex items-center gap-3 mb-8 text-primary">
                    <MapPin className="w-6 h-6" />
                    <h3 className="font-serif text-2xl text-foreground">Locations</h3>
                </div>
                <div className="space-y-8">
                    {LOCATIONS.map((loc, i) => (
                        <div key={i} className="group">
                            <h4 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">{loc.name}</h4>
                            <p className="text-muted-foreground text-sm font-sans">{loc.address}</p>
                        </div>
                    ))}
                </div>
            </motion.div>

            {/* 2. Hours Card (Highlighted) */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-primary/90 text-white rounded-3xl p-8 md:p-10 shadow-2xl shadow-primary/20 relative overflow-hidden -mt-4 lg:-mt-8 mb-4 lg:mb-0 lg:scale-105 z-10"
            >
                {/* Subtle Grain/Texture Overlay */}
                <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay" />
                
                <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-8">
                        <Clock className="w-6 h-6 text-white/90" />
                        <h3 className="font-serif text-2xl text-white">Hours</h3>
                    </div>
                    <ul className="space-y-4 font-sans text-sm md:text-base">
                        {HOURS.map((slot, i) => (
                            <li key={i} className="flex justify-between items-center border-b border-white/20 pb-2 last:border-0 last:pb-0">
                                <span className="opacity-80">{slot.day}</span>
                                <span className="font-semibold">{slot.time}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </motion.div>

            {/* 3. Contact Card */}
            <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-card/30 border border-white/10 rounded-3xl p-8 md:p-10 h-full hover:border-primary/30 transition-colors flex flex-col"
            >
                <div className="flex items-center gap-3 mb-8 text-primary">
                    <Mail className="w-6 h-6" />
                    <h3 className="font-serif text-2xl text-foreground">Get in Touch</h3>
                </div>
                
                <p className="text-muted-foreground mb-10 leading-relaxed">
                    For bookings and inquiries, please reach out via email.
                </p>

                <div className="mt-auto">
                    <Button 
                        asChild
                        className="w-full bg-primary/20 hover:bg-primary hover:text-white text-primary border border-primary/30 rounded-full py-6 transition-all duration-300"
                    >
                        <a href="mailto:maria@holistic-rising.com">
                            maria@holistic-rising.com
                        </a>
                    </Button>
                </div>
            </motion.div>

        </div>

      </div>
    </section>
  );
}
