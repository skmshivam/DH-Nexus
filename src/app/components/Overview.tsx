import { Target, Lightbulb, Search, CheckCircle } from 'lucide-react';

export function Overview() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">
          The Digital Humanities Advantage
        </h2>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          A new generation of problem-solvers with hybrid skillsets for the modern business landscape
        </p>
      </div>
      
      <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-8 lg:p-12 mb-12 border border-indigo-200">
        <h3 className="text-3xl mb-6 text-slate-900">Why This Matters for Your Organization</h3>
        <p className="text-lg text-slate-700 mb-6">
          Today's most pressing business challenges are rarely confined to a single domain. Addressing them requires a <span className="text-indigo-600">hybrid skillset</span> that integrates technical proficiency with a nuanced understanding of human behavior, cultural context, and ethical implications.
        </p>
        <p className="text-lg text-slate-700">
          Our graduates merge the analytical and critical insights of the humanities with the practical, problem-solving capabilities of engineering and data science. They can <span className="text-indigo-600">ask the right questions and build the right solutions</span>.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
          <h3 className="text-2xl mb-6 text-slate-900">Core Program Objectives</h3>
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <span className="text-slate-700">Critically analyze the implementation and impact of digital tools and platforms</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <span className="text-slate-700">Apply advanced information technology to interpret, manage, and derive meaning from data</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <span className="text-slate-700">Navigate complex societal, cultural, and business implications of digital transformation</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
              <span className="text-slate-700">Solve complex problems through hands-on experimentation with heterogeneous datasets and tools</span>
            </li>
          </ul>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
          <h3 className="text-2xl mb-6 text-slate-900">Competitive Advantages</h3>
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Target className="w-5 h-5 text-blue-600" />
                </div>
                <h4 className="text-xl text-slate-900">Interdisciplinary & Industry-Aligned</h4>
              </div>
              <p className="text-slate-600 ml-12">
                Proficient in leveraging Python, Machine Learning, GIS, and modern design software to address tangible business, policy, and cultural challenges.
              </p>
            </div>
            
            <div>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Lightbulb className="w-5 h-5 text-purple-600" />
                </div>
                <h4 className="text-xl text-slate-900">Solution-Oriented & Future-Ready</h4>
              </div>
              <p className="text-slate-600 ml-12">
                Grounded in practical, project-based learning for impactful outcomes in digital governance, AI ethics, data journalism, and immersive technologies.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid md:grid-cols-3 gap-8">
        <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
          <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
            <Target className="w-7 h-7 text-blue-600" />
          </div>
          <h3 className="text-2xl mb-4 text-slate-900">Focus on Transformation</h3>
          <p className="text-slate-600">
            Addresses developments, implications, and inflections of digital technologies on historical and contemporary culture and society. Aims to re-engineer emerging societal structures through the amalgamation of diverse disciplines.
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
          <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
            <Lightbulb className="w-7 h-7 text-purple-600" />
          </div>
          <h3 className="text-2xl mb-4 text-slate-900">Non-Emulative Approach</h3>
          <p className="text-slate-600">
            Digitization in the social sciences, arts, and humanities is not an emulation of the natural sciences. Instead, it discovers meaning in applying information technology to preserve, reconstruct, transmit, and interpret the human record.
          </p>
        </div>
        
        <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow">
          <div className="w-14 h-14 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
            <Search className="w-7 h-7 text-indigo-600" />
          </div>
          <h3 className="text-2xl mb-4 text-slate-900">Critical Inquiry</h3>
          <p className="text-slate-600">
            Critical interrogation into the history of digital approaches to the humanities, modes of implementation of digital tools and platforms, and issues related to the utilization of big data including database construction and statistical analysis.
          </p>
        </div>
      </div>
    </section>
  );
}