'use client';

import { useTranslations } from 'next-intl';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import { rooms } from '@/lib/roomsData';

export default function BookingPage() {
  const t = useTranslations('booking');
  const tRooms = useTranslations('rooms');
  const tFooter = useTranslations('footer');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    checkIn: '',
    checkOut: '',
    roomType: '',
    adults: '1',
    children: '0',
    specialRequests: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic will be implemented later
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand-primary to-brand-primary/80 text-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-white/80 font-bold tracking-wider uppercase text-sm md:text-base mb-3 block">
            {t('subtitle')}
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            {t('title')}
          </h1>
          <p className="text-white/90 text-lg max-w-2xl">
            {t('description')}
          </p>
        </div>
      </section>

      {/* Form and Contact Section */}
      <section className="py-10 px-6 !bg-brand-beige/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Booking Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-brand-primary mb-2">
                      {t('form.firstName')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-brand-primary/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-brand-primary mb-2">
                      {t('form.lastName')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-brand-primary/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
                    />
                  </div>
                </div>

                {/* Contact Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-brand-primary mb-2">
                      {t('form.email')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-brand-primary/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-brand-primary mb-2">
                      {t('form.phone')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-brand-primary/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
                    />
                  </div>
                </div>

                {/* Date Fields */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="checkIn" className="block text-sm font-semibold text-brand-primary mb-2">
                      {t('form.checkIn')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="checkIn"
                      name="checkIn"
                      required
                      value={formData.checkIn}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-brand-primary/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="checkOut" className="block text-sm font-semibold text-brand-primary mb-2">
                      {t('form.checkOut')} <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="date"
                      id="checkOut"
                      name="checkOut"
                      required
                      value={formData.checkOut}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-brand-primary/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
                    />
                  </div>
                </div>

                {/* Room Type */}
                <div>
                  <label htmlFor="roomType" className="block text-sm font-semibold text-brand-primary mb-2">
                    {t('form.roomType')} <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="roomType"
                    name="roomType"
                    required
                    value={formData.roomType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-brand-primary/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
                  >
                    <option value="">{t('form.selectRoom')}</option>
                    {rooms.map((room) => (
                      <option key={room.slug} value={room.slug}>{tRooms(`${room.key}.name`)}</option>
                    ))}
                  </select>
                </div>

                {/* Guest Count */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="adults" className="block text-sm font-semibold text-brand-primary mb-2">
                      {t('form.adults')} <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="adults"
                      name="adults"
                      required
                      value={formData.adults}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-brand-primary/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
                    >
                      {[1, 2, 3, 4].map((num) => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="children" className="block text-sm font-semibold text-brand-primary mb-2">
                      {t('form.children')}
                    </label>
                    <select
                      id="children"
                      name="children"
                      value={formData.children}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-brand-primary/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50"
                    >
                      {[0, 1, 2, 3, 4].map((num) => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label htmlFor="specialRequests" className="block text-sm font-semibold text-brand-primary mb-2">
                    {t('form.specialRequests')}
                  </label>
                  <textarea
                    id="specialRequests"
                    name="specialRequests"
                    rows={4}
                    value={formData.specialRequests}
                    onChange={handleChange}
                    placeholder={t('form.specialRequestsPlaceholder')}
                    className="w-full px-4 py-3 border border-brand-primary/20 rounded-sm focus:outline-none focus:ring-2 focus:ring-brand-primary/50 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <Button 
                  type="submit"
                  className="w-full bg-brand-primary hover:bg-brand-primary/90 text-white py-4 text-base font-bold uppercase tracking-wider"
                >
                  {t('form.submit')}
                </Button>
              </form>
            </div>

            {/* Contact Information Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-brand-beige/20 p-8 rounded-lg sticky top-24">
                <h2 className="font-display text-3xl text-brand-primary mb-4">
                  {t('contact.title')}
                </h2>
                <p className="text-brand-primary/70 mb-8 text-sm">
                  {t('contact.description')}
                </p>

                <div className="space-y-6">
                  {/* Phone */}
                  <div>
                    <h3 className="text-sm font-bold text-brand-primary/60 uppercase tracking-wider mb-2">
                      {t('contact.phone')}
                    </h3>
                    <a 
                      href={`tel:${tFooter('contact.phone').replace(/\s/g, '')}`} 
                      className="text-brand-primary hover:text-brand-primary/80 transition-colors"
                    >
                      {tFooter('contact.phone')}
                    </a>
                  </div>

                  {/* Email */}
                  <div>
                    <h3 className="text-sm font-bold text-brand-primary/60 uppercase tracking-wider mb-2">
                      {t('contact.email')}
                    </h3>
                    <a 
                      href="mailto:info@airparkhotel.com" 
                      className="text-brand-primary hover:text-brand-primary/80 transition-colors break-all"
                    >
                      {tFooter('contact.email')}
                    </a>
                  </div>

                  {/* Address */}
                  <div>
                    <h3 className="text-sm font-bold text-brand-primary/60 uppercase tracking-wider mb-2">
                      {t('contact.address')}
                    </h3>
                    <p className="text-brand-primary/80 text-sm whitespace-pre-line">
                      {tFooter('address.content')}
                    </p>
                  </div>

                  {/* Hours */}
                  <div>
                    <h3 className="text-sm font-bold text-brand-primary/60 uppercase tracking-wider mb-2">
                      {t('contact.hours')}
                    </h3>
                    <p className="text-brand-primary/80">
                      {t('contact.hoursInfo')}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
