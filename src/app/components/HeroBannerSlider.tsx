import { useState, useEffect, useCallback, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import img1 from '../../imports/WhatsApp_Image_2026-06-18_at_8.16.24_PM__1_-2.jpeg';
import img3 from '../../imports/Screenshot_2026-06-29_134006-1.png';
import img4 from '../../imports/Screenshot_2026-06-29_133950-1.png';
import img5 from '../../imports/Screenshot_2026-06-29_133903-1.png';
import img6 from '../../imports/1783323981421__1_.jfif';
import img7 from '../../imports/1782975965717.jfif';

// Pairs of images shown together
const pairs = [
  {
    left: { src: img1, alt: 'Congratulations Anshika Kashyap — MBA 2028 at IIM Jammu' },
    right: { src: img3, alt: 'Congratulations Anushka — Doctoral Program, IIM Indore' },
    bg: 'https://images.unsplash.com/photo-1762279389006-43963a0cee55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    tint: 'from-purple-900/70 via-indigo-900/50 to-blue-900/70',
    label: '🎉 Community Achievements',
  },
  {
    left: { src: img4, alt: 'Congratulations — PhD in Education Technology at IIT Bombay' },
    right: { src: img5, alt: 'Alumni Shoutout — Lavanya Dahiya, Co-Founder CLAIM' },
    bg: 'https://images.unsplash.com/photo-1782330300409-f6c1ae5f64cb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    tint: 'from-cyan-900/70 via-teal-900/50 to-emerald-900/70',
    label: '🏆 DH Nexus Proud Moments',
  },
  {
    left: { src: img6, alt: 'DH Nexus Session — Digital Humanities Career Workshop' },
    right: { src: img7, alt: 'DH Nexus Webinar — Opportunities in Digital Humanities' },
    bg: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080',
    tint: 'from-rose-900/70 via-orange-900/50 to-amber-900/70',
    label: '📚 DH Nexus Sessions',
  },
];

export function HeroBannerSlider() {
  const [current, setCurrent] = useState(0);
  const [prevIdx, setPrevIdx] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    if (transitioning || index === current) return;
    setTransitioning(true);
    setPrevIdx(current);
    setCurrent(index);
    setTimeout(() => { setPrevIdx(null); setTransitioning(false); }, 700);
  }, [current, transitioning]);

  const next = useCallback(() => goTo((current + 1) % pairs.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + pairs.length) % pairs.length), [current, goTo]);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 5000);
  }, [next]);

  useEffect(() => { resetTimer(); return () => { if (timerRef.current) clearInterval(timerRef.current); }; }, [resetTimer]);

  const handleNav = (fn: () => void) => { fn(); resetTimer(); };

  return (
    <div className="relative w-full overflow-hidden bg-slate-950" style={{ height: 'clamp(300px, 52vw, 600px)' }}>
      {pairs.map((pair, i) => {
        const isActive = i === current;
        const isLeaving = i === prevIdx;
        return (
          <div
            key={i}
            aria-hidden={!isActive}
            className="absolute inset-0 transition-opacity duration-700 ease-in-out"
            style={{ opacity: isActive ? 1 : isLeaving ? 0 : 0, zIndex: isActive ? 2 : isLeaving ? 1 : 0 }}
          >
            {/* Tech background */}
            <img src={pair.bg} alt="" aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              style={{ filter: 'brightness(0.45) saturate(1.4)' }} />

            {/* Color tint */}
            <div className={`absolute inset-0 bg-gradient-to-r ${pair.tint}`} />

            {/* Grid pattern */}
            <div className="absolute inset-0 opacity-[0.07]"
              style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,.1) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.1) 1px,transparent 1px)', backgroundSize: '52px 52px' }} />

            {/* Glow orbs */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

            {/* Label pill */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-black/40 backdrop-blur-md text-white text-xs sm:text-sm font-semibold px-5 py-2 rounded-full border border-white/20 shadow-lg whitespace-nowrap">
              {pair.label}
            </div>

            {/* Two images side by side */}
            <div className="relative z-10 h-full flex items-center justify-center gap-4 sm:gap-8 px-14 sm:px-20">
              {/* Left image */}
              <div className="flex-1 h-full flex items-center justify-center">
                <img src={pair.left.src} alt={pair.left.alt}
                  draggable={false}
                  className="h-[88%] max-w-full object-contain rounded-xl drop-shadow-[0_8px_32px_rgba(0,0,0,0.7)] transition-transform duration-500 hover:scale-105" />
              </div>

              {/* Divider */}
              <div className="w-px self-stretch my-8 bg-gradient-to-b from-transparent via-white/30 to-transparent flex-shrink-0 hidden sm:block" />

              {/* Right image */}
              <div className="flex-1 h-full flex items-center justify-center">
                <img src={pair.right.src} alt={pair.right.alt}
                  draggable={false}
                  className="h-[88%] max-w-full object-contain rounded-xl drop-shadow-[0_8px_32px_rgba(0,0,0,0.7)] transition-transform duration-500 hover:scale-105" />
              </div>
            </div>
          </div>
        );
      })}

      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-black/60 to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-black/60 to-transparent z-10 pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/40 to-transparent z-10 pointer-events-none" />

      {/* Prev / Next */}
      <button onClick={() => handleNav(prev)} aria-label="Previous"
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/25 text-white flex items-center justify-center transition-all hover:scale-110 backdrop-blur-md">
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button onClick={() => handleNav(next)} aria-label="Next"
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/25 border border-white/25 text-white flex items-center justify-center transition-all hover:scale-110 backdrop-blur-md">
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {pairs.map((_, i) => (
          <button key={i} onClick={() => handleNav(() => goTo(i))} aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${i === current ? 'w-7 h-2 bg-white shadow-[0_0_6px_rgba(255,255,255,0.8)]' : 'w-2 h-2 bg-white/35 hover:bg-white/65'}`} />
        ))}
      </div>
    </div>
  );
}
