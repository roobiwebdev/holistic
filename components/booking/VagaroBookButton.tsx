"use client";
import { Button } from "@/components/ui/Button";
import { useBookingModal } from "./BookingModalProvider";

interface VagaroBookButtonProps {
  children?: React.ReactNode;
  className?: string;
  variant?: "default" | "premium" | "outline" | "secondary" | "ghost" | "link" | "destructive";
  size?: "default" | "sm" | "lg" | "icon";
  bookingUrl?: string; // Vagaro booking URL for this specific service
}

export function VagaroBookButton({
  children = "Book Now",
  className,
  variant = "premium",
  size = "lg",
  bookingUrl,
}: VagaroBookButtonProps) {
  const { openModal } = useBookingModal();

  const handleClick = () => {
    openModal(bookingUrl);
  };

  return (
    <Button
      onClick={handleClick}
      variant={variant}
      size={size}
      className={className}
    >
      {children}
    </Button>
  );
}

