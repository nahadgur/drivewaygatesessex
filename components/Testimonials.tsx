import { Star } from 'lucide-react';
import { testimonials } from '@/data/site';
import { cn } from '@/lib/utils';

export function Testimonials({ limit = 3, className }: { limit?: number; className?: string }) {
  const items = testimonials.slice(0, limit);
  return (
    <div className={cn("grid grid-cols-1 lg:grid-cols-3 gap-px overflow-hidden rounded-lg border border-brand-200 bg-brand-200", className)}>
      {items.map((t, index) => (
        <figure key={t.id} className="relative bg-white p-7 md:p-8">
          <div className="absolute right-6 top-4 text-7xl font-black leading-none text-brand-100" aria-hidden="true">“</div>
          <div className="relative flex text-accent-500 mb-5" aria-label={`${t.rating} out of 5 stars`}>
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-current" />
            ))}
          </div>
          <blockquote className="relative text-brand-950 leading-7 mb-7">&ldquo;{t.text}&rdquo;</blockquote>
          <figcaption className="border-t border-brand-100 pt-4">
            <div className="font-bold text-brand-950 text-sm">{t.name}</div>
            <div className="text-xs text-brand-700 mt-1">{t.location} &middot; {t.service}</div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}
