'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Logo from '@/assets/logo.svg';
import Link from 'next/link';
import { useCallback, useEffect, useState, useRef } from 'react';
import gsap from 'gsap';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from '@/components/ui/carousel';

const HERO_IMAGES = [
  { src: '/aph-header-2.jpg.jpg', alt: 'AirParkHotel Exterior' },
  { src: '/gallery/1.jpg', alt: 'Lake and Nature View' },
  { src: '/gallery/4.jpg', alt: 'Aviation and Runway' },
  { src: '/DJI_0941.JPG', alt: 'Solar Panels and Sustainability' },
  { src: '/gallery/2.jpg', alt: 'AirParkHotel Grounds' },
  { src: '/gallery/5.jpg', alt: 'Hotel and Lake' },
  { src: '/gallery/6.jpg', alt: 'Nature and Accommodation' },
  { src: '/gallery/7.jpg', alt: 'Scenic View' },
];

export function Hero() {
  const t = useTranslations('hero');
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;
    const children = el.querySelectorAll(':scope > *');
    gsap.fromTo(
      el,
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: 'power2.out' }
    );
    gsap.fromTo(
      children,
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.12,
        delay: 0.4,
        ease: 'power3.out',
      }
    );
  }, []);

  const scrollTo = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on('select', onSelect);
    const id = requestAnimationFrame(() => setCurrent(api.selectedScrollSnap()));
    return () => {
      cancelAnimationFrame(id);
      api.off('select', onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => {
      api.scrollNext();
      if (api.selectedScrollSnap() === 0) return;
    }, 5000);
    return () => clearInterval(interval);
  }, [api]);

  return (
    <header className="relative h-[85vh] min-h-[500px] overflow-hidden">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, duration: 25 }}
        className="absolute inset-0 h-full w-full"
      >
        <CarouselContent className="h-full">
          {HERO_IMAGES.map((img) => (
            <CarouselItem key={img.src} className="h-full min-w-full flex-[0_0_100%] pl-0">
              <div className="relative h-[85vh] min-h-[500px] w-full">
                <Image
                  alt={img.alt}
                  className="object-cover"
                  src={img.src}
                  fill
                  priority
                  sizes="100vw"
                  unoptimized
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div ref={overlayRef} className="absolute inset-0  flex flex-col items-center justify-center text-center px-4">
        <p className="text-white/95 text-sm md:text-base font-semibold tracking-[0.3em] uppercase mb-3">
          {t('tagline')}
        </p>
        <h1 className="mb-4 flex justify-center" aria-label={t('title')}>
          <Logo className="h-9 w-auto max-w-[90vw] sm:h-11 md:h-14 lg:h-16 xl:h-20" />
        </h1>
        <p className="text-white/90 text-base md:text-lg max-w-xl mb-8">
          {t('subtitle')}
        </p>
        <Link href="/booking">
          <Button className="bg-white text-brand-primary hover:bg-white/90 px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest">
            {t('cta')}
          </Button>
        </Link>

        {/* Quick stats */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-6 md:gap-10 text-white/90 text-sm font-medium">
          <span>{t('stats.rooms')}</span>
          <span className="hidden sm:inline">|</span>
          <span>{t('stats.aviation')}</span>
          <span className="hidden sm:inline">|</span>
          <span>{t('stats.solar')}</span>
        </div>
      </div>

      {/* Dots indicator */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2  gap-2 hidden md:flex">
        {HERO_IMAGES.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => scrollTo(i)}
            className={`h-2 rounded-full transition-all duration-300 ${
              i === current ? 'w-8 bg-white' : 'w-2 bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </header>
  );
}
