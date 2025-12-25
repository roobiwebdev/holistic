"use client";

interface VagaroWidgetProps {
  bookingUrl?: string;
}

/**
 * Component to render the Vagaro booking page inside the modal using an iframe
 */
export function VagaroWidget({ bookingUrl }: VagaroWidgetProps) {
  // Fallback to general booking URL if no specific URL provided
  const generalBookingUrl =
    process.env.NEXT_PUBLIC_VAGARO_GENERAL_URL || "https://www.vagaro.com";

  const iframeUrl = bookingUrl || generalBookingUrl;

  return (
    <div className="w-full h-full min-h-[750px]">
      {iframeUrl ? (
        <iframe
          src={iframeUrl}
          className="w-full h-full min-h-[750px] border-0 rounded-lg"
          title="Book Appointment"
          allow="payment; fullscreen"
          loading="lazy"
        />
      ) : (
        <div className="flex items-center justify-center h-full min-h-[750px] text-center">
          <div className="space-y-4">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4 mx-auto">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </div>
            <p className="text-muted-foreground text-lg">
              Booking URL not configured
            </p>
            <p className="text-sm text-muted-foreground/70">
              Please add a booking URL for this service.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
