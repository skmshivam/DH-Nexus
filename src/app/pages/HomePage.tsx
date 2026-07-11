import { Hero } from '../components/Hero';
import { TechSkillsShowcase } from '../components/TechSkillsShowcase';
import { TalentNetworkHub } from '../components/TalentNetworkHub';
import { AboutPortal } from '../components/AboutPortal';
import { HeroBannerSlider } from '../components/HeroBannerSlider';
import { FeaturedSession } from '../components/FeaturedSession';
import { SEO, SEOConfig } from '../components/SEO';
import { DHNexusWatermark } from '../components/DHNexusLogo';
import {
  Briefcase, ArrowRight, Sparkles, Users,
  GraduationCap, Globe, BookOpen, Network,
  Map, CalendarDays, FileText,
  Brain, Cpu, FlaskConical, Lightbulb, Building2, Rocket,
  Landmark, Archive, Code2, Microscope, Palette, Building, UserCheck,
  ScrollText, TreePine, Scale,
} from 'lucide-react';
import bannerImage from 'figma:asset/7711cefb61284793cbd5573993d78c4a099fc113.png';

// ── Why DH NEXUS — 6 connected cards ────────────────────────────────────────
const whyCards = [
  { icon: BookOpen,     label: 'Humanities',  color: 'from-purple-500/20 to-purple-600/20', border: 'border-purple-400/30', text: 'text-purple-300' },
  { icon: Cpu,          label: 'Technology',  color: 'from-cyan-500/20 to-cyan-600/20',     border: 'border-cyan-400/30',   text: 'text-cyan-300' },
  { icon: Microscope,   label: 'Research',    color: 'from-blue-500/20 to-blue-600/20',     border: 'border-blue-400/30',   text: 'text-blue-300' },
  { icon: Lightbulb,    label: 'Innovation',  color: 'from-amber-500/20 to-amber-600/20',   border: 'border-amber-400/30',  text: 'text-amber-300' },
  { icon: Building2,    label: 'Industry',    color: 'from-green-500/20 to-green-600/20',   border: 'border-green-400/30',  text: 'text-green-300' },
  { icon: Rocket,       label: 'Careers',     color: 'from-pink-500/20 to-pink-600/20',     border: 'border-pink-400/30',   text: 'text-pink-300' },
];

// ── Who Can Join — audience cards ────────────────────────────────────────────
const audiences = [
  { icon: GraduationCap, label: 'Humanities Students',     color: 'text-purple-400' },
  { icon: Code2,          label: 'Technology Students',     color: 'text-cyan-400' },
  { icon: Brain,          label: 'DH Students',             color: 'text-indigo-400' },
  { icon: Microscope,     label: 'Researchers',              color: 'text-blue-400' },
  { icon: BookOpen,       label: 'Faculty',                  color: 'text-violet-400' },
  { icon: Building,       label: 'Universities',             color: 'text-teal-400' },
  { icon: Landmark,       label: 'Museums',                  color: 'text-amber-400' },
  { icon: Archive,        label: 'Libraries & Archives',     color: 'text-orange-400' },
  { icon: Cpu,            label: 'Developers',               color: 'text-green-400' },
  { icon: FlaskConical,   label: 'AI Professionals',         color: 'text-rose-400' },
  { icon: Palette,        label: 'Designers',                color: 'text-pink-400' },
  { icon: Briefcase,      label: 'Companies & Startups',     color: 'text-emerald-400' },
  { icon: UserCheck,      label: 'Recruiters',               color: 'text-sky-400' },
  { icon: ScrollText,     label: 'Government & NGOs',        color: 'text-lime-400' },
  { icon: Scale,          label: 'Policy & Ethics Bodies',   color: 'text-yellow-400' },
  { icon: TreePine,       label: 'Cultural Institutions',    color: 'text-green-300' },
];

// ── Network diagram connections ──────────────────────────────────────────────
const connections = [
  { left: 'History',      right: 'Artificial Intelligence',  leftColor: 'from-purple-500 to-indigo-500',  rightColor: 'from-cyan-500 to-blue-500' },
  { left: 'Museums',      right: 'XR & Immersive Media',     leftColor: 'from-amber-500 to-orange-500',   rightColor: 'from-pink-500 to-rose-500' },
  { left: 'Culture',      right: 'Data Science',             leftColor: 'from-violet-500 to-purple-500',  rightColor: 'from-green-500 to-emerald-500' },
  { left: 'Archives',     right: 'Digital Preservation',     leftColor: 'from-orange-500 to-amber-500',   rightColor: 'from-teal-500 to-cyan-500' },
  { left: 'Literature',   right: 'NLP & Text Mining',        leftColor: 'from-indigo-500 to-blue-500',    rightColor: 'from-blue-500 to-cyan-500' },
  { left: 'Archaeology',  right: 'GIS & Spatial Data',       leftColor: 'from-yellow-500 to-amber-500',   rightColor: 'from-emerald-500 to-green-500' },
  { left: 'Ethics',       right: 'Responsible AI',           leftColor: 'from-rose-500 to-pink-500',      rightColor: 'from-red-500 to-rose-500' },
  { left: 'Storytelling', right: 'Immersive Technology',     leftColor: 'from-pink-500 to-fuchsia-500',   rightColor: 'from-purple-500 to-violet-500' },
];

