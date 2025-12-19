import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/sections/Hero";
import { OurStory } from "@/components/sections/our-story";
import { OurPhilosophy } from "@/components/sections/our-philosophy";
import { OurPromise } from "@/components/sections/our-promise";
import { OurServices } from "@/components/sections/our-services";
import { CoreValues } from "@/components/sections/core-values";
import { FrequencyMedicine } from "@/components/sections/frequency-medicine";
import { Testimonials } from "@/components/sections/testimonials";
import { RelatedBlogs } from "@/components/sections/related-blogs";
import { Faq } from "@/components/sections/faq";
import { VisitUs } from "@/components/sections/visit-us";
import { LocationMaps } from "@/components/sections/location-maps";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <Hero />
      <OurStory />
      <OurPhilosophy />
      <OurPromise />
      <OurServices />
      <CoreValues />
      <FrequencyMedicine />
      <Testimonials />
      <RelatedBlogs />
      <Faq />
      <VisitUs />
      <LocationMaps />
    </main>
  );
}
