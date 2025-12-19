"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BLOG_POSTS } from "@/lib/blog-data";
import Link from "next/link";
import Image from "next/image";

// Get the first 3 blog posts
const FEATURED_BLOGS = BLOG_POSTS.slice(0, 3);

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
            {FEATURED_BLOGS.map((blog, index) => (
                <motion.div
                    key={blog.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group bg-card border border-white/10 rounded-2xl overflow-hidden flex flex-col hover:border-primary/30 transition-all duration-300 h-full"
                >
                    {/* Blog Image */}
                    <Link href={`/blog/${blog.slug}`} className="relative h-64 w-full overflow-hidden">
                        <Image 
                            src={blog.image} 
                            alt={blog.title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                        
                        {/* Date & Read Time Tag */}
                        <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-full text-xs text-white flex items-center gap-2">
                            <Clock className="w-3 h-3" />
                            <span>{blog.readTime}</span>
                        </div>
                    </Link>

                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow relative">
                        <Link href={`/blog/${blog.slug}`}>
                            <h3 className="font-serif text-2xl text-foreground mb-3 leading-tight group-hover:text-primary transition-colors line-clamp-2">
                                {blog.title}
                            </h3>
                        </Link>
                        
                        <p className="text-xs text-muted-foreground/60 mb-4">
                            {blog.author} • {blog.date}
                        </p>
                        
                        <p className="text-muted-foreground text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                            {blog.excerpt}
                        </p>

                        {/* Read More Button */}
                        <div className="flex justify-end mt-auto pt-6 border-t border-white/5">
                            <Link href={`/blog/${blog.slug}`}>
                                <Button variant="outline" size="sm" className="rounded-full border-primary/30 text-primary hover:bg-primary hover:text-white transition-colors text-xs font-bold uppercase tracking-widest px-6">
                                    Read More
                                </Button>
                            </Link>
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
                <Link href="/blog">
                    <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white rounded-full px-12 py-6 text-lg font-serif">
                        Read our Blogs
                    </Button>
                </Link>
            </motion.div>
        </div>

      </div>
    </section>
  );
}
