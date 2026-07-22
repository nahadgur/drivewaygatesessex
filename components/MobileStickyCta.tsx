'use client';

import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { LeadFormModal } from '@/components/LeadFormModal';

export function MobileStickyCta() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <LeadFormModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-accent-500 bg-brand-950 p-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:hidden">
        <button onClick={() => setIsOpen(true)} className="btn-primary w-full text-base" aria-label="Open the free quote form">
          Get Three Free Quotes <ArrowRight className="h-5 w-5" />
        </button>
      </div>
    </>
  );
}
