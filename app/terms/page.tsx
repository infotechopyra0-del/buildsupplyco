"use client";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { Shield, FileText, Scale, AlertCircle } from 'lucide-react';

export default function TermsOfServicePage() {
  const sections = [
    {
      icon: FileText,
      title: '1. Agreement to Terms',
      content: `By accessing and using BuildPro's website and services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service. We reserve the right to modify these terms at any time, and such modifications shall be effective immediately upon posting. Your continued use of our services following any changes indicates your acceptance of the new terms.`
    },
    {
      icon: Shield,
      title: '2. Use of Services',
      content: `BuildPro grants you a limited, non-exclusive, non-transferable license to access and use our services for lawful purposes only. You agree not to use our services to transmit any unlawful, harassing, defamatory, abusive, threatening, harmful, vulgar, obscene, or otherwise objectionable material. You may not use our services in any manner that could damage, disable, overburden, or impair our servers or networks.`
    },
    {
      icon: Scale,
      title: '3. Product Information',
      content: `We strive to provide accurate product descriptions, specifications, and pricing information. However, we do not warrant that product descriptions, pricing, or other content is accurate, complete, reliable, current, or error-free. All product specifications are subject to change without notice. Prices are subject to change and may vary based on location, quantity, and market conditions.`
    },
    {
      icon: AlertCircle,
      title: '4. Orders and Payment',
      content: `All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason, including but not limited to product availability, errors in pricing or product information, or suspected fraudulent activity. Payment terms are net 30 days for approved commercial accounts. All prices are in USD unless otherwise specified.`
    }
  ];

  const additionalTerms = [
    {
      title: '5. Intellectual Property',
      content: 'All content on this website, including but not limited to text, graphics, logos, images, and software, is the property of BuildPro and is protected by copyright, trademark, and other intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without express written permission.'
    },
    {
      title: '6. Limitation of Liability',
      content: 'BuildPro shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use our services or products. Our total liability shall not exceed the amount paid by you for the specific product or service giving rise to the claim.'
    },
    {
      title: '7. Warranty and Returns',
      content: 'We warrant that our products are free from defects in materials and workmanship under normal use for a period specified in the product documentation. This warranty does not cover damage resulting from accident, misuse, or normal wear and tear. Return policies vary by product type and are subject to our return authorization procedures.'
    },
    {
      title: '8. Privacy and Data Protection',
      content: 'Your privacy is important to us. We collect and process personal information in accordance with our Privacy Policy. By using our services, you consent to the collection and use of information as described in our Privacy Policy. We implement appropriate security measures to protect your personal data.'
    },
    {
      title: '9. Governing Law',
      content: 'These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which BuildPro operates, without regard to its conflict of law provisions. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts in that jurisdiction.'
    },
    {
      title: '10. Contact Information',
      content: 'If you have any questions about these Terms of Service, please contact us at legal@buildpro.com or through our customer service department. We are committed to addressing your concerns and resolving any disputes in a fair and timely manner.'
    }
  ];

  return (
    <>
    <Header  />
    <div className="min-h-screen bg-[#F8F8F8]">
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-8 lg:px-16 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 
            className="text-6xl lg:text-8xl font-bold text-[#333333] mb-8" 
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3.75rem', lineHeight: '1.1', letterSpacing: '0.001em', fontWeight: 700 }}
          >
            Terms of Service
          </h1>
          <div className="w-12 h-1 bg-[#e4b725] mx-auto mb-6" />
          <p 
            className="text-lg lg:text-xl text-[#333333]/80 leading-relaxed mb-6" 
            style={{ fontFamily: 'Sora, sans-serif', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}
          >
            Please read these terms carefully before using BuildPro's services and products.
          </p>
          <p 
            className="text-base text-[#333333]/60" 
            style={{ fontFamily: 'Sora, sans-serif', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
          >
            Last Updated: January 23, 2026
          </p>
        </motion.div>
      </section>

      {/* Main Sections with Icons */}
      <section className="w-full bg-[#FFFFFF] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-2 gap-8">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#FFFFFF] p-8 rounded-sm border border-[#E0E0E0]"
              >
                <section.icon className="w-10 h-10 text-[#e4b725] mb-6" strokeWidth={1.5} />
                <h2 
                  className="text-2xl font-semibold text-[#333333] mb-4" 
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', lineHeight: '2', letterSpacing: '0.005em', fontWeight: 600 }}
                >
                  {section.title}
                </h2>
                <p 
                  className="text-base text-[#333333]/80 leading-relaxed" 
                  style={{ fontFamily: 'Sora, sans-serif', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
                >
                  {section.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Terms */}
      <section className="w-full bg-[#F8F8F8] py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 
              className="text-5xl lg:text-6xl font-bold text-[#333333] mb-6" 
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', lineHeight: '1.1', letterSpacing: '0.001em', fontWeight: 700 }}
            >
              Additional Terms
            </h2>
          </motion.div>

          <div className="space-y-12">
            {additionalTerms.map((term, index) => (
              <motion.div
                key={term.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-[#FFFFFF] p-8 rounded-sm border border-[#E0E0E0]"
              >
                <h3 
                  className="text-2xl font-semibold text-[#333333] mb-4" 
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', lineHeight: '2', letterSpacing: '0.005em', fontWeight: 600 }}
                >
                  {term.title}
                </h3>
                <p 
                  className="text-base text-[#333333]/80 leading-relaxed" 
                  style={{ fontFamily: 'Sora, sans-serif', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
                >
                  {term.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
    </>
    
  );
}