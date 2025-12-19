import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Faq } from "@/components/sections/faq";

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      {/* Hero for context */}
      <section className="pt-32 pb-6 px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/50 to-white pb-2">
            Frequently Asked Questions
          </h1>
      </section>

      <Faq />

      <Footer />
    </main>
  );
}
