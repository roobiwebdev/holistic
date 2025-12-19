"use client";

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BLOG_POSTS } from "@/lib/blog-data";
import { Button } from "@/components/ui/Button";
import { useRef, use } from "react";

export default function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  if (!post) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col font-sans">
      <Navbar />

      {/* Hero Banner with Parallax */}
      <div className="relative h-[60vh] md:h-[70vh] flex items-end justify-center overflow-hidden" ref={containerRef}>
         <motion.div 
            style={{ y, opacity }}
            className="absolute inset-0 z-0"
         >
             <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent z-10" />
             <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10" />
             <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-full object-cover"
             />
         </motion.div>

         <div className="container relative z-20 px-6 pb-20 max-w-4xl text-center space-y-6">
            <motion.div
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: 0.2 }}
               className="flex flex-wrap items-center justify-center gap-4 text-sm md:text-base font-bold tracking-widest uppercase text-white/80"
            >
                <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-primary" />
                    {post.author}
                </div>
                <span className="text-primary">•</span>
                <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    {post.date}
                </div>
                <span className="text-primary">•</span>
                <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-primary" />
                    {post.readTime}
                </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-white drop-shadow-2xl"
            >
                {post.title}
            </motion.h1>
         </div>
      </div>

      {/* Content */}
      <article className="flex-1 container mx-auto px-6 py-12 md:py-20 max-w-3xl">
         <Link href="/blog" className="inline-flex items-center text-sm font-bold text-muted-foreground hover:text-primary transition-colors mb-8 group">
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
         </Link>

         <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="prose prose-invert prose-lg md:prose-xl prose-p:leading-relaxed prose-headings:font-serif prose-headings:font-bold prose-strong:text-primary prose-a:text-primary hover:prose-a:text-primary/80"
         >
            {post.content}
         </motion.div>

         {/* Back Button */}
         <div className="mt-16 pt-8 border-t border-white/10 flex justify-center">
            <Link href="/blog">
                <Button variant="outline" className="rounded-full px-8">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Blog
                </Button>
            </Link>
         </div>
      </article>

    
    </main>
  );
}
