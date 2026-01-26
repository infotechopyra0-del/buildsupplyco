"use client";
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Package, Ruler, Percent, X } from 'lucide-react';
import Image from 'next/image';
import { Spinner } from "@/components/ui/spinner"
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mockProducts } from '@/entities/mockData';

export default function ProductPage() {
  const params = useParams();
  const id = params?.id as string;
  const product = mockProducts.find((p) => p._id === id) || null;
  
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '' });
  const [errors, setErrors] = useState({ name: '', phone: '' });

  const handleCatalogueClick = () => {
    setIsDialogOpen(true);
    setFormData({ name: '', phone: '' });
    setErrors({ name: '', phone: '' });
  };

  const validateForm = () => {
    const newErrors = { name: '', phone: '' };
    let isValid = true;

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone.trim())) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleDownload = () => {
    if (!validateForm()) {
      return;
    }
    const message = `New Catalogue Download Request:\nName: ${formData.name}\nPhone: ${formData.phone}\nProduct: ${product?.productName}`;
    const whatsappUrl = `https://wa.me/917011506187?text=${encodeURIComponent(message)}`
    if (product?.catalogue) {
      const link = document.createElement('a');
      link.href = `/catalogue/${product.catalogue}`;
      link.download = product.catalogue;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
    setIsDialogOpen(false);
    setFormData({ name: '', phone: '' });
    setErrors({ name: '', phone: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="w-full max-w-400 mx-auto px-8 lg:px-16 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <Link href="/solutions">
          <Button
            variant="outline"
            className="mb-12 border-2 border-[#e4b725] text-[#374151] bg-transparent hover:bg-[#e4b725]/5 hover:text-[#374151] font-paragraph transition-all duration-300"
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Solutions
          </Button>
        </Link>

        <div className="min-h-150">
          {!product ? (
            <div className="text-center py-20">
              <h2
                className="font-heading text-3xl font-bold mb-4"
                style={{ fontFamily: 'cormorantgaramond', fontSize: '1.875rem', lineHeight: '2', letterSpacing: '0.005em', fontWeight: 700, color: '#E74C3C' }}
              >
                Solutions Not Found
              </h2>
              <p
                className="font-paragraph text-base mb-8"
                style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400, color: '#33333399' }}
              >
                The solution you're looking for doesn't exist.
              </p>
              <Link href="/solutions">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  View All Solutions
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
                {/* Solution Image */}
                <div className="aspect-square rounded-sm overflow-hidden bg-[#FFFFFF] border border-[#E0E0E0]">
                  <Image
                    src={product.productImage || ""}
                    alt={product.productName || 'Solution'}
                    className="w-full h-full object-cover"
                    width={800}
                    height={800}
                  />
                </div>

                {/* Solution Info */}
                <div>
                  <div className="inline-block px-4 py-2 bg-[#FFFFFF]/5 rounded-sm mb-6 border border-[#E0E0E0]">
                    <span
                      className="font-paragraph text-sm font-medium"
                      style={{ color: '#e4b725', fontFamily: 'sora', fontWeight: 500 }}
                    >
                      {product.category}
                    </span>
                  </div>

                  <h1
                    className="font-heading text-5xl lg:text-6xl font-bold mb-6 flex items-center gap-4"
                    style={{ fontFamily: 'cormorantgaramond', fontSize: '3rem', lineHeight: '1.1', letterSpacing: '0.002em', fontWeight: 700, color: '#333333' }}
                  >
                    {product.productName}
                    {product.isFeatured && (
                      <span className="ml-2 px-3 py-1 bg-[#e4b725] text-white text-xs font-semibold rounded-full">Featured</span>
                    )}
                  </h1>
                  <div className="w-12 h-1 bg-[#e4b725] mb-6" />

                  <p
                    className="font-paragraph text-lg leading-relaxed mb-10"
                    style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400, color: '#333333' }}
                  >
                    {product.description}
                  </p>

                  {/* Technical Specs */}
                  <div className="bg-[#FFFFFF] border border-[#E0E0E0] rounded-sm p-8 mb-10">
                    <h3
                      className="font-heading text-2xl font-semibold mb-6"
                      style={{ fontFamily: 'cormorantgaramond', fontSize: '1.5rem', lineHeight: '1.875', letterSpacing: '0.01em', fontWeight: 600, color: '#374151' }}
                    >
                      Technical Specifications
                    </h3>
                    <div className="space-y-4">
                      {product.coverageRate && (
                        <div className="flex items-start gap-4">
                          <Ruler className="h-5 w-5 text-[#e4b725] mt-1 shrink-0" strokeWidth={1.5} />
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
                          <Percent className="h-5 w-5 text-[#e4b725] mt-1 shrink-0" strokeWidth={1.5} />
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
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link href="/calculator" className="block w-full sm:flex-1">
                      <Button
                        size="lg"
                        className="w-full bg-secondary hover:bg-secondary/90 text-primary-foreground font-paragraph text-base px-6 py-4 md:px-8 md:py-6 h-auto transition-all duration-300"
                        style={{ background: '#e4b725', color: '#FFFFFF' }}
                      >
                        <Package className="mr-2 h-5 w-5" />
                        Calculate Material Requirements
                      </Button>
                    </Link>

                    {product?.catalogue ? (
                      <div className="block w-full sm:flex-1">
                        <Button
                          size="lg"
                          variant="outline"
                          onClick={handleCatalogueClick}
                          className="w-full border-2 border-[#e4b725] text-[#374151] bg-transparent hover:bg-[#e4b725]/5 font-paragraph text-base px-6 py-4 md:px-8 md:py-6 h-auto transition-all duration-300"
                        >
                          Download Catalogue
                        </Button>
                      </div>
                    ) : (
                      <div className="block w-full sm:flex-1">
                        <Button
                          size="lg"
                          variant="outline"
                          disabled
                          className="w-full border-2 border-[#e4b725] text-[#374151] bg-transparent opacity-60 cursor-not-allowed font-paragraph text-base px-6 py-4 md:px-8 md:py-6 h-auto"
                        >
                          Catalogue Unavailable
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              {product.specifications && (
                <div className="bg-[#FFFFFF] border border-[#E0E0E0] rounded-sm p-10 lg:p-12">
                  <h2
                    className="font-heading text-3xl font-bold mb-6"
                    style={{ fontFamily: 'cormorantgaramond', fontSize: '1.875rem', lineHeight: '2', letterSpacing: '0.005em', fontWeight: 700, color: '#374151' }}
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

      {/* Catalogue Download Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md bg-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold" style={{ fontFamily: 'cormorantgaramond', color: '#333333' }}>
              Download Catalogue
            </DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <p className="text-sm text-[#333333]/60" style={{ fontFamily: 'sora' }}>
              Please provide your details to download the catalogue.
            </p>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm font-medium" style={{ fontFamily: 'sora', color: '#333333' }}>
                  Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className={`border-[#E0E0E0] focus:border-[#e4b725] ${errors.name ? 'border-red-500' : ''}`}
                  style={{ fontFamily: 'sora' }}
                />
                {errors.name && (
                  <p className="text-xs text-red-500" style={{ fontFamily: 'sora' }}>{errors.name}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium" style={{ fontFamily: 'sora', color: '#333333' }}>
                  Phone Number <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '') })}
                  maxLength={10}
                  className={`border-[#E0E0E0] focus:border-[#e4b725] ${errors.phone ? 'border-red-500' : ''}`}
                  style={{ fontFamily: 'sora' }}
                />
                {errors.phone && (
                  <p className="text-xs text-red-500" style={{ fontFamily: 'sora' }}>{errors.phone}</p>
                )}
              </div>
            </div>

            <Button
              onClick={handleDownload}
              className="w-full bg-[#e4b725] hover:bg-[#e4b725]/90 text-white font-medium py-6"
              style={{ fontFamily: 'sora' }}
            >
              Download Catalogue
            </Button>
          </div>
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}