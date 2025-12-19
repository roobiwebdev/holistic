"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Clock, ArrowRight } from "lucide-react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { BLOG_POSTS, BlogPost } from "@/lib/blog-data";
import { Button } from "@/components/ui/Button";

export default function BlogPage() {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = BLOG_POSTS.filter((post) =>
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      {/* Header & Search */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto max-w-6xl text-center space-y-6">
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             className="font-serif text-5xl md:text-7xl font-bold text-gradient bg-clip-text text-transparent bg-gradient-to-r from-primary via-white to-primary pb-2"
           >
             Our Blog
           </motion.h1>
           <motion.p
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.1 }}
             className="text-muted-foreground max-w-lg mx-auto"
           >
             Explore our latest articles on holistic healing, frequency medicine, and embodied wellness.
           </motion.p>
           
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ delay: 0.2 }}
             className="max-w-md mx-auto relative mt-8"
           >
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input 
                  type="text" 
                  placeholder="Search articles..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white/5 border border-white/10 rounded-full py-3 pl-12 pr-6 text-white placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors hover:bg-white/10"
                />
              </div>
           </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="pb-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {filteredPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>
          
          {filteredPosts.length === 0 && (
            <div className="text-center py-20 text-muted-foreground">
               No articles found matching your search.
            </div>
          )}
        </div>
      </section>

    </main>
  );
}

function BlogCard({ post, index }: { post: BlogPost; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group bg-card/30 border border-white/10 rounded-3xl overflow-hidden hover:bg-card/50 transition-all duration-500 flex flex-col h-full cursor-pointer"
    >
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
        {/* Image Container */}
        <div className="relative h-64 md:h-80 overflow-hidden">
          <div className="absolute inset-0 bg-primary/20 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute top-4 right-4 z-20 bg-background/80 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border border-white/10">
             {post.readTime}
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col flex-1 space-y-4">
          <div className="space-y-2">
              <div className="flex items-center gap-2 text-primary text-xs font-bold tracking-widest uppercase">
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.author}</span>
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-bold leading-tight group-hover:text-primary transition-colors">
                  {post.title}
              </h3>
          </div>
          
          <p className="text-muted-foreground line-clamp-3 leading-relaxed flex-1">
              {post.excerpt}
          </p>

          <div className="pt-4 mt-auto">
               <Button 
                  className="w-full rounded-full group/btn pointer-events-none" 
                  variant="outline"
                  asChild={false}
               >
                  <span className="flex items-center justify-center w-full">
                    Read Article
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </span>
               </Button>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
