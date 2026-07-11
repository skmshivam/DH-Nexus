import { Folder, Brain, Globe, Archive, Cpu, BookOpen, BarChart2, Gamepad2 } from 'lucide-react';

const dhApplicationAreas = [
  { icon: Brain,    title: 'AI Ethics & Accountability',          desc: 'Examining how algorithmic systems encode bias and how to build fairer, more transparent AI.' },
  { icon: Archive,  title: 'Digital Heritage & Archiving',        desc: 'Preserving cultural memory through digital collections, metadata, and interactive platforms.' },
  { icon: Cpu,      title: 'NLP & Computational Text Studies',    desc: 'Machine translation, sentiment analysis, e-literature, and low-resource language processing.' },
  { icon: Globe,    title: 'Social Media & Cyberprotest',         desc: 'Understanding how communities organise, protest, and form identity through digital media.' },
  { icon: Gamepad2, title: 'Game Studies & Gamification',         desc: 'Exploring games as cultural artefacts and applying game mechanics to education and research.' },
  { icon: BookOpen, title: 'Digital Pedagogy & Online Learning',  desc: 'Designing human-centred learning experiences that integrate technology and critical thinking.' },
  { icon: BarChart2,'title': 'Data Storytelling & Visualisation', desc: 'Communicating complex humanistic data through visual and interactive media.' },
  { icon: Folder,   title: 'VR / XR & Multimodal Input',         desc: 'Building immersive environments that combine machine learning with spatial interaction.' },
];

export function ProjectsCaseStudies() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">
            What DH People Work On
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Digital Humanities spans an enormous range of research and professional domains. Here are some of the areas our community actively works in.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {dhApplicationAreas.map((area) => {
            const Icon = area.icon;
            return (
              <div key={area.title} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-5 border border-indigo-100 hover:shadow-md hover:border-indigo-200 transition-all">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-indigo-600" />
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1 leading-snug">{area.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{area.desc}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-2xl p-10 text-white text-center">
          <h3 className="text-2xl font-bold mb-3">Want to Showcase Your DH Work?</h3>
          <p className="text-indigo-100 text-sm max-w-xl mx-auto mb-6">
            DH NEXUS is building a community space where researchers and practitioners can share projects, collaborate, and get feedback. Join us.
          </p>
          <a
            href="https://forms.gle/bhv57KaTLdVehiDg9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-indigo-700 px-6 py-3 rounded-xl font-semibold text-sm hover:bg-indigo-50 transition-all"
          >
            Join the Community
          </a>
        </div>
      </div>
    </section>
  );
}
