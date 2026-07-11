import { Briefcase, TrendingUp, Users, Award, Zap, Target, CheckCircle, ArrowRight, Sparkles, Code, Brain, BarChart, MessageSquare, Lightbulb } from 'lucide-react';

export function ForRecruiters() {
  return (
    <section id="for-recruiters" className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')]"></div>
      </div>
      
      {/* Hero Image Overlay */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="https://images.unsplash.com/photo-1496180470114-6ef490f3ff22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY2NjQyMzI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Business professionals"
          className="w-full h-full object-cover"
          width="1080"
          height="720"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 px-6 py-2 rounded-full mb-6">
            <Briefcase className="w-5 h-5" />
            <span className="text-sm">For Recruiters & HR Professionals</span>
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6">
            Hiring a DH Graduate? <br />
            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300 bg-clip-text text-transparent">
              You're Getting 5 Hires in One
            </span>
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto">
            Our network includes students and professionals from diverse backgrounds—humanities, tech, management, and more—all learning DH skills. They're the <span className="text-yellow-300">unicorn talents</span> who bridge every gap in your organization. From tech to content, data to design, research to strategy—they've got you covered.
          </p>
        </div>

        {/* The Value Proposition Box */}
        <div className="bg-gradient-to-br from-white to-blue-50 text-slate-900 rounded-3xl p-12 mb-16 shadow-2xl">
          <div className="text-center mb-10">
            <h3 className="text-3xl lg:text-4xl mb-4">The 10-Second Pitch</h3>
            <p className="text-xl text-slate-700 max-w-4xl mx-auto">
              DH graduates are <span className="text-indigo-600">hybrid professionals</span> who combine technical skills with human-centered thinking. They code, they write, they analyze data, they understand people. They're ready for <span className="text-purple-600">roles you haven't even created yet</span>.
            </p>
          </div>

          {/* Skills Matrix */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white rounded-xl p-6">
              <Code className="w-8 h-8 mb-4" />
              <h4 className="text-xl mb-2">Technical Skills</h4>
              <ul className="text-sm text-blue-100 space-y-1">
                <li>• Python, R, JavaScript</li>
                <li>• Machine Learning & AI</li>
                <li>• Data Analysis & Visualization</li>
                <li>• Web Development</li>
                <li>• Database Management</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-xl p-6">
              <Brain className="w-8 h-8 mb-4" />
              <h4 className="text-xl mb-2">Analytical Skills</h4>
              <ul className="text-sm text-purple-100 space-y-1">
                <li>• Critical Thinking</li>
                <li>• Research Methodology</li>
                <li>• Pattern Recognition</li>
                <li>• Problem Solving</li>
                <li>• Strategic Analysis</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-pink-500 to-pink-600 text-white rounded-xl p-6">
              <MessageSquare className="w-8 h-8 mb-4" />
              <h4 className="text-xl mb-2">Communication</h4>
              <ul className="text-sm text-pink-100 space-y-1">
                <li>• Technical Writing</li>
                <li>• Content Creation</li>
                <li>• Presentation Skills</li>
                <li>• Storytelling with Data</li>
                <li>• Cross-team Collaboration</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-500 to-amber-600 text-white rounded-xl p-6">
              <BarChart className="w-8 h-8 mb-4" />
              <h4 className="text-xl mb-2">Data & Research</h4>
              <ul className="text-sm text-amber-100 space-y-1">
                <li>• Quantitative Analysis</li>
                <li>• Qualitative Research</li>
                <li>• User Research</li>
                <li>• Data Mining</li>
                <li>• Statistical Modeling</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white rounded-xl p-6">
              <Lightbulb className="w-8 h-8 mb-4" />
              <h4 className="text-xl mb-2">Design & UX</h4>
              <ul className="text-sm text-green-100 space-y-1">
                <li>• User Experience Design</li>
                <li>• Human-Centered Design</li>
                <li>• Digital Product Design</li>
                <li>• Information Architecture</li>
                <li>• Accessibility</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-indigo-500 to-indigo-600 text-white rounded-xl p-6">
              <Target className="w-8 h-8 mb-4" />
              <h4 className="text-xl mb-2">Domain Expertise</h4>
              <ul className="text-sm text-indigo-100 space-y-1">
                <li>• Cultural Understanding</li>
                <li>• Social Dynamics</li>
                <li>• Ethical AI & Tech</li>
                <li>• Digital Policy</li>
                <li>• Global Perspectives</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Where They Fit - Career Paths */}
        <div className="mb-16">
          <h3 className="text-3xl lg:text-4xl mb-8 text-center">Where DH Graduates Excel</h3>
          <p className="text-xl text-blue-100 text-center mb-10 max-w-3xl mx-auto">
            "Everything Under the Sun" — Seriously, there's hardly a role where DH skills don't add value
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="text-3xl mb-3">💻</div>
              <h4 className="text-xl mb-3">Tech Roles</h4>
              <ul className="text-sm text-blue-100 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>AI/ML Engineer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Full Stack Developer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Data Engineer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Technical Writer</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="text-xl mb-3">Data & Analytics</h4>
              <ul className="text-sm text-blue-100 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Data Analyst</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Data Scientist</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Business Analyst</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Research Analyst</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="text-3xl mb-3">🎨</div>
              <h4 className="text-xl mb-3">Product & Design</h4>
              <ul className="text-sm text-blue-100 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>UX Researcher</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Product Manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Content Strategist</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Digital Designer</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="text-xl mb-3">Strategy & Innovation</h4>
              <ul className="text-sm text-blue-100 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Digital Strategist</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Innovation Consultant</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Project Manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Policy Analyst</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="text-3xl mb-3">📱</div>
              <h4 className="text-xl mb-3">Digital Marketing</h4>
              <ul className="text-sm text-blue-100 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>SEO Specialist</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Content Manager</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Social Media Analyst</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Growth Hacker</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="text-3xl mb-3">🎬</div>
              <h4 className="text-xl mb-3">Media & Content</h4>
              <ul className="text-sm text-blue-100 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Digital Journalist</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Content Producer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Multimedia Specialist</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Interactive Designer</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="text-3xl mb-3">🏢</div>
              <h4 className="text-xl mb-3">EdTech & Learning</h4>
              <ul className="text-sm text-blue-100 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Learning Designer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Curriculum Developer</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Educational Technologist</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Training Specialist</span>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
              <div className="text-3xl mb-3">🌐</div>
              <h4 className="text-xl mb-3">Emerging Fields</h4>
              <ul className="text-sm text-blue-100 space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>AI Ethics Consultant</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Digital Archivist</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Cultural Data Analyst</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Digital Humanities Specialist</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Why Hire DH Graduates */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 border border-blue-400/30 rounded-xl p-8 backdrop-blur-sm">
            <div className="w-14 h-14 bg-blue-500 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-7 h-7" />
            </div>
            <h4 className="text-2xl mb-4">Rapid Adaptability</h4>
            <p className="text-blue-100">
              Trained to learn new tools, technologies, and methodologies quickly. They pivot between roles seamlessly because they're used to working at intersections.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 border border-purple-400/30 rounded-xl p-8 backdrop-blur-sm">
            <div className="w-14 h-14 bg-purple-500 rounded-xl flex items-center justify-center mb-6">
              <Users className="w-7 h-7" />
            </div>
            <h4 className="text-2xl mb-4">Bridge Builders</h4>
            <p className="text-purple-100">
              They speak the language of both tech teams and non-tech stakeholders. Perfect for roles requiring cross-functional collaboration and translation between departments.
            </p>
          </div>

          <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/20 border border-pink-400/30 rounded-xl p-8 backdrop-blur-sm">
            <div className="w-14 h-14 bg-pink-500 rounded-xl flex items-center justify-center mb-6">
              <Award className="w-7 h-7" />
            </div>
            <h4 className="text-2xl mb-4">Human-Centered Tech</h4>
            <p className="text-pink-100">
              They build technology with people in mind. Ethics, accessibility, cultural sensitivity, and social impact are built into their DNA—crucial for responsible innovation.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-amber-500 to-orange-500 rounded-3xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl lg:text-4xl mb-6 text-white">Ready to Hire DH Talent?</h3>
          <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
            Connect with IIT Jodhpur's Digital Humanities program for internships, placements, and collaborative projects. Access a pipeline of versatile, future-ready professionals.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="/talent-directory"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2"
            >
              <Users className="w-5 h-5" />
              View Talent Pipeline
            </a>
            <a 
              href="/partner"
              className="bg-white/20 backdrop-blur-sm border-2 border-white text-white hover:bg-white/30 px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2"
            >
              <ArrowRight className="w-5 h-5" />
              Partner With Us
            </a>
          </div>
        </div>

        {/* Quick Reference Box */}
        <div className="mt-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
          <div className="flex items-start gap-4">
            <Sparkles className="w-6 h-6 text-yellow-300 flex-shrink-0 mt-1" />
            <div>
              <h4 className="text-xl mb-2">💡 Pro Tip for HR Teams</h4>
              <p className="text-blue-100">
                <span className="text-yellow-300">Students can simply share this website with you during interviews.</span> This entire portal serves as a comprehensive introduction to what Digital Humanities is and why DH graduates are valuable. No more explaining from scratch—just send them here!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}