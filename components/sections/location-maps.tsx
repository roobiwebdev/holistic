"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const LOCATIONS = [
  {
    name: "London Address",
    address: "15 High Street Wanstead, London, E11 2AA",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2480.086432688005!2d0.02487631577239384!3d51.56689697964491!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a7099238914b%3A0x88484a0d8e8c8b0!2s15%20High%20St%2C%20Wanstead%2C%20London%20E11%202AA%2C%20UK!5e0!3m2!1sen!2suk!4v1645000000000!5m2!1sen!2suk" // Simplified embed generic/approximation if specific generated one isn't available, but using q param usually works for simple iframe. Let's use the query generic version for robustness if we don't have API keys or specific embed IDs.
  },
  {
    name: "South Woodford Address",
    address: "9 The Shrubberies, London, E18 1BD",
    mapUrl: "https://www.google.com/maps?q=9+The+Shrubberies,+London,+E18+1BD&output=embed"
  },
  {
    name: "Essex Address",
    address: "6 Hog Hill Road, Romford, RM5 2DH",
    mapUrl: "https://www.google.com/maps?q=6+Hog+Hill+Road,+Romford,+RM5+2DH&output=embed"
  }
];

export function LocationMaps() {
  return (
    <section className="relative py-20 bg-background text-foreground overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-12">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-serif text-3xl md:text-4xl text-foreground font-bold"
            >
                Our Locations
            </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {LOCATIONS.map((loc, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col gap-4 group"
                >
                    <div className="flex items-center gap-2 text-foreground">
                        <MapPin className="w-5 h-5 text-primary" />
                        <h3 className="font-serif text-xl">{loc.name}</h3>
                    </div>

                    {/* Map Container */}
                    <div className="w-full aspect-video md:aspect-square lg:aspect-video rounded-xl overflow-hidden border border-white/10 shadow-lg bg-card relative">
                         {/* Fallback/iframe */}
                         <iframe 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }}
                            loading="lazy"
                            allowFullScreen
                            src={index === 0 ? "https://www.google.com/maps?q=15+High+Street+Wanstead,+London,+E11+2AA&output=embed" : loc.mapUrl} 
                            title={`${loc.name} Map`}
                            className="absolute inset-0 transition-all duration-500"
                        />
                    </div>

                    <p className="text-sm text-muted-foreground font-sans pl-1 border-l-2 border-primary/50 pl-3">
                        {loc.address}
                    </p>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}
