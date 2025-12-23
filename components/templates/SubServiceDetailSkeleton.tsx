"use client";

import { Navbar } from "@/components/layout/Navbar";

export function SubServiceDetailSkeleton() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section Skeleton */}
      <section className="relative py-16 md:py-24 px-6 bg-gradient-to-b from-background via-primary/5 to-background">
        <div className="container mx-auto max-w-7xl">
          <div className="h-6 w-32 bg-white/10 rounded mb-8 animate-pulse" />
          <div className="h-12 md:h-16 bg-white/10 rounded-lg mb-6 max-w-2xl animate-pulse" />
          <div className="h-6 md:h-8 bg-white/10 rounded mb-4 max-w-4xl animate-pulse" />
          <div className="h-6 md:h-8 bg-white/10 rounded max-w-3xl animate-pulse" />
        </div>
      </section>

      {/* Content Section Skeleton */}
      <section className="py-16 md:py-24 px-6 bg-background">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Video/Image Skeleton */}
            <div className="aspect-video bg-white/5 rounded-2xl border border-white/10 animate-pulse" />

            {/* Benefits & Pricing Skeleton */}
            <div className="space-y-12">
              <div>
                <div className="h-10 bg-white/10 rounded mb-8 w-48 animate-pulse" />
                <div className="space-y-4">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-6 h-6 bg-white/10 rounded-full animate-pulse" />
                      <div className="flex-1 h-6 bg-white/10 rounded animate-pulse" />
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div className="h-10 bg-white/10 rounded mb-8 w-32 animate-pulse" />
                <div className="space-y-4">
                  {Array.from({ length: 2 }).map((_, i) => (
                    <div
                      key={i}
                      className="bg-white/5 border border-white/10 rounded-2xl p-8 animate-pulse"
                    >
                      <div className="h-24 bg-white/10 rounded mb-6" />
                      <div className="h-12 bg-white/10 rounded" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

