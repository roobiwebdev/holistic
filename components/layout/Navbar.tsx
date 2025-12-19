"use client";

import * as React from "react";
import Link from "next/link";

import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/Button";
import { ModeToggle } from "@/components/ui/ModeToggle";

// Navigation Data Configuration
const NAV_GROUPS = [
  {
    label: "About",
    href: "/about", // Optional base route
    items: [
      { label: "Meet the Team", href: "/meet-the-team" },
      { label: "Career Opportunity", href: "/career-opportunity" },
    ],
  },
  {
    label: "Services",
    href: "/services",
    items: [
      { label: "Trauma Treatment", href: "/trauma-treatment" },
      { label: "Holistic Therapies", href: "/holistic-therapies" },
      { label: "Energy Healing", href: "/energy-healing" },
      { label: "Natural Glow", href: "/natural-glow" },
      { label: "Healing Movement", href: "/healing-movement" },
      { label: "Maternal Massage", href: "/maternal-massage" },
      { label: "2by4", href: "/2by4" },
      { label: "Bodies by RS", href: "/bodies-by-rs" },
    ],
  },
  {
    label: "Clinics",
    href: "/clinics",
    items: [
      { label: "London", href: "/dr-hr-sports-london" },
      { label: "Dubai", href: "https://drsportsclinic.co.uk/" },
      { label: "Find Us", href: "/find-us" },
    ],
  },
  {
    label: "Resources",
    href: "/resources",
    items: [
      { label: "Blog", href: "/blog" },
      { label: "Policies", href: "/policies" },
      { label: "Aftercare & Policies", href: "/aftercare-and-policies" },
      { label: "Why Feet Matter", href: "/why-feet-matter" },
      { label: "Gift Cards", href: "/gift-cards" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    items: [], // Leaf node
  },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [hoveredGroup, setHoveredGroup] = React.useState<string | null>(null);

  // Handle Scroll Effect
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500 will-change-transform",
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-white/5 py-4"
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="z-50 relative">
            <h1
              className={cn(
                "font-serif text-2xl md:text-3xl font-bold tracking-tight transition-colors",
                isScrolled ? "text-foreground" : "text-white"
              )}
            >
              Holistic Rising
            </h1>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <Link
              href="/"
              className={cn(
                "text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors",
                isScrolled ? "text-foreground/80" : "text-white/80"
              )}
            >
              Home
            </Link>

            {NAV_GROUPS.map((group) => (
              <div
                key={group.label}
                className="relative group h-full py-2"
                onMouseEnter={() => setHoveredGroup(group.label)}
                onMouseLeave={() => setHoveredGroup(null)}
              >
                <div
                  className={cn(
                    "flex items-center gap-1 cursor-pointer text-sm font-bold uppercase tracking-widest hover:text-primary transition-colors",
                    isScrolled ? "text-foreground/80" : "text-white/80"
                  )}
                >
                  {group.items.length > 0 ? (
                    <span>{group.label}</span>
                  ) : (
                    <Link href={group.href}>{group.label}</Link>
                  )}
                  {group.items.length > 0 && (
                    <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                  )}
                </div>

                {/* Dropdown Menu */}
                <AnimatePresence>
                  {hoveredGroup === group.label && group.items.length > 0 && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-1/2 -translate-x-1/2 min-w-[240px] pt-4"
                    >
                      <div className="bg-card/95 backdrop-blur-xl border border-white/10 p-2 rounded-sm shadow-2xl">
                        {group.items.map((item, index) => {
                          const isExternal = item.href.startsWith("http");
                          return (
                            <motion.div
                              key={item.href}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.05, duration: 0.2 }} // Staggered fast animation
                            >
                              <Link
                                href={item.href}
                                className="block px-6 py-3 text-sm font-medium text-muted-foreground hover:text-primary hover:bg-white/5 transition-colors rounded-sm"
                                target={isExternal ? "_blank" : undefined}
                                rel={isExternal ? "noopener noreferrer" : undefined}
                              >
                                {item.label}
                              </Link>
                            </motion.div>
                          );
                        })}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <ModeToggle />
            <Button variant="premium" size="sm" className="font-bold">
              Get in Touch
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "lg:hidden z-50 p-2 transition-colors",
              isScrolled ? "text-foreground" : "text-white"
            )}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-xl pt-24 px-6 overflow-y-auto"
          >
            <nav className="flex flex-col gap-6">
              <Link
                href="/"
                className="text-2xl font-serif font-bold text-foreground border-b border-white/10 pb-4"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              {NAV_GROUPS.map((group) => (
                <div
                  key={group.label}
                  className="border-b border-white/10 pb-4"
                >
                  {group.items.length > 0 ? (
                    <MobileDropdown
                      group={group}
                      onClose={() => setMobileMenuOpen(false)}
                    />
                  ) : (
                    <Link
                      href={group.href}
                      className="text-2xl font-serif font-bold text-foreground block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {group.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="pt-8 flex flex-col gap-4">
                <Button className="w-full font-bold" variant="premium">
                  Get in Touch
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Helper for Mobile Dropdown Logic
function MobileDropdown({
  group,
  onClose,
}: {
  group: any;
  onClose: () => void;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div>
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-2xl font-serif font-bold text-foreground">
          {group.label}
        </span>
        <ChevronDown
          className={cn(
            "w-5 h-5 transition-transform duration-300",
            isOpen && "rotate-180"
          )}
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-3 py-4 pl-4 border-l border-white/10 ml-2 mt-2">
              {group.items.map((item: any) => {
                const isExternal = item.href.startsWith("http");
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-lg font-medium text-muted-foreground hover:text-primary transition-colors"
                    onClick={onClose}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
