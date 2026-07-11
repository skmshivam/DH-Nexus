import { BookOpen, Code, Users, Sparkles, CheckCircle } from 'lucide-react';

const truths = [
  {
    number: '01',
    title: "It's not just for humanities students",
    description: "Student cohorts are a genuine mix of technologists, social scientists, and humanists. B.Tech CSE students study alongside B.A. History majors, creating a classroom where diverse analytical frameworks converge.",
    icon: Users,
    color: 'blue'
  },
  {
    number: '02',
    title: "The syllabus is more diverse than you can imagine",
    description: "From 'Civilizations, Cultures, and Technologies' to 'Machine Learning for Digital Humanities', students are equally prepared to discuss post-colonial theory and implement ML models.",
    icon: BookOpen,
    color: 'purple'
  },
  {
    number: '03',
    title: "It's a direct pipeline to influential tech and policy careers",
    description: "Graduates become Data Analysts, ML Engineers, Policy Analysts at NITI Aayog, and are selected for McKinsey's Forward Learner Program. This is not theoretical—it's proven.",
    icon: Code,
    color: 'green'
  },
  {
    number: '04',
    title: "The focus is on ethics and impact, not just tools",
    description: "Research areas include Critical AI, Algorithmic Accountability, Misinformation, and Digital Trust. Students learn not just how to build technology, but to ask who it serves and what its societal impact will be.",
    icon: CheckCircle,
    color: 'amber'
  },
  {
    number: '05',
    title: "It's designed to redefine disciplinary boundaries",
    description: "Students are active participants in building a new field through projects like 'Indian Heritage in Digital Space' (funded by DST) and 'Archiving of Cine-Politics' (SPARC-funded).",
    icon: Sparkles,
    color: 'pink'
  }
];

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  blue: { bg: 'bg-blue-50', text: 'text-blue-900', border: 'border-blue-200' },
  purple: { bg: 'bg-purple-50', text: 'text-purple-900', border: 'border-purple-200' },
  green: { bg: 'bg-green-50', text: 'text-green-900', border: 'border-green-200' },
  amber: { bg: 'bg-amber-50', text: 'text-amber-900', border: 'border-amber-200' },
  pink: { bg: 'bg-pink-50', text: 'text-pink-900', border: 'border-pink-200' }
};

export function DHOverview() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">
            What is Digital Humanities?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Beyond Code and Prose: 5 Surprising Truths About the Field
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 lg:p-12 mb-16 border border-indigo-200">
          <h3 className="text-3xl mb-6 text-slate-900">The Interdisciplinary Nature</h3>
          <p className="text-lg text-slate-700 mb-6">
            Digital Humanities merges computational methods with humanistic inquiry, creating a new kind of expert—one who is as comfortable with an algorithm as they are with an archive.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-indigo-600 mb-2">Technology</div>
              <div className="text-sm text-slate-600">AI, ML, Data Science, AR/VR, Web Technologies</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-purple-600 mb-2">Humanities</div>
              <div className="text-sm text-slate-600">History, Literature, Cultural Studies, Philosophy</div>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-pink-600 mb-2">Social Sciences</div>
              <div className="text-sm text-slate-600">Sociology, Economics, Policy, Communication</div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          {truths.map((truth, index) => {
            const Icon = truth.icon;
            const colors = colorMap[truth.color];
            
            return (
              <div 
                key={index}
                className={`${colors.bg} border ${colors.border} rounded-xl p-8 hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className={`text-6xl ${colors.text} opacity-20`}>{truth.number}</div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-12 h-12 ${colors.bg} border ${colors.border} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon className={`w-6 h-6 ${colors.text}`} />
                      </div>
                      <h3 className={`text-2xl ${colors.text} flex-1`}>{truth.title}</h3>
                    </div>
                    <p className="text-slate-700 text-lg">{truth.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 bg-gradient-to-r from-slate-900 to-indigo-900 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl mb-4">A New Kind of Thinker</h3>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Digital Humanities produces graduates who possess the rare combination of technical mastery and deep humanistic insight. They are trained to build an AI model, but also to ask <span className="text-yellow-300">who it serves, what biases it might contain, and what its societal impact will be</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
