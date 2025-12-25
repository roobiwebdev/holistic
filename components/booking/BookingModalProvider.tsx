"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { BookingModal } from "./BookingModal";
import { VagaroWidget } from "./VagaroWidget";

interface BookingModalContextType {
  openModal: (bookingUrl?: string) => void;
  closeModal: () => void;
  isOpen: boolean;
}

const BookingModalContext = createContext<BookingModalContextType | undefined>(
  undefined
);

export function useBookingModal() {
  const context = useContext(BookingModalContext);
  if (!context) {
    throw new Error("useBookingModal must be used within BookingModalProvider");
  }
  return context;
}

interface BookingModalProviderProps {
  children: ReactNode;
}

export function BookingModalProvider({ children }: BookingModalProviderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [bookingUrl, setBookingUrl] = useState<string | undefined>(undefined);

  const openModal = (url?: string) => {
    setBookingUrl(url);
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    // Clear booking URL after a short delay to allow modal close animation
    setTimeout(() => setBookingUrl(undefined), 300);
  };

  return (
    <BookingModalContext.Provider value={{ openModal, closeModal, isOpen }}>
      {children}
      <BookingModal isOpen={isOpen} onClose={closeModal}>
        <VagaroWidget bookingUrl={bookingUrl} />
      </BookingModal>
    </BookingModalContext.Provider>
  );
}

