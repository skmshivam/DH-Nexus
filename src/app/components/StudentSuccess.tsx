import { Award, Building2, Globe, Sparkles } from 'lucide-react';

const students = [
  {
    name: 'Vasundhra Dahiya',
    focus: 'Critical AI, Critical Data and Algorithm Studies, Algorithmic Accountability, and AI Governance',
    achievement: 'Mozilla\'s RCC Global Conclave, DH Asia Webinar Series, DH2024 (ADHO), DHARTI2024',
    icon: Globe
  },
  {
    name: 'Shreyasi Singh',
    focus: 'Selected for internship at NITI Aayog, Government of India',
    achievement: 'Policy and Governance Experience',
    icon: Building2
  },
  {
    name: 'Anshika Kashyap',
    focus: 'Philosophy background focusing on AI and Business',
    achievement: 'McKinsey & Company Forward Learner Program',
    icon: Award
  },
  {
    name: 'Anirban Paul',
    focus: 'Multimodal Input Prediction in VR using Machine Learning',
    achievement: 'Immersive Technologies Research',
    icon: Sparkles
  },
  {
    name: 'Shivam Kumar',
    focus: 'Fintech and Financial Inclusion',
    achievement: 'Financial Markets & Technology',
    icon: Building2
  },
  {
    name: 'Diksha Rani',
    focus: 'Misinformation and Misinterpretation in the Digital Age',
    achievement: 'Critical Media Research',
    icon: Globe
  },
  {
    name: 'Sabeela Rasheed',
    focus: 'Social Media, Cyberprotest, Digital Discourse - presented at IIT (ISM) Dhanbad Conference on DH and AI',
    achievement: 'Digital Communication Research',
    icon: Sparkles
  },
  {
    name: 'Pratishruti Bandyopadhyay',
    focus: 'Posthumanism and Identity in Titane: Gender, Technology and the Cyborg Body',
    achievement: 'IIT (ISM) Dhanbad Conference on DH and AI',
    icon: Globe
  },
  {
    name: 'Supreet Kaur',
    focus: 'Preserving Crafts and Knowledge from the Physical World to the Digital World',
    achievement: 'DH2024 (ADHO) Co-presenter',
    icon: Award
  },
  {
    name: 'Mehak Sejwal',
    focus: 'DARIAH-HR Conference (Croatia) and Indian Art History Congress',
    achievement: 'International Presentations',
    icon: Globe
  },
  {
    name: 'Pankhuri Gupta',
    focus: 'Awarded competitive bursary',
    achievement: 'Digital Humanities Oxford Summer School 2025',
    icon: Award
  },
  {
    name: 'Arun V.B',
    focus: 'Papers at national conferences and scholarly publications on AI, gender, and cultural heritage',
    achievement: 'Published Researcher',
    icon: Sparkles
  },
  {
    name: 'Sharanya Ghosh',
    focus: 'First PhD submission from DH-IDRP, now Postdoctoral Fellow at FLAME University',
    achievement: 'MLA 2025 Co-presenter',
    icon: Award
  }
];

export function StudentSuccess() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">
            Student Success Stories
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Research and achievements demonstrating practical application in market and policy domains, proving impact beyond academia
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {students.map((student, index) => {
            const Icon = student.icon;
            
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-200 hover:shadow-xl hover:border-indigo-300 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl text-slate-900 mb-1">
                      {student.name}
                    </h3>
                    <div className="inline-block bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full">
                      {student.achievement}
                    </div>
                  </div>
                </div>
                <p className="text-slate-600">
                  {student.focus}
                </p>
              </div>
            );
          })}
        </div>
        
        <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 rounded-2xl p-12 text-white text-center">
          <h3 className="text-3xl mb-4">A Convergent Array of Practices</h3>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            The Digital Humanities program operates as a convergent array of practices, consciously moving <span className="text-yellow-300">far away</span> from traditional single-discipline study by creating experts who understand the social and ethical context of technology as well as the technical methods required to implement solutions.
          </p>
        </div>
      </div>
    </section>
  );
}