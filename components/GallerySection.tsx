'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const PREVIEW_IMAGE_COUNT = 10;
const GALLERY_IMAGES = Array.from({ length: PREVIEW_IMAGE_COUNT }, (_, i) => `/gallery/${i + 1}.jpeg`);

const imageButtonClass = 'cursor-pointer transition-transform duration-300 hover:scale-[1.03]';

export function GallerySection() {
  const t = useTranslations('gallery');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const isOpen = lightboxIndex !== null;

  const goPrev = () =>
    setLightboxIndex((i) =>
      i === null ? 0 : (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length
    );
  const goNext = () =>
    setLightboxIndex((i) => (i === null ? 0 : (i + 1) % GALLERY_IMAGES.length));

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);

  return (
    <section className="bg-white py-16 border-y border-brand-primary/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-brand-primary/60 font-bold tracking-wider uppercase text-[10px] mb-2 block">
            {t('subtitle')}
          </span>

          <p className="text-gray-600 text-sm leading-relaxed max-w-2xl mx-auto mb-8">
            {t('description')}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {GALLERY_IMAGES.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => openLightbox(i)}
              className={`aspect-square relative overflow-hidden rounded-lg bg-brand-primary/5 ${imageButtonClass}`}
            >
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
              />
            </button>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button
            asChild
            className="bg-brand-primary text-white hover:bg-brand-primary/90 cursor-pointer px-8 py-3 text-[11px] font-bold uppercase tracking-widest rounded-sm"
          >
            <Link href="/gallery">{t('viewAll')}</Link>
          </Button>
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={(open) => !open && closeLightbox()}>
        <DialogContent
          showCloseButton={false}
          className="z-50 w-full h-full min-w-full max-w-7xl mx-auto rounded-none border-0 bg-black/95 p-0 gap-0 outline-none"
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
    </section>
  );
}
