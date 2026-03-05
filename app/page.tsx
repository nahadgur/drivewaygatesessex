// app/page.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, MapPin, Shield, Sparkles, Calendar, Globe, Users, CreditCard, Award, Zap } from 'lucide-react';
import { services } from '@/data/services';
import { toSlug } from '@/data/locations';
import { pricingTiers, financeInfo, treatmentIncludes } from '@/data/pricing';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/Hero';
import { TrustBadges } from '@/components/TrustBadges';
import { Testimonials } from '@/components/Testimonials';
import { FAQ } from '@/components/FAQ';
import { LeadFormModal } from '@/components/LeadFormModal';

const topAreas = ['Chelmsford', 'Brentwood', 'Southend-on-Sea', 'Colchester', 'Epping', 'Basildon', 'Rayleigh', 'Billericay', 'Loughton', 'Chigwell', 'Shenfield', 'Maldon'];

const homepageFaqs = [
  {
    question: 'How much do driveway gates cost in Essex?',
    answer: 'Prices vary significantly depending on what you choose. A basic pair of manual wooden gates, installed, starts around £2,500. Electric swing gates with automation typically range from £3,500 to £10,000. Premium electric sliding gates with full automation and intercom systems can run from £4,500 to £12,000 or more. The biggest price drivers are material (wood, steel, aluminium, wrought iron), gate width, automation spec, and whether the design is off-the-shelf or bespoke. Nearly all our Essex installers offer 0% finance so you can spread the cost.',
  },
  {
    question: 'Do I need planning permission for driveway gates in Essex?',
    answer: 'In most cases, no. Gates under 2 metres tall that open inward onto your property usually fall under permitted development rights. If your gate is next to a classified road and over 1 metre tall, you may need permission. Listed buildings and conservation areas have stricter rules, and some Essex districts have specific local guidelines. Your installer will check all of this during the free site survey and handle any applications if needed.',
  },
  {
    question: 'How long does a driveway gate installation take?',
    answer: 'A standard installation takes 2 to 4 working days. Day one covers groundwork, post holes, and foundations. Day two is gate hanging, motor fitting, and wiring. Days three and four handle finishing, intercom setup, and commissioning. If you are replacing existing gates and the posts are in good condition, it can be quicker. Bespoke fabricated gates may need 4 to 6 weeks lead time for manufacturing before the installation starts.',
  },
  {
    question: 'What type of gate is best for an Essex driveway?',
    answer: 'It depends on your space and priorities. If your driveway is short or slopes toward the road, electric sliding gates are usually the best option because they do not need swing clearance. If you have plenty of room in front of or behind the opening, electric swing gates are the most popular and tend to be slightly cheaper. Wooden gates suit period properties and rural homes. Metal gates work well for modern builds, detached houses, and properties wanting maximum security. Your installer will recommend the best option during the free site survey.',
  },
  {
    question: 'Can I automate my existing manual gates?',
    answer: 'In most cases, yes. If your gates are structurally sound and properly hung, a motor system can be retrofitted for £1,200 to £3,500 depending on the gate type and weight. The installer will check the hinges, gate condition, and pillar strength during the site visit. Some older wooden gates may need hinge upgrades, and very heavy wrought iron gates might require a more powerful motor, but these are straightforward adjustments.',
  },
  {
    question: 'How does your free matching service work?',
    answer: 'We are not gate installers. We are a free matching service that connects Essex homeowners with vetted, experienced gate installers. You fill in a short form telling us your area, gate type, and rough budget. We match you with up to 3 installers who specialise in your requirements and cover your postcode. They contact you directly to arrange a free site survey. You pay us nothing at any stage. Installers pay us a referral fee only if you go ahead with the work.',
  },
  {
    question: 'What should I look for in a gate installer?',
    answer: 'Experience is the single biggest factor. You want an installer who has completed dozens of residential gate projects, not someone who does the odd gate between other trades. Check that they carry public liability insurance, offer written warranties on both the gate and the automation, and can show you examples of previous work in Essex. Every installer in our network has completed at least 50 residential gate installations and meets all of these criteria.',
  },
  {
    question: 'Are electric gates safe for children and pets?',
    answer: 'Yes, provided they are installed correctly with the required safety features. All gate automation installed in the UK must comply with the Machinery Directive and relevant standards. This means photocells to detect objects in the gate path, safety edges that stop the gate if it hits resistance, and auto-reverse functionality. Our installers fit all of these as standard and will commission the safety systems before handover.',
  },
  {
    question: 'How do I maintain my driveway gates?',
    answer: 'For automated gates, an annual service is recommended. This covers motor lubrication, safety sensor testing, hinge adjustment, track cleaning for sliding gates, and a general structural check. For the gate itself, wooden gates need re-staining or oiling every 1 to 2 years depending on exposure. Metal gates with powder coating need very little upkeep beyond an occasional wash. Most of our installers offer maintenance packages from around £150 per year.',
  },
  {
    question: 'What happens if there is a power cut?',
    answer: 'Every automated gate system includes a manual release mechanism so you can open the gates by hand during a power failure. Many modern motors also have battery backup that keeps the gate operational for 20 to 50 cycles after the mains power goes out. If power cuts are a concern, solar-powered options are also available. Your installer will walk you through the manual release and backup options during handover.',
  },
];

