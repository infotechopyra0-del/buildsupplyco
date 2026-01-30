"use client";
export const dynamic = "force-dynamic";
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mockProductsExtended } from '@/entities/mockData';

import { Suspense } from 'react';

function ProductsPageInner() {
  const searchParams = useSearchParams();
  const categories = [
    'All',
    'Waterproofing',
    'Tile Adhesive',
    'Concrete Repair',
    'Flooring Solutions',
    'Decorative',
    'Texture Paint',
    'Admixtures',
    'Mortar'
  ];
  const selectedCategory = searchParams.get('category') || 'All';

  const filteredProducts = selectedCategory === 'All'
    ? mockProductsExtended
    : mockProductsExtended.filter(p =>
        typeof p.category === 'string' &&
        p.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );

  

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
          <h1
            className="font-heading text-6xl lg:text-8xl font-bold text-[#333333] mb-8"
            style={{ fontFamily: 'cormorantgaramond', fontSize: '3.75rem', lineHeight: '1.1', letterSpacing: '0.001em', fontWeight: 700 }}
          >
            Our Solutions
          </h1>
          <div className="w-12 h-1 bg-[#e4b725] mx-auto mb-6" />
          <p
            className="font-paragraph text-lg lg:text-xl text-[#333333]/80 leading-relaxed"
            style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.75', letterSpacing: '0.01em', fontWeight: 400 }}
          >
            Comprehensive range of premium construction materials engineered for excellence
          </p>
        </motion.div>
      </section>
      {/* Filter Section */}
      <section className="w-full bg-[#FFFFFF] py-8 border-y border-[#E0E0E0] sticky top-22 z-40">
        <div className="max-w-400 mx-auto px-8 lg:px-16">
          <div className="flex items-center gap-4 mb-4">
            <Filter className="h-5 w-5 text-[#e4b725]" />
            <span
              className="font-paragraph text-base text-[#333333] font-medium"
              style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: 500 }}
            >
              Filter by Category:
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Link
                key={category}
                href={category === 'All' ? '/solutions' : `/solutions?category=${encodeURIComponent(category)}`}
                className="no-underline"
              >
                <Button
                  variant={selectedCategory === category ? 'default' : 'outline'}
                  className={`font-paragraph text-sm transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#374151] text-[#FFFFFF] border border-[#e4b725] hover:bg-[#374151]/95'
                      : 'border-2 border-[#333333] text-[#33333353] hover:bg-[#e4b725]/5 hover:text-[#374151]'
                  }`}
                  style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}
                >
                  {category}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* Products Grid */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-400 mx-auto px-8 lg:px-16">
          <div className="min-h-150">
            {filteredProducts.length > 0 ? (
              <motion.div
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
              >
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={product._id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <Link href={`/solutions/${product._id}`}>
                      <div className="group bg-[#FFFFFF] border border-[#E0E0E0] rounded-sm overflow-hidden hover:border-[#e4b725] transition-all duration-500">
                        <div className="aspect-4/3 overflow-hidden">
                          {product.productImage && (typeof product.productImage === 'string') && (product.productImage.startsWith('http') || product.productImage.startsWith('/')) ? (
                            <Image
                              src={product.productImage}
                              alt={product.productName || 'Solution'}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              width={600}
                              height={450}
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                              <span className="text-gray-400">No image available</span>
                            </div>
                          )}
                        </div>
                        <div className="p-8">
                          <div className="inline-block px-3 py-1 bg-[#FFFFFF]/5 rounded-sm mb-4 border border-[#FFFFFF]/10">
                            <span
                              className="font-paragraph text-xs text-[#e4b725] font-medium"
                              style={{ fontFamily: 'sora', fontSize: '0.75rem', lineHeight: '1.25', letterSpacing: '0.02em', fontWeight: 500 }}
                            >
                              {product.category}
                            </span>
                          </div>
                          <h3
                            className="font-heading text-2xl font-semibold text-[#333333] mb-3 group-hover:text-[#e4b725] transition-colors duration-300"
                            style={{ fontFamily: 'cormorantgaramond', fontSize: '1.5rem', lineHeight: '1.875', letterSpacing: '0.01em', fontWeight: 600 }}
                          >
                            {product.productName}
                          </h3>
                          <p
                            className="font-paragraph text-sm text-[#333333]/70 leading-relaxed line-clamp-3"
                            style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400, color: '#333333b3' }}
                          >
                            {product.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-20">
                <p
                  className="font-paragraph text-lg text-[#333333]/60"
                  style={{ fontFamily: 'sora', fontSize: '1.25rem', lineHeight: '1.75', letterSpacing: '0.01em', fontWeight: 400, color: '#33333399' }}
                >
                  No products found in this category
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

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsPageInner />
    </Suspense>
  );
}
