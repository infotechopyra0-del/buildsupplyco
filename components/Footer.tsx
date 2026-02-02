import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#374151] text-[#FFFFFF]">
      <div className="max-w-400 mx-auto px-8 lg:px-16 py-16 lg:py-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16 mb-16">
          {/* Company Info */}
          <div>
            <h3 
              className="font-heading text-2xl font-bold mb-6"
              style={{ fontFamily: 'cormorantgaramond', fontSize: '1.5rem', lineHeight: '1.875', letterSpacing: '0.01em', fontWeight: 500 }}
            >
              CONCREED
            </h3>
            <p 
              className="font-paragraph text-sm text-[#FFFFFF]/80 leading-relaxed mb-6"
              style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}
            >
              Premium construction materials engineered for precision, durability, and uncompromising quality.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-[#e4b725] mt-0.5 shrink-0" strokeWidth={1.5} />
                <span 
                  className="font-paragraph text-sm text-[#FFFFFF]/80"
                  style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}
                >
                 N8/ 236-R-13 Ganesh dham Colony Sunderpur Newada Varanasi 221010
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-[#e4b725] shrink-0" strokeWidth={1.5} />
                <span 
                  className="font-paragraph text-sm text-[#FFFFFF]/80"
                  style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}
                >
                  +91 7011506187, +91 8953632255
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-[#e4b725] shrink-0" strokeWidth={1.5} />
                <span 
                  className="font-paragraph text-sm text-[#FFFFFF]/80"
                  style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}
                >
                sales@concreedsolution.com
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 
              className="font-heading text-lg font-semibold mb-6"
              style={{ fontFamily: 'cormorantgaramond', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/"
                  className="font-paragraph text-sm text-[#FFFFFF]/80 hover:text-[#e4b725] transition-colors duration-300"
                  style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  className="font-paragraph text-sm text-[#FFFFFF]/80 hover:text-[#e4b725] transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/solutions" 
                  className="font-paragraph text-sm text-[#FFFFFF]/80 hover:text-[#e4b725] transition-colors duration-300"
                >
                  Products
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 
              className="font-heading text-lg font-semibold mb-6"
              style={{ fontFamily: 'cormorantgaramond', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}
            >
              Products
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/solutions?category=Waterproofing" 
                  className="font-paragraph text-sm text-[#FFFFFF]/80 hover:text-[#e4b725] transition-colors duration-300"
                  style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}
                >
                  Waterproofing Solutions
                </Link>
              </li>
              <li>
                <Link 
                  href="/solutions?category=Adhesive" 
                  className="font-paragraph text-sm text-[#FFFFFF]/80 hover:text-[#e4b725] transition-colors duration-300"
                >
                  Tile & Stone Adhesive
                </Link>
              </li>
              <li>
                <Link 
                  href="/solutions?category=Concrete%20Repair" 
                  className="font-paragraph text-sm text-[#FFFFFF]/80 hover:text-[#e4b725] transition-colors duration-300"
                >
                  Concrete Repair Solutions
                </Link>
              </li>
              <li>
                <Link 
                  href="/solutions?category=Flooring" 
                  className="font-paragraph text-sm text-[#FFFFFF]/80 hover:text-[#e4b725] transition-colors duration-300"
                >
                  Flooring Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 
              className="font-heading text-lg font-semibold mb-6"
              style={{ fontFamily: 'cormorantgaramond', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}
            >
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/calculator" 
                  className="font-paragraph text-sm text-[#FFFFFF]/80 hover:text-[#e4b725] transition-colors duration-300"
                  style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}
                >
                  Material Calculator
                </Link>
              </li>
              <li>
                <Link 
                  href="/blogs" 
                  className="font-paragraph text-sm text-[#FFFFFF]/80 hover:text-[#e4b725] transition-colors duration-300"
                >
                  Blog Articles
                </Link>
              </li>
              <li>
                <Link 
                  href="/faqs" 
                  className="font-paragraph text-sm text-[#FFFFFF]/80 hover:text-[#e4b725] transition-colors duration-300"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#FFFFFF]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p 
              className="font-paragraph text-sm text-[#FFFFFF]/70"
              style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}
            >
              © {currentYear} CONCREED SOLUTIONS PRIVATE LIMITED. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link 
                href="/privacy" 
                className="font-paragraph text-sm text-[#FFFFFF]/70 hover:text-[#e4b725] transition-colors duration-300"
                style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="font-paragraph text-sm text-[#FFFFFF]/70 hover:text-[#e4b725] transition-colors duration-300"
                style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
