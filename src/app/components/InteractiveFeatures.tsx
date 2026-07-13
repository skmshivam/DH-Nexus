import { useState } from 'react';
import { Users, Building2, TrendingUp, Globe, BookOpen, Briefcase, GraduationCap, Heart, ArrowRight, Sparkles, Code, Brain, Zap } from 'lucide-react';

export function InteractiveFeatures() {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const features = [
    {
      icon: Users,
      title: 'Connect with DH Professionals',
      description: 'Network with 500+ Digital Humanities professionals globally',
      stat: '500+',
      statLabel: 'Active Members',
      color: 'from-blue-500 to-indigo-600',
      hoverColor: 'hover:from-blue-600 hover:to-indigo-700',
      action: 'Explore Network',
      link: '/talent-directory'
    },
    {
      icon: Building2,
      title: 'Partner with Top Companies',
      description: 'Access opportunities from leading tech companies and startups',
      stat: '100+',
      statLabel: 'Partner Companies',
      color: 'from-purple-500 to-pink-600',
      hoverColor: 'hover:from-purple-600 hover:to-pink-700',
      action: 'View Partners',
      link: '/industry'
    },
    {
      icon: GraduationCap,
      title: 'Explore Global Programs',
      description: 'Discover 65+ DH programs from universities worldwide',
      stat: '65+',
      statLabel: 'Global Programs',
      color: 'from-orange-500 to-rose-600',
      hoverColor: 'hover:from-orange-600 hover:to-rose-700',
      action: 'Browse Programs',
      link: '/global-dh'
    },
    {
      icon: Briefcase,
      title: 'Find Your Next Role',
      description: 'Browse exclusive job opportunities in Digital Humanities',
      stat: 'Live',
      statLabel: 'Job Board',
      color: 'from-green-500 to-emerald-600',
      hoverColor: 'hover:from-green-600 hover:to-emerald-700',
      action: 'View Jobs',
      link: '/jobs'
    }
  ];

  const stats = [
    {
      icon: Code,
      value: '500+',
      label: 'DH Professionals',
      color: 'text-blue-600'
    },
    {
      icon: Building2,
      value: '100+',
      label: 'Partner Companies',
      color: 'text-purple-600'
    },
    {
      icon: GraduationCap,
      value: '65+',
      label: 'Global Universities',
      color: 'text-orange-600'
    },
    {
      icon: Globe,
      value: '25+',
      label: 'Countries Represented',
      color: 'text-green-600'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-6 py-3 rounded-full mb-6 border border-indigo-200">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-semibold">Interactive Platform</span>
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Everything You Need in One Place
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join the fastest-growing Digital Humanities community connecting talent, education, and industry
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-xl hover:scale-105 transition-all group"
              >
                <Icon className={`w-8 h-8 ${stat.color} mb-3 group-hover:scale-110 transition-transform`} />
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-1">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Interactive Feature Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isActive = activeCard === index;
            
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className={`group relative bg-white rounded-3xl p-8 shadow-xl border-2 transition-all duration-500 ${
                  isActive 
                    ? 'border-indigo-400 scale-105 shadow-2xl' 
                    : 'border-slate-200 hover:border-indigo-200'
                }`}
              >
                {/* Background Gradient on Hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 mb-6">{feature.description}</p>

                  {/* Stat */}
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <div className={`text-4xl font-bold bg-gradient-to-r ${feature.color} bg-clip-text text-transparent`}>
                        {feature.stat}
                      </div>
                      <div className="text-sm text-slate-500">{feature.statLabel}</div>
                    </div>
                    
                    {/* Action Button */}
                    <a
                      href={feature.link}
                      className={`inline-flex items-center gap-2 bg-gradient-to-r ${feature.color} ${feature.hoverColor} text-white px-6 py-3 rounded-xl transition-all shadow-lg hover:shadow-xl group-hover:scale-105`}
                    >
                      <span className="text-sm font-semibold">{feature.action}</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>

                  {/* Progress Bar Animation */}
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div 
                      className={`h-full bg-gradient-to-r ${feature.color} transition-all duration-1000 ${
                        isActive ? 'w-full' : 'w-0'
                      }`}
                    ></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Why Join Section */}
        <div className="mt-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 rounded-3xl p-10 lg:p-16 text-white shadow-2xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-cyan-300 px-4 py-2 rounded-full mb-6 border border-white/20">
                <Heart className="w-4 h-4" />
                <span className="text-sm font-semibold">Why Join DH Nexus?</span>
              </div>
              <h3 className="text-3xl lg:text-5xl mb-6">
                Be Part of Something Bigger
              </h3>
              <p className="text-xl text-blue-200 mb-8">
                Join a thriving community where academia meets industry, where culture meets technology, and where your unique skills are celebrated and valued.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="https://forms.gle/927FLPxgbi7ww78K9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-indigo-600 hover:bg-cyan-50 px-8 py-4 rounded-xl transition-all shadow-xl hover:scale-105 font-semibold"
                >
                  <Users className="w-5 h-5" />
                  Join the Network
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white hover:bg-white/20 text-white px-8 py-4 rounded-xl transition-all"
                >
                  Get in Touch
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Brain, label: 'Cutting-Edge Research', color: 'from-cyan-500 to-blue-600' },
                { icon: Zap, label: 'Industry Connections', color: 'from-purple-500 to-pink-600' },
                { icon: BookOpen, label: 'Learning Resources', color: 'from-green-500 to-emerald-600' },
                { icon: TrendingUp, label: 'Career Growth', color: 'from-orange-500 to-rose-600' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:scale-105 transition-all"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mb-4`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm font-semibold">{item.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
