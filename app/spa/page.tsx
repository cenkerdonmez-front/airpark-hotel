import { useTranslations } from 'next-intl';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function SpaPage() {
  const t = useTranslations('spa');

  const services = [
    { key: 'massage', icon: '💆' },
    { key: 'facial', icon: '✨' },
    { key: 'body', icon: '🌿' },
    { key: 'sauna', icon: '🧖' },
    { key: 'pool', icon: '🏊' },
    { key: 'fitness', icon: '💪' },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation  />
      
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

      {/* Services Section */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl text-brand-primary text-center mb-12">
            {t('services')}
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.key}
                className="bg-brand-beige/20 p-8 rounded-lg text-center hover:bg-brand-beige/40 transition-colors"
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-xl text-brand-primary">
                  {t(service.key)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hours & Booking Section */}
      <section className="py-10 bg-brand-beige/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-brand-primary mb-6">
            {t('openingHours')}
          </h2>
          <p className="text-2xl text-brand-primary/80 mb-8">
            {t('hours')}
          </p>
          <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white text-lg px-8 py-6">
            {t('bookingCta')}
          </Button>
        </div>
      </section>

      {/* Image Gallery Placeholder */}
      <section className="py-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-[4/3] bg-brand-beige rounded-lg">
                <Image src={`/images/spa/${i}.jpg`} alt={`Spa image ${i}`} width={500} height={500} />
                </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
