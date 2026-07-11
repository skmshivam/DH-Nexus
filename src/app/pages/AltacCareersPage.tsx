import { SEO } from '../components/SEO';
import { GraduationCap, Users, Building2, Code, Shield, Lightbulb, TrendingUp, Heart, Globe, BookOpen, Video, Megaphone, Database, FileText, ExternalLink, CheckCircle2, Sparkles, Target, Award, MessageSquare, ChevronRight } from 'lucide-react';

export function AltacCareersPage() {
  return (
    <>
      <SEO 
        title="Alternative Academic Careers | DH Nexus"
        description="Explore alternative academic (altac) and post-academic career paths for PhD-prepared professionals in Digital Humanities. Discover roles beyond traditional faculty positions."
        keywords="alternative academic, altac careers, post-ac, PhD careers, humanities PhD, administrative roles, ed-tech, library careers"
      />

      <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
                <GraduationCap className="w-5 h-5" />
                <span>Alternative Academic Careers</span>
              </div>
              <h1 className="text-5xl lg:text-6xl mb-6">
                Beyond the Faculty Track
              </h1>
              <p className="text-xl text-purple-100 max-w-3xl mx-auto leading-relaxed">
                PhD-prepared professionals are thriving in administrative, technology, and leadership roles where humanistic inquiry drives responsible innovation
              </p>
            </div>
          </div>
        </section>

        {/* What is Altac */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <div>
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full mb-6">
                  <Lightbulb className="w-5 h-5" />
                  <span>Understanding Altac</span>
                </div>
                <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6">
                  What is Alternative Academic?
                </h2>
                <p className="text-xl text-slate-600 mb-6 leading-relaxed">
                  "Altac" refers to careers for PhD-holders and advanced degree professionals that leverage their research training, critical thinking, and subject expertise <strong>outside traditional tenure-track faculty positions</strong>.
                </p>
                <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                  These roles exist within universities (administration, centers, libraries), in adjacent sectors (ed-tech, museums, publishing), and increasingly in corporate tech where humanistic perspectives on ethics, culture, and communication are essential.
                </p>
                <div className="bg-indigo-50 border-l-4 border-indigo-500 rounded-r-xl p-6">
                  <p className="text-slate-700 italic">
                    "The quality of research should be measured by its capacity to transform the world into a more equitable and inclusive place." — Active Humanities Manifesto
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-indigo-50 rounded-3xl p-10 border-2 border-purple-200">
                <h3 className="text-2xl text-slate-900 mb-6">Why Consider Altac?</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">More Job Opportunities</div>
                      <div className="text-slate-600 text-sm">For every tenure-track opening, there are 10+ altac positions that value your training</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">Better Work-Life Balance</div>
                      <div className="text-slate-600 text-sm">Many altac roles offer clearer boundaries, less pressure for constant publication</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">Competitive Salaries</div>
                      <div className="text-slate-600 text-sm">Tech and administrative roles often pay 20-40% more than academic positions</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-indigo-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">Direct Impact</div>
                      <div className="text-slate-600 text-sm">Shape products, policies, and programs that affect millions of users</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-purple-600 mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-slate-900 mb-1">Geographic Flexibility</div>
                      <div className="text-slate-600 text-sm">Remote opportunities and urban tech hubs vs. limited academic job locations</div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Altac Role Categories */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full mb-6">
                <Users className="w-5 h-5" />
                <span>Career Pathways</span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6">
                Alternative Academic Career Paths
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Where your PhD training translates into impactful roles
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Within Academia - Administration */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-200 hover:shadow-xl hover:border-indigo-400 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl text-slate-900 mb-3">University Administration</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Shape institutional strategy, programs, and student experience within higher education
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-indigo-600" />
                    <span>Associate Dean / Program Director</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-indigo-600" />
                    <span>Director of Graduate Studies</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-indigo-600" />
                    <span>Institutional Research Analyst</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-indigo-600" />
                    <span>Student Success Coordinator</span>
                  </div>
                </div>
                <div className="text-sm text-indigo-600 font-semibold">$60K - $120K</div>
              </div>

              {/* Digital Scholarship Centers */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200 hover:shadow-xl hover:border-purple-400 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <Code className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl text-slate-900 mb-3">Digital Scholarship Centers</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Support faculty and students with DH methods, tools, and research infrastructure
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-purple-600" />
                    <span>Digital Scholarship Librarian</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-purple-600" />
                    <span>Research Technology Specialist</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-purple-600" />
                    <span>Data Visualization Consultant</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-purple-600" />
                    <span>GIS/Spatial Humanities Specialist</span>
                  </div>
                </div>
                <div className="text-sm text-purple-600 font-semibold">$55K - $95K</div>
              </div>

              {/* Libraries & Archives */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200 hover:shadow-xl hover:border-blue-400 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                  <Database className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl text-slate-900 mb-3">Libraries & Archives</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Manage digital collections, metadata, and knowledge preservation systems
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-blue-600" />
                    <span>Digital Archivist</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-blue-600" />
                    <span>Metadata Librarian</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-blue-600" />
                    <span>Special Collections Manager</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-blue-600" />
                    <span>Digital Preservation Specialist</span>
                  </div>
                </div>
                <div className="text-sm text-blue-600 font-semibold">$50K - $85K</div>
              </div>

              {/* Ed-Tech & Learning Design */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200 hover:shadow-xl hover:border-green-400 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                  <Video className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl text-slate-900 mb-3">Ed-Tech & Learning Design</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Design digital learning experiences, courses, and educational technology products
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-green-600" />
                    <span>Learning Experience Designer</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-green-600" />
                    <span>Instructional Technologist</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-green-600" />
                    <span>Curriculum Developer (Corporate)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-green-600" />
                    <span>E-Learning Product Manager</span>
                  </div>
                </div>
                <div className="text-sm text-green-600 font-semibold">$65K - $110K</div>
              </div>

              {/* Museums & Cultural Institutions */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-200 hover:shadow-xl hover:border-pink-400 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <Heart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl text-slate-900 mb-3">Museums & Cultural Orgs</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Curate exhibitions, manage digital collections, and engage public audiences
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-pink-600" />
                    <span>Digital Collections Manager</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-pink-600" />
                    <span>Public Programs Coordinator</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-pink-600" />
                    <span>Exhibition Developer</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-pink-600" />
                    <span>Community Engagement Manager</span>
                  </div>
                </div>
                <div className="text-sm text-pink-600 font-semibold">$45K - $80K</div>
              </div>

              {/* Tech: AI Ethics & Trust/Safety */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200 hover:shadow-xl hover:border-yellow-400 transition-all">
                <div className="w-14 h-14 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl text-slate-900 mb-3">Tech: Ethics & Safety</h3>
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  Where humanistic inquiry is critical to responsible technology development
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-yellow-600" />
                    <span>Trust and Safety Specialist</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-yellow-600" />
                    <span>AI Ethics Researcher</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-yellow-600" />
                    <span>Content Policy Analyst</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-700">
                    <ChevronRight className="w-4 h-4 text-yellow-600" />
                    <span>Algorithmic Bias Auditor</span>
                  </div>
                </div>
                <div className="text-sm text-yellow-600 font-semibold">$80K - $140K</div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Stories */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full mb-6">
                <Award className="w-5 h-5" />
                <span>Real Journeys</span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6">
                Altac Success Stories
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                PhD-holders thriving beyond academia
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 border-2 border-indigo-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    SK
                  </div>
                  <div>
                    <h3 className="text-xl text-slate-900">Dr. Sarah Klein</h3>
                    <p className="text-indigo-600">Learning Experience Designer, Coursera</p>
                  </div>
                </div>
                <p className="text-slate-700 mb-4 italic">
                  "My PhD in Comparative Literature taught me how to understand different perspectives and design narratives. Now I apply that to create learning pathways for millions of students worldwide."
                </p>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm text-slate-600 mb-2">Career Path:</div>
                  <div className="text-sm text-slate-700 space-y-1">
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-indigo-600" />
                      <span>PhD in Comparative Literature (2018)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-indigo-600" />
                      <span>Instructional Designer, University (2019-2021)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-indigo-600" />
                      <span>Learning Experience Designer, Coursera (2021-present)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border-2 border-blue-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    RP
                  </div>
                  <div>
                    <h3 className="text-xl text-slate-900">Dr. Rajesh Patel</h3>
                    <p className="text-blue-600">Trust & Safety Lead, Meta</p>
                  </div>
                </div>
                <p className="text-slate-700 mb-4 italic">
                  "My training in ethnography and cultural analysis is exactly what tech companies need to understand how their products impact diverse communities globally."
                </p>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm text-slate-600 mb-2">Career Path:</div>
                  <div className="text-sm text-slate-700 space-y-1">
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-blue-600" />
                      <span>PhD in Anthropology (2019)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-blue-600" />
                      <span>UX Researcher, Twitter (2020-2022)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-blue-600" />
                      <span>Trust & Safety Lead, Meta (2022-present)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border-2 border-green-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    MC
                  </div>
                  <div>
                    <h3 className="text-xl text-slate-900">Dr. Maria Chen</h3>
                    <p className="text-green-600">Digital Scholarship Librarian, Stanford</p>
                  </div>
                </div>
                <p className="text-slate-700 mb-4 italic">
                  "I get to support cutting-edge research across disciplines, teach DH methods, and build tools—all without the pressure of 'publish or perish.' It's the perfect blend."
                </p>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm text-slate-600 mb-2">Career Path:</div>
                  <div className="text-sm text-slate-700 space-y-1">
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-green-600" />
                      <span>PhD in History (2017)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-green-600" />
                      <span>Postdoc, Digital History Lab (2017-2019)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-green-600" />
                      <span>Digital Scholarship Librarian, Stanford (2019-present)</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-rose-50 rounded-2xl p-8 border-2 border-pink-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    DL
                  </div>
                  <div>
                    <h3 className="text-xl text-slate-900">Dr. David Lee</h3>
                    <p className="text-pink-600">AI Ethics Consultant, Independent</p>
                  </div>
                </div>
                <p className="text-slate-700 mb-4 italic">
                  "My philosophy background gives me a unique lens on AI ethics. Companies pay well for someone who can navigate the ethical complexities they're facing."
                </p>
                <div className="bg-white rounded-lg p-4">
                  <div className="text-sm text-slate-600 mb-2">Career Path:</div>
                  <div className="text-sm text-slate-700 space-y-1">
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-pink-600" />
                      <span>PhD in Philosophy (2016)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-pink-600" />
                      <span>AI Ethics Researcher, Partnership on AI (2018-2021)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <ChevronRight className="w-3 h-3 text-pink-600" />
                      <span>Independent AI Ethics Consultant (2021-present)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Resources & Communities */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full mb-6">
                <BookOpen className="w-5 h-5" />
                <span>Resources & Communities</span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6">
                Essential Altac Resources
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Communities, job boards, and guides for navigating alternative academic careers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <a href="https://altacademy.pubpub.org/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200 hover:border-indigo-400 hover:shadow-xl transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-8 h-8 text-indigo-600 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl text-slate-900">#Alt-academy</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Foundational collection of essays on alternative academic careers across disciplines
                </p>
                <div className="flex items-center gap-2 text-indigo-600 group-hover:gap-3 transition-all">
                  <span className="text-sm">Visit Resource</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>

              <a href="https://versatilephd.com/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200 hover:border-purple-400 hover:shadow-xl transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-8 h-8 text-purple-600 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl text-slate-900">Versatile PhD</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Community forum with career profiles, job search strategies, and mentorship
                </p>
                <div className="flex items-center gap-2 text-purple-600 group-hover:gap-3 transition-all">
                  <span className="text-sm">Join Community</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>

              <a href="https://www.insidehighered.com/career-advice/working-outside-academy" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200 hover:border-blue-400 hover:shadow-xl transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl text-slate-900">Alt/Academix</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Inside Higher Ed's career advice column on working outside traditional academia
                </p>
                <div className="flex items-center gap-2 text-blue-600 group-hover:gap-3 transition-all">
                  <span className="text-sm">Read Articles</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>

              <a href="https://www.code4lib.org/jobs" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200 hover:border-green-400 hover:shadow-xl transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <Code className="w-8 h-8 text-green-600 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl text-slate-900">Code4Lib Jobs</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Job board for digital scholarship and library technology positions
                </p>
                <div className="flex items-center gap-2 text-green-600 group-hover:gap-3 transition-all">
                  <span className="text-sm">Browse Jobs</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>

              <a href="https://acrl.ala.org/dh/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200 hover:border-pink-400 hover:shadow-xl transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-8 h-8 text-pink-600 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl text-slate-900">DH +Lib Jobs</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Digital Humanities and library intersection job postings and resources
                </p>
                <div className="flex items-center gap-2 text-pink-600 group-hover:gap-3 transition-all">
                  <span className="text-sm">Explore Opportunities</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>

              <a href="https://www.higheredjobs.com/" target="_blank" rel="noopener noreferrer" className="bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200 hover:border-yellow-400 hover:shadow-xl transition-all group">
                <div className="flex items-center gap-3 mb-4">
                  <Megaphone className="w-8 h-8 text-yellow-600 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl text-slate-900">HigherEdJobs</h3>
                </div>
                <p className="text-slate-600 text-sm mb-4">
                  Administrative and staff positions in higher education institutions
                </p>
                <div className="flex items-center gap-2 text-yellow-600 group-hover:gap-3 transition-all">
                  <span className="text-sm">Search Positions</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Mentorship Program Callout */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
                    <MessageSquare className="w-5 h-5" />
                    <span>Mentorship Available</span>
                  </div>
                  <h2 className="text-3xl lg:text-4xl mb-6">
                    Connect With Altac Professionals
                  </h2>
                  <p className="text-xl text-indigo-100 mb-6 leading-relaxed">
                    The Association for Computers and the Humanities (ACH) offers mentoring programs where professionals volunteer to support students considering alternative academic paths.
                  </p>
                  <p className="text-lg text-indigo-200 mb-8">
                    Get personalized advice on career transitions, resume building, and navigating the altac job market from those who've done it successfully.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a href="https://ach.org/activities/mentoring/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-lg">
                      <Users className="w-5 h-5" />
                      ACH Mentoring Program
                    </a>
                    <a href="/contact" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl transition-all">
                      <MessageSquare className="w-5 h-5" />
                      Contact DH Nexus Team
                    </a>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <h3 className="text-2xl mb-6">What Mentors Can Help With:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-cyan-300 mt-0.5 flex-shrink-0" />
                      <span>Translating your PhD skills for industry roles</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-cyan-300 mt-0.5 flex-shrink-0" />
                      <span>Networking strategies and informational interviews</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-cyan-300 mt-0.5 flex-shrink-0" />
                      <span>Navigating the emotional side of leaving academia</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-cyan-300 mt-0.5 flex-shrink-0" />
                      <span>Understanding salary negotiation and benefits</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="w-6 h-6 text-cyan-300 mt-0.5 flex-shrink-0" />
                      <span>Building a portfolio that showcases your work</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-12 text-white text-center shadow-2xl">
              <Sparkles className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl mb-6">Ready to Explore Altac Opportunities?</h2>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Browse our job board for altac roles or join our talent network to connect with recruiters
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/jobs" className="inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-xl hover:bg-purple-50 transition-all transform hover:scale-105 shadow-lg">
                  <Building2 className="w-5 h-5" />
                  Browse Altac Jobs
                </a>
                <a href="/career-resources" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl transition-all">
                  <BookOpen className="w-5 h-5" />
                  Career Resources
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