export function HomePage() {
  return (
    <>
      <SEO {...SEOConfig.home} />

      {/* 1. Community banner slider */}
      <HeroBannerSlider />

      {/* 2. Hero */}
      <div className="relative">
        <DHNexusWatermark />
        <section id="home" className="scroll-mt-16">
          <Hero />
        </section>
      </div>

      {/* ═══════════════════════════════════════════════
          WHY DH NEXUS?
      ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full mb-6">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-sm">Why DH NEXUS?</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-6">
              The Future Belongs to{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                Interdisciplinary Minds
              </span>
            </h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Humanities and technology are no longer separate disciplines.<br />
              The future belongs to professionals who combine critical thinking, culture, research, design, AI, data, and emerging technologies.<br />
              <span className="text-cyan-300 font-semibold">DH NEXUS exists to bridge this gap.</span>
            </p>
          </div>

          {/* 6 connected cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {whyCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div key={card.label} className="flex flex-col items-center gap-3">
                  <div className={`bg-gradient-to-br ${card.color} backdrop-blur-sm border ${card.border} rounded-2xl p-6 w-full text-center hover:scale-105 transition-transform duration-300 group`}>
                    <Icon className={`w-10 h-10 ${card.text} mx-auto mb-3 group-hover:scale-110 transition-transform`} />
                    <div className="text-white font-bold text-sm">{card.label}</div>
                  </div>
                  {i < whyCards.length - 1 && (
                    <div className="text-slate-400 text-lg hidden lg:block">↓</div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          CONNECTING HUMANITIES WITH TECHNOLOGY — animated network
      ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-indigo-950 via-slate-900 to-purple-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA0IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full mb-6">
              <Network className="w-5 h-5 text-cyan-300" />
              <span className="text-sm">The Bridge</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Connecting Humanities{' '}
              <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
                with Technology
              </span>
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Every discipline has a digital future. DH NEXUS maps the intersections that define the next era of knowledge and innovation.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {connections.map((conn, i) => (
              <div
                key={conn.left}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div className={`inline-block bg-gradient-to-r ${conn.leftColor} text-white text-xs font-bold px-3 py-1.5 rounded-full mb-3`}>
                  {conn.left}
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex-1 h-px bg-gradient-to-r from-white/30 to-white/10" />
                  <div className="relative">
                    <div className="w-6 h-6 rounded-full bg-white/20 border border-white/30 flex items-center justify-center">
                      <ArrowRight className="w-3 h-3 text-white group-hover:translate-x-0.5 transition-transform" />
                    </div>
                    <div className="absolute inset-0 rounded-full bg-cyan-400/20 animate-ping opacity-0 group-hover:opacity-100" />
                  </div>
                  <div className="flex-1 h-px bg-gradient-to-l from-white/30 to-white/10" />
                </div>
                <div className={`inline-block bg-gradient-to-r ${conn.rightColor} text-white text-xs font-bold px-3 py-1.5 rounded-full`}>
                  {conn.right}
                </div>
              </div>
            ))}
          </div>

          {/* Centre statement */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 backdrop-blur-sm border border-white/20 rounded-2xl px-10 py-6">
              <p className="text-xl text-white font-semibold">
                Every connection above is a career. Every bridge is a research opportunity.
              </p>
              <p className="text-blue-300 mt-2 text-sm">DH NEXUS helps you find yours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHAT WE OFFER
      ═══════════════════════════════════════════════ */}
      <section className="py-16 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-indigo-600 text-sm font-semibold uppercase tracking-widest mb-2">Platform</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
              Everything You Need in One Place
            </h2>
            <p className="text-slate-500 max-w-xl mx-auto text-sm">
              A community-driven platform for discovering programs, building your profile, and growing your interdisciplinary career.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: GraduationCap, color: 'bg-indigo-600', title: 'DH Programs Directory',      desc: 'Curated universities in India and globally offering DH, AI & Humanities, and interdisciplinary degrees.', href: '/global-dh' },
              { icon: Map,           color: 'bg-slate-700',  title: 'Interactive Global Map',      desc: 'Explore programs and institutions across continents through a searchable, filterable map.', href: '/interactive-map' },
              { icon: Network,       color: 'bg-indigo-500', title: 'Talent Network',              desc: 'Register your profile and get discovered by recruiters seeking interdisciplinary talent.', href: '/join-talent' },
              { icon: BookOpen,      color: 'bg-slate-600',  title: 'Resources & Guides',          desc: 'Community-curated tools, reading lists, datasets, and career guides for DH practitioners.', href: '/resources' },
              { icon: CalendarDays,  color: 'bg-indigo-700', title: 'Sessions & Webinars',         desc: 'Free expert-led sessions on DH careers, skills, and industry opportunities — open to everyone.', href: '/events' },
              { icon: FileText,      color: 'bg-slate-800',  title: 'Career Pathways',             desc: 'Alt-ac career guides, resume tips for DH graduates, and pathways into research, policy, and tech.', href: '/career-resources' },
            ].map(({ icon: Icon, color, title, desc, href }) => (
              <a key={title} href={href}
                className="group bg-white rounded-xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-200 flex flex-col gap-3">
                <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center flex-shrink-0`}>
                  <Icon className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1 text-sm group-hover:text-indigo-700 transition-colors">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
                <span className="text-indigo-600 text-xs font-semibold flex items-center gap-1 mt-auto">
                  Explore <ArrowRight className="w-3 h-3" />
                </span>
              </a>
            ))}
          </div>

          {/* Community nudge */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white border border-slate-200 rounded-xl px-6 py-4">
            <p className="text-slate-500 text-sm">
              <span className="font-semibold text-slate-700">Built by the DH community.</span>{' '}
              Meet the students and scholars behind this platform and get featured in the community directory.
            </p>
            <a href="/team" className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors whitespace-nowrap flex-shrink-0">
              Meet the community <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════
          WHO CAN JOIN DH NEXUS?
      ═══════════════════════════════════════════════ */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-indigo-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float-delayed" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full mb-6">
              <Users className="w-5 h-5 text-cyan-300" />
              <span className="text-sm">Open to All</span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Who Can Join{' '}
              <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
                DH NEXUS?
              </span>
            </h2>
            <p className="text-blue-200 max-w-2xl mx-auto">
              Whether you work with data, culture, code, policy, or creativity — there is a place for you here.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {audiences.map(({ icon: Icon, label, color }) => (
              <div key={label}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-5 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 flex flex-col items-center text-center gap-3 group">
                <Icon className={`w-8 h-8 ${color} group-hover:scale-110 transition-transform`} />
                <span className="text-sm font-semibold text-white leading-tight">{label}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a href="/join-talent"
              className="group bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white px-10 py-4 rounded-xl transition-all transform hover:scale-105 inline-flex items-center gap-3 shadow-2xl shadow-indigo-500/30 font-semibold">
              <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Join DH NEXUS — Free
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Sessions */}
      <FeaturedSession />

      {/* Hire CTA */}
      <section className="bg-slate-900 py-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-white" />
            <span className="text-white text-sm font-semibold">For Recruiters & Institutions</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
            Discover Interdisciplinary Talent
          </h2>
          <p className="text-slate-300 mb-4 max-w-2xl mx-auto text-sm">
            Access professionals skilled in Artificial Intelligence, UX Research, Digital Humanities, Data Science, GIS, Digital Heritage, NLP, Design Thinking, and Digital Innovation.
          </p>
          {/* Skills */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {['Artificial Intelligence', 'Data Science', 'Research', 'Design Thinking', 'Digital Heritage', 'Human-Centered Innovation', 'Communication', 'Problem Solving', 'NLP', 'GIS', 'UX Research', 'Digital Preservation'].map(skill => (
              <span key={skill} className="px-3 py-1.5 bg-white/10 border border-white/20 rounded-full text-xs text-slate-200 font-medium">
                {skill}
              </span>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://forms.gle/HpQN3t9MVy2q2LK98" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all text-sm">
              <Briefcase className="w-4 h-4" />
              Register Hiring Interest
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/for-recruiters"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-slate-800 border border-slate-700 hover:border-slate-500 text-white font-semibold rounded-xl transition-all text-sm">
              <Users className="w-4 h-4" />
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Banner image */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img
              src={bannerImage}
              alt="The Future of Inquiry — where humanities scholarship and digital innovation enrich one another"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Tech skills */}
      <section id="tech-skills" className="scroll-mt-16">
        <TechSkillsShowcase />
      </section>

      {/* Talent network CTA */}
      <TalentNetworkHub />

      {/* About */}
      <section id="about" className="scroll-mt-16">
        <AboutPortal />
      </section>
    </>
  );
}
