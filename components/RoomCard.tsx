'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface RoomCardProps {
  slug: string;
  name: string;
  category: string;
  description: string;
  image: string;
  size: number;
}

export function RoomCard({ slug, name, category, description, image, size }: RoomCardProps) {
  const t = useTranslations();

  return (
    <div className="bg-white border border-brand-primary/5 overflow-hidden flex flex-col">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
          src={image}
          fill
        />
        <div className="absolute top-3 right-3 bg-brand-primary/90 text-white px-2 py-1 text-[10px] font-bold">
          {size} {t('common.squareMeters')}
        </div>
      </div>
      <div className="p-5 flex-grow flex flex-col">
        <span className="text-brand-primary/50 font-bold tracking-wider uppercase text-[9px] mb-1">
          {category}
        </span>
        <h3 className="text-lg font-bold text-brand-primary mb-2">{name}</h3>
        <p className="text-gray-600 text-sm leading-snug mb-4 line-clamp-3">
          {description}
        </p>
        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
          <Link
            className="text-brand-primary font-bold text-[10px] tracking-wider uppercase inline-flex items-center hover:opacity-80 transition-opacity"
            href={`/rooms/${slug}`}
          >
            {t('rooms.detailsButton')} <ArrowRight className="ml-1 w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
