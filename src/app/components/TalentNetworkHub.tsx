import { UserPlus, Briefcase, Rocket, CheckCircle, ArrowRight, Star, Network } from 'lucide-react';

export function TalentNetworkHub() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl animate-float-delayed" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-6 py-3 rounded-full mb-6">
            <Network className="w-5 h-5 text-yellow-300" />
            <span className="text-sm">DH Nexus Talent Network</span>
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6">
            Future-Ready{' '}
            <br />
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent">
              Interdisciplinary Talent Network
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Connecting professionals with expertise across Humanities, AI, Data Science, Design, Digital Innovation, Cultural Heritage, Research, and Technology. Register to get discovered, collaborate, and grow.
          </p>
        </div>

        {/* Value Proposition Grid — no fake numbers */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group">
            <div className="w-14 h-14 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <UserPlus className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl mb-2">For Students & Professionals</h3>
            <p className="text-blue-100 text-sm mb-5">
              Register your profile, showcase your projects and skills, and get discovered by recruiters looking for DH talent.
            </p>
            <a href="https://forms.gle/BRnw51wzHxXp9jVS6" target="_blank" rel="noopener noreferrer"
              className="text-sm text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1 font-medium">
              Join the Network <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group">
            <div className="w-14 h-14 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Briefcase className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl mb-2">For Recruiters</h3>
            <p className="text-blue-100 text-sm mb-5">
              Browse talent profiles, connect with DH graduates who combine technical and humanistic skills, and post opportunities.
            </p>
            <a href="https://forms.gle/71BLiGAPnbvDaFfD6" target="_blank" rel="noopener noreferrer"
              className="text-sm text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1 font-medium">
              Register as Recruiter <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group">
            <div className="w-14 h-14 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Rocket className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-xl mb-2">Showcase Your Work</h3>
            <p className="text-blue-100 text-sm mb-5">
              Display DH projects, research, and case studies. Build a public portfolio that goes beyond a traditional CV.
            </p>
            <a href="/join-talent"
              className="text-sm text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1 font-medium">
              Build Your Profile <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h3 className="text-3xl text-center mb-12">How DH Nexus Works</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-2xl p-8">
              <div className="w-12 h-12 bg-green-400 rounded-full flex items-center justify-center text-white font-bold mb-4">1</div>
              <h4 className="text-2xl mb-4">Register Your Profile</h4>
              <ul className="space-y-3 text-blue-100">
                {[
                  'Create a profile with your skills & projects',
                  'Upload portfolio pieces and case studies',
                  'Add your academic and professional background',
                  'Get visible to the DH community',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-green-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-500/20 to-indigo-500/20 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-8">
              <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold mb-4">2</div>
              <h4 className="text-2xl mb-4">Connect & Discover</h4>
              <ul className="space-y-3 text-blue-100">
                {[
                  'Recruiters search talent by skills & interests',
                  'Browse DH programs and career resources',
                  'Attend webinars and workshops',
                  'Collaborate on research and projects',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 rounded-2xl p-8">
              <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold mb-4">3</div>
              <h4 className="text-2xl mb-4">Grow Together</h4>
              <ul className="space-y-3 text-blue-100">
                {[
                  'Land opportunities that match your DH skills',
                  'Contribute to a growing interdisciplinary community',
                  'Share resources and knowledge',
                  'Help shape the future of Digital Humanities',
                ].map(item => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-white to-blue-50 text-slate-900 rounded-3xl p-12 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-6">
              <Star className="w-5 h-5" />
              <span className="text-sm font-medium">Free to Join — Always</span>
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Ready to Join the Network?
            </h3>
            <p className="text-lg text-slate-600 mb-8">
              Whether you're a student building your DH career, a company seeking interdisciplinary talent, or a researcher wanting to collaborate — DH Nexus is your platform.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="https://forms.gle/BRnw51wzHxXp9jVS6" target="_blank" rel="noopener noreferrer"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-10 py-4 rounded-xl transition-all hover:scale-105 inline-flex items-center gap-2 shadow-xl text-lg font-semibold">
                <UserPlus className="w-5 h-5" />
                Register as Student
              </a>
              <a href="https://forms.gle/71BLiGAPnbvDaFfD6" target="_blank" rel="noopener noreferrer"
                className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-10 py-4 rounded-xl transition-all inline-flex items-center gap-2 text-lg font-semibold">
                <Briefcase className="w-5 h-5" />
                Register as Recruiter
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
