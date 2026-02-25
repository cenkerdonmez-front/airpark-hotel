'use client';

import { useState } from 'react';
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

const GALLERY_IMAGES = Array.from({ length: 29 }, (_, i) => `/gallery/${i + 1}.jpg`);

const imageButtonClass = 'cursor-pointer transition-transform duration-300 hover:scale-[1.03]';

export default function GalleryPage() {
  const t = useTranslations('gallery');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isOpen = lightboxIndex !== null;

  const goPrev = () => setLightboxIndex((i) => (i === null ? 0 : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length));
  const goNext = () => setLightboxIndex((i) => (i === null ? 0 : (i + 1) % GALLERY_IMAGES.length));

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[300px] bg-gradient-to-br from-brand-beige to-brand-beige/80">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-brand-primary/60 text-sm font-semibold tracking-widest uppercase mb-4">
              {t('subtitle')}
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-brand-primary mb-6">
              {t('title')}
            </h1>
            <p className="text-brand-primary/80 text-lg md:text-xl max-w-2xl mx-auto">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      {/* Classic grid */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {GALLERY_IMAGES.map((src, i) => (
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
