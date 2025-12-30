"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const ALL_LOCATIONS = [
  {
    region: "London Clinics :",
    name: "Wanstead flagship",
    address: "15 High Street Wanstead, London, E11 2AA",
    mapUrl: "https://www.google.com/maps?q=15+High+Street+Wanstead,+London,+E11+2AA&output=embed"
  },
  {
    region: "London Clinics :",
    name: "South Woodford",
    address: "9 The Shrubberies, London, E18 1BD",
    mapUrl: "https://www.google.com/maps?q=9+The+Shrubberies,+London,+E18+1BD&output=embed"
  },
  {
    region: "Essex Clinic:",
    name: "Romford .",
    address: "6 Hog Hill Road, Romford, RM5 2DH",
    mapUrl: "https://www.google.com/maps?q=6+Hog+Hill+Road,+Romford,+RM5+2DH&output=embed"
  },
  // {
  //   region: "Dubai Clinic:",
  //   name: "DR / HR Sports Clinic Dubai",
  //   address: "Visit drsportsclinic.co.uk for details",
  //   isLink: true,
  //   href: "https://drsportsclinic.co.uk/",
  //   mapUrl: null
  // }
];

export function LocationMaps() {
  return (
    <section className="relative py-24 bg-background text-foreground overflow-hidden border-t border-white/5 font-sans">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground font-bold"
            >
                Our Locations
            </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 max-w-7xl mx-auto">
            {ALL_LOCATIONS.map((loc, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex flex-col gap-6 group"
                >
                    <div className="space-y-2">
                        <span className="text-primary text-[10px] uppercase tracking-[0.2em] font-bold border-l-2 border-primary pl-3 block">
                            {loc.region}
                        </span>
                        <div className="flex items-center gap-3 text-foreground">
                            <MapPin className="w-5 h-5 text-primary/60" />
                            <h4 className="font-serif text-2xl group-hover:text-primary transition-colors duration-300">{loc.name}</h4>
                        </div>
                    </div>

                    {/* Map Container */}
                    <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-card relative group/map">
                         {loc.mapUrl ? (
                             <iframe 
                                width="100%" 
                                height="100%" 
                                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.8) contrast(1.2)" }}
                                loading="lazy"
                                allowFullScreen
                                src={loc.mapUrl} 
                                title={`${loc.name} Map`}
                                className="absolute inset-0 transition-all duration-700 opacity-60 group-hover/map:opacity-100 group-hover/map:scale-105"
                            />
                         ) : (
                             <div className="absolute inset-0 flex items-center justify-center p-8 text-center bg-primary/5 transition-colors group-hover/map:bg-primary/10">
                                 <div className="space-y-4">
                                     <p className="text-muted-foreground italic font-serif">Experience our premier services in the heart of Dubai.</p>
                                     {(loc as any).isLink && (
                                         <a 
                                            href={(loc as any).href} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 text-primary hover:text-white bg-primary/10 hover:bg-primary px-6 py-2 rounded-full border border-primary/30 transition-all font-bold text-sm"
                                         >
                                             Visit Website →
                                         </a>
                                     )}
                                 </div>
                             </div>
                         )}
                         
                         {/* Subtle Overlay on top of iframe */}
                         <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-white/10 rounded-[2rem]" />
                    </div>

                    <p className="text-sm text-white/50 font-sans leading-relaxed pl-1">
                        {loc.address}
                    </p>
                </motion.div>
            ))}
        </div>

      </div>
    </section>
  );
}
