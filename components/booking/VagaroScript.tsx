"use client";
import Script from "next/script";

// TODO: Replace with your actual Vagaro widget URL from dashboard
// Get this from: Vagaro Dashboard > Settings > Online Booking > Website Widgets
const VAGARO_WIDGET_URL = process.env.NEXT_PUBLIC_VAGARO_WIDGET_URL || "";

export function VagaroScript() {
  // Only load if URL is provided
  if (!VAGARO_WIDGET_URL) {
    console.warn("Vagaro widget URL not configured. Please set NEXT_PUBLIC_VAGARO_WIDGET_URL in your .env file.");
    return null;
  }

  return (
    <Script
      src={VAGARO_WIDGET_URL}
      strategy="lazyOnload"
      onLoad={() => {
        console.log("Vagaro widget loaded successfully");
      }}
      onError={() => {
        console.error("Failed to load Vagaro widget. Please check your widget URL.");
      }}
    />
  );
}

