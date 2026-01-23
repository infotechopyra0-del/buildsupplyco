"use client";
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Package, Ruler, Percent } from 'lucide-react';
import Image from 'next/image';
import { Spinner } from "@/components/ui/spinner"
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BaseCrudService } from '@/integrations';
import { Products } from '@/entities';

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const [product, setProduct] = useState<Products | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (id) {
      loadProduct();
    }
  }, [id]);

  const loadProduct = async () => {
    setIsLoading(true);
    const data = await BaseCrudService.getById<Products>('products', id!);
    setProduct(data);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="w-full max-w-400 mx-auto px-8 lg:px-16 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <Link href="/products">
          <Button
            variant="outline"
            className="mb-12 border-2 border-dark-grey text-dark-grey hover:bg-dark-grey hover:text-primary-foreground font-paragraph transition-all duration-300"
            style={{ background: '#F8F8F8', color: '#333333', borderColor: '#333333' }}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Products
          </Button>
        </Link>

        <div className="min-h-150">
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <Spinner />
            </div>
          ) : !product ? (
            <div className="text-center py-20">
              <h2
                className="font-heading text-3xl font-bold mb-4"
                style={{ fontFamily: 'cormorantgaramond', fontSize: '1.875rem', lineHeight: '2', letterSpacing: '0.005em', fontWeight: 700, color: '#E74C3C' }}
              >
                Product Not Found
              </h2>
              <p
                className="font-paragraph text-base mb-8"
                style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400, color: '#33333399' }}
              >
                The product you're looking for doesn't exist.
              </p>
              <Link href="/products">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  View All Products
                </Button>
              </Link>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="grid lg:grid-cols-2 gap-16 mb-16">
                {/* Product Image */}
                <div className="aspect-square rounded-sm overflow-hidden bg-background border border-light-grey">
                  <Image
                    src={product.productImage || 'https://static.wixstatic.com/media/38f579_7291dd7f2f304aceb28589904d980083~mv2.png?originWidth=768&originHeight=768'}
                    alt={product.productName || 'Product'}
                    className="w-full h-full object-cover"
                    width={800}
                    height={800}
                  />
                </div>

                {/* Product Info */}
                <div>
                  <div className="inline-block px-4 py-2 bg-light-grey border border-light-grey rounded-sm mb-6">
                    <span
                      className="font-paragraph text-sm font-medium"
                      style={{ color: '#B8A06A', fontFamily: 'sora', fontWeight: 500 }}
                    >
                      {product.category}
                    </span>
                  </div>

                  <h1
                    className="font-heading text-5xl lg:text-6xl font-bold mb-6 flex items-center gap-4"
                    style={{ fontFamily: 'cormorantgaramond', fontSize: '3rem', lineHeight: '1.1', letterSpacing: '0.002em', fontWeight: 700, color: '#2C3E50' }}
                  >
                    {product.productName}
                    {product.isFeatured && (
                      <span className="ml-2 px-3 py-1 bg-[#B8A06A] text-white text-xs font-semibold rounded-full">Featured</span>
                    )}
                  </h1>

                  <p
                    className="font-paragraph text-lg leading-relaxed mb-10"
                    style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400, color: '#333333' }}
                  >
                    {product.description}
                  </p>

                  {/* Technical Specs */}
                  <div className="bg-background border border-light-grey rounded-sm p-8 mb-10">
                    <h3
                      className="font-heading text-2xl font-semibold mb-6"
                      style={{ fontFamily: 'cormorantgaramond', fontSize: '1.5rem', lineHeight: '1.875', letterSpacing: '0.01em', fontWeight: 600, color: '#2C3E50' }}
                    >
                      Technical Specifications
                    </h3>
                    <div className="space-y-4">
                      {product.coverageRate && (
                        <div className="flex items-start gap-4">
                          <Ruler className="h-5 w-5 text-accent-gold mt-1 shrink-0" strokeWidth={1.5} />
                          <div>
                            <p
                              className="font-paragraph text-sm mb-1"
                              style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400, color: '#33333399' }}
                            >
                              Coverage Rate
                            </p>
                            <p
                              className="font-paragraph text-base font-medium"
                              style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 500, color: '#333333' }}
                            >
                              {product.coverageRate} m²/kg
                            </p>
                          </div>
                        </div>
                      )}
                      {product.wastagePercentage !== undefined && (
                        <div className="flex items-start gap-4">
                          <Percent className="h-5 w-5 text-accent-gold mt-1 shrink-0" strokeWidth={1.5} />
                          <div>
                            <p
                              className="font-paragraph text-sm mb-1"
                              style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400, color: '#33333399' }}
                            >
                              Wastage Factor
                            </p>
                            <p
                              className="font-paragraph text-base font-medium"
                              style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 500, color: '#333333' }}
                            >
                              {product.wastagePercentage}%
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  <Link href="/calculator">
                    <Button
                      size="lg"
                      className="w-full bg-secondary hover:bg-secondary/90 text-primary-foreground font-paragraph text-base px-8 py-6 h-auto transition-all duration-300"
                      style={{ background: '#B8A06A', color: '#FFFFFF' }}
                    >
                      <Package className="mr-2 h-5 w-5" />
                      Calculate Material Requirements
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Additional Details */}
              {product.specifications && (
                <div className="bg-background border border-light-grey rounded-sm p-10 lg:p-12">
                  <h2
                    className="font-heading text-3xl font-bold mb-6"
                    style={{ fontFamily: 'cormorantgaramond', fontSize: '1.875rem', lineHeight: '2', letterSpacing: '0.005em', fontWeight: 700, color: '#2C3E50' }}
                  >
                    Detailed Specifications
                  </h2>
                  <div
                    className="font-paragraph text-base leading-relaxed whitespace-pre-line"
                    style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400, color: '#333333' }}
                  >
                    {product.specifications}
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
