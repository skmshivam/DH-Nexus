import { Linkedin, Users, Share2, Globe } from 'lucide-react';

export function SocialIntegration() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">
            Community & Social Integration
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Connect with the DH community across platforms
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-2xl p-12 text-white">
            <div className="flex items-center gap-3 mb-6">
              <Linkedin className="w-10 h-10" />
              <h3 className="text-3xl">LinkedIn Community</h3>
            </div>
            <p className="text-xl text-blue-100 mb-8">
              Join our professional network of DH alumni, students, faculty, and industry partners. Share insights, opportunities, and collaborate on the future of Digital Humanities.
            </p>
            <div className="space-y-4">
              <a 
                href="https://www.linkedin.com/school/iit-jodhpur/" 
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white text-indigo-900 px-6 py-3 rounded-lg hover:bg-indigo-50 transition-colors text-center"
              >
                Follow IIT Jodhpur on LinkedIn
              </a>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <div className="text-sm text-blue-100 mb-2">Looking for:</div>
                <div className="text-white">DH Alumni Industry Network • Job Opportunities • Research Collaborations</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-purple-600" />
                <h3 className="text-2xl text-slate-900">DH Alumni Network</h3>
              </div>
              <p className="text-slate-700 mb-4">
                Our growing alumni network spans academia, industry, and government. Alumni work at leading organizations including McKinsey, NITI Aayog, FLAME University, and Digital Nexus AI.
              </p>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-purple-600 mb-1">Alumni Sectors</div>
                <div className="text-sm text-slate-600">Consulting • Policy • EdTech • Cultural Heritage • AI/ML</div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
              <div className="flex items-center gap-3 mb-4">
                <Share2 className="w-8 h-8 text-green-600" />
                <h3 className="text-2xl text-slate-900">Social Media Updates</h3>
              </div>
              <p className="text-slate-700 mb-4">
                Stay updated with latest research, events, student achievements, and industry partnerships.
              </p>
              <div className="flex gap-3">
                <a href="https://twitter.com/IITJodhpur" target="_blank" rel="noopener noreferrer" className="bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow text-slate-700">
                  Twitter
                </a>
                <a href="https://www.facebook.com/IITJodhpur/" target="_blank" rel="noopener noreferrer" className="bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow text-slate-700">
                  Facebook
                </a>
                <a href="https://www.instagram.com/iitjodhpur/" target="_blank" rel="noopener noreferrer" className="bg-white px-4 py-2 rounded-lg shadow-sm hover:shadow-md transition-shadow text-slate-700">
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-900 to-purple-900 rounded-2xl p-12 text-white">
          <div className="flex items-center gap-3 mb-6">
            <Globe className="w-10 h-10" />
            <h3 className="text-3xl">Global DH Community Connections</h3>
          </div>
          <p className="text-xl text-indigo-100 mb-8">
            Our program is connected to international DH networks including ADHO, DARIAH, CenterNet, and regional associations, ensuring our students and research are part of a global conversation.
          </p>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
              <div className="text-2xl mb-1">ADHO</div>
              <div className="text-sm text-indigo-200">Global Alliance</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
              <div className="text-2xl mb-1">DARIAH</div>
              <div className="text-sm text-indigo-200">European Network</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
              <div className="text-2xl mb-1">CenterNet</div>
              <div className="text-sm text-indigo-200">International Centers</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4 text-center">
              <div className="text-2xl mb-1">JADH</div>
              <div className="text-sm text-indigo-200">Asian Network</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