export default function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Header onOpenModal={() => setIsModalOpen(true)} />
      <main className="flex-grow">

        <Hero
          title="Essex's Most Trusted Driveway Gate Installers, Compared"
          subtitle="We vet every installer so you do not have to. Get matched with experienced, fully insured gate specialists near you. Free site survey, free quotes, zero cost to use our service."
          image="/images/gates/gate-hero-wrought-iron-sunset-cobblestone.png"
          onOpenModal={() => setIsModalOpen(true)}
        />

        <TrustBadges />

        {/* What Are Driveway Gates */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-6">
                  Find the Right Gate Installer Across Essex
                </h2>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Driveway Gates Essex is a free matching service connecting homeowners across the county with vetted, experienced gate installers. Whether you are in Brentwood, Chelmsford, Southend-on-Sea, or anywhere in between, we have installers who regularly work in your area.
                  </p>
                  <p>
                    Every installer in our network has completed at least 50 residential gate installations, carries full public liability insurance, and offers written warranties on their work. You get up to 3 free quotes from specialists who know Essex properties inside out.
                  </p>
                  <p>
                    From electric sliding gates on short urban driveways to traditional hardwood swing gates on rural properties, our installers cover every gate type and budget. The service is completely free for homeowners at every stage.
                  </p>
                </div>
                <button onClick={() => setIsModalOpen(true)} className="btn-primary mt-8">
                  Get Free Quotes
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/gate-wrought-iron-open-manor-tree-lined.png" alt="Wrought iron driveway gates on an Essex property" className="rounded-2xl object-cover w-full h-48 col-span-2" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/gate-aluminium-sliding-vertical-bar-stone-pillars.png" alt="Modern aluminium sliding gate" className="rounded-2xl object-cover w-full h-36" loading="lazy" />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/gates/gate-wooden-oak-swing-cottage-flowers.png" alt="Oak wooden driveway gate" className="rounded-2xl object-cover w-full h-36" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        {/* Gate Types */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Gate Types We Cover Across Essex</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">From electric sliding gates to gate repair and maintenance, find vetted Essex installers for every type of project.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map(service => (
                <Link key={service.id} href={`/services/${service.slug}/`} className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className="h-44 overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={service.image} alt={service.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-lg font-display font-bold text-gray-900 group-hover:text-brand-600 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-500 mb-4 line-clamp-2">{service.description}</p>
                    <span className="text-brand-600 font-medium text-sm flex items-center">
                      Find installers <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Top Areas */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Popular Areas Across Essex</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">We cover the whole of Essex. Browse some of our most popular locations or search your area.</p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-8">
              {topAreas.map(area => (
                <Link
                  key={area}
                  href={`/location/${toSlug(area)}/`}
                  className="group flex items-center gap-2 p-3 bg-gray-50 rounded-xl border border-gray-100 hover:border-brand-300 hover:bg-brand-50 transition-all"
                >
                  <MapPin className="w-4 h-4 text-brand-500 flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 group-hover:text-brand-700">Gates in {area}</span>
                </Link>
              ))}
            </div>
            <div className="text-center">
              <Link href="/location/" className="btn-secondary">
                Browse All Essex Locations
              </Link>
            </div>
          </div>
        </section>

        {/* Pricing Overview */}
        <section className="section-padding bg-gray-50">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">Essex Driveway Gate Prices</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Real price ranges from completed Essex installations. Get a precise quote from a vetted local installer.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {pricingTiers.map(tier => (
                <div key={tier.slug} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <h3 className="font-display font-bold text-gray-900 mb-1">{tier.treatment}</h3>
                  <p className="text-2xl font-bold text-brand-600 mb-1">
                    £{tier.priceFrom.toLocaleString()} <span className="text-base text-gray-400 font-normal">to</span> £{tier.priceTo.toLocaleString()}
                  </p>
                  <p className="text-xs text-gray-500 mb-3">{tier.alignerSets} · {tier.typicalDuration}</p>
                  <p className="text-sm text-gray-600">{tier.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-brand-900 rounded-2xl p-6 md:p-8 text-white text-center">
              <p className="text-xl font-display font-bold mb-2">{financeInfo.description}</p>
              <p className="text-brand-200 text-sm mb-6">0% finance available through selected Essex installers. Subject to status.</p>
              <button onClick={() => setIsModalOpen(true)} className="bg-white text-brand-900 font-bold py-3 px-8 rounded-xl hover:bg-brand-50 transition-colors">
                Check Finance Options
              </button>
            </div>
          </div>
        </section>

        <Testimonials />

        {/* How It Works */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-gray-600 max-w-xl mx-auto">Get matched with vetted Essex gate installers in three simple steps. Free for homeowners at every stage.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Tell Us What You Need', desc: 'Fill in our short form with your Essex postcode, gate type preference, and rough budget. Takes under 2 minutes.' },
                { step: '2', title: 'Get Matched', desc: 'We match you with up to 3 vetted Essex installers who cover your area and specialise in your gate type. They contact you directly.' },
                { step: '3', title: 'Compare and Choose', desc: 'Each installer offers a free site survey and detailed quote. You compare, choose the best fit, and book. No obligation.' },
              ].map(item => (
                <div key={item.step} className="text-center">
                  <div className="w-14 h-14 bg-brand-500 text-white rounded-full flex items-center justify-center font-bold text-xl mx-auto mb-4">{item.step}</div>
                  <h3 className="text-lg font-display font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="text-center mt-10">
              <button onClick={() => setIsModalOpen(true)} className="btn-primary text-lg !px-8 !py-4">
                Get Free Quotes Today
              </button>
            </div>
          </div>
        </section>

        <section className="section-padding bg-gray-50">
          <div className="container-width max-w-3xl">
            <FAQ faqs={homepageFaqs} title="Common Questions About Driveway Gates in Essex" />
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
