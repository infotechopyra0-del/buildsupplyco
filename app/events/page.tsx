"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface Event {
  _id: string;
  eventName: string;
  description: string;
  eventDate: string;
  location: string;
  eventImage: string;
  slug: string; // URL-friendly version of event name
}

// Events Data
const eventsData: Event[] = [
  {
    _id: '1',
    eventName: 'Startup Mahakumbh 2025',
    description: 'Startup Mahakumbh is India\'s largest tech and startup expo, bringing together startups, investors, mentors, government bodies and corporate leaders to collaborate and innovate.',
    eventDate: '2nd April 2025',
    location: 'Bharat Mandapam, New Delhi',
    eventImage: '/images/startupmahakumbh2025image1.jpeg',
    slug: 'startup-mahakumbh-2025'
  },
  {
    _id: '2',
    eventName: 'C18th NCB International Conference',
    description: 'Organized by the National Council for Cement and Building Materials (NCB), this premier biennial event unites global experts to explore advancements in construction technology',
    eventDate: '27th November 2024',
    location: 'Yashobhoomi, IICC Dwarka, New Delhi',
    eventImage: '/images/ncbinternationalconference2024image8.jpeg',
    slug: 'ncb-international-conference-2024'
  }
];

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    setIsLoading(true);
    setTimeout(() => {
      setEvents(eventsData);
      setIsLoading(false);
    }, 1000);
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
            Our Events
          </h1>
          <div className="w-12 h-1 bg-[#e4b725] mx-auto mb-6" />
          <p className="font-paragraph text-lg lg:text-xl text-[#333333]/80 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
            Join us for industry-leading events, workshops, and seminars designed to enhance your knowledge and connect with professionals in the construction materials sector.
          </p>
        </motion.div>
      </section>

      {/* Events */}
      <section className="w-full py-24 lg:py-32">
        <div className="max-w-400 mx-auto px-8 lg:px-16">
          <div className="min-h-100">
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="w-8 h-8 border-4 border-[#e4b725] border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : events.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {events.map((event, index) => (
                  <Link href={`/events/${event.slug}`} key={event._id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      className="bg-[#FFFFFF] rounded-sm overflow-hidden border border-[#E0E0E0] hover:border-[#e4b725] transition-all duration-300 hover:shadow-lg cursor-pointer group h-full"
                    >
                      <div className="aspect-video rounded-sm overflow-hidden relative">
                        <Image 
                          src={event.eventImage || '/images/common.png'}
                          alt={event.eventName || 'Event'}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          width={600}
                          height={400}
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300" />
                      </div>
                      <div className="p-8">
                        <h3 className="font-heading text-2xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'cormorantgaramond', fontSize: '1.5rem', lineHeight: '2', letterSpacing: '0.005em', fontWeight: 600 }}>
                          {event.eventName}
                        </h3>
                        <p className="font-paragraph text-base text-[#333333]/70 mb-6 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                          {event.description}
                        </p>
                        <div className="space-y-3 border-t border-[#E0E0E0] pt-6 mb-6">
                          <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-[#e4b725] shrink-0" strokeWidth={1.5} />
                            <span className="font-paragraph text-base text-[#333333]" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                              {event.eventDate || 'TBA'}
                            </span>
                          </div>
                          <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-[#e4b725] shrink-0" strokeWidth={1.5} />
                            <span className="font-paragraph text-base text-[#333333]" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                              {event.location}
                            </span>
                          </div>
                        </div>
                        
                        {/* View Details Button */}
                        <div className="flex items-center gap-2 text-[#e4b725] group-hover:gap-4 transition-all duration-300">
                          <span className="font-paragraph text-base font-semibold" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 600 }}>
                            View Gallery
                          </span>
                          <ArrowRight className="w-5 h-5" strokeWidth={2} />
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <p className="font-paragraph text-lg text-[#333333]/60" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
                  No events at the moment. Check back soon!
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