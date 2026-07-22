// app/location/page.tsx
'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { MapPin, Search } from 'lucide-react';
import { LOCATIONS, toSlug } from '@/data/locations';
import { FAQS_LOCATION } from '@/data/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { FAQ } from '@/components/FAQ';
import { LeadFormModal } from '@/components/LeadFormModal';

export default function LocationIndexPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLocations = useMemo(() => {
    if (!searchQuery) return LOCATIONS;
    const result: Record<string, string[]> = {};
    Object.entries(LOCATIONS).forEach(([region, cities]) => {
      const filtered = cities.filter(city => city.toLowerCase().includes(searchQuery.toLowerCase()));
      if (filtered.length > 0) result[region] = filtered;
    });
    return result;
  }, [searchQuery]);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="trusted-local flex-grow">
        <Hero
          title="Find Gate Installers in Your Area"
          subtitle="Access Essex's most trusted network of driveway gate specialists. Vetted for experience, verified for quality."
          image="/images/gates/gate-wrought-iron-open-manor-spring-gardens.png"
          onOpenModal={() => setIsModalOpen(true)}
        />

        <section className="section-padding bg-[#F8F5ED]">
          <div className="container-width">
            <div className="grid lg:grid-cols-[0.7fr_1.3fr] gap-10 lg:gap-16 items-start mb-14">
              <div>
                <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-600 mb-3">120 Essex areas covered</p>
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Find your nearest gate specialists</h2>
                <p className="text-gray-600 leading-7">Search by town, village or district. Every listed area is covered by vetted installers offering free site surveys.</p>
              </div>
              <div className="bg-brand-950 p-6 md:p-8 rounded-lg border-l-4 border-accent-400">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-brand-700 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search your town or area..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full min-h-14 pl-12 pr-4 py-4 rounded-md border border-white bg-white text-brand-950 text-base focus:outline-none focus:ring-2 focus:ring-accent-400 focus:border-transparent transition"
                />
              </div>
              <p className="text-xs text-brand-200 mt-3">Try “Chelmsford”, “Epping” or your nearest town.</p>
              </div>
            </div>

            <div className="space-y-12">
              {Object.entries(filteredLocations).map(([region, cities]) => (
                <div key={region}>
                  <h2 className="text-2xl font-display font-extrabold text-brand-950 mb-5 pb-4 border-b border-brand-200">{region}</h2>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                    {cities.map(city => (
                      <Link
                        key={city}
                        href={`/location/${toSlug(city)}/`}
                        className="group block bg-white hover:bg-brand-50 border border-brand-100 hover:border-brand-500 rounded-md p-4 transition-colors"
                      >
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0" />
                          <span className="font-medium text-gray-700 group-hover:text-brand-700 text-sm">{city}</span>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-width max-w-3xl">
            <FAQ faqs={FAQS_LOCATION} />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
