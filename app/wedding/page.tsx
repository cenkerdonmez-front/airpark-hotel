import { useTranslations } from 'next-intl';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
export default function WeddingPage() {
  const t = useTranslations('wedding');

  const services = [
    { key: 'planning', icon: '📋' },
    { key: 'catering', icon: '🍽️' },
    { key: 'decoration', icon: '🎨' },
    { key: 'accommodation', icon: '🏨' },
    { key: 'photography', icon: '📸' },
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

      {/* Venues Section */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl text-brand-primary text-center mb-6">
            {t('venues')}
          </h2>
          <p className="text-center text-brand-primary/70 mb-12 max-w-2xl mx-auto">
            {t('venueDescription')}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="aspect-[4/3] bg-brand-beige rounded-lg">
              <Image src={`/images/wedding/venue1.jpg`} alt={`Wedding venue 1`} width={500} height={500} />
              </div>
            <div className="aspect-[4/3] bg-brand-beige rounded-lg">
              <Image src={`/images/wedding/venue2.jpg`} alt={`Wedding venue 2`} width={500} height={500} />
              </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 bg-brand-beige/20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="font-display text-4xl text-brand-primary text-center mb-12">
            {t('services')}
          </h2>
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {services.map((service) => (
              <div
                key={service.key}
                className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-3">{service.icon}</div>
                <p className="text-sm font-semibold text-brand-primary">
                  {t(service.key)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-brand-primary mb-6">
            {t('subtitle')}
          </h2>
          <p className="text-brand-primary/70 mb-8 text-lg">
            {t('description')}
          </p>
          <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white text-lg px-8 py-6">
            {t('contactCta')}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
