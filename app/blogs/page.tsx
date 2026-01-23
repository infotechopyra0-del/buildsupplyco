"use client";
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BlogPosts } from '@/entities';
import { format } from 'date-fns';

const mockBlogPosts: BlogPosts[] = [
  {
    _id: '1',
    title: 'The Ultimate Guide to Waterproofing Your Basement',
    content: 'Protecting your basement from water damage is crucial for the longevity and structural integrity of your property. This comprehensive guide explores various waterproofing solutions, from exterior membranes to interior sealants, and provides step-by-step application tips. Learn about the benefits of proper waterproofing, including preventing mold growth, preserving property value, and creating a healthier living environment. We\'ll cover common challenges and how our advanced waterproofing products can offer a durable and effective barrier against moisture.',
    publishDate: '2026-01-01',
    author: 'Dr. Elena Petrova',
    category:'Waterproofing Solutions',
    coverImage: '/images/TheUltimateGuidetoWaterproofingYourBasement.png',
    _createdDate: new Date('2026-01-01'),
    _updatedDate: new Date('2026-01-02'),
  },
  {
    _id: '2',
    title: 'Choosing the Right Tile Adhesive for Every Project',
    content: 'Selecting the correct tile adhesive is paramount for a successful and long-lasting tiling installation. With a myriad of options available, understanding the properties of different adhesives—such as cementitious, epoxy, and dispersion adhesives—is key. This article delves into factors like substrate type, tile material, environmental conditions, and traffic load to help you make an informed decision. Discover how our specialized tile adhesives ensure superior bond strength and durability for both residential and commercial applications.',
    publishDate: '2026-01-10',
    author: 'Mark Johnson',
    category:'Tile & Stone Adhesive and Grout',
    coverImage: '/images/ChoosingtheRightTileAdhesiveforEveryProject.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '3',
    title: '5 Common Mistakes in Concrete Repair and How to Avoid Them',
    content: 'Concrete repair can be a complex task, and even experienced professionals can make mistakes that compromise the repair\'s effectiveness and longevity. This article identifies five common pitfalls, including improper surface preparation, incorrect material selection, inadequate curing, and ignoring underlying issues. We provide practical advice and best practices to help you avoid these errors, ensuring your concrete repairs are durable, aesthetically pleasing, and structurally sound. Learn how our high-performance concrete repair solutions simplify the process.',
    publishDate: '2026-01-10',
    author: 'Sarah Chen',
    category:'Concrete Repair Solutions',
    coverImage: '/images/5CommonMistakesinConcreteRepairandHowtoAvoidThem.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '4',
    title: 'Innovations in Industrial Flooring: What\'s New?',
    content: 'The world of industrial flooring is constantly evolving, with new technologies and materials emerging to meet the demands of modern facilities. This post explores the latest innovations, from advanced epoxy and polyurethane systems to specialized coatings designed for extreme conditions. We discuss trends like enhanced chemical resistance, improved slip safety, rapid curing times, and sustainable options. Stay ahead of the curve and discover how these advancements can optimize performance, durability, and maintenance in your industrial spaces.',
    publishDate: '2026-01-10',
    author: 'David Lee',
    category:'Flooring Solutions',
    coverImage: '/images/InnovationsinIndustrialFlooringWhatsNew.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '5',
    title: 'Maximizing Efficiency with Material Coverage Calculators',
    content: 'In construction, accurate material estimation is key to controlling costs and minimizing waste. Our material coverage calculator is a powerful tool designed to streamline your project planning. This article explains how to leverage its features, from inputting project dimensions to selecting specific products and accounting for wastage. Learn how our calculator provides precise material quantities, helping you avoid over-ordering or shortages, saving time, and improving overall project efficiency. It\'s an indispensable resource for every contractor and DIY enthusiast.',
    publishDate: '2026-01-10',
    author: 'Company Blog',
    category:'Resources',
    coverImage: '/images/MaximizingEfficiencywithMaterialCoverageCalculators.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '6',
    title: 'Innovations in Industrial Flooring: What\'s New?',
    content: 'As the construction industry moves towards more sustainable practices, the role of eco-friendly admixtures becomes increasingly vital. This article explores how modern admixtures can significantly reduce the environmental impact of concrete and mortar. We discuss innovations that enhance material performance while minimizing energy consumption, reducing waste, and utilizing recycled content. Discover how our green admixture solutions contribute to LEED certification, improve durability, and support a healthier planet without compromising structural integrity.',
    publishDate: '2026-01-10',
    author: 'Dr. Anya Sharma',
    category:'Admixtures',
    coverImage: '/images/InnovationsinEcoFriendlyAdmixtures.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '7',
    title: 'Achieving Flawless Finishes with Decorative Surface Coatings',
    content: 'Decorative surface coatings offer an incredible way to transform ordinary surfaces into stunning architectural features. This guide provides tips and techniques for applying various decorative coatings, including textured paints, metallic finishes, and specialized plasters. Learn about proper surface preparation, application methods, and common challenges to achieve a flawless and long-lasting finish. Whether for interior accent walls or exterior facades, our range of decorative coatings provides endless possibilities for aesthetic enhancement and protection.',
    publishDate: '2026-01-10',
    author: 'Michael Brown',
    category:'Decorative Surface Finish',
    coverImage: '/images/AchievingFlawlessFinisheswithDecorativeSurfaceCoatings.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
  {
    _id: '8',
    title: 'Understanding Mortar Types: A Comprehensive Guide',
    content: 'Mortar is a fundamental component in masonry construction, but not all mortars are created equal. This comprehensive guide breaks down the different types of mortar—Type M, S, N, O, and K—explaining their unique properties, strength ratings, and ideal applications. Learn how to select the right mortar for various projects, from load-bearing walls to historical restoration, ensuring optimal bond strength, durability, and weather resistance. We also cover mixing ratios and best practices for application to achieve superior masonry work.',
    publishDate: '2026-01-10',
    author: 'Emily White',
    category:'Mortar',
    coverImage: '/images/UnderstandingMortarTypes.png',
    _createdDate: new Date('2026-01-10'),
    _updatedDate: new Date('2026-01-11'),
  },
];

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<BlogPosts[]>([]);
  const [hasNext, setHasNext] = useState(false);
  const [skip, setSkip] = useState(0);
  const limit = 9;

  // Directly set blogs on initial render and when loading more
  useState(() => {
    const start = skip;
    const end = skip + limit;
    const items = mockBlogPosts.slice(start, end);
    if (skip === 0) {
      setBlogs(items);
    } else {
      setBlogs(prev => [...prev, ...items]);
    }
    setHasNext(end < mockBlogPosts.length);
  });

  const loadMore = () => {
    if (hasNext) {
      setSkip(prev => prev + limit);
      const start = skip + limit;
      const end = start + limit;
      const items = mockBlogPosts.slice(start, end);
      setBlogs(prev => [...prev, ...items]);
      setHasNext(end < mockBlogPosts.length);
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
            {blogs.length > 0 ? (
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
                              src={blog.coverImage || '/images/blog-placeholder.jpg'}
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
                                    {blog.publishDate instanceof Date ? blog.publishDate.toISOString().slice(0, 10) : blog.publishDate}
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
                      className="bg-[#2C3E50] hover:bg-[#2C3E50]/90 text-[#FFFFFF] font-paragraph px-10 py-6 h-auto"
                    >
                      Load More Articles
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
