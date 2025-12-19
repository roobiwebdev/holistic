import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MapPin, Sparkles, CheckCircle, Calendar, Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function CareerOpportunity() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Header Section */}
      <section className="relative pt-32 pb-12 px-6 text-center">
         <div className="container mx-auto max-w-4xl space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                <Calendar className="w-3 h-3" />
                <span>Posted on: 15 June 2025</span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                Holistic Rising is Hiring!
            </h1>
            
            <div className="space-y-4">
                <h2 className="text-xl md:text-3xl font-serif text-muted-foreground">
                    Freelance Holistic Massage Therapist
                    <span className="block text-primary my-2 text-2xl">&</span>
                    Freelance Holistic Sports Therapist
                </h2>
                <p className="text-lg font-medium text-white/80 animate-pulse">
                    We are currently hiring for two roles!
                </p>
            </div>
         </div>
      </section>

      {/* Main Content Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                
                {/* Left Column: Text Content */}
                <div className="space-y-12">
                    
                    {/* Role Intro */}
                    <div className="space-y-6">
                        <h3 className="flex items-center gap-3 text-2xl font-serif font-bold text-primary">
                            <span>🌿</span>
                            Career Opportunity: Freelance Holistic Massage Therapist
                        </h3>
                        <div className="prose prose-lg prose-invert text-muted-foreground font-sans leading-relaxed">
                            <p>
                                Holistic Rising is expanding, and we’re looking for a passionate and skilled Massage Therapist specialising in holistic therapies to join our team across our clinics in:
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-4 not-prose">
                                {['Wanstead (E11)', 'South Woodford (E18)', 'Romford (RM5)'].map((loc) => (
                                    <li key={loc} className="flex items-center gap-2 text-white font-medium bg-white/5 px-4 py-2 rounded-full border border-white/5">
                                        <MapPin className="w-4 h-4 text-primary" />
                                        <span className="text-sm">{loc}</span>
                                    </li>
                                ))}
                            </ul>
                            <p>
                                This is a unique opportunity to bring your creativity and expertise into a supportive, professional environment. As a freelance therapist, you will have autonomy over your hours and treatments, while benefitting from the ethos and standards that define Holistic Rising.
                            </p>
                        </div>
                    </div>

                    {/* What We Offer */}
                    <div className="space-y-6">
                        <h3 className="flex items-center gap-3 text-xl font-bold text-white uppercase tracking-wider">
                            <Sparkles className="w-5 h-5 text-primary" />
                            What we offer:
                        </h3>
                        <ul className="space-y-4">
                            {[
                                "Immediate start available",
                                "Freedom to manage your own hours and calendar",
                                "Space to express your creativity in treatments, while maintaining our professional standards",
                                "Training and support where needed",
                                "A nurturing and inspiring team environment",
                                "A progressive payment structure:",
                                "40% of each treatment to start",
                                "Progression to 50% as you become a specialist therapist with regular clients requesting you",
                                "Up to 60% as an associate therapist, where you may also bring your own clients to the studio—using the space free of charge, rather than paying rent elsewhere"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-muted-foreground group">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform flex-shrink-0" />
                                    <span className="group-hover:text-white transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* What We're Looking For */}
                    <div className="space-y-6">
                         <h3 className="flex items-center gap-3 text-xl font-bold text-white uppercase tracking-wider">
                            <CheckCircle className="w-5 h-5 text-primary" />
                            What we're looking for:
                        </h3>
                         <ul className="space-y-4">
                            {[
                                "A therapist with a minimum Level 3 qualification in Massage with Anatomy and Physiology (non-negotiable requirement)",
                                "Good availability, with the ability to work mornings, at least three evenings a week, and weekends",
                                "A self-employed professional, responsible for their own tax and providing relevant exemptions for licensing",
                                "Someone with excellent standards in hygiene, timekeeping, communication, customer service, and studio presentation"
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3 text-muted-foreground group">
                                    <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-150 transition-transform flex-shrink-0" />
                                    <span className="group-hover:text-white transition-colors">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="prose prose-lg prose-invert text-muted-foreground font-sans bg-primary/5 p-6 rounded-2xl border border-primary/10">
                        <p className="italic">
                             We are seeking therapists who are not only skilled but who embody the holistic spirit of our work—committed to client care, professional growth, and the art of healing.
                        </p>
                        <p className="font-medium text-white mt-4">
                            If you’re ready to take the next step in your journey and join a team that values passion, creativity and wellbeing, we’d love to hear from you. 🌿
                        </p>
                    </div>

                    <div className="flex items-center gap-2 text-primary font-bold animate-pulse">
                         <Mail className="w-5 h-5" />
                         PLEASE REACH OUT TO APPLY OR TO FIND OUT MORE.
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <Button className="rounded-full px-10 py-6 text-base font-bold bg-white text-black hover:bg-white/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-white/10">
                            Apply Here
                        </Button>
                        <Button variant="premium" className="rounded-full px-10 py-6 text-base font-bold bg-primary text-white hover:bg-primary/90 hover:scale-105 transition-all duration-300 shadow-lg shadow-primary/20 border-none">
                            More Info
                        </Button>
                    </div>

                </div>

                {/* Right Column: Image */}
                <div className="hidden lg:block lg:sticky lg:top-32">
                     <div className="aspect-[3/4] rounded-[3rem] overflow-hidden bg-neutral-800 relative shadow-2xl border border-white/10 group">
                        {/* Placeholder Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-neutral-900 text-neutral-600 space-y-4">
                            <span className="text-8xl p-8 bg-white/5 rounded-full">🌿</span>
                            <span className="text-xl font-serif tracking-widest uppercase opacity-50">Holistic Rising</span>
                        </div>
                        {/* Overlay Gradient */}
                        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60" />
                     </div>
                </div>

            </div>
        </div>
      </section>

      {/* Additional Information Section */}
      <section className="py-20 px-6 bg-white/5 border-t border-white/10 mt-12">
        <div className="container mx-auto max-w-4xl">
            <h3 className="text-2xl font-serif font-bold text-primary mb-8 text-center">Additional Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-background/50 p-8 rounded-2xl border border-white/5 backdrop-blur-sm">
                 {[
                        { label: "Experience", value: "Required" },
                        { label: "Languages", value: "English – Advanced" },
                        { label: "Employment", value: "Part-time" },
                        { label: "Schedule", value: "Mon to Fri Mornings and Evenings, and Weekends." },
                        { label: "Salary", value: "£20 – £40 hourly" },
                        { label: "Benefits", value: "If you can develop your own clientele you will progress to a specialist" },
                    ].map((item, i) => (
                        <div key={i} className="flex flex-col gap-1 border-l-2 border-primary/30 pl-4">
                            <span className="text-xs uppercase tracking-widest text-muted-foreground font-bold">{item.label}</span>
                            <span className="text-white font-medium">{item.value}</span>
                        </div>
                    ))}
            </div>
        </div>
      </section>

    </main>
  );
}
