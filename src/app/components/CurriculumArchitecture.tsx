import { BookOpen, Layers, Rocket } from 'lucide-react';

const specializations = [
  {
    title: 'Archiving',
    description: 'Building expertise in digital curation and database management to preserve and provide access to valuable organizational knowledge and digital assets.',
    electives: ['Curation Technologies', 'Digital photography and videography', 'Images, Imaginations, and Digital Cultures']
  },
  {
    title: 'Cultural Heritage & Digital Preservation',
    description: 'Developing strategies and using digital tools for the curation, management, and monetization of cultural assets for organizations like museums, archives, and media houses.',
    electives: ['Introduction to Cultural Studies', 'Digital Storytelling', 'Consumer Culture and Commodities']
  },
  {
    title: 'Data Analytics for Social Sciences',
    description: 'Applying computational methods and big data analysis to understand market trends, public opinion, and complex user behavior.',
    electives: ['Analysis of Social Media Networks', 'Big Data and Social Sciences', 'Marketing Analytics']
  },
  {
    title: 'Data Journalism',
    description: 'Combining data analysis, visualization, and narrative skills to create compelling, evidence-based stories for media outlets and corporate communications.',
    electives: ['New Media Studies', 'Web & Social Media Analytics (SME)', 'Digital Publishing']
  },
  {
    title: 'Digital Marketing',
    description: 'Leveraging analytics, consumer behavior insights, and new media strategies to design and execute effective online marketing campaigns.',
    electives: ['New Media Studies', 'Consumer Behavior (SME)', 'Online Marketing (SME)']
  }
];

export function CurriculumArchitecture() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">
            Curriculum Architecture
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Forging industry-ready professionals through a carefully designed two-year, four-semester structure
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
            <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
              <BookOpen className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl mb-4 text-slate-900">Core Foundation</h3>
            <p className="text-slate-700 mb-4">
              The first two semesters build a comprehensive interdisciplinary base spanning technology, economics, research methodologies, and cultural theory.
            </p>
            <div className="text-sm text-slate-600">
              <div className="mb-1">Key Courses:</div>
              <ul className="space-y-1 ml-4">
                <li>• Foundations of Digital Humanities</li>
                <li>• Programming Techniques</li>
                <li>• Machine Learning for DH</li>
                <li>• Principles of Digital Economics</li>
                <li>• Methods and Methodologies in DH</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
            <div className="w-14 h-14 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <Layers className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-2xl mb-4 text-slate-900">Industry-Aligned Specializations</h3>
            <p className="text-slate-700 mb-4">
              In year two, students pursue specialized knowledge through five Major Thrust Areas with direct relevance to industry needs.
            </p>
            <div className="text-sm text-slate-600">
              <div className="mb-1">Specializations:</div>
              <ul className="space-y-1 ml-4">
                <li>• Archiving</li>
                <li>• Cultural Heritage & Preservation</li>
                <li>• Data Analytics for Social Sciences</li>
                <li>• Data Journalism</li>
                <li>• Digital Marketing</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
            <div className="w-14 h-14 bg-green-100 rounded-lg flex items-center justify-center mb-6">
              <Rocket className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-2xl mb-4 text-slate-900">Capstone Application</h3>
            <p className="text-slate-700 mb-4">
              Two mandatory capstone courses provide intensive, hands-on experiences tackling complex, real-world problems.
            </p>
            <div className="text-sm text-slate-600">
              <div className="mb-1">Outcomes:</div>
              <ul className="space-y-1 ml-4">
                <li>• Integrate diverse skills</li>
                <li>• Simulate professional environments</li>
                <li>• Proven problem-solving ability</li>
                <li>• Ready to contribute from day one</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-3xl mb-8 text-slate-900 text-center">Five Major Thrust Areas</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specializations.map((spec, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-200 hover:shadow-lg hover:border-indigo-300 transition-all"
              >
                <h4 className="text-xl mb-3 text-indigo-900">{spec.title}</h4>
                <p className="text-slate-600 mb-4 text-sm">{spec.description}</p>
                <div className="border-t border-slate-200 pt-4">
                  <div className="text-xs uppercase tracking-wide text-slate-500 mb-2">
                    Representative Electives
                  </div>
                  <ul className="space-y-1">
                    {spec.electives.map((elective, eIndex) => (
                      <li key={eIndex} className="text-sm text-slate-700 flex items-start gap-2">
                        <span className="text-indigo-600 mt-1">›</span>
                        <span>{elective}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
            
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl p-6 text-white flex flex-col justify-center items-center text-center">
              <div className="text-4xl mb-2">5</div>
              <div className="text-lg mb-1">Specializations</div>
              <div className="text-sm text-indigo-200">
                Tailored to meet diverse industry needs
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
