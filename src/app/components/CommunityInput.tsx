import { MessageSquare, Lightbulb, Users, TrendingUp, Globe, Sparkles, Target, Brain, ArrowRight, CheckCircle2, HelpCircle } from 'lucide-react';
import { Share2, MessageCircle, Linkedin, ExternalLink, UserPlus, Trophy, Star, Megaphone, BookOpen, Handshake, Briefcase, TrendingDown, Instagram } from 'lucide-react';
import instagramQR from 'figma:asset/d1ca32d8abb8a8a6a897eb3cca97a09a21474d7a.png';

const researchQuestions = [
  {
    icon: HelpCircle,
    color: 'indigo',
    question: 'What kind of information or resources do you feel are most missing or hardest to find in DH today?',
    context: 'Help us understand the gaps in Digital Humanities education and resources',
    examples: [
      'Career transition guides from non-tech backgrounds',
      'Real-world project portfolios from DH graduates',
      'Step-by-step tutorials for DH tools and methods',
      'Salary benchmarks and job market data',
      'Connection between DH courses and actual job roles'
    ],
    placeholder: 'Share what resources or information you wish existed...',
    gradient: 'from-indigo-50 to-indigo-100',
    borderColor: 'border-indigo-300',
    iconBg: 'from-indigo-500 to-indigo-600',
    textColor: 'text-indigo-600'
  },
  {
    icon: Globe,
    color: 'purple',
    question: 'Are there any DH platforms, websites, or communities (India or global) that you find particularly useful or well-structured?',
    context: 'Help us learn from the best and build better resources',
    examples: [
      'Academic portals like DHARTI, DH Commons',
      'Learning platforms like Coursera, edX',
      'Community forums or Slack/Discord groups',
      'Research repositories or project showcases',
      'Industry-academia collaboration platforms'
    ],
    placeholder: 'Share platforms or communities that inspired you...',
    gradient: 'from-purple-50 to-purple-100',
    borderColor: 'border-purple-300',
    iconBg: 'from-purple-500 to-purple-600',
    textColor: 'text-purple-600'
  },
  {
    icon: Users,
    color: 'pink',
    question: 'What would motivate people to actively contribute to a DH community — posts, resources, discussions, or collaborations?',
    context: 'Help us design features that encourage genuine participation',
    examples: [
      'Recognition through featured profiles or badges',
      'Direct networking with recruiters and companies',
      'Collaborative projects with real-world impact',
      'Mentorship opportunities from seniors',
      'Access to exclusive workshops or job postings'
    ],
    placeholder: 'Share what would motivate you to contribute actively...',
    gradient: 'from-pink-50 to-pink-100',
    borderColor: 'border-pink-300',
    iconBg: 'from-pink-500 to-pink-600',
    textColor: 'text-pink-600'
  },
  {
    icon: TrendingUp,
    color: 'green',
    question: 'As DH increasingly connects with the market, which skill areas or roles do you think students should focus on more?',
    context: 'Help us prioritize content and resources that matter most',
    examples: [
      'AI/ML applications in humanities context',
      'NLP and computational linguistics',
      'Data visualization and storytelling',
      'Product management for content-heavy platforms',
      'UX research with cultural intelligence'
    ],
    placeholder: 'Share which skills or roles deserve more focus...',
    gradient: 'from-green-50 to-green-100',
    borderColor: 'border-green-300',
    iconBg: 'from-green-500 to-green-600',
    textColor: 'text-green-600'
  }
];

