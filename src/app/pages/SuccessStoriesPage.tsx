import { StudentSuccess } from '../components/StudentSuccess';
import { Link } from 'react-router-dom';
import { Award, Users, ArrowRight, Rocket, Building2, Check, CheckCircle2 } from 'lucide-react';
import dhNexusLogo from 'figma:asset/951d00fc723ae8912305f3fb955112353119ba55.png';

export function SuccessStoriesPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img 
              src={dhNexusLogo} 
              alt="DH Nexus Logo" 
              className="h-14 w-auto object-contain"
            />
          </div>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-6 border border-white/30">
            <Award className="w-5 h-5" />
            <span className="text-sm">Success Stories</span>
          </div>
          <h1 className="text-5xl lg:text-7xl text-white mb-6">
            Real DH Career Journeys
          </h1>
          <p className="text-xl lg:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            Authentic stories from Digital Humanities professionals around the world
          </p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-3xl p-12 border-2 border-emerald-200 text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-8">
              <Rocket className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6">
              We Are Bringing Authentic Success Stories
            </h2>
            
            <p className="text-xl text-slate-700 mb-8 max-w-3xl mx-auto">
              We're currently collecting <span className="text-emerald-700 font-semibold">verified career journeys</span> from DH professionals who have successfully transitioned into industry roles, research positions, and entrepreneurial ventures.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 border border-emerald-200">
                <Users className="w-8 h-8 text-emerald-600 mx-auto mb-4" />
                <h3 className="text-lg text-slate-900 mb-2">Real Professionals</h3>
                <p className="text-sm text-slate-600">
                  Interviewing DH graduates about their actual career paths and transitions
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 border border-teal-200">
                <Building2 className="w-8 h-8 text-teal-600 mx-auto mb-4" />
                <h3 className="text-lg text-slate-900 mb-2">Industry Insights</h3>
                <p className="text-sm text-slate-600">
                  Documenting how DH skills translate to roles at tech companies and cultural institutions
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 border border-cyan-200">
                <CheckCircle2 className="w-8 h-8 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-lg text-slate-900 mb-2">Verified Stories</h3>
                <p className="text-sm text-slate-600">
                  Only publishing authentic, fact-checked career journeys with permission
                </p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 border-2 border-emerald-300 max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl text-slate-900 mb-4">Want to Share Your Story?</h3>
              <p className="text-slate-700 mb-6">
                If you're a DH professional who has successfully built a career combining tech and humanities, we'd love to feature your authentic journey!
              </p>
              <a
                href="/help-build"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl hover:from-emerald-500 hover:to-teal-500 transition-all text-lg font-semibold"
              >
                Contribute Your Story
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            <p className="text-sm text-slate-500">
              We're committed to building a trustworthy platform with verified information only. Check back soon!
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-emerald-900">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl text-white mb-6">
            Ready to Start Your DH Journey?
          </h2>
          <p className="text-xl text-emerald-100 mb-8">
            Explore programs, connect with professionals, and discover DH opportunities worldwide
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/global-dh"
              className="inline-flex items-center gap-2 bg-white text-emerald-600 px-8 py-4 rounded-xl hover:bg-emerald-50 transition-all text-lg font-semibold"
            >
              Explore DH Programs
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/talent-directory"
              className="inline-flex items-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl hover:bg-emerald-500 transition-all text-lg font-semibold border-2 border-white/20"
            >
              Join Talent Network
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}