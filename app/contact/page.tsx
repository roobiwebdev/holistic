"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import { Phone, CreditCard, Accessibility, Baby, Train, Bus, Car } from "lucide-react";

// --- Data ---
const CONTACT_INFO = {
  phone: "07726 444 360",
  businessType: "Body Enhancement, Holistic Therapy, Massage, Spa, Yoga",
  paymentMethods: "American Express, Cash, Check, Debit card, Discover, Visa and MasterCard",
  parking: "Metered parking",
  amenities: "Disabled Access, WiFi",
  kidFriendly: "Yes",
};

const POLICIES = {
    appointment: "Deposits are non-refundable, you can reschedule your appointment and your deposit will be transferred over to your future booking. If you are unable to reschedule, please contact us at least 48 hours before your appointment.",
    class: "Deposits are non-refundable, you can reschedule your appointment and your deposit will be transferred over to your future booking. If you are unable to reschedule, please contact us at least 48 hours before your appointment.",
    business: "We are a healing clinic, therefore we do not accept walk-ins, all appointments must be booked in advance with a medical form filled in before treatment and a 20% deposit to secure the booking. We do not accept cancellations or reschedule before a 24hr period. The nature of our healing space is that at times we may run over slightly depending on the severity of the injury or trauma therefore pls allow an extra 20mins after each treatment for any such possibility, there will not be any charges incurred if this happens during your treatment."
};

const LOCATIONS = [
    {
        name: "Wanstead",
        region: "London",
        image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=2653&auto=format&fit=crop", // Placeholder for treatment room
        details: [
            { icon: Train, text: "Nearest tube is Snaresbrook underground (central line) - 5min walk." },
            { icon: Train, text: "Also 10-15min walk from Wanstead underground (central line)." },
            { icon: Car, text: "Parking on the High St is free for the first hour, free after 6.30pm Mon-Sat, and Free all day Sunday." }
        ]
    },
    {
        name: "South Woodford",
        region: "London",
        image: null,
        details: [
            { icon: Train, text: "Nearest tube is South Woodford underground (central line) - 5min walk." }
        ]
    },
    {
        name: "Romford",
        region: "Essex",
        image: null,
        details: [
            { icon: Bus, text: "15mins by bus (499, 103, 179) from Romford overground station." },
            { icon: Bus, text: "15min bus ride (247) from Hainault (central line)." }
        ]
    }
];

