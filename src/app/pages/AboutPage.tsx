import {
  Globe, GraduationCap, Mic, Briefcase, Handshake, FlaskConical,
  Rocket, BookOpen, Users, Target, Heart, Lightbulb, Eye, ArrowRight,
  CheckCircle, Sparkles, Network, Star, UserPlus, Building2,
} from 'lucide-react';
import { DHNexusLogo } from '../components/DHNexusLogo';
import { DHNexusTeam } from '../components/DHNexusTeam';

// ── What We Do cards ─────────────────────────────────────────────────────────
const whatWeDo = [
  { emoji: '🌍', label: 'Global Community',         desc: 'A borderless network of students, researchers, educators, and professionals.' },
  { emoji: '🎓', label: 'Learning Resources',        desc: 'Curated tools, papers, guides, and datasets for interdisciplinary learners.' },
  { emoji: '🎤', label: 'Expert Sessions',           desc: 'Free webinars and workshops led by academics, practitioners, and industry voices.' },
  { emoji: '💼', label: 'Career Opportunities',      desc: 'Connecting talent with recruiters across research, policy, tech, and culture.' },
  { emoji: '🤝', label: 'Networking',                desc: 'Building meaningful connections across disciplines, institutions, and borders.' },
  { emoji: '🔬', label: 'Research Collaboration',   desc: 'Facilitating interdisciplinary projects between academia and industry.' },
  { emoji: '🚀', label: 'Innovation & Startups',    desc: 'Supporting founders and innovators at the intersection of Humanities and Tech.' },
  { emoji: '📚', label: 'Knowledge Sharing',        desc: 'Open exchange of ideas, experiences, and insights across the community.' },
];

// ── Values ───────────────────────────────────────────────────────────────────
const values = [
  { icon: Handshake,  label: 'Collaboration',             desc: 'We believe the best ideas emerge when diverse minds work together.',        color: 'from-cyan-500/20 to-cyan-600/20',    border: 'border-cyan-400/30',   text: 'text-cyan-300' },
  { icon: Lightbulb,  label: 'Innovation',                desc: 'Challenging the boundaries of what Humanities and Technology can achieve.',  color: 'from-amber-500/20 to-amber-600/20',  border: 'border-amber-400/30',  text: 'text-amber-300' },
  { icon: Heart,      label: 'Inclusivity',               desc: 'Every background, every discipline, every culture has a place here.',        color: 'from-pink-500/20 to-pink-600/20',    border: 'border-pink-400/30',   text: 'text-pink-300' },
  { icon: BookOpen,   label: 'Lifelong Learning',         desc: 'Curiosity and continuous growth are at the core of everything we do.',       color: 'from-purple-500/20 to-purple-600/20', border: 'border-purple-400/30', text: 'text-purple-300' },
  { icon: Target,     label: 'Human-Centered Technology', desc: 'Technology should serve human needs — culture, context, and empathy first.',  color: 'from-green-500/20 to-green-600/20',  border: 'border-green-400/30',  text: 'text-green-300' },
  { icon: Globe,      label: 'Global Perspective',        desc: 'Thinking beyond borders, institutions, and silos.',                          color: 'from-blue-500/20 to-blue-600/20',    border: 'border-blue-400/30',   text: 'text-blue-300' },
];

// ── Impact stats ─────────────────────────────────────────────────────────────
const impact = [
  { label: 'Community Members',   value: 'Growing', icon: Users },
  { label: 'Institutions',        value: 'Multiple', icon: Building2 },
  { label: 'Countries Reached',   value: 'Global',  icon: Globe },
  { label: 'Expert Speakers',     value: 'Active',  icon: Mic },
  { label: 'Events Hosted',       value: 'Regular', icon: Star },
  { label: 'Community Resources', value: 'Open',    icon: BookOpen },
];

// ── Comparison ───────────────────────────────────────────────────────────────
const comparison = [
  { without: 'Isolated communities',         with: 'Connected global network' },
  { without: 'Limited opportunities',        with: 'Career and research pathways' },
  { without: 'Institution-focused silos',    with: 'Community-driven, open to all' },
  { without: 'Separate disciplines',         with: 'Interdisciplinary collaboration' },
  { without: 'No visibility for researchers', with: 'Profile & project showcase' },
  { without: 'One-way information flow',     with: 'Peer-to-peer knowledge sharing' },
];

