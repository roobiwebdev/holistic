import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LocationMaps } from "@/components/sections/location-maps";
import { VisitUs } from "@/components/sections/visit-us";

export default function FindUsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
       {/* Simple Hero */}
      <section className="pt-32 pb-12 px-6 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-white via-primary/50 to-white pb-2">
            Find Us
          </h1>
           <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
             Get directions and contact information for all our locations.
          </p>
      </section>

      {/* Reuse Sections */}
      <LocationMaps />
      <VisitUs />

    
    </main>
  );
}
