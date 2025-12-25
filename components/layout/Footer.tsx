"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-white/10 pt-20 pb-10 text-foreground overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-20">
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <h2 className="font-serif text-3xl text-primary">
                Holistic Rising
              </h2>
            </Link>
            <div className="bg-gradient-to-r from-primary/50 to-transparent h-[1px] w-20" />
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs font-sans">
              A sanctuary for the soul, mind, and body. Rooted in ancient
              wisdom, designed for modern healing.
            </p>
            <p className="text-muted-foreground text-sm uppercase tracking-wider font-semibold">
              London <span className="text-primary mx-1">•</span> Essex{" "}
              <span className="text-primary mx-1">•</span> Dubai
            </p>
          </div>

          {/* Column 2: Services */}
          <div className="space-y-6">
            <h3 className="font-serif text-sm font-bold uppercase tracking-widest text-foreground">
              Services
            </h3>
            <ul className="space-y-4 text-muted-foreground text-sm font-sans">
              <li>
                <Link
                  href="/services/holistic-therapies"
                  className="hover:text-primary transition-colors"
                >
                  Holistic Therapies
                </Link>
              </li>
              <li>
                <Link
                  href="/services/dr-hr-sports-london"
                  className="hover:text-primary transition-colors"
                >
                  Sports Clinic
                </Link>
              </li>
              <li>
                <Link
                  href="/services/energy-healing"
                  className="hover:text-primary transition-colors"
                >
                  Energy Healing
                </Link>
              </li>
              <li>
                <Link
                  href="/services/trauma-treatment"
                  className="hover:text-primary transition-colors"
                >
                  Trauma Release
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div className="space-y-6">
            <h3 className="font-serif text-sm font-bold uppercase tracking-widest text-foreground">
              Resources
            </h3>
            <ul className="space-y-4 text-muted-foreground text-sm font-sans">
              <li>
                <Link
                  href="/blog"
                  className="hover:text-primary transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/aftercare"
                  className="hover:text-primary transition-colors"
                >
                  Aftercare & Policies
                </Link>
              </li>
              <li>
                <Link
                  href="/gift-cards"
                  className="hover:text-primary transition-colors"
                >
                  Gift Cards
                </Link>
              </li>
              <li>
                <Link
                  href="/careers"
                  className="hover:text-primary transition-colors"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Connect */}
          <div className="space-y-6">
            <h3 className="font-serif text-sm font-bold uppercase tracking-widest text-foreground">
              Connect
            </h3>
            <ul className="space-y-4 text-muted-foreground text-sm font-sans">
              <li>
                <Link
                  href="/find-us"
                  className="hover:text-primary transition-colors"
                >
                  Find Us
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="hover:text-primary transition-colors"
                >
                  Meet the Team
                </Link>
              </li>
              <li>
                <Link
                  href="/policies"
                  className="hover:text-primary transition-colors"
                >
                  Policies
                </Link>
              </li>
            </ul>

            {/* Call Button */}
            <div className="pt-4">
              <Button
                asChild
                variant="outline"
                size="sm"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-white transition-colors gap-2"
              >
                <a href="tel:+447726444360" className="flex">
                  <Phone className="w-4 h-4" />
                  <span>Call Us</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-[1px] w-full bg-white/5 mb-8" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-muted-foreground font-sans">
          <p>© {currentYear} Holistic Rising. All rights reserved.</p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-20 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="font-serif italic text-white/30 text-lg md:text-xl"
          >
            &quot;Healing, designed with intention.&quot;
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
