import { useTranslations, useLocale } from 'next-intl';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { MapPin, Phone, Mail } from 'lucide-react';
import Image from 'next/image';

const GOOGLE_MAPS_DIRECTIONS_URL =
  'https://www.google.com/maps/dir//Sivrihisar+Havac%C4%B1l%C4%B1k+Merkezi,+Ye%C5%9Filk%C3%B6y,+26600+Sivrihisar/Eski%C5%9Fehir';

export default function ContactPage() {
  const t = useTranslations('contactPage');
  const tFooter = useTranslations('footer');
  const locale = useLocale();

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
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
      <section className="py-12 px-6 !bg-brand-beige/30">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-brand-primary/10 shadow-lg bg-brand-beige/20">
            <div className="grid md:grid-cols-4 gap-0">
              <div className="relative aspect-[4/3]  bg-brand-beige/30 col-span-3">
              <Image
                  src={locale === 'tr' ? '/contact/land_turkish.jpeg' : '/contact/land_english.jpeg'}
                  alt={t('shmArrivalMapAlt')}
                  height={1200}
                  width={1200}
                  className="object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                 
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-start col-span-1 bg-brand-primary/10">
                <h4 className="font-display text-lg font-semibold text-brand-primary tracking-wide mb-4">
                  {t('planeSectionTitle')}
                </h4>
                <div className="space-y-2 font-display  text-brand-primary">
                  <p><span className="font-semibold">{t('shmCoordinates')}</span><br />{t('shmCoordinatesValue')}</p>
                  <p><span className="font-semibold">{t('tower')}</span><br />{t('towerValue')}</p>
                  <p><span className="font-semibold">{t('runwayHeadings')}</span><br />{t('runwayHeadingsValue')}</p>
                  <p><span className="font-semibold">{t('runwayLength')}</span><br />{t('runwayLengthValue')}</p>
                  <p><span className="font-semibold">{t('elevation')}</span><br />{t('elevationValue')}</p>
                  <p><span className="font-semibold">{t('operatingHours')}</span><br /><span className="whitespace-pre-line">{t('operatingHoursValue')}</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
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
            <div className="relative w-full ">
              <Image
                src="/contact/map.jpeg"
                alt={t('mapTitle')}
                height={1600}
                width={1600}
                className="object-contain  "
        
              />
            </div>
      
          </a>
        </div>
      </section>
      {/* <section className="mb-24 px-6">
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
      </section> */}
      {/* Havadan Ulaşım */}
      {/* <section id="transport" className="mb-24 px-6 scroll-mt-24">
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
      </section> */}


      {/* Contact info at bottom of page */}
      <section id="contact" className="py-20 md:py-28 px-6 border-t border-brand-primary/10 scroll-mt-24 bg-gradient-to-b from-brand-beige/30 to-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl text-brand-primary text-center mb-12 md:mb-16">
            {tFooter('contact.title')}
          </h2>
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            <div className="group flex flex-col items-center justify-center p-8 md:p-10 rounded-2xl bg-white border-2 border-brand-primary/10 shadow-md hover:shadow-xl hover:border-brand-primary/25 transition-all duration-300">
              <span className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-brand-primary/10 text-brand-primary mb-4 group-hover:bg-brand-primary/20 transition-colors">
                <Phone className="w-7 h-7 md:w-8 md:h-8" />
              </span>
              <span className="text-sm font-semibold text-brand-primary/70 uppercase tracking-wider mb-2">
                Phone
              </span>
              <span className="font-display text-xl md:text-2xl text-brand-primary text-center font-semibold">
                {tFooter('contact.phone')}
              </span>
            </div>
            <div className="group flex flex-col items-center justify-center p-8 md:p-10 rounded-2xl bg-white border-2 border-brand-primary/10 shadow-md hover:shadow-xl hover:border-brand-primary/25 transition-all duration-300">
              <span className="flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full bg-brand-primary/10 text-brand-primary mb-4 group-hover:bg-brand-primary/20 transition-colors">
                <Mail className="w-7 h-7 md:w-8 md:h-8" />
              </span>
              <span className="text-sm font-semibold text-brand-primary/70 uppercase tracking-wider mb-2">
                Email
              </span>
              <span className="font-display text-lg md:text-xl text-brand-primary text-center font-semibold break-all">
                {tFooter('contact.email')}
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
