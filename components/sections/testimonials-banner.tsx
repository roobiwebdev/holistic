"use client";

import { useEffect } from "react";

export function TestimonialsBanner() {
    return (
        <section className="py-24 bg-background relative z-10 border-b border-white/5 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="min-h-[140px] flex items-center justify-center">
                    <div dangerouslySetInnerHTML={{
                        __html: `
            <div 
              data-id="16538" 
              data-url="https://app.revyou"
              data-widget="https://widget.reviewability.com/widget-adv.js"
              async>
              <script type="application/ld+json">
              {
                "@context":"https://schema.org",
                "@type":"LocalBusiness"
              }
              </script>
            </div>
          `}} />
                </div>
            </div>
        </section>
    );
}
