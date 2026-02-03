import { useTranslations } from 'next-intl';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function RestaurantPage() {
  const t = useTranslations('restaurant');
  const tNav = useTranslations('nav');

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

      {/* Opening Hours Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl text-brand-primary mb-6">
                {t('openingHours')}
              </h2>
              <div className="space-y-4 text-brand-primary/80">
                <div className="flex justify-between items-center border-b border-brand-primary/10 pb-3">
                  <span className="font-semibold">{t('breakfast').split(':')[0]}</span>
                  <span>{t('breakfast').split(':').slice(1).join(':')}</span>
                </div>
                <div className="flex justify-between items-center border-b border-brand-primary/10 pb-3">
                  <span className="font-semibold">{t('lunch').split(':')[0]}</span>
                  <span>{t('lunch').split(':').slice(1).join(':')}</span>
                </div>
                <div className="flex justify-between items-center border-b border-brand-primary/10 pb-3">
                  <span className="font-semibold">{t('dinner').split(':')[0]}</span>
                  <span>{t('dinner').split(':').slice(1).join(':')}</span>
                </div>
                <div className="flex justify-between items-center border-b border-brand-primary/10 pb-3">
                  <span className="font-semibold">{t('bar').split(':')[0]}</span>
                  <span>{t('bar').split(':').slice(1).join(':')}</span>
                </div>
              </div>
            </div>

            <div className="bg-brand-beige/30 p-8 rounded-lg">
              <h3 className="font-display text-3xl text-brand-primary mb-4">
                {t('menuTitle')}
              </h3>
              <p className="text-brand-primary/70 mb-6">
                {t('menuDescription')}
              </p>
              <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white">
                {t('reservationCta')}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Placeholder */}
      <section className="py-20 bg-brand-beige/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="aspect-[4/3] bg-brand-beige rounded-lg">
                <Image src={`/images/restaurant/${i}.jpg`} alt={`Restaurant image ${i}`} width={1000} height={1000} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
