import { Code, Database, Brain, Globe, Palette, Shield, BarChart3, Cpu, Network, Terminal, ArrowRight } from 'lucide-react';

const techSkills = [
  {
    category: 'AI & Machine Learning',
    icon: Brain,
    color: 'from-purple-500 to-indigo-600',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Deep Learning', 'Neural Networks', 'Computer Vision']
  },
  {
    category: 'Natural Language Processing',
    icon: Terminal,
    color: 'from-pink-500 to-rose-600',
    skills: ['spaCy', 'NLTK', 'Hugging Face', 'GPT Integration', 'Text Mining', 'Sentiment Analysis']
  },
  {
    category: 'Data Science & Analytics',
    icon: BarChart3,
    color: 'from-green-500 to-emerald-600',
    skills: ['Python', 'R', 'Pandas', 'NumPy', 'Statistical Analysis', 'Predictive Modeling']
  },
  {
    category: 'Full Stack Development',
    icon: Code,
    color: 'from-cyan-500 to-blue-600',
    skills: ['React', 'Node.js', 'Django', 'REST APIs', 'MongoDB', 'PostgreSQL']
  },
  {
    category: 'Data Visualization',
    icon: Palette,
    color: 'from-orange-500 to-amber-600',
    skills: ['Tableau', 'D3.js', 'Plotly', 'Power BI', 'Interactive Dashboards', 'Storytelling']
  },
  {
    category: 'Digital Infrastructure',
    icon: Network,
    color: 'from-teal-500 to-cyan-600',
    skills: ['Cloud (AWS/Azure)', 'Docker', 'Git', 'CI/CD', 'Database Design', 'System Architecture']
  }
];

const industryApplications = [
  {
    industry: 'Tech Giants',
    companies: ['Google', 'Meta', 'Microsoft', 'Amazon'],
    roles: ['ML Engineer', 'Data Scientist', 'UX Researcher', 'Content Strategist'],
    icon: Cpu,
    color: 'from-blue-500 to-indigo-600'
  },
  {
    industry: 'Cultural Sector',
    companies: ['Museums', 'Archives', 'Libraries', 'Heritage Orgs'],
    roles: ['Digital Curator', 'Data Analyst', 'Tech Lead', 'Research Scientist'],
    icon: Globe,
    color: 'from-purple-500 to-pink-600'
  },
  {
    industry: 'Media & Publishing',
    companies: ['NYT', 'WSJ', 'Netflix', 'Spotify'],
    roles: ['Data Journalist', 'Content Analyst', 'Recommendation Systems', 'Cultural Analytics'],
    icon: Database,
    color: 'from-green-500 to-emerald-600'
  },
  {
    industry: 'Ethics & Policy',
    companies: ['AI Safety Orgs', 'Think Tanks', 'Govt Agencies', 'NGOs'],
    roles: ['AI Ethics Specialist', 'Policy Analyst', 'Bias Auditor', 'Research Advisor'],
    icon: Shield,
    color: 'from-amber-500 to-orange-600'
  }
];

export function TechSkillsShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
            <Code className="w-5 h-5" />
            <span className="text-sm font-medium">Enterprise-Grade Technical Skills</span>
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6 text-slate-900">
            What DH Professionals Bring To Your Team
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Not just humanities graduates—trained technologists with deep cultural intelligence
          </p>
        </div>

        {/* Tech Skills Grid */}
        <div className="mb-20">
          <h3 className="text-3xl text-slate-900 mb-8 text-center">Core Technical Competencies</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {techSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:shadow-2xl hover:scale-105 transition-all">
                  <div className={`w-14 h-14 bg-gradient-to-br ${skill.color} rounded-xl flex items-center justify-center mb-4 shadow-md`}>
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900 mb-4">{skill.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skill.skills.map((tech, tIndex) => (
                      <span key={tIndex} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full border border-slate-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Industry Applications */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl text-slate-900 mb-4">Where DH Talent Makes Impact</h3>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              From Fortune 500 to cultural institutions—DH professionals are solving real-world problems
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {industryApplications.map((app, index) => {
              const Icon = app.icon;
              return (
                <div key={index} className="bg-white rounded-2xl p-8 shadow-xl border-2 border-slate-200 hover:border-cyan-400 transition-all">
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-br ${app.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-slate-900">{app.industry}</h4>
                      <p className="text-sm text-slate-500">High-demand sector</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Hiring Companies</div>
                      <div className="flex flex-wrap gap-2">
                        {app.companies.map((company, cIndex) => (
                          <span key={cIndex} className="text-sm bg-gradient-to-r from-cyan-50 to-blue-50 text-cyan-700 px-3 py-1 rounded-lg border border-cyan-200">
                            {company}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">Common Roles</div>
                      <div className="flex flex-wrap gap-2">
                        {app.roles.map((role, rIndex) => (
                          <span key={rIndex} className="text-sm bg-slate-100 text-slate-700 px-3 py-1 rounded-lg border border-slate-200">
                            {role}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Value Proposition Banner */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 rounded-3xl p-10 lg:p-16 text-white shadow-2xl">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-5xl mb-6">The DH Professional Advantage</h3>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              A unique combination of technical excellence and humanistic depth
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Code className="w-6 h-6 text-green-400" />
                </div>
                <div>
                  <div className="font-semibold mb-2">Technical + Critical Thinking</div>
                  <div className="text-sm text-blue-200">They code AND understand why it matters</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-purple-400" />
                </div>
                <div>
                  <div className="font-semibold mb-2">Cultural Intelligence at Scale</div>
                  <div className="text-sm text-blue-200">Build global products with sensitivity to diverse users</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <div className="font-semibold mb-2">Ethics & Bias Expertise</div>
                  <div className="text-sm text-blue-200">Navigate AI safety and responsible tech development</div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-pink-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-pink-400" />
                </div>
                <div>
                  <div className="font-semibold mb-2">Research-Driven Problem Solving</div>
                  <div className="text-sm text-blue-200">Trained to ask the right questions before building</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 text-center">
            <a 
              href="/for-recruiters" 
              className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-400 hover:to-emerald-400 text-white px-8 py-4 rounded-xl transition-all transform hover:scale-105 font-semibold shadow-xl"
            >
              <span>See Full Recruiter Guide</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}