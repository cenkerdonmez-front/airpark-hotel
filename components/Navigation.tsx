'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { LocaleSwitcher } from '@/components/LocaleSwitcher';
import Link from 'next/link';
import Image from 'next/image';

interface NavigationProps {
  variant?: 'white' | 'beige';
}

export function Navigation({ variant = 'white' }: NavigationProps) {
  const t = useTranslations();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const bgColor = variant === 'beige' ? 'bg-[#E8DDD3]' : 'bg-white';

  return (
    <>
      <nav className={`sticky top-0 w-full z-50 ${bgColor} border-b border-brand-primary/10`}>
        <div className="max-w-full mx-auto px-6 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-12">
            <Link className="flex items-center" href="/">
              <Image 
                src="/AirParkHotel_Logo_RGB.png" 
                alt="AirPark Hotel Logo" 
                width={180} 
                height={40}
                priority
                className="h-8 w-auto"
              />
            </Link>
            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-6 text-[11px] font-bold uppercase tracking-wider text-brand-primary/80">
              <Link className="hover:text-brand-primary transition-colors" href="/rooms">
                {t('nav.rooms')}
              </Link>
              <Link className="hover:text-brand-primary transition-colors" href="/restaurant">
                {t('nav.restaurant')}
              </Link>
              <Link className="hover:text-brand-primary transition-colors" href="/spa">
                {t('nav.spa')}
              </Link>
              <Link className="hover:text-brand-primary transition-colors" href="/wedding">
                {t('nav.wedding')}
              </Link>
              <Link className="hover:text-brand-primary transition-colors" href="/meeting">
                {t('nav.meeting')}
              </Link>
              <Link className="hover:text-brand-primary transition-colors" href="/sustainability">
                {t('nav.sustainability')}
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <LocaleSwitcher />
            <Link href="/booking">
              <Button 
                className="hidden lg:inline-flex bg-brand-primary hover:bg-brand-primary/90 text-white px-5 py-2 rounded-sm text-[11px] font-bold uppercase tracking-wider"
              >
                {t('nav.reservation')}
              </Button>
            </Link>
            {/* Hamburger Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-brand-primary focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-80 ${bgColor} z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Mobile Menu Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-brand-primary/10">
            <span className="text-sm font-bold uppercase tracking-wider text-brand-primary">
              Menu
            </span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 text-brand-primary focus:outline-none"
              aria-label="Close menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Menu Links */}
          <div className="flex flex-col px-6 py-8 space-y-6 text-sm font-bold uppercase tracking-wider text-brand-primary/80">
            <Link 
              className="hover:text-brand-primary transition-colors py-2" 
              href="/rooms"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.rooms')}
            </Link>
            <Link 
              className="hover:text-brand-primary transition-colors py-2" 
              href="/restaurant"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.restaurant')}
            </Link>
            <Link 
              className="hover:text-brand-primary transition-colors py-2" 
              href="/spa"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.spa')}
            </Link>
            <Link 
              className="hover:text-brand-primary transition-colors py-2" 
              href="/wedding"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.wedding')}
            </Link>
            <Link 
              className="hover:text-brand-primary transition-colors py-2" 
              href="/meeting"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.meeting')}
            </Link>
            <Link 
              className="hover:text-brand-primary transition-colors py-2" 
              href="/sustainability"
              onClick={() => setIsMenuOpen(false)}
            >
              {t('nav.sustainability')}
            </Link>
          </div>

          {/* Mobile Menu Footer with Reservation Button */}
          <div className="mt-auto px-6 py-6 border-t border-brand-primary/10">
            <Link href="/booking" className="block">
              <Button 
                className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white px-5 py-3 rounded-sm text-[11px] font-bold uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                {t('nav.reservation')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
