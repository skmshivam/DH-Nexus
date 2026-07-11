import { Briefcase, TrendingUp, Award, Users, Database, Palette, BarChart, Shield } from 'lucide-react';

const careerRoles = [
  {
    title: 'Data Analyst',
    description: 'Analyze complex datasets to derive insights for business decision-making',
    skills: ['Python', 'SQL', 'Tableau', 'Statistical Analysis'],
    icon: BarChart,
    color: 'blue'
  },
  {
    title: 'Machine Learning Engineer',
    description: 'Develop and deploy ML models for intelligent applications',
    skills: ['Deep Learning', 'NLP', 'Python', 'TensorFlow'],
    icon: Award,
    color: 'purple'
  },
  {
    title: 'Business Analyst / AI Strategist',
    description: 'Bridge technology and business strategy with data-driven insights',
    skills: ['Business Intelligence', 'Strategic Planning', 'AI Ethics'],
    icon: Briefcase,
    color: 'green'
  },
  {
    title: 'Research and Policy Analyst',
    description: 'Conduct research and analysis for policy formulation and governance',
    skills: ['Research Methods', 'Policy Analysis', 'Data Visualization'],
    icon: Shield,
    color: 'amber'
  },
  {
    title: 'UX/UI Designer',
    description: 'Design user-centric digital experiences and interfaces',
    skills: ['Adobe Suite', 'AR/VR', 'Human Factors', 'Prototyping'],
    icon: Palette,
    color: 'pink'
  },
  {
    title: 'Digital Marketing Strategist',
    description: 'Develop and execute data-driven marketing campaigns',
    skills: ['Marketing Analytics', 'Social Media', 'Consumer Behavior'],
    icon: TrendingUp,
    color: 'indigo'
  },
  {
    title: 'Archivist / Digital Curator',
    description: 'Manage and preserve digital cultural heritage and organizational knowledge',
    skills: ['Digital Curation', 'Metadata', 'Database Management'],
    icon: Database,
    color: 'teal'
  },
  {
    title: 'Product Analyst / Manager',
    description: 'Drive product development with user insights and market analysis',
    skills: ['Product Strategy', 'User Research', 'Analytics'],
    icon: Users,
    color: 'orange'
  }
];

const colorMap: Record<string, { bg: string; icon: string; border: string }> = {
  blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200' },
  purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200' },
  green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200' },
  amber: { bg: 'bg-amber-50', icon: 'text-amber-600', border: 'border-amber-200' },
  pink: { bg: 'bg-pink-50', icon: 'text-pink-600', border: 'border-pink-200' },
  indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-600', border: 'border-indigo-200' },
  teal: { bg: 'bg-teal-50', icon: 'text-teal-600', border: 'border-teal-200' },
  orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-200' }
};

export function CareerPathways() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">
            Career Pathways
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Graduates are prepared for advanced roles requiring synthesis of technical proficiency and analytical insight
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-12 text-white mb-16">
          <h3 className="text-3xl mb-6">Beyond Traditional Silos</h3>
          <p className="text-xl text-indigo-100 mb-8">
            The program prepares graduates for a variety of advanced roles that require a synthesis of technical proficiency and analytical insight. Alumni are equipped to work in sectors ranging from technology and finance to cultural heritage and public policy.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-2">Academia</div>
              <div className="text-indigo-200">Research & Teaching Positions</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-2">Industry</div>
              <div className="text-indigo-200">Tech, Finance, Media, Consulting</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-3xl mb-2">Public Sector</div>
              <div className="text-indigo-200">Policy, Governance, Heritage</div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {careerRoles.map((role, index) => {
            const colors = colorMap[role.color];
            const Icon = role.icon;
            
            return (
              <div 
                key={index}
                className={`${colors.bg} border ${colors.border} rounded-xl p-6 hover:shadow-lg transition-shadow`}
              >
                <div className={`w-12 h-12 ${colors.bg} border ${colors.border} rounded-lg flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 ${colors.icon}`} />
                </div>
                <h3 className="text-xl text-slate-900 mb-2">{role.title}</h3>
                <p className="text-sm text-slate-600 mb-4">{role.description}</p>
                <div className="border-t ${colors.border} pt-4">
                  <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">
                    Key Skills
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {role.skills.map((skill, sIndex) => (
                      <span 
                        key={sIndex}
                        className={`text-xs ${colors.icon} bg-white px-2 py-1 rounded`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
            <h3 className="text-2xl text-slate-900 mb-4">Industry Sectors</h3>
            <div className="space-y-2">
              {['Technology & AI', 'Finance & Fintech', 'Media & Publishing', 'Cultural Heritage', 'E-commerce & Digital Products', 'Consulting & Strategy', 'Government & Policy', 'Education & EdTech'].map((sector, index) => (
                <div key={index} className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                  <span className="text-slate-700">{sector}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
            <h3 className="text-2xl text-slate-900 mb-4">Recent Placements</h3>
            <div className="space-y-4">
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-indigo-600 mb-1">McKinsey & Company</div>
                <div className="text-sm text-slate-600">Forward Learner Program Selection</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-indigo-600 mb-1">NITI Aayog</div>
                <div className="text-sm text-slate-600">Government of India Internship</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-indigo-600 mb-1">Digital Nexus AI</div>
                <div className="text-sm text-slate-600">AI Content Creation Intern</div>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-sm">
                <div className="text-indigo-600 mb-1">FLAME University</div>
                <div className="text-sm text-slate-600">Postdoctoral Fellow Position</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
