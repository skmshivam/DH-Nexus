import { useState } from 'react';
import { Calendar, Clock, ExternalLink, Users, BookOpen, Sparkles, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import sessionPoster1 from '../../imports/Untitled_design__6_-1.png';
import sessionPoster2 from '../../imports/1783323981421__1_.jfif';
import sessionPoster3 from '../../imports/1782975965717.jfif';

const sessions = [
  {
    poster: sessionPoster1,
    alt: 'From Humanities to Data Scientist — DH Nexus Webinar, 16th March',
    title: 'From Humanities to Data Scientist',
    date: '16th March 2026',
    time: '10:00 AM CET · 2:30 PM IST',
    audience: 'Open to All',
    description: 'Discover how Digital Humanities graduates are thriving in data science, AI ethics, UX research, and beyond — with real career paths and actionable guidance.',
    highlights: [
      'How AI & technology are reshaping humanities careers',
      'Skills most in demand: Data Analysis, NLP, AI Ethics',
      'Real-world applications in Research, EdTech & Policy',
      'Guidance on internships and market-ready roles',
      'Q&A on navigating the evolving job landscape',
    ],
    tags: ['#DigitalHumanities', '#AI', '#FutureSkills', '#CareerOpportunities'],
    ctaLabel: 'Watch Recording',
    ctaHref: 'https://www.instagram.com/dh_nexus',
    badge: 'Session Recording',
    badgeColor: 'from-red-500 to-pink-500',
  },
  {
    poster: sessionPoster2,
    alt: 'DH Nexus Career Workshop — Digital Humanities in Industry',
    title: 'DH in the Industry',
    date: '2026',
    time: 'Workshop Session',
    audience: 'Students & Professionals',
    description: 'A deep-dive workshop exploring how Digital Humanities skills translate to real industry roles — from UX research to content strategy and policy analysis.',
    highlights: [
      'Industry perspectives from DH practitioners',
      'Resume and portfolio tips for DH graduates',
      'Networking strategies for humanities-to-tech transitions',
      'Case studies from leading organizations',
      'Live Q&A with working professionals',
    ],
    tags: ['#Workshop', '#Industry', '#DHCareers', '#Portfolio'],
    ctaLabel: 'View Details',
    ctaHref: '/events',
    badge: 'Workshop',
    badgeColor: 'from-blue-500 to-cyan-500',
  },
  {
    poster: sessionPoster3,
    alt: 'DH Nexus Webinar — Opportunities in Digital Humanities',
    title: 'Opportunities in Digital Humanities',
    date: 'Ongoing · 2026',
    time: 'Live Webinar',
    audience: 'Open to All',
    description: 'Explore the growing landscape of Digital Humanities — emerging job roles, global program options, and how to position yourself for success in this interdisciplinary field.',
    highlights: [
      'Overview of global DH career landscape',
      'Top universities and programs to consider',
      'Skills that make DH graduates stand out',
      'Career paths and job market insights',
      'Steps to build your DH professional profile',
    ],
    tags: ['#DHNexus', '#Webinar', '#GlobalDH', '#CareerGrowth'],
    ctaLabel: 'Register Now',
    ctaHref: 'https://forms.gle/a2iwwhsHKHMKBu9t9',
    badge: 'LIVE NOW',
    badgeColor: 'from-red-500 to-rose-500',
    isLive: true,
  },
];

export function FeaturedSession() {
  const [active, setActive] = useState(0);
  const session = sessions[active];
  const prev = () => setActive((active - 1 + sessions.length) % sessions.length);
  const next = () => setActive((active + 1) % sessions.length);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 py-16 lg:py-20">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.15) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-semibold mb-4 shadow-lg">
            <Sparkles className="w-4 h-4 animate-pulse" />
            DH Nexus Sessions
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white">
            Webinars &{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Workshops
            </span>
          </h2>
          <p className="text-slate-400 mt-3 max-w-xl mx-auto">
            Expert-led sessions on Digital Humanities careers, skills, and industry opportunities — free for all.
          </p>

          {/* Session tabs */}
          <div className="flex items-center justify-center gap-2 mt-6">
            {sessions.map((s, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  i === active
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white/10 text-slate-400 hover:text-white hover:bg-white/20 border border-white/10'
                }`}
              >
                Session {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Main layout */}
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Poster — 2 of 5 columns */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative group w-full max-w-xs lg:max-w-sm">
              {/* Prev/Next on poster */}
              <button onClick={prev} aria-label="Previous session"
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 border border-white/25 text-white flex items-center justify-center transition-all backdrop-blur-md">
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button onClick={next} aria-label="Next session"
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-9 h-9 rounded-full bg-white/15 hover:bg-white/30 border border-white/25 text-white flex items-center justify-center transition-all backdrop-blur-md">
                <ChevronRight className="w-4 h-4" />
              </button>

              {/* Glow ring — red for LIVE */}
              <div className={`absolute -inset-2 bg-gradient-to-r ${(session as any).isLive ? 'from-red-500 via-rose-500 to-pink-500' : 'from-cyan-500 via-purple-500 to-pink-500'} rounded-3xl blur-lg opacity-40 group-hover:opacity-70 transition-opacity duration-500`} />
              <img
                src={session.poster}
                alt={session.alt}
                width="380"
                height="540"
                className="relative rounded-2xl shadow-2xl object-contain w-full group-hover:scale-[1.02] transition-transform duration-500"
              />
              {/* Badge */}
              <div className={`absolute top-4 left-4 bg-gradient-to-r ${session.badgeColor} text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 ${(session as any).isLive ? 'ring-2 ring-white/50 shadow-red-500/60' : ''}`}>
                <span className={`w-2 h-2 bg-white rounded-full ${(session as any).isLive ? 'animate-ping' : 'animate-pulse'}`} />
                {session.badge}
              </div>
              {/* LIVE banner strip */}
              {(session as any).isLive && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-r from-red-600 to-rose-600 text-white text-xs font-bold py-1.5 text-center rounded-b-2xl tracking-widest">
                  ● REGISTRATIONS OPEN
                </div>
              )}

              {/* Dot indicators */}
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex gap-1.5">
                {sessions.map((_, i) => (
                  <button key={i} onClick={() => setActive(i)} aria-label={`Session ${i + 1}`}
                    className={`rounded-full transition-all duration-300 ${i === active ? 'w-6 h-2 bg-cyan-400' : 'w-2 h-2 bg-white/30'}`} />
                ))}
              </div>
            </div>
          </div>

          {/* Content — 3 of 5 columns */}
          <div className="lg:col-span-3 space-y-6">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 leading-tight">
                {session.title.split(' ').slice(0, -1).join(' ')}{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  {session.title.split(' ').slice(-1)[0]}
                </span>
              </h3>
              <p className="text-slate-300 text-base lg:text-lg leading-relaxed">
                {session.description}
              </p>
            </div>

            {/* Date & time chips */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 text-sm text-white">
                <Calendar className="w-4 h-4 text-cyan-400" />
                {session.date}
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 text-sm text-white">
                <Clock className="w-4 h-4 text-purple-400" />
                {session.time}
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/15 rounded-full px-4 py-2 text-sm text-white">
                <Users className="w-4 h-4 text-pink-400" />
                {session.audience}
              </div>
            </div>

            {/* Highlights list */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center gap-2 text-cyan-400 font-semibold mb-4 text-sm">
                <BookOpen className="w-4 h-4" />
                Session Highlights
              </div>
              <ul className="space-y-3">
                {session.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                    <span className="mt-0.5 w-5 h-5 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-[10px] font-bold">{i + 1}</span>
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {session.tags.map(tag => (
                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-slate-400 hover:text-cyan-400 hover:border-cyan-400/40 transition-colors">
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a href={session.ctaHref} target={session.ctaHref.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all shadow-lg hover:shadow-cyan-500/30 hover:scale-105 text-sm">
                <ExternalLink className="w-4 h-4" />
                {session.ctaLabel}
              </a>
              <a href="/events"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold rounded-xl transition-all text-sm">
                All Events
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
