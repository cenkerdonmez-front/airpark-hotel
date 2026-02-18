'use client';

import { notFound } from 'next/navigation';
import { useState, use, useEffect } from 'react';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ChevronLeft, ChevronRight, Users, Bed, Maximize2, ThermometerSun, Tv, Refrigerator, Coffee, Baby, ShowerHead, Footprints, Wind, Wifi, Car, UtensilsCrossed, Sparkles, X } from 'lucide-react';
import { getRoomBySlug } from '@/lib/roomsData';
import { useTranslations } from 'next-intl';
import type { LucideIcon } from 'lucide-react';

const FEATURE_ICONS: Record<string, LucideIcon> = {
  airConditioningHeating: ThermometerSun,
  tv43: Tv,
  minibar: Refrigerator,
  teaCoffee: Coffee,
  babyCrib: Baby,
  shower: ShowerHead,
  slippers: Footprints,
  hairdryer: Wind,
  wifi: Wifi,
  parking: Car,
  breakfast: UtensilsCrossed,
};

interface RoomPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function RoomPage({ params }: RoomPageProps) {
  const t = useTranslations('rooms');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { slug } = use(params);
  const room = getRoomBySlug(slug);

  useEffect(() => {
    if (!isModalOpen) return;
    const onEscape = (e: KeyboardEvent) => e.key === 'Escape' && setIsModalOpen(false);
    document.addEventListener('keydown', onEscape);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onEscape);
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  if (!room) {
    return notFound();
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const openModal = (index: number) => {
    setCurrentImageIndex(index);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navigation variant="white" />
      
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
                  <span className="text-stone-600 group-hover:text-stone-900 transition-colors">{t(`${room.key}.beds`)}</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-default">
                  <Users className="w-5 h-5 text-brand-primary group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-stone-600 group-hover:text-stone-900 transition-colors">{t('capacity')} {room.capacity.adults + room.capacity.children}</span>
                </div>
                <div className="flex items-center space-x-3 group cursor-default">
                  <Maximize2 className="w-5 h-5 text-brand-primary group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="text-stone-600 group-hover:text-stone-900 transition-colors">{room.size} m²</span>
                </div>
                {room.features.map((featureKey) => {
                  const Icon = FEATURE_ICONS[featureKey];
                  if (!Icon) return null;
                  return (
                    <div key={featureKey} className="flex items-center space-x-3 group cursor-default">
                      <Icon className="w-5 h-5 text-brand-primary group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                      <span className="text-stone-600 group-hover:text-stone-900 transition-colors">{t(`features.${featureKey}`)}</span>
                    </div>
                  );
                })}
              </div>

              {/* Book Now Button */}
              <div className="pt-8">
                <Link href="/booking">
                  <Button className="bg-brand-primary text-white w-full sm:w-auto px-12 py-4 rounded-full text-lg font-semibold shadow-xl shadow-brand-primary/30 hover:shadow-brand-primary/50 transition-all hover:-translate-y-1 active:scale-95">
                    {t('bookNow')}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Column - Image Gallery (7/12) */}
            <div className="w-full lg:w-7/12 relative group">
              {/* Main Image Viewport - click to open modal */}
              <div
                className="aspect-[4/3] overflow-hidden rounded-3xl shadow-2xl relative bg-stone-200 cursor-zoom-in"
                onClick={() => openModal(currentImageIndex)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && openModal(currentImageIndex)}
                aria-label={t('openGallery')}
              >
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

                {/* Size Badge - stop propagation so clicking doesn't open modal */}
                <div
                  className="absolute top-8 left-0 bg-brand-primary text-white px-6 py-4 rounded-r-xl shadow-lg font-bold text-xl flex flex-col items-center hover:bg-brand-primary/90 transition-colors cursor-default"
                  onClick={(e) => e.stopPropagation()}
                  onKeyDown={(e) => e.stopPropagation()}
                >
                  <span>{room.size}</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-80">m2</span>
                </div>

                {/* Carousel Controls - stop propagation so clicking them doesn't open modal */}
                <div className="absolute inset-x-4 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                  <button 
                    type="button"
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all hover:scale-110 active:scale-90"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </button>
                  <button 
                    type="button"
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="bg-white/20 hover:bg-white/40 backdrop-blur-md text-white p-3 rounded-full transition-all hover:scale-110 active:scale-90"
                    aria-label="Next image"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </button>
                </div>

                {/* Dots Indicator - stop propagation so clicking doesn't open modal */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                  {room.images.map((_, idx) => (
                    <button
                      type="button"
                      key={idx}
                      onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(idx); }}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        idx === currentImageIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'
                      }`}
                      aria-label={`Image ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Thumbnails - click to select and open modal */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                {room.images.map((img, idx) => (
                  <div 
                    key={idx}
                    onClick={() => { setCurrentImageIndex(idx); openModal(idx); }}
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

      {/* Photo modal - fullscreen carousel */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          onClick={() => setIsModalOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={t('galleryModal')}
        >
          {/* Close - fixed to top-right of viewport */}
          <button
            type="button"
            onClick={() => setIsModalOpen(false)}
            className="absolute top-4 right-4 z-20 p-2 rounded-full text-white/90 hover:text-white hover:bg-white/10 transition-colors"
            aria-label={t('closeModal')}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Image + carousel - centered */}
          <div
            className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {room.images.map((img, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                  idx === currentImageIndex ? 'opacity-100 z-0' : 'opacity-0 z-0 pointer-events-none'
                }`}
              >
                <Image
                  src={img}
                  alt={`${t(`${room.key}.name`)} ${idx + 1}`}
                  width={1200}
                  height={900}
                  className="max-w-full max-h-[85vh] w-auto h-auto object-contain rounded-lg"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            ))}

            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Previous image"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Next image"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          </div>

          {/* Counter - fixed to bottom center of viewport */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 px-4 py-2 rounded-full bg-black/50 text-white text-sm font-medium pointer-events-none">
            {currentImageIndex + 1} / {room.images.length}
          </div>
        </div>
      )}
    </div>
  );
}
