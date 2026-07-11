import { BookMarked, Layers } from 'lucide-react';

const coreCourses = [
  { code: 'DH 500', title: 'Foundations of Digital Humanities', ltpd: '3-0-2-0', credits: 4 },
  { code: 'DH 500', title: 'Methods and Methodologies in Digital Humanities', ltpd: '3-0-2-0', credits: 4 },
  { code: 'DH 500', title: 'Machine Learning for Digital Humanities', ltpd: '3-0-0-0', credits: 3 },
  { code: 'DH 500', title: 'Principles of Digital Economics', ltpd: '3-0-0-0', credits: 3 },
  { code: 'DH 500', title: 'Place and Identity in the Digital Age', ltpd: '3-0-0-0', credits: 3 },
  { code: 'DH 500', title: 'Archiving and Databases', ltpd: '3-0-2-0', credits: 4 },
  { code: 'DH 500', title: 'Seminar in Digital Humanities', ltpd: '0-0-2-1', credits: 2 },
  { code: 'MA 500', title: 'Programming Techniques', ltpd: '2-0-2-0', credits: 3 },
  { code: 'MA 500', title: 'Data Structures and Algorithms', ltpd: '1-0-2-0', credits: 2 },
  { code: 'DH 600', title: 'Civilizations, Cultures, and Technologies', ltpd: '3-0-0-0', credits: 3 },
  { code: 'DH 600', title: 'Perspectives in Language and Literary Studies', ltpd: '3-0-0-0', credits: 3 },
  { code: 'DH 700', title: 'Social Media Application Development', ltpd: '1-0-2-0', credits: 2 },
  { code: 'OA 700', title: 'Foundations in IPR', ltpd: '1-0-0-0', credits: 1 }
];

const electiveCourses = [
  { code: 'DH 700', title: 'Introduction to Cultural Studies' },
  { code: 'DH 700', title: 'New Media Studies' },
  { code: 'DH 700', title: 'Analysis of Social Media Networks' },
  { code: 'DH 700', title: 'Digital Cinema' },
  { code: 'DH 700', title: 'Digital Storytelling' },
  { code: 'DH 700', title: 'Human Factors in Interaction Design' },
  { code: 'DH 700', title: 'Introduction to Typography' },
  { code: 'DH 700', title: 'Consumer Culture and Commodities' },
  { code: 'DH 700', title: 'Images, Imaginations, and Digital Cultures' },
  { code: 'DH 700', title: 'Text Analytics' },
  { code: 'DH 700', title: 'Theory of Communication' },
  { code: 'DH 700', title: 'Curation Technologies' },
  { code: 'DH 700', title: 'Digital Photography and Videography' },
  { code: 'DH 700', title: 'Cultural Semiotics' },
  { code: 'DH 700', title: 'Performing Arts in Digital Space' },
  { code: 'DH 700', title: 'Common Ontology' },
  { code: 'DH 700', title: 'Qualitative and Quantitative Methodologies' },
  { code: 'DH 700', title: 'Big Data and Social Sciences' },
  { code: 'DH 700', title: 'Marketing Analytics' },
  { code: 'DH 700', title: 'Game Designing' },
  { code: 'DH 700', title: 'Computational Social Science' },
  { code: 'DH 700', title: 'Computational Economics' },
  { code: 'DH 700', title: 'Web & Social Media Analytics (SME)' },
  { code: 'DH 700', title: 'Digital Publishing' },
  { code: 'DH 700', title: 'Civic Writing / Contextual Communication' },
  { code: 'DH 700', title: 'Crowd Sourcing' },
  { code: 'CS 700', title: 'Introduction to AR/VR' },
  { code: 'HS 700', title: 'Sociology of Science and Technology' },
  { code: 'HS 700', title: 'Gender and Society' },
  { code: 'HS 700', title: 'Cine Politics under the National Emergency' },
  { code: 'HS 700', title: 'Art, Aesthetics and the Public' },
  { code: 'HS 700', title: 'Climate Change and Society' },
  { code: 'HS 700', title: 'Sociocultural Theories' },
  { code: 'SME', title: 'Consumer Behavior (SME)' },
  { code: 'SME', title: 'Online Marketing (SME)' },
  { code: 'SME', title: 'International Marketing (SME)' },
  { code: 'SME', title: 'Innovation & Digital Economy (SME)' },
  { code: 'SME', title: 'Creating Digital Products/Services (SME)' }
];

export function CourseDetails() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">
            Course Catalog
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Comprehensive curriculum spanning technology, humanities, and social sciences
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                <BookMarked className="w-6 h-6 text-indigo-600" />
              </div>
              <div>
                <h3 className="text-3xl text-slate-900">Core Courses</h3>
                <p className="text-slate-600">13 compulsory foundation courses</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl border border-indigo-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-indigo-600 text-white">
                      <th className="px-4 py-3 text-left text-sm">Code</th>
                      <th className="px-4 py-3 text-left text-sm">Course Title</th>
                      <th className="px-4 py-3 text-center text-sm">L-T-P-D</th>
                      <th className="px-4 py-3 text-center text-sm">Credits</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    {coreCourses.map((course, index) => (
                      <tr key={index} className="border-b border-slate-200 hover:bg-indigo-50 transition-colors">
                        <td className="px-4 py-3 text-sm text-slate-700">{course.code}</td>
                        <td className="px-4 py-3 text-sm text-slate-900">{course.title}</td>
                        <td className="px-4 py-3 text-sm text-center text-slate-600">{course.ltpd}</td>
                        <td className="px-4 py-3 text-sm text-center text-indigo-600">{course.credits}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Layers className="w-6 h-6 text-purple-600" />
              </div>
              <div>
                <h3 className="text-3xl text-slate-900">Program Electives</h3>
                <p className="text-slate-600">38+ specialized elective courses</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200 p-6 max-h-[600px] overflow-y-auto">
              <div className="grid gap-2">
                {electiveCourses.map((course, index) => (
                  <div 
                    key={index}
                    className="bg-white rounded-lg p-3 shadow-sm border border-slate-200 hover:border-purple-300 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xs text-purple-600 bg-purple-100 px-2 py-1 rounded flex-shrink-0">
                        {course.code}
                      </span>
                      <span className="text-sm text-slate-900">{course.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
