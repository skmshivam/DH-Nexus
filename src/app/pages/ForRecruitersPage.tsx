import { ForRecruiters } from '../components/ForRecruiters';
import { Briefcase, Target, ArrowRight, Sparkles, Users, CheckCircle } from 'lucide-react';
import { SEO } from '../components/SEO';
import { StructuredData, structuredDataSchemas } from '../components/StructuredData';
import { DHNexusLogo, DHNexusWatermark } from '../components/DHNexusLogo';

export function ForRecruitersPage() {
  return (
    <div className="relative">
      {/* Subtle watermark background */}
      <DHNexusWatermark />
      
      <SEO 
        title="Hire Digital Humanities Professionals | For Recruiters | DH Nexus"
        description="Access pre-vetted DH talent skilled in Python, ML, NLP, and cultural intelligence. Post jobs free and connect with qualified Digital Humanities professionals."
        keywords="hire digital humanities, DH recruitment, hire DH professionals, tech talent humanities, Python developers, NLP engineers, cultural data scientists"
        url="https://dhnexus.com/for-recruiters"
      />
      <StructuredData data={structuredDataSchemas.forRecruiters} />
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 py-20 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <DHNexusLogo variant="default" className="h-14" />
          </div>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-6 border border-white/30">
            <Briefcase className="w-5 h-5" />
            <span className="text-sm">Hire DH Talent</span>
          </div>
          <h1 className="text-5xl lg:text-7xl text-white mb-6">
            For Recruiters & Companies
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Access India's premier network of interdisciplinary Digital Humanities professionals—the unicorn talents who bridge technology, creativity, and human insight
          </p>
        </div>
      </section>

      {/* HIRE US CTA - TOP SECTION */}
      <section className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950 py-16 border-b border-white/10">
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
              Fill out our quick hiring form and get matched with Digital Humanities professionals who combine technical skills with deep humanistic insight.
            </p>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center gap-3 bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-slate-200 text-sm">Interdisciplinary Talent</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-slate-200 text-sm">Direct Community Access</span>
              </div>
              <div className="flex items-center gap-3 bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-slate-200 text-sm">Growing Network</span>
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
                href="/talent-directory"
                className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-slate-800 border-2 border-slate-700 text-white text-lg font-semibold rounded-xl hover:bg-slate-700 hover:border-cyan-500/50 transition-all duration-300"
              >
                <Users className="w-6 h-6" />
                Browse Talent Pool
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="mt-8 pt-8 border-t border-slate-700 flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-1">Multi</div>
                <div className="text-sm text-slate-400">Institutional</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-1">DH</div>
                <div className="text-sm text-slate-400">Focused</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400 mb-1">Free</div>
                <div className="text-sm text-slate-400">To Post</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-1">Open</div>
                <div className="text-sm text-slate-400">Community</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <ForRecruiters />

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Target className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Start Hiring DH Talent Today
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Connect directly with Digital Humanities professionals who blend technical skills with cultural and humanistic expertise. Register free and get access to our growing talent community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://forms.gle/71BLiGAPnbvDaFfD6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 hover:bg-emerald-50 px-10 py-4 rounded-xl transition-all transform hover:scale-105 shadow-xl text-lg"
            >
              <Briefcase className="w-5 h-5" />
              <span className="font-semibold">Register as Employer (FREE)</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/hire-talent"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white hover:bg-white/30 text-white px-8 py-4 rounded-xl transition-all text-lg"
            >
              Browse Hiring Marketplace
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}