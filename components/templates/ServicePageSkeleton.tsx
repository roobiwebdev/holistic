"use client";

import { Navbar } from "@/components/layout/Navbar";

export function ServicePageSkeleton() {
  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Hero Section Skeleton */}
      <section className="relative h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-neutral-900 animate-pulse" />
        <div className="relative z-20 text-center px-6 max-w-5xl mx-auto space-y-6">
          <div className="h-6 w-48 bg-white/10 rounded mx-auto animate-pulse" />
          <div className="h-20 md:h-32 bg-white/10 rounded-lg mx-auto max-w-4xl animate-pulse" />
          <div className="h-6 md:h-8 bg-white/10 rounded mx-auto max-w-2xl animate-pulse" />
        </div>
      </section>

      {/* Cards Grid Skeleton */}
      <section className="py-24 px-6 bg-background relative z-10">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="flex flex-col bg-white/5 border-2 border-white/10 rounded-[2rem] overflow-hidden animate-pulse"
              >
                <div className="aspect-[16/10] bg-neutral-800" />
                <div className="p-8 flex-1 flex flex-col gap-6">
                  <div className="h-8 bg-white/10 rounded w-3/4" />
                  <div className="space-y-2">
                    <div className="h-4 bg-white/10 rounded w-full" />
                    <div className="h-4 bg-white/10 rounded w-5/6" />
                    <div className="h-4 bg-white/10 rounded w-4/6" />
                  </div>
                  <div className="h-12 bg-white/10 rounded-full mt-4" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

