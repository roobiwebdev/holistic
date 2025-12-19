"use client";

import { useRef, useState, useEffect } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";
import { Shield, Clock, Heart, Video, Users, Scale } from "lucide-react";

const policies = [
  {
    id: "cancellation",
    title: "Cancellation Policy",
    icon: Clock,
    content: (
      <>
        <p>
          At Holistic Rising, we respect your time and the commitment of our practitioners. We kindly ask that any cancellations or rescheduling requests be made at least <strong>24 hours in advance</strong> of your appointment.
        </p>
        <p>
          Cancellations made with less than 24 hours’ notice will be subject to a <strong>50% cancellation fee</strong>. Missed appointments without notice may be charged in full.
        </p>
        <p>
          This policy allows us to offer availability to other clients and honour the time and preparation invested by our team.
        </p>
      </>
    ),
  },
  {
    id: "privacy",
    title: "Privacy Policy",
    icon: Shield,
    content: (
      <>
        <p>
          Your privacy is of utmost importance to us. All personal information, medical history, and session notes are kept strictly confidential and are only used for the purpose of providing safe, effective, and personalised care.
        </p>
        <p>
          We do not share your information with third parties without your written consent, except where required by law. Any data collected during booking or consultation is stored securely and in accordance with data protection regulations.
        </p>
      </>
    ),
  },
  {
    id: "side-effects",
    title: "Side Effects & Healing Responses",
    icon: Heart,
    content: (
      <>
        <p>
          The treatments offered at Holistic Rising—while gentle and non-invasive—can initiate physical and emotional shifts as the body returns to balance. Some clients may experience temporary side effects, including:
        </p>
        <ul className="list-disc pl-6 space-y-2 my-4 text-muted-foreground">
          <li>Mild skin discoloration or bruising, especially after physical manipulation or bodywork</li>
          <li>Tenderness or soreness in treated areas</li>
          <li>Fatigue, light-headedness, or heightened sensitivity</li>
          <li>Emotional release, such as tearfulness, mood swings, or vivid dreams</li>
          <li>Detox symptoms, including headaches, temporary digestive upset, or skin changes</li>
        </ul>
        <p>
          These responses are considered a normal part of the healing process and typically subside within 24–72 hours. They are a sign that the body is processing and releasing stored energy or tension. We encourage clients to rest, hydrate, and be gentle with themselves following any session.
        </p>
        <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg mt-6">
            <p className="font-medium text-white">Important Note</p>
            <p className="text-sm mt-1">
                However, if the client particularly disagrees or wishes to not experience any of these possible side effects, this needs to be communicated to the therapist before the treatment begins. In this case the treatment may need to be altered, modified or swapped for another. The importance here is that expectations are managed with informed consent to avoid any misunderstanding, confusion or disagreement.
            </p>
        </div>
      </>
    ),
  },
  {
    id: "filming",
    title: "Filming & Consent Disclaimer",
    icon: Video,
    content: (
      <>
        <p>
          At Holistic Rising, we occasionally document treatments or clinic activity for promotional use, including social media and marketing campaigns.
        </p>
        <p>
          <strong>Informed consent will always be requested in writing</strong> prior to any filming or photography involving clients. No filming will take place without mutual agreement between the client and Holistic Rising.
        </p>
        <p className="mt-4 text-sm text-muted-foreground">
          Please note that any content captured within Holistic Rising premises is considered branded material. It is owned and protected under Holistic Rising’s brand identity and may not be used, edited, or repurposed for any other promotional activity, platform, or third-party material without explicit permission from Holistic Rising.
        </p>
      </>
    ),
  },
  {
    id: "conduct",
    title: "Conduct Policy",
    icon: Users,
    content: (
      <>
        <p>
          At Holistic Rising, we are committed to maintaining a safe, respectful, and professional environment for both clients and practitioners.
        </p>
        <p>
          All members of staff are required to attend appointments in clean, appropriate uniform and conduct themselves with the highest standard of professionalism, discretion, and care at all times. Our team is dedicated to creating a nurturing and non-judgmental space that supports healing and personal growth.
        </p>
        <p>
          We kindly request that clients uphold the same level of respect and integrity. While openness and honesty are deeply encouraged during sessions, communication must be carried out with respect and emotional maturity.
        </p>
        <div className="my-6">
            <p className="font-bold mb-2 text-red-400">Strictly Prohibited Behaviours:</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                    "Suggestive comments",
                    "Inappropriate language",
                    "Sexual innuendo or advances",
                    "Aggressive, threatening, or disrespectful conduct"
                ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm bg-red-500/10 border border-red-500/20 px-4 py-3 rounded-lg text-red-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                        {item}
                    </li>
                ))}
            </ul>
        </div>
        <p>
          Any such behaviour may result in immediate termination of the session without refund and possible removal from future bookings. Holistic Rising is a professional healing environment. By choosing our services, both clients and practitioners enter into a mutual agreement to maintain the integrity of our healing space for the benefit of all.
        </p>
      </>
    ),
  },
  {
    id: "discrimination",
    title: "Non-Discriminative Policy",
    icon: Scale,
    content: (
      <>
        <p>
          At Holistic Rising, we are committed to fostering an inclusive, respectful, and welcoming environment for all individuals. We believe that diversity enriches our community and enhances our collective growth and healing.
        </p>
        
        <h4 className="text-xl font-bold mt-6 mb-3 text-primary">Policy Statement</h4>
        <p>
          Holistic Rising does not discriminate on the basis of race, color, ethnicity, national origin, age, gender, gender identity or expression, sexual orientation, marital status, disability, socioeconomic status, religion, political belief, body type, neurodiversity, or any other characteristic protected by applicable law.
        </p>

        <h4 className="text-xl font-bold mt-6 mb-3 text-primary">Our Commitment</h4>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
            <li>We provide equal access to all programs, services, events, employment opportunities, and partnerships.</li>
            <li>We actively promote equity, respect, and understanding among our staff, participants, and community members.</li>
            <li>We create and maintain a safe environment where every person feels seen, heard, and valued.</li>
            <li>We address instances of bias, discrimination, or exclusion swiftly and appropriately.</li>
        </ul>

        <h4 className="text-xl font-bold mt-6 mb-3 text-primary">Inclusive Practice</h4>
        <p>
            Holistic Rising integrates inclusive practices into all aspects of our work, including hiring, training, outreach, communication, and programming. We continuously evaluate our policies and practices to uphold these principles and make necessary improvements.
        </p>

        <h4 className="text-xl font-bold mt-6 mb-3 text-primary">Reporting and Accountability</h4>
        <p>
            Anyone who experiences or witnesses discriminatory behavior is encouraged to report it to management via our official email, contact number or in person. All reports will be handled on a non-named basis to ensure the privacy and protection of individuals involved. You can be assured that any report will be taken seriously and addressed with confidentiality, care, and appropriate action.
        </p>
      </>
    ),
  },
];

