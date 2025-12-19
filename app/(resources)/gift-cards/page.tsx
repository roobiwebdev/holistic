"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Gift } from "lucide-react";

const GIFT_CATEGORIES = [
  {
    title: "Just Because",
    image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2640&auto=format&fit=crop", // Colorful/Fun
    color: "from-yellow-500/80 to-orange-500/80"
  },
  {
    title: "Massage & Spa",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2670&auto=format&fit=crop", // Relaxing Spa
    color: "from-rose-500/80 to-pink-500/80"
  },
  {
    title: "Birthday",
    image: "https://images.unsplash.com/photo-1530103862676-de3c9a59af38?q=80&w=2670&auto=format&fit=crop", // Party/Gold
    color: "from-purple-500/80 to-indigo-500/80"
  },
  {
    title: "Congratulations",
    image: "https://images.unsplash.com/photo-1513201099705-a9746e1e201f?q=80&w=2574&auto=format&fit=crop", // Confetti/Gifts
    color: "from-blue-500/80 to-cyan-500/80"
  },
  {
    title: "Winter",
    image: "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?q=80&w=2670&auto=format&fit=crop", // Snow/Cozy
    color: "from-sky-500/80 to-blue-600/80"
  },
  {
    title: "Hanukkah",
    image: "https://images.unsplash.com/photo-1543343467-f4e91278144d?q=80&w=2670&auto=format&fit=crop", // Menorah/Light
    color: "from-blue-600/80 to-indigo-700/80"
  },
  {
    title: "Kwanzaa",
    image: "https://images.unsplash.com/photo-1627964177309-4fd4c818b857?q=80&w=2670&auto=format&fit=crop", // Red/Green/Black theme abstract
    color: "from-red-600/80 to-green-700/80"
  },
  {
    title: "Happy Holidays",
    image: "https://images.unsplash.com/photo-1512389142860-9c449e58a543?q=80&w=2669&auto=format&fit=crop", // Decoration
    color: "from-green-600/80 to-emerald-700/80"
  },
  {
    title: "New Year",
    image: "https://images.unsplash.com/photo-1546272989-40c92939c6c2?q=80&w=2558&auto=format&fit=crop", // Fireworks/Sparkler
    color: "from-amber-400/80 to-yellow-600/80"
  },
  {
    title: "Christmas",
    image: "https://images.unsplash.com/photo-1543589077-47d81606c1bf?q=80&w=2574&auto=format&fit=crop", // Tree/Decor
    color: "from-red-700/80 to-rose-800/80"
  },
  {
    title: "Health & Wellness",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2670&auto=format&fit=crop", // Meditation/Yoga
    color: "from-teal-500/80 to-emerald-500/80"
  },
  {
    title: "Yoga & Pilates",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2670&auto=format&fit=crop", // Yoga Pose
    color: "from-violet-500/80 to-purple-600/80"
  }
];

export default function GiftCardsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      <section className="pt-32 pb-20 px-6">
        <div className="container mx-auto max-w-7xl">
           <div className="text-center mb-16">
              <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 className="flex items-center justify-center gap-4 mb-6"
              >
                  <Gift className="w-12 h-12 text-primary" />
              </motion.div>
              <motion.h1 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="font-serif text-5xl md:text-6xl text-white font-bold"
              >
                  Gift Cards
              </motion.h1>
           </div>

           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
               {GIFT_CATEGORIES.map((card, index) => (
                   <motion.div
                       key={index}
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: index * 0.05 }}
                       whileHover={{ scale: 1.02 }}
                       className="group relative aspect-[4/3] rounded-3xl overflow-hidden cursor-pointer border border-white/5 shadow-2xl"
                   >
                       {/* Background Image */}
                       <img 
                           src={card.image} 
                           alt={card.title} 
                           className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                       />
                       
                       {/* Overlay Gradient (Always visible but stronger at bottom) */}
                       <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                       
                       {/* Colored Hover Glow */}
                       <div className={cn(
                           "absolute inset-0 bg-gradient-to-t opacity-0 group-hover:opacity-40 transition-opacity duration-500 mix-blend-overlay",
                           card.color
                       )} />

                       {/* Content */}
                       <div className="absolute bottom-0 left-0 right-0 p-8 text-center transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                           <h3 className="font-serif text-2xl md:text-3xl font-bold text-white drop-shadow-md">
                               {card.title}
                           </h3>
                           <div className="h-1 w-12 bg-white/50 rounded-full mx-auto mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100" />
                       </div>
                   </motion.div>
               ))}
           </div>
        </div>
      </section>

    </main>
  );
}
