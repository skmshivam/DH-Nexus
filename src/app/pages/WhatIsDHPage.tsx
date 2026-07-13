import { WhatIsDH } from '../components/WhatIsDH';
import { Brain, Sparkles } from 'lucide-react';
import { DHNexusWatermark } from '../components/DHNexusLogo';

export function WhatIsDHPage() {
  return (
    <div className="relative">
      {/* Subtle watermark background */}
      <DHNexusWatermark />
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 py-20 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-6 border border-white/30">
            <Brain className="w-5 h-5" />
            <span className="text-sm">Understanding Digital Humanities</span>
          </div>
          <h1 className="text-5xl lg:text-7xl text-white mb-6">
            What is Digital Humanities?
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Discover the interdisciplinary field where technology meets humanities—creating the innovators and problem-solvers the world needs today
          </p>
        </div>
      </section>

      {/* Main Content */}
      <WhatIsDH />

      {/* Why It Matters CTA */}
      <section className="py-20 bg-gradient-to-br from-slate-900 to-indigo-900">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Sparkles className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Ready to Join the DH Revolution?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Digital Humanities is not just a field—it's a movement. Whether you're from humanities, tech, management, or any background, you can learn DH skills and become part of this transformative community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://forms.gle/927FLPxgbi7ww78K9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-900 px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-xl"
            >
              <Brain className="w-5 h-5" />
              <span className="font-semibold">Start Your DH Journey</span>
            </a>
            <a
              href="/global-dh"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white hover:bg-white/30 text-white px-8 py-4 rounded-xl transition-all"
            >
              Explore DH Programs Globally
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}