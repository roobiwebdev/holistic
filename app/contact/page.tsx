"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Phone, CreditCard, Accessibility, Baby, Train, Bus, Car } from "lucide-react";

// --- Data ---
const CONTACT_INFO = {
  phone: "07726 444 360",
  email: "maria@holistic-rising.com",
  businessType: "Holistic Rising is a holistic healing and wellness clinic offering a wide range of integrative therapies and treatments designed to support physical, emotional, energetic, and spiritual wellbeing. Their services include massage therapies, trauma release, sports therapy, energy healing, maternity massage, skincare rituals, frequency medicine and movement practices.\n\nGrounded in holistic principles and a deep mind–body–spirit connection. The work honours the full spectrum of frequency healing, fostering alignment, and restoring harmony through the union of mind, body, and spirit.",
  paymentMethods: "American Express, Cash, Check, Debit card, Discover, Visa and MasterCard",
  parking: "Metered parking",
  amenities: "WiFi",
  childAccessPolicy: "Yes",
};

const DETAILED_POLICIES = [
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
        content: (
            <div className="space-y-4">
                <p>The treatments offered at Holistic Rising—while gentle and non-invasive—can initiate physical and emotional shifts as the body returns to balance. Some clients may experience temporary side effects, including:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm opacity-80">
                    <li>Mild skin discoloration or bruising, especially after physical manipulation or bodywork</li>
                    <li>Tenderness or soreness in treated areas</li>
                    <li>Fatigue, light-headedness, or heightened sensitivity</li>
                    <li>Emotional release, such as tearfulness, mood swings, or vivid dreams</li>
                    <li>Detox symptoms, including headaches, temporary digestive upset, or skin changes</li>
                </ul>
                <p>These responses are considered a normal part of the healing process and typically subside within 24–72 hours. They are a sign that the body is processing and releasing stored energy or tension. We encourage clients to rest, hydrate, and be gentle with themselves following any session.</p>
                <p className="italic text-xs opacity-60">If a client particularly disagrees or wishes to not experience any of these possible side effects, this needs to be communicated to the therapist before the treatment begins. In this case the treatment may need to be altered, modified or swapped for another; the importance here is that expectations are managed with informed consent to avoid any misunderstanding, confusion or disagreement.</p>
            </div>
        )
    },
    {
        title: "Filming & Consent Disclaimer",
        content: "At Holistic Rising, we occasionally document treatments or clinic activity for promotional use, including social media and marketing campaigns. Informed consent will always be requested in writing prior to any filming or photography involving clients. No filming will take place without mutual agreement between the client and Holistic Rising.\n\nPlease note that any content captured within Holistic Rising premises is considered branded material. It is owned and protected under Holistic Rising’s brand identity and may not be used, edited, or repurposed for any other promotional activity, platform, or third-party material without explicit permission from Holistic Rising."
    },
    {
        title: "Conduct Policy",
        content: (
            <div className="space-y-4">
                <p>At Holistic Rising, we are committed to maintaining a safe, respectful, and professional environment for both clients and practitioners.</p>
                <p>All staff are required to conduct themselves with the highest standard of professionalism, discretion, and care. We request that clients uphold the same level of respect. Any of the following behaviors are strictly prohibited:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm opacity-80">
                    <li>Suggestive comments</li>
                    <li>Inappropriate language</li>
                    <li>Sexual innuendo or advances</li>
                    <li>Aggressive, threatening, or disrespectful conduct</li>
                </ul>
                <p className="text-xs">Any such behavior may result in immediate termination of the session without refund and possible removal from future bookings.</p>
            </div>
        )
    },
    {
        title: "Non-Discriminative Policy",
        content: (
            <div className="space-y-4">
                <p>Holistic Rising does not discriminate on the basis of race, color, ethnicity, national origin, age, gender, gender identity or expression, sexual orientation, marital status, disability, socioeconomic status, religion, political belief, body type, neurodiversity, or any other characteristic protected by applicable law.</p>
                <p className="font-bold text-xs uppercase tracking-widest text-white/40">Our Commitment:</p>
                <ul className="list-disc pl-5 space-y-1 text-sm opacity-80">
                    <li>Equal access to all programs, services, and events.</li>
                    <li>Promotion of equity, respect, and understanding.</li>
                    <li>Swiftly addressing instances of bias or discrimination.</li>
                </ul>
                <p>Anyone who experiences or witnesses discriminatory behavior is encouraged to report it to management via our official email, contact number or in person. All reports will be handled on a non-named basis to ensure privacy and protection.</p>
            </div>
        )
    }
];

