import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google"; // Import new fonts
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer } from "@/components/layout/Footer";
import { VagaroScript } from "@/components/booking/VagaroScript";
import { BookingModalProvider } from "@/components/booking/BookingModalProvider";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Holistic Rising | Alternative Healing & Massage",
  description:
    "A sanctuary for the soul, mind, and body. Rooted in ancient wisdom, designed for modern healing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${playfair.variable} ${inter.variable} antialiased bg-background text-foreground font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BookingModalProvider>
            {children}
            <Footer />
            <VagaroScript />
          </BookingModalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
