import { Rocket, Heart, Users, Code, Palette, BookOpen, MessageSquare, Lightbulb, Target, CheckCircle, ArrowRight, Sparkles, Github, Instagram, Linkedin, Globe } from 'lucide-react';
import { DHNexusWatermark } from '../components/DHNexusLogo';

export function HelpUsBuildPage() {
  return (
    <div className="relative">
      {/* Subtle watermark background */}
      <DHNexusWatermark />
      
      {/* Hero Header */}
      <section className="bg-gradient-to-br from-purple-600 via-pink-600 to-rose-600 py-20 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-6 border border-white/30">
            <Heart className="w-5 h-5" />
            <span className="text-sm">Community-Driven Initiative</span>
          </div>
          <h1 className="text-5xl lg:text-7xl text-white mb-6">
            Help Us Build DH Nexus
          </h1>
          <p className="text-xl lg:text-2xl text-pink-100 max-w-4xl mx-auto leading-relaxed mb-8">
            DH Nexus is a <span className="text-yellow-300 font-semibold">community-driven platform</span> built by the community, for the community. Your ideas, feedback, and contributions can shape the future of this initiative.
          </p>
          <div className="inline-flex items-center gap-2 bg-yellow-400/20 backdrop-blur-sm text-white px-6 py-3 rounded-full border border-yellow-300/30">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-sm">Open to professionals, students, researchers, and enthusiasts from ALL backgrounds</span>
          </div>
        </div>
      </section>

      {/* Why We Need You */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6 text-slate-900">
              Why We Need <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Your Help</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              DH Nexus started as an idea to help aspirants understand Digital Humanities. But we realized—this platform can be so much more. With your input, we can create the most comprehensive DH resource and community in India and beyond.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Lightbulb className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl text-slate-900 mb-3">Share Your Ideas</h3>
              <p className="text-slate-600 mb-4">
                What features would make this platform more valuable? What resources are missing? Your suggestions can transform DH Nexus.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Suggest new sections or features</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Request specific resources or guides</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Share what you wish existed when you started</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-indigo-100 hover:border-indigo-300 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl text-slate-900 mb-3">Give Feedback</h3>
              <p className="text-slate-600 mb-4">
                What's working well? What needs improvement? Your honest feedback helps us iterate and improve every day.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Report bugs or technical issues</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Suggest UX/design improvements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Share your user experience</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 hover:border-green-300 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <BookOpen className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl text-slate-900 mb-3">Contribute Content</h3>
              <p className="text-slate-600 mb-4">
                Have experience with DH projects, tools, or career paths? Share your knowledge through articles, tutorials, or case studies.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Write tutorials or how-to guides</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Share project case studies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Curate resource lists</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-amber-100 hover:border-amber-300 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-4">
                <Code className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl text-slate-900 mb-3">Technical Contributions</h3>
              <p className="text-slate-600 mb-4">
                Developers and designers—we'd love your help building new features, improving performance, or enhancing the visual experience.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Code new features (React/TypeScript)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Design UI/UX improvements</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Optimize performance</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-cyan-100 hover:border-cyan-300 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl text-slate-900 mb-3">Build Community</h3>
              <p className="text-slate-600 mb-4">
                Help us grow the DH community by spreading the word, moderating discussions, or organizing events and workshops.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Share DH Nexus on social media</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Help moderate community channels</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Organize virtual meetups</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-rose-100 hover:border-rose-300 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-rose-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl text-slate-900 mb-3">Connect Opportunities</h3>
              <p className="text-slate-600 mb-4">
                Know companies hiring DH talent? Aware of grants, scholarships, or events? Help us keep the community informed.
              </p>
              <ul className="space-y-2 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Share job opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Post scholarship/grant info</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Announce events and conferences</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contribution Form Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-10 lg:p-16 shadow-2xl">
            <div className="text-center mb-10">
              <Rocket className="w-16 h-16 text-purple-600 mx-auto mb-6" />
              <h2 className="text-4xl lg:text-5xl text-slate-900 mb-4">
                Submit Your Ideas & Contributions
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Fill out this quick form to share your ideas, feedback, content, or offer to help build specific features. We review every submission!
              </p>
            </div>

            {/* What You Can Share */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 mb-8 border border-purple-200">
              <h3 className="text-2xl text-slate-900 mb-4 text-center">What Can You Share?</h3>
              <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-700">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Feature requests & platform improvements</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Bug reports & technical issues</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Resource suggestions (tools, books, courses)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Job opportunities & career guidance</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Project case studies & success stories</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Tutorial/guide topics you'd like to see</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Volunteering for content creation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Design, development, or moderation help</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a
                href="https://forms.gle/VqqeGB2EvyXym5UW7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white px-12 py-5 rounded-2xl transition-all transform hover:scale-105 shadow-2xl text-lg"
              >
                <Heart className="w-6 h-6" />
                <span className="font-semibold">Share Your Ideas (2 min)</span>
                <ArrowRight className="w-6 h-6" />
              </a>
              <p className="text-sm text-slate-500 mt-4">
                ✨ Every suggestion is reviewed by our core team • We'll credit contributors publicly
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Priorities */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl mb-6 text-slate-900">
              What We're <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Building Next</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Here's our current roadmap. Want to help with any of these? Let us know in the form!
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Interactive Learning Paths", desc: "Curated DH learning roadmaps for different backgrounds", status: "In Progress", color: "blue" },
              { title: "Project Showcase Gallery", desc: "Platform for students to showcase DH projects with images/demos", status: "Planning", color: "purple" },
              { title: "Mentor Matching System", desc: "Connect DH aspirants with experienced professionals", status: "Planning", color: "green" },
              { title: "Tool & Resource Library", desc: "Comprehensive database of DH tools with ratings & reviews", status: "Collecting Data", color: "amber" },
              { title: "Career Stories Archive", desc: "Video/written interviews with DH professionals about their journeys", status: "Need Content", color: "pink" },
              { title: "Community Forums", desc: "Discussion boards for Q&A, project help, and networking", status: "Considering", color: "cyan" }
            ].map((item, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-md border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl text-slate-900 font-semibold">{item.title}</h3>
                  <span className={`bg-${item.color}-100 text-${item.color}-700 px-3 py-1 rounded-full text-xs whitespace-nowrap`}>
                    {item.status}
                  </span>
                </div>
                <p className="text-slate-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join the Team */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-12 text-white text-center">
            <Users className="w-16 h-16 mx-auto mb-6 text-cyan-300" />
            <h2 className="text-4xl lg:text-5xl mb-6">
              Join DH Nexus Operations Team
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Become part of the core DH Nexus Operations Assistance Team! We're looking for passionate individuals to help grow this platform through content creation, outreach, design, development, and community management.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Code className="w-10 h-10 text-cyan-300 mb-3 mx-auto" />
                <h4 className="text-lg mb-2">Developers</h4>
                <p className="text-sm text-blue-100">React, TypeScript, Backend, UI/UX</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Palette className="w-10 h-10 text-pink-300 mb-3 mx-auto" />
                <h4 className="text-lg mb-2">Designers</h4>
                <p className="text-sm text-blue-100">Graphics, branding, social media, UX</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <BookOpen className="w-10 h-10 text-yellow-300 mb-3 mx-auto" />
                <h4 className="text-lg mb-2">Content & Outreach</h4>
                <p className="text-sm text-blue-100">Writers, educators, community managers</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://forms.gle/uwmUJyDbyq5VVLUx7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-slate-900 px-10 py-4 rounded-xl transition-all transform hover:scale-105 shadow-xl text-lg font-semibold"
              >
                <Rocket className="w-5 h-5" />
                <span>Join Operations Team</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              
              <a
                href="https://forms.gle/VqqeGB2EvyXym5UW7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white hover:bg-white/30 text-white px-8 py-4 rounded-xl transition-all text-lg"
              >
                <Heart className="w-5 h-5" />
                <span>Share Feedback/Ideas</span>
              </a>
            </div>
            
            <p className="text-sm text-blue-200 mt-6 max-w-2xl mx-auto">
              ✨ Flexible commitment • Work remotely • Build your portfolio • Make real impact on the DH community
            </p>
          </div>
        </div>
      </section>

      {/* Connect With Us */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl mb-6 text-slate-900">
            Stay Connected
          </h2>
          <p className="text-xl text-slate-600 mb-10 max-w-3xl mx-auto">
            Follow our journey, share your thoughts, and engage with the DH community on our social channels
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a
              href="https://www.linkedin.com/company/dh-nexus"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white hover:bg-blue-50 text-slate-900 px-8 py-4 rounded-xl shadow-lg border border-slate-200 hover:border-blue-300 transition-all transform hover:scale-105"
            >
              <Linkedin className="w-6 h-6 text-blue-600" />
              <div className="text-left">
                <div className="text-sm text-slate-600">Follow us on</div>
                <div className="font-semibold">LinkedIn</div>
              </div>
            </a>
            <a
              href="https://www.instagram.com/dh_nexus/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-white hover:bg-pink-50 text-slate-900 px-8 py-4 rounded-xl shadow-lg border border-slate-200 hover:border-pink-300 transition-all transform hover:scale-105"
            >
              <Instagram className="w-6 h-6 text-pink-600" />
              <div className="text-left">
                <div className="text-sm text-slate-600">Follow us on</div>
                <div className="font-semibold">Instagram</div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-16 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Heart className="w-12 h-12 text-white mx-auto mb-4" />
          <h3 className="text-3xl text-white mb-4">
            Built by Students, For Everyone
          </h3>
          <p className="text-lg text-purple-100">
            Every feature, every resource, every connection on this platform exists because someone cared enough to contribute. Be that person. Help us build something extraordinary together.
          </p>
        </div>
      </section>
    </div>
  );
}