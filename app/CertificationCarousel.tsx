'use client';

import { useCallback, useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, ShieldCheck } from 'lucide-react';

type Locale = 'es' | 'en';

const certifications = [
  {
    title: 'Networking Basics',
    image: '/certifications/networking-basics.png',
    url: 'https://www.credly.com/badges/a98c03c8-0694-4f1f-96ce-ca77f7988233/public_url',
    date: { es: 'Noviembre de 2024', en: 'November 2024' },
    topic: { es: 'Redes · Protocolos · Conectividad', en: 'Networks · Protocols · Connectivity' },
  },
  {
    title: 'Introduction to IoT',
    image: '/certifications/introduction-to-iot.png',
    url: 'https://www.credly.com/badges/3b2a5115-bf6f-4f57-9c4b-2cbcc6078882',
    date: { es: 'Noviembre de 2024', en: 'November 2024' },
    topic: { es: 'IoT · Transformación digital', en: 'IoT · Digital transformation' },
  },
  {
    title: 'Computer Hardware Basics',
    image: '/certifications/computer-hardware-basics.png',
    url: 'https://www.credly.com/badges/9ba1742a-89d5-4aef-a83e-2211e4b7457d',
    date: { es: 'Octubre de 2024', en: 'October 2024' },
    topic: { es: 'Hardware · Diagnóstico · Equipos', en: 'Hardware · Troubleshooting · Devices' },
  },
  {
    title: 'Introduction to Packet Tracer',
    image: '/certifications/introduction-to-packet-tracer.png',
    url: 'https://www.credly.com/badges/7272e042-ffcb-4fdf-b511-030c70469b08',
    date: { es: 'Enero de 2024', en: 'January 2024' },
    topic: { es: 'Simulación · Topologías de red', en: 'Simulation · Network topologies' },
  },
] as const;

export default function CertificationCarousel({ locale }: { locale: Locale }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const goTo = useCallback((index: number) => {
    const track = trackRef.current;
    if (!track) return;
    const target = Math.max(0, Math.min(certifications.length - 1, index));
    const card = track.children[target] as HTMLElement;
    const left = card.offsetLeft - track.offsetLeft - (track.clientWidth - card.clientWidth) / 2;
    track.scrollTo({ left, behavior: 'smooth' });
    setActive(target);
  }, []);

  const updateActive = () => {
    const track = trackRef.current;
    if (!track) return;
    const center = track.getBoundingClientRect().left + track.clientWidth / 2;
    const nearest = Array.from(track.children).reduce((best, item, index) => {
      const rect = item.getBoundingClientRect();
      const distance = Math.abs(rect.left + rect.width / 2 - center);
      return distance < best.distance ? { index, distance } : best;
    }, { index: 0, distance: Infinity });
    setActive(nearest.index);
  };

  return (
    <div className="mt-10 sm:mt-12">
      <div className="mb-5 flex items-center justify-between gap-4">
        <p className="font-mono text-xs uppercase tracking-[.16em] text-slate-500">
          {locale === 'es' ? 'Insignias verificadas · Cisco' : 'Verified badges · Cisco'}
        </p>
        <div className="flex items-center gap-2">
          <span className="mr-2 font-mono text-xs tabular-nums text-slate-500" aria-live="polite">
            <span className="text-terminal">{String(active + 1).padStart(2, '0')}</span> / {String(certifications.length).padStart(2, '0')}
          </span>
          <button type="button" className="carousel-arrow" onClick={() => goTo(active - 1)} disabled={active === 0} aria-label={locale === 'es' ? 'Certificación anterior' : 'Previous certification'}><ChevronLeft size={19} /></button>
          <button type="button" className="carousel-arrow" onClick={() => goTo(active + 1)} disabled={active === certifications.length - 1} aria-label={locale === 'es' ? 'Siguiente certificación' : 'Next certification'}><ChevronRight size={19} /></button>
        </div>
      </div>

      <div
        ref={trackRef}
        className="certification-track -mx-5 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-6 lg:mx-0 lg:px-[max(0px,calc((100%-360px)/2))]"
        onScroll={updateActive}
        onKeyDown={(event) => {
          if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
            event.preventDefault();
            goTo(active + (event.key === 'ArrowRight' ? 1 : -1));
          }
        }}
        tabIndex={0}
        role="region"
        aria-roledescription={locale === 'es' ? 'carrusel' : 'carousel'}
        aria-label={locale === 'es' ? 'Certificaciones verificadas' : 'Verified certifications'}
      >
        {certifications.map((certificate, index) => (
          <a
            key={certificate.title}
            href={certificate.url}
            target="_blank"
            rel="noopener noreferrer"
            className="certification-card group relative flex w-[min(83vw,340px)] shrink-0 snap-center flex-col overflow-hidden rounded-2xl border border-white/[0.1] bg-[#121b28] transition duration-300 hover:-translate-y-1 hover:border-terminal/45 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terminal sm:w-[340px]"
            aria-label={`${certificate.title} — ${locale === 'es' ? 'verificar credencial en Credly' : 'verify credential on Credly'}`}
          >
            <span className="pointer-events-none absolute right-5 top-4 z-10 font-mono text-xs text-slate-500">0{index + 1}</span>
            <div className="relative grid h-56 place-items-center overflow-hidden bg-[radial-gradient(circle_at_50%_40%,rgba(16,185,129,.16),transparent_67%)]">
              <div className="absolute inset-5 rounded-xl border border-dashed border-white/[0.09]" />
              <img src={certificate.image} alt="" width="180" height="180" loading="lazy" className="relative h-40 w-40 object-contain drop-shadow-[0_12px_30px_rgba(0,0,0,.55)] transition-transform duration-500 group-hover:scale-105" />
            </div>
            <div className="flex flex-1 flex-col border-t border-white/[0.07] bg-white/[0.025] p-6">
              <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[.14em] text-emerald-300"><ShieldCheck size={14} />Cisco · Credly</div>
              <h3 className="mt-4 min-h-14 text-xl font-semibold tracking-tight text-white">{certificate.title}</h3>
              <p className="mt-1 text-xs text-slate-400">{certificate.topic[locale]}</p>
              <div className="mt-auto flex items-end justify-between gap-3 pt-7"><span className="font-mono text-[11px] text-slate-500">{certificate.date[locale]}</span><span className="inline-flex items-center gap-1 text-xs font-medium text-terminal group-hover:text-emerald-300">{locale === 'es' ? 'Verificar' : 'Verify'} <ArrowUpRight size={15} /></span></div>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-2 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-2" aria-label={locale === 'es' ? 'Seleccionar certificación' : 'Select certification'}>
          {certifications.map((certificate, index) => <button type="button" key={certificate.title} onClick={() => goTo(index)} aria-label={`${locale === 'es' ? 'Mostrar' : 'Show'} ${certificate.title}`} aria-current={active === index ? 'true' : undefined} className={`h-1.5 rounded-full transition-all ${active === index ? 'w-8 bg-terminal' : 'w-2 bg-slate-600 hover:bg-slate-400'}`} />)}
        </div>
        <a href="https://www.linkedin.com/in/victorsuarezcruz/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-xs text-slate-400 transition hover:text-white">{locale === 'es' ? 'Ver todas en LinkedIn' : 'See all on LinkedIn'} <ArrowUpRight size={14} /></a>
      </div>
    </div>
  );
}
