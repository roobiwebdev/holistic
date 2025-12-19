"use client";

import { useRef } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";
import { Heart, Ear, Hand, Zap, Clock, Shield, AlertCircle, Video, Users, Scale } from "lucide-react";

// --- Data ---
const AFTERCARE = [
  {
    title: "Massage Aftercare",
    icon: Hand,
    color: "bg-rose-500/10 text-rose-500 border-rose-500/20",
    image: "https://images.unsplash.com/photo-1600334089648-b0d9c3028eb2?q=80&w=2670&auto=format&fit=crop",
    content: [
      "Water is essential to flush out toxins released during the massage, recommended 3 litres for 3 consecutive days after treatment.",
      "Choose to stay relaxed; avoid rushing back into daily activities.",
      "Abstain from alcohol and caffeine for at least 12 hours to enhance the detoxifying process.",
      "Take it easy on strenuous activities for up to 3 days to allow muscles to relax and collagen fibers to solidify.",
      "Maintain gentle movements and stretches to relieve post-massage soreness.",
      "Follow personalised aftercare advice from your professional massage therapist.",
      "Correct your posture to benefit from muscle loosening effects.",
      "Opt for light, nutritious meals rather than overeating."
    ],
    specifics: [
      "Specific to head massages, delay washing hair if oils are used; choose soothing activities and low lighting for optimal results.",
      "If experiencing discomfort post-massage, use hot water bottles alongside light stretching or take a soothing bath; avoid anti-inflammatory medications, the inflammatory response is part if the healing process which needs to be respected.",
      "Feeling emotional after a massage treatment is normal, the body holds onto trauma and emotions in the form of chemical reaction inside knots and tense tissue."
    ]
  },
  {
    title: "Hopi Ear Treatment",
    icon: Ear,
    color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2670&auto=format&fit=crop",
    content: [
      "Ear wax/residue may naturally emerge from the ear within the next 24-48 hours, which is considered normal.",
      "Avoid immersing your head in water for 24 hours post-treatment and minimise exposure to cold air in your ears.",
      "Refrain from inserting anything, including cotton buds, into your ears.",
      "Stay hydrated throughout the day.",
      "Keep a relaxed state, steering clear of stress-inducing activities.",
      "Abstain from alcohol and caffeine for at least 12 hours.",
      "Opt for lighter meals post-treatment to let your body focus on healing rather than digestion.",
      "Experiencing headaches, muscle aches, sleepiness, or increased thirst in the first 48 hours is normal.",
      "Avoid dairy products as they can lead to mucus residue in the ear canal."
    ],
    specifics: [
      "In case of adverse reactions like severe earache or allergies, contact your GP and therapist.",
      "Note that ear-candles maintain ear canal cleanliness but do not replace necessary medical treatments."
    ]
  },
  {
    title: "Cupping Treatments",
    icon: Clock, // Placeholder icon
    color: "bg-amber-500/10 text-amber-500 border-amber-500/20",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=2670&auto=format&fit=crop",
    content: [
      "Water is essential to flush out toxins released during the massage, recommended 3 litres for 3 consecutive days.",
      "Stay well-hydrated, as water aids in flushing out toxins released during cupping.",
      "Keep the cupped area(s) warm to enhance recovery.",
      "Allow yourself to rest, as post-cupping fatigue or flu-like symptoms are temporary reactions."
    ],
    specifics: [
      "What to avoid: Steer clear of caffeine, alcohol, sugary foods, dairy, and processed meats for 4-6 hours.",
      "Avoid hot showers, saunas, hot tubs, and strong air conditioning to protect the sensitised skin.",
      "Refrain from intense exercise and exposure to cold and windy conditions post-cupping.",
      "Preparation: Ensure hydration, eat an hour before, avoid shaving the area within 4 hours.",
      "Recovery: Gentle exfoliation is advised 2 days after treatment. Do not scratch skin if itchy. Keep marks well moisturised with coconut oil."
    ]
  },
  {
    title: "Energy Healing",
    icon: Zap,
    color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
    image: "https://images.unsplash.com/photo-1515023115689-589c33041697?q=80&w=2670&auto=format&fit=crop",
    content: [
      "Listen to your body's signals for rest or activity.",
      "Avoid bathing or showering for 12 hours post-session; then, take a salt bath within 24 hours if possible.",
      "For 3 days, limit alcohol and caffeine, stay hydrated, eat light and healthy meals, get adequate rest, spend time in nature.",
      "Healing reactions, like headaches or fatigue, may occur and usually dissipate within 3 days.",
      "If symptoms persist, consult a medical professional.",
      "Listen to your therapist, take notes, and follow personalised aftercare."
    ],
    specifics: []
  }
];

