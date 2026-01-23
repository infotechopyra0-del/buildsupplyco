"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ContactInquiries } from '@/entities';
import { mockContactInquiries } from '@/entities/mockData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const inquiry: ContactInquiries = {
      _id: crypto.randomUUID(),
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
      submissionDate: new Date().toISOString()
    };

    // Simulate saving to mock data (in-memory only)
    mockContactInquiries.push(inquiry);

    setSubmitSuccess(true);
    setFormData({ name: '', email: '', phone: '', message: '' });
    setIsSubmitting(false);

    setTimeout(() => {
      setSubmitSuccess(false);
    }, 5000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      content: '123 Industrial Avenue, Construction District'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567'
    },
    {
      icon: Mail,
      title: 'Email Us',
      content: 'info@buildpro.com'
    }
  ];

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
          <h1 className="font-heading text-6xl lg:text-8xl font-bold text-[#333333] mb-8" style={{ fontFamily: 'cormorantgaramond', fontSize: '3.75rem', lineHeight: '1.1', letterSpacing: '0.001em', fontWeight: 700 }}>
            Get In Touch
          </h1>
          <p className="font-paragraph text-lg lg:text-xl text-[#333333]/80 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
            Have questions about our products or services? We're here to help.
          </p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <section className="w-full py-16">
        <div className="max-w-400 mx-auto px-8 lg:px-16">
          <div className="grid md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-8 bg-[#FFFFFF] border-[#E0E0E0] text-center">
                  <info.icon className="w-12 h-12 text-[#B8A06A] mx-auto mb-6" strokeWidth={1.5} />
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
        </div>
      </section>

      {/* Contact Form */}
      <section className="w-full py-16 lg:py-24">
        <div className="max-w-3xl mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Card className="p-10 lg:p-12 bg-[#FFFFFF] border-[#E0E0E0]">
              <h2 className="font-heading text-4xl font-bold text-[#333333] mb-8 text-center" style={{ fontFamily: 'cormorantgaramond', fontSize: '2.25rem', lineHeight: '2.25', letterSpacing: '0.005em', fontWeight: 600 }}>
                Send Us a Message
              </h2>

              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 p-6 bg-[#B8A06A]/10 border border-[#B8A06A] rounded-sm"
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
                  className="w-full bg-[#2C3E50] hover:bg-[#2C3E50]/90 text-[#FFFFFF] font-paragraph text-base px-8 py-6 h-auto transition-all duration-300"
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
