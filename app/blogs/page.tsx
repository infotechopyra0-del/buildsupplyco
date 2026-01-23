"use client";
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BlogPosts } from '@/entities';
import { mockBlogPosts } from '@/entities/mockData';
import { format } from 'date-fns';

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogPosts[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasNext, setHasNext] = useState(false);
  const [skip, setSkip] = useState(0);
  const limit = 9;

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      const start = skip;
      const end = skip + limit;
      const items = mockBlogPosts.slice(start, end);
      if (skip === 0) {
        setBlogs(items);
      } else {
        setBlogs(prev => [...prev, ...items]);
      }
      setHasNext(end < mockBlogPosts.length);
      setIsLoading(false);
    }, 500);
  }, [skip]);

  const loadMore = () => {
    if (hasNext) {
      setSkip(prev => prev + limit);
    }
  };

  const formatDate = (date: Date | string | undefined) => {
    if (!date) return '';
    try {
      return format(new Date(date), 'MMMM dd, yyyy');
    } catch {
      return '';
    }
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Header />
      {/* Hero Section */}
      <section className="w-full max-w-400 mx-auto px-8 lg:px-16 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-heading text-6xl lg:text-8xl font-bold text-[#333333] mb-8" style={{ fontFamily: 'cormorantgaramond', fontSize: '3.75rem', lineHeight: '1.1', letterSpacing: '0.001em', fontWeight: 700 }}>
            Industry Insights
          </h1>
          <p className="font-paragraph text-lg lg:text-xl text-[#333333]/80 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
            Expert guidance, technical tips, and construction industry updates
          </p>
        </motion.div>
      </section>

      {/* Blog Grid */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-400 mx-auto px-8 lg:px-16">
          <div className="min-h-150">
            {isLoading && skip === 0 ? null : blogs.length > 0 ? (
              <>
                <motion.div 
                  className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.6 }}
                >
                  {blogs.map((blog, index) => (
                    <motion.div
                      key={blog._id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Link href={`/blogs/${blog._id}`}>
                        <div className="group bg-[#FFFFFF] border border-[#E0E0E0] rounded-sm overflow-hidden hover:border-[#B8A06A] transition-all duration-500 h-full flex flex-col">
                          <div className="aspect-16/10 overflow-hidden">
                            <Image 
                              src={blog.coverImage || 'https://static.wixstatic.com/media/38f579_f834c504d09b43afa4740a2dd668cc14~mv2.png?originWidth=1152&originHeight=576'}
                              alt={blog.title || 'Blog post'}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              width={600}
                              height={300}
                            />
                          </div>
                          <div className="p-8 flex-1 flex flex-col">
                            <div className="flex items-center gap-4 mb-4 text-[#333333]/60">
                              {blog.publishDate && (
                                <div className="flex items-center gap-2">
                                  <Calendar className="h-4 w-4" strokeWidth={1.5} />
                                  <span className="font-paragraph text-xs">
                                    {formatDate(blog.publishDate)}
                                  </span>
                                </div>
                              )}
                              {blog.author && (
                                <div className="flex items-center gap-2">
                                  <User className="h-4 w-4" strokeWidth={1.5} />
                                  <span className="font-paragraph text-xs">
                                    {blog.author}
                                  </span>
                                </div>
                              )}
                            </div>
                            {blog.category && (
                              <div className="inline-block px-3 py-1 bg-[#F8F8F8] rounded-sm mb-4 self-start">
                                <span className="font-paragraph text-xs text-[#B8A06A] font-medium" style={{ fontFamily: 'sora', fontSize: '0.75rem', lineHeight: '1.25', letterSpacing: '0.02em', fontWeight: 500 }}>
                                  {blog.category}
                                </span>
                              </div>
                            )}
                            <h3 className="font-heading text-2xl font-semibold text-[#333333] mb-3 group-hover:text-[#B8A06A] transition-colors duration-300" style={{ fontFamily: 'cormorantgaramond', fontSize: '1.5rem', lineHeight: '2', letterSpacing: '0.005em', fontWeight: 600 }}>
                              {blog.title}
                            </h3>
                            <p className="font-paragraph text-sm text-[#333333]/70 leading-relaxed line-clamp-3 mb-6 flex-1" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}>
                              {blog.content}
                            </p>
                            <span className="inline-flex items-center font-paragraph text-sm text-[#B8A06A] group-hover:gap-2 transition-all duration-300" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}>
                              Read More
                              <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </motion.div>

                {hasNext && (
                  <div className="text-center mt-16">
                    <Button
                      onClick={loadMore}
                      disabled={isLoading}
                      className="bg-[#2C3E50] hover:bg-[#2C3E50]/90 text-[#FFFFFF] font-paragraph px-10 py-6 h-auto"
                    >
                      {isLoading ? 'Loading...' : 'Load More Articles'}
                    </Button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-20">
                <p className="font-paragraph text-lg text-[#333333]/60" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
                  No blog posts available yet
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
