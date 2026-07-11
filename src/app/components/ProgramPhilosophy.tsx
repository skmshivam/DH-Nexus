import { Target, BookOpen, Users, Award } from 'lucide-react';

const objectives = [
  'Explore contested definitions of the digital humanities',
  'Investigate key debates within the emerging field of digital humanities',
  'Consider why digital humanities matter beyond the academic field itself',
  'Facilitate hands-on experimentation with various types of digital humanities analysis using heterogeneous datasets, tools, and methods'
];

const graduateAttributes = [
  'In-depth understanding of fundamental concepts in Humanities, Social Sciences, and the application of basic computational tools',
  'Ability to undertake problems in multidisciplinary domains including Humanities, Social Sciences, Computer Sciences, and Mathematics',
  'Skills to demonstrate principles of Humanities and Social Sciences in digital domains through various applications and analytical processes',
  'Ability to deliver effective oral and written technical communication',
  'Appreciation for and adherence to the norms of professional ethics'
];

const learningOutcomes = [
  'Demonstrate knowledge of the main field of study and significant in-depth knowledge in subcategories of digital humanities',
  'Analyze, assess, and manage complex phenomena, questions, and situations related to the field',
  'Describe the prospects and limitations of science and technology in digital humanities, their societal role, and the individual\'s responsibility for their use'
];

export function ProgramPhilosophy() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">
            Program Philosophy & Objectives
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Redrawing disciplinary boundaries to discover meaning in the application of information technology
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-12 text-white mb-16">
          <h3 className="text-3xl mb-6">Core Philosophy</h3>
          <p className="text-xl text-indigo-100 mb-6">
            The M.Sc. in Digital Humanities at IIT Jodhpur is founded on the principle that digital technologies are transforming the study of humanities and social sciences. The program seeks to provide critical insights into the amalgamation of diverse disciplines, particularly the ways digital technologies are re-engineering societal structures and behavior.
          </p>
          <p className="text-lg text-indigo-200">
            Our growth is driven by the goal of <span className="text-yellow-300">"discovering meaning in the application of information technology as an aid to fulfil the disciplines' basic tasks of preserving, reconstructing, transmitting, and interpreting the human record historically and contemporaneously."</span>
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-2xl text-slate-900">Primary Objectives</h3>
            </div>
            <ul className="space-y-3">
              {objectives.map((objective, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                  <span className="text-slate-700">{objective}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-2xl text-slate-900">Learning Outcomes</h3>
            </div>
            <ul className="space-y-3">
              {learningOutcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-purple-600 mt-1 flex-shrink-0">✓</span>
                  <span className="text-slate-700">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="text-2xl text-slate-900">Expected Graduate Attributes</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {graduateAttributes.map((attribute, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 flex-shrink-0">{index + 1}.</span>
                  <span className="text-slate-700">{attribute}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
