import { useTranslations, useLocale } from 'next-intl';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import Image from 'next/image';

export default function MeetingPage() {
  const t = useTranslations('meeting');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[200px] bg-gradient-to-br from-brand-beige to-brand-beige/80">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
          
            <h1 className="font-display text-5xl md:text-7xl text-brand-primary mb-6">
              {t('title')}
            </h1>
        
          </div>
        </div>
      </section>

      {/* Event Program Image */}
      <section className="py-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-brand-beige/30 rounded-3xl p-6 md:p-10 border border-brand-primary/10 shadow-inner overflow-hidden">
            <div className="rounded-2xl overflow-hidden shadow-2xl group">
              <div className="relative w-full">
                <Image
                  src={locale === 'tr' ? '/Etkinlik-programi-2026.jpeg.webp' : '/2026-Program-EN.jpg.webp'}
                  alt={t('programAlt')}
                  width={1200}
                  height={800}
                  className="w-full h-auto transition-transform duration-700 group-hover:scale-[1.01]"
                  sizes="(max-width: 768px) 100vw, 1024px"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
