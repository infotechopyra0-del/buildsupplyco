"use client";
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Home, Factory, Waves, Mountain, Shield, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const APPLICATIONS = [
  {
    id: 'residential',
    title: 'Residential Construction',
    icon: Home,
    description: 'Premium solutions for homes and living spaces',
    image: '/images/residentialconstruction.png',
    features: [
      'Interior & exterior waterproofing',
      'Tile adhesives for bathrooms & kitchens',
      'Concrete repair for foundations',
      'Weather-resistant coatings'
    ],
    useCases: [
      'New home construction',
      'Bathroom renovations',
      'Kitchen remodeling',
      'Basement waterproofing',
      'Balcony repairs'
    ]
  },
  {
    id: 'commercial',
    title: 'Commercial Projects',
    icon: Building2,
    description: 'Engineered for large-scale commercial applications',
    image: '/images/commercialprojects.png',
    features: [
      'High-traffic flooring solutions',
      'Façade protection systems',
      'Structural repair materials',
      'Fast-curing adhesives'
    ],
    useCases: [
      'Office buildings',
      'Shopping centers',
      'Hotels & hospitality',
      'Educational institutions',
      'Healthcare facilities'
    ]
  },
  {
    id: 'industrial',
    title: 'Industrial Facilities',
    icon: Factory,
    description: 'Heavy-duty materials for demanding environments',
    image: '/images/industrialfacilities.png',
    features: [
      'Chemical-resistant coatings',
      'Heavy-load flooring',
      'Industrial waterproofing',
      'Anti-corrosion systems'
    ],
    useCases: [
      'Manufacturing plants',
      'Warehouses',
      'Chemical processing facilities',
      'Power plants',
      'Food processing units'
    ]
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure',
    icon: Mountain,
    description: 'Critical infrastructure protection and restoration',
    image: '/images/infrastructure.png',
    features: [
      'Bridge deck waterproofing',
      'Tunnel lining systems',
      'Road repair solutions',
      'Seismic protection materials'
    ],
    useCases: [
      'Bridges & flyovers',
      'Tunnels & metros',
      'Highways & roads',
      'Parking structures',
      'Water treatment plants'
    ]
  },
  {
    id: 'marine',
    title: 'Marine & Coastal',
    icon: Waves,
    description: 'Superior protection against water and salt damage',
    image: '/images/marine&coastal.png',
    features: [
      'Marine-grade waterproofing',
      'Salt-resistant coatings',
      'Anti-fouling systems',
      'Underwater repair materials'
    ],
    useCases: [
      'Ports & harbors',
      'Coastal buildings',
      'Marine structures',
      'Swimming pools',
      'Water reservoirs'
    ]
  },
  {
    id: 'restoration',
    title: 'Restoration & Heritage',
    icon: Shield,
    description: 'Specialized materials for historical preservation',
    image: '/images/restoration.png',
    features: [
      'Breathable waterproofing',
      'Color-matched repair mortars',
      'Low-impact adhesives',
      'Heritage-grade coatings'
    ],
    useCases: [
      'Historical buildings',
      'Monument conservation',
      'Heritage sites',
      'Religious structures',
      'Cultural landmarks'
    ]
  }
];