const LOCATIONS = [
    {
        name: "Romford",
        fullName: "Holistic Rising Healing Clinic",
        addressLine: "6 Hog Hill Road, Romford, GB-ESS RM5 2DH",
        region: "Essex",
        color: "bg-purple-600",
        mapUrl: "https://www.google.com/maps?q=6+Hog+Hill+Road,+Romford,+RM5+2DH&output=embed",
        image: null,
        details: [
            { icon: Bus, text: "15mins by bus (499, 103, 179) from Romford overground station." },
            { icon: Bus, text: "15min bus ride (247) from Hainault (central line)." }
        ]
    },
    {
        name: "Wanstead",
        fullName: "Holistic Rising Therapies",
        addressLine: "15 High Street Wanstead, London, GB-CMD E11 2AA",
        region: "London",
        color: "bg-rose-600",
        mapUrl: "https://www.google.com/maps?q=15+High+Street+Wanstead,+London,+E11+2AA&output=embed",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop", // Placeholder for treatment room
        details: [
            { icon: Train, text: "Nearest tube is Snaresbrook underground (central line) - 5min walk." },
            { icon: Train, text: "Also 10-15min walk from Wanstead underground (central line)." },
            { icon: Car, text: "Parking on the High St is free for the first hour, free after 6.30pm Mon-Sat, and Free all day Sunday." }
        ]
    },
    {
        name: "South Woodford",
        fullName: "Holistic Rising Studio",
        addressLine: "9 The Shrubberies, London, E18 1BD",
        region: "London",
        color: "bg-blue-600",
        mapUrl: "https://www.google.com/maps?q=9+The+Shrubberies,+London,+E18+1BD&output=embed",
        image: null,
        details: [
            { icon: Train, text: "Nearest tube is South Woodford underground (central line) - 5min walk." }
        ]
    }
];

