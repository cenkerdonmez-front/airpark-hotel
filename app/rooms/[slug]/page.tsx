'use client';

import { notFound } from 'next/navigation';
import { useState, use } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronLeft, ChevronRight, Users, Bed, Maximize2, Bath, Wifi, Wind, Tv, Coffee, Shield, Sparkles } from 'lucide-react';
import { getRoomBySlug } from '@/lib/roomsData';
import { useTranslations } from 'next-intl';

interface RoomPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function RoomPage({ params }: RoomPageProps) {
  const t = useTranslations('rooms');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const { slug } = use(params);
  const room = getRoomBySlug(slug);

  if (!room) {
    return notFound();
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#E8DDD3]">
      <Navigation variant="beige" />
      
      <main className="grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Back Button */}
          <Link 
            href="/#rooms"
            className="inline-flex items-center text-brand-primary hover:text-brand-primary/80 transition-colors mb-8 text-sm font-medium"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t('backToRooms')}
          </Link>

          <div className="flex flex-col lg:flex-row gap-12 lg:items-start">
            {/* Left Column - Room Information (5/12) */}
            <div className="w-full lg:w-5/12 space-y-8 animate-fade-in">
              {/* Title Section */}
              <div>
                <h1 className="text-5xl sm:text-6xl font-serif text-stone-900 mb-2 leading-tight">
                  {t(`${room.key}.name`)}
                </h1>
                <h2 className="text-2xl sm:text-3xl italic text-stone-600 font-serif">
                  {t(`${room.key}.category`)}
                </h2>
              </div>

              {/* Description Box */}
              <div className="bg-brand-primary/10 p-6 sm:p-8 rounded-2xl border-l-4 border-brand-primary relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Sparkles className="w-32 h-32 text-brand-primary" />
                </div>
                <p className="text-stone-700 leading-relaxed text-lg relative z-10">
                  {t(`${room.key}.longDescription`)}
                </p>
                <p className="mt-4 text-stone-700 leading-relaxed relative z-10">
                  {t(`${room.key}.description`)}
                </p>
              </div>

              {/* Amenities Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 pt-4">
                <div className="flex items-center space-x-3 group cursor-default">
                  <Bed className="w-5 h-5 text-brand-primary group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-stone-600 group-hover:text-stone-900 transition-colors">{room.beds}</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-default">
                  <Bath className="w-5 h-5 text-brand-primary group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-stone-600 group-hover:text-stone-900 transition-colors">{t('features.bathrobe')}</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-default">
                  <Users className="w-5 h-5 text-brand-primary group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-stone-600 group-hover:text-stone-900 transition-colors">{t('capacity')} {room.capacity.adults + room.capacity.children}</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-default">
                  <Sparkles className="w-5 h-5 text-brand-primary group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-stone-600 group-hover:text-stone-900 transition-colors">{t('features.slippers')}</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-default">
                  <Maximize2 className="w-5 h-5 text-brand-primary group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-stone-600 group-hover:text-stone-900 transition-colors">{room.size} m²</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-default">
                  <Bath className="w-5 h-5 text-brand-primary group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-stone-600 group-hover:text-stone-900 transition-colors">{t('features.bathrobe')}</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-default">
                  <Wind className="w-5 h-5 text-brand-primary group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-stone-600 group-hover:text-stone-900 transition-colors">{t('features.airConditioning')}</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-default">
                  <Sparkles className="w-5 h-5 text-brand-primary group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-stone-600 group-hover:text-stone-900 transition-colors">{t('features.hairdryer')}</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-default">
                  <Tv className="w-5 h-5 text-brand-primary group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-stone-600 group-hover:text-stone-900 transition-colors">47&quot; HD Led TV</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-default">
                  <Wifi className="w-5 h-5 text-brand-primary group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-stone-600 group-hover:text-stone-900 transition-colors">{t('features.wifi')}</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-default">
                  <Coffee className="w-5 h-5 text-brand-primary group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-stone-600 group-hover:text-stone-900 transition-colors">{t('features.minibar')}</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-default">
                  <Shield className="w-5 h-5 text-brand-primary group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-stone-600 group-hover:text-stone-900 transition-colors">{t('features.safe')}</span>
                </div>
              </div>

              {/* Book Now Button */}
              <div className="pt-8">
                <Button className="bg-brand-primary text-white w-full sm:w-auto px-12 py-4 rounded-full text-lg font-semibold shadow-xl shadow-brand-primary/30 hover:shadow-brand-primary/50 transition-all hover:-translate-y-1 active:scale-95">
                  {t('bookNow')}
                </Button>
              </div>
            </div>

            {/* Right Column - Image Gallery (7/12) */}
            <div className="w-full lg:w-7/12 relative group">
              {/* Main Image Viewport */}
              <div className="aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl relative bg-stone-200">
                {room.images.map((img, idx) => (
                  <Image
                    key={idx}
                    src={img}
                    alt={`${t(`${room.key}.name`)} ${idx + 1}`}
                    fill
                    className={`object-cover transition-opacity duration-700 ease-in-out ${
                      idx === currentImageIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
                    }`}
                    priority={idx === 0}
                  />
                ))}

                {/* Size Badge */}
                <div className="absolute top-8 left-0 bg-brand-primary text-white px-6 py-4 rounded-r-xl shadow-lg font-bold text-xl flex flex-col items-center hover:bg-brand-primary/90 transition-colors">
                  <span>{room.size}</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-80">m2</span>
                </div>

                {/* Carousel Controls */}
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    onClick={prevImage}
                    className="bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all hover:scale-110 active:scale-90"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    onClick={nextImage}
                    className="bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all hover:scale-110 active:scale-90"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Dots Indicator */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                  {room.images.map((_, idx) => (
                    <div 
                      key={idx}
                      onClick={() => setCurrentImageIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'
                      }`}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {room.images.map((img, idx) => (
                  <div 
                    key={idx}
                    onClick={() => setCurrentImageIndex(idx)}
                    className={`aspect-square rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border-2 ${
                      idx === currentImageIndex 
                        ? 'border-brand-primary ring-4 ring-brand-primary/20 scale-95' 
                        : 'border-transparent hover:scale-105'
                    }`}
                  >
                    <Image 
                      src={img} 
                      alt={`Thumbnail ${idx + 1}`} 
                      width={200}
                      height={200}
                      className="w-full h-full object-cover" 
                    />
                  </div>
                ))}
                {/* Placeholder for more images */}
                {room.images.length > 3 && (
                  <div className="aspect-square rounded-2xl overflow-hidden cursor-pointer hover:ring-2 ring-brand-primary transition-all bg-stone-300/50 flex items-center justify-center group/more">
                    <span className="text-sm font-bold text-stone-500 group-hover/more:scale-110 transition-transform">
                      +{room.images.length - 3} {t('moreImages')}
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
