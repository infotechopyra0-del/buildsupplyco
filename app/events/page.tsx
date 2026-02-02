"use client";
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { format } from 'date-fns';

interface Event {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  eventName?: string;
  description?: string;
  eventDate?: Date | string;
  location?: string;
  eventImage?: string;
  eventType?: string;
}

// Mock Data
const mockEvents: Event[] = [
  {
    _id: '1',
    eventName: 'Advanced Waterproofing Techniques Workshop',
    description: 'Learn the latest waterproofing methods and materials for modern construction projects. Hands-on training with industry experts.',
    eventDate: new Date('2024-03-15T10:00:00'),
    location: 'Mumbai, Maharashtra',
    eventImage: '/images/engineeringfortheenvironment.png',
    eventType: 'Workshop'
  },
  {
    _id: '2',
    eventName: 'Construction Chemical Innovation Summit',
    description: 'Industry leaders discuss breakthrough technologies in construction chemicals and sustainable building materials.',
    eventDate: new Date('2024-03-22T09:30:00'),
    location: 'New Delhi',
    eventImage: '/images/researchanddevelopment.png',
    eventType: 'Summit'
  },
  {
    _id: '3',
    eventName: 'Tile Adhesive Application Masterclass',
    description: 'Professional training on proper application techniques for various tile adhesive products in different scenarios.',
    eventDate: new Date('2024-04-05T11:00:00'),
    location: 'Bangalore, Karnataka',
    eventImage: '/images/commercialprojects.png',
    eventType: 'Masterclass'
  },
  {
    _id: '4',
    eventName: 'Concrete Repair Solutions Seminar',
    description: 'Comprehensive guide to concrete repair methods, material selection, and quality control in restoration projects.',
    eventDate: new Date('2024-04-18T14:00:00'),
    location: 'Chennai, Tamil Nadu',
    eventImage: '/images/infrastructure.png',
    eventType: 'Seminar'
  },
  {
    _id: '5',
    eventName: 'Quality Control in Construction Materials',
    description: 'Essential quality control measures and testing procedures for construction chemical products.',
    eventDate: new Date('2024-05-10T10:30:00'),
    location: 'Pune, Maharashtra',
    eventImage: '/images/LaboratoryTesting.png',
    eventType: 'Training'
  },
  {
    _id: '6',
    eventName: 'Sustainable Construction Practices Conference',
    description: 'Exploring eco-friendly construction methods and sustainable material choices for future building projects.',
    eventDate: new Date('2024-05-25T09:00:00'),
    location: 'Hyderabad, Telangana',
    eventImage: '/images/restoration.png',
    eventType: 'Conference'
  }
];

