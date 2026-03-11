'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { AnimateOnScroll } from './AnimateOnScroll';

export function HomeExperienceSection() {
  const t = useTranslations('homeExperience');

  return (
    <section className="bg-brand-beige/30 border-y border-brand-primary/10 pt-4 pb-12">
      <div className="max-w-6xl mx-auto px-6">
        <AnimateOnScroll variant="scaleReveal" className="text-center mb-16">
          <span className="text-brand-primary/60 font-bold tracking-[0.2em] uppercase text-[10px] mb-2 block">
            {t('eyebrow')}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-brand-primary">
            {t('title')}
          </h2>
        </AnimateOnScroll>
        <div className="space-y-20">
        {/* Nature – image left, text right */}
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <AnimateOnScroll variant="slideFromLeft">
          <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden bg-brand-primary/5 shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
            <Image
              src="/gallery/1.jpg"
              alt={t('nature.title')}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 520px, (min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="slideFromRight" delay={0.15}>
          <div>
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-brand-primary/60 mb-2">
              {t('nature.eyebrow')}
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-brand-primary mb-3">
              {t('nature.title')}
            </h2>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary/60 mb-6">
              {t('nature.subtitle')}
            </p>
            <div className="space-y-4 text-sm md:text-base leading-relaxed text-brand-primary/90">
              <p>{t('nature.p1')}</p>
              <p>{t('nature.p2')}</p>
              <p>{t('nature.p3')}</p>
            </div>
          </div>
          </AnimateOnScroll>
        </div>

        {/* Aviation – text left, image right */}
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <AnimateOnScroll variant="slideFromLeft" className="order-2 md:order-1">
          <div>
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-brand-primary/60 mb-2">
              {t('aviation.eyebrow')}
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-brand-primary mb-3">
              {t('aviation.title')}
            </h2>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary/60 mb-6">
              {t('aviation.subtitle')}
            </p>
            <div className="space-y-4 text-sm md:text-base leading-relaxed text-brand-primary/90">
              <p>{t('aviation.p1')}</p>
              <p>{t('aviation.p2')}</p>
              <p>{t('aviation.p3')}</p>
              <p>{t('aviation.p4')}</p>
            </div>
          </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="slideFromRight" delay={0.15} className="order-1 md:order-2">
          <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden bg-brand-primary/5 shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
            <Image
              src="/gallery/4.jpg"
              alt={t('aviation.title')}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 520px, (min-width: 768px) 50vw, 100vw"
            />
          </div>
          </AnimateOnScroll>
        </div>

        {/* Solar – image left, text right */}
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <AnimateOnScroll variant="blurReveal">
          <div className="relative h-64 md:h-80 rounded-3xl overflow-hidden bg-brand-primary/5 shadow-[0_24px_60px_rgba(0,0,0,0.12)]">
            <Image
              src="/DJI_0941.JPG"
              alt={t('solar.title')}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 520px, (min-width: 768px) 50vw, 100vw"
            />
          </div>
          </AnimateOnScroll>

          <AnimateOnScroll variant="scaleReveal" delay={0.2}>
          <div>
            <p className="text-[11px] font-bold tracking-[0.25em] uppercase text-brand-primary/60 mb-2">
              {t('solar.eyebrow')}
            </p>
            <h2 className="font-display text-2xl md:text-3xl text-brand-primary mb-3">
              {t('solar.title')}
            </h2>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand-primary/60 mb-6">
              {t('solar.subtitle')}
            </p>
            <div className="space-y-4 text-sm md:text-base leading-relaxed text-brand-primary/90">
              <p>{t('solar.p1')}</p>
              <p>{t('solar.p2')}</p>
            </div>
          </div>
          </AnimateOnScroll>
        </div>
        </div>
      </div>
    </section>
  );
}

