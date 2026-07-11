import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Calendar, Star, Award, ExternalLink, Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import sessionPoster from '../../imports/Untitled_design__6_.png';

const slides = [
  {
    id: 1,
    type: 'session',
    image: sessionPoster,
    title: 'From Humanities to Data Scientist',
    date: '16th March 2026',
    time: '10:00 AM CET / 2:30 PM IST',
    speaker: 'Anshika Kashyap',
    speakerRole: 'Content & Research Contributor, DH Nexus',
    highlight: true,
    badge: '🎤 Featured Session',
    badgeColor: 'from-purple-500 to-pink-500',
    description: 'Exploring how AI and technology are reshaping careers in the humanities — skills in demand, real-world paths, and internship guidance.',
    tags: ['#DigitalHumanities', '#AI', '#FutureSkills', '#CareerOpportunities'],
    registerUrl: 'https://www.instagram.com/dh_nexus',
  },
  {
    id: 2,
    type: 'congratulations',
    image: null,
    title: 'Congratulations, DH Nexus Community!',
    date: 'June 2026',
    time: '',
    speaker: 'Anshika Kashyap',
    speakerRole: 'Content & Research Contributor, DH Nexus',
    highlight: true,
    badge: '🎉 Milestone Achieved',
    badgeColor: 'from-yellow-500 to-orange-500',
    description: 'Celebrating our growing community of Digital Humanities professionals, researchers, and students shaping the future of technology and culture.',
    tags: ['#DHNexus', '#Milestone', '#Community', '#DigitalHumanities'],
    registerUrl: null,
  },
  {
    id: 3,
    type: 'session',
    image: null,
    title: 'DH Careers: Bridging Tech & Humanities',
    date: 'Upcoming 2026',
    time: 'To be announced',
    speaker: 'Anshika Kashyap',
    speakerRole: 'Content & Research Contributor, DH Nexus',
    highlight: true,
    badge: '📅 Coming Soon',
    badgeColor: 'from-cyan-500 to-blue-500',
    description: 'Join our next session on emerging career paths where digital tools meet humanities scholarship — from NLP research to AI ethics roles.',
    tags: ['#DHCareers', '#FutureOfWork', '#HumanitiesInTech'],
    registerUrl: 'https://www.instagram.com/dh_nexus',
  },
];

function AnshikaHighlight() {
  return (
    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500/20 to-purple-500/20 border border-pink-400/40 rounded-full px-4 py-1.5">
      <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
      <span className="text-xs font-semibold text-pink-300">Featured Speaker</span>
      <Star className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
    </div>
  );
}

function PlaceholderSlide({ slide }: { slide: typeof slides[0] }) {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800/80 to-indigo-900/80 rounded-2xl">
      <div className="text-center p-8 max-w-sm">
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${slide.badgeColor} text-white text-sm font-semibold mb-6`}>
          <Sparkles className="w-4 h-4" />
          {slide.badge}
        </div>
        <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-purple-500/30">
          <Award className="w-10 h-10 text-white" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-3">{slide.title}</h3>
        <p className="text-slate-300 text-sm leading-relaxed">{slide.description}</p>
      </div>
    </div>
  );
}

export function SessionsSlider() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [direction, setDirection] = useState<'left' | 'right'>('right');
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback((index: number, dir: 'left' | 'right' = 'right') => {
    if (isAnimating) return;
    setDirection(dir);
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setIsAnimating(false);
    }, 300);
  }, [isAnimating]);

  const next = useCallback(() => {
    goTo((current + 1) % slides.length, 'right');
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length, 'left');
  }, [current, goTo]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 4500);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  const slide = slides[current];

  return (
    <section className="py-16 bg-gradient-to-br from-slate-950 via-indigo-950 to-purple-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
            <Calendar className="w-4 h-4" />
            Sessions & Milestones
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
            DH Nexus Events &{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Celebrations
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto">
            Webinars, community milestones, and featured speakers driving Digital Humanities forward
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image / Poster Panel */}
          <div
            className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/40 border border-white/10"
            style={{ minHeight: '420px' }}
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            {/* Slide content */}
            <div
              className="w-full h-full transition-opacity duration-300"
              style={{ opacity: isAnimating ? 0 : 1 }}
            >
              {slide.image ? (
                <ImageWithFallback
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                  style={{ minHeight: '420px' }}
                />
              ) : (
                <div style={{ minHeight: '420px' }}>
                  <PlaceholderSlide slide={slide} />
                </div>
              )}
            </div>

            {/* Prev / Next arrows */}
            <button
              onClick={prev}
              aria-label="Previous slide"
              className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110 border border-white/20"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              aria-label="Next slide"
              className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-black/80 text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all hover:scale-110 border border-white/20"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dot indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {slides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i, i > current ? 'right' : 'left')}
                  aria-label={`Go to slide ${i + 1}`}
                  className={`rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-6 h-2 bg-white'
                      : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Info Panel */}
          <div
            className="transition-opacity duration-300"
            style={{ opacity: isAnimating ? 0 : 1 }}
          >
            {/* Badge */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${slide.badgeColor} text-white text-sm font-semibold mb-5 shadow-lg`}>
              <Sparkles className="w-4 h-4" />
              {slide.badge}
            </div>

            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 leading-tight">
              {slide.title}
            </h3>

            {slide.date && (
              <div className="flex flex-wrap gap-4 mb-5">
                <div className="flex items-center gap-2 text-slate-300 text-sm">
                  <Calendar className="w-4 h-4 text-cyan-400" />
                  <span>{slide.date}</span>
                </div>
                {slide.time && (
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="text-cyan-400">⏰</span>
                    <span>{slide.time}</span>
                  </div>
                )}
              </div>
            )}

            <p className="text-slate-300 leading-relaxed mb-6">{slide.description}</p>

            {/* Featured Speaker — Anshika highlighted */}
            {slide.highlight && (
              <div className="bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-pink-400/30 rounded-2xl p-5 mb-6">
                <AnshikaHighlight />
                <div className="flex items-center gap-4 mt-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-pink-500/30">
                    AK
                  </div>
                  <div>
                    <div className="text-white font-semibold text-lg">{slide.speaker}</div>
                    <div className="text-pink-300 text-sm">{slide.speakerRole}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {slide.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-300 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* CTA */}
            {slide.registerUrl ? (
              <a
                href={slide.registerUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-cyan-500/30 hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                {slide.type === 'session' ? 'Register / Learn More' : 'Follow Us'}
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-semibold rounded-xl shadow-lg">
                <Award className="w-4 h-4" />
                Celebrating Our Community 🎉
              </div>
            )}
          </div>
        </div>

        {/* Thumbnail strip */}
        <div className="flex justify-center gap-3 mt-8">
          {slides.map((s, i) => (
            <button
              key={s.id}
              onClick={() => goTo(i, i > current ? 'right' : 'left')}
              aria-label={`View slide: ${s.title}`}
              className={`group relative rounded-xl overflow-hidden transition-all duration-300 border-2 ${
                i === current
                  ? 'border-cyan-400 scale-105 shadow-lg shadow-cyan-500/30'
                  : 'border-white/10 opacity-50 hover:opacity-80 hover:border-white/30'
              }`}
              style={{ width: '80px', height: '56px', flexShrink: 0 }}
            >
              {s.image ? (
                <ImageWithFallback
                  src={s.image}
                  alt={s.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className={`w-full h-full bg-gradient-to-br ${s.badgeColor} flex items-center justify-center text-white text-xs font-bold`}>
                  {i + 1}
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
