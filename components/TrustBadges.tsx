import { ShieldCheck, UserCheck, Award, PoundSterling } from 'lucide-react';
import { trustBadges } from '@/data/site';

const iconMap: Record<string, React.ReactNode> = {
  ShieldCheck: <ShieldCheck className="w-7 h-7 text-brand-500" />,
  UserCheck: <UserCheck className="w-7 h-7 text-brand-500" />,
  Award: <Award className="w-7 h-7 text-brand-500" />,
  PoundSterling: <PoundSterling className="w-7 h-7 text-brand-500" />,
};

export function TrustBadges() {
  return (
    <section className="relative z-10 bg-brand-950 border-y border-white/10">
      <div className="container-width">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {trustBadges.map((badge, index) => (
            <div key={badge.title} className={`flex items-center gap-4 px-5 py-6 ${index > 0 ? 'border-t sm:border-t-0 sm:border-l' : ''} border-white/10`}>
              <div className="w-11 h-11 bg-accent-400/15 rounded-md flex items-center justify-center flex-shrink-0 [&>svg]:!text-accent-300">
                {iconMap[badge.icon]}
              </div>
              <div>
                <div className="font-bold text-white text-sm">{badge.title}</div>
                <div className="text-xs text-brand-200 leading-5 mt-0.5">{badge.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
