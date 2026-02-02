"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface EventGallery {
  _id: string;
  eventName: string;
  location: string;
  eventDate: string;
  images: string[];
}

// Your 2 Events Data - Replace with your actual event details and image paths
const eventsData: EventGallery[] = [
  {
    _id: '1',
    eventName: 'Startup Mahakumbh 2025',
    location: 'Bharat Mandapam, New Delhi',
    eventDate: '2nd April 2025',
    images: [
      '/images/startupmahakumbh2025image1.jpeg',
      '/images/startupmahakumbh2025image2.jpeg',
      '/images/startupmahakumbh2025image3.jpeg',
      '/images/startupmahakumbh2025image4.jpeg',
      '/images/startupmahakumbh2025image5.jpeg',
    ]
  },
  {
    _id: '2',
    eventName: 'C18th NCB International Conference & Exhibition on Cement, Concrete and Building Materials',
    location: 'Yashobhoomi , IICC Dwarka, New Delhi',
    eventDate: '27th November 2024',
    images: [
      '/images/ncbinternationalconference2024image1.jpeg',
      '/images/ncbinternationalconference2024image2.jpeg',
      '/images/ncbinternationalconference2024image3.jpeg',
      '/images/ncbinternationalconference2024image4.jpeg',
      '/images/ncbinternationalconference2024image5.jpeg',
      '/images/ncbinternationalconference2024image6.jpeg',
      '/images/ncbinternationalconference2024image7.jpeg',
      '/images/ncbinternationalconference2024image8.jpeg',
      '/images/ncbinternationalconference2024image9.jpeg',
    ]
  }
];

export default function EventsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
          <h1 
            className="font-heading text-6xl lg:text-8xl font-bold text-[#333333] mb-8" 
            style={{ fontFamily: 'cormorantgaramond', fontSize: '3.75rem', lineHeight: '1.1', letterSpacing: '0.001em', fontWeight: 700 }}
          >
            Our Events
          </h1>
          <div className="w-12 h-1 bg-[#e4b725] mx-auto mb-6" />
          <p 
            className="font-paragraph text-lg lg:text-xl text-[#333333]/80 leading-relaxed" 
            style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}
          >
            Join us for industry-leading events, workshops, and seminars designed to enhance your knowledge and connect with professionals in the construction materials sector.
          </p>
        </motion.div>
      </section>

      {/* Events Gallery Section */}
      <section className="w-full py-12 lg:py-20">
        <div className="max-w-400 mx-auto px-8 lg:px-16">
          <div className="space-y-24">
            {eventsData.map((event, eventIndex) => (
              <motion.div
                key={event._id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: eventIndex * 0.2 }}
                className="bg-white rounded-lg p-8 lg:p-12 shadow-sm border border-[#E0E0E0]"
              >
                {/* Event Header */}
                <div className="mb-10 border-b border-[#E0E0E0] pb-8">
                  <h2 
                    className="font-heading text-4xl lg:text-5xl font-bold text-[#333333] mb-6" 
                    style={{ fontFamily: 'cormorantgaramond', fontSize: '2.5rem', lineHeight: '1.2', letterSpacing: '0.002em', fontWeight: 700 }}
                  >
                    {event.eventName}
                  </h2>
                  
                  <div className="flex flex-col sm:flex-row gap-6">
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-[#e4b725] shrink-0" strokeWidth={1.5} />
                      <span 
                        className="font-paragraph text-base lg:text-lg text-[#333333]" 
                        style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
                      >
                        {event.location}
                      </span>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Calendar className="w-5 h-5 text-[#e4b725] shrink-0" strokeWidth={1.5} />
                      <span 
                        className="font-paragraph text-base lg:text-lg text-[#333333]" 
                        style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
                      >
                        {event.eventDate}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Image Gallery */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {event.images.map((image, imageIndex) => (
                    <motion.div
                      key={imageIndex}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: imageIndex * 0.05 }}
                      className="aspect-square rounded-lg overflow-hidden cursor-pointer group relative bg-[#F8F8F8]"
                      onClick={() => setSelectedImage(image)}
                    >
                      <Image 
                        src={image}
                        alt={`${event.eventName} - Photo ${imageIndex + 1}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        width={400}
                        height={400}
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full bg-[#e4b725] text-[#333333] py-24 lg:py-32">
        <div className="max-w-400 mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 
              className="font-heading text-5xl lg:text-6xl font-bold mb-8" 
              style={{ fontFamily: 'cormorantgaramond', fontSize: '3rem', lineHeight: '1.1', letterSpacing: '0.002em', fontWeight: 700 }}
            >
              Stay Updated on Our Events
            </h2>
            <p 
              className="font-paragraph text-lg lg:text-xl text-[#333333]/90 mb-10 leading-relaxed" 
              style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}
            >
              Subscribe to our newsletter to receive updates about our upcoming events and exhibitions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-sm font-paragraph text-base text-[#333333] placeholder-[#333333]/50 flex-1 border border-[#333333]/20 bg-[#ffffff]"
                style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
              />
              <button 
                className="px-8 py-4 bg-[#333333] text-[#FFFFFF] font-paragraph text-base font-semibold rounded-sm hover:bg-[#333333]/90 transition-all duration-300" 
                style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 500 }}
              >
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Image Modal/Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-6xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image 
              src={selectedImage}
              alt="Event Photo"
              className="max-w-full max-h-full object-contain"
              width={1200}
              height={800}
            />
            <button 
              className="absolute top-4 right-4 text-white text-4xl hover:text-[#e4b725] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </div>
      )}
    </div>
  );
}