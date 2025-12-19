"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";

const BLOGS = [
  {
    title: "Understanding Frequency Medicine",
    excerpt: "Explore the science and spirituality behind using vibration to heal the body and restore balance to your energetic system.",
    category: "Education",
    imageColor: "bg-purple-500/10"
  },
  {
    title: "The Power of Fascia Release",
    excerpt: "Why we focus on fascia, how it holds trauma, and the profound release that comes from working with the body's connective tissue.",
    category: "Therapy",
    imageColor: "bg-blue-500/10"
  },
  {
    title: "Preparing for Your Session",
    excerpt: "Simple steps to clear your mind and body before visiting our clinic, ensuring you get the most out of your healing journey.",
    category: "Guides",
    imageColor: "bg-emerald-500/10"
  }
];

export function RelatedBlogs() {
  return (
    <section className="relative py-24 md:py-32 bg-background overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16 md:mb-24">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-serif text-4xl md:text-5xl lg:text-6xl text-primary"
            >
                Related Blog Posts
            </motion.h2>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {BLOGS.map((blog, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-card border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-primary/30 transition-all duration-300 h-full"
                >
                    {/* Image Placeholder */}
                    <div className={`h-64 w-full ${blog.imageColor} relative overflow-hidden flex items-center justify-center`}>
                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-20" />
                        <BookOpen className="w-12 h-12 text-primary/20 group-hover:scale-110 transition-transform duration-500" />
                        
                        {/* Category Tag */}
                        <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-sm border border-white/10 px-3 py-1 rounded-full text-xs text-white uppercase tracking-wider">
                            {blog.category}
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow relative">
                        <h3 className="font-serif text-2xl text-foreground mb-4 leading-tight group-hover:text-primary transition-colors">
                            {blog.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow">
                            {blog.excerpt}
                        </p>

                        {/* More Info Button (Bottom Right) */}
                        <div className="flex justify-end mt-auto pt-6 border-t border-white/5">
                            <Button variant="outline" size="sm" className="rounded-full border-primary/30 text-primary hover:bg-primary hover:text-white transition-colors text-xs font-bold uppercase tracking-widest px-6">
                                More Info
                            </Button>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>

        {/* Bottom Main Button */}
        <div className="flex justify-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-12 py-6 text-lg font-serif">
                    Read our Blogs
                </Button>
            </motion.div>
        </div>

      </div>
    </section>
  );
}