const POLICIES = [
  {
    title: "Cancellation Policy",
    content: "At Holistic Rising, we respect your time and the commitment of our practitioners. We kindly ask that any cancellations or rescheduling requests be made at least 24 hours in advance of your appointment. Cancellations made with less than 24 hours’ notice will be subject to a 50% cancellation fee. Missed appointments without notice may be charged in full. This policy allows us to offer availability to other clients and honour the time and preparation invested by our team."
  },
  {
    title: "Privacy Policy",
    content: "Your privacy is of utmost importance to us. All personal information, medical history, and session notes are kept strictly confidential and are only used for the purpose of providing safe, effective, and personalised care. We do not share your information with third parties without your written consent, except where required by law. Any data collected during booking or consultation is stored securely and in accordance with data protection regulations."
  },
  {
    title: "Side Effects & Healing Responses",
    content: "The treatments offered at Holistic Rising—while gentle and non-invasive—can initiate physical and emotional shifts as the body returns to balance. Some clients may experience temporary side effects including mild skin discoloration, tenderness, fatigue, emotional release, or detox symptoms. These responses are considered a normal part of the healing process and typically subside within 24–72 hours. If the client particularly disagrees or wishes to not experience any of these possible side effects, this needs to be communicated to the therapist before the treatment begins."
  },
  {
    title: "Filming & Consent Disclaimer",
    content: "At Holistic Rising, we occasionally document treatments or clinic activity for promotional use, including social media and marketing campaigns. Informed consent will always be requested in writing prior to any filming or photography involving clients. Any content captured within Holistic Rising premises is considered branded material and may not be used without explicit permission."
  },
  {
    title: "Conduct Policy",
    content: "At Holistic Rising, we are committed to maintaining a safe, respectful, and professional environment. All members of staff are required to conduct themselves with the highest standard of professionalism. We kindly request that clients uphold the same level of respect. Behaviours such as suggestive comments, inappropriate language, sexual innuendo, or aggression are strictly prohibited and may result in immediate termination of the session."
  },
  {
    title: "Non-Discriminative Policy",
    content: "At Holistic Rising, we are committed to fostering an inclusive, respectful, and welcoming environment for all individuals. We do not discriminate on the basis of race, color, ethnicity, national origin, age, gender, sexual orientation, disability, religion, or any other characteristic. We provide equal access to all programs and create a safe environment where every person feels seen, heard, and valued."
  }
];

