"use client";
import React, { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform} from 'framer-motion';
import { ArrowRight, Calculator, Shield, Layers, Droplets, ChevronRight, Ruler, Box, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image  from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Category {
  title: string;
  description: string;
  icon: React.ElementType;
  link: string;
  id: string;
}

const CATEGORIES: Category[] = [
  {
    id: 'waterproofing',
    title: 'Waterproofing Solutions',
    description: 'Advanced protection systems engineered for lasting durability in the harshest environments.',
    icon: Droplets,
    link: '/products?category=Waterproofing'
  },
  {
    id: 'adhesive',
    title: 'Tile & Stone Adhesive',
    description: 'Premium bonding solutions designed for superior installation and structural integrity.',
    icon: Layers,
    link: '/products?category=Adhesive'
  },
  {
    id: 'repair',
    title: 'Concrete Repair',
    description: 'Structural restoration systems with precision engineering for critical infrastructure.',
    icon: Shield,
    link: '/products?category=Concrete%20Repair'
  }
];

const FEATURES = [
  'Premium quality materials',
  'Technical support & guidance',
  'Sustainable manufacturing',
  'Industry-leading warranties'
];

const SectionDivider = () => (
  <div className="w-full flex justify-center items-center py-12 opacity-20">
    <div className="h-px w-full max-w-480 bg-[#333333]/30" />
  </div>
);

const Marquee = () => {
  return (
    <div className="w-full bg-[#333333] text-[#FFFFFF] py-6 overflow-hidden flex whitespace-nowrap border-y border-[#FFFFFF]/10">
      <motion.div 
        className="flex gap-16 items-center"
        animate={{ x: "-50%" }}
        transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
      >
        {[...Array(4)].map((_, i) => (
          <React.Fragment key={i}>
            <span className="text-sm font-paragraph tracking-[0.2em] uppercase opacity-80" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.2em', fontWeight: 400 }}>Precision Engineering</span>
            <span className="w-1 h-1 bg-accent-gold rounded-full" />
            <span className="text-sm font-paragraph tracking-[0.2em] uppercase opacity-80" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.2em', fontWeight: 400 }}>Industrial Durability</span>
            <span className="w-1 h-1 bg-accent-gold rounded-full" />
            <span className="text-sm font-paragraph tracking-[0.2em] uppercase opacity-80" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.2em', fontWeight: 400 }}>Global Standards</span>
            <span className="w-1 h-1 bg-accent-gold rounded-full" />
          </React.Fragment>
        ))}
      </motion.div>
    </div>
  );
};

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yHero = useTransform(heroScroll, [0, 1], ["0%", "30%"]);

  return (
    <div ref={containerRef} className="min-h-screen bg-[#F8F8F8] overflow-clip selection:bg-[#B8A06A] selection:text-[#FFFFFF]">
      <Header />
      <section ref={heroRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Background Parallax Layer */}
        <motion.div 
          style={{ y: yHero }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0" />
          <Image 
            src="/images/IndustrialArchitecture.png"
            alt="Industrial Architecture"
            className="w-full h-full object-cover"
            width={1920}
            height={1024}
          />
        </motion.div>

        {/* Content Layer */}
        <div className="relative z-20 w-full max-w-480 mx-auto px-6 lg:px-12 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="mb-6 flex items-center gap-4"
            >
              <div className="h-px w-12 bg-[#B8A06A]" />
              <span className="font-paragraph text-sm tracking-[0.2em] uppercase text-[#B8A06A] font-medium" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.2em', fontWeight: 500 }}>
                Est. Quality Standards
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading text-6xl md:text-8xl lg:text-9xl font-bold text-[#FFFFFF] leading-[0.9] tracking-tight mb-8"
              style={{ fontFamily: 'cormorantgaramond', fontSize: '3.75rem', lineHeight: '1.1', letterSpacing: '0.001em', fontWeight: 700 }}
            >
              Building <br />
              <span className="text-[#FFFFFF]">Excellence.</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="font-paragraph text-lg md:text-xl text-[#FFFFFF] max-w-2xl leading-relaxed mb-12 border-l-2 border-[#B8A06A]/30 pl-6"
              style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}
            >
              Premium construction materials engineered for precision, durability, and uncompromising quality. We provide the foundation for the world's most ambitious structures.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-6"
            >
              <Link href="/calculator">
                <Button 
                  size="lg"
                  className="bg-[#2C3E50] hover:bg-[#2C3E50]/90 text-[#FFFFFF] font-paragraph text-base px-10 py-7 h-auto rounded-none border border-[#2C3E50] transition-all duration-300 group"
                  style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
                >
                  <Calculator className="mr-3 h-5 w-5 text-[#B8A06A]" />
                  Launch Calculator
                  <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                </Button>
              </Link>
              <Link href="/products">
                <Button 
                  variant="outline"
                  size="lg"
                  className="bg-transparent border border-[#333333]/20 text-[#FFFFFF] hover:bg-[#333333] hover:text-[#FFFFFF] font-paragraph text-base px-10 py-7 h-auto rounded-none transition-all duration-300"
                  style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
                >
                  Explore Collection
                </Button>
              </Link>
            </motion.div>
          </div>

          {/* Hero Decorative Element */}
          <div className="hidden lg:block lg:col-span-4 relative h-full min-h-150">
             <motion.div 
               className="absolute top-20 right-0 w-full aspect-3/4 border border-[#333333]/10 p-4"
             >
                <div className="w-full h-full relative overflow-hidden bg-white backdrop-blur-sm">
                  <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-accent-gold to-transparent opacity-50" />
                  <div className="absolute bottom-0 left-0 w-full h-px bg-linear-to-r from-transparent via-accent-gold to-transparent opacity-50" />
                  <div className="p-8 flex flex-col justify-between h-full">
                    <div className="space-y-2">
                      <div className="w-8 h-8 border border-[#333333]/20 rounded-full flex items-center justify-center">
                        <div className="w-1 h-1 bg-accent-gold rounded-full" />
                      </div>
                      <p className="font-heading text-2xl text-black" style={{ fontFamily: 'cormorantgaramond', fontSize: '1.5rem', lineHeight: '1.875', letterSpacing: '0.01em', fontWeight: 500 }}>Precision</p>
                    </div>
                    <div className="space-y-6">
                      <div className="flex justify-between items-end border-b border-black pb-2">
                        <span className="font-paragraph text-xs uppercase tracking-wider text-black" style={{ fontFamily: 'sora', fontSize: '0.75rem', lineHeight: '1.25', letterSpacing: '0.02em', fontWeight: 400 }}>Coverage</span>
                        <span className="font-paragraph text-lg text-black" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>100%</span>
                      </div>
                      <div className="flex justify-between items-end border-b border-white/10 pb-2">
                        <span className="font-paragraph text-xs uppercase tracking-wider text-black" style={{ fontFamily: 'sora', fontSize: '0.75rem', lineHeight: '1.25', letterSpacing: '0.02em', fontWeight: 400 }}>Durability</span>
                        <span className="font-paragraph text-lg text-black" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>A+</span>
                      </div>
                      <div className="flex justify-between items-end border-b border-white/10 pb-2">
                        <span className="font-paragraph text-xs uppercase tracking-wider text-black" style={{ fontFamily: 'sora', fontSize: '0.75rem', lineHeight: '1.25', letterSpacing: '0.02em', fontWeight: 400 }}>Grade</span>
                        <span className="font-paragraph text-lg text-black" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>Industrial</span>
                      </div>
                    </div>
                  </div>
                </div>
             </motion.div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
        >
          <span className="font-paragraph text-xs uppercase tracking-[0.3em] text-[#333333]/40">Scroll</span>
          <div className="w-px h-16 bg-linear-to-b from-[#333333]/40 to-transparent" />
        </motion.div>
      </section>

      <Marquee />

      {/* --- PHILOSOPHY SECTION --- */}
      <section className="w-full py-32 bg-[#F8F8F8] relative">
        <div className="max-w-480 mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 relative">
              <div className="sticky top-32">
                <h2 className="font-heading text-4xl lg:text-5xl text-[#333333] mb-6" style={{ fontFamily: 'cormorantgaramond', fontSize: '2.25rem', lineHeight: '2.25', letterSpacing: '0.005em', fontWeight: 600 }}>
                  The Architecture <br /> of Quality
                </h2>
                <div className="w-12 h-1 bg-[#B8A06A] mb-8" />
                <p className="font-paragraph text-[#333333]/60 leading-relaxed mb-8" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                  We believe that the integrity of a structure is defined by the quality of its smallest components. Our philosophy is rooted in the relentless pursuit of material perfection.
                </p>
                <Link href="/about">
                  <Button variant="link" className="p-0 h-auto font-paragraph text-[#B8A06A] hover:text-[#B8A06A]/80 group">
                    Read Our Story <ChevronRight className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="lg:col-span-8 grid gap-12">
              <div className="aspect-video w-full overflow-hidden relative group">
                <Image 
                  src="https://static.wixstatic.com/media/38f579_7b4cba52b5334ed6b35ed7b3947a082c~mv2.png?originWidth=1152&originHeight=640"
                  alt="Laboratory Testing"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={1200}
                  height={640}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
              </div>
              <div className="grid md:grid-cols-2 gap-12">
                <div>
                  <h3 className="font-heading text-2xl text-[#333333] mb-4" style={{ fontFamily: 'cormorantgaramond', fontSize: '1.5rem', lineHeight: '1.875', letterSpacing: '0.01em', fontWeight: 500 }}>Innovation First</h3>
                  <p className="font-paragraph text-[#333333]/60 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                    Our labs are constantly pushing the boundaries of chemical engineering to create adhesives and coatings that defy traditional limitations.
                  </p>
                </div>
                <div>
                  <h3 className="font-heading text-2xl text-[#333333] mb-4" style={{ fontFamily: 'cormorantgaramond', fontSize: '1.5rem', lineHeight: '1.875', letterSpacing: '0.01em', fontWeight: 500 }}>Sustainable Future</h3>
                  <p className="font-paragraph text-[#333333]/60 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                    We are committed to reducing the carbon footprint of construction through eco-friendly manufacturing processes and durable materials.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* --- PRODUCT SHOWCASE (Horizontal Accordion / Grid) --- */}
      <section className="w-full py-32 bg-[#F8F8F8]">
        <div className="max-w-480 mx-auto px-6 lg:px-12 mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <span className="font-paragraph text-sm tracking-[0.2em] uppercase text-[#B8A06A] mb-4 block" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.2em', fontWeight: 400 }}>Our Collection</span>
            <h2 className="font-heading text-5xl lg:text-6xl text-[#333333]" style={{ fontFamily: 'cormorantgaramond', fontSize: '3rem', lineHeight: '1.1', letterSpacing: '0.002em', fontWeight: 700 }}>Material Solutions</h2>
          </div>
          <Link href="/products">
            <Button variant="outline" className="rounded-none border-[#333333]/20 hover:bg-[#333333] hover:text-[#FFFFFF] transition-all duration-300">
              View Full Catalog
            </Button>
          </Link>
        </div>

        <div className="max-w-480 mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-px bg-[#333333]/10 border border-[#333333]/10">
            {CATEGORIES.map((category, index) => (
              <Link href={category.link} key={category.id} className="group relative bg-[#FFFFFF] h-150 overflow-hidden block">
                {/* Hover Background Image Reveal */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-out z-0">
                  <Image 
                    src="https://static.wixstatic.com/media/38f579_4d9f50ad009c49b3835664b9b23ad78c~mv2.png?originWidth=576&originHeight=576"
                    alt={category.title}
                    className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000"
                    width={600}
                    height={576}
                  />
                  <div className="absolute inset-0 bg-[#2C3E50]/80 mix-blend-multiply" />
                </div>

                {/* Content */}
                <div className="relative z-10 h-full p-10 flex flex-col justify-between group-hover:text-[#FFFFFF] transition-colors duration-300">
                  <div>
                    <div className="w-12 h-12 mb-8 text-[#B8A06A]">
                      <category.icon strokeWidth={1} className="w-full h-full" />
                    </div>
                    <h3 className="font-heading text-3xl font-medium mb-4 group-hover:translate-x-2 transition-transform duration-500" style={{ fontFamily: 'cormorantgaramond', fontSize: '1.875rem', lineHeight: '2', letterSpacing: '0.005em', fontWeight: 600 }}>
                      {category.title}
                    </h3>
                    <div className="w-12 h-px bg-[#333333]/20 group-hover:bg-[#B8A06A] mb-6 transition-colors duration-300" />
                    <p className="font-paragraph text-[#333333]/60 group-hover:text-[#FFFFFF]/80 leading-relaxed max-w-xs transition-colors duration-300" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                      {category.description}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                    <span className="font-paragraph text-sm uppercase tracking-widest" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}>Explore</span>
                    <ArrowRight className="w-5 h-5 text-[#B8A06A]" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* --- CALCULATOR FEATURE (Dark Theme) --- */}
      <section className="w-full bg-[#2C3E50] text-[#FFFFFF] py-32 overflow-hidden relative">
        {/* Abstract Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
           <div className="absolute top-0 left-0 w-full h-full bg-[linear-linear(to_right,#80808012_1px,transparent_1px),linear-linear(to_bottom,#80808012_1px,transparent_1px)] bg-size:[24px_24px]"></div>
        </div>

        <div className="max-w-480 mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            
            {/* Left Content */}
            <div className="order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <Calculator className="w-6 h-6 text-[#B8A06A]" />
                  <span className="font-paragraph text-sm tracking-[0.2em] uppercase text-[#B8A06A]">Precision Tool</span>
                </div>
                
                <h2 className="font-heading text-5xl lg:text-7xl font-bold mb-8 leading-none" style={{ fontFamily: 'cormorantgaramond', fontSize: '3rem', lineHeight: '1.1', letterSpacing: '0.002em', fontWeight: 700 }}>
                  Calculate with <br />
                  <span className="text-[#B8A06A]">Confidence.</span>
                </h2>
                
                <p className="font-paragraph text-lg text-[#FFFFFF]/70 mb-12 max-w-xl leading-relaxed" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
                  Eliminate guesswork from your projects. Our advanced formula-based calculator provides exact material requirements, coverage rates, and wastage estimates instantly.
                </p>

                <div className="space-y-6 mb-12">
                  {[
                    { title: 'Dynamic Formulas', desc: 'Product-specific logic applied automatically.' },
                    { title: 'Wastage Control', desc: 'Adjustable percentages for precise planning.' },
                    { title: 'Instant Output', desc: 'Get total area and required units in seconds.' }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      className="flex gap-4 items-start"
                    >
                      <div className="mt-1 w-5 h-5 rounded-full border border-[#B8A06A]/50 flex items-center justify-center shrink-0">
                        <div className="w-2 h-2 bg-[#B8A06A] rounded-full" />
                      </div>
                      <div>
                        <h4 className="font-heading text-xl text-[#FFFFFF] mb-1" style={{ fontFamily: 'cormorantgaramond', fontSize: '1.25rem', lineHeight: '1.75', letterSpacing: '0.01em', fontWeight: 500 }}>{item.title}</h4>
                        <p className="font-paragraph text-sm text-[#FFFFFF]/50" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}>{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <Link href="/calculator">
                  <Button 
                    size="lg"
                    className="bg-[#B8A06A] hover:bg-[#B8A06A]/90 text-[#2C3E50] font-paragraph text-base px-12 py-8 h-auto rounded-none transition-all duration-300"
                  >
                    Start Calculating
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right Visual - Abstract UI Representation */}
            <div className="order-1 lg:order-2 relative h-150 flex items-center justify-center">
              <div className="relative w-full max-w-md aspect-3/4 bg-[#FFFFFF]/5 backdrop-blur-md border border-[#FFFFFF]/10 rounded-sm p-8 shadow-2xl">
                {/* Decorative UI Elements */}
                <div className="absolute top-0 left-0 w-full h-1 bg-[#B8A06A]/50" />
                
                <div className="space-y-8">
                  <div className="flex justify-between items-center border-b border-[#FFFFFF]/10 pb-4">
                    <div className="h-4 w-24 bg-[#FFFFFF]/20 rounded-sm" />
                    <div className="h-8 w-8 bg-[#B8A06A]/20 rounded-full" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="h-2 w-12 bg-[#FFFFFF]/10 rounded-sm" />
                    <div className="h-12 w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-sm" />
                  </div>
                  
                  <div className="space-y-4">
                    <div className="h-2 w-12 bg-[#FFFFFF]/10 rounded-sm" />
                    <div className="h-12 w-full bg-[#FFFFFF]/5 border border-[#FFFFFF]/10 rounded-sm" />
                  </div>

                  <div className="pt-8 border-t border-[#FFFFFF]/10">
                    <div className="flex justify-between items-end mb-2">
                      <div className="h-3 w-20 bg-[#FFFFFF]/20 rounded-sm" />
                      <div className="h-8 w-32 bg-[#B8A06A] rounded-sm animate-pulse" />
                    </div>
                    <div className="h-2 w-full bg-[#FFFFFF]/5 rounded-full overflow-hidden mt-4">
                      <motion.div 
                        className="h-full bg-[#B8A06A]"
                        initial={{ width: "0%" }}
                        whileInView={{ width: "75%" }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                      />
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -right-12 top-1/4 bg-[#333333] border border-[#FFFFFF]/10 p-4 rounded-sm shadow-xl"
                >
                  <div className="flex items-center gap-3">
                      <Box className="w-5 h-5 text-[#B8A06A]" />
                    <div>
                      <div className="text-xs text-[#FFFFFF]/50 uppercase tracking-wider">Material</div>
                      <div className="text-lg font-heading text-[#FFFFFF]">240 kg</div>
                    </div>
                  </div>
                </motion.div>

                <motion.div 
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -left-8 bottom-1/4 bg-[#FFFFFF] text-[#2C3E50] p-4 rounded-sm shadow-xl"
                >
                  <div className="flex items-center gap-3">
                      <Ruler className="w-5 h-5 text-[#2C3E50]" />
                    <div>
                      <div className="text-xs text-[#2C3E50]/50 uppercase tracking-wider">Area</div>
                      <div className="text-lg font-heading text-[#2C3E50]">125 m²</div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- WHY CHOOSE US (Vertical Rules Layout) --- */}
      <section className="w-full py-32 bg-[#F8F8F8]">
        <div className="max-w-480 mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Header Column */}
            <div className="lg:col-span-4 pr-8">
              <h2 className="font-heading text-5xl text-[#333333] mb-8" style={{ fontFamily: 'cormorantgaramond', fontSize: '3rem', lineHeight: '1.1', letterSpacing: '0.002em', fontWeight: 700 }}>The Standard of Industry</h2>
              <p className="font-paragraph text-[#333333]/60 leading-relaxed mb-12" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                We don't just supply materials; we provide the assurance that your project will stand the test of time.
              </p>
              <Link href="/about">
                <Button variant="outline" className="rounded-none border-[#333333] text-[#333333] hover:bg-[#333333] hover:text-[#FFFFFF] transition-all duration-300">
                  Company Profile
                </Button>
              </Link>
            </div>

            {/* Features Columns with Vertical Dividers */}
            <div className="lg:col-span-8 grid md:grid-cols-2 gap-0 border-t border-[#333333]/10 md:border-t-0">
              {FEATURES.map((feature, index) => (
                <div 
                  key={index} 
                  className="group border-b border-[#333333]/10 md:border-l md:border-b-0 p-8 lg:p-12 hover:bg-[#F8F8F8] transition-colors duration-300"
                >
                  <div className="w-10 h-10 rounded-full bg-[#E0E0E0]/30 flex items-center justify-center mb-6 group-hover:bg-[#B8A06A]/20 transition-colors duration-300">
                    <CheckCircle2 className="w-5 h-5 text-[#333333] group-hover:text-[#B8A06A] transition-colors duration-300" />
                  </div>
                  <h3 className="font-heading text-2xl text-[#333333] mb-3" style={{ fontFamily: 'cormorantgaramond', fontSize: '1.5rem', lineHeight: '1.875', letterSpacing: '0.01em', fontWeight: 500 }}>{feature}</h3>
                  <p className="font-paragraph text-sm text-[#333333]/50" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}>
                    Rigorous testing and quality control ensure consistent performance across every batch.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- FINAL CTA --- */}
      <section className="w-full py-24 bg-[#F8F8F8] border-t border-[#333333]/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-[#333333] mb-8" style={{ fontFamily: 'cormorantgaramond', fontSize: '2.25rem', lineHeight: '2.25', letterSpacing: '0.005em', fontWeight: 600 }}>
            Ready to build with precision?
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact">
              <Button size="lg" className="bg-[#333333] text-[#FFFFFF] hover:bg-[#333333]/90 rounded-none px-10 py-6 h-auto">
                Contact Sales
              </Button>
            </Link>
            <Link href="/calculator">
              <Button variant="outline" size="lg" className="border-[#333333]/20 text-[#333333] hover:bg-[#333333]/5 rounded-none px-10 py-6 h-auto">
                Use Calculator
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}