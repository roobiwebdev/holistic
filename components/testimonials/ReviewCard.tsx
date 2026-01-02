"use client";

import { useState } from "react";
import { Star, CheckCircle2 } from "lucide-react";
import { Review } from "@/lib/testimonials-types";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ReviewCardProps {
  review: Review;
  index: number;
}

export function ReviewCard({ review, index }: ReviewCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Truncate logic
  const MAX_LENGTH = 160;
  const shouldTruncate = review.text.length > MAX_LENGTH;
  const displayText = !isExpanded && shouldTruncate 
    ? `${review.text.slice(0, MAX_LENGTH)}...` 
    : review.text;

  // Generate a consistent pastel color based on initials/name
  const getAvatarColor = (str: string) => {
    const colors = [
      "bg-purple-100 text-purple-700",
      "bg-blue-100 text-blue-700",
      "bg-emerald-100 text-emerald-700",
      "bg-rose-100 text-rose-700",
      "bg-amber-100 text-amber-700",
      "bg-indigo-100 text-indigo-700",
    ];
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return colors[Math.abs(hash) % colors.length];
  };

  const avatarClass = getAvatarColor(review.author);

  // Format Date
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow h-full flex flex-col"
    >
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
            <div className="flex items-center gap-3">
                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm", avatarClass)}>
                    {review.initials}
                </div>
                <div>
                    <h4 className="font-semibold text-foreground leading-tight">
                        {review.author}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                        {formatDate(review.date)}
                    </p>
                </div>
            </div>
            
             {/* Rating */}
             <div className="flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                    <Star
                        key={i}
                        className={cn(
                            "w-4 h-4",
                            i < review.rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted-foreground/20"
                        )}
                    />
                ))}
            </div>
        </div>

        {/* Content */}
        <div className="flex-grow mb-4">
            <p className="text-muted-foreground leading-relaxed text-sm">
                {displayText}
                {shouldTruncate && (
                    <button 
                        onClick={() => setIsExpanded(!isExpanded)}
                        className="text-primary hover:text-primary/80 text-xs font-semibold ml-1 focus:outline-none"
                    >
                        {isExpanded ? "Show Less" : "Read More"}
                    </button>
                )}
            </p>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-border flex items-center justify-between text-xs mt-auto">
            {review.service && (
                <span className="font-medium text-primary bg-primary/10 px-2 py-1 rounded">
                    {review.service}
                </span>
            )}
            
            {review.verified && (
                <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                    <CheckCircle2 className="w-3 h-3" />
                    Verified
                </span>
            )}
        </div>

    </motion.div>
  );
}
