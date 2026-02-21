'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
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
{/* 
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
          </div> */}
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[9px] font-bold uppercase tracking-widest text-white/40 gap-4">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link className="hover:text-white transition-colors" href="/sustainability">
              {t('legal.sustainability')}
            </Link>
            <Link className="hover:text-white transition-colors" href="/privacy">
              {t('legal.privacy')}
            </Link>
            <Link className="hover:text-white transition-colors" href="/sales">
              {t('legal.sales')}
            </Link>
            <Link className="hover:text-white transition-colors" href="/disclosure">
              {t('legal.disclosure')}
            </Link>
            <Link className="hover:text-white transition-colors" href="/amenities">
              {t('legal.amenities')}
            </Link>
            <Link className="hover:text-white transition-colors" href="/cancellation">
              {t('legal.cancellation')}
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
