"use client";

import { useState, useRef, useEffect } from "react";
import { FilterState, SortOption } from "@/lib/testimonials-types";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterBarProps {
  filters: FilterState;
  onFilterChange: (updates: Partial<FilterState>) => void;
}

// Custom Dropdown Component internal to this file to avoid dependency issues
function CustomDropdown({
  options,
  value,
  onChange,
  placeholder,
}: {
  options: { label: string; value: string }[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const selectedLabel = options.find((o) => o.value === value)?.label || placeholder;

  return (
    <div className="relative w-full" ref={containerRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-card border border-input rounded-lg text-sm font-medium text-foreground hover:border-primary/50 focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all shadow-sm"
      >
        <span className="truncate">{selectedLabel}</span>
        <ChevronDown className={cn("w-4 h-4 text-muted-foreground transition-transform duration-200", isOpen && "rotate-180")} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.2 }}
            className="absolute z-50 w-full mt-2 bg-card border border-border rounded-lg shadow-xl overflow-hidden py-1"
          >
            {options.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onChange(option.value);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between group",
                  value === option.value
                    ? "bg-primary/10 text-primary font-medium"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                )}
              >
                {option.label}
                {value === option.value && <Check className="w-4 h-4 text-primary" />}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function FilterBar({ filters, onFilterChange }: FilterBarProps) {
  
  const ratingOptions = [
    { label: "All Ratings", value: "all" },
    { label: "5 Stars", value: "5" },
    { label: "4 Stars", value: "4" },
    { label: "3 Stars", value: "3" },
    { label: "2 Stars", value: "2" },
    { label: "1 Star", value: "1" },
  ];

  const sortOptions = [
    { label: "Most Recent", value: "newest" },
    { label: "Highest Rated", value: "highest" },
    { label: "Lowest Rated", value: "lowest" },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8 max-w-4xl mx-auto w-full relative z-20">
      
      {/* Rating Filter */}
      <div className="w-full sm:w-[200px]">
        <CustomDropdown
          placeholder="Filter by Rating"
          value={filters.rating.toString()}
          options={ratingOptions}
          onChange={(val) => 
            onFilterChange({ 
              rating: val === "all" ? "all" : parseInt(val), 
              page: 1 
            })
          }
        />
      </div>

      {/* Sort Control */}
      <div className="w-full sm:w-[200px]">
        <CustomDropdown
            placeholder="Sort by"
            value={filters.sortBy}
            options={sortOptions}
            onChange={(val) => 
                onFilterChange({ 
                    sortBy: val as SortOption, 
                    page: 1 
                })
            }
        />
      </div>
    </div>
  );
}
