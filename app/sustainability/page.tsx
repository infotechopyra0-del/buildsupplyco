"use client";
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Leaf, Droplets, Recycle, Wind, Sun, Factory, TreePine, Award, ArrowRight, ChevronRight, Target, TrendingDown, Lightbulb, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const SectionDivider = () => (
  <div className="w-full flex justify-center items-center py-12 opacity-20">
    <div className="h-px w-full max-w-7xl bg-[#333333]/30" />
  </div>
);

const initiatives = [
  {
    icon: Recycle,
    title: 'Circular Economy',
    description: 'We integrate recycled materials into our manufacturing process, reducing waste by 45% and creating a closed-loop production system.',
    stat: '45%',
    label: 'Waste Reduction'
  },
  {
    icon: Wind,
    title: 'Carbon Neutrality',
    description: 'Our facilities operate on 60% renewable energy, with a commitment to achieve carbon neutrality by 2030 through innovative green technologies.',
    stat: '60%',
    label: 'Renewable Energy'
  },
  {
    icon: Droplets,
    title: 'Water Conservation',
    description: 'Advanced filtration and recycling systems reduce water consumption by 35% while maintaining the highest quality standards in production.',
    stat: '35%',
    label: 'Water Saved'
  },
  {
    icon: TreePine,
    title: 'Green Chemistry',
    description: 'Low-VOC formulations and eco-friendly compounds minimize environmental impact without compromising on performance or durability.',
    stat: '92%',
    label: 'Low-VOC Products'
  }
];

const commitments = [
  { year: '2025', goal: 'Zero waste to landfill certification' },
  { year: '2027', goal: '75% renewable energy across all facilities' },
  { year: '2030', goal: 'Carbon neutral operations' },
  { year: '2035', goal: '100% sustainable packaging' }
];

const certifications = [
  { name: 'ISO 14001', description: 'Environmental Management' },
  { name: 'LEED Certified', description: 'Green Building Materials' },
  { name: 'Carbon Trust', description: 'Carbon Footprint Verified' },
  { name: 'FSC Certified', description: 'Responsible Sourcing' }
];