export default function ContactPage() {
  const [activeLocation, setActiveLocation] = useState(0);

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      {/* Hero Header */}
      <section className="pt-32 pb-12 text-center">
          <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="font-serif text-5xl md:text-6xl font-bold text-white mb-4"
          >
              Contact Us
          </motion.h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
      </section>

      {/* Split Layout: Map & Form */}
      <section className="px-6 pb-24">
          <div className="container mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
              
              {/* Left: Map / Location Selector */}
              <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.2 }}
                 className="space-y-6"
              >
                  <div className="flex justify-between items-end mb-2">
                       <h2 className="text-2xl font-serif text-white">Select location</h2>
                       <span className="text-primary text-xs font-bold uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
                           {LOCATIONS[activeLocation].region}
                       </span>
                  </div>
                  
                  <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[600px] relative bg-card/20">
                      <AnimatePresence mode="wait">
                          <motion.iframe 
                            key={activeLocation}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.7 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.5 }}
                            src={LOCATIONS[activeLocation].mapUrl} 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }} 
                            allowFullScreen 
                            loading="lazy"
                            className="hover:opacity-100 transition-opacity duration-500"
                            title="Clinic Locations Map"
                          />
                      </AnimatePresence>
                      
                      {/* Overlay Cards mimicking screenshot */}
                      <div className="absolute bottom-6 left-6 right-6 space-y-3 z-20">
                           {LOCATIONS.map((loc, idx) => (
                               <motion.div 
                                 key={loc.name}
                                 onClick={() => setActiveLocation(idx)}
                                 whileHover={{ scale: 1.02 }}
                                 whileTap={{ scale: 0.98 }}
                                 className={cn(
                                     "p-4 rounded-xl flex items-start gap-3 shadow-lg backdrop-blur-sm cursor-pointer transition-all duration-300",
                                     activeLocation === idx 
                                        ? "bg-white text-black ring-2 ring-primary border-transparent" 
                                        : "bg-white/90 text-black hover:bg-white border border-white/20"
                                 )}
                               >
                                   <div className={cn(
                                       "text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0 shadow-sm",
                                       loc.color
                                   )}>{idx + 1}</div>
                                   <div className="min-w-0">
                                       <div className="font-bold text-sm truncate">{loc.fullName}</div>
                                       <div className="text-[10px] md:text-xs text-gray-600 truncate">{loc.addressLine}</div>
                                   </div>
                               </motion.div>
                           ))}
                      </div>
                  </div>
              </motion.div>

              {/* Right: Contact Form */}
              <motion.div 
                 initial={{ opacity: 0, x: 20 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ delay: 0.3 }}
                 className="bg-card/20 backdrop-blur-md border border-white/10 rounded-[2.5rem] p-8 md:p-12 shadow-2xl"
              >
                  <h2 className="text-3xl font-serif font-bold text-white mb-8">Contact Form</h2>
                  
                  <form className="space-y-8">
                      <div className="space-y-4">
                          <label className="text-sm font-bold text-primary uppercase tracking-widest">1. Details</label>
                          <div className="space-y-4">
                              <Input 
                                placeholder="First Name" 
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:ring-primary focus:border-primary h-12 rounded-xl" 
                              />
                              <Input 
                                placeholder="Email" 
                                className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:ring-primary focus:border-primary h-12 rounded-xl" 
                              />
                          </div>
                      </div>

                      <div className="space-y-4">
                          <label className="text-sm font-bold text-primary uppercase tracking-widest">2. Your Message</label>
                          <Textarea 
                            placeholder="Type your answer here..." 
                            className="bg-white/5 border-white/10 text-white placeholder:text-white/40 min-h-[150px] focus:ring-primary focus:border-primary rounded-xl resize-none" 
                          />
                      </div>

                      <div className="pt-4">
                          <Button className="w-full bg-white text-black hover:bg-white/90 font-bold h-12 rounded-xl text-lg shadow-lg hover:shadow-white/20 transition-all">
                              Submit
                          </Button>
                      </div>
                  </form>
              </motion.div>
          </div>
      </section>

      {/* Unified Clinic Details & Policies - Bolder & More Comprehensive */}
      <section className="py-24 px-6 bg-indigo-950/20 border-t border-white/5">
          <div className="container mx-auto max-w-[1400px]"> 
              <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-16 text-center">Clinic Details & Policies</h2>
              
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-16">
                  
                  {/* Left Column: Contact & Business Info */}
                  <div className="space-y-12">
                       <div className="space-y-4">
                          <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Contact</h3>
                          <div className="space-y-2">
                             <div>
                                <p className="text-2xl font-serif text-white">{CONTACT_INFO.phone}</p>
                                <p className="text-[10px] text-primary font-bold uppercase tracking-[0.2em] mt-1">WhatsApp Only</p>
                             </div>
                             <p className="text-lg text-white/60">{CONTACT_INFO.email}</p>
                          </div>
                       </div>
                       
                       <div className="space-y-4">
                          <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Business Ethos</h3>
                          <p className="text-sm text-white/70 leading-relaxed whitespace-pre-wrap">{CONTACT_INFO.businessType}</p>
                       </div>

                       <div className="space-y-4">
                          <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Facilities</h3>
                          <div className="grid grid-cols-1 gap-4">
                              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                                  <Car className="w-5 h-5 text-primary" />
                                  <div>
                                      <p className="text-xs text-white/40 uppercase font-bold">Parking</p>
                                      <p className="text-sm text-white">{CONTACT_INFO.parking}</p>
                                  </div>
                              </div>
                              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                                  <Accessibility className="w-5 h-5 text-primary/40" />
                                  <div>
                                      <p className="text-xs text-white/40 uppercase font-bold">Amenities</p>
                                      <p className="text-sm text-white">{CONTACT_INFO.amenities}</p>
                                  </div>
                              </div>
                              <div className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                                  <Baby className="w-5 h-5 text-primary" />
                                  <div>
                                      <p className="text-xs text-white/40 uppercase font-bold">Child Access Policy</p>
                                      <p className="text-sm text-white">{CONTACT_INFO.childAccessPolicy}</p>
                                  </div>
                              </div>
                          </div>
                       </div>
                  </div>

                  {/* Right Columns: Detailed Policies Grid */}
                  <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
                       {DETAILED_POLICIES.map((policy, idx) => (
                           <motion.div 
                             key={policy.title}
                             initial={{ opacity: 0, y: 20 }}
                             whileInView={{ opacity: 1, y: 0 }}
                             viewport={{ once: true }}
                             transition={{ delay: idx * 0.1 }}
                             className="bg-white/5 p-8 rounded-3xl border border-white/10 hover:border-primary/30 transition-all group"
                           >
                               <h3 className="text-primary font-bold uppercase tracking-widest text-xs mb-4 border-b border-white/10 pb-2 group-hover:text-white transition-colors">
                                   {policy.title}
                               </h3>
                               <div className="text-sm text-white/70 leading-relaxed whitespace-pre-wrap">
                                   {policy.content}
                               </div>
                           </motion.div>
                       ))}
                  </div>
              </div>

               {/* Inclusive Practice Note */}
               <div className="mt-20 bg-primary/5 border border-primary/20 p-8 md:p-12 rounded-[3rem] text-center max-w-5xl mx-auto">
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-6 underline underline-offset-8">Our Commitment to You</h3>
                    <p className="text-xl text-white/80 font-serif italic leading-relaxed">
                        "Holistic Rising is a professional healing environment. By choosing our services, both clients and practitioners enter into a mutual agreement to maintain the integrity of our healing space for the benefit of all."
                    </p>
               </div>
          </div>
      </section>
      

    </main>
  );
}
