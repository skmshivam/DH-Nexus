import { Handshake, Lightbulb, Users, Target, CheckCircle, Rocket } from 'lucide-react';

const partnershipModels = [
  {
    title: 'Internships & Talent Pipeline',
    description: 'Access a bespoke talent pipeline of hybrid professionals ready to excel in Data Analyst, ML Engineer, Product Analyst, and UX roles.',
    benefits: [
      'Low-risk, high-reward opportunity to test-drive future hires',
      'Inject cross-functional creativity into your projects',
      'Build direct pipeline to next generation of hybrid talent'
    ],
    icon: Users,
    color: 'blue'
  },
  {
    title: 'Sponsored Capstone Projects',
    description: 'Commission targeted R&D solutions through dedicated student teams working on real business challenges.',
    benefits: [
      'De-risk innovation with proofs-of-concept',
      'Solve specific business challenges',
      'Fresh, external perspectives on core problems'
    ],
    icon: Lightbulb,
    color: 'purple'
  },
  {
    title: 'Joint Research & Development',
    description: 'Deep collaboration with DH researchers and practitioners across AI, HCI, XR, Game Design, and Digital Pedagogy.',
    benefits: [
      'Co-author pioneering research',
      'Develop proprietary technologies',
      'Access interdisciplinary perspectives across tech and humanities'
    ],
    icon: Rocket,
    color: 'green'
  }
];

const servicesForCompanies = [
  'Talent Acquisition: Access to graduates with hybrid technical-humanistic skills',
  'Custom Research Projects: Commission specific investigations or tool development',
  'Workshops & Training: Upskill your teams in DH methodologies',
  'Consulting: Expert guidance on cultural analytics, digital archiving, AI ethics',
  'Data Analysis Services: Qualitative + quantitative analysis of complex datasets',
  'Product Development Support: User research, UX/UI design, content strategy'
];

const problemStatements = [
  {
    problem: 'How do we make our digital archive more accessible and engaging?',
    dhSolution: 'Interactive interfaces, AI-powered search, gamification of collections'
  },
  {
    problem: 'How can we ensure our AI systems are ethical and culturally sensitive?',
    dhSolution: 'Critical AI audits, bias detection, culturally-informed design frameworks'
  },
  {
    problem: 'How do we analyze and understand social media discourse about our brand?',
    dhSolution: 'Social network analysis, sentiment analysis, digital ethnography'
  },
  {
    problem: 'How can we tell more compelling data-driven stories?',
    dhSolution: 'Data journalism techniques, narrative visualization, interactive storytelling'
  }
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600' },
  green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600' }
};

export function IndustryHub() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">
            Industry Collaboration Hub
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Strategic partnership opportunities with the future of innovation
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-12 text-white mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Handshake className="w-10 h-10" />
            <h3 className="text-3xl">Why Partner with DH?</h3>
          </div>
          <p className="text-xl text-indigo-100 mb-8">
            In a market saturated with purely technical expertise, we produce talent that understands not only the 'what' of technology but the crucial 'so what' of its human and market impact. These are the problem-solvers, strategists, and innovators uniquely prepared to navigate the nuances of the digital economy.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl mb-2">Hybrid Talent</div>
              <div className="text-indigo-200">Technical mastery + humanistic insight</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl mb-2">Ethical Focus</div>
              <div className="text-indigo-200">Technology with societal responsibility</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl mb-2">Diverse Paths</div>
              <div className="text-indigo-200">Industry, research, policy, and beyond</div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl mb-8 text-slate-900 text-center">Partnership Models</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {partnershipModels.map((model, index) => {
              const Icon = model.icon;
              const colors = colorMap[model.color];
              
              return (
                <div key={index} className={`${colors.bg} border ${colors.border} rounded-xl p-8 hover:shadow-lg transition-shadow`}>
                  <div className={`w-12 h-12 ${colors.bg} border ${colors.border} rounded-lg flex items-center justify-center mb-6`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <h4 className="text-2xl text-slate-900 mb-4">{model.title}</h4>
                  <p className="text-slate-700 mb-6">{model.description}</p>
                  <div className="space-y-2">
                    {model.benefits.map((benefit, bIndex) => (
                      <div key={bIndex} className="flex items-start gap-2">
                        <CheckCircle className={`w-5 h-5 ${colors.text} flex-shrink-0 mt-0.5`} />
                        <span className="text-sm text-slate-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-2xl text-slate-900">Services Companies Can Seek</h3>
            </div>
            <ul className="space-y-3">
              {servicesForCompanies.map((service, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  <span className="text-slate-700">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
            <h3 className="text-2xl text-slate-900 mb-6">Problem Statements for Industry</h3>
            <div className="space-y-4">
              {problemStatements.map((item, index) => (
                <div key={index} className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                  <div className="text-purple-900 mb-2">{item.problem}</div>
                  <div className="text-sm text-slate-600">
                    <span className="text-purple-600">DH Solution:</span> {item.dhSolution}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl mb-4">Ready to Collaborate?</h3>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Partner with us to secure not just talent, but a sustained competitive advantage at the forefront of innovation
          </p>
          <a 
            href="/partner"
            className="inline-block bg-white text-green-900 px-8 py-4 rounded-lg hover:bg-green-50 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  );
}