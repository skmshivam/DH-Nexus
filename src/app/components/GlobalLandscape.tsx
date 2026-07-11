import { TrendingUp, Globe, Cpu, Database, Eye, Sparkles, Lightbulb } from 'lucide-react';

const trends = [
  {
    title: 'AI + Humanities',
    description: 'Machine learning for text analysis, NLP for literary studies, ethical AI frameworks, algorithmic accountability',
    icon: Cpu,
    applications: ['Sentiment analysis of historical texts', 'Automated metadata generation', 'Bias detection in datasets']
  },
  {
    title: 'Digital Heritage',
    description: '3D modeling of cultural artifacts, virtual museums, knowledge graphs for heritage preservation',
    icon: Database,
    applications: ['Digital twins of monuments', 'Interactive archives', 'Cultural heritage metadata standards']
  },
  {
    title: 'Immersive Technologies (XR)',
    description: 'AR/VR for education, virtual fieldwork, sensory storytelling, gamification of collections',
    icon: Eye,
    applications: ['Virtual reality historical reconstructions', 'AR museum experiences', 'Interactive documentary']
  },
  {
    title: 'Computational Social Science',
    description: 'Social media analytics, network analysis, digital ethnography, big data for public opinion',
    icon: Globe,
    applications: ['Twitter discourse analysis', 'Social network mapping', 'Online community studies']
  },
  {
    title: 'Critical Data Studies',
    description: 'Data ethics, algorithmic justice, digital inequality, platform governance',
    icon: TrendingUp,
    applications: ['Algorithmic bias audits', 'Digital rights advocacy', 'Platform policy analysis']
  },
  {
    title: 'Digital Storytelling & Media',
    description: 'Data journalism, interactive narratives, digital publishing, transmedia storytelling',
    icon: Sparkles,
    applications: ['Data-driven journalism', 'Web documentaries', 'Digital narrative design']
  }
];

const technologies = [
  'Natural Language Processing (NLP)',
  'Computer Vision',
  'Network Analysis Tools',
  'GIS & Spatial Humanities',
  'Text Mining & Topic Modeling',
  '3D Scanning & Photogrammetry',
  'Web Scraping & APIs',
  'Digital Annotation Tools',
  'Virtual Reality Platforms',
  'Knowledge Graphs & Ontologies'
];