export default function EventsPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedType, setSelectedType] = useState<string>('All');

  useEffect(() => {
    loadEvents();
  }, []);

  const loadEvents = async () => {
    setIsLoading(true);
    // Simulate loading delay
    setTimeout(() => {
      setEvents(mockEvents);
      setIsLoading(false);
    }, 1000);
  };

  const eventTypes = ['All', ...new Set(events.map(e => e.eventType).filter(type => type !== undefined) as string[])];

  const filteredEvents = selectedType === 'All' 
    ? events 
    : events.filter(e => e.eventType === selectedType);

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
            Events & Workshops
          </h1>
          <div className="w-12 h-1 bg-[#e4b725] mx-auto mb-6" />
          <p className="font-paragraph text-lg lg:text-xl text-[#333333]/80 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
            Join us for industry-leading events, workshops, and seminars designed to enhance your knowledge and connect with professionals in the construction materials sector.
          </p>
        </motion.div>
      </section>

      {/* Filter Section */}
      <section className="w-full bg-[#FFFFFF] py-12">
        <div className="max-w-400 mx-auto px-8 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap gap-3 justify-center"
          >
            {eventTypes.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-6 py-3 rounded-sm font-paragraph text-base transition-all duration-300 ${
                  selectedType === type
                    ? 'bg-[#e4b725] text-[#333333]'
                    : 'bg-[#F8F8F8] text-[#333333] hover:bg-[#e4b725]/20'
                }`}
                style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
              >
                {type}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Events */}
      <section className="w-full py-24 lg:py-32">
        <div className="max-w-400 mx-auto px-8 lg:px-16">
          <div className="min-h-96">
            {isLoading ? (
              <div className="flex justify-center items-center py-20">
                <div className="w-8 h-8 border-4 border-[#e4b725] border-t-transparent rounded-full animate-spin"></div>
              </div>
            ) : filteredEvents.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
                {filteredEvents.map((event, index) => (
                  <motion.div
                    key={event._id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-[#FFFFFF] rounded-sm overflow-hidden border border-[#E0E0E0] hover:border-[#e4b725] transition-all duration-300 hover:shadow-lg"
                  >
                    <div className="aspect-video rounded-sm overflow-hidden">
                      <Image 
                        src={event.eventImage || '/images/common.png'}
                        alt={event.eventName || 'Event'}
                        className="w-full h-full object-cover"
                        width={600}
                        height={400}
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-block px-3 py-1 bg-[#e4b725]/20 text-[#e4b725] rounded-sm font-paragraph text-sm font-semibold" style={{ fontFamily: 'sora', fontSize: '0.875rem', lineHeight: '1.375', letterSpacing: '0.02em', fontWeight: 500 }}>
                          {event.eventType}
                        </span>
                      </div>
                      <h3 className="font-heading text-2xl font-bold text-[#333333] mb-4" style={{ fontFamily: 'cormorantgaramond', fontSize: '1.5rem', lineHeight: '2', letterSpacing: '0.005em', fontWeight: 600 }}>
                        {event.eventName}
                      </h3>
                      <p className="font-paragraph text-base text-[#333333]/70 mb-6 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                        {event.description}
                      </p>
                      <div className="space-y-3 border-t border-[#E0E0E0] pt-6">
                        <div className="flex items-center gap-3">
                          <Calendar className="w-5 h-5 text-[#e4b725] shrink-0" strokeWidth={1.5} />
                          <span className="font-paragraph text-base text-[#333333]" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                            {event.eventDate ? format(new Date(event.eventDate), 'MMMM d, yyyy') : 'TBA'}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="w-5 h-5 text-[#e4b725] shrink-0" strokeWidth={1.5} />
                          <span className="font-paragraph text-base text-[#333333]" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                            {event.eventDate ? format(new Date(event.eventDate), 'h:mm a') : 'TBA'}
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="w-5 h-5 text-[#e4b725] shrink-0" strokeWidth={1.5} />
                          <span className="font-paragraph text-base text-[#333333]" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}>
                            {event.location}
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
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
            <h2 className="font-heading text-5xl lg:text-6xl font-bold mb-8" style={{ fontFamily: 'cormorantgaramond', fontSize: '3rem', lineHeight: '1.1', letterSpacing: '0.002em', fontWeight: 700 }}>
              Don't Miss Our Next Event
            </h2>
            <p className="font-paragraph text-lg lg:text-xl text-[#333333]/90 mb-10 leading-relaxed" style={{ fontFamily: 'sora', fontSize: '1.125rem', lineHeight: '1.625', letterSpacing: '0.01em', fontWeight: 400 }}>
              Subscribe to our newsletter to stay updated on upcoming events, workshops, and exclusive industry insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-6 py-4 rounded-sm font-paragraph text-base text-[#333333] placeholder-[#333333]/50 flex-1 border border-[#333333]/20"
                style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 400 }}
              />
              <button className="px-8 py-4 bg-[#333333] text-[#FFFFFF] font-paragraph text-base font-semibold rounded-sm hover:bg-[#333333]/90 transition-all duration-300" style={{ fontFamily: 'sora', fontSize: '1rem', lineHeight: '1.5', letterSpacing: '0.02em', fontWeight: 500 }}>
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}