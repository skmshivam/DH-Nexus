import { Network, Sparkles, TrendingUp, Globe, ArrowRight, Play, Zap, Award, Users, Rocket, Code, BookOpen, Brain, Target, ChevronDown, Briefcase, DollarSign, Building2, ChartBar } from 'lucide-react';
import { DHNexusLogoGlow } from './DHNexusLogo';

export function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white min-h-screen flex items-center">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>

      {/* Floating animated orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Floating tech icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <Code className="absolute top-20 left-10 w-12 h-12 animate-float" />
        <ChartBar className="absolute top-40 right-20 w-16 h-16 animate-float-delayed" />
        <Brain className="absolute bottom-32 left-1/4 w-14 h-14 animate-float-slow" />
        <Network className="absolute top-1/3 right-1/3 w-10 h-10 animate-pulse" />
        <Target className="absolute bottom-20 right-1/4 w-12 h-12 animate-float" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-16 lg:py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Main Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 backdrop-blur-sm border border-green-400/30 rounded-full px-6 py-3 hover:border-green-400/50 transition-all group">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-100">Engineering the Future of Knowledge</span>
              <Zap className="w-4 h-4 text-green-300 group-hover:scale-110 transition-transform" />
            </div>

            {/* Logo and Title */}
            <div className="space-y-4">
              <DHNexusLogoGlow className="animate-float" />

              <h1 className="text-5xl lg:text-7xl leading-tight">
                <span className="block bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent mb-3">
                  Where Humanities
                  <br />Meets Technology
                </span>
                <span className="block text-3xl lg:text-4xl text-indigo-200">
                  Discover Interdisciplinary Talent
                </span>
              </h1>
            </div>

            {/* Value Proposition */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 space-y-4">
              <p className="text-xl lg:text-2xl text-white leading-relaxed">
                DH NEXUS connects <span className="text-cyan-300 font-bold">Humanities, AI, Digital Innovation, Research, Design, Culture, Heritage, Industry, and Careers</span> — empowering interdisciplinary professionals the world needs.
              </p>

              {/* Skill cards */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gradient-to-br from-cyan-500/20 to-cyan-600/20 rounded-xl p-4 border border-cyan-400/30">
                  <div className="text-3xl mb-2">🤖</div>
                  <div className="text-white font-semibold mb-1">AI & Data Science</div>
                  <div className="text-sm text-cyan-100">NLP, ML, GIS, Digital Innovation</div>
                </div>
                <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 rounded-xl p-4 border border-purple-400/30">
                  <div className="text-3xl mb-2">🏛️</div>
                  <div className="text-white font-semibold mb-1">Digital Heritage</div>
                  <div className="text-sm text-purple-100">Archives, Culture, Preservation</div>
                </div>
                <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 rounded-xl p-4 border border-pink-400/30">
                  <div className="text-3xl mb-2">🎨</div>
                  <div className="text-white font-semibold mb-1">Design Thinking</div>
                  <div className="text-sm text-pink-100">UX Research, Human-Centered Innovation</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="/join-talent"
                className="group bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-8 py-4 rounded-xl transition-all transform hover:scale-105 inline-flex items-center gap-3 shadow-2xl shadow-green-500/30 font-semibold"
              >
                <Users className="w-5 h-5 group-hover:scale-110 transition-transform" />
                <span>Join the Community</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/global-dh"
                className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:border-white/50 hover:bg-white/15 px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2 font-semibold"
              >
                <Globe className="w-5 h-5" />
                <span>Explore Opportunities</span>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="flex items-center gap-3 pt-6 text-cyan-300 animate-bounce">
              <ChevronDown className="w-5 h-5" />
              <span className="text-sm">See what interdisciplinary professionals can do</span>
            </div>
          </div>

          {/* Right Column - Tech Stack Visual */}
          <div className="hidden lg:block relative">
            <div className="relative">
              {/* Central Hub */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-3xl shadow-2xl shadow-cyan-500/50 flex items-center justify-center transform rotate-6 hover:rotate-12 transition-transform duration-500">
                <Network className="w-20 h-20 text-white" />
              </div>

              {/* Orbiting Cards */}
              <div className="relative w-full h-[600px]">
                {/* Humanities Card */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-gradient-to-br from-indigo-600/90 to-purple-600/90 backdrop-blur-sm border border-indigo-400/30 rounded-2xl p-6 shadow-xl hover:scale-110 transition-transform duration-300 animate-float">
                  <Brain className="w-10 h-10 text-cyan-300 mb-2" />
                  <div className="text-sm font-bold">Humanities & AI</div>
                  <div className="text-xs text-indigo-200 mt-1">NLP, Ethics, Culture</div>
                </div>

                {/* Heritage Card */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-gradient-to-br from-pink-600/90 to-rose-600/90 backdrop-blur-sm border border-pink-400/30 rounded-2xl p-6 shadow-xl hover:scale-110 transition-transform duration-300 animate-float-delayed">
                  <BookOpen className="w-10 h-10 text-yellow-300 mb-2" />
                  <div className="text-sm font-bold">Digital Heritage</div>
                  <div className="text-xs text-pink-200 mt-1">Archives, GIS, XR</div>
                </div>

                {/* Research Card */}
                <div className="absolute top-1/2 left-0 -translate-y-1/2 bg-gradient-to-br from-green-600/90 to-emerald-600/90 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6 shadow-xl hover:scale-110 transition-transform duration-300 animate-float-slow">
                  <ChartBar className="w-10 h-10 text-cyan-300 mb-2" />
                  <div className="text-sm font-bold">Research & Data</div>
                  <div className="text-xs text-green-200 mt-1">Python, R, Visualization</div>
                </div>

                {/* Design Card */}
                <div className="absolute top-1/2 right-0 -translate-y-1/2 bg-gradient-to-br from-amber-600/90 to-orange-600/90 backdrop-blur-sm border border-amber-400/30 rounded-2xl p-6 shadow-xl hover:scale-110 transition-transform duration-300 animate-float">
                  <Code className="w-10 h-10 text-purple-300 mb-2" />
                  <div className="text-sm font-bold">Design & Tech</div>
                  <div className="text-xs text-amber-200 mt-1">UX, Innovation, Strategy</div>
                </div>

                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20">
                  <line x1="50%" y1="20%" x2="50%" y2="50%" stroke="url(#gradient1)" strokeWidth="2" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                  </line>
                  <line x1="50%" y1="80%" x2="50%" y2="50%" stroke="url(#gradient2)" strokeWidth="2" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                  </line>
                  <line x1="20%" y1="50%" x2="50%" y2="50%" stroke="url(#gradient3)" strokeWidth="2" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                  </line>
                  <line x1="80%" y1="50%" x2="50%" y2="50%" stroke="url(#gradient4)" strokeWidth="2" strokeDasharray="5,5">
                    <animate attributeName="stroke-dashoffset" from="0" to="10" dur="1s" repeatCount="indefinite" />
                  </line>
                  <defs>
                    <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#06b6d4" />
                      <stop offset="100%" stopColor="#8b5cf6" />
                    </linearGradient>
                    <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#ec4899" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#10b981" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                    <linearGradient id="gradient4" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#06b6d4" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Platform pillars */}
        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group">
            <Users className="w-8 h-8 text-purple-400 mb-3 group-hover:scale-110 transition-transform" />
            <div className="text-lg font-semibold mb-1">Interdisciplinary Network</div>
            <div className="text-sm text-blue-200">Students, researchers, educators, and professionals worldwide</div>
          </div>
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group">
            <Network className="w-8 h-8 text-cyan-400 mb-3 group-hover:scale-110 transition-transform" />
            <div className="text-lg font-semibold mb-1">Global Programs</div>
            <div className="text-sm text-blue-200">DH, AI & Humanities universities worldwide</div>
          </div>
          <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all group">
            <Building2 className="w-8 h-8 text-green-400 mb-3 group-hover:scale-110 transition-transform" />
            <div className="text-lg font-semibold mb-1">Career Pathways</div>
            <div className="text-sm text-blue-200">Research, industry, policy, and innovation careers</div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <a href="#quick-actions" className="flex flex-col items-center gap-2 text-blue-200 hover:text-white transition-colors group">
            <span className="text-sm">Discover what's possible</span>
            <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-cyan-400" />
          </a>
        </div>
      </div>
    </div>
  );
}
