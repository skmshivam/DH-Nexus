import { GraduationCap, Award, Users, Zap, BookOpen, Code, Briefcase, Brain, ExternalLink, Instagram, FileText, UserCheck, Newspaper } from 'lucide-react';

const highlights = [
  {
    stat: '30',
    label: 'Students',
    description: 'MSc & PhD scholars from diverse backgrounds',
    icon: Users
  },
  {
    stat: '7',
    label: 'Expert Faculty',
    description: 'From Computer Science, AI, Sociology, Cinema, HCI',
    icon: GraduationCap
  },
  {
    stat: 'Every Area',
    label: 'Project Ready',
    description: 'Open to projects across all DH domains',
    icon: Zap
  },
  {
    stat: '10+',
    label: 'Active Projects',
    description: 'Diverse research spanning multiple domains',
    icon: Award
  }
];

const coreCourses = [
  { name: 'Programming Techniques', icon: Code, color: 'from-blue-500 to-indigo-600' },
  { name: 'Data Structures and Algorithms', icon: Brain, color: 'from-purple-500 to-pink-600' },
  { name: 'Machine Learning', icon: Brain, color: 'from-green-500 to-emerald-600' },
  { name: 'Databases and Digital Archiving', icon: BookOpen, color: 'from-amber-500 to-orange-600' },
  { name: 'Digital Marketing Analytics', icon: Briefcase, color: 'from-cyan-500 to-blue-600' },
  { name: 'Digital Product Management', icon: Briefcase, color: 'from-rose-500 to-red-600' },
  { name: 'Digital Economics', icon: Briefcase, color: 'from-indigo-500 to-purple-600' },
  { name: 'Strategic Decision Making', icon: Zap, color: 'from-teal-500 to-cyan-600' },
  { name: 'AI in Business', icon: Brain, color: 'from-violet-500 to-purple-600' },
  { name: 'Interaction and Experience Design in AR and VR', icon: Code, color: 'from-pink-500 to-rose-600' }
];

const skillClusters = [
  { category: 'Technical & Data Science', skills: ['Python', 'R', 'ML/AI', 'SQL', 'Tableau', 'NLP'] },
  { category: 'Design & Media', skills: ['Adobe Suite', 'AR/VR', 'Unity', 'Digital Storytelling'] },
  { category: 'Business & Policy', skills: ['Digital Economics', 'Strategy', 'Policy Analysis'] },
  { category: 'Humanities Methods', skills: ['Research', 'Cultural Analysis', 'Archiving'] },
  { category: 'Soft Skills', skills: ['Project Management', 'Critical Thinking', 'Innovation'] }
];

