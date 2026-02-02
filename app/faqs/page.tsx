"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { HelpCircle } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { mockFAQs } from '@/entities/mockData';

export default function FAQsPage() {
  const faqs = mockFAQs;

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
          <HelpCircle className="w-16 h-16 text-[#e4b725] mx-auto mb-8" strokeWidth={1.5} />
          <h1 className="font-heading text-6xl lg:text-8xl font-bold text-[#333333] mb-8" style={{ fontFamily: 'cormorantgaramond', fontSize: '3.75rem', lineHeight: '1.1', letterSpacing: '0.001em', fontWeight: 700 }}>
            Frequently Asked Questions
          </h1>
          <div className="w-12 h-1 bg-[#e4b725] mx-auto mb-6" />
          <p className="font-paragraph text-lg lg:text-xl text-[#333333]/80 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
            Find answers to common questions about our products and services
          </p>
        </motion.div>
      </section>

      {/* FAQs Section */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-8 lg:px-16">
          <div className="min-h-100">
            {faqs.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="space-y-4"
              >
                <Accordion type="single" collapsible className="space-y-4">
                  {faqs.map((faq) => (
                    <AccordionItem 
                      key={faq._id} 
                      value={faq._id}
                      className="bg-[#FFFFFF] border border-[#E0E0E0] rounded-sm px-8 py-2 hover:border-[#e4b725] transition-colors duration-300"
                    >
                      <AccordionTrigger className="font-paragraph text-lg text-[#333333] hover:text-[#e4b725] text-left" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="font-paragraph text-base text-[#333333]/80 leading-relaxed pt-4" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>
            ) : (
              <div className="text-center py-20">
                <p className="font-paragraph text-lg text-[#333333]/60" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
                  No FAQs available
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="w-full bg-[#374151] py-16 lg:py-24">
        <div className="max-w-4xl mx-auto px-8 lg:px-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl lg:text-5xl font-bold text-[#FFFFFF] mb-6" style={{ fontFamily: 'cormorantgaramond', fontSize: '2.25rem', lineHeight: '2.25', letterSpacing: '0.005em', fontWeight: 600 }}>
              Still Have Questions?
            </h2>
            <p className="font-paragraph text-lg text-[#FFFFFF]/90 mb-10" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
              Our team is here to help. Get in touch with us for personalized assistance.
            </p>
            <a href="/contact">
              <button className="bg-[#e4b725] hover:bg-[#e4b725]/90 text-[#374151] font-paragraph text-base px-10 py-6 rounded-sm transition-all duration-300">
                Contact Us
              </button>
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
