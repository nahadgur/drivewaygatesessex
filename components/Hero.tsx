import Link from 'next/link';
import { CheckCircle2, MapPin } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle: string;
  image: string;
  showCta?: boolean;
  showTrust?: boolean;
  onOpenModal?: () => void;
}

export function Hero({ title, subtitle, image, showCta = true, showTrust = true, onOpenModal }: HeroProps) {
  return (
    <section className="relative bg-brand-950 text-white overflow-hidden min-h-[650px] flex items-center">
      <div className="absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={image} alt="" className="w-full h-full object-cover opacity-75" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950/95 via-brand-950/75 to-brand-950/25" />
      </div>

      <div className="relative container-width py-20 md:py-28 w-full">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 text-accent-300 text-xs font-extrabold uppercase tracking-[0.18em] mb-5"><MapPin className="w-4 h-4" /> Local knowledge. Properly vetted.</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight mb-6 text-white leading-[1.02] text-balance">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-white/85 mb-8 leading-relaxed max-w-2xl">{subtitle}</p>

          {showCta && (
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              {onOpenModal ? (
                <button onClick={onOpenModal} className="btn-primary text-base !px-8 !py-4 text-center">
                  Get Three Free Quotes
                </button>
              ) : (
                <Link href="/services/" className="btn-primary text-base !px-8 !py-4 text-center">
                  Get Three Free Quotes
                </Link>
              )}
              <Link href="/services/" className="btn-secondary !bg-transparent !border-white/50 !text-white hover:!bg-white/10 text-base !px-8 !py-4 text-center">
                Explore Gate Types
              </Link>
            </div>
          )}

          {showTrust && (
            <div className="flex flex-wrap gap-x-7 gap-y-3 border-t border-white/20 pt-6 text-sm font-semibold text-white/90">
              {['50+ installs per specialist', 'Free local site surveys', 'Written warranties'].map(item => (
                <div key={item} className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-accent-300" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