export function CommunityInput() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Community-Driven Initiative</span>
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6 text-slate-900">
            Help Us Build Something Better
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            DH Nexus is a <span className="text-indigo-600 font-semibold">community-driven platform</span> built to create the most valuable resource for aspirants, students, and the broader DH community—but we need <span className="text-purple-600 font-semibold">your insights</span> to get there.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 md:p-12 text-white mb-16 shadow-2xl">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0">
              <Target className="w-8 h-8 text-cyan-300" />
            </div>
            <div>
              <h3 className="text-3xl lg:text-4xl mb-4">Our Vision: A Living Ecosystem</h3>
              <p className="text-xl text-indigo-100 leading-relaxed mb-4">
                We're not just building an information website—we're creating a <span className="text-yellow-300 font-semibold">living ecosystem</span> where aspirants discover DH, students grow their skills, companies find talent, and collaborations spark innovation.
              </p>
              <p className="text-lg text-purple-100 leading-relaxed">
                But what should this ecosystem prioritize? What features matter most? What's missing from existing DH resources? <span className="text-cyan-300 font-semibold">Your answers will directly shape how we build this platform.</span>
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <Lightbulb className="w-8 h-8 text-yellow-300 mb-3" />
              <h4 className="text-lg mb-2">For Aspirants</h4>
              <p className="text-sm text-indigo-100">Clear pathways from curiosity to enrollment to career success</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <Brain className="w-8 h-8 text-cyan-300 mb-3" />
              <h4 className="text-lg mb-2">For Students</h4>
              <p className="text-sm text-indigo-100">Resources, collaborations, and direct industry connections</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
              <Users className="w-8 h-8 text-pink-300 mb-3" />
              <h4 className="text-lg mb-2">For Companies</h4>
              <p className="text-sm text-indigo-100">Access to specialized talent that understands both tech and humans</p>
            </div>
          </div>
        </div>

        {/* Research Questions */}
        <div className="mb-12">
          <div className="text-center mb-10">
            <h3 className="text-3xl lg:text-4xl mb-4 text-slate-900">Four Questions That Will Shape Our Platform</h3>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Share your honest thoughts. There are no wrong answers—we want to understand your real experiences and needs.
            </p>
          </div>

          <div className="space-y-8">
            {researchQuestions.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-8 border-2 ${item.borderColor} shadow-lg hover:shadow-xl transition-all`}
                >
                  {/* Question Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.iconBg} rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className={`text-sm ${item.textColor} uppercase tracking-wide mb-2 flex items-center gap-2`}>
                        <span>Question {index + 1}</span>
                        <span className="text-slate-400">•</span>
                        <span className="text-slate-600 normal-case">{item.context}</span>
                      </div>
                      <h4 className="text-2xl text-slate-900 leading-tight">
                        {item.question}
                      </h4>
                    </div>
                  </div>

                  {/* Examples */}
                  <div className="bg-white rounded-xl p-6 mb-6 border border-slate-200">
                    <h5 className="text-sm text-slate-600 uppercase tracking-wide mb-3 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" />
                      Some Examples to Consider:
                    </h5>
                    <ul className="space-y-2">
                      {item.examples.map((example, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                          <CheckCircle2 className={`w-4 h-4 ${item.textColor} mt-0.5 flex-shrink-0`} />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Input Area */}
                  <div>
                    <textarea
                      placeholder={item.placeholder}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl border-2 border-slate-300 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200 transition-all resize-none text-slate-700 placeholder-slate-400"
                    />
                    <div className="flex items-center justify-between mt-3">
                      <p className="text-xs text-slate-500">Your response will help us prioritize features and resources</p>
                      <button
                        className={`px-6 py-2 bg-gradient-to-r ${item.iconBg} text-white rounded-lg hover:opacity-90 transition-all flex items-center gap-2 shadow-md`}
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Submit Response</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Why Your Input Matters */}
        <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-slate-200 mb-12">
          <div className="flex items-start gap-6 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-3xl text-slate-900 mb-4">Why Your Input Matters</h3>
              <p className="text-lg text-slate-700 leading-relaxed mb-4">
                Unlike official institutional portals, <span className="text-indigo-600 font-semibold">DH Nexus is built by students, for students</span>. We're not bound by bureaucracy or marketing agendas—we can move fast, experiment boldly, and focus entirely on what actually helps people.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Your honest feedback will directly influence what we build next: new resources, community features, industry connections, learning paths, collaboration tools, and more.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 border border-indigo-200">
              <div className="text-3xl mb-2 text-indigo-900">🎯</div>
              <h4 className="text-lg text-slate-900 mb-2">Student-First Design</h4>
              <p className="text-sm text-slate-700">Built by current DH students who understand the real challenges and opportunities</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200">
              <div className="text-3xl mb-2 text-purple-900">⚡</div>
              <h4 className="text-lg text-slate-900 mb-2">Rapid Iteration</h4>
              <p className="text-sm text-slate-700">We can implement your suggestions within weeks, not years</p>
            </div>
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6 border border-pink-200">
              <div className="text-3xl mb-2 text-pink-900">🤝</div>
              <h4 className="text-lg text-slate-900 mb-2">Community-Driven</h4>
              <p className="text-sm text-slate-700">Every feature we build is based on real needs from real people</p>
            </div>
          </div>
        </div>

        {/* Planned Features Based on Feedback */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-10 text-white shadow-2xl">
          <h3 className="text-3xl lg:text-4xl mb-6 text-center">Features We're Considering (Based on Your Input)</h3>
          <p className="text-xl text-indigo-200 text-center mb-10 max-w-3xl mx-auto">
            Depending on what the community needs most, here's what we might build next
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">📚</div>
              <h4 className="text-xl mb-2">Resource Library</h4>
              <p className="text-sm text-indigo-100">Curated tutorials, guides, and learning paths for DH tools and methods</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">💼</div>
              <h4 className="text-xl mb-2">Job Board</h4>
              <p className="text-sm text-indigo-100">DH-specific job postings with direct connections to hiring companies</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">👥</div>
              <h4 className="text-xl mb-2">Mentorship Network</h4>
              <p className="text-sm text-indigo-100">Connect aspirants with current students and alumni for guidance</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="text-xl mb-2">Project Showcase</h4>
              <p className="text-sm text-indigo-100">Portfolio platform for students to display their DH projects publicly</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🎓</div>
              <h4 className="text-xl mb-2">Skill Roadmaps</h4>
              <p className="text-sm text-indigo-100">Step-by-step learning paths from beginner to job-ready for different DH roles</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="text-xl mb-2">Collaboration Hub</h4>
              <p className="text-sm text-indigo-100">Find teammates for research projects, hackathons, and side projects</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-lg text-cyan-300 mb-6">
              Which features matter most to you? Your responses above will help us prioritize!
            </p>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3">
              <Sparkles className="w-5 h-5 text-yellow-300" />
              <span className="text-white">More features coming based on community feedback</span>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 border-2 border-green-300 inline-block">
            <h4 className="text-2xl text-slate-900 mb-3">Want to Contribute More?</h4>
            <p className="text-lg text-slate-700 mb-6 max-w-2xl">
              Join our community Discord/Slack, contribute to our GitHub, or reach out directly to collaborate on building the future of DH education in India.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="/team"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-6 py-3 rounded-xl transition-all inline-flex items-center gap-2 shadow-lg"
              >
                <Users className="w-5 h-5" />
                Meet the Team
              </a>
              <a
                href="/partner"
                className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 px-6 py-3 rounded-xl transition-all inline-flex items-center gap-2"
              >
                <ArrowRight className="w-5 h-5" />
                Partner With Us
              </a>
            </div>
          </div>
        </div>

        {/* NEW: Community Contribution & Multi-Platform Ecosystem */}
        <div className="mt-20">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
              <Share2 className="w-5 h-5" />
              <span className="text-sm font-medium">Knowledge Flows Both Ways</span>
            </div>
            <h2 className="text-4xl lg:text-6xl mb-6 text-slate-900">
              Join Our Multi-Platform DH Community
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              We believe in <span className="text-green-600 font-semibold">community-driven contributions</span>—where students, researchers, and practitioners <span className="text-emerald-600 font-semibold">share resources, insights, opportunities, and experiences</span>. This isn't a top-down portal. It's a <span className="text-teal-600 font-semibold">living network</span> powered by people like you.
            </p>
          </div>

          {/* Bidirectional Knowledge Flow Visual */}
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-3xl p-10 md:p-12 text-white mb-12 shadow-2xl">
            <div className="text-center mb-8">
              <h3 className="text-3xl lg:text-4xl mb-4">How Knowledge Flows in Our Community</h3>
              <p className="text-lg text-green-100 max-w-3xl mx-auto">
                Traditional platforms push information from top to bottom. We enable <span className="text-yellow-300 font-semibold">peer-to-peer sharing</span> across students, researchers, and practitioners from different institutions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* Traditional Model */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-white/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-red-500/80 rounded-xl flex items-center justify-center">
                    <TrendingDown className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl">❌ Traditional Model</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-red-100">
                    <span className="text-2xl">📚</span>
                    <p className="text-sm"><strong>Top-down only:</strong> Institutions publish content</p>
                  </div>
                  <div className="flex items-start gap-3 text-red-100">
                    <span className="text-2xl">🔒</span>
                    <p className="text-sm"><strong>Siloed knowledge:</strong> Each institute works in isolation</p>
                  </div>
                  <div className="flex items-start gap-3 text-red-100">
                    <span className="text-2xl">⏳</span>
                    <p className="text-sm"><strong>Slow updates:</strong> Information becomes outdated quickly</p>
                  </div>
                  <div className="flex items-start gap-3 text-red-100">
                    <span className="text-2xl">👤</span>
                    <p className="text-sm"><strong>Passive users:</strong> Students consume but don't contribute</p>
                  </div>
                </div>
              </div>

              {/* Our Model */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border-2 border-yellow-300">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-yellow-500/90 rounded-xl flex items-center justify-center">
                    <Share2 className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-2xl">✅ DH Nexus Model</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 text-yellow-100">
                    <span className="text-2xl">🔄</span>
                    <p className="text-sm"><strong>Bidirectional flow:</strong> Everyone can share and learn</p>
                  </div>
                  <div className="flex items-start gap-3 text-yellow-100">
                    <span className="text-2xl">🌐</span>
                    <p className="text-sm"><strong>Cross-institutional:</strong> Students from all DH programs connect</p>
                  </div>
                  <div className="flex items-start gap-3 text-yellow-100">
                    <span className="text-2xl">⚡</span>
                    <p className="text-sm"><strong>Real-time sharing:</strong> Fresh insights from current students</p>
                  </div>
                  <div className="flex items-start gap-3 text-yellow-100">
                    <span className="text-2xl">🤝</span>
                    <p className="text-sm"><strong>Active contributors:</strong> Build reputation and network</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-yellow-400/20 backdrop-blur-sm border-2 border-yellow-300 rounded-2xl p-6 text-center">
              <h4 className="text-2xl mb-3">💡 What You Can Contribute</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-white/10 rounded-lg p-3">
                  <BookOpen className="w-6 h-6 mx-auto mb-2 text-cyan-300" />
                  <p className="font-semibold">Resources</p>
                  <p className="text-xs text-green-100 mt-1">Tutorials, guides, tools</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <Lightbulb className="w-6 h-6 mx-auto mb-2 text-yellow-300" />
                  <p className="font-semibold">Insights</p>
                  <p className="text-xs text-green-100 mt-1">Course reviews, tips</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <Briefcase className="w-6 h-6 mx-auto mb-2 text-pink-300" />
                  <p className="font-semibold">Opportunities</p>
                  <p className="text-xs text-green-100 mt-1">Jobs, internships, grants</p>
                </div>
                <div className="bg-white/10 rounded-lg p-3">
                  <Star className="w-6 h-6 mx-auto mb-2 text-purple-300" />
                  <p className="font-semibold">Experiences</p>
                  <p className="text-xs text-green-100 mt-1">Stories, case studies</p>
                </div>
              </div>
            </div>
          </div>

          {/* Four Platform Integration */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {/* Website Platform */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-indigo-200 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Globe className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-slate-900 mb-3">🌐 Website</h3>
              <p className="text-slate-600 mb-6">
                Comprehensive resources, job postings, and project showcases.
              </p>
              
              <div className="space-y-3 mb-6">
                <h4 className="text-sm text-indigo-600 font-semibold uppercase tracking-wide">Share:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Research & tutorials</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Success stories</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Event announcements</span>
                  </div>
                </div>
              </div>

              <a
                href="#resources"
                className="block bg-gradient-to-r from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-600 text-white px-6 py-3 rounded-xl transition-all text-center font-medium shadow-md"
              >
                Explore Resources
              </a>
            </div>

            {/* LinkedIn Platform */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-200 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Linkedin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-slate-900 mb-3">💼 LinkedIn</h3>
              <p className="text-slate-600 mb-6">
                Professional networking and industry insights.
              </p>
              
              <div className="space-y-3 mb-6">
                <h4 className="text-sm text-blue-600 font-semibold uppercase tracking-wide">Share:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Industry trends</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Job opportunities</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Achievements</span>
                  </div>
                </div>
              </div>

              <a
                href="https://www.linkedin.com/company/dh-nexus"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-6 py-3 rounded-xl transition-all text-center font-medium shadow-md inline-flex items-center justify-center gap-2"
              >
                <span>Follow</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>

            {/* Instagram Platform */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-pink-200 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-slate-900 mb-3">📸 Instagram</h3>
              <p className="text-slate-600 mb-6">
                Visual storytelling and behind-the-scenes DH life.
              </p>
              
              <div className="space-y-3 mb-6">
                <h4 className="text-sm text-pink-600 font-semibold uppercase tracking-wide">Share:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Project visuals</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Campus life</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Quick tips & infographics</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href="https://www.instagram.com/dh_nexus/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-pink-500 to-rose-600 hover:from-pink-400 hover:to-rose-500 text-white px-6 py-3 rounded-xl transition-all text-center font-medium shadow-md inline-flex items-center justify-center gap-2"
                >
                  <span>Follow</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <details className="group">
                  <summary className="text-xs text-pink-600 cursor-pointer hover:text-pink-700 text-center font-medium">
                    Show QR Code
                  </summary>
                  <div className="mt-3 bg-gradient-to-br from-blue-50 to-purple-50 p-4 rounded-xl border-2 border-pink-200">
                    <img 
                      src={instagramQR} 
                      alt="Instagram QR Code - @dh_nexus" 
                      className="w-full h-auto rounded-lg"
                    />
                    <p className="text-xs text-center text-slate-600 mt-2">@dh_nexus</p>
                  </div>
                </details>
              </div>
            </div>

            {/* WhatsApp Platform */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-green-200 hover:shadow-2xl transition-all">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <MessageCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl text-slate-900 mb-3">💬 WhatsApp</h3>
              <p className="text-slate-600 mb-6">
                Real-time discussions with DH students across India.
              </p>
              
              <div className="space-y-3 mb-6">
                <h4 className="text-sm text-green-600 font-semibold uppercase tracking-wide">Share:</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Quick questions</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Daily opportunities</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700">Informal chats 😄</span>
                  </div>
                </div>
              </div>

              <a
                href="https://chat.whatsapp.com/dh-nexus-community"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-6 py-3 rounded-xl transition-all text-center font-medium shadow-md inline-flex items-center justify-center gap-2"
              >
                <span>Join Group</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Become a Core Member */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-10 md:p-12 text-white shadow-2xl mb-12">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3 mb-6">
                <Trophy className="w-5 h-5 text-yellow-300" />
                <span className="text-sm font-medium">Exclusive Opportunity</span>
              </div>
              <h3 className="text-3xl lg:text-5xl mb-4">Become a Core Member</h3>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto">
                Represent your institution in our growing community. Core members help shape the platform, mentor peers, and get exclusive access to opportunities.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-10">
              {/* What Core Members Do */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h4 className="text-2xl mb-6 flex items-center gap-3">
                  <UserPlus className="w-7 h-7 text-cyan-300" />
                  What Core Members Do
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-cyan-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Megaphone className="w-4 h-4 text-cyan-300" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Represent Your Institute</p>
                      <p className="text-sm text-purple-100">Be the voice of your DH program in our community</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-yellow-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Share2 className="w-4 h-4 text-yellow-300" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Curate & Share Content</p>
                      <p className="text-sm text-purple-100">Post resources, opportunities, and insights regularly</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-pink-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Handshake className="w-4 h-4 text-pink-300" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Facilitate Collaborations</p>
                      <p className="text-sm text-purple-100">Connect students across institutions for projects</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-green-300" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Guide Aspirants</p>
                      <p className="text-sm text-purple-100">Mentor people interested in your DH program</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* What You Get */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h4 className="text-2xl mb-6 flex items-center gap-3">
                  <Star className="w-7 h-7 text-yellow-300" />
                  What You Get
                </h4>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-indigo-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Trophy className="w-4 h-4 text-yellow-300" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Featured Profile</p>
                      <p className="text-sm text-purple-100">Highlighted on website with bio and social links</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-purple-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Globe className="w-4 h-4 text-purple-300" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Networking Access</p>
                      <p className="text-sm text-purple-100">Direct connections with industry partners and recruiters</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-pink-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Sparkles className="w-4 h-4 text-pink-300" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Early Opportunities</p>
                      <p className="text-sm text-purple-100">First access to jobs, internships, and collaborations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-green-400/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Target className="w-4 h-4 text-green-300" />
                    </div>
                    <div>
                      <p className="font-semibold mb-1">Platform Influence</p>
                      <p className="text-sm text-purple-100">Help decide what features we build next</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-400/30 to-pink-400/30 backdrop-blur-sm border-2 border-yellow-300 rounded-2xl p-8 text-center">
              <h4 className="text-2xl mb-4">🎓 Which Institutions Are Represented?</h4>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                We're building a <strong className="text-white">cross-institutional network</strong> of DH students from programs across India and beyond. Current representation includes:
              </p>
              <div className="flex flex-wrap justify-center gap-3 mb-6 text-sm">
                <span className="bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full">IIT Jodhpur</span>
                <span className="bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full">Your Institute Next?</span>
                <span className="bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-purple-200">+ More Coming Soon</span>
              </div>
              <a
                href="mailto:dhnexus@iitj.ac.in?subject=Core Member Application"
                className="inline-flex items-center gap-2 bg-white text-purple-600 hover:bg-purple-50 px-8 py-4 rounded-xl transition-all font-semibold text-lg shadow-xl"
              >
                <UserPlus className="w-6 h-6" />
                Apply to Be a Core Member
              </a>
            </div>
          </div>

          {/* Why This Multi-Platform Approach Works */}
          <div className="bg-white rounded-3xl p-10 shadow-xl border-2 border-slate-200">
            <h3 className="text-3xl text-slate-900 mb-6 text-center">Why This Multi-Platform Approach Works</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl text-slate-900 mb-3">Meet People Where They Are</h4>
                <p className="text-slate-600">
                  Some prefer LinkedIn for professional content. Others want WhatsApp for quick chats. We're on all platforms.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Share2 className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl text-slate-900 mb-3">Different Content Types</h4>
                <p className="text-slate-600">
                  Long-form resources on the website. Quick updates on LinkedIn. Real-time support on WhatsApp.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-xl text-slate-900 mb-3">Stronger Network Effects</h4>
                <p className="text-slate-600">
                  More touchpoints = more engagement. Cross-platform presence builds a truly vibrant community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}