interface ApplicationCardProps {
  application: typeof APPLICATIONS[0];
  index: number;
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({ application, index }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-white border border-[#333333]/10 overflow-hidden group hover:border-[#e4b725]/50 transition-colors duration-300"
    >
      {/* Header */}
      <div className="p-8 border-b border-[#333333]/10">
        <div className="flex items-start justify-between mb-4">
          <div className="w-14 h-14 bg-[#e4b725]/10 flex items-center justify-center">
            <application.icon className="w-7 h-7 text-[#e4b725]" strokeWidth={1.5} />
          </div>
          <div className="text-xs text-[#333333]/40 font-paragraph tracking-[0.2em] uppercase">
            0{index + 1}
          </div>
        </div>
          <img src={application.image} alt={application.title} className="w-full h-40 object-cover rounded-sm mb-4" />
          <h3 className="font-heading text-3xl text-[#333333] mb-3" style={{ fontFamily: 'cormorantgaramond', fontSize: '1.875rem', lineHeight: '2', letterSpacing: '0.005em', fontWeight: 600 }}>
            {application.title}
          </h3>
        <p className="font-paragraph text-[#333333]/60 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
          {application.description}
        </p>
      </div>

      {/* Key Features */}
      <div className="p-8 bg-[#F8F8F8]">
        <h4 className="font-paragraph text-sm text-[#333333] uppercase tracking-[0.2em] mb-4" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.2em', fontWeight: 500 }}>
          Key Features
        </h4>
        <div className="space-y-3">
          {application.features.map((feature: string, idx: number) => (
            <div key={idx} className="flex items-start gap-3">
              <CheckCircle2 className="w-4 h-4 text-[#e4b725] mt-1 shrink-0" />
              <span className="font-paragraph text-sm text-[#333333]/70" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}>
                {feature}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Expandable Use Cases */}
      <div className="border-t border-[#333333]/10">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full p-6 flex items-center justify-between hover:bg-[#F8F8F8] transition-colors duration-300"
        >
          <span className="font-paragraph text-sm uppercase tracking-[0.2em] text-[#333333]" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.2em', fontWeight: 500 }}>
            Typical Use Cases
          </span>
          <ChevronDown className={`w-5 h-5 text-[#333333] transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
        </button>
        
        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <div className="px-8 pb-8 pt-4 bg-[#F8F8F8] border-t border-[#333333]/10">
            <div className="grid grid-cols-2 gap-3">
              {application.useCases.map((useCase: string, idx: number) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-1 h-1 bg-[#e4b725] rounded-full" />
                  <span className="font-paragraph text-sm text-[#333333]/60" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}>
                    {useCase}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default function ApplicationsPage() {
  return (
    <>
    <Header />
    <div className="min-h-screen bg-[#F8F8F8] mt-20">
      {/* Hero Section */}
      <section className="relative w-full min-h-[60vh] flex items-center justify-center overflow-hidden pt-32 pb-20 bg-[#333333]">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(to right, #808080 1px, transparent 1px), linear-gradient(to bottom, #808080 1px, transparent 1px)', backgroundSize: '48px 48px' }} />
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 flex items-center justify-center gap-4"
          >
            <div className="h-px w-12 bg-[#e4b725]" />
            <span className="font-paragraph text-sm tracking-[0.2em] uppercase text-[#e4b725]" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.2em', fontWeight: 500 }}>
              Where We Excel
            </span>
            <div className="h-px w-12 bg-[#e4b725]" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight mb-8"
            style={{ fontFamily: 'cormorantgaramond', fontSize: '4.5rem', lineHeight: '1.1', letterSpacing: '0.001em', fontWeight: 700 }}
          >
            Applications & <br />
            <span className="text-[#e4b725]">Use Cases</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-paragraph text-lg md:text-xl text-white/70 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}
          >
            From residential spaces to critical infrastructure, our materials deliver exceptional performance across every sector of the construction industry.
          </motion.p>
        </div>
      </section>

      {/* Applications Grid */}
      <section className="w-full py-24 bg-[#F8F8F8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {APPLICATIONS.map((application, index) => (
              <ApplicationCard key={application.id} application={application} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 bg-[#e4b725]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-[#333333] mb-6" style={{ fontFamily: 'cormorantgaramond', fontSize: '2.25rem', lineHeight: '2.25', letterSpacing: '0.005em', fontWeight: 600 }}>
            Need guidance for your specific project?
          </h2>
          <p className="font-paragraph text-lg text-[#333333]/70 mb-10 max-w-2xl mx-auto" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
            Our technical team can help you select the right materials and application methods for your unique requirements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Button size="lg" className="bg-[#333333] text-[#FFFFFF]  rounded-none px-10 py-6 h-auto">
              Contact Technical Team
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="border-[#333333]/20 text-[#333333] hover:bg-[#333333]/10 rounded-none px-10 py-6 h-auto">
              Download Application Guide
            </Button>
          </div>
        </div>
      </section>
    </div>
    <Footer />
    </>
    
  );
}
