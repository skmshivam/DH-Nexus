import { Cpu, Globe, BookOpen } from 'lucide-react';

const dhResearchAreas = [
  { name: 'Human-Computer Interaction (HCI)',    applications: 'Game Design, XR, User Research' },
  { name: 'AI Applications in Digital Humanities', applications: 'NLP, Machine Learning, Ethics' },
  { name: 'Digital Pedagogy & Learning',          applications: 'Online Education, Learning Analytics' },
  { name: 'Digital Culture & Media Studies',      applications: 'Literary Studies, Film & Media Analysis' },
  { name: 'Computational Linguistics',            applications: 'Translation, Text Mining, Discourse Analysis' },
];

const techCapabilities = [
  { category: 'AI & ML',           tools: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'Keras', 'NLP Libraries'] },
  { category: 'Data Analysis',     tools: ['Python', 'R', 'Pandas', 'Tableau', 'ArcGIS'] },
  { category: 'Web & Digital',     tools: ['JavaScript', 'React', 'CMS platforms', 'APIs'] },
  { category: 'AR/VR/XR',         tools: ['Unity', 'Unreal Engine', 'A-Frame', '360 video'] },
  { category: 'Database',          tools: ['SQL', 'MongoDB', 'MySQL', 'Neo4j'] },
  { category: 'Digital Publishing', tools: ['Adobe Suite', 'TEI', 'Omeka', 'WordPress'] },
];

export function ResearchInnovation() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">
            Research & Innovation in DH
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Digital Humanities research spans computation, culture, and creativity — equipping practitioners to solve complex problems across sectors.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 mb-14">
          {/* Research Areas */}
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Core DH Research Areas</h3>
            </div>
            <div className="space-y-3">
              {dhResearchAreas.map((area) => (
                <div key={area.name} className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                  <div className="text-slate-900 text-sm font-medium mb-0.5">{area.name}</div>
                  <div className="text-xs text-slate-500">{area.applications}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Published in / Conferences */}
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Globe className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900">Global DH Community</h3>
            </div>
            <div className="space-y-3">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-purple-600 text-sm font-medium mb-1">Major International Conferences</div>
                <div className="text-xs text-slate-600">DH2024 (ADHO), DARIAH, MLA, ACH Annual Meeting</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-purple-600 text-sm font-medium mb-1">India DH Gatherings</div>
                <div className="text-xs text-slate-600">DHARTI 2024, IIT (ISM) Dhanbad DH Conference</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-purple-600 text-sm font-medium mb-1">Open Research Focus Areas</div>
                <div className="text-xs text-slate-600">Critical AI, Digital Heritage, ML for Low-Resource Languages, Social Media Analysis</div>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Capabilities */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-2xl p-10 text-white mb-10">
          <div className="flex items-center gap-3 mb-6">
            <Cpu className="w-8 h-8 opacity-80" />
            <h3 className="text-2xl font-bold">Tools Used in DH Research & Practice</h3>
          </div>
          <p className="text-indigo-100 text-sm mb-8 max-w-2xl">
            DH practitioners work across a wide toolset — from machine learning frameworks to digital publishing and heritage platforms.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {techCapabilities.map((cap) => (
              <div key={cap.category} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-4">
                <div className="text-sm font-semibold mb-2">{cap.category}</div>
                <div className="flex flex-wrap gap-1.5">
                  {cap.tools.map((tool) => (
                    <span key={tool} className="text-xs bg-white/20 text-white px-2 py-0.5 rounded">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
