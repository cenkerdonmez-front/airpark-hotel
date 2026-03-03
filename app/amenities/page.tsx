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

      <section className="py-12 md:py-16 !bg-brand-beige/30">
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
