'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQItem = { question: string; answer: string };

export function FAQ({ faqs, title = "Frequently Asked Questions" }: { faqs: FAQItem[]; title?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);


  return (
    <section className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:gap-14">
      <div>
        <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-brand-600 mb-3">Clear, local answers</p>
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-brand-950 mb-4">{title}</h2>
        <p className="text-gray-600 leading-7">Straightforward guidance before you arrange a free site survey.</p>
      </div>
      <div className="border-t border-brand-200">
        {faqs.map((faq, i) => (
          <div key={i} className="bg-transparent border-b border-brand-200">
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full min-h-14 flex items-center justify-between py-5 text-left font-bold text-brand-950 hover:text-brand-600 transition-colors"
              aria-expanded={openIndex === i}
            >
              <span className="pr-4">{faq.question}</span>
              <span className={`w-9 h-9 rounded-full border border-brand-300 flex items-center justify-center flex-shrink-0 transition-colors ${openIndex === i ? 'bg-brand-900 border-brand-900 text-white' : 'text-brand-700'}`}><ChevronDown className={`w-4 h-4 transition-transform duration-200 ${openIndex === i ? 'rotate-180' : ''}`} /></span>
            </button>
            {openIndex === i && (
              <div className="pb-6 pr-12 text-gray-600 leading-7">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
