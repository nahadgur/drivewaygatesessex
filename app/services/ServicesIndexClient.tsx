// app/services/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { services } from '@/data/services';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { LeadFormModal } from '@/components/LeadFormModal';

export default function ServicesIndexPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="trusted-local flex-grow">
        <Hero
          title="Driveway Gate Types for Essex Homes"
          subtitle="From electric sliding gates to traditional hardwood swing gates, find the right option for your property and get matched with a specialist Essex installer."
          image="/images/gates/gate-aluminium-sliding-modern-dark-brick-2.png"
          showCta={false}
          showTrust={false}
        />
        <section className="section-padding">
          <div className="container-width">
            <div className="max-w-2xl mb-12">
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-600 mb-3">Specialists for every entrance</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Compare gate types before you compare installers</h2>
              <p className="text-gray-600 leading-7">Each option below explains where the gate works best, what to expect, and which local specialists can install it.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(service => (
                <Link key={service.id} href={`/services/${service.slug}/`} className="group bg-white rounded-lg border border-brand-100 border-b-4 hover:border-b-accent-400 hover:shadow-xl transition-all overflow-hidden">
                  <div className="h-56 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="flex flex-col p-7 min-h-64">
                    <h2 className="text-xl font-display font-bold text-gray-900 group-hover:text-brand-600 mb-2">{service.title}</h2>
                    <p className="text-sm text-gray-600 mb-4 flex-grow">{service.description}</p>
                    <span className="text-brand-700 font-bold text-sm flex items-center mt-auto pt-4 border-t border-brand-100">
                      Explore this gate type <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
