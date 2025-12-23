"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    title: "Holistic Treatments",
    description:
      "Unique to Holistic Rising, these sessions combine multiple modalities into one experience. Created by Maria Sarmiento, they are intuitively layered to meet each client where they are — emotionally, physically, and spiritually — helping to reset the system and bring about a deep state of mental and energetic restoration.",
    imageColor: "from-purple-500/20 to-blue-500/20",
    route: "/services/holistic-therapies",
  },
  {
    title: "2by4",
    description:
      "Experience the profound synergy of two therapists working fluidly with one client. This unique triad creates an energetic alchemy that allows for deep release and realignment. With skilled fascia stretching and an intuitive understanding of biomechanics and energetic balance, tension is gently eased from both agonist and antagonist muscles. The result is a decompressing, harmonising treatment that restores flow, space, and holistic wellbeing.",
    imageColor: "from-pink-500/20 to-rose-500/20",
    route: "/services/2by4",
  },
  {
    title: "DR / HR Sports Clinic",
    description:
      "Designed by co-founder Diego Robinson, these high-performance, results-driven treatments aim to achieve measurable change in just one session. They combine elite-level sports therapy with biomechanical analysis, intuitive assessment, and functional movement expertise.",
    imageColor: "from-amber-500/20 to-orange-500/20",
    route: "/services/dr-hr-sports-london",
  },
  {
    title: "Healing / Trauma Release",
    description: `This treatment, designed by founder Maria Sarmiento, creates a profound release of trauma throughout the body.
It combines sports therapy, Thai massage, and Raynor massage to work deeply through the body's physical and energetic systems.

Sports massage is used to increase joint mobility and range of motion.
Thai massage improves flexibility and works directly on the meridian system to clear energetic stagnation...`,
    imageColor: "from-emerald-500/20 to-teal-500/20",
    route: "/services/trauma-treatment",
  },
  {
    title: "Energy Healing",
    description:
      "Subtle, intuitive work that supports energetic alignment and emotional rebalancing. This therapy can help bring clarity, calm, and connection to those seeking spiritual or emotional restoration.",
    imageColor: "from-cyan-500/20 to-sky-500/20",
    route: "/services/energy-healing",
  },
  {
    title: "Maternity Massage (Prenatal & Postnatal)",
    description:
      "Tailored care for mothers before and after birth, focusing on the mental and emotional needs of this sacred transition while offering physical comfort and support.",
    imageColor: "from-violet-500/20 to-fuchsia-500/20",
    route: "/services/maternal-massage",
  },
  {
    title: "Natural Glow",
    description:
      "An integrative approach to skincare that nourishes both skin and spirit. Using all-natural products and conscious touch, these treatments aim to enhance your inner glow by supporting your body's natural beauty rhythms.",
    imageColor: "from-rose-500/20 to-pink-500/20",
    route: "/services/natural-glow",
  },
  {
    title: "Healing Movement",
    description:
      "A mindful practice combining breath, intuitive motion, and energy awareness. Designed to support nervous system regulation, emotional flow, and reconnection to the self through movement.",
    imageColor: "from-indigo-500/20 to-purple-500/20",
    route: "/services/healing-movement",
  },
];

export function OurServices() {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden">
      {/* Background gradient hint */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-24 max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6"
          >
            What We Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl font-sans leading-relaxed"
          >
            Holistic Rising offers a wide range of healing modalities,
            therapies, and integrative treatments, all designed to support your
            unique path toward inner balance and peace.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {SERVICES.map((service, index) => (
            <Link key={index} href={service.route}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card h-full flex flex-col rounded-2xl overflow-hidden border border-white/5 hover:border-primary/20 hover:cursor-pointer transition-all duration-300 hover:shadow-2xl hover:shadow-primary/5"
              >
                {/* Image Placeholder area */}
                <div
                  className={`h-64 w-full bg-gradient-to-br ${service.imageColor} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                  <Sparkles className="absolute top-4 right-4 w-6 h-6 text-white/50 group-hover:text-white transition-colors" />

                  {/* More Info Overlay Button on Image Hover */}
                  {/* <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[1px]">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white text-white hover:bg-white hover:text-black rounded-full font-bold"
                    >
                      More Info
                    </Button>
                  </div> */}
                </div>

                {/* Content */}
                <div className="p-6 md:p-8 flex flex-col flex-grow">
                  <h3 className="font-serif text-xl md:text-2xl text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow group-hover:text-foreground/80 transition-colors">
                    {service.description}
                  </p>

                  <div className="pt-4 mt-auto border-t border-white/5 w-full flex justify-between items-center text-primary text-sm font-bold uppercase tracking-wider group-hover:translate-x-1 transition-transform cursor-pointer">
                    <span>More Info</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
