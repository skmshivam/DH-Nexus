import { SEO } from '../components/SEO';
import { BookOpen, FileText, Video, Award, Briefcase, CheckCircle2, ExternalLink, Globe, Target, TrendingUp, Users, Lightbulb, Download, FileCheck, MessageSquare, Code, Database, PenTool, Brain, Shield, Sparkles, DollarSign } from 'lucide-react';

export function CareerResourcesPage() {
  return (
    <>
      <SEO 
        title="Career Resources | DH Nexus"
        description="Comprehensive career resources for Digital Humanities professionals including portfolio guidelines, resume tips, interview strategies, and emerging role insights for 2026."
        keywords="digital humanities career, DH portfolio, DH resume, tech career, humanities skills, power skills, AI careers"
      />

      <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
                <Briefcase className="w-5 h-5" />
                <span>Career Development Hub</span>
              </div>
              <h1 className="text-5xl lg:text-6xl mb-6">
                Build Your DH Career
              </h1>
              <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
                Comprehensive resources to help you present your unique hybrid skills, navigate the job market, and land roles where humanities meets technology
              </p>
            </div>
          </div>
        </section>

        {/* Digital Portfolio Guidelines */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full mb-6">
                <FileText className="w-5 h-5" />
                <span>Portfolio Building</span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6">
                Digital Research Portfolio Guidelines
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Based on UCLA's Digital Humanities program standards and industry best practices
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Intellectual Statement */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center">
                    <Brain className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-slate-900">Intellectual Statement</h3>
                    <p className="text-indigo-600">400-600 words</p>
                  </div>
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Your intellectual statement should clearly define your understanding of Digital Humanities and how you approach the intersection of technology and culture.
                </p>
                <div className="bg-indigo-50 rounded-xl p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">Key Elements to Include:</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>Your personal definition of Digital Humanities</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>How your background informs your DH approach</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>The methodologies and tools you're most interested in</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>Your vision for applying DH in professional contexts</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                      <span>Future directions or areas you want to explore</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Project Showcase */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center">
                    <Code className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-slate-900">Project Documentation</h3>
                    <p className="text-purple-600">Minimum 2 projects</p>
                  </div>
                </div>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Showcase concrete examples of your work with clear documentation of your specific contributions, especially in team projects.
                </p>
                <div className="bg-purple-50 rounded-xl p-6">
                  <h4 className="font-semibold text-slate-900 mb-3">For Each Project Include:</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Project title, timeline, and context</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Clear description of YOUR specific role and contributions</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Technologies and methodologies employed</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Challenges faced and how you solved them</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Measurable outcomes or impact</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                      <span>Live links or GitHub repositories when possible</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Portfolio Platform Tips */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-2xl p-10 text-white">
              <h3 className="text-3xl mb-6">Platform Recommendations</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Globe className="w-10 h-10 text-cyan-300 mb-4" />
                  <h4 className="text-xl mb-2">Personal Website</h4>
                  <p className="text-indigo-200 text-sm mb-4">Use GitHub Pages, Netlify, or Vercel for free hosting</p>
                  <p className="text-indigo-100 text-xs">Best for: Full creative control and custom domain</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <Code className="w-10 h-10 text-purple-300 mb-4" />
                  <h4 className="text-xl mb-2">GitHub Profile</h4>
                  <p className="text-indigo-200 text-sm mb-4">Showcase code, contributions, and technical projects</p>
                  <p className="text-indigo-100 text-xs">Best for: Technical roles and open-source work</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <FileText className="w-10 h-10 text-green-300 mb-4" />
                  <h4 className="text-xl mb-2">Google Sites / Notion</h4>
                  <p className="text-indigo-200 text-sm mb-4">Quick setup with templates for immediate publishing</p>
                  <p className="text-indigo-100 text-xs">Best for: Fast deployment and easy updates</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DH-Specific Resume Tips */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full mb-6">
                <FileCheck className="w-5 h-5" />
                <span>Resume Excellence</span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6">
                Translating Academic Skills to Power Skills
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                How to present your humanities expertise in ways that resonate with 2026 employers
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Left Column: Power Skills */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200">
                <h3 className="text-2xl text-slate-900 mb-6">Focus on Power Skills</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  In 2026, employers value "Power Skills" like emotional intelligence, social influence, and cultural competency. Don't just list tools—show how you apply methods thoughtfully.
                </p>
                
                <div className="space-y-6">
                  <div className="bg-green-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Users className="w-6 h-6 text-green-600" />
                      <h4 className="font-semibold text-slate-900">Emotional Intelligence</h4>
                    </div>
                    <div className="space-y-2 text-sm text-slate-700">
                      <div className="flex gap-2">
                        <span className="text-red-500">❌</span>
                        <span>"Conducted user interviews"</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-green-500">✓</span>
                        <span>"Synthesized qualitative insights from 50+ stakeholder interviews to inform UX design, identifying pain points that led to 40% improvement in user satisfaction"</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <TrendingUp className="w-6 h-6 text-green-600" />
                      <h4 className="font-semibold text-slate-900">Social Influence</h4>
                    </div>
                    <div className="space-y-2 text-sm text-slate-700">
                      <div className="flex gap-2">
                        <span className="text-red-500">❌</span>
                        <span>"Presented research at conference"</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-green-500">✓</span>
                        <span>"Built consensus among cross-functional teams (engineering, design, marketing) by translating technical data findings into actionable business narratives"</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-xl p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <Globe className="w-6 h-6 text-green-600" />
                      <h4 className="font-semibold text-slate-900">Cultural Intelligence</h4>
                    </div>
                    <div className="space-y-2 text-sm text-slate-700">
                      <div className="flex gap-2">
                        <span className="text-red-500">❌</span>
                        <span>"Analyzed multilingual datasets"</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-green-500">✓</span>
                        <span>"Designed inclusive NLP pipelines supporting 8 languages including RTL scripts, reducing cultural bias in AI training data and expanding market reach to 2M+ global users"</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Tools vs Pedagogy */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200">
                <h3 className="text-2xl text-slate-900 mb-6">Pedagogy Over Tools</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Don't just "namedrop" software. Demonstrate your understanding of best practices and when to apply specific methodologies.
                </p>

                <div className="space-y-6">
                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Data Visualization</h4>
                    <div className="space-y-2 text-sm text-slate-700">
                      <div className="flex gap-2">
                        <span className="text-red-500">❌</span>
                        <span>"Proficient in D3.js, Tableau, PowerBI"</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-green-500">✓</span>
                        <span>"Applied visualization best practices to make complex archival datasets accessible to non-technical stakeholders, choosing appropriate chart types based on Tufte principles and cognitive load theory"</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Text Analysis & NLP</h4>
                    <div className="space-y-2 text-sm text-slate-700">
                      <div className="flex gap-2">
                        <span className="text-red-500">❌</span>
                        <span>"Used NLTK, spaCy, and Hugging Face"</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-green-500">✓</span>
                        <span>"Designed text analysis pipeline balancing computational efficiency with interpretive depth, validating findings through mixed-method approaches that combine distant reading with close reading"</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6">
                    <h4 className="font-semibold text-slate-900 mb-3">Digital Archiving</h4>
                    <div className="space-y-2 text-sm text-slate-700">
                      <div className="flex gap-2">
                        <span className="text-red-500">❌</span>
                        <span>"Familiar with Dublin Core, METS, PREMIS"</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-green-500">✓</span>
                        <span>"Implemented metadata standards (Dublin Core, METS) to ensure long-term preservation and discoverability, considering FAIR principles and institutional sustainability"</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Resume Template Download */}
            <div className="bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl p-10 text-white text-center">
              <Download className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-3xl mb-4">DH Resume Template</h3>
              <p className="text-green-100 mb-6 max-w-2xl mx-auto">
                Download our battle-tested resume template specifically designed for Digital Humanities professionals transitioning to industry roles
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button className="inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-xl hover:bg-green-50 transition-all transform hover:scale-105 shadow-lg">
                  <Download className="w-5 h-5" />
                  Download Template (.docx)
                </button>
                <button className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl transition-all">
                  <ExternalLink className="w-5 h-5" />
                  View Sample Resume
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Interview Strategies */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white px-6 py-2 rounded-full mb-6">
                <MessageSquare className="w-5 h-5" />
                <span>Interview Prep</span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6">
                Web Interview Crib Sheet
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Technical setup, common questions, and strategies to connect your research to business needs
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Technical Setup */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-200">
                <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <Video className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl text-slate-900 mb-4">Technical Prep</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span>Test camera, mic, and lighting 30 min before</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span>Use a neutral background or virtual backdrop</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span>Have a glass of water and backup device ready</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span>Close unnecessary apps to avoid notifications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-pink-600 mt-0.5 flex-shrink-0" />
                    <span>Position your portfolio/notes on a second screen or printed</span>
                  </li>
                </ul>
              </div>

              {/* Common Questions */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200">
                <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl text-slate-900 mb-4">Common Questions</h3>
                <ul className="space-y-3 text-slate-700 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>"What is Digital Humanities?"</strong> – Have a 30-second elevator pitch ready</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>"How does your research apply to our business?"</strong> – Connect dots explicitly</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>"Tell me about a time you worked with messy data"</strong> – Use STAR method</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>"How do you bridge technical and non-technical teams?"</strong> – Real examples</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span><strong>"Why leave academia?"</strong> – Frame positively as moving toward, not away from</span>
                  </li>
                </ul>
              </div>

              {/* Business Connection */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-200">
                <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl text-slate-900 mb-4">Connect to Business</h3>
                <ul className="space-y-3 text-slate-700">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Research the company's recent projects and pain points</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Translate jargon: "corpus" → "dataset", "hermeneutics" → "interpretation methods"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Quantify impact: "improved efficiency by X%", "reduced errors by Y"</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Have 2-3 questions ready about their tech stack and culture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Follow up within 24 hours with a thank-you note</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* 2026 Emerging Roles & Salary Data */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-6 py-2 rounded-full mb-6">
                <DollarSign className="w-5 h-5" />
                <span>2026 Market Intelligence</span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6">
                Emerging Roles & Salary Benchmarks
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                AI-literate humanities professionals can earn 15%+ more than their peers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* AI Ethics & Governance */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-200 hover:border-indigo-400 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="w-10 h-10 text-indigo-600" />
                  <div>
                    <h3 className="text-xl text-slate-900">AI Ethics Researcher</h3>
                    <p className="text-indigo-600 font-semibold">$85K - $140K</p>
                  </div>
                </div>
                <p className="text-slate-700 text-sm mb-4 leading-relaxed">
                  Investigate bias, fairness, and societal impact of AI systems. Linguistic sensitivity and cultural intelligence are essential.
                </p>
                <div className="bg-indigo-50 rounded-lg p-4">
                  <div className="text-xs text-slate-600 mb-2">Key Skills:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white text-indigo-700 rounded text-xs">Critical Analysis</span>
                    <span className="px-2 py-1 bg-white text-indigo-700 rounded text-xs">Policy Research</span>
                    <span className="px-2 py-1 bg-white text-indigo-700 rounded text-xs">AI Literacy</span>
                  </div>
                </div>
              </div>

              {/* Prompt Engineer */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200 hover:border-purple-400 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Sparkles className="w-10 h-10 text-purple-600" />
                  <div>
                    <h3 className="text-xl text-slate-900">Prompt Engineer</h3>
                    <p className="text-purple-600 font-semibold">$90K - $160K</p>
                  </div>
                </div>
                <p className="text-slate-700 text-sm mb-4 leading-relaxed">
                  Design and optimize prompts for LLMs. Reduce hallucinations and improve brand alignment through linguistic precision.
                </p>
                <div className="bg-purple-50 rounded-lg p-4">
                  <div className="text-xs text-slate-600 mb-2">Key Skills:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white text-purple-700 rounded text-xs">Language Mastery</span>
                    <span className="px-2 py-1 bg-white text-purple-700 rounded text-xs">Iterative Testing</span>
                    <span className="px-2 py-1 bg-white text-purple-700 rounded text-xs">Context Design</span>
                  </div>
                </div>
              </div>

              {/* GEO/AEO Specialist */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-blue-200 hover:border-blue-400 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-10 h-10 text-blue-600" />
                  <div>
                    <h3 className="text-xl text-slate-900">GEO/AEO Specialist</h3>
                    <p className="text-blue-600 font-semibold">$70K - $120K</p>
                  </div>
                </div>
                <p className="text-slate-700 text-sm mb-4 leading-relaxed">
                  Optimize content for Generative/AI Engine search results (ChatGPT, Perplexity). The new SEO for 2026.
                </p>
                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="text-xs text-slate-600 mb-2">Key Skills:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white text-blue-700 rounded text-xs">Content Strategy</span>
                    <span className="px-2 py-1 bg-white text-blue-700 rounded text-xs">AI Behavior</span>
                    <span className="px-2 py-1 bg-white text-blue-700 rounded text-xs">Analytics</span>
                  </div>
                </div>
              </div>

              {/* Content Strategist (AI-enhanced) */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-green-200 hover:border-green-400 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <PenTool className="w-10 h-10 text-green-600" />
                  <div>
                    <h3 className="text-xl text-slate-900">AI Content Strategist</h3>
                    <p className="text-green-600 font-semibold">$75K - $130K</p>
                  </div>
                </div>
                <p className="text-slate-700 text-sm mb-4 leading-relaxed">
                  Create data-driven content strategies using AI tools while maintaining cultural sensitivity and brand voice.
                </p>
                <div className="bg-green-50 rounded-lg p-4">
                  <div className="text-xs text-slate-600 mb-2">Key Skills:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white text-green-700 rounded text-xs">SEO/GEO</span>
                    <span className="px-2 py-1 bg-white text-green-700 rounded text-xs">UX Writing</span>
                    <span className="px-2 py-1 bg-white text-green-700 rounded text-xs">Analytics</span>
                  </div>
                </div>
              </div>

              {/* Synthetic Data Curator */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-pink-200 hover:border-pink-400 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Database className="w-10 h-10 text-pink-600" />
                  <div>
                    <h3 className="text-xl text-slate-900">Synthetic Data Curator</h3>
                    <p className="text-pink-600 font-semibold">$80K - $135K</p>
                  </div>
                </div>
                <p className="text-slate-700 text-sm mb-4 leading-relaxed">
                  Ensure quality and eliminate cultural bias in training data for LLM fine-tuning. Humanists are essential here.
                </p>
                <div className="bg-pink-50 rounded-lg p-4">
                  <div className="text-xs text-slate-600 mb-2">Key Skills:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white text-pink-700 rounded text-xs">Data Quality</span>
                    <span className="px-2 py-1 bg-white text-pink-700 rounded text-xs">Bias Detection</span>
                    <span className="px-2 py-1 bg-white text-pink-700 rounded text-xs">ML Literacy</span>
                  </div>
                </div>
              </div>

              {/* Agentic AI Developer */}
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-yellow-200 hover:border-yellow-400 transition-all">
                <div className="flex items-center gap-3 mb-4">
                  <Brain className="w-10 h-10 text-yellow-600" />
                  <div>
                    <h3 className="text-xl text-slate-900">Agentic AI Developer</h3>
                    <p className="text-yellow-600 font-semibold">$100K - $180K</p>
                  </div>
                </div>
                <p className="text-slate-700 text-sm mb-4 leading-relaxed">
                  Build AI agents that can interact naturally with humans. Requires deep understanding of conversation and context.
                </p>
                <div className="bg-yellow-50 rounded-lg p-4">
                  <div className="text-xs text-slate-600 mb-2">Key Skills:</div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 bg-white text-yellow-700 rounded text-xs">Python/APIs</span>
                    <span className="px-2 py-1 bg-white text-yellow-700 rounded text-xs">NLP</span>
                    <span className="px-2 py-1 bg-white text-yellow-700 rounded text-xs">UX Design</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Stat */}
            <div className="mt-12 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-2xl p-10 text-white text-center">
              <Sparkles className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-4xl mb-4">15% Salary Premium</h3>
              <p className="text-xl text-yellow-100 max-w-2xl mx-auto">
                AI-literate humanities professionals earn 15%+ more than their peers in 2026, with specialized roles reaching $180K+ in major tech hubs
              </p>
            </div>
          </div>
        </section>

        {/* Recommended Certifications */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-6 py-2 rounded-full mb-6">
                <Award className="w-5 h-5" />
                <span>Skill Building</span>
              </div>
              <h2 className="text-4xl lg:text-5xl text-slate-900 mb-6">
                High-ROI Certifications
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto">
                Certifications that recruiters are willing to pay a premium for in 2026
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200 hover:border-indigo-400 transition-all">
                <h3 className="text-xl text-slate-900 mb-2">Google Data Analytics</h3>
                <p className="text-indigo-600 mb-4 text-sm">Professional Certificate</p>
                <p className="text-slate-600 text-sm mb-4">Master data cleaning, visualization, and analysis using industry-standard tools</p>
                <a href="https://www.coursera.org/professional-certificates/google-data-analytics" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700">
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200 hover:border-purple-400 transition-all">
                <h3 className="text-xl text-slate-900 mb-2">IBM Applied AI</h3>
                <p className="text-purple-600 mb-4 text-sm">Professional Certificate</p>
                <p className="text-slate-600 text-sm mb-4">Build AI applications using Python, Watson, and machine learning</p>
                <a href="https://www.coursera.org/professional-certificates/applied-artifical-intelligence-ibm-watson-ai" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700">
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200 hover:border-blue-400 transition-all">
                <h3 className="text-xl text-slate-900 mb-2">AWS Cloud Practitioner</h3>
                <p className="text-blue-600 mb-4 text-sm">Foundational Certification</p>
                <p className="text-slate-600 text-sm mb-4">Understand cloud infrastructure and deployment basics</p>
                <a href="https://aws.amazon.com/certification/certified-cloud-practitioner/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700">
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200 hover:border-green-400 transition-all">
                <h3 className="text-xl text-slate-900 mb-2">AI For Everyone</h3>
                <p className="text-green-600 mb-4 text-sm">deeplearning.ai</p>
                <p className="text-slate-600 text-sm mb-4">Grasp societal and ethical implications of AI technology</p>
                <a href="https://www.coursera.org/learn/ai-for-everyone" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-green-600 hover:text-green-700">
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200 hover:border-pink-400 transition-all">
                <h3 className="text-xl text-slate-900 mb-2">UX Research & Design</h3>
                <p className="text-pink-600 mb-4 text-sm">Google UX Certificate</p>
                <p className="text-slate-600 text-sm mb-4">Conduct user research and design human-centered products</p>
                <a href="https://www.coursera.org/professional-certificates/google-ux-design" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700">
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg border-2 border-slate-200 hover:border-yellow-400 transition-all">
                <h3 className="text-xl text-slate-900 mb-2">Python for Data Science</h3>
                <p className="text-yellow-600 mb-4 text-sm">IBM Data Science Certificate</p>
                <p className="text-slate-600 text-sm mb-4">Learn Python, SQL, and data visualization libraries</p>
                <a href="https://www.coursera.org/professional-certificates/ibm-data-science" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-yellow-600 hover:text-yellow-700">
                  <span>Learn More</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 text-white text-center shadow-2xl">
              <Lightbulb className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl mb-6">Ready to Launch Your DH Career?</h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto">
                Join our talent network to connect with recruiters actively seeking DH professionals
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/join-talent" className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-lg">
                  <Users className="w-5 h-5" />
                  Join Talent Network
                </a>
                <a href="/jobs" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl transition-all">
                  <Briefcase className="w-5 h-5" />
                  Browse Job Board
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
