"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Target, TrendingUp, Mail, Phone, MapPin, Send } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import { mockTeamMembers } from '@/entities/mockData';

export default function AboutPage() {
  const team = mockTeamMembers;
  
  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

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

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'N8/ 236-R-13 Ganesh dham Colony Sunderpur Newada Varanasi 221010'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+91 7011506187, +91 8953632255'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'sales@concreedsolution.com'
    }
  ];

  // Contact Form Handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const WEB3FORMS_ACCESS_KEY = 'ab076be7-acf5-4b7d-875c-2148cc73a6c4';

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        })
      });

      const data = await res.json();

      if (data.success) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '' });
      } else {
        console.error('Web3Forms error', data);
        alert('Submission failed. Please try again.');
      }
    } catch (err) {
      console.error('Submission error', err);
      alert('Submission error. Please try again later.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }
  };

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
            About Concreed
          </h1>
          <div className="w-12 h-1 bg-[#e4b725] mx-auto mb-6" />
          <p className="font-paragraph text-lg lg:text-xl text-[#333333]/80 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
            We've been at the forefront of construction materials innovation, delivering premium solutions that professionals trust for their most demanding projects. 
            Our journey began with a vision to revolutionize the construction industry through cutting-edge chemical formulations and sustainable practices. 
            From waterproofing systems to advanced adhesives, we engineer products that withstand the test of time and extreme conditions. 
            Our state-of-the-art research facilities and expert chemists continuously push the boundaries of what's possible in construction materials. 
            We take pride in partnering with architects, contractors, and builders to bring their boldest visions to life. 
            Today, Concreed stands as a symbol of quality, innovation, and reliability in construction chemicals across diverse applications.
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
              <div className="w-12 h-1 bg-[#e4b725] mb-6" />
              <p className="font-paragraph text-lg text-[#333333]/80 mb-6 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
                We empower people to construct their ideal homes in less time, less cost, and more excellence by leveraging innovative Construction technologies.
              </p>
              <p className="font-paragraph text-lg text-[#333333]/80 mb-6 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
                CONCREED'S foundation is build strong values, We belive in Innovation, Sustainability, Quality and customer satisfaction
              </p>
              <p className="font-paragraph text-lg text-[#333333]/80 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
               We Imagine a Home where constructions sing of innovation and whisper of sustainability! We want to help to turn bold ideas into reality, with materials that push boundaries and leave a lighter footprint.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
                <div className="rounded-sm flex items-center justify-center">
                  <Image
                    src="/images/BuildPromanufacturingfacility.png"
                    alt="BuildPro manufacturing facility"
                    className="w-full h-auto object-contain"
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
            <div className="w-12 h-1 bg-[#e4b725] mx-auto mb-6" />
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
                <value.icon className="w-12 h-12 text-[#e4b725] mx-auto mb-6" strokeWidth={1.5} />
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
            <div className="w-12 h-1 bg-[#e4b725] mx-auto mb-6" />
            <p className="font-paragraph text-lg text-[#333333]/70 max-w-3xl mx-auto" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
              Meet the experts behind BuildPro's success
            </p>
          </motion.div>

          <div className="min-h-100">
            {team.length > 0 ? (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <motion.div
                    key={member._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="text-center"
                  >
                    <div className="w-32 h-32 mx-auto rounded-sm overflow-hidden mb-4">
                      <Image
                        src={member.photo || "/images/default-profile.png"}
                        alt={member.name || "Team member"}
                        className="w-full h-full object-cover"
                        width={128}
                        height={128}
                      />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-[#333333] mb-1" style={{ fontFamily: 'cormorantgaramond', fontSize: '1.125rem', lineHeight: '1.5', letterSpacing: '0.005em', fontWeight: 600 }}>
                      {member.name}
                    </h3>
                    <p className="font-paragraph text-sm text-[#e4b725] mb-3" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 400 }}>
                      {member.role}
                    </p>
                    <p className="font-paragraph text-xs text-[#333333]/70 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '0.75rem', lineHeight: '1.25', letterSpacing: '0.02em', fontWeight: 400 }}>
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

      {/* Contact Section - Merged from Contact Page */}
      <section className="w-full bg-[#F8F8F8] py-24 lg:py-32" id="contact">
        <div className="max-w-400 mx-auto px-8 lg:px-16">
          {/* Contact Hero */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto mb-20"
          >
            <h2 className="font-heading text-5xl lg:text-6xl font-bold text-[#333333] mb-6" style={{ fontFamily: 'cormorantgaramond', fontSize: '3rem', lineHeight: '1.1', letterSpacing: '0.001em', fontWeight: 700 }}>
              Get In Touch
            </h2>
            <div className="w-12 h-1 bg-[#e4b725] mx-auto mb-6" />
            <p className="font-paragraph text-lg text-[#333333]/80 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
              Have questions about our products or services? We're here to help.
            </p>
          </motion.div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 bg-[#FFFFFF] border-[#E0E0E0] text-center">
                  <info.icon className="w-12 h-12 text-[#e4b725] mx-auto mb-6" strokeWidth={1.5} />
                  <h3 className="font-heading text-xl font-semibold text-[#333333] mb-3" style={{ fontFamily: 'cormorantgaramond', fontSize: '1.25rem', lineHeight: '1.75', letterSpacing: '0.01em', fontWeight: 500 }}>
                    {info.title}
                  </h3>
                  <p className="font-paragraph text-base text-[#333333]/70" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                    {info.content}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="p-10 lg:p-12 bg-[#FFFFFF] border-[#E0E0E0]">
                <h3 className="font-heading text-4xl font-bold text-[#333333] mb-8 text-center" style={{ fontFamily: 'cormorantgaramond', fontSize: '2.25rem', lineHeight: '2.25', letterSpacing: '0.005em', fontWeight: 600 }}>
                  Send Us a Message
                </h3>
                <div className="w-12 h-1 bg-[#e4b725] mx-auto mb-6" />

                {submitSuccess && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8 p-6 bg-[#e4b725]/10 border border-[#e4b725] rounded-sm"
                  >
                    <p className="font-paragraph text-base text-[#333333] text-center" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                      Thank you for your message! We'll get back to you soon.
                    </p>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="font-paragraph text-base text-[#333333] mb-2 block" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="font-paragraph"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="font-paragraph text-base text-[#333333] mb-2 block" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@example.com"
                        className="font-paragraph"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="font-paragraph text-base text-[#333333] mb-2 block" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 123-4567"
                        className="font-paragraph"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="font-paragraph text-base text-[#333333] mb-2 block" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your project or inquiry..."
                      rows={6}
                      className="font-paragraph resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#e4b725] hover:bg-[#e4b725]/90 text-[#374151] font-paragraph text-base px-8 py-6 h-auto transition-all duration-300"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className="w-full bg-[#FFFFFF] py-16 lg:py-24">
        <div className="max-w-400 mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="font-heading text-4xl font-bold text-[#333333] mb-8" style={{ fontFamily: 'cormorantgaramond', fontSize: '2.25rem', lineHeight: '2.25', letterSpacing: '0.005em', fontWeight: 600 }}>
              Business Hours
            </h2>
            <div className="space-y-3 font-paragraph text-base text-[#333333]/80">
              <p style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>Monday - Friday: 8:00 AM - 6:00 PM</p>
              <p style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>Saturday: 9:00 AM - 4:00 PM</p>
              <p style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>Sunday: Closed</p>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}