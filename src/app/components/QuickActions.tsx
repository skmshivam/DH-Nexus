import { Rocket, Users, Briefcase, Globe, ArrowRight, CheckCircle2, Target, Zap, TrendingUp, Code, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';

export function QuickActions() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
            <Zap className="w-5 h-5" />
            <span className="text-sm font-medium">Get Started in 2 Minutes</span>
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6 text-slate-900">
            What's Your Goal Today?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Whether you're hiring, learning, or building your career—we've got you covered
          </p>
        </div>

        {/* Action Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* For Recruiters - PRIORITY #1 */}
          <Link
            to="/for-recruiters"
            className="group bg-gradient-to-br from-green-50 to-emerald-50 hover:from-green-100 hover:to-emerald-100 rounded-3xl p-8 border-2 border-green-300 hover:border-green-500 transition-all hover:shadow-2xl hover:scale-105"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Briefcase className="w-8 h-8 text-white" />
            </div>
            <div className="inline-block bg-green-500 text-white text-xs px-3 py-1 rounded-full mb-3 font-semibold">
              MOST POPULAR
            </div>
            <h3 className="text-2xl text-slate-900 mb-4 font-bold">🏢 I'm Hiring DH Talent</h3>
            <p className="text-slate-700 mb-6">
              Access pre-vetted DH professionals with tech skills + cultural intelligence. Post jobs and connect directly.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Browse verified talent profiles</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Post job openings (free)</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                <span>Access skill-based filters</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-green-700 font-semibold group-hover:gap-3 transition-all">
              <span>Start Hiring Now</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>

          {/* For Students */}
          <Link
            to="/join-talent"
            className="group bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 rounded-3xl p-8 border-2 border-purple-200 hover:border-purple-400 transition-all hover:shadow-2xl hover:scale-105"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl text-slate-900 mb-4 font-bold">💼 I'm a DH Professional</h3>
            <p className="text-slate-700 mb-6">
              Showcase your tech skills, get matched with top companies, and access exclusive job opportunities.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <span>Build tech-focused profile</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <span>Get discovered by recruiters</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-purple-600 flex-shrink-0" />
                <span>Apply to curated jobs</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-purple-700 font-semibold group-hover:gap-3 transition-all">
              <span>Join Talent Network</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>

          {/* For Aspirants */}
          <Link
            to="/what-is-dh"
            className="group bg-gradient-to-br from-cyan-50 to-blue-50 hover:from-cyan-100 hover:to-blue-100 rounded-3xl p-8 border-2 border-cyan-200 hover:border-cyan-400 transition-all hover:shadow-2xl hover:scale-105"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
              <Rocket className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-2xl text-slate-900 mb-4 font-bold">🎓 I Want to Learn DH</h3>
            <p className="text-slate-700 mb-6">
              Explore what DH is, discover career paths combining tech and humanities, and find the right program globally.
            </p>
            
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                <span>Understand DH careers & salaries</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                <span>Browse 60+ global programs</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-slate-700">
                <CheckCircle2 className="w-4 h-4 text-cyan-600 flex-shrink-0" />
                <span>See industry demand</span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-cyan-700 font-semibold group-hover:gap-3 transition-all">
              <span>Explore DH Field</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </div>

        {/* Quick Links Bar - Market Focused */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-4 gap-6">
            <Link
              to="/talent-directory"
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-xl p-6 transition-all"
            >
              <Users className="w-8 h-8 text-green-300 mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-lg font-semibold mb-2">Browse Talent</div>
              <div className="text-sm text-indigo-100">Pre-vetted DH professionals</div>
            </Link>

            <Link
              to="/jobs"
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-xl p-6 transition-all"
            >
              <Briefcase className="w-8 h-8 text-purple-300 mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-lg font-semibold mb-2">Job Board</div>
              <div className="text-sm text-indigo-100">Latest DH opportunities</div>
            </Link>

            <Link
              to="/global-dh"
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-xl p-6 transition-all"
            >
              <Globe className="w-8 h-8 text-pink-300 mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-lg font-semibold mb-2">Global Programs</div>
              <div className="text-sm text-indigo-100">60+ universities worldwide</div>
            </Link>

            <Link
              to="/industry"
              className="group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/40 rounded-xl p-6 transition-all"
            >
              <TrendingUp className="w-8 h-8 text-cyan-300 mb-3 group-hover:scale-110 transition-transform" />
              <div className="text-lg font-semibold mb-2">Industry Insights</div>
              <div className="text-sm text-indigo-100">DH market trends</div>
            </Link>
          </div>
        </div>

        {/* Network Impact Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-2">India</div>
            <div className="text-sm text-slate-600">Growing DH Ecosystem</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">Global</div>
            <div className="text-sm text-slate-600">International Network</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent mb-2">Verified</div>
            <div className="text-sm text-slate-600">Authentic Programs</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent mb-2">60+</div>
            <div className="text-sm text-slate-600">Global Universities</div>
          </div>
        </div>
      </div>
    </section>
  );
}