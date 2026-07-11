import { Lightbulb, Globe, BookOpen, Cpu } from 'lucide-react';

const researchThemes = [
  {
    icon: Lightbulb,
    title: 'Cultural Heritage & Preservation',
    desc: 'Digital archiving, metadata standards, and AI-assisted curation for cultural memory.'
  },
  {
    icon: Cpu,
    title: 'AI & Natural Language Processing',
    desc: 'Machine learning for low-resource languages, sentiment analysis, and computational text studies.'
  },
  {
    icon: Globe,
    title: 'Digital Media & Social Computing',
    desc: 'Studying how communities form, communicate, and mobilise on digital platforms.'
  },
  {
    icon: BookOpen,
    title: 'Digital Pedagogy & EdTech',
    desc: 'Designing learning experiences that blend humanistic inquiry with technology.'
  },
];

export function ResearchEcosystem() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">
            Research in Digital Humanities
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            DH brings together rigorous humanistic methods and computational tools to address real-world challenges across culture, language, and society.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mb-14">
          {researchThemes.map((theme) => {
            const Icon = theme.icon;
            return (
              <div key={theme.title} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-7 border border-indigo-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{theme.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{theme.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-10 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Interested in DH Research?</h3>
          <p className="text-purple-100 text-sm max-w-xl mx-auto mb-6">
            Explore research communities, collaborative projects, and scholarly networks across the global DH ecosystem.
          </p>
          <a
            href="/resources"
            className="inline-flex items-center gap-2 bg-white text-purple-700 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-purple-50 transition-all"
          >
            Explore DH Resources
          </a>
        </div>
      </div>
    </section>
  );
}
