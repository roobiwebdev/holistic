"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FilterState, Review, ReviewSummary } from "@/lib/testimonials-types";
import { RatingSummary } from "@/components/testimonials/RatingSummary";
import { FilterBar } from "@/components/testimonials/FilterBar";
import { ReviewCard } from "@/components/testimonials/ReviewCard";
import { Pagination } from "@/components/testimonials/Pagination";

export function Testimonials() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [summary, setSummary] = useState<ReviewSummary | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  
  const [filters, setFilters] = useState<FilterState>({
    rating: "all",
    sortBy: "newest",
    page: 1,
  });

  const [paginationInfo, setPaginationInfo] = useState({
    totalPages: 1,
    totalItems: 0,
  });

  // Fetch reviews when filters change
  useEffect(() => {
    const fetchReviews = async () => {
      setIsLoading(true);
      try {
        const queryParams = new URLSearchParams({
          page: filters.page.toString(),
          sort: filters.sortBy,
          ...(filters.rating !== "all" && { rating: filters.rating.toString() }),
        });

        const res = await fetch(`/api/reviews?${queryParams}`);
        if (!res.ok) throw new Error("Failed to fetch reviews");
        
        const data = await res.json();
        
        setReviews(data.reviews);
        setSummary(data.summary);
        setPaginationInfo({
            totalPages: data.pagination.totalPages,
            totalItems: data.pagination.totalItems
        });
        
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setIsLoading(false);
      }
    };

    // Debounce slightly to prevent rapid firing during UI updates if any
    const timeoutId = setTimeout(fetchReviews, 50);
    return () => clearTimeout(timeoutId);
  }, [filters]);

  const handleFilterChange = (updates: Partial<FilterState>) => {
    setFilters((prev) => ({ ...prev, ...updates }));
  };

  const handlePageChange = (newPage: number) => {
    setFilters((prev) => ({ ...prev, page: newPage }));
    // Smooth scroll to top of reviews section
    document.getElementById("reviews-grid")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden border-t border-border/40">
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground mb-6"
            >
                Client Testimonials
            </motion.h2>
            <motion.p
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ duration: 0.8, delay: 0.1 }}
                 className="text-muted-foreground max-w-2xl mx-auto text-lg"
            >
                Don't just take our word for it. Read what our community has to say about their healing journeys.
            </motion.p>
        </div>

        {/* Summary Card */}
        <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
        >
            {summary && <RatingSummary summary={summary} />}
        </motion.div>

        {/* Filters */}
        <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.3 }}
        >
            <FilterBar filters={filters} onFilterChange={handleFilterChange} />
        </motion.div>

        {/* Reviews Grid */}
        <div id="reviews-grid" className="min-h-[600px]">
            {isLoading ? (
                <div className="grid md:grid-cols-2 gap-6 opacity-50 pointer-events-none animate-pulse">
                     {[...Array(6)].map((_, i) => (
                        <div key={i} className="bg-card h-64 rounded-xl border border-border" />
                     ))}
                </div>
            ) : reviews.length > 0 ? (
                <div className="grid md:grid-cols-2 gap-6">
                    <AnimatePresence mode="popLayout">
                        {reviews.map((review, index) => (
                            <ReviewCard key={review.id} review={review} index={index} />
                        ))}
                    </AnimatePresence>
                </div>
            ) : (
                <div className="text-center py-20 bg-muted/30 rounded-2xl border border-border">
                    <p className="text-muted-foreground text-lg">No reviews found matching your criteria.</p>
                    <button 
                        onClick={() => handleFilterChange({ rating: 'all', sortBy: 'newest' })}
                        className="mt-4 text-primary hover:underline"
                    >
                        Clear filters
                    </button>
                </div>
            )}
        </div>

        {/* Pagination */}
        {!isLoading && (
             <Pagination 
                currentPage={filters.page} 
                totalPages={paginationInfo.totalPages} 
                onPageChange={handlePageChange}
            />
        )}

      </div>
    </section>
  );
}
