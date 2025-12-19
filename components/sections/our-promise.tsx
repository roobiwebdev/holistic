"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export function OurPromise() {
  const promises = [
    "Supported",
    "Seen",
    "Heard",
    "Valued"
  ];

  return (
    <section className="relative w-full py-32 md:py-48 overflow-hidden flex items-center justify-center">
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay to darken video */}
          {/* Using a different placeholder video or the same one for demonstration */}
           <iframe
            className="absolute top-1/2 left-1/2 w-[300%] h-[300%] -translate-x-1/2 -translate-y-1/2 object-cover pointer-events-none opacity-60"
            src="https://www.youtube.com/embed/S_-e1AOuPug?autoplay=1&mute=1&loop=1&playlist=S_-e1AOuPug&controls=0&showinfo=0&rel=0&playsinline=1&enablejsapi=1&iv_load_policy=3"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            style={{ border: "none" }}
            />
      </div>

      {/* Main Content - Circular Overlay */}
      <div className="relative z-20 px-6">
        <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-primary/90 backdrop-blur-md rounded-full p-12 md:p-24 w-[350px] h-[350px] md:w-[600px] md:h-[600px] flex flex-col items-center justify-center text-center shadow-2xl border border-white/10"
        >
            <h2 className="font-serif text-3xl md:text-5xl text-white mb-4 md:mb-8">
                Our Promise to You
            </h2>
            
            <p className="text-white/90 text-sm md:text-lg mb-6 md:mb-10 font-sans tracking-wide">
                At Holistic Rising, you will always be:
            </p>

            <div className="flex flex-col gap-2 md:gap-4 mb-8 md:mb-12">
                {promises.map((item, index) => (
                    <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + (index * 0.1) }}
                        className="flex items-center justify-center gap-2 md:gap-3 text-white font-serif text-xl md:text-2xl"
                    >
                        <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-[#FFD700]" /> {/* Gold sparkle for contrast */}
                        <span>{item}</span>
                    </motion.div>
                ))}
            </div>

            <p className="text-white/80 text-xs md:text-base max-w-sm italic leading-relaxed">
                "Healing is not a destination — it’s a path we walk together. With heart. With love. And with the belief that you are already whole — we’re just here to help you remember."
            </p>

        </motion.div>
      </div>
    </section>
  );
}
