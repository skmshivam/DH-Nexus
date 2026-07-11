import { Code, BookOpen, Briefcase, TrendingUp, Palette, Users } from 'lucide-react';

const skillCategories = [
  {
    title: 'Technical & Data Science Skills',
    icon: Code,
    color: 'blue',
    skills: [
      { name: 'Programming', details: 'Python, R, C++, C', course: 'Programming Techniques' },
      { name: 'Machine Learning & AI', details: 'Deep Learning, CNN, Scikit-Learn, NLP', course: 'Machine Learning for Digital Humanities' },
      { name: 'Data Analysis & Visualization', details: 'Pandas, Tableau, ArcGIS, Excel', course: 'Methods and Methodologies in Digital Humanities' },
      { name: 'Database Management', details: 'SQL, MySQL, DBMS, Metadata Management', course: 'Archiving and Databases' },
      { name: 'Web & Digital Technologies', details: 'HTML, CSS, basic JavaScript, CMS tools', course: 'Foundations of Digital Humanities' }
    ]
  },
  {
    title: 'Design, Media & Communication',
    icon: Palette,
    color: 'purple',
    skills: [
      { name: 'Graphic Design', details: 'Adobe Photoshop, Illustrator, InDesign, Canva', course: 'Introduction to Typography' },
      { name: 'Digital Content Creation', details: 'Photography, Videography, AR/VR Storytelling', course: 'Digital Storytelling' },
      { name: 'Interactive Media & AR/VR', details: 'Unity, Twine, Immersive Environments', course: 'Introduction to AR/VR' },
      { name: 'Strategic Communication', details: 'Digital Publishing, Civic Writing', course: 'New Media Studies, Perspectives in Language and Literary Studies' }
    ]
  },
  {
    title: 'Business, Policy & Analytical Competence',
    icon: Briefcase,
    color: 'green',
    skills: [
      { name: 'Market and Financial Analysis', details: 'Stock analytics, Consumer behavior, Marketing analytics', course: 'Principles of Digital Economics, Consumer Culture and Commodities' },
      { name: 'Strategic Planning', details: 'Business Models, Innovation, Platform Economics', course: 'Principles of Digital Economics' },
      { name: 'Public Policy & Governance', details: 'Urban policy, Social Impact Analysis', course: 'Electives and research; Proven experience via internships (e.g., NITI Aayog)' }
    ]
  },
  {
    title: 'Social Sciences & Humanities Methods',
    icon: BookOpen,
    color: 'amber',
    skills: [
      { name: 'Advanced Research', details: 'Qualitative, Quantitative, Digital Ethnography', course: 'Methods and Methodologies in Digital Humanities' },
      { name: 'Cultural & Textual Analysis', details: 'Semiotics, Literary analysis', course: 'Perspectives in Language and Literary Studies, Cultural Studies' },
      { name: 'Archival & Curation Practices', details: 'Digital Curation, Preservation', course: 'Archiving and Databases, Foundations of Digital Humanities' }
    ]
  },
  {
    title: 'Leadership & Soft Skills',
    icon: Users,
    color: 'indigo',
    skills: [
      { name: 'Project Management', details: 'Team coordination, Timeline planning', course: 'Project 1 and Project 2 (Mandatory Capstone Projects)' },
      { name: 'Critical Thinking & Analytical Reasoning', details: 'Problem-solving, Strategic analysis', course: 'Seminar in Digital Humanities, Core Foundational Courses' },
      { name: 'Creativity & Innovation', details: 'Design thinking, Innovation', course: 'Project-based learning across the curriculum' },
      { name: 'Adaptability & Problem Solving', details: 'Flexibility, Learning agility', course: 'Interdisciplinary coursework and hands-on lab sessions' }
    ]
  }
];

const careers = [
  'Data Analyst',
  'Machine Learning Engineer',
  'Consultant',
  'Finance Professional',
  'Research and Policy Analyst',
  'Product Analyst',
  'Data Scientist',
  'Archivist'
];

const colorMap: Record<string, { bg: string; icon: string; border: string; text: string }> = {
  blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200', text: 'text-blue-900' },
  purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200', text: 'text-purple-900' },
  green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200', text: 'text-green-900' },
  amber: { bg: 'bg-amber-50', icon: 'text-amber-600', border: 'border-amber-200', text: 'text-amber-900' },
  indigo: { bg: 'bg-indigo-50', icon: 'text-indigo-600', border: 'border-indigo-200', text: 'text-indigo-900' }
};

export function MarketReadiness() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">
            Core Competencies & Verifiable Skillsets
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Specific, marketable skills directly applicable to corporate environments, mapped to relevant coursework
          </p>
        </div>
        
        <div className="space-y-8 mb-16">
          {skillCategories.map((category, categoryIndex) => {
            const colors = colorMap[category.color];
            const Icon = category.icon;
            
            return (
              <div key={categoryIndex} className={`${colors.bg} border ${colors.border} rounded-xl p-8`}>
                <div className="flex items-center gap-3 mb-6">
                  <div className={`w-12 h-12 ${colors.bg} border ${colors.border} rounded-lg flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <h3 className={`text-2xl ${colors.text}`}>{category.title}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="bg-white rounded-lg p-4 shadow-sm border border-slate-200">
                      <div className={`mb-2 ${colors.text}`}>{skill.name}</div>
                      <div className="text-sm text-slate-600 mb-2">{skill.details}</div>
                      <div className="text-xs text-slate-500 italic">
                        {skill.course}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8" />
            <h3 className="text-3xl">Career Pathways Outside Traditional Silos</h3>
          </div>
          <p className="text-xl text-indigo-100 mb-8">
            Large scale applications in industry and academia with specialized roles requiring hybrid technical and humanistic approaches
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {careers.map((career, index) => (
              <div 
                key={index}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-4 py-3 text-center hover:bg-white/20 transition-colors"
              >
                {career}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}