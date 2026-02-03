'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';
import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
export function Footer() {
  const t = useTranslations('footer');

  return (
    <footer className="bg-brand-primary text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 pb-12 border-b border-white/10">
          <h4 className="text-xl font-bold mb-6 md:mb-0">
            {t('cta.title')}
          </h4>
          <Link href="/booking">
            <Button className="bg-white text-brand-primary hover:bg-white/90 px-10 py-3 text-xs font-bold uppercase tracking-widest rounded-sm">
              {t('cta.button')}
            </Button>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-white/50">
              {t('address.title')}
            </h5>
            <p className="text-sm font-normal text-white/80 whitespace-pre-line">
              {t('address.content')}
            </p>
          </div>
          
          <div className="space-y-4">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-white/50">
              {t('contact.title')}
            </h5>
            <p className="text-sm font-normal text-white/80">
              {t('contact.phone')}<br/>
              {t('contact.email')}
            </p>
          </div>
          
          <div className="space-y-4">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-white/50">
              {t('social.title')}
            </h5>
            <div className="flex space-x-4">
              <Link className="hover:opacity-70 transition-opacity" href="#">
                <Facebook className="w-4 h-4 brightness-0 invert" />
              </Link>
              <Link className="hover:opacity-70 transition-opacity" href="#">
                <Twitter className="w-4 h-4 brightness-0 invert" />
              </Link>
              <Link className="hover:opacity-70 transition-opacity" href="#">
                <Instagram className="w-4 h-4 brightness-0 invert" />
              </Link>
            </div>
          </div>
          
        {/*   <div className="space-y-4">
            <h5 className="text-[10px] font-bold uppercase tracking-widest text-white/50">
              {t('app.title')}
            </h5>
            <div className="flex space-x-2">
              <Image
                alt="App Store"
                className="h-6 w-auto brightness-0 invert"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqlSSrdwaSY4kjgn8NQAwmrAH48-ELk2RJE0sUAmNOzRvOcfDqDxjQzi-C9rYYRFlZ8DrgTDzeLC3Gve5sQ8J05vedlkfTCDYArO6ilMbfuettfz7UE-tKDES8A0nG0vegy0_IEBAUBQN2t0yXA69gH4O9qQe1dwY1nWKPCMWucCcy2t1y2UUYg7xaGEGMOcEp8HJXcdMBSyc_pmy_p_Fn4jTrDK1Gq2HV17zZbM-z8XMPnU4aJFBevRgSpkU9j8y1ErRxdJ7cmRQ"
                width={80}
                height={24}
              />
              <Image
                alt="Google Play"
                className="h-6 w-auto brightness-0 invert"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDv8VUimYG4QVNW3p7htRXNyn86tJQE0lLtMj2o75EhwelcVgQbTRmbjJmFw8h1z1fea8xeL9f8uMYAvohjzfCk_C0ClUSZnJWL11-WkjLb9B2uG0Ykt-0b5S7xNwseJ42TXDLH7iarl3M0ARftAOjyKQsw-enEN7oHlMWgFo8Glk-Yte7fwyQgJ9UJhhQ7LUg-pP7rVSkavLIKiBneEYMTN5A2J8nEIz00IRqNDKZ4uerHRSBAxbFnJivYHO2DU2EXWZnGTEnnr2I"
                width={80}
                height={24}
              />
            </div>
          </div> */}
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] font-bold uppercase tracking-widest text-white/40 gap-4">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link className="hover:text-white transition-colors" href="#">
              {t('legal.privacy')}
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              {t('legal.cookies')}
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              {t('legal.sales')}
            </Link>
            <Link className="hover:text-white transition-colors" href="#">
              {t('legal.disclosure')}
            </Link>
          </div>
          <div className="text-center md:text-right">
            {t('legal.copyright')}
          </div>
        </div>
      </div>
    </footer>
  );
}
