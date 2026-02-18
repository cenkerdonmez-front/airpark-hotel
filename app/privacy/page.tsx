import { useTranslations } from 'next-intl';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';

const SECTIONS = ['s1', 's2', 's3', 's4', 's5'] as const;

export default function PrivacyPage() {
  const t = useTranslations('privacyPage');

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative min-h-[200px] bg-gradient-to-br from-brand-beige to-brand-beige/80 flex items-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="font-display text-4xl md:text-5xl text-brand-primary">
            {t('title')}
          </h1>
          <p className="mt-2 text-brand-primary/60 text-sm">
            {t('lastUpdated')}: 2026
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
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
