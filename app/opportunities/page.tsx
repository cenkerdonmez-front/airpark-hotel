import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { useTranslations } from 'next-intl';

export default function OpportunitiesPage() {
  const t = useTranslations('opportunitiesPage');

  return (
    <div className="min-h-screen">
      <Navigation />

      <section className="bg-gradient-to-br from-brand-primary to-brand-primary/80 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-white/80 font-bold tracking-wider uppercase text-sm md:text-base mb-3 block">
            {t('subtitle')}
          </span>
          <h1 className="text-5xl font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-white/90 text-lg max-w-2xl">
            {t('description')}
          </p>
        </div>
      </section>

      <section className="py-16 px-6 !bg-brand-beige/30">
        <div className="max-w-4xl mx-auto space-y-6 text-brand-primary/90 leading-relaxed">
          <p>{t('paragraph1')}</p>
          <p>{t('paragraph2')}</p>
          <p>{t('paragraph3')}</p>
        </div>
      </section>

      <Footer />
    </div>
  );
}

