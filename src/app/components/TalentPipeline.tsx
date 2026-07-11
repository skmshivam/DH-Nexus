import { Code, Palette, Briefcase, BookOpen, Users, Award } from 'lucide-react';

const skillClusters = [
  {
    category: 'Technical & Data Science',
    icon: Code,
    skills: ['Python', 'R', 'C++', 'ML/AI', 'Deep Learning', 'NLP', 'SQL', 'DBMS', 'Pandas', 'Tableau', 'ArcGIS'],
    color: 'blue'
  },
  {
    category: 'Design, Media & Communication',
    icon: Palette,
    skills: ['Adobe Photoshop', 'Illustrator', 'InDesign', 'AR/VR', 'Unity', 'Digital Storytelling', 'Photography', 'Videography'],
    color: 'purple'
  },
  {
    category: 'Business, Policy & Analytical',
    icon: Briefcase,
    skills: ['Digital Economics', 'Strategic Planning', 'Policy Analysis', 'Consumer Behavior', 'Marketing Analytics'],
    color: 'green'
  },
  {
    category: 'Humanities & Social Sciences',
    icon: BookOpen,
    skills: ['Research Methods', 'Cultural Analysis', 'Digital Ethnography', 'Archiving', 'Metadata Management'],
    color: 'amber'
  },
  {
    category: 'Leadership & Soft Skills',
    icon: Users,
    skills: ['Project Management', 'Critical Thinking', 'Creativity', 'Adaptability', 'Problem Solving'],
    color: 'pink'
  }
];

const typicalRoles = [
  { title: 'Data Analyst', department: 'Analytics, Business Intelligence' },
  { title: 'Machine Learning Engineer', department: 'AI/ML, Data Science' },
  { title: 'Product Analyst', department: 'Product Management, Strategy' },
  { title: 'UX/UI Designer', department: 'Design, User Experience' },
  { title: 'Digital Marketing Strategist', department: 'Marketing, Communications' },
  { title: 'Research & Policy Analyst', department: 'Policy, Governance' },
  { title: 'Data Scientist', department: 'Data Science, Research' },
  { title: 'Digital Archivist / Curator', department: 'Cultural Heritage, Libraries' },
  { title: 'Content Strategist', department: 'Media, Publishing' },
  { title: 'AI Ethics Consultant', department: 'Ethics, Compliance' }
];

const colorMap: Record<string, { bg: string; border: string; text: string }> = {
  blue: { bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-600' },
  purple: { bg: 'bg-purple-50', border: 'border-purple-200', text: 'text-purple-600' },
  green: { bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-600' },
  amber: { bg: 'bg-amber-50', border: 'border-amber-200', text: 'text-amber-600' },
  pink: { bg: 'bg-pink-50', border: 'border-pink-200', text: 'text-pink-600' }
};

export function TalentPipeline() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">
            Skills & Talent Pipeline
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Hybrid professionals ready to drive innovation at the intersection of technology and humanity
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-12 text-white mb-16">
          <h3 className="text-3xl mb-6">The DH Hybrid Profile</h3>
          <p className="text-xl text-indigo-100 mb-8">
            Our graduates deliver value by connecting data to narrative, code to culture, and your products to your customers. They possess a rare and powerful combination of competencies that makes them versatile assets to forward-thinking organizations.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl mb-2">Adaptable</div>
              <div className="text-indigo-200">Navigate complex interdisciplinary challenges</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl mb-2">Technical</div>
              <div className="text-indigo-200">Python, ML, AI, data analytics expertise</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl mb-2">Analytical</div>
              <div className="text-indigo-200">Critical thinking + human-centric design</div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl mb-8 text-slate-900 text-center">DH Skill Clusters</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillClusters.map((cluster, index) => {
              const Icon = cluster.icon;
              const colors = colorMap[cluster.color];
              
              return (
                <div key={index} className={`${colors.bg} border ${colors.border} rounded-xl p-6 hover:shadow-lg transition-shadow`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 ${colors.bg} border ${colors.border} rounded-lg flex items-center justify-center`}>
                      <Icon className={`w-5 h-5 ${colors.text}`} />
                    </div>
                    <h4 className="text-lg text-slate-900">{cluster.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cluster.skills.map((skill, sIndex) => (
                      <span 
                        key={sIndex}
                        className={`text-xs ${colors.text} bg-white px-2 py-1 rounded`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 mb-12">
          <h3 className="text-3xl mb-8 text-slate-900 text-center">Typical Roles Companies Hire For</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {typicalRoles.map((role, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg border border-indigo-200">
                <div>
                  <div className="text-slate-900">{role.title}</div>
                  <div className="text-sm text-slate-600">{role.department}</div>
                </div>
                <Award className="w-5 h-5 text-indigo-600" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl mb-4">Hire DH Talent via DH NEXUS</h3>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Post a role or reach out directly to discover interdisciplinary DH professionals ready to contribute.
          </p>
          <a
            href="/for-recruiters"
            className="inline-block bg-white text-green-900 px-8 py-4 rounded-lg hover:bg-green-50 transition-colors font-semibold"
          >
            Connect with DH Talent
          </a>
        </div>
      </div>
    </section>
  );
}