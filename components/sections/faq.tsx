"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

const FAQS = [
  {
    question: "What should I expect during my first massage session?",
    answer: "At Holistic Rising, your first session begins with a short consultation to understand your needs and intentions. We’ll discuss any relevant health history and tailor your treatment accordingly. You’ll then be given privacy to get comfortable. The therapist will guide you through the process and ensure you feel safe, supported, and respected throughout."
  },
  {
    question: "Do I need to undress completely?",
    answer: "No. Your comfort is our priority. You’ll only need to undress to the level you feel comfortable with. Most clients undress to their underwear. At Holistic Rising, we use soft bedding, soft face cushions, and comfortable pillows to ensure you feel supported and relaxed at all times. Only the area being worked on will be uncovered during treatment, and you’ll always be treated with care and respect."
  },
  {
    question: "What is a relaxing massage for the mind?",
    answer: "Unlike massages that focus on fixing the body or releasing muscle tension, our relaxing massage is designed to calm the mind. It works through the healing power of touch, helping the body release oxytocin — a hormone that reduces stress and promotes feelings of well-being. When the mind is calm, the body naturally follows into a relaxed state. This treatment is ideal if you’re feeling mentally overwhelmed, anxious, or emotionally fatigued."
  },
  {
    question: "Is massage suitable during pregnancy?",
    answer: "Yes — we offer specialist maternity massage, tailored for both prenatal and postnatal care. These treatments focus on nurturing the emotional wellbeing of the mother, supporting hormonal balance, and easing the mind. You’ll be positioned safely and comfortably throughout."
  },
  {
    question: "Can I book a massage if I have an injury or chronic condition?",
    answer: "Yes, although it depends on the type of treatment. If you’re experiencing an injury or a specific physical issue, we may recommend a session with our sports therapy team at DR Sports Clinic, which focuses on results-based, functional bodywork. Otherwise, gentle holistic or energy-based treatments may still be beneficial — we’ll always advise what’s most appropriate for your situation."
  },
  {
    question: "How long are the treatments?",
    answer: (
        <div className="space-y-4">
            <p>Treatment times vary depending on the therapy. Most sessions last between 60–90 minutes, with options for 30-minute focused treatments and longer sessions for deeper work.</p>
            <p>Our Holistic Healing Fusion Therapies, created by Maria Sarmiento, can last up to three hours, allowing time for layered, intuitive healing that supports the emotional, energetic, and physical systems in depth.</p>
            <p>All appointments include time for consultation and aftercare advice to ensure you receive the most from your experience.</p>
        </div>
    )
  },
  {
    question: "How often should I come for treatment?",
    answer: "This depends on your goals. Some clients come weekly for consistent support, while others visit monthly or as needed. After your session, your therapist will provide guidance on what might best suit your needs, and we’re happy to support you in creating a longer-term healing plan if desired."
  },
  {
    question: "What is trauma release therapy?",
    answer: (
        <div className="space-y-4">
            <p>Our trauma release treatment, developed by Maria Sarmiento, creates a profound release of trauma throughout the body. It combines sports therapy, Thai massage, and Raynor massage to work deeply through the body’s physical and energetic systems.</p>
            <ul className="list-disc pl-5 space-y-1">
                <li>Sports massage increases joint mobility and range of motion.</li>
                <li>Thai massage improves flexibility and works directly on the meridian system to clear energetic stagnation.</li>
                <li>Raynor massage focuses on releasing the fascial lines and deeply stored tension in the connective tissues.</li>
            </ul>
            <p>Additional massage modalities are incorporated to move fluids through the system, supporting detoxification and encouraging a full-body reset.</p>
            <p>This integrative approach supports trauma release through physical, emotional, and energetic pathways.</p>
        </div>
    )
  },
  {
    question: "What is holistic healing?",
    answer: (
        <div className="space-y-4">
            <p>Holistic Healing at Holistic Rising is a fusion of massage therapy, energy healing, Ayurvedic principles, and other intuitive bodywork techniques. These sessions are uniquely tailored to each person and work on the whole being — physical, emotional, mental, and energetic.</p>
            <p>By combining the grounding touch of massage with the subtle balancing of energy healing, this therapy aims to restore internal harmony and initiate deep nervous system regulation. It is especially powerful for those seeking emotional clarity, spiritual connection, or recovery from energetic exhaustion.</p>
        </div>
    )
  },
  {
    question: "What is 2by4?",
    answer: (
        <div className="space-y-4">
            <p>2by4 is a unique support model offered at Holistic Rising, where clients receive two therapists working together for a full four-handed treatment.</p>
            <p>This powerful approach creates a deep sense of balance and synergy in the body and energy field. 2x4 treatments are ideal for clients experiencing chronic overwhelm, trauma, or emotional imbalance. The combined touch and energy of two skilled practitioners allow for a reset on multiple levels, bringing the body-mind system into a deeply supported state.</p>
        </div>
    )
  },
  {
    question: "Can I combine different therapies in one session?",
    answer: "Yes — we offer fusion therapies that combine multiple healing modalities in one session. These are custom-designed treatments tailored to your needs on the day, and they’re a beautiful way to experience holistic support across the physical, emotional, and energetic levels."
  },
  {
    question: "What should I wear to a DR Sports Clinic session?",
    answer: (
        <div className="space-y-4">
            <p>For all treatments under DR Sports Clinic, clients must arrive wearing shorts and a sports bra or suitable activewear. These specialist sessions do not use traditional massage bedding, as they involve dynamic, movement-based assessments and treatments.</p>
            <p>The clinic is known for providing visible, measurable results from the very first session, especially through their reset treatments, designed by co-founder Diego Robinson. These focus on correcting imbalances, enhancing performance, and accelerating recovery with precision.</p>
        </div>
    )
  },
  {
    question: "What should I do after my treatment?",
    answer: "After your treatment, we recommend drinking plenty of water, taking time to rest, and avoiding anything overly stimulating. Your therapist will offer personalised aftercare advice to help you integrate the benefits and maintain balance between sessions. The complete list of aftercare recommendations can be found in the Aftercare section of the Holistic Rising website, and a direct link to this will also be sent to you with your invoice."
  },
  {
    question: "Do I get an invoice and do I need to pay a deposit?",
    answer: (
        <div className="space-y-4">
            <p>Yes, all our treatments are invoiced at checkout with full VAT details. You will receive an invoice that can be used for insurance purposes if required.</p>
            <p>To safeguard the therapist’s time and to pre-book the studio space, a deposit is required when booking your appointment. This ensures your slot is reserved, and helps us maintain smooth scheduling for all clients.</p>
        </div>
    )
  },
  {
    question: "Can my treatment run over the scheduled time?",
    answer: (
        <div className="space-y-4">
            <p>As we are a healing clinic, we work intuitively and holistically with each individual. On occasion, a treatment may run over by up to 20 minutes, depending on the condition and needs of the client. If this happens, there will be no additional charge, provided it occurs infrequently.</p>
            <p>We also schedule a 10-minute buffer between each appointment. If a treatment does run over, the next client may experience a short delay of no more than 15 minutes. We appreciate your understanding and patience as we honour the healing journey of every person who walks through our doors.</p>
        </div>
    )
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden border-t border-white/5">
      
      {/* Decorative Icon Top (Diamond shape approximation) */}
      <div className="flex justify-center mb-12 opacity-50">
        <div className="grid grid-cols-2 gap-2 rotate-45">
            <div className="w-2 h-2 bg-primary/60" />
            <div className="w-2 h-2 bg-primary/60" />
            <div className="w-2 h-2 bg-primary/60" />
            <div className="w-2 h-2 bg-primary/60" />
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary mb-6"
            >
                Frequently Asked Questions
            </motion.h2>
            <motion.p
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.2 }}
                 className="text-muted-foreground font-sans text-lg"
            >
                Please reach us at <a href="mailto:maria@holistic-rising.com" className="underline hover:text-primary transition-colors">maria@holistic-rising.com</a> and we will answer all your questions.
            </motion.p>
        </div>

        {/* FAQs */}
        <div className="space-y-4">
            {FAQS.map((faq, index) => (
                <FaqItem 
                    key={index} 
                    question={faq.question} 
                    answer={faq.answer} 
                    isOpen={openIndex === index}
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                />
            ))}
        </div>

      </div>
    </section>
  );
}

function FaqItem({ question, answer, isOpen, onClick }: { question: string, answer: React.ReactNode, isOpen: boolean, onClick: () => void }) {
    return (
        <motion.div 
            initial={false}
            className={cn(
                "rounded-xl overflow-hidden border transition-all duration-300",
                isOpen ? "bg-card border-primary/30 shadow-lg shadow-primary/5" : "bg-transparent border-white/5 hover:border-white/10"
            )}
        >
            <button 
                onClick={onClick}
                className="w-full flex items-center justify-between p-6 md:p-8 text-left group transition-colors"
            >
                <span className={cn(
                    "font-serif text-lg md:text-xl font-semibold pr-8 transition-colors",
                    isOpen ? "text-primary" : "text-foreground group-hover:text-primary/80"
                )}>
                    {question}
                </span>
                <ChevronDown className={cn(
                    "w-5 h-5 transition-transform duration-300 flex-shrink-0",
                    isOpen ? "text-primary rotate-180" : "text-muted-foreground"
                )} />
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-6 md:px-8 pb-8 pt-0 text-muted-foreground leading-relaxed font-sans">
                            <div className="pt-2 border-t border-dashed border-primary/10 mt-2">
                                <div className="pt-4">
                                     {answer}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
