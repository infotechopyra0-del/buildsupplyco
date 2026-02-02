"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowLeft } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface EventGallery {
  _id: string;
  eventName: string;
  description: string;
  location: string;
  eventDate: string;
  slug: string;
  images: string[];
}

// Complete Events Data with Images
const eventsData: EventGallery[] = [
  {
    _id: '1',
    eventName: 'Startup Mahakumbh 2025',
    description: 'Startup Mahakumbh is India\'s largest tech and startup expo, bringing together startups, investors, mentors, government bodies and corporate leaders to collaborate and innovate.',
    location: 'Bharat Mandapam, New Delhi',
    eventDate: '2nd April 2025',
    slug: 'startup-mahakumbh-2025',
    images: [
      '/images/startupmahakumbh2025image1.jpeg',
      '/images/startupmahakumbh2025image2.jpeg',
      '/images/startupmahakumbh2025image3.jpeg',
      '/images/startupmahakumbh2025image4.jpeg',
      '/images/startupmahakumbh2025image5.jpeg',
      '/images/startupmahakumbh2025image6.jpeg',
      '/images/startupmahakumbh2025image7.jpeg',
      '/images/startupmahakumbh2025image8.jpeg',
    ]
  },
  {
    _id: '2',
    eventName: 'C18th NCB International Conference & Exhibition on Cement, Concrete and Building Materials',
    description: 'Organized by the National Council for Cement and Building Materials (NCB), this premier biennial event unites global experts to explore advancements in construction technology',
    location: 'Yashobhoomi, IICC Dwarka, New Delhi',
    eventDate: '27th November 2024',
    slug: 'ncb-international-conference-2024',
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

export default function EventDetailsPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Find the event based on slug
  const event = eventsData.find(e => e.slug === slug);

  // If event not found, show 404
  if (!event) {
    return (
      <div className="min-h-screen bg-[#F8F8F8] flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-heading text-4xl font-bold text-[#333333] mb-4">Event Not Found</h1>
          <Link href="/events">
            <button className="px-6 py-3 bg-[#e4b725] text-[#333333] rounded-sm font-paragraph">
              Back to Events
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8F8F8]">
      <Header />
      
      {/* Hero Section */}
      <section className="w-full max-w-400 mx-auto px-8 lg:px-16 pt-32 pb-16 lg:pt-40 lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Back Button */}
          <Link href="/events">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-[#333333] hover:text-[#e4b725] mb-8 font-paragraph transition-colors"
              style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 500 }}
            >
              <ArrowLeft className="w-5 h-5" strokeWidth={2} />
              Back to Events
            </motion.button>
          </Link>

          {/* Event Title */}
          <h1 
            className="font-heading text-5xl lg:text-7xl font-bold text-[#333333] mb-6" 
            style={{ fontFamily: 'cormorantgaramond', fontSize: '3rem', lineHeight: '1.1', letterSpacing: '0.001em', fontWeight: 700 }}
          >
            {event.eventName}
          </h1>
          
          <div className="w-12 h-1 bg-[#e4b725] mb-8" />

          {/* Event Info */}
          <div className="flex flex-col sm:flex-row gap-6 mb-8">
            <div className="flex items-center gap-3">
              <Calendar className="w-6 h-6 text-[#e4b725] shrink-0" strokeWidth={1.5} />
              <span 
                className="font-paragraph text-lg text-[#333333]" 
                style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
              >
                {event.eventDate}
              </span>
            </div>
            
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-[#e4b725] shrink-0" strokeWidth={1.5} />
              <span 
                className="font-paragraph text-lg text-[#333333]" 
                style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
              >
                {event.location}
              </span>
            </div>
          </div>

          {/* Event Description */}
          <p 
            className="font-paragraph text-lg text-[#333333]/80 leading-relaxed max-w-4xl" 
            style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}
          >
            {event.description}
          </p>
        </motion.div>
      </section>

      {/* Image Gallery Section */}
      <section className="w-full py-12 lg:py-20 bg-white">
        <div className="max-w-400 mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 
              className="font-heading text-4xl lg:text-5xl font-bold text-[#333333] mb-4" 
              style={{ fontFamily: 'cormorantgaramond', fontSize: '2.5rem', lineHeight: '1.2', letterSpacing: '0.002em', fontWeight: 700 }}
            >
              Event Gallery
            </h2>
            <div className="w-12 h-1 bg-[#e4b725]" />
          </motion.div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {event.images.map((image, imageIndex) => (
              <motion.div
                key={imageIndex}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: imageIndex * 0.05 }}
                className="aspect-square rounded-lg overflow-hidden cursor-pointer group relative bg-[#F8F8F8] border border-[#E0E0E0] hover:border-[#e4b725] transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                <Image 
                  src={image}
                  alt={`${event.eventName} - Photo ${imageIndex + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  width={400}
                  height={400}
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-sm font-paragraph opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 px-4 py-2 rounded-full">
                    Click to Enlarge
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      <Footer />

      {/* Image Modal/Lightbox */}
      {selectedImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <Image 
              src={selectedImage}
              alt="Event Photo"
              className="max-w-full max-h-full object-contain rounded-lg"
              width={1200}
              height={800}
            />
            <button 
              className="absolute top-4 right-4 text-white text-5xl hover:text-[#e4b725] transition-colors w-12 h-12 flex items-center justify-center bg-black/50 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
}