export default function AftercareAndPoliciesPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
             <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-serif text-5xl md:text-7xl font-bold text-white mb-6"
            >
                Aftercare & Policies
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
            >
                Guidance for your healing journey and our commitment to a safe, respectful space.
            </motion.p>
        </div>
      </section>

      {/* AFTERCARE SECTION - Zig-Zag Layout */}
      <section className="pb-24 px-6 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
           <motion.div 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-center mb-24"
           >
              <h2 className="font-serif text-3xl md:text-5xl text-primary font-bold mb-6">Treatment Aftercare</h2>
              <div className="w-24 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
           </motion.div>

           <div className="flex flex-col gap-32">
               {AFTERCARE.map((item, index) => (
                   <div key={index} className={cn(
                       "flex flex-col md:flex-row items-center gap-12 lg:gap-24",
                       index % 2 === 1 ? "md:flex-row-reverse" : ""
                   )}>
                       
                       {/* Content Side */}
                       <motion.div 
                           initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                           whileInView={{ opacity: 1, x: 0 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.8 }}
                           className="flex-1 space-y-8"
                       >
                           <div className="flex items-center gap-4">
                               <div className={cn("p-4 rounded-2xl bg-white/5", item.color)}>
                                   <item.icon className="w-8 h-8" />
                               </div>
                               <h3 className="font-serif text-3xl md:text-4xl text-white font-bold">{item.title}</h3>
                           </div>
                           
                           {/* Content List */}
                           <ul className="space-y-4 text-muted-foreground text-lg leading-relaxed">
                               {item.content.map((point, i) => (
                                   <li key={i} className="flex items-start gap-4">
                                       <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 shrink-0" />
                                       {point}
                                   </li>
                               ))}
                           </ul>

                            {/* Specifics */}
                            {item.specifics.length > 0 && (
                                <div className="bg-white/5 p-8 rounded-3xl border border-white/5 mt-8">
                                    <h4 className="font-bold text-white mb-4 uppercase tracking-widest text-sm text-primary">Key Considerations</h4>
                                    <ul className="space-y-4 text-sm md:text-base text-muted-foreground">
                                        {item.specifics.map((spec, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <AlertCircle className="w-5 h-5 text-primary/70 shrink-0 mt-0.5" />
                                                {spec}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}

                       </motion.div>

                       {/* Image Side */}
                       <motion.div 
                           initial={{ opacity: 0, scale: 0.95 }}
                           whileInView={{ opacity: 1, scale: 1 }}
                           viewport={{ once: true }}
                           transition={{ duration: 0.8 }}
                           className="flex-1 w-full"
                       >
                           <div className="relative aspect-[4/3] md:aspect-square lg:aspect-[4/3] w-full rounded-[3rem] overflow-hidden border border-white/10 group">
                                <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                <img 
                                    src={item.image} 
                                    alt={item.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-[1.5s]"
                                />
                                
                                {/* Decorative elements */}
                                <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/20 blur-[100px] rounded-full pointer-events-none" />
                                <div className="absolute -top-24 -left-24 w-64 h-64 bg-white/10 blur-[100px] rounded-full pointer-events-none" />
                           </div>
                       </motion.div>

                   </div>
               ))}
           </div>
        </div>
      </section>

      {/* POLICIES SECTION - Clean List Layout */}
      <section className="pb-32 px-6">
        <div className="container mx-auto max-w-5xl">
            <div className="flex items-center gap-4 mb-16">
                <div className="h-px flex-1 bg-white/10" />
                <h2 className="font-serif text-3xl md:text-4xl text-primary font-bold">Clinic Policies</h2>
                <div className="h-px flex-1 bg-white/10" />
           </div>

           <div className="space-y-12">
               {POLICIES.map((policy, index) => (
                   <motion.div
                       key={index}
                       initial={{ opacity: 0, x: -20 }}
                       whileInView={{ opacity: 1, x: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: index * 0.1 }}
                   >
                       <h3 className="font-serif text-2xl font-bold text-white mb-4 flex items-center gap-3">
                           <span className="w-8 h-[1px] bg-primary" />
                           {policy.title}
                       </h3>
                       <p className="text-muted-foreground text-lg leading-relaxed pl-11 border-l border-white/10">
                           {policy.content}
                       </p>
                   </motion.div>
               ))}
           </div>
           
           <div className="mt-16 text-center">
                <p className="text-muted-foreground">
                    For full details, please visit our dedicated <a href="/policies" className="text-primary hover:underline">Policies Page</a>.
                </p>
           </div>
        </div>
      </section>

      
    </main>
  );
}
