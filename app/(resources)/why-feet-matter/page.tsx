"use client";

import { useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Brain, Footprints, Zap, Activity, Heart, Shield, Leaf, ArrowRight, User, Users, Scale } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function WhyFeetMatterPage() {
  const containerRef = useRef(null);
  
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30" ref={containerRef}>
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
             <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
             <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
             <img 
                src="https://images.unsplash.com/photo-1544367563-12123d832d34?q=80&w=2670&auto=format&fit=crop" 
                alt="Barefoot grounding"
                className="w-full h-full object-cover"
             />
        </div>

        <div className="container relative z-20 px-6 text-center max-w-5xl">
             <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
             >
                 <span className="inline-block py-1 px-3 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-widest border border-white/20 mb-6 backdrop-blur-md">
                     Neurological & Energetic Foundation
                 </span>
                 <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight">
                    Why Feet Matter
                 </h1>
                 <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
                    One of the most potent neurological systems in your body begins at your feet. They are the foundation of whole-body health.
                 </p>
             </motion.div>
        </div>
      </section>

      {/* Intro & Symptoms */}
      <section className="py-24 px-6 relative">
          <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                  <motion.div
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                  >
                      <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold mb-8">The Silent Intelligence</h2>
                      <div className="prose prose-lg prose-invert text-muted-foreground leading-relaxed">
                          <p>
                             Feet are not just for walking. They house thousands of nerve endings, mechanoreceptors, intrinsic muscles, fascia, ligaments and joints — all continuously sending sensory information to your brain, spinal cord, cerebellum, vestibular system and posture-control networks.
                          </p>
                          <p>
                             Every step, shift in weight and micro-sway underpins a powerful feedback loop. When this communication is clear, balance, posture and bodily awareness remain resilient.
                          </p>
                      </div>
                  </motion.div>

                  <motion.div
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.8 }}
                     className="bg-card/20 border border-white/10 rounded-[2rem] p-10 backdrop-blur-sm relative overflow-hidden"
                  >
                       <div className="absolute top-0 right-0 w-64 h-64 bg-rose-500/10 blur-[80px] rounded-full pointer-events-none" />
                       
                       <h3 className="font-serif text-2xl font-bold text-white mb-8 border-b border-white/10 pb-4">When signals become "fuzzy"</h3>
                       <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                           {[
                               { icon: Activity, label: "Dizziness" },
                               { icon: Scale, label: "Poor Balance" },
                               { icon: Zap, label: "Chronic Pain" },
                               { icon: User, label: "Poor Posture" },
                               { icon: Brain, label: "Tension" },
                               { icon: Footprints, label: "Sensory Loss" }
                           ].map((item, i) => (
                               <div key={i} className="flex items-center gap-4 bg-white/5 p-4 rounded-xl">
                                   <item.icon className="w-6 h-6 text-primary" />
                                   <span className="font-medium text-white/90">{item.label}</span>
                               </div>
                           ))}
                       </div>
                  </motion.div>
              </div>
          </div>
      </section>

      {/* Treatments Zig-Zag Section */}
      <section className="py-24 px-6 bg-gradient-to-b from-background to-background/50 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
           <motion.div className="text-center mb-20">
               <h2 className="font-serif text-4xl md:text-6xl text-white font-bold mb-4">Holistic Rising’s Ground-Up Approach</h2>
               <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
           </motion.div>

           <div className="space-y-32">
               {/* 1. Ground Up Approach */}
               <div className="flex flex-col lg:flex-row items-center gap-16">
                   <motion.div 
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="flex-1 space-y-6"
                   >
                       <div className="inline-flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm">
                           <Leaf className="w-4 h-4" />
                           Integrated Healing
                       </div>
                       <h3 className="font-serif text-3xl md:text-5xl text-white font-bold">Nature meets Science</h3>
                       <p className="text-xl text-muted-foreground leading-relaxed">
                           Because the body is an energetic, vibrational ecosystem, our approach goes beyond conventional therapy. We blend foot-focused treatments, sports therapy, Ayurvedic grounding rituals and subtle-energy healing.
                       </p>
                       <ul className="grid grid-cols-2 gap-4 pt-4">
                           {["Reiki", "Crystal Healing", "Shamanic Techniques", "Meridian & Chakra Work"].map((item, i) => (
                               <li key={i} className="flex items-center gap-2 text-white/80">
                                   <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                                   {item}
                               </li>
                           ))}
                       </ul>
                   </motion.div>
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="flex-1 w-full"
                   >
                       <div className="relative aspect-square lg:aspect-[4/3] rounded-[3rem] overflow-hidden">
                           <img src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?q=80&w=2670&auto=format&fit=crop" alt="Healing hands" className="w-full h-full object-cover" />
                       </div>
                   </motion.div>
               </div>

               {/* 2. Specialised Therapy */}
               <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                   <motion.div 
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="flex-1 space-y-6"
                   >
                       <div className="inline-flex items-center gap-2 text-rose-400 font-bold uppercase tracking-widest text-sm">
                           <Footprints className="w-4 h-4" />
                           Sensorimotor Reawakening
                       </div>
                       <h3 className="font-serif text-3xl md:text-5xl text-white font-bold">Specialised Feet & Ankle Therapy</h3>
                       <p className="text-xl text-muted-foreground leading-relaxed">
                           Our Specialised Therapy integrates Traditional Thai reflexology, Raynor massage, Fascia release and Joint mobilisation to target the subtle structures of the feet.
                       </p>
                       <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md">
                           <p className="text-white font-medium mb-3">Key Benefits:</p>
                           <div className="flex flex-wrap gap-3">
                               {["Restore mobility", "Ease discomfort", "Improve flexibility", "Reawaken sensory structures"].map((tag, i) => (
                                   <span key={i} className="px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-300 text-sm">
                                       {tag}
                                   </span>
                               ))}
                           </div>
                       </div>
                   </motion.div>
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="flex-1 w-full"
                   >
                       <div className="relative aspect-square lg:aspect-[4/3] rounded-[3rem] overflow-hidden">
                           <img src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?q=80&w=2670&auto=format&fit=crop" alt="Foot Reflexology" className="w-full h-full object-cover" />
                       </div>
                   </motion.div>
               </div>

               {/* 3. Kansa Wand */}
                <div className="flex flex-col lg:flex-row items-center gap-16">
                   <motion.div 
                     initial={{ opacity: 0, x: -50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="flex-1 space-y-6"
                   >
                       <div className="inline-flex items-center gap-2 text-amber-400 font-bold uppercase tracking-widest text-sm">
                           <Zap className="w-4 h-4" />
                           Ayurvedic Grounding
                       </div>
                       <h3 className="font-serif text-3xl md:text-5xl text-white font-bold">Kansa Wand Ritual</h3>
                       <p className="text-xl text-muted-foreground leading-relaxed">
                           Rooted in Ayurvedic tradition, our Kansa Wand treatment stimulates marma points, promotes circulation, draws out acidity and calms the nervous system.
                       </p>
                       <p className="text-white/80 italic">
                           "This creates a deep sense of stability and grounding — from the feet upward."
                       </p>
                   </motion.div>
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="flex-1 w-full"
                   >
                       <div className="relative aspect-square lg:aspect-[4/3] rounded-[3rem] overflow-hidden">
                           <img src="https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2670&auto=format&fit=crop" alt="Ayurvedic Massage" className="w-full h-full object-cover" />
                       </div>
                   </motion.div>
               </div>

                {/* 4. Sports Clinic */}
               <div className="flex flex-col lg:flex-row-reverse items-center gap-16">
                   <motion.div 
                     initial={{ opacity: 0, x: 50 }}
                     whileInView={{ opacity: 1, x: 0 }}
                     viewport={{ once: true }}
                     className="flex-1 space-y-6"
                   >
                       <div className="inline-flex items-center gap-2 text-blue-400 font-bold uppercase tracking-widest text-sm">
                           <Activity className="w-4 h-4" />
                           High Performance
                       </div>
                       <h3 className="font-serif text-3xl md:text-5xl text-white font-bold">DR/HR Sports Clinic</h3>
                       <p className="text-xl text-muted-foreground leading-relaxed">
                           Ideal for athletes and injury recovery. We focus on areas bearing the most load: feet, calves, shins, thighs and glutes.
                       </p>
                       <ul className="space-y-4 pt-4">
                           {["Correct gait imbalances", "Restore biomechanical alignment", "Support fascia health", "Nervous-system regulation"].map((item, i) => (
                               <li key={i} className="flex items-center gap-3 text-white/80">
                                   <div className="w-8 h-8 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400">
                                       <Activity className="w-4 h-4" />
                                   </div>
                                   {item}
                               </li>
                           ))}
                       </ul>
                   </motion.div>
                   <motion.div 
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     className="flex-1 w-full"
                   >
                       <div className="relative aspect-square lg:aspect-[4/3] rounded-[3rem] overflow-hidden">
                           <img src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2670&auto=format&fit=crop" alt="Sports Therapy" className="w-full h-full object-cover" />
                       </div>
                   </motion.div>
               </div>
           </div>
        </div>
      </section>

      {/* Science & Research */}
      <section className="py-24 px-6 bg-white/5">
        <div className="container mx-auto max-w-5xl">
            <div className="bg-card/40 border border-white/10 rounded-[3rem] p-8 md:p-16 text-center backdrop-blur-sm relative overflow-hidden">
                 <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full pointer-events-none" />
                 
                 <div className="relative z-10">
                     <Brain className="w-16 h-16 text-primary mx-auto mb-6" />
                     <h2 className="font-serif text-3xl md:text-5xl font-bold text-white mb-8">The Feet–Brain Connection</h2>
                     <p className="text-xl text-muted-foreground leading-relaxed mb-10 max-w-3xl mx-auto">
                         Neurological rehabilitation research confirms what holistic systems have known for centuries: <span className="text-white font-medium">foot mobilisation and intrinsic muscle activation directly improve brain-based balance.</span>
                     </p>
                     
                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
                         <div className="bg-background/50 p-6 rounded-2xl">
                             <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-widest text-primary">Improvements in</h4>
                             <ul className="space-y-2 text-muted-foreground">
                                 <li>• Dynamic postural stability</li>
                                 <li>• Coordination & Spatial awareness</li>
                                 <li>• Sensory–motor integration</li>
                                 <li>• Gait quality</li>
                             </ul>
                         </div>
                         <div className="bg-background/50 p-6 rounded-2xl">
                             <h4 className="font-bold text-white mb-4 uppercase text-sm tracking-widest text-primary">Through</h4>
                             <ul className="space-y-2 text-muted-foreground">
                                 <li>• Sensorimotor mobilisation</li>
                                 <li>• Intrinsic muscle strengthening</li>
                                 <li>• Plantar sensory stimulation</li>
                                 <li>• Weight-distribution retraining</li>
                             </ul>
                         </div>
                     </div>
                     
                     <p className="mt-12 text-2xl font-serif italic text-white/90">
                         "In essence: the feet stabilise the brain."
                     </p>
                 </div>
            </div>
        </div>
      </section>

      {/* Hormonal & Organ Health */}
      <section className="py-24 px-6">
          <div className="container mx-auto max-w-6xl">
              <motion.div 
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 className="text-center mb-16"
               >
                  <h2 className="font-serif text-3xl md:text-5xl text-white font-bold mb-4">From Feet to Hormones</h2>
                  <p className="text-muted-foreground">Healing from the ground up influences hormonal balance, pelvic health and vitality.</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Women */}
                  <motion.div 
                     whileHover={{ y: -10 }}
                     className="bg-purple-900/10 border border-purple-500/20 p-8 md:p-12 rounded-[2.5rem]"
                  >
                      <h3 className="font-serif text-3xl font-bold text-purple-200 mb-6 flex items-center gap-3">
                          <Users className="w-8 h-8" />
                          For Women
                      </h3>
                      <ul className="space-y-4 text-purple-100/70 text-lg">
                          <li>• Menstrual regularity</li>
                          <li>• Menopausal transitions</li>
                          <li>• Pelvic-floor tone</li>
                          <li>• Abdominal organ mobility</li>
                          <li>• Emotional stability</li>
                      </ul>
                  </motion.div>

                  {/* Men */}
                  <motion.div 
                     whileHover={{ y: -10 }}
                     className="bg-blue-900/10 border border-blue-500/20 p-8 md:p-12 rounded-[2.5rem]"
                  >
                      <h3 className="font-serif text-3xl font-bold text-blue-200 mb-6 flex items-center gap-3">
                          <User className="w-8 h-8" />
                          For Men
                      </h3>
                      <ul className="space-y-4 text-blue-100/70 text-lg">
                          <li>• Pelvic-floor function</li>
                          <li>• Bladder control</li>
                          <li>• Erectile function</li>
                          <li>• Diaphragm & heart mobility</li>
                          <li>• Hormonal stability (andropause)</li>
                      </ul>
                  </motion.div>
              </div>
          </div>
      </section>

      {/* Integration Guide */}
      <section className="py-24 px-6 bg-gradient-to-t from-black/80 to-transparent">
          <div className="container mx-auto max-w-7xl">
              <h2 className="font-serif text-3xl md:text-5xl text-white font-bold mb-16 text-center">How to Integrate Treatments</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {[
                      {
                          title: "Grounding & Fatigue",
                          items: ["Specialised Feet & Ankle", "Kansa Wand Massage"],
                          color: "from-amber-500/20 to-amber-900/10 border-amber-500/30"
                      },
                      {
                          title: "Gait & Injury",
                          items: ["Runner Specific", "Sports Massage", "Full Body Reset"],
                          color: "from-blue-500/20 to-blue-900/10 border-blue-500/30"
                      },
                      {
                          title: "Emotional Imbalance",
                          items: ["Energy Healing Fusion", "Trauma Release"],
                          color: "from-purple-500/20 to-purple-900/10 border-purple-500/30"
                      },
                      {
                          title: "Daily Practice",
                          items: ["Barefoot walking", "Nature time", "Mindful breathing"],
                          color: "from-emerald-500/20 to-emerald-900/10 border-emerald-500/30"
                      }
                  ].map((card, index) => (
                      <motion.div
                         key={index}
                         initial={{ opacity: 0, y: 20 }}
                         whileInView={{ opacity: 1, y: 0 }}
                         viewport={{ once: true }}
                         transition={{ delay: index * 0.1 }}
                         className={cn(
                             "bg-gradient-to-br border p-8 rounded-3xl flex flex-col h-full",
                             card.color
                         )}
                      >
                          <div className="bg-white/10 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white mb-6">
                              {index + 1}
                          </div>
                          <h3 className="font-serif text-xl font-bold text-white mb-4 line-clamp-2 md:h-14">{card.title}</h3>
                          <ul className="space-y-3 mb-6 flex-1">
                              {card.items.map((item, i) => (
                                  <li key={i} className="text-white/70 text-sm flex items-start gap-2">
                                      <span className="mt-1.5 w-1 h-1 bg-white/50 rounded-full shrink-0" />
                                      {item}
                                  </li>
                              ))}
                          </ul>
                      </motion.div>
                  ))}
              </div>

               <div className="mt-20 text-center">
                    <Link href="/services">
                        <Button className="rounded-full px-10 py-6 text-lg">
                            Book Your Treatment
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Button>
                    </Link>
               </div>
          </div>
      </section>

     
    </main>
  );
}
