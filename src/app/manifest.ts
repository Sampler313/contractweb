import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Great Mountain General Contracting Establishment',
    short_name: 'Mountain Rentals',
    description: 'Industrial services company in Saudi Arabia — Equipment Rental, Manpower Supply, Trading, Heavy Lifting, Transportation and Portacabin Services.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FAFAFA',
    theme_color: '#111111',
    icons: [
      {
        src: '/icon.png',
        sizes: 'any',
        type: 'image/png',
      },
    ],
  };
}
