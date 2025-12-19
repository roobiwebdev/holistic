"use client";

import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

const promises = ["Supported", "Seen", "Heard", "Valued"];

export function OurPromise() {
  return (
    <section className="relative w-full py-24 md:py-32 overflow-hidden border-t border-white/5">
      {/* Background Video Layer */}
      <div className="absolute inset-0 pointer-events-none">
        <iframe
          className="absolute top-1/2 left-1/2 w-[250%] h-[250%] -translate-x-1/2 -translate-y-1/2 object-cover opacity-80"
          src="https://www.youtube.com/embed/S_-e1AOuPug?autoplay=1&mute=1&loop=1&playlist=S_-e1AOuPug&controls=0&showinfo=0&rel=0&playsinline=1&enablejsapi=1&iv_load_policy=3"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          style={{ border: "none" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80" />
      </div>

      <div className="relative z-20 container mx-auto px-6">
        <div className="max-w-3xl text-center mx-auto">
          <p className="text-xs uppercase tracking-[0.4em] text-white/60 font-semibold mb-3">
            Our Promise
          </p>
          <h2 className="font-serif text-3xl md:text-5xl text-white font-bold leading-tight">
            Modern healing meets grounded support.
          </h2>
          <p className="mt-4 text-sm md:text-lg text-white/80 leading-relaxed">
            We promise you a sanctuary where every layer of your being is
            honored— physical, emotional, and energetic. This isn’t a quick fix;
            it’s a bold invitation to feel supported, seen, and heard.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-white/10 backdrop-blur-xl p-8 flex flex-col gap-6"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-primary font-semibold">
              Always with you
            </p>
            <div className="space-y-4">
              {promises.map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-3 text-lg md:text-xl font-semibold text-white"
                >
                  <Sparkles className="w-5 h-5 text-[#FFD700]" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="text-xs text-white/70 leading-relaxed">
              We hold space for your story, your shifts, and your healing
              unfolding.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl bg-gradient-to-br from-primary/90 to-purple-500/70 p-8 flex flex-col justify-between text-white shadow-2xl shadow-primary/40"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-4">
              What we believe
            </p>
            <p className="font-serif text-2xl md:text-3xl font-bold leading-snug">
              “Healing is not a destination—it’s a path we walk together. With
              heart. With love. We help you remember that you are already
              whole.”
            </p>
            <p className="text-xs uppercase tracking-[0.4em] text-white/60 mt-8">
              Holistic Rising
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
