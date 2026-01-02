import { NextResponse } from "next/server";
import { MOCK_REVIEWS, MOCK_SUMMARY } from "@/lib/reviews-data";
import { Review } from "@/lib/testimonials-types";

const ITEMS_PER_PAGE = 6;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const rating = searchParams.get("rating"); // "all" or "1"-"5"
  const sort = searchParams.get("sort") || "newest"; // "newest", "highest", "lowest"

  let filteredReviews = [...MOCK_REVIEWS];

  // 1. Filter by Rating
  if (rating && rating !== "all") {
    const ratingNum = parseInt(rating);
    filteredReviews = filteredReviews.filter((r) => r.rating === ratingNum);
  }

  // 2. Sort
  filteredReviews.sort((a, b) => {
    switch (sort) {
      case "highest":
        return b.rating - a.rating;
      case "lowest":
        return a.rating - b.rating;
      case "newest":
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  // 3. Pagination
  const totalItems = filteredReviews.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);
  const startIndex = (page - 1) * ITEMS_PER_PAGE;
  const paginatedReviews = filteredReviews.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return NextResponse.json({
    reviews: paginatedReviews,
    summary: MOCK_SUMMARY,
    pagination: {
      currentPage: page,
      totalPages,
      totalItems,
      hasMore: page < totalPages,
    },
  });
}
