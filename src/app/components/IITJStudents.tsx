import { GraduationCap, BookOpen, Sparkles, Users, Award } from 'lucide-react';

// PhD Scholars Data
const phdScholars = [
  {
    name: 'Mehak Sejwal',
    education: ['B.A. (Hons) History', 'M.A. History of Art'],
    research: 'Digital Heritage, History, Art History, Palaeography, Epigraphy',
    category: 'Heritage & Culture'
  },
  {
    name: 'Jyoti',
    education: ['B.A. English Literature', 'M.A. English Literature'],
    research: 'Memes, Digital Culture',
    category: 'Digital Culture'
  },
  {
    name: 'Sharanya Ghosh',
    education: ['B.A. English Literature', 'M.A. English Literature'],
    research: 'Digital Social Reading, Digital Pedagogy, Cognitive Literary Studies',
    category: 'Pedagogy & Literature'
  },
  {
    name: 'Srabani Biswas',
    education: ['B.A. (Hons) English Literature', 'M.A. English Literature'],
    research: 'Text Analysis, Sensory Studies, Distant Reading',
    category: 'Computational Texts'
  },
  {
    name: 'Supreet Kaur',
    education: ['B.Tech CSE', 'M.Tech Software Engineering'],
    research: 'Digital Heritage, Knowledge Graphs, Metaverse, Heritage Crafts, Archiving',
    category: 'Heritage Tech'
  },
  {
    name: 'Pushan Kumar',
    education: ['B.A. English Literature', 'M.A. English Literature'],
    research: 'AI, Digital Trust, and Authorship',
    category: 'AI & Ethics'
  },
  {
    name: 'Vasundhra Dahiya',
    education: ['B.Tech Computer Science', 'M.Tech Data Science'],
    research: 'Critical AI, Critical Data and Algorithm Studies, Sociotechnical Research, Algorithmic Accountability, AI governance, Critical Caste and Technology Studies, HCI, Responsible Computing, Critical DH Pedagogy, NLP and Conversational AI',
    category: 'AI Ethics & Social Computing'
  },
  {
    name: 'Debarati Sarkar',
    education: ['Master of Science in Population Studies'],
    research: 'Population Digital Health, HCI, Social Computing, Health information ethics',
    category: 'Digital Health'
  },
  {
    name: 'Uddipana Kalita',
    education: ['B.A. (Hons.) English Literature', 'M.A. English Literature'],
    research: 'Digital Humanities from North East India, with focus on Assam',
    category: 'Regional Studies'
  },
  {
    name: 'Himanshu Sihag',
    education: ['B.A. (Sociology, Political Science, Public Administration)', 'MA English Literature'],
    research: 'Machine Translation (MT) for low-resource and underserved languages, Corpus Linguistics',
    category: 'Computational Linguistics'
  },
  {
    name: 'Sabeela Rasheed',
    education: ['Bachelors in Mass Communication (Hons.)', 'MA in Convergent Journalism; MA in Education with specialization in EdTech'],
    research: 'Social Media, Cyberprotest, Digital Discourse',
    category: 'Digital Media & Activism'
  }
];

// MSc 2023 Batch Data
const msc2023 = [
  {
    name: 'Barun Mahaldar',
    education: ['B.A. English Language and Literature', 'M.A. English'],
    research: "Children's Perception in Game Design",
    category: 'Gaming & UX'
  },
  {
    name: 'Bharati Verma',
    education: ['Bachelor Of Business Administration'],
    research: 'Implementing Digital Communication strategies for Non-Profit',
    category: 'Digital Strategy'
  },
  {
    name: 'Mohit Prakash',
    education: ['Bachelor in Journalism'],
    research: 'Manufacture Truth: Creation and misinformation, Digital ethnography',
    category: 'Digital Media'
  },
  {
    name: 'Talha Mohammed Ansari',
    education: ['B.A Statistics-Psychology'],
    research: 'Ghetto Studies, Cognitive Science, Digital ethnography, Algorithm studies, Public policy',
    category: 'Social Computing'
  },
  {
    name: 'Bhasswati Bhattacharjee',
    education: ['B.A.(Hons.) English Literature', 'BLISc and MLISc - Library and Information Science'],
    research: 'Bangla Description and Analysis (Language and Linguistics)',
    category: 'Linguistics'
  },
  {
    name: 'Anushka Sharma',
    education: ['B.A.(Hons.) English Literature'],
    research: 'Writing and Technology - UX Writing',
    category: 'UX Writing'
  },
  {
    name: 'Arun V.B',
    education: ['BA Sociology', 'B.Ed. Social Science'],
    research: 'Technology Enhanced Learning - A Multicultural Perspective',
    category: 'EdTech'
  },
  {
    name: 'Diksha Rani',
    education: ['B.A. (Hons.) Journalism'],
    research: 'Misinformation and Misinterpretation in Digital Age',
    category: 'Digital Media'
  },
  {
    name: 'Paramita Paul',
    education: ['Bsc (Hons.) Economics'],
    research: 'Digitization and Financial inclusion',
    category: 'Fintech'
  }
];

