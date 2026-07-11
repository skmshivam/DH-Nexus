import { Users, GraduationCap, TrendingUp, Brain } from 'lucide-react';

const backgrounds = [
  'B.A. Sociology',
  'B.A. History',
  'B.A. Philosophy',
  'B.A. Economics',
  'B.A. Economics and Maths',
  'B.A. English',
  'B.Sc. Physics',
  'B.A. Architecture (A.I.H.C & Arch)'
];

const researchApplications = [
  {
    research: 'AI and Business',
    roles: 'Business Analyst, AI Strategist, AI Product Manager, Technology Consultant',
    icon: Brain
  },
  {
    research: 'Fintech and Financial Inclusion',
    roles: 'Fintech Analyst, Consultant, Financial Services Product Manager',
    icon: TrendingUp
  },
  {
    research: 'Machine Learning-Based Classification',
    roles: 'Machine Learning Engineer, Data Scientist, Quantitative Analyst',
    icon: Brain
  },
  {
    research: 'Digital Pedagogy / EdTech',
    roles: 'EdTech Product Manager, Learning Experience Designer, Instructional Designer, Corporate L&D Specialist',
    icon: GraduationCap
  },
  {
    research: 'Gamification of Collections, AR/VR',
    roles: 'UX/UI Designer, Immersive Experience Developer, Digital Curator',
    icon: Users
  },
  {
    research: 'New Media, AI, Digital Cultures',
    roles: 'Digital Marketing Strategist, Market Research Analyst, Product Analyst, Media Planner, Digital Ethnographer',
    icon: TrendingUp
  }
];

export function CohortProfile() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">
            Profile of the 2024-26 Cohort
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            A tapestry of talent with diverse academic backgrounds creating dynamic problem-solving teams
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 mb-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-indigo-600" />
                </div>
                <h3 className="text-2xl text-slate-900">Diverse Academic Foundations</h3>
              </div>
              <p className="text-slate-700 mb-6">
                The defining strength of this cohort is its profound diversity. Students bring together sharp minds from the social sciences, humanities, and hard sciences, creating a dynamic learning environment where different analytical frameworks converge.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {backgrounds.map((background, index) => (
                  <div 
                    key={index}
                    className="bg-indigo-50 border border-indigo-200 rounded-lg px-4 py-2 text-sm text-slate-700"
                  >
                    {background}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-8 text-white">
              <h3 className="text-2xl mb-4">Intellectual Diversity = Corporate Asset</h3>
              <p className="text-indigo-100">
                This intellectual diversity is a direct asset in the corporate world, enabling teams to approach problems from multiple perspectives and deliver innovative solutions that pure technical or pure humanities backgrounds cannot achieve alone.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl mb-6 text-slate-900">Cohort Statistics</h3>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center">
                  <span className="text-3xl text-white">8</span>
                </div>
                <div>
                  <div className="text-slate-900">Unique Backgrounds</div>
                  <div className="text-sm text-slate-600">From Sociology to Physics</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                  <span className="text-3xl text-white">6</span>
                </div>
                <div>
                  <div className="text-slate-900">Research Focus Areas</div>
                  <div className="text-sm text-slate-600">Aligned with industry needs</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <span className="text-3xl text-white">100%</span>
                </div>
                <div>
                  <div className="text-slate-900">Industry Ready</div>
                  <div className="text-sm text-slate-600">With hybrid skillsets</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-3xl mb-8 text-slate-900 text-center">Research Interests Aligned with Corporate Needs</h3>
          <p className="text-center text-slate-600 mb-12 max-w-3xl mx-auto">
            Student research pursuits translate directly into practical skills for roles that drive business value and innovation
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            {researchApplications.map((item, index) => {
              const Icon = item.icon;
              
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-md border border-slate-200 hover:shadow-lg hover:border-indigo-300 transition-all"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-lg text-slate-900 mb-2">{item.research}</h4>
                      <div className="text-sm text-slate-600">
                        <span className="text-indigo-600">Corporate Roles:</span> {item.roles}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}