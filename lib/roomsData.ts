export interface Room {
  slug: string;
  key: string;
  images: string[];
  size: number;
  capacity: {
    adults: number;
    children: number;
  };
  beds: string;
  view: string;
  features: string[];
}

export const rooms: Room[] = [
  {
    slug: 'deluxe-twin-garden',
    key: 'deluxeTwinGarden',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDqf75sK-cb6jo5KtIYM6g0zFLmSWed-L0x36A1nvpGiSHMlR3swSjCtSC0IRmEdoUPasRlWH90GOtKZqUw9lVUrsnktUwhwzvfbJ2DAOcPoYK5jIpjHQaveA6YesvqJzaQz2LuNNLqzvtSk4JEMmZwyc24WmhEouWDgebW9DNcX1yIijfyoT948C2uXqsXjxbXBNu1YfgPnkHxvNbjp_USZyyrw6cTOYjLe0TtQnKG2QH8cLCjrrLS9JnHByG7-igZqIApab3erfE',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDUn51CCuRh-eC4ypqG-W3HMEy3ygBUhpnwTsF2a1OLFSU0Ps1JEQ0AfKlPz4K1oW5M4CgS6akDcOYnP4Cp3iGAmnEbCDExv7vN-cHkU_aV0QkpADfu6Vm_jXvHHSnUN6R2HuCtIi0ksaANHyCfl-zEFIfa9544Mmlu6tDpqabB-vMQIP-kW0tig-b2KFKjg15PMT-xZTImbkyGeMkCes0Bo3GEq7GZQilzaM2c3fDeJkDWai5ds9z-sEXLfld9_XeHUYyPrJkX2uc',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA99bJCgrzHnt8f7pdiulkZGRaxcYxfKPibvqMcQSSf92lzXsnsPquKMTdYPD1hq89T-PIBR5X0xw_MLJ3PjFpiz9YU66OByCgLlfJec8FLI7Ei8kwfNKSFPNF8kJjjRhKMXRfH2ScaSkKc2GWRNv9Mk5eoTKIkN6X8524g34rGOjC1g2hYSOWYFmX4fVdCzO1v4BeZ329kcVfk6h419GwFdPeNePyZfwB6jG_sCxLzKiAgLGgzSE9J_5nJNg4kp0wv_qAqSR_2_Zs',
    ],
    size: 35,
    capacity: {
      adults: 2,
      children: 1,
    },
    beds: '2 Twin Beds',
    view: 'Garden View',
    features: ['wifi', 'minibar', 'safe', 'airConditioning', 'tv', 'hairdryer', 'bathrobe', 'slippers'],
  },
  {
    slug: 'deluxe-french-garden',
    key: 'deluxeFrenchGarden',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDUn51CCuRh-eC4ypqG-W3HMEy3ygBUhpnwTsF2a1OLFSU0Ps1JEQ0AfKlPz4K1oW5M4CgS6akDcOYnP4Cp3iGAmnEbCDExv7vN-cHkU_aV0QkpADfu6Vm_jXvHHSnUN6R2HuCtIi0ksaANHyCfl-zEFIfa9544Mmlu6tDpqabB-vMQIP-kW0tig-b2KFKjg15PMT-xZTImbkyGeMkCes0Bo3GEq7GZQilzaM2c3fDeJkDWai5ds9z-sEXLfld9_XeHUYyPrJkX2uc',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDqf75sK-cb6jo5KtIYM6g0zFLmSWed-L0x36A1nvpGiSHMlR3swSjCtSC0IRmEdoUPasRlWH90GOtKZqUw9lVUrsnktUwhwzvfbJ2DAOcPoYK5jIpjHQaveA6YesvqJzaQz2LuNNLqzvtSk4JEMmZwyc24WmhEouWDgebW9DNcX1yIijfyoT948C2uXqsXjxbXBNu1YfgPnkHxvNbjp_USZyyrw6cTOYjLe0TtQnKG2QH8cLCjrrLS9JnHByG7-igZqIApab3erfE',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA99bJCgrzHnt8f7pdiulkZGRaxcYxfKPibvqMcQSSf92lzXsnsPquKMTdYPD1hq89T-PIBR5X0xw_MLJ3PjFpiz9YU66OByCgLlfJec8FLI7Ei8kwfNKSFPNF8kJjjRhKMXRfH2ScaSkKc2GWRNv9Mk5eoTKIkN6X8524g34rGOjC1g2hYSOWYFmX4fVdCzO1v4BeZ329kcVfk6h419GwFdPeNePyZfwB6jG_sCxLzKiAgLGgzSE9J_5nJNg4kp0wv_qAqSR_2_Zs',
    ],
    size: 35,
    capacity: {
      adults: 2,
      children: 1,
    },
    beds: '1 French Bed',
    view: 'Garden View',
    features: ['wifi', 'minibar', 'safe', 'airConditioning', 'tv', 'hairdryer', 'bathrobe', 'slippers'],
  },
  {
    slug: 'deluxe-french-city',
    key: 'deluxeFrenchCity',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA99bJCgrzHnt8f7pdiulkZGRaxcYxfKPibvqMcQSSf92lzXsnsPquKMTdYPD1hq89T-PIBR5X0xw_MLJ3PjFpiz9YU66OByCgLlfJec8FLI7Ei8kwfNKSFPNF8kJjjRhKMXRfH2ScaSkKc2GWRNv9Mk5eoTKIkN6X8524g34rGOjC1g2hYSOWYFmX4fVdCzO1v4BeZ329kcVfk6h419GwFdPeNePyZfwB6jG_sCxLzKiAgLGgzSE9J_5nJNg4kp0wv_qAqSR_2_Zs',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDqf75sK-cb6jo5KtIYM6g0zFLmSWed-L0x36A1nvpGiSHMlR3swSjCtSC0IRmEdoUPasRlWH90GOtKZqUw9lVUrsnktUwhwzvfbJ2DAOcPoYK5jIpjHQaveA6YesvqJzaQz2LuNNLqzvtSk4JEMmZwyc24WmhEouWDgebW9DNcX1yIijfyoT948C2uXqsXjxbXBNu1YfgPnkHxvNbjp_USZyyrw6cTOYjLe0TtQnKG2QH8cLCjrrLS9JnHByG7-igZqIApab3erfE',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDUn51CCuRh-eC4ypqG-W3HMEy3ygBUhpnwTsF2a1OLFSU0Ps1JEQ0AfKlPz4K1oW5M4CgS6akDcOYnP4Cp3iGAmnEbCDExv7vN-cHkU_aV0QkpADfu6Vm_jXvHHSnUN6R2HuCtIi0ksaANHyCfl-zEFIfa9544Mmlu6tDpqabB-vMQIP-kW0tig-b2KFKjg15PMT-xZTImbkyGeMkCes0Bo3GEq7GZQilzaM2c3fDeJkDWai5ds9z-sEXLfld9_XeHUYyPrJkX2uc',
    ],
    size: 35,
    capacity: {
      adults: 2,
      children: 1,
    },
    beds: '1 French Bed',
    view: 'City View',
    features: ['wifi', 'minibar', 'safe', 'airConditioning', 'tv', 'hairdryer', 'bathrobe', 'slippers'],
  },
];

export function getRoomBySlug(slug: string): Room | undefined {
  return rooms.find(room => room.slug === slug);
}
