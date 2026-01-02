export interface Review {
  id: string;
  author: string;
  initials: string;
  date: string; // ISO format or formatted string
  rating: number; // 1-5
  text: string;
  service?: string; // e.g. "Massage", "Reiki"
  verified?: boolean;
}

export interface ReviewSummary {
  overallRating: number;
  totalReviews: number;
  starDistribution: {
    5: number;
    4: number;
    3: number;
    2: number;
    1: number;
  };
}

export type SortOption = "newest" | "highest" | "lowest";

export interface FilterState {
  rating: number | "all";
  sortBy: SortOption;
  page: number;
}
