import { useTranslations, useLocale } from 'next-intl';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { FileText } from 'lucide-react';
import Link from 'next/link';

const SUSTAINABILITY_PDF_BY_LOCALE: Record<string, string> = {
  tr: '/pdf/Airpark_Hotel_Hedefler_Ornek_TR.pdf',
  en: '/pdf/Airpark_Hotel_Goals_Sample.pdf',
};

export default function SustainabilityPage() {
  const t = useTranslations('sustainability');
  const locale = useLocale();
  const pdfPath = SUSTAINABILITY_PDF_BY_LOCALE[locale] ?? SUSTAINABILITY_PDF_BY_LOCALE.en;

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="relative min-h-[220px] bg-gradient-to-br from-brand-beige to-brand-beige/80 flex items-center">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-brand-primary/60 text-sm font-semibold tracking-widest uppercase mb-2">
            {t('subtitle')}
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-brand-primary">
            {t('title')}
          </h1>
        </div>
      </section>

      {/* Policy text */}
      <section className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto px-6">
          <div className="prose prose-lg text-stone-700 space-y-6">
            <p className="leading-relaxed">{t('policyParagraph1')}</p>
            <p className="leading-relaxed">{t('policyParagraph2')}</p>
          </div>
        </div>
      </section>

      {/* PDF section */}
      <section className="py-10 bg-brand-beige/20">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="text-xl font-semibold text-brand-primary mb-2">
            {t('pdfSectionTitle')}
          </h2>
          <p className="text-stone-600 text-sm mb-6">{t('pdfSectionDescription')}</p>
          <Link
            href={pdfPath}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-brand-primary/90 transition-colors"
          >
            <FileText className="w-5 h-5" />
            {t('openPdfButton')}
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
