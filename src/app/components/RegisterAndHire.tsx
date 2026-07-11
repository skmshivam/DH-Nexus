import { Mail, User, Briefcase, Code, Globe, Linkedin, Github, Upload, CheckCircle, Award, TrendingUp, Star, ArrowRight, Building2, GraduationCap, Target } from 'lucide-react';

export function RegisterAndHire() {
  return (
    <section id="register" className="py-20 bg-gradient-to-b from-white via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full mb-6">
            <Star className="w-5 h-5" />
            <span className="text-sm">Get Started Today</span>
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6 text-slate-900">
            Register. Get Hired. <br />
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Build Your DH Career
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto">
            Join India's first DH talent network. Open to students from ALL backgrounds—humanities, tech, management, or any field. Learn DH skills, showcase your work, connect with top companies, and land your dream job.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Student Registration */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-10 text-white shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <GraduationCap className="w-8 h-8 text-cyan-300" />
              </div>
              <div>
                <h3 className="text-3xl">For Students</h3>
                <p className="text-blue-100">Register & Get Discovered</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-6">
              <h4 className="text-xl mb-6">What You Get:</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <strong className="text-cyan-300">Profile Page</strong>
                    <p className="text-sm text-blue-100 mt-1">Your own portfolio page with projects, skills, and contact info</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <strong className="text-cyan-300">Recruiter Visibility</strong>
                    <p className="text-sm text-blue-100 mt-1">Get discovered by 30+ partner companies actively hiring</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <strong className="text-cyan-300">Job Opportunities</strong>
                    <p className="text-sm text-blue-100 mt-1">Early access to exclusive DH job postings and internships</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <strong className="text-cyan-300">Community Access</strong>
                    <p className="text-sm text-blue-100 mt-1">Connect with 150+ DH students and professionals</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <strong className="text-cyan-300">Verification Badge</strong>
                    <p className="text-sm text-blue-100 mt-1">Get verified by IIT Jodhpur DH students for credibility</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl mb-4">Registration Form:</h4>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <p className="text-sm text-blue-100 mb-4">📝 Fill out our Google Form to register:</p>
                <ul className="space-y-2 text-sm text-blue-100 mb-6">
                  <li>• Personal Information (Name, Email, Phone)</li>
                  <li>• Educational Background & Skills</li>
                  <li>• DH Tools Expertise (Python, R, NLP, etc.)</li>
                  <li>• Project Portfolio & GitHub</li>
                  <li>• LinkedIn & Social Profiles</li>
                  <li>• Job Preferences & Availability</li>
                </ul>
                
                <a 
                  href="https://forms.gle/BRnw51wzHxXp9jVS6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 hover:from-cyan-300 hover:to-blue-400 text-white px-8 py-4 rounded-xl transition-all shadow-lg inline-flex items-center justify-center gap-2 text-lg transform hover:scale-105"
                >
                  <Upload className="w-5 h-5" />
                  <span className="font-semibold">Register Now (FREE)</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <div className="bg-yellow-500/20 border border-yellow-300/30 rounded-xl p-4">
                <p className="text-sm text-yellow-100">
                  💡 <strong>Pro Tip:</strong> Students with complete profiles and project portfolios get 3x more recruiter views!
                </p>
              </div>
            </div>
          </div>

          {/* Company/Recruiter Registration */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-10 text-white shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                <Building2 className="w-8 h-8 text-yellow-300" />
              </div>
              <div>
                <h3 className="text-3xl">For Companies</h3>
                <p className="text-blue-100">Hire DH Talent</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 mb-6">
              <h4 className="text-xl mb-6">What You Get:</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <strong className="text-yellow-300">Access to 150+ Profiles</strong>
                    <p className="text-sm text-blue-100 mt-1">Browse verified DH student and graduate profiles</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <strong className="text-yellow-300">Advanced Search</strong>
                    <p className="text-sm text-blue-100 mt-1">Filter by skills, projects, experience, and availability</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <strong className="text-yellow-300">Direct Contact</strong>
                    <p className="text-sm text-blue-100 mt-1">Reach out to candidates directly via email/LinkedIn</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <strong className="text-yellow-300">Job Postings</strong>
                    <p className="text-sm text-blue-100 mt-1">Post opportunities visible to entire DH network</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 bg-blue-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <strong className="text-yellow-300">Collaboration Opportunities</strong>
                    <p className="text-sm text-blue-100 mt-1">Partner for events, workshops, guest lectures, research</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl mb-4">Get Started:</h4>
              
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                <p className="text-sm text-blue-100 mb-4">🏢 Register your company to access talent:</p>
                <ul className="space-y-2 text-sm text-blue-100 mb-6">
                  <li>• Company Information & Website</li>
                  <li>• Hiring Manager Contact Details</li>
                  <li>• Roles You're Hiring For</li>
                  <li>• Collaboration Interests (Events, Research, etc.)</li>
                </ul>
                <a 
                  href="https://forms.gle/71BLiGAPnbvDaFfD6" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-300 hover:to-orange-300 text-slate-900 py-4 rounded-xl transition-all transform hover:scale-105 text-center inline-flex items-center justify-center gap-2 shadow-xl"
                >
                  <Target className="w-5 h-5" />
                  <span className="font-semibold">Register as Company</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <div className="bg-green-500/20 border border-green-300/30 rounded-xl p-4">
                <p className="text-sm text-green-100">
                  ✅ <strong>Already Registered?</strong> <a href="#hire-talent" className="underline hover:text-green-300">Browse our talent directory →</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Success Stories */}
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-3xl p-12 border-2 border-green-300">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-full mb-4">
              <Award className="w-5 h-5" />
              <span className="text-sm">Success Stories</span>
            </div>
            <h3 className="text-3xl lg:text-4xl text-slate-900 mb-4">Students Who Got Hired Through DH Nexus</h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Real stories from students who registered with us and landed amazing opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl">
                  P
                </div>
                <div>
                  <h4 className="text-lg text-slate-900">Priya Sharma</h4>
                  <p className="text-sm text-slate-600">IIT Jodhpur DH '24</p>
                </div>
              </div>
              <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm mb-3">
                Content Intelligence Analyst
              </div>
              <p className="text-slate-700 mb-4">
                "Registered on DH Nexus in January, got 3 interview calls in 2 weeks. Now working at a top social media company!"
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">📍 Bangalore</span>
                <span className="text-green-600 font-semibold">💰 ₹18 LPA</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-xl">
                  R
                </div>
                <div>
                  <h4 className="text-lg text-slate-900">Rahul Verma</h4>
                  <p className="text-sm text-slate-600">IIT Jodhpur DH '23</p>
                </div>
              </div>
              <div className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm mb-3">
                NLP Engineer
              </div>
              <p className="text-slate-700 mb-4">
                "Showcased my multilingual NLP project. Got hired by an AI startup within a month of registration!"
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">📍 Remote</span>
                <span className="text-green-600 font-semibold">💰 $50K USD</span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-xl">
                  A
                </div>
                <div>
                  <h4 className="text-lg text-slate-900">Ananya Das</h4>
                  <p className="text-sm text-slate-600">IIT Jodhpur DH '24</p>
                </div>
              </div>
              <div className="inline-block bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm mb-3">
                Digital Archivist
              </div>
              <p className="text-slate-700 mb-4">
                "Connected with a museum through DH Nexus. Now managing their entire digital preservation project!"
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-slate-600">📍 Delhi</span>
                <span className="text-green-600 font-semibold">💰 ₹12 LPA</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}