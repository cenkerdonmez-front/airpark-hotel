import { useTranslations } from 'next-intl';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Zap, Dog, Shirt, UtensilsCrossed } from 'lucide-react';

const AMENITY_KEYS = ['evCharging', 'petFriendly', 'laundryIron', 'openBreakfast'] as const;
const AMENITY_ICONS = {
  evCharging: Zap,
  petFriendly: Dog,
  laundryIron: Shirt,
  openBreakfast: UtensilsCrossed,
};

export default function AmenitiesPage() {
  const t = useTranslations('amenitiesPage');

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <section className="relative min-h-[220px] bg-gradient-to-br from-brand-beige to-brand-beige/80 flex items-center">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-brand-primary/60 text-sm font-semibold tracking-widest uppercase mb-2">
            {t('subtitle')}
          </p>
          <h1 className="font-display text-4xl md:text-6xl text-brand-primary">
            {t('title')}
          </h1>
          <p className="mt-4 text-brand-primary/80 max-w-xl mx-auto">
            {t('description')}
          </p>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 gap-8">
            {AMENITY_KEYS.map((key) => {
              const Icon = AMENITY_ICONS[key];
              return (
                <div
                  key={key}
                  className="flex gap-5 p-6 rounded-2xl bg-brand-beige/20 border border-brand-primary/5 hover:bg-brand-beige/30 transition-colors"
                >
                  <div className="shrink-0 w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-brand-primary" />
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold text-brand-primary mb-2">
                      {t(`${key}.title`)}
                    </h2>
                    <p className="text-stone-600 leading-relaxed text-sm">
                      {t(`${key}.description`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
