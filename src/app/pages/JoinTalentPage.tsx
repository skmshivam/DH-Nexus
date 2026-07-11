import { Users, Briefcase, TrendingUp, Award, CheckCircle2, Rocket } from 'lucide-react';
import { StudentProfileBuilder } from '../components/StudentProfileBuilder';
import { Link } from 'react-router-dom';

export function JoinTalentPage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-6 border border-white/30">
            <Users className="w-5 h-5" />
            <span className="text-sm">Join Our Talent Network</span>
          </div>
          <h1 className="text-5xl lg:text-7xl text-white mb-6">
            Get Discovered by Top Companies
          </h1>
          <p className="text-xl lg:text-2xl text-indigo-100 max-w-4xl mx-auto leading-relaxed">
            Build your profile, showcase your skills, and connect with companies actively hiring Digital Humanities professionals
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6 text-slate-900">
              Why Join <span className="bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">DH Nexus</span> Talent Network?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Get exclusive access to opportunities tailored for DH professionals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl p-6 border-2 border-cyan-200">
              <Briefcase className="w-12 h-12 text-cyan-600 mb-4" />
              <h3 className="text-xl text-slate-900 mb-2 font-semibold">Job Opportunities</h3>
              <p className="text-slate-600 text-sm">
                Get matched with companies specifically looking for DH talent
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border-2 border-purple-200">
              <TrendingUp className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl text-slate-900 mb-2 font-semibold">Career Growth</h3>
              <p className="text-slate-600 text-sm">
                Access exclusive resources, workshops, and mentorship programs
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200">
              <Users className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl text-slate-900 mb-2 font-semibold">Community</h3>
              <p className="text-slate-600 text-sm">
                Connect with 150+ DH professionals and expand your network
              </p>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200">
              <Award className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl text-slate-900 mb-2 font-semibold">Recognition</h3>
              <p className="text-slate-600 text-sm">
                Showcase your projects and get recognized for your work
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-12 text-white">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-300 mb-2">150+</div>
                <div className="text-indigo-200">DH Professionals</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-purple-300 mb-2">50+</div>
                <div className="text-indigo-200">Partner Companies</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-green-300 mb-2">$120K+</div>
                <div className="text-indigo-200">Avg Salary</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-pink-300 mb-2">85%</div>
                <div className="text-indigo-200">Placement Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile Builder Form */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-5xl mx-auto px-6">
          <StudentProfileBuilder />
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl mb-6 text-slate-900">
              What Happens After You Join?
            </h2>
            <p className="text-xl text-slate-600">
              Here's how we help you land your dream DH role
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <div>
                <h3 className="text-2xl text-slate-900 mb-2 font-semibold">Profile Review</h3>
                <p className="text-slate-600">
                  Our team reviews your profile to ensure it's complete and optimized for recruiters
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <div>
                <h3 className="text-2xl text-slate-900 mb-2 font-semibold">Get Matched</h3>
                <p className="text-slate-600">
                  We match you with companies looking for your specific skills and interests
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <div>
                <h3 className="text-2xl text-slate-900 mb-2 font-semibold">Connect with Companies</h3>
                <p className="text-slate-600">
                  Recruiters reach out to you directly through your preferred contact method
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                <span className="text-white font-bold text-xl">4</span>
              </div>
              <div>
                <h3 className="text-2xl text-slate-900 mb-2 font-semibold">Land Your Dream Job</h3>
                <p className="text-slate-600">
                  Interview with companies and get offers that match your career goals
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Rocket className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join 150+ DH professionals who are already part of our talent network
          </p>
          <a
            href="#profile-builder"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 hover:bg-indigo-50 px-10 py-4 rounded-xl transition-all transform hover:scale-105 shadow-xl text-lg font-semibold"
          >
            <CheckCircle2 className="w-5 h-5" />
            <span>Build Your Profile Now</span>
          </a>
          <p className="text-sm text-indigo-200 mt-6">
            Already have a profile? <Link to="/hire-talent" className="underline hover:text-white">View talent directory</Link>
          </p>
        </div>
      </section>
    </div>
  );
}
