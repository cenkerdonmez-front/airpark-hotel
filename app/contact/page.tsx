import { useTranslations, useLocale } from 'next-intl';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { MapPin, PlaneLanding, AlertTriangle } from 'lucide-react';
import Image from 'next/image';

const GOOGLE_MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/dir//Sivrihisar+Havac%C4%B1l%C4%B1k+Merkezi,+Ye%C5%9Filk%C3%B6y,+26600+Sivrihisar/Eski%C5%9Fehir';

export default function ContactPage() {
  const t = useTranslations('contactPage');
  const tFooter = useTranslations('footer');
  const locale = useLocale();

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

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

      {/* Havadan Ulaşım */}
      <section id="transport" className="mb-24 px-6 scroll-mt-24">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-brand-primary mb-8 flex items-center gap-4">
            <span className="w-1.5 h-8 bg-brand-primary rounded-full" />
            {t('planeSectionTitle')}
          </h2>

          <div className="bg-brand-beige/30 rounded-3xl p-6 md:p-10 border border-brand-primary/10 shadow-inner relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none group-hover:opacity-20 transition-opacity duration-700">
              <PlaneLanding className="w-40 h-40 text-brand-primary" />
            </div>

            <h3 className="text-xl font-black text-brand-primary mb-6 uppercase text-center tracking-widest relative z-10">
              {t('planeSectionSubtitle')}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-black text-brand-primary/60 tracking-[0.3em] uppercase mb-2">
                    {t('shmCoordinates')}
                  </h4>
                  <p className="text-2xl font-black text-brand-primary font-mono">{t('shmCoordN')}</p>
                  <p className="text-2xl font-black text-brand-primary font-mono">{t('shmCoordE')}</p>
                </div>
                <div>
                  <h4 className="text-[10px] font-black text-brand-primary/60 tracking-[0.3em] uppercase mb-2">
                    {t('tower')}
                  </h4>
                  <p className="text-3xl font-black text-brand-primary">{t('towerValue')}</p>
                </div>
              </div>
              <div className="space-y-8">
                <div>
                  <h4 className="text-[10px] font-black text-brand-primary/60 tracking-[0.3em] uppercase mb-2">
                    {t('elevation')}
                  </h4>
                  <p className="text-2xl font-black text-brand-primary">{t('elevationValue')}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-[10px] font-black text-brand-primary/60 tracking-[0.3em] uppercase mb-2">
                      {t('runwayHeadings')}
                    </h4>
                    <p className="text-2xl font-black text-brand-primary">{t('runwayHeadingsValue')}</p>
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-brand-primary/60 tracking-[0.3em] uppercase mb-2">
                      {t('runwayLength')}
                    </h4>
                    <p className="text-xl font-black text-brand-primary leading-tight">
                      {t('runwayLengthWithSurface')}
                      <span className="text-xs text-brand-primary/70 block uppercase mt-0.5">{t('runwaySurface')}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center border-t border-brand-primary/10 pt-10 relative z-10">
              <p className="text-brand-primary text-center text-sm md:text-base font-medium leading-relaxed max-w-2xl mb-4">
                {t('planeNotice')}
              </p>
              <p className="text-brand-primary/70 text-center text-sm md:text-base font-medium mb-8">
                {t('planeDisplayDirector')}{' '}
                <a href="mailto:aysan@mach.aero" className="text-brand-primary font-bold hover:underline">
                  aysan@mach.aero
                </a>
              </p>
              <a
                href="https://shm.aero/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-primary text-white font-black py-4 px-10 rounded-xl hover:opacity-90 transition-all hover:scale-105 active:scale-95 shadow-xl text-center uppercase tracking-widest text-sm"
              >
                {t('shmWebsite')}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Karadan Ulaşım */}
      <section className="mb-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-black text-brand-primary mb-8 flex items-center gap-4">
            <span className="w-1.5 h-8 bg-brand-primary rounded-full" />
            {t('landTransportTitle')}
          </h2>

          <div className="bg-brand-beige/30 rounded-3xl border border-brand-primary/10 shadow-inner mb-8">

            <div className="rounded-2xl overflow-hidden shadow-2xl group">
              <div className="relative w-full aspect-[4/3] bg-brand-beige/50">
                <Image
                  src={locale === 'tr' ? '/contact/land_turkish.jpeg' : '/contact/land_english.jpeg'}
                  alt={t('shmArrivalMapAlt')}
                  height={1200}
                  width={1200}
                  className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                 
                />
              </div>
            </div>
          </div>

          
        </div>
      </section>

      {/* Map - click to open Google Maps */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-2xl text-brand-primary mb-4 flex items-center gap-2">
            <MapPin className="w-6 h-6" />
            {t('mapTitle')}
          </h2>
          <a
            href={GOOGLE_MAPS_DIRECTIONS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="block rounded-2xl overflow-hidden border border-brand-primary/10 shadow-lg bg-brand-beige/20 group"
          >
            <div className="relative w-full aspect-[4/3] ">
              <Image
                src="/contact/map.png"
                alt={t('mapTitle')}
                height={1600}
                width={1600}
                className="object-cover scale-125 "
        
              />
            </div>
      
          </a>
        </div>
      </section>

      {/* Contact info at bottom of page */}
      <section id="contact" className="py-12 px-6 border-t border-brand-primary/10 scroll-mt-24">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-display text-xl text-brand-primary mb-4">
            {tFooter('contact.title')}
          </h2>
          <p className="text-brand-primary/80">
            {tFooter('contact.phone')} · {tFooter('contact.email')}
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
