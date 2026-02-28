export type RoomSize = number | [number, number];

export interface Room {
  slug: string;
  key: string;
  images: string[];
  size: RoomSize;
  capacity: {
    adults: number;
    children: number;
  };
  beds: string;
  features: string[];
}

export const rooms: Room[] = [
  {
    slug: 'deluxe-twin-garden-view',
    key: 'deluxeTwinGardenView',
    images: [ '/rooms/1/5.jpg', '/rooms/1/1.jpg', '/rooms/1/2.jpg', '/rooms/1/3.jpg',],
    size: 30,
    capacity: {
      adults: 2,
      children: 0,
    },
    beds: '1 Double Bed',
    features: ['airConditioningHeating', 'tv43', 'minibar', 'teaCoffee', 'babyCrib', 'shower', 'slippers', 'hairdryer', 'wifi', 'parking', 'breakfast'],
  },
  {
    slug: 'deluxe-twin-lake-view',
    key: 'deluxeTwinLakeView',
    images: ['/rooms/1/6.jpg', '/rooms/1/1.jpg', '/rooms/1/2.jpg', '/rooms/1/3.jpg'],
    size: 30,
    capacity: {
      adults: 2,
      children: 0,
    },
    beds: '1 Double Bed',
    features: ['airConditioningHeating', 'tv43', 'minibar', 'teaCoffee', 'babyCrib', 'shower', 'slippers', 'hairdryer', 'wifi', 'parking', 'breakfast'],
  },
  {
    slug: 'deluxe-french-garden-view',
    key: 'deluxeFrenchGardenView',
    images: ['/rooms/2/1.jpg', '/rooms/2/2.jpg', '/rooms/2/3.jpg', '/rooms/2/4.jpg'],
    size: 30,
    capacity: {
      adults: 3,
      children: 0,
    },
    beds: '1 Double + 1 Single Bed',
    features: ['airConditioningHeating', 'tv43', 'minibar', 'teaCoffee', 'babyCrib', 'shower', 'slippers', 'hairdryer', 'wifi', 'parking', 'breakfast'],
  },
  {
    slug: 'deluxe-french-city',
    key: 'deluxeFrenchCity',
    images: ['/rooms/3/1.jpg', '/rooms/3/2.jpg', '/rooms/3/3.jpg', '/rooms/3/4.jpg', '/rooms/3/5.jpg', '/rooms/3/6.jpg'],
    size: [45, 60],
    capacity: {
      adults: 3,
      children: 0,
    },
    beds: '1 Double + 1 Single Bed',
    features: ['airConditioningHeating', 'tv43', 'minibar', 'teaCoffee', 'babyCrib', 'shower', 'slippers', 'hairdryer', 'wifi', 'parking', 'breakfast'],
  },
];

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find(room => room.slug === slug);
}

/** Format room size for display: single number or "45 or 60" for two options */
export function formatRoomSize(size: RoomSize): string {
  return Array.isArray(size) ? `${size[0]} - ${size[1]}` : String(size);
}