// MSc 2024 Batch Data
const msc2024 = [
  {
    name: 'Pratishruti Bandyopadhyay',
    education: ['B.A. Sociology (Hons)'],
    research: 'Posthuman thought and Literary cultures',
    category: 'Literary Studies'
  },
  {
    name: 'Sanskriti Tripathi',
    education: ['B.A (Hons) History'],
    research: 'Digital Culture, Digital Heritage and Preservation, Digital Archives, Geospatial Mapping',
    category: 'Heritage & Archives'
  },
  {
    name: 'Anshika Kashyap',
    education: ['B.A (Hons.) Philosophy'],
    research: 'AI and Business',
    category: 'Business AI'
  },
  {
    name: 'Madhav Pradhan',
    education: ['B.A. Economics & History', 'M.A. in Film Direction + Production'],
    research: 'New Media, AI, Digital Cultures and Film Studies',
    category: 'Film & Digital Media'
  },
  {
    name: 'Shreyasi Singh',
    education: ['B.A. Economics and Maths'],
    research: 'Machine learning based classification',
    category: 'Machine Learning'
  },
  {
    name: 'Pankhuri Gupta',
    education: ['B.A. (Hons.) English'],
    research: 'Education and Technologies in the Digital Age, Digital Pedagogy',
    category: 'Digital Pedagogy'
  },
  {
    name: 'Priyanka Das',
    education: ['B.A. (Hons.) English'],
    research: 'Gamification of Collections and Archives, ML and AI in Games, AR/VR in Sensory Comics',
    category: 'Gaming & AR/VR'
  },
  {
    name: 'Anirban Paul',
    education: ['B.A. (Hons.) Economics'],
    research: 'Multimodal Input Prediction in VR using Machine Learning',
    category: 'VR & ML'
  },
  {
    name: 'Aman Kumar',
    education: ['B.Sc. Hons. Physics'],
    research: 'Technology for second language instruction in higher education',
    category: 'Language Learning'
  },
  {
    name: 'Shivam Kumar',
    education: ['B.A. (Hons) Ancient Indian History, Culture & Archaeology'],
    research: 'Fintech and financial inclusion',
    category: 'Fintech'
  }
];

