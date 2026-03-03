import { useTranslations } from 'next-intl';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const SECTIONS = ['s1', 's2', 's3', 's4', 's5'] as const;

export default function SalesPage() {
  const t = useTranslations('salesPage');

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-to-br from-brand-primary to-brand-primary/80 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">
            {t('title')}
          </h1>
          <p className="text-white/80 text-sm">
            {t('lastUpdated')}: 2026
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16 !bg-brand-beige/30">
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-stone-700 leading-relaxed mb-10">{t('intro')}</p>
          <div className="space-y-8">
            {SECTIONS.map((key) => (
              <div key={key}>
                <h2 className="text-lg font-semibold text-brand-primary mb-2">
                  {t(`${key}Title`)}
                </h2>
                <p className="text-stone-600 leading-relaxed">{t(`${key}Content`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
