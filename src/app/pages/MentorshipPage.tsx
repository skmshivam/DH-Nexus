import { SEO } from '../components/SEO';
import { Users, Heart, MessageSquare, Target, Award, TrendingUp, GraduationCap, CheckCircle2, UserPlus, ExternalLink, ArrowRight } from 'lucide-react';

const supportAreas = [
  { icon: TrendingUp,    label: 'Career Transition Support',   desc: 'Guidance on moving from academia to industry or pivoting within DH.' },
  { icon: Award,         label: 'Portfolio Building',           desc: 'Help structuring your projects and presenting your skills effectively.' },
  { icon: MessageSquare, label: 'Interview Preparation',        desc: 'Mock interviews and feedback for DH-related roles.' },
  { icon: Users,         label: 'Networking Strategies',        desc: 'How to build meaningful professional connections in the DH world.' },
  { icon: Target,        label: 'Skill Translation',            desc: 'Articulating humanities training in tech and industry contexts.' },
  { icon: GraduationCap, label: 'Research & Academic Paths',    desc: 'Navigating PhD applications, postdocs, and scholarly publishing.' },
];

export function MentorshipPage() {
  return (
    <>
      <SEO
        title="Mentorship Program | DH Nexus"
        description="Apply for the DH NEXUS mentorship program. Connect with DH professionals for career guidance, portfolio reviews, and support navigating academic-to-industry transitions."
        keywords="DH mentorship, career mentoring, DH careers, industry transition, professional guidance"
      />

      <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">

        {/* Hero */}
        <section className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6 border border-white/20">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-medium">Community Support</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">Mentorship Program</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
              We are actively building the DH NEXUS mentorship network. Mentors and mentees can apply now — matching will begin as the community grows.
            </p>
          </div>
        </section>

        {/* Honest status banner */}
        <section className="bg-amber-50 border-b border-amber-200">
          <div className="max-w-4xl mx-auto px-6 py-5 flex items-start gap-3">
            <span className="text-2xl flex-shrink-0">🔔</span>
            <p className="text-amber-900 text-sm leading-relaxed">
              <strong>Mentorship matching is not yet live.</strong> We currently have no confirmed mentors on the platform. However, you can apply below to be notified when the program launches — or volunteer as a mentor yourself.
            </p>
          </div>
        </section>

        {/* Apply CTAs */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-6">

              {/* Apply as Mentee */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8 flex flex-col">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-5">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">I Want a Mentor</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  Looking for career guidance, portfolio feedback, or help navigating DH career paths? Apply now and we'll notify you when a mentor match becomes available.
                </p>
                <a
                  href="https://forms.gle/uwmUJyDbyq5VVLUx7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-6 py-3 rounded-xl font-semibold transition-all text-sm"
                >
                  Apply for Mentorship <ArrowRight className="w-4 h-4" />
                </a>
              </div>

              {/* Apply as Mentor */}
              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 border-2 border-indigo-200 rounded-2xl p-8 flex flex-col">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-xl flex items-center justify-center mb-5">
                  <UserPlus className="w-7 h-7 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900 mb-3">I Want to Mentor</h2>
                <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-1">
                  Are you a DH professional, researcher, or industry practitioner? Volunteer as a mentor and help shape the next generation of Digital Humanities practitioners.
                </p>
                <a
                  href="https://forms.gle/uwmUJyDbyq5VVLUx7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-indigo-600 to-blue-600 hover:from-indigo-700 hover:to-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-all text-sm"
                >
                  Volunteer as Mentor <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* What mentors will help with */}
        <section className="py-16 bg-slate-50 border-t border-slate-100">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-3">Areas of Support</h2>
              <p className="text-slate-500 text-sm max-w-xl mx-auto">
                When the program launches, mentors will provide guidance across these areas of DH career development.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {supportAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <div key={area.label} className="bg-white rounded-xl border border-slate-200 p-5 hover:border-purple-200 hover:shadow-md transition-all">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <h3 className="font-semibold text-slate-900 text-sm mb-1">{area.label}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{area.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mentor expectations */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="max-w-3xl mx-auto px-6">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white text-center">
              <UserPlus className="w-12 h-12 mx-auto mb-5 opacity-90" />
              <h2 className="text-2xl font-bold mb-3">What We Ask of Mentors</h2>
              <p className="text-indigo-100 text-sm mb-7 max-w-xl mx-auto">
                Mentors are volunteers. Here is what we hope mentors can offer:
              </p>
              <ul className="text-left space-y-3 max-w-md mx-auto mb-8">
                {[
                  '1–2 hours per month for mentee conversations',
                  'Share your genuine career journey — including challenges',
                  'Honest, constructive feedback on portfolios and goals',
                  'Respect for mentee confidentiality',
                  'Connect mentees to your network where appropriate',
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-indigo-100">
                    <CheckCircle2 className="w-5 h-5 text-cyan-300 flex-shrink-0 mt-0.5" />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap justify-center gap-3">
                <a
                  href="https://forms.gle/uwmUJyDbyq5VVLUx7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-indigo-50 transition-all"
                >
                  <UserPlus className="w-4 h-4" /> Apply as Mentor
                </a>
                <a
                  href="https://ach.org/activities/mentoring/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3 rounded-xl font-semibold text-sm hover:bg-white/20 transition-all"
                >
                  <ExternalLink className="w-4 h-4" /> ACH Mentoring Program
                </a>
              </div>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