export function IITJStudents() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-6 py-3 rounded-full mb-6 border border-indigo-200">
            <Users className="w-5 h-5" />
            <span className="text-sm font-semibold">IIT Jodhpur DH Community</span>
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Meet Our Students & Scholars
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A diverse community of researchers and practitioners pushing the boundaries of Digital Humanities across multiple domains
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-8 text-white shadow-xl">
            <Award className="w-10 h-10 mb-4 opacity-80" />
            <div className="text-5xl font-bold mb-2">11</div>
            <div className="text-indigo-100">PhD Scholars</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white shadow-xl">
            <GraduationCap className="w-10 h-10 mb-4 opacity-80" />
            <div className="text-5xl font-bold mb-2">9</div>
            <div className="text-purple-100">MSc 2023 Batch</div>
          </div>
          <div className="bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-8 text-white shadow-xl">
            <GraduationCap className="w-10 h-10 mb-4 opacity-80" />
            <div className="text-5xl font-bold mb-2">10</div>
            <div className="text-pink-100">MSc 2024 Batch</div>
          </div>
          <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl p-8 text-white shadow-xl">
            <Sparkles className="w-10 h-10 mb-4 opacity-80" />
            <div className="text-5xl font-bold mb-2">30</div>
            <div className="text-cyan-100">Total Researchers</div>
          </div>
        </div>

        {/* PhD Scholars Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-3xl lg:text-4xl text-slate-900">PhD Scholars</h3>
              <p className="text-lg text-slate-600">Advanced research shaping the future of Digital Humanities</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {phdScholars.map((scholar, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg border-2 border-indigo-200 hover:border-indigo-400 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">{scholar.name}</h4>
                    <div className="inline-block bg-indigo-100 text-indigo-700 text-xs px-2 py-1 rounded-full mb-2">
                      {scholar.category}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-3">
                  {scholar.education.map((edu, eduIdx) => (
                    <div key={eduIdx} className="text-xs text-slate-600 flex items-start gap-2">
                      <span className="text-indigo-400 mt-0.5">•</span>
                      <span>{edu}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-3 border-t border-slate-200">
                  <div className="text-xs text-slate-500 mb-1 font-semibold">Research Focus:</div>
                  <div className="text-sm text-slate-700 leading-relaxed">{scholar.research}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MSc 2023 Batch Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-3xl lg:text-4xl text-slate-900">M.Sc. Digital Humanities - Class of 2023</h3>
              <p className="text-lg text-slate-600">Pioneering cohort exploring diverse DH applications</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {msc2023.map((student, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg border-2 border-purple-200 hover:border-purple-400 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">{student.name}</h4>
                    <div className="inline-block bg-purple-100 text-purple-700 text-xs px-2 py-1 rounded-full mb-2">
                      {student.category}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-3">
                  {student.education.map((edu, eduIdx) => (
                    <div key={eduIdx} className="text-xs text-slate-600 flex items-start gap-2">
                      <span className="text-purple-400 mt-0.5">•</span>
                      <span>{edu}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-3 border-t border-slate-200">
                  <div className="text-xs text-slate-500 mb-1 font-semibold">Research Focus:</div>
                  <div className="text-sm text-slate-700 leading-relaxed">{student.research}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MSc 2024 Batch Section */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center">
              <GraduationCap className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-3xl lg:text-4xl text-slate-900">M.Sc. Digital Humanities - Class of 2024</h3>
              <p className="text-lg text-slate-600">Latest cohort bringing fresh perspectives and innovation</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {msc2024.map((student, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-6 shadow-lg border-2 border-pink-200 hover:border-pink-400 hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">{student.name}</h4>
                    <div className="inline-block bg-pink-100 text-pink-700 text-xs px-2 py-1 rounded-full mb-2">
                      {student.category}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-3">
                  {student.education.map((edu, eduIdx) => (
                    <div key={eduIdx} className="text-xs text-slate-600 flex items-start gap-2">
                      <span className="text-pink-400 mt-0.5">•</span>
                      <span>{edu}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-3 border-t border-slate-200">
                  <div className="text-xs text-slate-500 mb-1 font-semibold">Research Focus:</div>
                  <div className="text-sm text-slate-700 leading-relaxed">{student.research}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Diversity Highlight */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 rounded-3xl p-10 lg:p-16 text-white shadow-2xl">
          <div className="flex items-center gap-4 mb-8">
            <Sparkles className="w-12 h-12 text-yellow-400" />
            <div>
              <h3 className="text-3xl lg:text-4xl mb-2">Diversity in Action</h3>
              <p className="text-blue-200">Interdisciplinary research across multiple domains</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-4xl mb-3">🎓</div>
              <div className="text-xl font-semibold mb-2">Diverse Backgrounds</div>
              <div className="text-sm text-blue-200">
                From English Literature to Computer Science, Economics to Physics - our students bring varied perspectives
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-4xl mb-3">🔬</div>
              <div className="text-xl font-semibold mb-2">Research Excellence</div>
              <div className="text-sm text-blue-200">
                Cutting-edge work in AI ethics, digital heritage, computational linguistics, and social computing
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <div className="text-4xl mb-3">🌍</div>
              <div className="text-xl font-semibold mb-2">Real-World Impact</div>
              <div className="text-sm text-blue-200">
                Projects addressing India-specific challenges in heritage, language, governance, and digital inclusion
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
