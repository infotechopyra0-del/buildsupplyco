"use client";
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { motion } from 'framer-motion';
import { Lock, Eye, Database, UserCheck, Shield, Globe, Bell, Trash2 } from 'lucide-react';

export default function PrivacyPolicyPage() {
  const keyPoints = [
    {
      icon: Lock,
      title: 'Data Protection',
      description: 'Your personal information is encrypted and securely stored using industry-standard protocols'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'We clearly communicate what data we collect and how it is used'
    },
    {
      icon: UserCheck,
      title: 'Your Rights',
      description: 'You have full control over your personal data and can request access or deletion at any time'
    },
    {
      icon: Shield,
      title: 'Security First',
      description: 'We implement robust security measures to protect your information from unauthorized access'
    }
  ];

  const privacySections = [
    {
      icon: Database,
      title: '1. Information We Collect',
      subsections: [
        {
          subtitle: 'Personal Information',
          content: 'We collect information that you provide directly to us, including your name, email address, phone number, company name, billing and shipping addresses, and payment information when you create an account, place an order, or contact us for support.'
        },
        {
          subtitle: 'Automatically Collected Information',
          content: 'When you visit our website, we automatically collect certain information about your device, including your IP address, browser type, operating system, referring URLs, and information about your interaction with our website through cookies and similar technologies.'
        },
        {
          subtitle: 'Business Information',
          content: 'For commercial accounts, we may collect additional business information such as tax identification numbers, business licenses, and credit references to process orders and establish payment terms.'
        }
      ]
    },
    {
      icon: Globe,
      title: '2. How We Use Your Information',
      subsections: [
        {
          subtitle: 'Order Processing and Fulfillment',
          content: 'We use your information to process and fulfill your orders, communicate with you about your purchases, provide customer support, and send you invoices and payment confirmations.'
        },
        {
          subtitle: 'Service Improvement',
          content: 'We analyze usage patterns and customer feedback to improve our products, services, and website functionality. This helps us better understand customer needs and enhance your experience with BuildPro.'
        },
        {
          subtitle: 'Marketing Communications',
          content: 'With your consent, we may send you promotional emails about new products, special offers, and company updates. You can opt out of marketing communications at any time through the unsubscribe link in our emails.'
        },
        {
          subtitle: 'Legal Compliance',
          content: 'We may use your information to comply with applicable laws, regulations, legal processes, or governmental requests, and to protect our rights, privacy, safety, or property.'
        }
      ]
    },
    {
      icon: Shield,
      title: '3. Data Security and Protection',
      subsections: [
        {
          subtitle: 'Security Measures',
          content: 'We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encryption, secure servers, and regular security audits.'
        },
        {
          subtitle: 'Payment Security',
          content: 'All payment transactions are processed through secure, PCI-compliant payment gateways. We do not store complete credit card information on our servers.'
        },
        {
          subtitle: 'Employee Access',
          content: 'Access to personal information is restricted to employees, contractors, and agents who need to know that information to process it on our behalf and are subject to strict contractual confidentiality obligations.'
        }
      ]
    },
    {
      icon: Bell,
      title: '4. Information Sharing and Disclosure',
      subsections: [
        {
          subtitle: 'Service Providers',
          content: 'We may share your information with third-party service providers who perform services on our behalf, such as payment processing, shipping and delivery, data analysis, email delivery, and customer service. These providers are contractually obligated to protect your information.'
        },
        {
          subtitle: 'Business Transfers',
          content: 'In the event of a merger, acquisition, or sale of assets, your personal information may be transferred to the acquiring entity. We will notify you via email or prominent notice on our website of any such change in ownership.'
        },
        {
          subtitle: 'Legal Requirements',
          content: 'We may disclose your information if required to do so by law or in response to valid requests by public authorities, such as a court order or subpoena.'
        }
      ]
    },
    {
      icon: UserCheck,
      title: '5. Your Privacy Rights',
      subsections: [
        {
          subtitle: 'Access and Correction',
          content: 'You have the right to access, update, or correct your personal information at any time by logging into your account or contacting our customer service team.'
        },
        {
          subtitle: 'Data Deletion',
          content: 'You may request deletion of your personal information, subject to certain legal obligations that may require us to retain certain data. We will respond to deletion requests within 30 days.'
        },
        {
          subtitle: 'Marketing Opt-Out',
          content: 'You can opt out of receiving promotional communications from us by clicking the unsubscribe link in our emails or by contacting us directly. Please note that you will still receive transactional emails related to your orders.'
        },
        {
          subtitle: 'Cookie Management',
          content: 'You can control cookie preferences through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.'
        }
      ]
    },
    {
      icon: Trash2,
      title: '6. Data Retention',
      subsections: [
        {
          subtitle: 'Retention Period',
          content: 'We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.'
        },
        {
          subtitle: 'Account Information',
          content: 'If you close your account, we will retain certain information for legitimate business purposes, such as fraud prevention, legal compliance, and resolving disputes.'
        }
      ]
    }
  ];

  return (
   <>
   <Header />
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
            Privacy Policy
          </h1>
          <p 
            className="text-lg lg:text-xl text-[#333333]/80 leading-relaxed mb-6" 
            style={{ fontFamily: 'Sora, sans-serif', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}
          >
            At BuildPro, we are committed to protecting your privacy and ensuring the security 
            of your personal information. This policy outlines how we collect, use, and safeguard your data.
          </p>
          <p 
            className="text-base text-[#333333]/60" 
            style={{ fontFamily: 'Sora, sans-serif', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
          >
            Last Updated: January 23, 2026
          </p>
        </motion.div>
      </section>

      {/* Key Points Section */}
      <section className="w-full bg-[#FFFFFF] py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 
              className="text-5xl lg:text-6xl font-bold text-[#333333] mb-6" 
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '3rem', lineHeight: '1.1', letterSpacing: '0.001em', fontWeight: 700 }}
            >
              Our Commitment to You
            </h2>
            <p 
              className="text-lg text-[#333333]/70 max-w-3xl mx-auto" 
              style={{ fontFamily: 'Sora, sans-serif', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}
            >
              Your privacy matters. Here's what you need to know.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {keyPoints.map((point, index) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-[#F8F8F8] p-10 rounded-sm border border-[#E0E0E0] text-center"
              >
                <point.icon className="w-12 h-12 text-[#B8A06A] mx-auto mb-6" strokeWidth={1.5} />
                <h3 
                  className="text-2xl font-semibold text-[#333333] mb-4" 
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.5rem', lineHeight: '2', letterSpacing: '0.005em', fontWeight: 600 }}
                >
                  {point.title}
                </h3>
                <p 
                  className="text-base text-[#333333]/70 leading-relaxed" 
                  style={{ fontFamily: 'Sora, sans-serif', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
                >
                  {point.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Privacy Sections */}
      <section className="w-full bg-[#F8F8F8] py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <div className="space-y-16">
            {privacySections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="bg-[#FFFFFF] p-10 rounded-sm border border-[#E0E0E0]"
              >
                <div className="flex items-start gap-6 mb-8">
                  <section.icon className="w-10 h-10 text-[#B8A06A] shrink-0 mt-1" strokeWidth={1.5} />
                  <h2 
                    className="text-3xl font-bold text-[#333333]" 
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', lineHeight: '1.1', letterSpacing: '0.001em', fontWeight: 700 }}
                  >
                    {section.title}
                  </h2>
                </div>

                <div className="space-y-8 ml-16">
                  {section.subsections.map((subsection, subIndex) => (
                    <div key={subIndex}>
                      <h3 
                        className="text-xl font-semibold text-[#333333] mb-3" 
                        style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', lineHeight: '2', letterSpacing: '0.005em', fontWeight: 600 }}
                      >
                        {subsection.subtitle}
                      </h3>
                      <p 
                        className="text-base text-[#333333]/80 leading-relaxed" 
                        style={{ fontFamily: 'Sora, sans-serif', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
                      >
                        {subsection.content}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cookies Section */}
      <section className="w-full bg-[#FFFFFF] py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#F8F8F8] p-10 rounded-sm border border-[#E0E0E0]"
          >
            <h2 
              className="text-3xl font-bold text-[#333333] mb-6" 
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', lineHeight: '1.1', letterSpacing: '0.001em', fontWeight: 700 }}
            >
              7. Cookies and Tracking Technologies
            </h2>
            <div className="space-y-6">
              <div>
                <h3 
                  className="text-xl font-semibold text-[#333333] mb-3" 
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', lineHeight: '2', letterSpacing: '0.005em', fontWeight: 600 }}
                >
                  What Are Cookies
                </h3>
                <p 
                  className="text-base text-[#333333]/80 leading-relaxed" 
                  style={{ fontFamily: 'Sora, sans-serif', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
                >
                  Cookies are small text files stored on your device that help us improve your browsing experience, 
                  remember your preferences, and analyze website traffic. We use both session cookies (which expire 
                  when you close your browser) and persistent cookies (which remain on your device for a set period).
                </p>
              </div>
              <div>
                <h3 
                  className="text-xl font-semibold text-[#333333] mb-3" 
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.25rem', lineHeight: '2', letterSpacing: '0.005em', fontWeight: 600 }}
                >
                  Types of Cookies We Use
                </h3>
                <p 
                  className="text-base text-[#333333]/80 leading-relaxed" 
                  style={{ fontFamily: 'Sora, sans-serif', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
                >
                  We use essential cookies for website functionality, performance cookies to analyze usage patterns, 
                  functional cookies to remember your preferences, and with your consent, marketing cookies to deliver 
                  relevant advertisements. You can manage your cookie preferences through your browser settings.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="w-full bg-[#F8F8F8] py-24 lg:py-32">
        <div className="max-w-5xl mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-[#FFFFFF] p-10 rounded-sm border border-[#E0E0E0]"
          >
            <h2 
              className="text-3xl font-bold text-[#333333] mb-6" 
              style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '2rem', lineHeight: '1.1', letterSpacing: '0.001em', fontWeight: 700 }}
            >
              8. Contact Us About Privacy
            </h2>
            <p 
              className="text-base text-[#333333]/80 leading-relaxed mb-6" 
              style={{ fontFamily: 'Sora, sans-serif', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
            >
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, 
              please don't hesitate to contact us. We are committed to addressing your privacy concerns promptly and thoroughly.
            </p>
            <div 
              className="text-base text-[#333333]/80 leading-relaxed space-y-2" 
              style={{ fontFamily: 'Sora, sans-serif', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
            >
              <p><span className="text-[#B8A06A] font-semibold">Email:</span> privacy@buildpro.com</p>
              <p><span className="text-[#B8A06A] font-semibold">Phone:</span> 1-800-BUILD-PRO</p>
              <p><span className="text-[#B8A06A] font-semibold">Mail:</span> BuildPro Privacy Department, 123 Construction Ave, Suite 100</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
   </>
  );
}