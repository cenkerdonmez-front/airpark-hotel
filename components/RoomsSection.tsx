'use client';

import { useTranslations } from 'next-intl';
import { RoomCard } from './RoomCard';
import Link from 'next/link';
import { rooms } from '@/lib/roomsData';

export function RoomsSection() {
  const t = useTranslations('rooms');

  return (
    <section className="py-16" id="rooms">
      <div className="max-w-full mx-auto px-6 mb-8 flex items-baseline justify-between border-b border-brand-primary/10 pb-4">
        <div>
          <h2 className="text-2xl font-extrabold text-brand-primary tracking-tight">
            {t('title')}
          </h2>
          <span className="text-brand-primary/60 font-semibold tracking-wider uppercase text-[10px]">
            {t('subtitle')}
          </span>
        </div>
        <Link className="text-[11px] font-bold text-brand-primary uppercase underline hover:opacity-80 transition-opacity" href="/rooms">
          {t('viewAll')}
        </Link>
      </div>
      <div className="max-w-full mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {rooms.map((room) => (
            <RoomCard
              key={room.key}
              slug={room.slug}
              name={t(`${room.key}.name`)}
              description={t(`${room.key}.description`)}
              image={room.images[0]}
              size={room.size}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