export default function SustainabilityPage() {
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const yHero = useTransform(heroScroll, [0, 1], ["0%", "30%"]);

  return (
    <>
    <Header />
    <div className="min-h-screen bg-[#F8F8F8] overflow-clip selection:bg-[#e4b725] selection:text-[#FFFFFF] mt-10">
      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ y: yHero }}
          className="absolute inset-0 z-0 bg-linear-to-br from-[#2C3E50] via-[#34495E] to-[#1A252F]"
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(228, 183, 37, 0.15) 1px, transparent 0)`,
              backgroundSize: '48px 48px'
            }} />
          </div>
        </motion.div>

        <div className="relative z-20 w-full max-w-7xl mx-auto px-6 lg:px-12 py-32">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-6 flex items-center gap-4"
          >
            <div className="h-px w-12 bg-[#e4b725]" />
            <span className="font-medium text-sm tracking-[0.2em] uppercase text-[#e4b725]" style={{ fontFamily: 'sora' }}>
              Building a Better Tomorrow
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#FFFFFF] leading-[0.9] tracking-tight mb-8 max-w-5xl"
            style={{ fontFamily: 'cormorantgaramond' }}
          >
            Sustainable <br />
            <span className="text-[#e4b725]">Innovation.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg md:text-xl text-[#FFFFFF]/80 max-w-2xl leading-relaxed mb-12 border-l-2 border-[#e4b725]/30 pl-6"
            style={{ fontFamily: 'sora' }}
          >
            Our commitment to environmental stewardship drives every decision we make. We're pioneering sustainable construction materials that protect our planet while delivering uncompromising quality.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-8 text-[#FFFFFF]"
          >
            <div className="flex flex-col">
              <span className="text-5xl font-bold text-[#e4b725] mb-2" style={{ fontFamily: 'cormorantgaramond' }}>45%</span>
              <span className="text-sm uppercase tracking-wider text-[#FFFFFF]/60" style={{ fontFamily: 'sora' }}>Waste Reduced</span>
            </div>
            <div className="flex flex-col">
              <span className="text-5xl font-bold text-[#e4b725] mb-2" style={{ fontFamily: 'cormorantgaramond' }}>60%</span>
              <span className="text-sm uppercase tracking-wider text-[#FFFFFF]/60" style={{ fontFamily: 'sora' }}>Renewable Energy</span>
            </div>
            <div className="flex flex-col">
              <span className="text-5xl font-bold text-[#e4b725] mb-2" style={{ fontFamily: 'cormorantgaramond' }}>2030</span>
              <span className="text-sm uppercase tracking-wider text-[#FFFFFF]/60" style={{ fontFamily: 'sora' }}>Carbon Neutral Target</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="w-full py-32 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Leaf className="w-6 h-6 text-[#e4b725]" />
                <span className="text-sm tracking-[0.2em] uppercase text-[#e4b725]" style={{ fontFamily: 'sora' }}>Our Mission</span>
              </div>
              <h2 className="text-5xl lg:text-6xl text-[#333333] mb-8" style={{ fontFamily: 'cormorantgaramond', fontWeight: 700 }}>
                Engineering for <br />the Environment
              </h2>
              <p className="text-[#333333]/60 leading-relaxed mb-6" style={{ fontFamily: 'sora' }}>
                We believe that superior construction materials shouldn't come at the expense of our planet. Our sustainability strategy is built on three core pillars: reducing environmental impact, innovating green technologies, and fostering a culture of responsibility.
              </p>
              <p className="text-[#333333]/60 leading-relaxed" style={{ fontFamily: 'sora' }}>
                From sourcing raw materials to final product delivery, every step in our supply chain is optimized for minimal environmental footprint. We're not just meeting industry standards—we're setting new ones.
              </p>
            </div>

            <div className="relative h-96">
              <div className="absolute rounded-sm" />
              <div className="absolute inset-4 border border-[#333333]/10 rounded-sm overflow-hidden">
                <img src="/images/engineeringfortheenvironment.png" alt="Engineering for the Environment" className="w-full h-full object-cover block" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Key Initiatives */}
      <section className="w-full py-32 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="mb-20">
            <span className="text-sm tracking-[0.2em] uppercase text-[#e4b725] mb-4 block" style={{ fontFamily: 'sora' }}>Key Initiatives</span>
            <h2 className="text-5xl lg:text-6xl text-[#333333]" style={{ fontFamily: 'cormorantgaramond', fontWeight: 700 }}>
              Driving Change
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-[#FFFFFF] border border-[#333333]/10 p-10 hover:border-[#e4b725]/50 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="w-14 h-14 bg-[#e4b725]/10 rounded-full flex items-center justify-center group-hover:bg-[#e4b725]/20 transition-colors">
                    <item.icon className="w-7 h-7 text-[#e4b725]" strokeWidth={1.5} />
                  </div>
                  <div className="text-right">
                    <div className="text-4xl font-bold text-[#e4b725] mb-1" style={{ fontFamily: 'cormorantgaramond' }}>{item.stat}</div>
                    <div className="text-xs uppercase tracking-wider text-[#333333]/50" style={{ fontFamily: 'sora' }}>{item.label}</div>
                  </div>
                </div>
                <h3 className="text-2xl text-[#333333] mb-4" style={{ fontFamily: 'cormorantgaramond', fontWeight: 600 }}>
                  {item.title}
                </h3>
                <p className="text-[#333333]/60 leading-relaxed" style={{ fontFamily: 'sora' }}>
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <section className="w-full py-32 bg-[#374151] text-[#FFFFFF]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-5">
              <div className="sticky top-32">
                <div className="flex items-center gap-3 mb-6">
                  <Target className="w-6 h-6 text-[#e4b725]" />
                  <span className="text-sm tracking-[0.2em] uppercase text-[#e4b725]" style={{ fontFamily: 'sora' }}>Roadmap</span>
                </div>
                <h2 className="text-5xl lg:text-6xl mb-8" style={{ fontFamily: 'cormorantgaramond', fontWeight: 700 }}>
                  Our Path to <br />Carbon Neutrality
                </h2>
                <p className="text-[#FFFFFF]/70 leading-relaxed" style={{ fontFamily: 'sora' }}>
                  We've established clear, measurable goals with strict timelines. Our commitment is backed by investment, innovation, and unwavering dedication to a sustainable future.
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-8">
              {commitments.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex gap-8 items-start group"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-[#e4b725]/20 rounded-full flex items-center justify-center border-2 border-[#e4b725] group-hover:bg-[#e4b725] transition-colors">
                      <span className="text-lg font-bold text-[#e4b725] group-hover:text-[#374151]" style={{ fontFamily: 'sora' }}>{item.year}</span>
                    </div>
                    {index < commitments.length - 1 && (
                      <div className="w-px h-24 bg-[#FFFFFF]/10 mt-4" />
                    )}
                  </div>
                  <div className="flex-1 pt-3">
                    <p className="text-xl text-[#FFFFFF] leading-relaxed" style={{ fontFamily: 'sora' }}>
                      {item.goal}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="w-full py-32 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Award className="w-6 h-6 text-[#e4b725]" />
              <span className="text-sm tracking-[0.2em] uppercase text-[#e4b725]" style={{ fontFamily: 'sora' }}>Recognition</span>
            </div>
            <h2 className="text-5xl lg:text-6xl text-[#333333] mb-6" style={{ fontFamily: 'cormorantgaramond', fontWeight: 700 }}>
              Certified Excellence
            </h2>
            <p className="text-[#333333]/60 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'sora' }}>
              Our sustainability efforts are validated by leading international certification bodies.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#FFFFFF] border border-[#333333]/10 p-8 text-center hover:border-[#e4b725]/50 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-[#e4b725]/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-[#e4b725]/20 transition-colors">
                  <Award className="w-8 h-8 text-[#e4b725]" />
                </div>
                <h3 className="text-xl text-[#333333] mb-2" style={{ fontFamily: 'cormorantgaramond', fontWeight: 600 }}>
                  {cert.name}
                </h3>
                <p className="text-sm text-[#333333]/50" style={{ fontFamily: 'sora' }}>
                  {cert.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Innovation Section */}
      <section className="w-full py-32 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 relative h-96">
              <div className="absolute inset-0 rounded-sm" />
              <div className="absolute inset-4 border border-[#333333]/10 rounded-sm overflow-hidden">
                <img src="/images/researchanddevelopment.png" alt="Research and Development" className="w-full h-full object-cover block" />
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="flex items-center gap-3 mb-6">
                <Lightbulb className="w-6 h-6 text-[#e4b725]" />
                <span className="text-sm tracking-[0.2em] uppercase text-[#e4b725]" style={{ fontFamily: 'sora' }}>Innovation</span>
              </div>
              <h2 className="text-5xl lg:text-6xl text-[#333333] mb-8" style={{ fontFamily: 'cormorantgaramond', fontWeight: 700 }}>
                Research & <br />Development
              </h2>
              <p className="text-[#333333]/60 leading-relaxed mb-6" style={{ fontFamily: 'sora' }}>
                Our R&D teams are constantly exploring new formulations, materials, and processes that reduce environmental impact. From bio-based polymers to carbon-capture concrete, we're investing in the future of sustainable construction.
              </p>
              <ul className="space-y-4">
                {['Bio-based adhesive compounds', 'Recycled aggregate integration', 'Low-carbon cement alternatives', 'Smart material systems'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#e4b725] rounded-full" />
                    <span className="text-[#333333]/80" style={{ fontFamily: 'sora' }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 bg-[#e4b725]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl text-[#333333] mb-8" style={{ fontFamily: 'cormorantgaramond', fontWeight: 600 }}>
            Join us in building a sustainable future
          </h2>
          <p className="text-[#333333]/80 mb-10 max-w-2xl mx-auto leading-relaxed" style={{ fontFamily: 'sora' }}>
            Partner with us to make your next project a benchmark for environmental responsibility.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="bg-[#333333] text-[#FFFFFF] hover:bg-[#333333]/90 px-10 py-6 transition-all duration-300 inline-flex items-center justify-center gap-2" style={{ fontFamily: 'sora' }}>
              Download Sustainability Report
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-[#333333]/20 text-[#333333] hover:bg-[#333333]/5 px-10 py-6 transition-all duration-300 inline-flex items-center justify-center gap-2" style={{ fontFamily: 'sora' }}>
              Contact Our Team
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
  );
}