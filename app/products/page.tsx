
"use client";
import { useSearchParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Filter } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mockProducts } from '@/entities/mockData';
import { Suspense } from 'react';



function ProductsPageInner() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categories = [
    'All',
    'Waterproofing',
    'Adhesive',
    'Concrete Repair',
    'Flooring',
    'Stamping',
    'Decorative',
    'Texture Paint',
    'Admixtures',
    'Mortar'
  ];
  const selectedCategory = searchParams.get('category') || 'All';

  const filteredProducts = selectedCategory === 'All'
    ? mockProducts
    : mockProducts.filter(p =>
        typeof p.category === 'string' &&
        p.category.toLowerCase().includes(selectedCategory.toLowerCase())
      );

  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      router.push('/products');
    } else {
      router.push(`/products?category=${encodeURIComponent(category)}`);
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
          <h1
            className="font-heading text-6xl lg:text-8xl font-bold text-[#333333] mb-8"
            style={{ fontFamily: 'cormorantgaramond', fontSize: '3.75rem', lineHeight: '1.1', letterSpacing: '0.001em', fontWeight: 700 }}
          >
            Our Products
          </h1>
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
            <Filter className="h-5 w-5 text-[#333333]" />
            <span
              className="font-paragraph text-base text-[#333333] font-medium"
              style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.01em', fontWeight: 500 }}
            >
              Filter by Category:
            </span>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                onClick={() => handleCategoryChange(category)}
                variant={selectedCategory === category ? 'default' : 'outline'}
                className={`font-paragraph text-sm transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-[#2C3E50] text-[#FFFFFF] hover:bg-[#2C3E50]/90'
                    : 'border-2 border-[#333333] text-[#33333353] hover:bg-[#333333] hover:text-[#FFFFFF]'
                }`}
                style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}
              >
                {category}
              </Button>
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
                    <Link href={`/products/${product._id}`}>
                      <div className="group bg-[#FFFFFF] border border-[#E0E0E0] rounded-sm overflow-hidden hover:border-[#B8A06A] transition-all duration-500">
                        <div className="aspect-4/3 overflow-hidden">
                          <Image
                            src={product.productImage || 'https://static.wixstatic.com/media/38f579_da36f9f3751f4e9a99e83ece12202288~mv2.png?originWidth=576&originHeight=448'}
                            alt={product.productName || 'Product'}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            width={600}
                            height={450}
                          />
                        </div>
                        <div className="p-8">
                          <div className="inline-block px-3 py-1 bg-[#F8F8F8] rounded-sm mb-4">
                            <span
                              className="font-paragraph text-xs text-[#B8A06A] font-medium"
                              style={{ fontFamily: 'sora', fontSize: '0.75rem', lineHeight: '1.25', letterSpacing: '0.02em', fontWeight: 500 }}
                            >
                              {product.category}
                            </span>
                          </div>
                          <h3
                            className="font-heading text-2xl font-semibold text-[#333333] mb-3 group-hover:text-[#B8A06A] transition-colors duration-300"
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
