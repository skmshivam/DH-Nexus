import { useState } from 'react';
import { Briefcase, Users, Globe2, Shield, TrendingUp, Search, MapPin, Clock, DollarSign, CheckCircle, Star, Award, ArrowRight, Filter, Building2, Code, Database, Palette, Brain, BookOpen, BarChart, MessageSquare, Zap, Target, UserCheck, Handshake, FileText, Video, Calendar, ExternalLink } from 'lucide-react';

export function HiringMarketplace() {
  const [activeTab, setActiveTab] = useState<'hire' | 'get-hired'>('get-hired');

  const talentProfiles = [
    {
      name: "Priya Sharma",
      role: "NLP Engineer & Content Strategist",
      location: "Bangalore, India",
      remote: true,
      skills: ["Python", "NLP", "BERT", "Content Strategy", "Data Viz"],
      experience: "2 years",
      rate: "₹8-12 LPA",
      available: "Immediately",
      verified: true,
      image: "P",
      gradient: "from-blue-500 to-indigo-600",
      projects: 8,
      hired: "Available"
    },
    {
      name: "Rahul Kumar",
      role: "ML Engineer & Digital Archivist",
      location: "Remote (India)",
      remote: true,
      skills: ["Machine Learning", "Python", "MongoDB", "Digital Preservation"],
      experience: "1.5 years",
      rate: "$40-60K USD",
      available: "2 weeks notice",
      verified: true,
      image: "R",
      gradient: "from-purple-500 to-pink-600",
      projects: 12,
      hired: "Available"
    },
    {
      name: "Ananya Das",
      role: "UX Researcher & Data Analyst",
      location: "Delhi, India",
      remote: false,
      skills: ["UX Research", "R", "Tableau", "User Testing", "Ethnography"],
      experience: "3 years",
      rate: "₹10-15 LPA",
      available: "1 month",
      verified: true,
      image: "A",
      gradient: "from-green-500 to-emerald-600",
      projects: 15,
      hired: "Available"
    },
    {
      name: "Vikram Singh",
      role: "Cultural Data Scientist",
      location: "Mumbai, India",
      remote: true,
      skills: ["Data Science", "Social Media Analytics", "Python", "Neo4j"],
      experience: "2.5 years",
      rate: "₹12-18 LPA",
      available: "Immediately",
      verified: true,
      image: "V",
      gradient: "from-amber-500 to-orange-600",
      projects: 10,
      hired: "In Demand"
    },
    {
      name: "Meera Patel",
      role: "Digital Content Strategist",
      location: "Pune, India",
      remote: true,
      skills: ["Content Strategy", "SEO", "JavaScript", "CMS", "Analytics"],
      experience: "2 years",
      rate: "₹7-10 LPA",
      available: "Immediately",
      verified: true,
      image: "M",
      gradient: "from-cyan-500 to-blue-600",
      projects: 9,
      hired: "Available"
    },
    {
      name: "Arjun Reddy",
      role: "AI Ethics Consultant",
      location: "Hyderabad, India",
      remote: true,
      skills: ["AI Ethics", "Policy Research", "Python", "Qualitative Analysis"],
      experience: "3 years",
      rate: "$50-70K USD",
      available: "2 weeks",
      verified: true,
      image: "AR",
      gradient: "from-rose-500 to-red-600",
      projects: 11,
      hired: "In Demand"
    }
  ];

  const jobOpenings = [
    {
      company: "TechCorp India",
      role: "Content Intelligence Analyst",
      type: "Full-time",
      location: "Bangalore / Remote",
      salary: "₹12-18 LPA",
      posted: "2 days ago",
      logo: "TC",
      gradient: "from-blue-500 to-indigo-600",
      applicants: 12
    },
    {
      company: "Cultural AI Labs",
      role: "NLP Research Engineer",
      type: "Full-time",
      location: "Remote (Global)",
      salary: "$60-80K USD",
      posted: "1 week ago",
      logo: "CA",
      gradient: "from-purple-500 to-pink-600",
      applicants: 8
    },
    {
      company: "Heritage Digital",
      role: "Digital Archivist",
      type: "Contract",
      location: "Delhi",
      salary: "₹8-12 LPA",
      posted: "3 days ago",
      logo: "HD",
      gradient: "from-green-500 to-emerald-600",
      applicants: 15
    },
    {
      company: "Media Analytics Co",
      role: "Social Data Scientist",
      type: "Full-time",
      location: "Mumbai / Remote",
      salary: "₹15-22 LPA",
      posted: "5 days ago",
      logo: "MA",
      gradient: "from-amber-500 to-orange-600",
      applicants: 10
    }
  ];

  return (
    <section id="hire-talent" className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-full mb-6 shadow-lg">
            <Handshake className="w-5 h-5" />
            <span className="text-sm">Global DH Hiring Marketplace</span>
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6 text-slate-900">
            Hire from Our Global <br />
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Digital Humanities Network
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto mb-8">
            A trusted talent network where students from ALL backgrounds (humanities, tech, management, any field) learn DH skills, get hired, and organizations find interdisciplinary professionals ready to solve human-centered digital challenges.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md border border-slate-200">
              <Shield className="w-5 h-5 text-green-600" />
              <span className="text-sm text-slate-700">Verified Profiles</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md border border-slate-200">
              <Globe2 className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-slate-700">Remote Friendly</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md border border-slate-200">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-slate-700">150+ Active Members</span>
            </div>
            <div className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-md border border-slate-200">
              <Award className="w-5 h-5 text-amber-600" />
              <span className="text-sm text-slate-700">IIT Verified</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 rounded-2xl p-2 inline-flex gap-2">
            <button
              onClick={() => setActiveTab('get-hired')}
              className={`px-8 py-3 rounded-xl transition-all ${
                activeTab === 'get-hired'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              aria-label="Switch to get hired tab"
              aria-pressed={activeTab === 'get-hired'}
            >
              <div className="flex items-center gap-2">
                <Users className="w-5 h-5" />
                <span>I Want to Get Hired</span>
              </div>
            </button>
            <button
              onClick={() => setActiveTab('hire')}
              className={`px-8 py-3 rounded-xl transition-all ${
                activeTab === 'hire'
                  ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
              aria-label="Switch to hire talent tab"
              aria-pressed={activeTab === 'hire'}
            >
              <div className="flex items-center gap-2">
                <Briefcase className="w-5 h-5" />
                <span>I Want to Hire Talent</span>
              </div>
            </button>
          </div>
        </div>

        {/* Get Hired Tab */}
        {activeTab === 'get-hired' && (
          <div className="space-y-12 animate-fadeIn">
            {/* How It Works */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-10 border border-indigo-200">
              <h3 className="text-3xl text-slate-900 mb-8 text-center">How to Get Hired Through Our Network</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white rounded-2xl p-6 shadow-md border border-indigo-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center text-white text-xl mb-4">1</div>
                  <h4 className="text-lg text-slate-900 mb-2">Register</h4>
                  <p className="text-sm text-slate-600">Create your professional profile with skills, tools, and experience</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-md border border-purple-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white text-xl mb-4">2</div>
                  <h4 className="text-lg text-slate-900 mb-2">Get Verified</h4>
                  <p className="text-sm text-slate-600">IIT Jodhpur DH students verify your profile for credibility</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-md border border-green-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white text-xl mb-4">3</div>
                  <h4 className="text-lg text-slate-900 mb-2">Get Discovered</h4>
                  <p className="text-sm text-slate-600">30+ partner companies browse profiles and reach out directly</p>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-md border border-amber-100">
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full flex items-center justify-center text-white text-xl mb-4">4</div>
                  <h4 className="text-lg text-slate-900 mb-2">Land Opportunities</h4>
                  <p className="text-sm text-slate-600">Full-time roles, internships, projects, or research collaborations</p>
                </div>
              </div>
            </div>

            {/* What You Get */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all">
                <UserCheck className="w-12 h-12 text-indigo-600 mb-4" />
                <h4 className="text-xl text-slate-900 mb-3">Your Portfolio Page</h4>
                <p className="text-slate-600 mb-4">Professional profile showcasing projects, skills, experience, and contact info—visible to global employers</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Customizable profile URL</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Project showcase with images</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Skills & tools tagging</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:border-purple-300 hover:shadow-xl transition-all">
                <Target className="w-12 h-12 text-purple-600 mb-4" />
                <h4 className="text-xl text-slate-900 mb-3">Direct Opportunities</h4>
                <p className="text-slate-600 mb-4">Don't apply everywhere—opportunities come to you through our trusted network</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Early access to job postings</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Direct recruiter messages</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Exclusive collaboration invites</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate-200 hover:border-green-300 hover:shadow-xl transition-all">
                <Shield className="w-12 h-12 text-green-600 mb-4" />
                <h4 className="text-xl text-slate-900 mb-3">Verification Badge</h4>
                <p className="text-slate-600 mb-4">Get verified by IIT Jodhpur DH students for enhanced credibility and visibility</p>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Quality-checked profiles</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Skill validation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span>Trusted by employers</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Types of Opportunities */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-10 text-white">
              <h3 className="text-3xl mb-8 text-center">More Than Just Jobs—Full Spectrum of Opportunities</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
                  <Briefcase className="w-8 h-8 text-cyan-400 mb-3" />
                  <h4 className="text-lg mb-2">Full-Time Roles</h4>
                  <p className="text-sm text-blue-100">Permanent positions at tech companies, startups, and cultural institutions</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
                  <Clock className="w-8 h-8 text-purple-400 mb-3" />
                  <h4 className="text-lg mb-2">Internships</h4>
                  <p className="text-sm text-blue-100">Hands-on learning experiences with industry leaders</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
                  <FileText className="w-8 h-8 text-green-400 mb-3" />
                  <h4 className="text-lg mb-2">Project-Based Work</h4>
                  <p className="text-sm text-blue-100">Short-term contracts and freelance engagements</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
                  <BookOpen className="w-8 h-8 text-yellow-400 mb-3" />
                  <h4 className="text-lg mb-2">Research Collaborations</h4>
                  <p className="text-sm text-blue-100">Academic and industry research partnerships</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
                  <MessageSquare className="w-8 h-8 text-pink-400 mb-3" />
                  <h4 className="text-lg mb-2">Consulting</h4>
                  <p className="text-sm text-blue-100">Advisory roles for AI ethics, content strategy, UX research</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-all">
                  <Calendar className="w-8 h-8 text-amber-400 mb-3" />
                  <h4 className="text-lg mb-2">Event Collaborations</h4>
                  <p className="text-sm text-blue-100">Workshops, conferences, and speaking opportunities</p>
                </div>
              </div>
            </div>

            {/* Recent Job Postings */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-3xl text-slate-900">Latest Opportunities from Our Network</h3>
                <a href="#all-jobs" className="text-indigo-600 hover:text-indigo-700 inline-flex items-center gap-2">
                  View All <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                {jobOpenings.map((job, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 shadow-md border border-slate-200 hover:border-indigo-300 hover:shadow-lg transition-all">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 bg-gradient-to-br ${job.gradient} rounded-xl flex items-center justify-center text-white`}>
                          {job.logo}
                        </div>
                        <div>
                          <h4 className="text-lg text-slate-900">{job.role}</h4>
                          <p className="text-sm text-slate-600">{job.company}</p>
                        </div>
                      </div>
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs">
                        {job.type}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-slate-600">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Clock className="w-4 h-4" />
                        <span>Posted {job.posted}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Users className="w-4 h-4" />
                        <span>{job.applicants} applicants</span>
                      </div>
                    </div>
                    <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl transition-all">
                      View Details & Apply
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-center text-white">
              <h3 className="text-3xl lg:text-4xl mb-4">Ready to Get Hired?</h3>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join 150+ DH professionals in our global talent network. Create your profile today and let opportunities come to you.
              </p>
              <a
                href="https://forms.gle/BRnw51wzHxXp9jVS6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 hover:bg-blue-50 px-10 py-4 rounded-xl transition-all transform hover:scale-105 shadow-xl text-lg"
              >
                <UserCheck className="w-5 h-5" />
                Create Your Profile (FREE)
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        )}

        {/* Hire Talent Tab */}
        {activeTab === 'hire' && (
          <div className="space-y-12 animate-fadeIn">
            {/* Why Hire From Us */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10 border border-purple-200">
              <h3 className="text-3xl text-slate-900 mb-8 text-center">Why Hire DH Talent from Our Network</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white rounded-xl p-6 shadow-md border border-purple-100">
                  <Shield className="w-10 h-10 text-purple-600 mb-3" />
                  <h4 className="text-lg text-slate-900 mb-2">Pre-Vetted</h4>
                  <p className="text-sm text-slate-600">All profiles verified by IIT Jodhpur DH students for quality assurance</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-indigo-100">
                  <Brain className="w-10 h-10 text-indigo-600 mb-3" />
                  <h4 className="text-lg text-slate-900 mb-2">Interdisciplinary</h4>
                  <p className="text-sm text-slate-600">Technical skills + human-centered thinking in one package</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-green-100">
                  <Globe2 className="w-10 h-10 text-green-600 mb-3" />
                  <h4 className="text-lg text-slate-900 mb-2">Global Reach</h4>
                  <p className="text-sm text-slate-600">Remote-friendly talent pool across India and worldwide</p>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-md border border-cyan-100">
                  <Award className="w-10 h-10 text-cyan-600 mb-3" />
                  <h4 className="text-lg text-slate-900 mb-2">Ethical & Aware</h4>
                  <p className="text-sm text-slate-600">Culturally aware professionals trained in ethical tech practices</p>
                </div>
              </div>
            </div>

            {/* How Hiring Works */}
            <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-10 text-white">
              <h3 className="text-3xl mb-8 text-center">How to Hire from Our Network</h3>
              <div className="grid md:grid-cols-4 gap-6">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white text-xl mb-4">1</div>
                  <h4 className="text-lg mb-2">Register as Employer</h4>
                  <p className="text-sm text-blue-100">Share your organization details and hiring needs</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white text-xl mb-4">2</div>
                  <h4 className="text-lg mb-2">Browse Talent Pool</h4>
                  <p className="text-sm text-blue-100">Access 150+ verified profiles with advanced filters</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white text-xl mb-4">3</div>
                  <h4 className="text-lg mb-2">Connect Directly</h4>
                  <p className="text-sm text-blue-100">Reach out to candidates via email/LinkedIn</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                  <div className="w-12 h-12 bg-amber-500 rounded-full flex items-center justify-center text-white text-xl mb-4">4</div>
                  <h4 className="text-lg mb-2">Hire & Collaborate</h4>
                  <p className="text-sm text-blue-100">Full-time, part-time, project-based, or research roles</p>
                </div>
              </div>
            </div>

            {/* Browse Talent Preview */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h3 className="text-3xl text-slate-900 mb-2">Browse Available Talent</h3>
                  <p className="text-slate-600">150+ verified DH professionals ready to join your team</p>
                </div>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl inline-flex items-center gap-2 transition-all">
                  <Filter className="w-5 h-5" />
                  Advanced Filters
                </button>
              </div>

              {/* Talent Cards */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {talentProfiles.map((profile, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200 hover:border-indigo-300 hover:shadow-xl transition-all group">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`w-14 h-14 bg-gradient-to-br ${profile.gradient} rounded-xl flex items-center justify-center text-white text-xl`}>
                          {profile.image}
                        </div>
                        <div>
                          <h4 className="text-lg text-slate-900">{profile.name}</h4>
                          <p className="text-sm text-slate-600">{profile.role}</p>
                        </div>
                      </div>
                      {profile.verified && (
                        <div className="bg-blue-100 p-1 rounded-full" title="Verified by IIT Jodhpur">
                          <Shield className="w-4 h-4 text-blue-600" />
                        </div>
                      )}
                    </div>

                    <div className="space-y-3 mb-4 text-sm">
                      <div className="flex items-center gap-2 text-slate-600">
                        <MapPin className="w-4 h-4" />
                        <span>{profile.location}</span>
                        {profile.remote && (
                          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs">Remote OK</span>
                        )}
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Briefcase className="w-4 h-4" />
                        <span>{profile.experience} experience</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <DollarSign className="w-4 h-4" />
                        <span>{profile.rate}</span>
                      </div>
                      <div className="flex items-center gap-2 text-slate-600">
                        <Clock className="w-4 h-4" />
                        <span>Available: {profile.available}</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {profile.skills.slice(0, 4).map((skill, sidx) => (
                        <span key={sidx} className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">
                          {skill}
                        </span>
                      ))}
                      {profile.skills.length > 4 && (
                        <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">
                          +{profile.skills.length - 4}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between mb-4 text-sm text-slate-600">
                      <span className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" />
                        {profile.projects} Projects
                      </span>
                      <span className={`${profile.hired === 'In Demand' ? 'text-amber-600' : 'text-green-600'}`}>
                        {profile.hired}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2">
                      <button className="bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition-all text-sm">
                        View Profile
                      </button>
                      <button className="bg-slate-100 hover:bg-slate-200 text-slate-900 py-2 rounded-lg transition-all text-sm">
                        Contact
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-center">
                <button className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-10 py-4 rounded-xl inline-flex items-center gap-2 transition-all transform hover:scale-105 shadow-xl">
                  <Search className="w-5 h-5" />
                  View All 150+ Profiles
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* What You Can Hire For */}
            <div className="bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-10 border border-cyan-200">
              <h3 className="text-3xl text-slate-900 mb-8 text-center">Roles You Can Hire DH Talent For</h3>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                {[
                  { icon: Code, role: "NLP Engineer", color: "blue" },
                  { icon: Database, role: "Data Scientist", color: "purple" },
                  { icon: Palette, role: "UX Researcher", color: "pink" },
                  { icon: BookOpen, role: "Digital Archivist", color: "green" },
                  { icon: BarChart, role: "Content Analyst", color: "amber" },
                  { icon: Brain, role: "AI Ethics Consultant", color: "indigo" },
                  { icon: MessageSquare, role: "Content Strategist", color: "cyan" },
                  { icon: Target, role: "Research Associate", color: "rose" }
                ].map((item, idx) => (
                  <div key={idx} className={`bg-white rounded-xl p-4 shadow-md border border-${item.color}-100 hover:border-${item.color}-300 hover:shadow-lg transition-all`}>
                    <item.icon className={`w-8 h-8 text-${item.color}-600 mb-2`} />
                    <div className="text-sm text-slate-900">{item.role}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA for Employers */}
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-center text-white">
              <Building2 className="w-16 h-16 mx-auto mb-6" />
              <h3 className="text-3xl lg:text-4xl mb-4">Ready to Hire DH Talent?</h3>
              <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
                Register as an employer to access our curated network of 150+ interdisciplinary professionals ready to solve human-centered digital challenges.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://forms.gle/71BLiGAPnbvDaFfD6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-purple-600 hover:bg-purple-50 px-10 py-4 rounded-xl transition-all transform hover:scale-105 shadow-xl text-lg"
                >
                  <Building2 className="w-5 h-5" />
                  Register as Employer
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white hover:bg-white/30 px-10 py-4 rounded-xl transition-all text-lg"
                >
                  <MessageSquare className="w-5 h-5" />
                  Talk to Us
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Trust & Transparency Section */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-10 border border-slate-200">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Shield className="w-8 h-8 text-green-600" />
              <h3 className="text-2xl text-slate-900">Trust & Quality Assurance</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 text-sm text-slate-700">
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">How We Maintain Quality</h4>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>All profiles verified by IIT Jodhpur DH students</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Skill-based tagging with portfolio validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Community-driven reputation system</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Regular profile updates and activity monitoring</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-slate-900 mb-2">Transparency Statement</h4>
                <p className="text-slate-600 mb-3">
                  DH Nexus facilitates connections and opportunities between talent and organizations. We verify profiles for quality but do not control hiring decisions.
                </p>
                <p className="text-slate-600">
                  All employment terms, compensation, and working arrangements are negotiated directly between candidates and employers.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}