'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export function Hero() {
  const t = useTranslations('hero');

  return (
    <header className="relative h-[60vh] overflow-hidden">
      <Image
        alt="Luxury Hotel Exterior"
        className="absolute inset-0 w-full h-full object-cover"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq5o5hlyFMxwea2eoGJ9-BWH9vg-De2YHqT7aia55PjvpXcMCSHCgCnxHVRXZvMOukNmQr7813OY26IBF9cyxEYlw31DLcD31ZUljCOMb9Opn1TKUPxf5pabGrB8L4VRQPvEyN34hu0RHoip7s311tsh0eoLZumVvNuiB3ko-MYkCcNksuLkxQUWYkuUzIA5oyRBYEfzhbuvTwtywMLGpFKwTVHt_hsannf8ExXYNpluhSIdc-SE5tFMoCA1Kz49GYSSaStitRuWU"
        fill
        priority
      />
      <div className="absolute inset-0 hero-overlay flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-white text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          {t('title')}
        </h2>
        <Link href="/booking">
          <Button className="bg-white text-[#015C54] hover:bg-white/90 px-8 py-3 rounded-sm text-xs font-bold uppercase tracking-widest">
            {t('cta')}
          </Button>
        </Link>
      </div>
    </header>
  );
}
