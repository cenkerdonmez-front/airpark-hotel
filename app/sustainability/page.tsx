import { useTranslations } from 'next-intl';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import Image from 'next/image';
export default function SustainabilityPage() {
  const t = useTranslations('sustainability');

  const initiatives = [
    {
      title: 'Energy Efficiency',
      description: 'We use renewable energy sources and energy-efficient systems throughout our property.',
      icon: '⚡',
    },
    {
      title: 'Water Conservation',
      description: 'Advanced water management systems help us minimize water waste and preserve this precious resource.',
      icon: '💧',
    },
    {
      title: 'Waste Reduction',
      description: 'Comprehensive recycling programs and composting initiatives reduce our environmental footprint.',
      icon: '♻️',
    },
    {
      title: 'Local Sourcing',
      description: 'We partner with local suppliers and farmers to support the community and reduce transportation emissions.',
      icon: '🌱',
    },
    {
      title: 'Green Spaces',
      description: 'Our gardens and green spaces provide natural habitats and improve air quality.',
      icon: '🌳',
    },
    {
      title: 'Sustainable Materials',
      description: 'We prioritize eco-friendly and sustainable materials in our construction and operations.',
      icon: '🏗️',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation  />
      
      {/* Hero Section */}
      <section className="relative min-h-[300px] bg-gradient-to-br from-brand-beige to-brand-beige/80">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center px-6">
            <p className="text-brand-primary/60 text-sm font-semibold tracking-widest uppercase mb-4">
              {t('subtitle')}
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-brand-primary mb-6">
              {t('title')}
            </h1>
            <p className="text-brand-primary/80 text-lg md:text-xl max-w-2xl mx-auto">
              {t('description')}
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-display text-4xl text-brand-primary text-center mb-12">
            Our Sustainability Initiatives
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-brand-beige/20 p-8 rounded-lg hover:bg-brand-beige/40 transition-colors"
              >
                <div className="text-5xl mb-4">{initiative.icon}</div>
                <h3 className="font-semibold text-xl text-brand-primary mb-3">
                  {initiative.title}
                </h3>
                <p className="text-brand-primary/70">
                  {initiative.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-10 bg-brand-beige/20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="font-display text-4xl text-brand-primary text-center mb-8">
            Our Commitment
          </h2>
          <div className="prose prose-lg mx-auto text-brand-primary/80">
            <p className="text-center mb-6">
              At AirPark Hotel, sustainability is not just a policy—it&apos;s a way of life. We are committed to 
              reducing our environmental impact while providing exceptional hospitality experiences.
            </p>
            <p className="text-center mb-6">
              We continuously evaluate and improve our practices, investing in innovative technologies and 
              partnering with like-minded organizations to create a more sustainable future for our guests, 
              team, and community.
            </p>
            <p className="text-center">
              Together with our guests and partners, we are building a legacy of environmental stewardship 
              that will benefit generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="aspect-[4/3] bg-brand-beige rounded-lg">
              <Image src={`/images/sustainability/initiatives.jpg`} alt={`Sustainability initiatives`} width={500} height={500} />
              </div>
            <div className="aspect-[4/3] bg-brand-beige rounded-lg">
              <Image src={`/images/sustainability/commitment.jpg`} alt={`Sustainability commitment`} width={500} height={500} />
              </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