export default function PoliciesPage() {
  const [activeId, setActiveId] = useState(policies[0].id);

  // Scroll to section handler
  const scrollToSection = (id: string) => {
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Adjust for sticky header
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col font-sans selection:bg-primary/30">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 pb-16 px-6 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10 text-center">
            <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-serif text-5xl md:text-7xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/50 to-white pb-2"
            >
                Our Policies
            </motion.h1>
            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground mt-6 max-w-2xl mx-auto"
            >
                Ensuring a safe, respectful, and healing environment for everyone.
            </motion.p>
        </div>
        
        {/* Decorative background element */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      </section>

      <div className="container mx-auto px-6 pb-32 max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
            
            {/* Sticky Navigation */}
            <aside className="lg:w-1/4 hidden lg:block">
                <div className="sticky top-32 space-y-1">
                    <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4 pl-4">Table of Contents</h3>
                    {policies.map((policy) => (
                        <button
                            key={policy.id}
                            onClick={() => scrollToSection(policy.id)}
                            className={cn(
                                "w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center gap-3",
                                activeId === policy.id 
                                    ? "bg-primary/10 text-primary" 
                                    : "text-muted-foreground hover:bg-white/5 hover:text-white"
                            )}
                        >
                            <policy.icon className={cn("w-4 h-4", activeId === policy.id ? "text-primary" : "opacity-50")} />
                            {policy.title}
                        </button>
                    ))}
                </div>
            </aside>

            {/* Mobile Navigation (Dropdown) could go here if needed, keeping it simple for now */}

            {/* Content List */}
            <div className="flex-1 space-y-20">
                {policies.map((policy, index) => (
                    <motion.section
                        key={policy.id}
                        id={policy.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="scroll-mt-32"
                    >
                        <div className="flex items-start gap-4 mb-4">
                            <span className="p-3 rounded-2xl bg-primary/10 text-primary">
                                <policy.icon className="w-6 h-6" />
                            </span>
                        </div>
                        <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8 text-white">
                            {policy.title}
                        </h2>
                        <div className="prose prose-invert prose-lg max-w-none text-muted-foreground prose-strong:text-white prose-headings:text-white prose-li:marker:text-primary">
                            {policy.content}
                        </div>
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mt-12" />
                    </motion.section>
                ))}
            </div>
        </div>
      </div>

      
    </main>
  );
}
