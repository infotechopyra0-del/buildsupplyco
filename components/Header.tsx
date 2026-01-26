"use client";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  const productCategories = [
    { name: 'Waterproofing Solutions', path: '/products?category=Waterproofing' },
    { name: 'Tile & Stone Adhesive and Grout', path: '/products?category=Adhesive' },
    { name: 'Concrete Repair Solutions', path: '/products?category=Concrete%20Repair' },
    { name: 'Flooring Solutions', path: '/products?category=Flooring' },
    { name: 'Stamping Solutions', path: '/products?category=Stamping' },
    { name: 'Decorative Surface Finish', path: '/products?category=Decorative' },
    { name: 'Texture Paint Coatings', path: '/products?category=Texture%20Paint' },
    { name: 'Admixtures', path: '/products?category=Admixtures' },
    { name: 'Mortar', path: '/products?category=Mortar' }
  ];

  const resourceLinks = [
    { name: 'Calculator', path: '/calculator' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'FAQs', path: '/faqs' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#F8F8F8]/95 backdrop-blur-sm border-b border-[#E0E0E0]">
      <nav className="max-w-400 mx-auto px-8 lg:px-16 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex flex-col items-start leading-none">
              <span
                className="font-heading font-bold text-[28px] sm:text-[36px] md:text-[48px] text-[#e4b725]"
                style={{ fontFamily: 'cormorantgaramond', lineHeight: '1', letterSpacing: '0.005em', fontWeight: 700 }}
              >
                CONCREED
              </span>
              <span className="text-xs sm:text-sm tracking-widest text-[#6B6B6B] mt-1" style={{ fontFamily: 'sora' }}>BUILDING TOMORROW</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <Link 
              href="/" 
              className={`font-paragraph text-base transition-colors duration-300 ${
                isActive('/') ? 'text-[#2C3E50]' : 'text-[#333333] hover:text-[#e4b725]'
              }`}
              style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
            >
              Home
            </Link>            
            <Link 
              href="/about" 
              className={`font-paragraph text-base transition-colors duration-300 ${
                isActive('/about') ? 'text-[#2C3E50]' : 'text-[#333333] hover:text-[#e4b725]'
              }`}
              style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
            >
              About Us
            </Link>
            {/* Products Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setProductsOpen(true)}
              onMouseLeave={() => setProductsOpen(false)}
            >
              <button 
                className="font-paragraph text-base text-[#333333] hover:text-[#e4b725] transition-colors duration-300 flex items-center gap-1"
                style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
              >
                Products
                <ChevronDown className="h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {productsOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-[#FFFFFF] border border-[#E0E0E0] rounded-sm shadow-lg py-4"
                  >
                    {productCategories.map((category) => (
                      <Link
                        key={category.name}
                        href={category.path}
                        className="block px-6 py-3 font-paragraph text-sm text-[#333333] hover:bg-[#F8F8F8] hover:text-[#e4b725] transition-colors duration-200"
                        style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}
                      >
                        {category.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Resources Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setResourcesOpen(true)}
              onMouseLeave={() => setResourcesOpen(false)}
            >
              <button 
                className="font-paragraph text-base text-[#333333] hover:text-[#e4b725] transition-colors duration-300 flex items-center gap-1"
                style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
              >
                Resources
                <ChevronDown className="h-4 w-4" />
              </button>
              
              <AnimatePresence>
                {resourcesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-48 bg-[#FFFFFF] border border-[#E0E0E0] rounded-sm shadow-lg py-4"
                  >
                    {resourceLinks.map((link) => (
                      <Link
                        key={link.name}
                        href={link.path}
                        className="block px-6 py-3 font-paragraph text-sm text-[#333333] hover:bg-[#F8F8F8] hover:text-[#e4b725] transition-colors duration-200"
                        style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}
                      >
                        {link.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link 
              href="/contact" 
              className={`font-paragraph text-base transition-colors duration-300 ${
                isActive('/contact') ? 'text-[#2C3E50]' : 'text-[#333333] hover:text-[#e4b725]'
              }`}
              style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-[#333333]"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden mt-6 pb-6 border-t border-light-grey pt-6"
            >
              <div className="flex flex-col gap-6">
                <Link 
                  href="/" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-paragraph text-base text-[#333333]"
                  style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
                >
                  Home
                </Link>
                
                <Link 
                  href="/about" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-paragraph text-base text-[#333333]"
                  style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
                >
                  About Us
                </Link>

                <div>
                  <button 
                    onClick={() => setProductsOpen(!productsOpen)}
                    className="font-paragraph text-base text-[#333333] flex items-center gap-1 mb-3"
                    style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
                  >
                    Products
                    <ChevronDown className={`h-4 w-4 transition-transform ${productsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {productsOpen && (
                    <div className="pl-4 space-y-3">
                      {productCategories.map((category) => (
                        <Link
                          key={category.name}
                          href={category.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block font-paragraph text-sm text-[#333333]/80"
                          style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <div>
                  <button 
                    onClick={() => setResourcesOpen(!resourcesOpen)}
                    className="font-paragraph text-base text-[#333333] flex items-center gap-1 mb-3"
                    style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
                  >
                    Resources
                    <ChevronDown className={`h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {resourcesOpen && (
                    <div className="pl-4 space-y-3">
                      {resourceLinks.map((link) => (
                        <Link
                          key={link.name}
                          href={link.path}
                          onClick={() => setMobileMenuOpen(false)}
                          className="block font-paragraph text-sm text-[#333333]/80"
                          style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                <Link 
                  href="/contact" 
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-paragraph text-base text-[#333333]"
                  style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
                >
                  Contact Us
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