export function DHatIITJ() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-block bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-4">
            IIT Jodhpur
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">
            M.Sc. Digital Humanities
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Redefining talent for the digital economy through interdisciplinary excellence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200 text-center">
                <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>
                <div className="text-4xl text-indigo-900 mb-2">{item.stat}</div>
                <div className="text-lg text-slate-900 mb-1">{item.label}</div>
                <div className="text-sm text-slate-600">{item.description}</div>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-2xl p-12 text-white mb-16">
          <h3 className="text-3xl mb-6">Positioning in the DH Landscape</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl text-indigo-200 mb-4">Why IIT Jodhpur DH Matters</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">•</span>
                  <span className="text-indigo-100">First dedicated DH program in an IIT, combining technical rigor with humanistic depth</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">•</span>
                  <span className="text-indigo-100">Strategic focus on India-specific challenges: heritage preservation, multilingual computing, digital governance</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-400 mt-1">•</span>
                  <span className="text-indigo-100">Direct pipeline to industry through capstone projects and government research collaborations</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-xl text-purple-200 mb-4">Core Philosophy</h4>
              <p className="text-purple-100">
                Not an emulation of natural sciences, but discovering meaning in applying information technology to preserve, reconstruct, transmit, and interpret the human record historically and contemporaneously.
              </p>
            </div>
          </div>
        </div>

        {/* Core Courses Section */}
        <div className="mb-16">
          <h3 className="text-3xl mb-8 text-slate-900 text-center">Core Courses at IIT Jodhpur</h3>
          <p className="text-center text-slate-600 mb-8 max-w-3xl mx-auto">
            Comprehensive curriculum blending technology, business, and human-centered design
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {coreCourses.map((course, index) => {
              const Icon = course.icon;
              return (
                <div key={index} className="group bg-white rounded-xl p-5 shadow-md border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 bg-gradient-to-br ${course.color} rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm text-slate-900">{course.name}</div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <h3 className="text-3xl mb-8 text-slate-900 text-center">Skill Map: The DH Hybrid Profile</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {skillClusters.map((cluster, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                <h4 className="text-lg text-indigo-900 mb-4">{cluster.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {cluster.skills.map((skill, sIndex) => (
                    <span 
                      key={sIndex}
                      className="bg-indigo-100 text-indigo-700 text-sm px-3 py-1 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Official Links Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-700 px-6 py-3 rounded-full mb-4 border border-indigo-200">
              <ExternalLink className="w-5 h-5" />
              <span className="text-sm font-semibold">Official Resources</span>
            </div>
            <h3 className="text-3xl lg:text-4xl mb-4 text-slate-900">
              Quick Links to IIT Jodhpur DH
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Access official program information, admissions, news, and connect with the community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Main DH Website */}
            <a
              href="https://iitj.ac.in/dh/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <GraduationCap className="w-6 h-6 text-white" />
                </div>
                <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-semibold mb-2">DH Homepage</h4>
              <p className="text-indigo-100 text-sm">Official Digital Humanities program website with comprehensive information</p>
            </a>

            {/* M.Sc. Program Page */}
            <a
              href="https://www.iitj.ac.in/dh/en/msc-digital-humanities"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border-2 border-indigo-300 hover:border-indigo-500 rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-indigo-600" />
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-indigo-600 transition-colors" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-slate-900">M.Sc. Program Details</h4>
              <p className="text-slate-600 text-sm">Complete information about the Master's program, curriculum, and structure</p>
            </a>

            {/* Academics Office */}
            <a
              href="https://iitj.ac.in/office-of-academics/en/M.Sc.-(Digital-humanities)"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border-2 border-purple-300 hover:border-purple-500 rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-purple-600" />
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-purple-600 transition-colors" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-slate-900">Academic Office</h4>
              <p className="text-slate-600 text-sm">Official academic regulations, guidelines, and course information</p>
            </a>

            {/* Faculty & People */}
            <a
              href="https://iitj.ac.in/People?dept=dh"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border-2 border-cyan-300 hover:border-cyan-500 rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-cyan-600" />
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-cyan-600 transition-colors" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-slate-900">Faculty & People</h4>
              <p className="text-slate-600 text-sm">Meet the faculty members and researchers in the DH department</p>
            </a>

            {/* Latest News */}
            <a
              href="https://www.iitj.ac.in/dh/en/latest-news"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white border-2 border-amber-300 hover:border-amber-500 rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center">
                  <Newspaper className="w-6 h-6 text-amber-600" />
                </div>
                <ExternalLink className="w-5 h-5 text-slate-400 group-hover:text-amber-600 transition-colors" />
              </div>
              <h4 className="text-xl font-semibold mb-2 text-slate-900">Latest News</h4>
              <p className="text-slate-600 text-sm">Stay updated with announcements, events, and program updates</p>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/iitj_dh/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl p-6 text-white shadow-lg hover:shadow-2xl hover:scale-105 transition-all"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <ExternalLink className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
              </div>
              <h4 className="text-xl font-semibold mb-2">Follow on Instagram</h4>
              <p className="text-pink-100 text-sm">Connect with the DH community and see student life @iitj_dh</p>
            </a>
          </div>

          {/* Admissions Section */}
          <div className="mt-12 bg-gradient-to-br from-slate-50 to-blue-50 rounded-2xl p-8 border-2 border-blue-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center">
                <UserCheck className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="text-2xl text-slate-900">Admissions Information</h4>
                <p className="text-slate-600">Find detailed admission guidelines and announcements</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-4">
              <a
                href="https://old.iitj.ac.in/academics/misc.php?id=advertisements&course_type=M.Sc._Digital_Humanities_AY_2025-26,_Semester-I"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-blue-300 hover:border-blue-500 rounded-xl p-5 transition-all hover:shadow-lg flex items-start gap-4"
              >
                <FileText className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h5 className="text-slate-900 font-semibold mb-1 group-hover:text-blue-600 transition-colors">Current Advertisements</h5>
                  <p className="text-sm text-slate-600">AY 2025-26 admission notifications and announcements</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
              </a>

              <a
                href="https://www.iitj.ac.in/admission-postgraduate-programs/en/Admission-to-M.Sc.-Program-in-Digital-Humanities-(Sports-Quota),-AY-2025-26?ep=fw"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-white border border-blue-300 hover:border-blue-500 rounded-xl p-5 transition-all hover:shadow-lg flex items-start gap-4"
              >
                <Award className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <div className="flex-1">
                  <h5 className="text-slate-900 font-semibold mb-1 group-hover:text-blue-600 transition-colors">Sports Quota Admissions</h5>
                  <p className="text-sm text-slate-600">Special admission guidelines for sports quota candidates</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-colors flex-shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}