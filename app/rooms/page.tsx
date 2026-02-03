import { getTranslations } from 'next-intl/server';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { RoomCard } from '@/components/RoomCard';
import { rooms } from '@/lib/roomsData';

export default async function RoomsPage() {
  const t = await getTranslations('rooms');

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-brand-primary to-brand-primary/80 text-white py-20">
          <div className="max-w-6xl mx-auto px-6">
            <span className="text-white/80 font-bold tracking-wider uppercase text-xs mb-3 block">
              {t('subtitle')}
            </span>
            <h1 className="text-5xl font-bold mb-4">
              {t('title')}
            </h1>
            <p className="text-white/90 text-lg max-w-2xl">
              Discover our selection of carefully designed rooms and suites, each offering unique views and premium comfort for an unforgettable stay.
            </p>
          </div>
        </div>

        {/* Rooms Grid */}
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rooms.map((room) => (
              <RoomCard
                key={room.key}
                slug={room.slug}
                name={t(`${room.key}.name`)}
                category={t(`${room.key}.category`)}
                description={t(`${room.key}.description`)}
                image={room.images[0]}
                size={room.size}
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