// ── Mission pillars ──────────────────────────────────────────────────────────
const mission = [
  'Bridge Humanities and Technology',
  'Build a global interdisciplinary community',
  'Promote open research collaboration',
  'Connect academia with industry',
  'Support careers and innovation',
  'Create opportunities for everyone',
];

export function AboutPage() {
  return (
    <div className="bg-white">

      {/* ── Hero ────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white py-24">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/15 rounded-full blur-3xl animate-float-delayed" />
        </div>
        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="flex justify-center mb-8">
            <DHNexusLogo variant="default" className="h-16" />
          </div>
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full mb-6">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-sm">About DH NEXUS</span>
          </div>
          <h1 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Engineering the{' '}
            <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent">
              Future of Knowledge
            </span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            A global community connecting Humanities, Technology, AI, Research, and Innovation.
          </p>
        </div>
      </section>

      {/* ── Our Story ───────────────────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-indigo-600 text-sm font-bold uppercase tracking-widest mb-3">Our Story</p>
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                Why We Built DH NEXUS
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  DH NEXUS was founded to bridge the gap between Humanities and Technology. While technology continues to transform every industry, many humanities students and researchers struggle to access opportunities, build digital skills, and connect with the broader innovation ecosystem.
                </p>
                <p>
                  We saw talented, intellectually curious people — historians, linguists, sociologists, cultural researchers — unable to translate their expertise into the careers and collaborations they deserved, simply because the platforms they needed did not exist.
                </p>
                <p>
                  DH NEXUS was created to bring together students, researchers, educators, institutions, and industry into one collaborative community where interdisciplinary knowledge can thrive — independent of any single university, country, or discipline.
                </p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-2xl p-8 border border-indigo-100">
                <Eye className="w-10 h-10 text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Our Vision</h3>
                <p className="text-slate-600">
                  To build the world's leading platform connecting Humanities, Technology, Research, and Innovation — where interdisciplinary minds find each other, grow together, and shape the future.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
                <Target className="w-10 h-10 text-purple-600 mb-4" />
                <h3 className="text-xl font-bold text-slate-900 mb-2">Independent & Community-Driven</h3>
                <p className="text-slate-600">
                  DH NEXUS is not owned by any university. Universities, museums, libraries, and institutions are valued community members — not gatekeepers. This platform belongs to its community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
        </div>
        <div className="relative max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-3">Our Mission</p>
            <h2 className="text-4xl font-bold text-white">What We Stand For</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mission.map((item, i) => (
              <div key={item} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all group flex items-start gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 group-hover:scale-110 transition-transform">
                  {i + 1}
                </div>
                <p className="text-blue-100 font-medium leading-snug">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── What We Do ──────────────────────────────────────────────────────── */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-indigo-600 text-sm font-bold uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-3">Built for Every Discipline</h2>
            <p className="text-slate-500 max-w-xl mx-auto">From learning resources to career connections, DH NEXUS offers something for every stage of your interdisciplinary journey.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whatWeDo.map(({ emoji, label, desc }) => (
              <div key={label} className="bg-white rounded-2xl p-6 border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all duration-300 group">
                <div className="text-4xl mb-4">{emoji}</div>
                <h3 className="font-bold text-slate-900 mb-2 group-hover:text-indigo-700 transition-colors">{label}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ──────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-20 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-cyan-400 text-sm font-bold uppercase tracking-widest mb-3">Our Values</p>
            <h2 className="text-4xl font-bold text-white">What Guides Us</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map(({ icon: Icon, label, desc, color, border, text }) => (
              <div key={label} className={`bg-gradient-to-br ${color} backdrop-blur-sm border ${border} rounded-2xl p-7 hover:scale-105 transition-transform duration-300 group`}>
                <Icon className={`w-9 h-9 ${text} mb-4 group-hover:scale-110 transition-transform`} />
                <h3 className="text-white font-bold text-lg mb-2">{label}</h3>
                <p className="text-blue-200 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why DH NEXUS — comparison ────────────────────────────────────────── */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="text-indigo-600 text-sm font-bold uppercase tracking-widest mb-3">Why DH NEXUS?</p>
            <h2 className="text-4xl font-bold text-slate-900 mb-3">The Difference We Make</h2>
            <p className="text-slate-500 max-w-xl mx-auto">See how DH NEXUS changes the experience for students, researchers, and institutions.</p>
          </div>
          <div className="rounded-2xl border border-slate-200 overflow-hidden shadow-lg">
            {/* Header row */}
            <div className="grid grid-cols-2">
              <div className="bg-slate-100 px-8 py-4 text-sm font-bold text-slate-500 uppercase tracking-widest">Without DH NEXUS</div>
              <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-sm font-bold text-white uppercase tracking-widest flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> With DH NEXUS
              </div>
            </div>
            {comparison.map(({ without, with: withText }, i) => (
              <div key={without} className={`grid grid-cols-2 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
                <div className="px-8 py-5 text-slate-500 text-sm border-r border-slate-200 flex items-center gap-3">
                  <span className="w-5 h-5 rounded-full border-2 border-slate-300 flex-shrink-0" />
                  {without}
                </div>
                <div className="px-8 py-5 text-slate-800 text-sm font-medium flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-500 flex-shrink-0" />
                  {withText}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Community Impact ─────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-cyan-500/15 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-80 h-80 bg-pink-500/15 rounded-full blur-3xl animate-float-delayed" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full mb-6">
              <Network className="w-5 h-5 text-yellow-300" />
              <span className="text-sm">Community Impact</span>
            </div>
            <h2 className="text-4xl font-bold text-white mb-3">Growing Together</h2>
            <p className="text-blue-100 max-w-xl mx-auto">DH NEXUS is at an early stage and growing. These represent what we are building toward — together.</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {impact.map(({ label, value, icon: Icon }) => (
              <div key={label} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all hover:scale-105 group">
                <Icon className="w-8 h-8 text-yellow-300 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <div className="text-2xl font-bold text-white mb-1">{value}</div>
                <div className="text-xs text-blue-200 leading-tight">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Meet the Team ────────────────────────────────────────────────────── */}
      <DHNexusTeam />

      {/* Volunteers / Ambassadors / Advisory — coming soon cards */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid sm:grid-cols-3 gap-5">
            {[
              { title: 'Community Volunteers', desc: 'Passionate contributors who help grow the platform — writing, curating, supporting.', badge: 'Active', badgeColor: 'bg-green-100 text-green-700' },
              { title: 'Student Ambassadors', desc: 'DH students representing their institutions and spreading the word globally.', badge: 'Coming Soon', badgeColor: 'bg-amber-100 text-amber-700' },
              { title: 'Advisory Board', desc: 'Academics, industry leaders, and practitioners guiding the platform\'s growth.', badge: 'Coming Soon', badgeColor: 'bg-blue-100 text-blue-700' },
            ].map(({ title, desc, badge, badgeColor }) => (
              <div key={title} className="bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-indigo-200 transition-all">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${badgeColor} mb-4 inline-block`}>{badge}</span>
                <h3 className="font-bold text-slate-900 mb-2">{title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Join the Movement ────────────────────────────────────────────────── */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-indigo-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float-delayed" />
        </div>
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full mb-8">
            <Rocket className="w-5 h-5 text-cyan-300" />
            <span className="text-sm">Join the Movement</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Join a Growing Global Community{' '}
            <span className="bg-gradient-to-r from-cyan-300 to-purple-300 bg-clip-text text-transparent">
              Shaping the Future
            </span>
          </h2>
          <p className="text-blue-200 text-lg mb-10 max-w-xl mx-auto">
            Of Humanities and Technology. Whether you are a student, researcher, educator, professional, or institution — there is a place for you here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/join-talent"
              className="group bg-gradient-to-r from-cyan-600 to-indigo-600 hover:from-cyan-500 hover:to-indigo-500 text-white px-10 py-4 rounded-xl transition-all transform hover:scale-105 inline-flex items-center justify-center gap-3 shadow-2xl shadow-indigo-500/30 font-semibold">
              <UserPlus className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Join Community
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="/partner"
              className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 hover:bg-white/15 px-10 py-4 rounded-xl transition-all inline-flex items-center justify-center gap-3 font-semibold">
              <Handshake className="w-5 h-5" />
              Partner with Us
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
