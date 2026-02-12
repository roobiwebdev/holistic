import { Navbar } from "@/components/layout/Navbar";
import { TestimonialsBanner } from "@/components/sections/testimonials-banner";
import { Testimonials } from "@/components/sections/testimonials";

export default function TestimonialsPage() {
    return (
        <main className="relative min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            <div className="pt-20 [&>section:first-child]:!py-2 [&>section:nth-child(2)]:!pt-0 [&>section:nth-child(2)_.text-center.mt-16]:!mt-0">
                <TestimonialsBanner />
                <Testimonials />
            </div>

        </main>
    );
}
