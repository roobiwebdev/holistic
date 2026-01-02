"use client";

import { Star } from "lucide-react";
import { ReviewSummary } from "@/lib/testimonials-types";
import { Button } from "@/components/ui/Button";
import { motion } from "framer-motion";

interface RatingSummaryProps {
  summary: ReviewSummary;
}

export function RatingSummary({ summary }: RatingSummaryProps) {
  return (
    <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border mb-8 w-full max-w-4xl mx-auto">
      <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
        
        {/* Left: Overall Rating */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 min-w-[200px]">
          <div className="flex items-baseline gap-2">
            <span className="text-5xl md:text-6xl font-bold text-foreground">
              {summary.overallRating.toFixed(1)}
            </span>
            <span className="text-muted-foreground font-medium">out of 5</span>
          </div>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className="w-5 h-5 fill-yellow-400 text-yellow-400"
              />
            ))}
          </div>
          <p className="text-muted-foreground font-medium">{summary.totalReviews} Reviews</p>
        </div>

        {/* Middle: Star Distribution */}
        <div className="flex-1 w-full max-w-md space-y-2">
          {[5, 4, 3, 2, 1].map((star) => {
            const count = summary.starDistribution[star as keyof typeof summary.starDistribution] || 0;
            const percentage = (count / summary.totalReviews) * 100;

            return (
              <div key={star} className="flex items-center gap-3 text-sm">
                <span className="w-3 font-medium text-muted-foreground">{star}</span>
                <Star className="w-3 h-3 text-muted-foreground/30" />
                <div className="flex-1 h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${percentage}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full bg-yellow-400 rounded-full"
                  />
                </div>
                <span className="w-8 text-right text-muted-foreground text-xs">{count}</span>
              </div>
            );
          })}
        </div>

        {/* Right: CTA */}
        <div className="flex flex-col gap-3 justify-center items-center md:items-end min-w-[200px]">
           <Button 
            className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 h-auto text-lg w-full md:w-auto shadow-lg shadow-primary/20 transition-all hover:scale-105"
            onClick={() => window.open('https://www.vagaro.com/holisticrisinghighstreet/reviews', '_blank')}
           >
            Write a Review
           </Button>
           <p className="text-xs text-muted-foreground">
             via Vagaro.com
           </p>
        </div>

      </div>
    </div>
  );
}