export function GlobalLandscape() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">
            Global DH Landscape
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Emerging trends and technologies shaping Digital Humanities worldwide
          </p>
        </div>

        {/* Philosophy Section: Humanities as the Steering Wheel */}
        <div className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 rounded-3xl p-10 lg:p-16 border-2 border-indigo-200 shadow-2xl mb-16">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-3 bg-white px-6 py-3 rounded-full shadow-md mb-6">
              <Lightbulb className="w-6 h-6 text-amber-500" />
              <span className="text-lg font-semibold text-slate-800">The DH Philosophy</span>
            </div>
            <h3 className="text-3xl lg:text-4xl text-slate-900 mb-4">
              Humanities: The Steering Wheel of Technology
            </h3>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
              Think of technology as a <strong>powerful engine</strong> and the humanities as the <strong>steering wheel and GPS</strong>. Without the humanities—the insights on where we should go and why—the tech engine might move very fast, but it could end up going in a direction that is harmful or useless to society.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-indigo-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-orange-500 rounded-xl flex items-center justify-center text-white text-2xl">
                  ⚙️
                </div>
                <h4 className="text-2xl font-bold text-slate-900">The Engine</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                <strong>Technology</strong> provides the raw power—algorithms, data processing, machine learning, computational speed. It's the muscle that makes things happen at scale.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white text-2xl">
                  🧭
                </div>
                <h4 className="text-2xl font-bold text-slate-900">The Steering Wheel</h4>
              </div>
              <p className="text-slate-600 leading-relaxed">
                <strong>Humanities</strong> provides the direction—ethics, cultural understanding, social impact, human values. It's the wisdom that ensures technology serves humanity's best interests.
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-2xl p-8 text-white">
            <h4 className="text-2xl font-bold mb-4 text-center">How DH Programs Use Humanities to Make Better Tech:</h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <div className="text-xl font-semibold mb-2">🎯 Understanding Cultural Impact</div>
                <div className="text-sm text-blue-100">Programs like Maastricht's Digital Cultures evaluate social and ethical implications—not just technical functions.</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <div className="text-xl font-semibold mb-2">📚 Structuring Digital Knowledge</div>
                <div className="text-sm text-blue-100">Bologna's DHDK focuses on how human knowledge is preserved and disseminated—making tech more meaningful.</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <div className="text-xl font-semibold mb-2">🗣️ Human-Centric Language Tech</div>
                <div className="text-sm text-blue-100">Helsinki and Turin use linguistics to ensure machines understand human nuance—not just cold algorithms.</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <div className="text-xl font-semibold mb-2">🌍 Public & Global Responsibility</div>
                <div className="text-sm text-blue-100">Venice's Public Humanities ensures tech serves the public good and respects global diversity.</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <div className="text-xl font-semibold mb-2">🔄 Feedback Loop Design</div>
                <div className="text-sm text-blue-100">Groningen integrates DH within Communication Studies—understanding how humans actually interact with tech.</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20">
                <div className="text-xl font-semibold mb-2">⚖️ Critical vs Technical Paths</div>
                <div className="text-sm text-blue-100">UCL offers MA (critical "why") and MSc (technical "how")—providing humanistic oversight for development.</div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-lg text-slate-700 italic max-w-3xl mx-auto leading-relaxed">
              "The field of Digital Humanities acts as a <strong>feedback loop</strong> where the humanities are not just users of technology, but the <strong>architects of its ethics and meaning</strong>. These programs put the human 'driver' back in control of the technical 'engine.'"
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-12 text-white mb-16">
          <h3 className="text-3xl mb-6">Current Global Industry Applications</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl mb-2">Cultural Sector</div>
              <div className="text-indigo-200">Museums, archives, libraries using AI for digitization and public engagement</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl mb-2">Media & Tech</div>
              <div className="text-indigo-200">Publishers, streaming platforms leveraging cultural analytics and recommendation systems</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl mb-2">Policy & Governance</div>
              <div className="text-indigo-200">Governments using social media analysis, digital archives for evidence-based policy</div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl mb-8 text-slate-900 text-center">Emerging Trends in Digital Humanities</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trends.map((trend, index) => {
              const Icon = trend.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-slate-200 hover:shadow-lg transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <h4 className="text-xl text-slate-900">{trend.title}</h4>
                  </div>
                  <p className="text-slate-600 mb-4">{trend.description}</p>
                  <div className="border-t border-slate-200 pt-4">
                    <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Applications</div>
                    <ul className="space-y-1">
                      {trend.applications.map((app, aIndex) => (
                        <li key={aIndex} className="text-sm text-slate-700 flex items-start gap-2">
                          <span className="text-indigo-600 mt-0.5">›</span>
                          <span>{app}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
            <h3 className="text-2xl text-slate-900 mb-6">Technologies Shaping DH Worldwide</h3>
            <div className="grid grid-cols-2 gap-3">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white rounded-lg p-3 shadow-sm border border-slate-200">
                  <div className="text-sm text-slate-700">{tech}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
            <h3 className="text-2xl text-slate-900 mb-6">Future Directions of DH</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-indigo-600 mb-1">AI Ethics & Governance</div>
                <div className="text-sm text-slate-600">Humanists leading conversations on responsible AI development and deployment</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-indigo-600 mb-1">Climate Humanities</div>
                <div className="text-sm text-slate-600">Digital tools for environmental history, climate communication, and sustainability</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-indigo-600 mb-1">Decolonial DH</div>
                <div className="text-sm text-slate-600">Critical approaches to digitization, challenging Western-centric archives and algorithms</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-indigo-600 mb-1">Multimodal & Multilingual DH</div>
                <div className="text-sm text-slate-600">Tools for underrepresented languages, audio/visual analysis, non-textual data</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}