export default function ContactPage() {
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
                  <h2 className="text-2xl font-serif text-white mb-4">Select location</h2>
                  <div className="rounded-3xl overflow-hidden border border-white/10 shadow-2xl h-[600px] relative bg-card/20">
                      <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158857.7281066703!2d-0.24168153835619175!3d51.5287718408761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d8a00baf21de75%3A0x52963a5addd52a99!2sLondon!5e0!3m2!1sen!2suk!4v1645523447999!5m2!1sen!2suk" 
                        width="100%" 
                        height="100%" 
                        style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }} 
                        allowFullScreen 
                        loading="lazy"
                        className="opacity-70 hover:opacity-100 transition-opacity duration-500"
                        title="Clinic Locations Map"
                      />
                      
                      {/* Overlay Cards mimicking screenshot */}
                      <div className="absolute bottom-6 left-6 right-6 space-y-3">
                           <div className="bg-white/90 text-black p-4 rounded-xl flex items-start gap-3 shadow-lg backdrop-blur-sm cursor-pointer hover:bg-white transition-colors">
                               <div className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">1</div>
                               <div>
                                   <div className="font-bold text-sm">Holistic Rising Healing Clinic</div>
                                   <div className="text-xs text-gray-600">6 Hog Hill Road, Romford, GB-ESS RM5 2DH</div>
                               </div>
                           </div>
                           <div className="bg-white/90 text-black p-4 rounded-xl flex items-start gap-3 shadow-lg backdrop-blur-sm cursor-pointer hover:bg-white transition-colors">
                               <div className="bg-rose-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0">2</div>
                               <div>
                                   <div className="font-bold text-sm">Holistic Rising Therapies</div>
                                   <div className="text-xs text-gray-600">15 High Street Wanstead, London, GB-CMD E11 2AA</div>
                               </div>
                           </div>
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

      {/* Unified Clinic Details & Policies - Bolder & Wider */}
      <section className="py-24 px-6 bg-indigo-950/20 border-t border-white/5">
          <div className="container mx-auto max-w-[1400px]"> {/* Wider Container */}
              <h2 className="font-serif text-4xl md:text-5xl text-white font-bold mb-16 text-center">Clinic Details & Policies</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                  
                  {/* Contact & Basics */}
                  <div className="space-y-8">
                       <div className="space-y-2">
                          <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Phone</h3>
                          <p className="text-2xl md:text-3xl font-serif text-white">{CONTACT_INFO.phone}</p>
                       </div>
                       
                       <div className="space-y-2">
                          <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Business Type</h3>
                          <p className="text-xl text-white/80 leading-relaxed">{CONTACT_INFO.businessType}</p>
                       </div>

                       <div className="space-y-2">
                          <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Payment Methods</h3>
                          <div className="flex flex-wrap gap-2 text-white/70">
                              {CONTACT_INFO.paymentMethods.split(', ').map(method => (
                                  <span key={method} className="bg-white/5 px-2 py-1 rounded border border-white/10 text-sm whitespace-nowrap">
                                      {method}
                                  </span>
                              ))}
                          </div>
                       </div>
                  </div>

                  {/* Facilities */}
                  <div className="space-y-8">
                      <div className="space-y-2">
                          <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Parking</h3>
                           <div className="flex items-center gap-3">
                              <Car className="w-5 h-5 text-white/60" />
                              <p className="text-xl text-white/80">{CONTACT_INFO.parking}</p>
                           </div>
                       </div>

                       <div className="space-y-2">
                          <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Amenities</h3>
                          <p className="text-xl text-white/80">{CONTACT_INFO.amenities}</p>
                       </div>

                       <div className="space-y-2">
                          <div className="flex items-center gap-2 mb-2">
                               <h3 className="text-primary font-bold uppercase tracking-widest text-sm">Kid Friendly</h3>
                               <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full border border-primary/20">Check Policy</span>
                          </div>
                          <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                              <h4 className="font-serif text-lg text-white mb-2 font-bold">Healing Clinic Policy</h4>
                              <p className="text-white/70 text-sm leading-relaxed">
                                  "Our environment isn't child friendly, however if you wish for me to see your child for a healing, arrangements can be made with notice."
                              </p>
                          </div>
                       </div>
                  </div>

                  {/* Policies */}
                  <div className="space-y-8 lg:col-span-1">
                      <div className="space-y-4">
                          <h3 className="text-primary font-bold uppercase tracking-widest text-sm border-b border-white/10 pb-2">Appointment Cancellation</h3>
                          <p className="text-white/70 leading-relaxed text-sm">
                              {POLICIES.appointment}
                          </p>
                      </div>

                      <div className="space-y-4">
                          <h3 className="text-primary font-bold uppercase tracking-widest text-sm border-b border-white/10 pb-2">Class Cancellation</h3>
                          <p className="text-white/70 leading-relaxed text-sm">
                              {POLICIES.class}
                          </p>
                      </div>
                  </div>
              </div>

               {/* Full Width Business Info Note */}
               <div className="mt-16 bg-card/10 border border-white/5 p-8 md:p-12 rounded-3xl text-center max-w-5xl mx-auto">
                    <h3 className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Important Booking Information</h3>
                    <p className="text-lg text-white/60 font-light leading-relaxed">
                        {POLICIES.business}
                    </p>
               </div>
          </div>
      </section>
      

    </main>
  );
}
