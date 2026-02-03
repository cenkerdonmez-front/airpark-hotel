import { useTranslations } from 'next-intl';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
export default function MeetingPage() {
  const t = useTranslations('meeting');

  const facilities = [
    { key: 'conferenceRooms', icon: '🏢' },
    { key: 'boardRoom', icon: '👔' },
    { key: 'ballroom', icon: '🎭' },
    { key: 'equipment', icon: '🖥️' },
  ];

  const services = [
    { key: 'catering', icon: '🍴' },
    { key: 'setup', icon: '⚙️' },
    { key: 'support', icon: '🛠️' },
    { key: 'wifi', icon: '📶' },
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

      {/* Facilities Section */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl text-brand-primary text-center mb-12">
            {t('facilities')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {facilities.map((facility) => (
              <div
                key={facility.key}
                className="bg-brand-beige/20 p-8 rounded-lg text-center hover:bg-brand-beige/40 transition-colors"
              >
                <div className="text-5xl mb-4">{facility.icon}</div>
                <h3 className="font-semibold text-lg text-brand-primary">
                  {t(facility.key)}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity Section */}
      <section className="py-10 bg-brand-beige/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-brand-primary mb-4">
            {t('capacity')}
          </h2>
          <p className="text-2xl text-brand-primary/80 mb-12">
            {t('capacityInfo')}
          </p>

          {/* Image Placeholder */}
          <div className="aspect-video bg-brand-beige rounded-lg mb-12">
            <Image src={`/images/meeting/capacity.jpg`} alt={`Meeting capacity`} width={500} height={500} />
            </div>

          <h3 className="font-display text-3xl text-brand-primary mb-8">
            {t('services')}
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {services.map((service) => (
              <div
                key={service.key}
                className="bg-white p-6 rounded-lg text-center"
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
      <section className="py-10">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-brand-primary mb-6">
            {t('subtitle')}
          </h2>
          <p className="text-brand-primary/70 mb-8 text-lg">
            {t('description')}
          </p>
          <Button className="bg-brand-primary hover:bg-brand-primary/90 text-white text-lg px-8 py-6">
            {t('inquiryCta')}
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
