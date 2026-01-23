"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, TrendingUp } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { TeamMembers } from '@/entities';
import { mockTeamMembers } from '@/entities/mockData';

export default function AboutPage() {
  const team = mockTeamMembers;

  const values = [
    {
      icon: Award,
      title: 'Quality Excellence',
      description: 'Uncompromising standards in every product we manufacture'
    },
    {
      icon: Users,
      title: 'Customer Focus',
      description: 'Building lasting relationships through exceptional service'
    },
    {
      icon: Target,
      title: 'Innovation',
      description: 'Pioneering solutions for modern construction challenges'
    },
    {
      icon: TrendingUp,
      title: 'Sustainability',
      description: 'Responsible manufacturing for a better tomorrow'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full max-w-400 mx-auto px-8 lg:px-16 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h1 className="font-heading text-6xl lg:text-8xl font-bold text-[#333333] mb-8" style={{ fontFamily: 'cormorantgaramond', fontSize: '3.75rem', lineHeight: '1.1', letterSpacing: '0.001em', fontWeight: 700 }}>
            About BuildPro
          </h1>
          <p className="font-paragraph text-lg lg:text-xl text-[#333333]/80 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
            For over three decades, we've been at the forefront of construction materials innovation, 
            delivering premium solutions that professionals trust for their most demanding projects.
          </p>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="w-full bg-[#FFFFFF] py-24 lg:py-32">
        <div className="max-w-400 mx-auto px-8 lg:px-16">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-5xl lg:text-6xl font-bold text-[#333333] mb-8" style={{ fontFamily: 'cormorantgaramond', fontSize: '3rem', lineHeight: '1.1', letterSpacing: '0.001em', fontWeight: 700 }}>
                Our Story
              </h2>
              <p className="font-paragraph text-lg text-[#333333]/80 mb-6 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
                Founded in 1990, BuildPro emerged from a simple vision: to provide construction 
                professionals with materials that combine exceptional performance with unwavering reliability.
              </p>
              <p className="font-paragraph text-lg text-[#333333]/80 mb-6 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
                What began as a small manufacturing facility has grown into a leading supplier of 
                premium construction materials, serving thousands of projects across the region.
              </p>
              <p className="font-paragraph text-lg text-[#333333]/80 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
                Today, we continue to innovate, investing in research and development to create 
                solutions that meet the evolving needs of modern construction while maintaining 
                our commitment to quality and sustainability.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-4/3 rounded-sm overflow-hidden">
                <Image 
                  src="/images/BuildPromanufacturingfacility.png"
                  alt="BuildPro manufacturing facility"
                  className="w-full h-full object-cover"
                  width={800}
                  height={576}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full bg-[#F8F8F8] py-24 lg:py-32">
        <div className="max-w-400 mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl lg:text-6xl font-bold text-[#333333] mb-6" style={{ fontFamily: 'cormorantgaramond', fontSize: '3rem', lineHeight: '1.1', letterSpacing: '0.001em', fontWeight: 700 }}>
              Our Values
            </h2>
            <p className="font-paragraph text-lg text-[#333333]/70 max-w-3xl mx-auto" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#FFFFFF] p-10 rounded-sm border border-[#E0E0E0] text-center"
              >
                <value.icon className="w-12 h-12 text-[#B8A06A] mx-auto mb-6" strokeWidth={1.5} />
                <h3 className="font-heading text-2xl font-semibold text-[#333333] mb-4" style={{ fontFamily: 'cormorantgaramond', fontSize: '1.5rem', lineHeight: '2', letterSpacing: '0.005em', fontWeight: 600 }}>
                  {value.title}
                </h3>
                <p className="font-paragraph text-base text-[#333333]/70 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full bg-[#FFFFFF] py-24 lg:py-32">
        <div className="max-w-400 mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-heading text-5xl lg:text-6xl font-bold text-[#333333] mb-6" style={{ fontFamily: 'cormorantgaramond', fontSize: '3rem', lineHeight: '1.1', letterSpacing: '0.001em', fontWeight: 700 }}>
              Our Team
            </h2>
            <p className="font-paragraph text-lg text-[#333333]/70 max-w-3xl mx-auto" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
              Meet the experts behind BuildPro's success
            </p>
          </motion.div>

          <div className="min-h-100">
            {team.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {team.map((member, index) => (
                  <motion.div
                    key={member._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="aspect-square rounded-sm overflow-hidden mb-6">
                      <Image
                        src={member.photo || "/images/default-profile.png"}
                        alt={member.name || "Team member"}
                        className="w-full h-full object-cover"
                        width={400}
                        height={400}
                      />
                    </div>
                    <h3 className="font-heading text-2xl font-semibold text-[#333333] mb-2" style={{ fontFamily: 'cormorantgaramond', fontSize: '1.5rem', lineHeight: '2', letterSpacing: '0.005em', fontWeight: 600 }}>
                      {member.name}
                    </h3>
                    <p className="font-paragraph text-base text-[#B8A06A] mb-4" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                      {member.role}
                    </p>
                    <p className="font-paragraph text-sm text-[#333333]/70 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}>
                      {member.bio}
                    </p>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-paragraph text-lg text-[#333333]/60" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
                  Team information coming soon
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
