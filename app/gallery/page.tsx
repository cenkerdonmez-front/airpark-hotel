'use client';

import { useEffect, useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY_IMAGES = Array.from({ length: 24 }, (_, i) => `/gallery/${i + 1}.jpg`);
const PAGE_SIZE = 8;

const imageButtonClass = 'cursor-pointer transition-transform duration-300 hover:scale-[1.03]';

export default function GalleryPage() {
  const t = useTranslations('gallery');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isOpen = lightboxIndex !== null;

  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (visibleCount >= GALLERY_IMAGES.length) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver((entries) => {
      const [entry] = entries;
      if (!entry?.isIntersecting) return;

      setVisibleCount((current) => {
        const next = Math.min(current + PAGE_SIZE, GALLERY_IMAGES.length);
        if (next >= GALLERY_IMAGES.length && observerRef.current && loadMoreRef.current) {
          observerRef.current.unobserve(loadMoreRef.current);
        }
        return next;
      });
    });

    if (loadMoreRef.current) {
      observerRef.current.observe(loadMoreRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [visibleCount]);

  const goPrev = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));
  const goNext = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % GALLERY_IMAGES.length));

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-primary/80 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-white/80 font-bold tracking-wider uppercase text-sm md:text-base mb-3 block">
            {t('subtitle')}
          </span>
          <h1 className="text-5xl font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-white/90 text-lg max-w-2xl">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Classic grid */}
      <section className="max-w-7xl mx-auto px-6 py-16 !bg-brand-beige/30">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.slice(0, visibleCount).map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => openLightbox(i)}
              className={`aspect-square relative overflow-hidden rounded-lg bg-brand-beige/30 ${imageButtonClass}`}
            >
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </button>
          ))}
        </div>
        <div
          ref={loadMoreRef}
          className="h-8 w-full flex items-center justify-center text-sm text-brand-primary/60"
        >
          {visibleCount < GALLERY_IMAGES.length && 'Loading more images...'}
        </div>
      </section>

      {/* Lightbox — full-page shadcn Dialog */}
      <Dialog open={isOpen} onOpenChange={(open) => !open && closeLightbox()}>
        <DialogContent
          showCloseButton={false}
          className="z-50 w-full h-full min-w-full max-w-7xl mx-auto rounded-none border-0 bg-black/95 p-0 gap-0 outline-none "
          aria-describedby={undefined}
        >
          <DialogTitle className="sr-only">Image lightbox</DialogTitle>
          {lightboxIndex !== null && (
            <>
              <div className="relative w-full h-full flex items-center justify-center p-14">
                <div className="relative w-full h-[85vh] max-h-[900px] min-h-[300px]">
                  <Image
                    src={GALLERY_IMAGES[lightboxIndex]}
                    alt={`Gallery ${lightboxIndex + 1}`}
                    fill
                    className="object-contain rounded-lg"
                    sizes="100vw"
                  />
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={closeLightbox}
                className="absolute top-4 right-4 size-10 rounded-full bg-white/10 hover:bg-white/20 text-white z-10"
                aria-label="Close"
              >
                <X className="size-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={goPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 size-12 rounded-full bg-white/10 hover:bg-white/20 text-white z-10"
                aria-label="Previous image"
              >
                <ChevronLeft className="size-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={goNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 size-12 rounded-full bg-white/10 hover:bg-white/20 text-white z-10"
                aria-label="Next image"
              >
                <ChevronRight className="size-8" />
              </Button>
              <span className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/80 text-sm">
                {lightboxIndex + 1} / {GALLERY_IMAGES.length}
              </span>
            </>
          )}
        </DialogContent>
      </Dialog>

      <Footer />
    </div>
  );
}
