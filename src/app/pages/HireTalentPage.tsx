import { RegisterAndHire } from '../components/RegisterAndHire';
import { HiringMarketplace } from '../components/HiringMarketplace';
import { TeamProfiles } from '../components/TeamProfiles';
import { Briefcase, ArrowRight, Sparkles, Users, CheckCircle } from 'lucide-react';

export function HireTalentPage() {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-7xl mb-6">
            Hire DH Talent
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto">
            Connect with India's best Digital Humanities professionals ready to transform your organization
          </p>
        </div>
      </div>

      {/* HIRE US CTA - TOP SECTION */}
      <div className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 py-16 border-b border-white/10">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border-2 border-cyan-500/50 rounded-3xl p-8 lg:p-12 shadow-2xl shadow-cyan-500/20">
            {/* Badge */}
            <div className="flex justify-center mb-6">
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full shadow-lg">
                <Sparkles className="w-5 h-5 text-white animate-pulse" />
                <span className="text-white font-semibold">Ready to Hire? Start Here!</span>
              </div>
            </div>

            {/* Main Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold text-center mb-4">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Hire DH Nexus Talent
              </span>
            </h2>

            <p className="text-center text-slate-300 text-lg lg:text-xl mb-8 max-w-3xl mx-auto">
              Fill out our quick hiring form and get matched with top Digital Humanities professionals. 
              Access our talent pool of <strong className="text-cyan-400">2,847+</strong> skilled candidates ready to join your team.
            </p>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-slate-200 text-sm">Pre-vetted Talent</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-slate-200 text-sm">Fast Matching</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-slate-200 text-sm">Global Reach</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/HpQN3t9MVy2q2LK98"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 text-white text-lg font-semibold rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/50 hover:scale-105"
              >
                <Briefcase className="w-6 h-6 group-hover:scale-110 transition-transform" />
                Fill Hiring Form
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#talent-directory"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-slate-800 border-2 border-slate-700 text-white text-lg font-semibold rounded-xl hover:bg-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <Users className="w-6 h-6" />
                Browse Talent Pool
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-slate-700 flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-1">2,847+</div>
                <div className="text-sm text-slate-400">Professionals</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-1">127+</div>
                <div className="text-sm text-slate-400">Active Jobs</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400 mb-1">87%</div>
                <div className="text-sm text-slate-400">Placement Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-1">$118K</div>
                <div className="text-sm text-slate-400">Avg. Salary</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Register and Hire */}
      <RegisterAndHire />

      {/* Hiring Marketplace */}
      <HiringMarketplace />

      {/* Team Profiles */}
      <TeamProfiles />
    </div>
  );
}