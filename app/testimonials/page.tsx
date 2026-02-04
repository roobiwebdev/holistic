import { Navbar } from "@/components/layout/Navbar";

export default function TestimonialsPage() {
    return (
        <main className="relative min-h-screen bg-background text-foreground flex flex-col">
            <Navbar />

            <section className="pt-32 pb-24">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                            Client Reviews
                        </h1>
                        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                            Read what our clients have to say about their experience with Holistic Rising.
                        </p>
                    </div>

                    <div className="relative z-10" dangerouslySetInnerHTML={{
                        __html: `
            <div data-id="16538" data-url="https://app.revyou" style="min-height: 500px; background: transparent;">
              <script 
                src="https://widget.reviewability.com/widget-review.js"
                type="application/ld+json"
                async>
              </script>
            </div>
          `}} />
                </div>
            </section>
        </main>
    );
}
