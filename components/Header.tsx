// components/Header.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, CheckCircle2 } from 'lucide-react';
import { services } from '@/data/services';

interface HeaderProps {
  onOpenModal?: () => void;
}

export function Header({ onOpenModal }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => { setMobileOpen(false); }, [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-brand-900 text-white py-2.5 px-4 text-[11px] font-bold uppercase tracking-[0.14em] hidden md:block">
        <div className="container-width flex justify-center items-center">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-accent-400" /> Trusted local driveway gate specialists across Essex
          </span>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-40 bg-white border-b transition-shadow duration-200 ${scrolled ? 'shadow-lg border-brand-200' : 'shadow-sm border-brand-100'}`}>
        <div className="container-width">
          <div className="flex justify-between items-center h-[78px]">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group rounded-sm" aria-label="Driveway Gates Essex home">
              <Image src="/logo-120px.png" alt="" width={52} height={52} priority className="h-11 w-11 md:h-[52px] md:w-[52px] object-contain" />
              <div className="flex flex-col">
                <span className="font-display font-extrabold text-lg leading-none tracking-tight text-brand-950 uppercase">Driveway Gates</span>
                <span className="text-[10px] text-brand-700 font-bold tracking-[0.18em] uppercase mt-1.5">Essex specialists</span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden xl:flex items-center gap-1" aria-label="Main navigation">
              <Link href="/" className="px-3 py-3 text-brand-950 hover:text-brand-700 font-semibold transition-colors rounded-md hover:bg-brand-50">Home</Link>

              <div className="relative group">
                <Link href="/services/" className="flex items-center gap-1 px-3 py-3 text-brand-950 group-hover:text-brand-700 font-semibold transition-colors rounded-md group-hover:bg-brand-50">
                  Services <ChevronDown className="w-4 h-4" />
                </Link>
                <div className="absolute top-full left-0 w-72 bg-white rounded-md shadow-xl border border-brand-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all translate-y-2 group-hover:translate-y-0 p-2 z-50">
                  {services.map(service => (
                    <Link
                      key={service.id}
                      href={`/services/${service.slug}/`}
                      className="block px-4 py-3 text-sm text-brand-950 hover:bg-brand-50 hover:text-brand-700 rounded-md transition-colors"
                    >
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/location/" className="px-3 py-3 text-brand-950 hover:text-brand-700 font-semibold transition-colors rounded-md hover:bg-brand-50">Locations</Link>
              <Link href="/blog/" className="px-3 py-3 text-brand-950 hover:text-brand-700 font-semibold transition-colors rounded-md hover:bg-brand-50">Blog</Link>

              <button onClick={onOpenModal} className="ml-3 btn-primary text-sm !py-2.5 !px-5">
                Get Free Quotes
              </button>
            </nav>

            {/* Mobile Toggle */}
            <button className="xl:hidden min-w-12 min-h-12 flex items-center justify-center text-brand-950 rounded-md hover:bg-brand-50" onClick={() => setMobileOpen(!mobileOpen)} aria-label={mobileOpen ? 'Close menu' : 'Open menu'} aria-expanded={mobileOpen}>
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="xl:hidden bg-white border-t border-brand-100 absolute w-full left-0 shadow-xl z-50 max-h-[80vh] overflow-y-auto">
            <div className="px-4 pt-2 pb-6 space-y-1">
              <Link href="/" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg">Home</Link>
              <div className="px-3 py-2">
                <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">Gate Types</div>
                {services.map(s => (
                  <Link key={s.id} href={`/services/${s.slug}/`} className="block py-2 text-sm text-gray-600 hover:text-brand-600">{s.title}</Link>
                ))}
              </div>
              <Link href="/location/" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg">Locations</Link>
              <Link href="/blog/" className="block px-3 py-3 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-lg">Blog</Link>
              <div className="pt-4 px-3">
                <button onClick={() => { onOpenModal?.(); setMobileOpen(false); }} className="block w-full btn-primary text-center">Get Free Quotes</button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
