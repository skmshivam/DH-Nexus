import { User, Linkedin, Mail, Github, Instagram, Code, Database, Archive, PenTool, ClipboardList, FlaskConical, Briefcase, TrendingUp, Award, Users, Rocket, ExternalLink, CheckCircle2, Sparkles, Target, Calendar, Presentation, GraduationCap, Building2, Megaphone, Video, BookOpen, Lightbulb, Globe } from 'lucide-react';
import shivamImage from 'figma:asset/560f6b6a11e3e715b5e3cf15fa0fa15b09413e41.png';
import amanImage from 'figma:asset/290eac393af3502126b2889787cd3cc0e28c4032.png';
import anshikaImage from 'figma:asset/52d97cd76544faa139a5e80d358f932b1c47d00f.png';
import dhNexusLogo from 'figma:asset/951d00fc723ae8912305f3fb955112353119ba55.png';

const teamMembers = [
  {
    name: 'Shivam Kumar',
    role: 'Platform Head',
    background: 'M.Sc. Digital Humanities, IIT Jodhpur',
    bio: 'Leading DH Nexus to connect aspirants with authentic insights and opportunities in Digital Humanities. Passionate about making DH accessible to everyone.',
    expertise: ['Digital Research', 'Web Development', 'Data Analysis', 'Content Strategy'],
    projects: ['DH Nexus Platform', 'Cultural Data Analytics', 'NLP Applications'],
    color: 'indigo',
    linkedin: 'https://www.linkedin.com/in/shivam-kumar-skm14',
    instagram: 'https://www.instagram.com/skmshivam14?igsh=MWFiZ285NWpsbTlvcA==',
    email: 'm24id1009@iitj.ac.in',
    portfolio: 'https://digitalhumanities.world',
    website: 'https://digitalhumanities.world',
    image: shivamImage
  },
  {
    name: 'Anshika Kashyap',
    role: 'Content & Research Head',
    background: 'M.Sc. Digital Humanities, IIT Jodhpur | LSR',
    bio: 'PG Placement Representative at IIT Jodhpur, building effective campus-industry partnerships. Leading content strategy and research initiatives for DH Nexus. Experienced in business analytics, product management, people analytics, and digital marketing. Policy Intern at Lok Sabha under a Member of Parliament. Co-led QuCode (quantum computing education) and key contributor to Agen AI.',
    expertise: ['Business Analytics', 'Product Management', 'People Analytics', 'Digital Marketing', 'Public Policy', 'Content Strategy', 'Research Design'],
    projects: ['Agen AI (SaaS)', 'QuCode Initiative', 'Campus-Industry Partnerships', 'Policy Research', 'DH Content Development'],
    color: 'purple',
    linkedin: 'https://www.linkedin.com/in/anshika-kashyap',
    location: 'Jodhpur, Rajasthan, India',
    image: anshikaImage
  },
  {
    name: 'Aman Badayuni',
    role: 'Social & Tech Head',
    background: 'M.Sc. Digital Humanities Scholar, IIT Jodhpur | B.Sc. Physics, Deen Dayal Upadhyaya College, Delhi University',
    bio: 'Leading social media strategy and technical development for DH Nexus. DH Scholar combining physics background with digital humanities expertise. Former Vice President of Eco Club at DU and General Secretary of ASF. JEECUP AIR 187 (2020). Passionate about education accessibility, community engagement, and building technical solutions that connect people.',
    expertise: ['Digital Scholarship', 'Physics & Computational Methods', 'Social Media Strategy', 'Technical Development', 'Community Leadership', 'Educational Equity'],
    projects: ['DH Research Projects', 'Social Media Campaigns', 'Environmental Initiatives', 'Student Leadership Programs', 'Educational Access Advocacy'],
    color: 'blue',
    linkedin: 'https://www.linkedin.com/in/aman-badayuni',
    pronouns: 'He/Him',
    image: amanImage
  }
];

const talentAreas = [
  {
    icon: Code,
    title: 'Software Engineers',
    description: 'Full-stack developers who understand both code and content. Build systems that process human data intelligently.',
    skills: ['Python', 'JavaScript/React', 'APIs', 'Databases', 'Web Development'],
    roles: 'Frontend Engineer, Backend Developer, Full-Stack Developer',
    color: 'indigo'
  },
  {
    icon: Database,
    title: 'Data Scientists',
    description: 'Specialists in NLP, machine learning, and social data analytics. Turn unstructured human data into business insights.',
    skills: ['Machine Learning', 'NLP', 'Statistical Analysis', 'Data Visualization', 'Big Data'],
    roles: 'Data Scientist, ML Engineer, Research Analyst',
    color: 'purple'
  },
  {
    icon: Archive,
    title: 'Digital Archivists',
    description: 'Experts in knowledge management, information organization, and digital preservation systems.',
    skills: ['Metadata Standards', 'Digital Curation', 'Information Architecture', 'Content Management'],
    roles: 'Digital Archivist, Knowledge Manager, Information Specialist',
    color: 'blue'
  },
  {
    icon: PenTool,
    title: 'Content Strategists',
    description: 'Create data-driven content strategies. Understand audience behavior, SEO, and content optimization through analytics.',
    skills: ['Content Strategy', 'SEO/SEM', 'Analytics', 'Copywriting', 'UX Writing'],
    roles: 'Content Strategist, UX Writer, Content Analyst',
    color: 'pink'
  },
  {
    icon: ClipboardList,
    title: 'Product Managers',
    description: 'Bridge technical and non-technical teams. Translate user needs into product requirements with cultural intelligence.',
    skills: ['Product Strategy', 'User Research', 'Agile/Scrum', 'Stakeholder Management', 'Analytics'],
    roles: 'Product Manager, Program Manager, Business Analyst',
    color: 'green'
  },
  {
    icon: FlaskConical,
    title: 'UX Researchers',
    description: 'Conduct mixed-method research combining qualitative insights with quantitative metrics. Design human-centered products.',
    skills: ['User Research', 'Usability Testing', 'Qualitative Analysis', 'Survey Design', 'Data Interpretation'],
    roles: 'UX Researcher, User Research Lead, Design Researcher',
    color: 'amber'
  }
];

const hiringBenefits = [
  {
    icon: Sparkles,
    title: 'Hybrid Skill Sets',
    description: 'Technical expertise combined with cultural intelligence and communication skills. They code AND understand users.'
  },
  {
    icon: Target,
    title: 'Problem Solvers',
    description: 'Trained to approach complex problems from multiple angles. Think critically and creatively.'
  },
  {
    icon: Users,
    title: 'Cross-Functional Ready',
    description: 'Work seamlessly across teams. Translate between technical and non-technical stakeholders.'
  },
  {
    icon: Rocket,
    title: 'Fast Learners',
    description: 'Adapt quickly to new tools and technologies. Comfortable with ambiguity and constant learning.'
  },
  {
    icon: Award,
    title: 'IIT Jodhpur Pedigree',
    description: 'Rigorous academic training from a premier institution. Strong analytical and research capabilities.'
  },
  {
    icon: Briefcase,
    title: 'Industry-Ready Projects',
    description: 'Real-world capstone projects. Portfolio of practical work beyond theoretical knowledge.'
  }
];

export function TeamProfiles() {
  return (
    <section id="team" className="py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Core Team Members Grid - ENHANCED BEAUTY */}
        <div className="mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {teamMembers.map((member, index) => {
              const colorClasses = {
                indigo: {
                  bg: 'bg-indigo-100',
                  text: 'text-indigo-600',
                  border: 'border-indigo-200',
                  gradient: 'from-indigo-50 via-indigo-100 to-indigo-50',
                  shadow: 'shadow-indigo-200/50'
                },
                purple: {
                  bg: 'bg-purple-100',
                  text: 'text-purple-600',
                  border: 'border-purple-200',
                  gradient: 'from-purple-50 via-purple-100 to-purple-50',
                  shadow: 'shadow-purple-200/50'
                },
                blue: {
                  bg: 'bg-blue-100',
                  text: 'text-blue-600',
                  border: 'border-blue-200',
                  gradient: 'from-blue-50 via-blue-100 to-blue-50',
                  shadow: 'shadow-blue-200/50'
                },
                pink: {
                  bg: 'bg-pink-100',
                  text: 'text-pink-600',
                  border: 'border-pink-200',
                  gradient: 'from-pink-50 via-pink-100 to-pink-50',
                  shadow: 'shadow-pink-200/50'
                },
                green: {
                  bg: 'bg-green-100',
                  text: 'text-green-600',
                  border: 'border-green-200',
                  gradient: 'from-green-50 via-green-100 to-green-50',
                  shadow: 'shadow-green-200/50'
                },
                amber: {
                  bg: 'bg-amber-100',
                  text: 'text-amber-600',
                  border: 'border-amber-200',
                  gradient: 'from-amber-50 via-amber-100 to-amber-50',
                  shadow: 'shadow-amber-200/50'
                }
              };

              const colors = colorClasses[member.color as keyof typeof colorClasses];

              return (
                <div
                  key={index}
                  className={`group bg-white rounded-3xl shadow-xl ${colors.shadow} border-2 border-slate-100 hover:shadow-2xl hover:border-indigo-200 hover:-translate-y-2 transition-all duration-500 overflow-hidden`}
                >
                  {/* Header with enhanced gradient */}
                  <div className={`bg-gradient-to-br ${colors.gradient} p-8 border-b-2 ${colors.border} relative overflow-hidden`}>
                    {/* Decorative circle pattern */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/20 rounded-full blur-xl"></div>
                    
                    <div className="relative flex items-center justify-center mb-6">
                      {member.image ? (
                        <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-white shadow-2xl ring-4 ring-white/50 group-hover:scale-105 transition-transform duration-500">
                          <img 
                            src={member.image} 
                            alt={member.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ) : (
                        <div className={`w-48 h-48 ${colors.bg} rounded-full flex items-center justify-center border-4 border-white shadow-2xl ring-4 ring-white/50`}>
                          <User className={`w-24 h-24 ${colors.text}`} />
                        </div>
                      )}
                    </div>
                    <h3 className="text-3xl text-center text-slate-900 mb-2 font-bold">
                      {member.name}
                    </h3>
                    <div className={`text-center ${colors.text} mb-2 font-semibold text-lg`}>
                      {member.role}
                    </div>
                    <div className="text-sm text-center text-slate-600 font-medium">
                      {member.background}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-slate-600 mb-6 leading-relaxed">
                      {member.bio}
                    </p>

                    {/* Expertise Tags */}
                    <div className="mb-6">
                      <div className="text-sm text-slate-500 mb-3">Expertise:</div>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, idx) => (
                          <span
                            key={idx}
                            className={`px-3 py-1 ${colors.bg} ${colors.text} rounded-full text-sm`}
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    <div className="mb-6 pb-6 border-b border-slate-200">
                      <div className="text-sm text-slate-500 mb-2">Recent Projects:</div>
                      <ul className="text-sm text-slate-700 space-y-1">
                        {member.projects.map((project, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className={`${colors.text} mt-1`}>•</span>
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Contact Icons */}
                    <div className="flex justify-center gap-3 flex-wrap">
                      {member.portfolio && (
                        <a
                          href={member.portfolio}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center hover:from-cyan-600 hover:to-blue-600 text-white transition-colors shadow-lg"
                          title="Portfolio"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                      {member.website && (
                        <a
                          href={member.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center hover:from-green-600 hover:to-emerald-600 text-white transition-colors shadow-lg"
                          title="Personal Website"
                        >
                          <Globe className="w-5 h-5" />
                        </a>
                      )}
                      {member.email ? (
                        <a
                          href={`mailto:${member.email}`}
                          className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-indigo-600 hover:text-white transition-colors"
                          title="Email"
                        >
                          <Mail className="w-5 h-5" />
                        </a>
                      ) : (
                        <button 
                          className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center opacity-50 cursor-not-allowed"
                          aria-label="Email not available"
                          disabled
                        >
                          <Mail className="w-5 h-5 text-slate-400" />
                        </button>
                      )}
                      {member.linkedin ? (
                        <a 
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors"
                          title="LinkedIn"
                        >
                          <Linkedin className="w-5 h-5" />
                        </a>
                      ) : (
                        <button 
                          className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center opacity-50 cursor-not-allowed"
                          aria-label="LinkedIn not available"
                          disabled
                        >
                          <Linkedin className="w-5 h-5 text-slate-400" />
                        </button>
                      )}
                      {member.instagram ? (
                        <a
                          href={member.instagram}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors"
                          title="Instagram"
                        >
                          <Instagram className="w-5 h-5" />
                        </a>
                      ) : (
                        <button 
                          className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center opacity-50 cursor-not-allowed"
                          aria-label="Instagram not available"
                          disabled
                        >
                          <Instagram className="w-5 h-5 text-slate-400" />
                        </button>
                      )}
                      {member.github ? (
                        <a
                          href={member.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center hover:bg-slate-800 hover:text-white transition-colors"
                          title="GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      ) : (
                        <button 
                          className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center opacity-50 cursor-not-allowed"
                          aria-label="GitHub not available"
                          disabled
                        >
                          <Github className="w-5 h-5 text-slate-400" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Team Mission - MOVED AFTER TEAM MEMBERS */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 text-white mb-16 shadow-2xl">
          <h3 className="text-3xl lg:text-4xl mb-4">Connecting Aspirants with Authentic DH Insights</h3>
          <p className="text-xl text-indigo-100 mb-4">
            We created DH Nexus to bridge the gap between curiosity and opportunity in Digital Humanities. As current DH students and professionals, we understand what it takes to succeed in this field—and we're here to help you navigate your journey with real experiences and honest insights.
          </p>
          <p className="text-lg text-indigo-100">
            This platform showcases DH programs across India and globally, connects talented students with companies, and builds a vibrant community where knowledge flows freely.
          </p>
        </div>

        {/* Our Work Section */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-12 text-white shadow-2xl">
            <div className="text-center mb-10">
              <h3 className="text-3xl lg:text-4xl mb-4">Our Work</h3>
              <p className="text-xl text-indigo-200 max-w-3xl mx-auto">
                Explore projects and research work by DH students demonstrating real-world applications of digital humanities methodologies
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <a href="/research" className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all group">
                <Code className="w-10 h-10 text-cyan-300 mb-4" />
                <h4 className="text-xl mb-2 text-white">Research Projects</h4>
                <p className="text-indigo-200 mb-4">View comprehensive DH research and innovation initiatives</p>
                <div className="flex items-center gap-2 text-cyan-300 group-hover:gap-3 transition-all">
                  <span>Explore Projects</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
              <a href="/talent-directory" className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all group">
                <Database className="w-10 h-10 text-purple-300 mb-4" />
                <h4 className="text-xl mb-2 text-white">Student Portfolio</h4>
                <p className="text-indigo-200 mb-4">See the talent pipeline and student capabilities</p>
                <div className="flex items-center gap-2 text-purple-300 group-hover:gap-3 transition-all">
                  <span>View Talent</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
              <a href="/dh-at-iitj" className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 transition-all group">
                <Award className="w-10 h-10 text-pink-300 mb-4" />
                <h4 className="text-xl mb-2 text-white">Program Details</h4>
                <p className="text-indigo-200 mb-4">Learn about the IIT Jodhpur DH curriculum</p>
                <div className="flex items-center gap-2 text-pink-300 group-hover:gap-3 transition-all">
                  <span>See Program</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* Hire From Our Talent Network */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full mb-6">
              <Briefcase className="w-5 h-5" />
              <span className="text-sm">For Recruiters & HR Teams</span>
            </div>
            <h3 className="text-3xl lg:text-5xl mb-6 text-slate-900">
              Hire From Our Talent Network
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Access a unique pool of professionals who combine technical expertise with cultural intelligence, analytical thinking, and communication skills
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {talentAreas.map((area, index) => {
              const Icon = area.icon;
              const colorClasses = {
                indigo: 'from-indigo-50 to-indigo-100 border-indigo-300',
                purple: 'from-purple-50 to-purple-100 border-purple-300',
                blue: 'from-blue-50 to-blue-100 border-blue-300',
                pink: 'from-pink-50 to-pink-100 border-pink-300',
                green: 'from-green-50 to-green-100 border-green-300',
                amber: 'from-amber-50 to-amber-100 border-amber-300'
              };
              const iconColors = {
                indigo: 'text-indigo-600',
                purple: 'text-purple-600',
                blue: 'text-blue-600',
                pink: 'text-pink-600',
                green: 'text-green-600',
                amber: 'text-amber-600'
              };

              return (
                <div
                  key={index}
                  className={`bg-gradient-to-br ${colorClasses[area.color as keyof typeof colorClasses]} rounded-2xl p-8 border-2 shadow-lg hover:shadow-xl transition-all`}
                >
                  <Icon className={`w-12 h-12 ${iconColors[area.color as keyof typeof iconColors]} mb-4`} />
                  <h4 className="text-2xl text-slate-900 mb-3">{area.title}</h4>
                  <p className="text-slate-700 mb-4 leading-relaxed">{area.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm text-slate-600 mb-2">Key Skills:</div>
                    <div className="flex flex-wrap gap-2">
                      {area.skills.map((skill, idx) => (
                        <span key={idx} className="px-2 py-1 bg-white/80 text-slate-700 rounded text-xs border border-slate-200">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-sm text-slate-600 border-t border-slate-300 pt-4">
                    <strong>Typical Roles:</strong> {area.roles}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <h3 className="text-3xl lg:text-4xl mb-8 text-center">Why Hire From DH Nexus?</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {hiringBenefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
                    <Icon className="w-10 h-10 text-cyan-300 mb-4" />
                    <h4 className="text-xl mb-2 text-white">{benefit.title}</h4>
                    <p className="text-indigo-100">{benefit.description}</p>
                  </div>
                );
              })}
            </div>

            <div className="mt-10 text-center">
              <a 
                href="#for-recruiters"
                className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-lg"
              >
                <CheckCircle2 className="w-5 h-5" />
                Learn More About Hiring DH Graduates
              </a>
            </div>
          </div>
        </div>

        {/* Join Our Team - Recruitment CTA */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full mb-6">
              <Megaphone className="w-5 h-5" />
              <span className="text-sm">Collaboration Opportunities</span>
            </div>
            <h3 className="text-3xl lg:text-5xl mb-6 text-slate-900">
              Collaborate With Us
            </h3>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Partner with DH Nexus and IIT Jodhpur's Digital Humanities community for events, workshops, academic sessions, and exhibitions
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Events Collaboration */}
            <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-8 border-2 border-indigo-300 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Calendar className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl text-slate-900">Events & Conferences</h4>
                  <p className="text-indigo-600">Co-organize DH-focused gatherings</p>
                </div>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Collaborate on Digital Humanities conferences, symposiums, hackathons, and networking events. We bring student participation, cutting-edge perspectives, and academic rigor to industry events.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h5 className="text-sm text-indigo-600 mb-3">We Can Offer:</h5>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Student volunteers and event support staff</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Panel discussions and paper presentations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Project demonstrations and poster sessions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-indigo-600 mt-0.5 flex-shrink-0" />
                    <span>Social media promotion and content creation</span>
                  </li>
                </ul>
              </div>
              <div className="text-sm text-slate-600 bg-indigo-200 rounded-lg p-3">
                <strong>Perfect For:</strong> Tech conferences, academic symposiums, industry meetups, DH community gatherings
              </div>
            </div>

            {/* Workshops Collaboration */}
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8 border-2 border-purple-300 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Presentation className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl text-slate-900">Workshops & Training</h4>
                  <p className="text-purple-600">Hands-on skill development programs</p>
                </div>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Co-create and deliver workshops on NLP, data visualization, digital archiving, text mining, and other DH methodologies. Upskill corporate teams or train aspiring students.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h5 className="text-sm text-purple-600 mb-3">Workshop Topics Include:</h5>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Introduction to NLP and Text Analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Data Visualization with D3.js and Python</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Digital Archiving and Knowledge Management</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                    <span>Social Media Analytics and Network Science</span>
                  </li>
                </ul>
              </div>
              <div className="text-sm text-slate-600 bg-purple-200 rounded-lg p-3">
                <strong>Perfect For:</strong> Corporate training, bootcamps, skill development programs, student workshops
              </div>
            </div>

            {/* Academic Sessions */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border-2 border-blue-300 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-lg">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl text-slate-900">Academic Sessions</h4>
                  <p className="text-blue-600">Guest lectures and seminars</p>
                </div>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Invite DH students and faculty for guest lectures, research seminars, curriculum consultations, and interdisciplinary academic exchanges at your institution or organization.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h5 className="text-sm text-blue-600 mb-3">Session Formats:</h5>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Keynote presentations on DH research trends</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Interactive seminars on interdisciplinary methods</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Research collaboration opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span>Webinars and online lecture series</span>
                  </li>
                </ul>
              </div>
              <div className="text-sm text-slate-600 bg-blue-200 rounded-lg p-3">
                <strong>Perfect For:</strong> Universities, research institutions, educational organizations, online learning platforms
              </div>
            </div>

            {/* Expos & Exhibitions */}
            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-8 border-2 border-green-300 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="text-2xl text-slate-900">Expos & Exhibitions</h4>
                  <p className="text-green-600">Showcase DH projects and innovations</p>
                </div>
              </div>
              <p className="text-slate-700 mb-6 leading-relaxed">
                Feature DH student projects, research outputs, and digital humanities tools at industry expos, innovation showcases, and academic exhibitions. Perfect for demonstrating real-world applications.
              </p>
              <div className="bg-white rounded-lg p-4 mb-4">
                <h5 className="text-sm text-green-600 mb-3">What We Showcase:</h5>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Interactive data visualization projects</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>NLP and AI-powered applications</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Digital archive systems and tools</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <span>Cultural analytics and social research</span>
                  </li>
                </ul>
              </div>
              <div className="text-sm text-slate-600 bg-green-200 rounded-lg p-3">
                <strong>Perfect For:</strong> Tech expos, innovation fairs, research showcases, career fairs, industry exhibitions
              </div>
            </div>
          </div>

          {/* Collaboration Benefits */}
          <div className="bg-gradient-to-br from-cyan-600 to-blue-600 rounded-3xl p-10 text-white shadow-2xl mb-8">
            <h4 className="text-3xl mb-6 text-center">Why Collaborate With DH Nexus?</h4>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Lightbulb className="w-10 h-10 text-yellow-300 mb-4" />
                <h5 className="text-xl mb-2">Fresh Perspectives</h5>
                <p className="text-cyan-100 text-sm">
                  Student-led initiatives bring innovative ideas and cutting-edge approaches from academia to real-world applications.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Users className="w-10 h-10 text-pink-300 mb-4" />
                <h5 className="text-xl mb-2">Engaged Community</h5>
                <p className="text-cyan-100 text-sm">
                  Access to motivated DH students, faculty connections, and a vibrant interdisciplinary community at IIT Jodhpur.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Award className="w-10 h-10 text-green-300 mb-4" />
                <h5 className="text-xl mb-2">Academic Excellence</h5>
                <p className="text-cyan-100 text-sm">
                  Backed by IIT Jodhpur's reputation for quality research and technical education in emerging fields.
                </p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-xl text-cyan-100 mb-6">
                Interested in partnering with us? Let's create something impactful together!
              </p>
              <a
                href="mailto:m24id1009@iitj.ac.in?subject=Collaboration Opportunity with DH Nexus"
                className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-cyan-50 transition-all transform hover:scale-105 shadow-lg"
              >
                <Mail className="w-5 h-5" />
                Propose a Collaboration
              </a>
            </div>
          </div>
        </div>

        {/* Join Our Team - Recruitment CTA */}
        <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-3xl p-12 text-white shadow-2xl text-center mb-20">
          <Rocket className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
          <h3 className="text-3xl lg:text-4xl mb-4">Want to Join Our Team?</h3>
          <p className="text-xl text-indigo-200 mb-8 max-w-3xl mx-auto">
            We're always looking for passionate DH students to contribute to this initiative. Whether you want to add content, share your projects, or help build new features—we'd love to collaborate!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:m24id1009@iitj.ac.in"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white px-8 py-4 rounded-xl hover:from-indigo-400 hover:to-purple-400 transition-all transform hover:scale-105 shadow-lg"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
            <a 
              href="#about"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl transition-all"
            >
              <ExternalLink className="w-5 h-5" />
              Learn About DH Nexus
            </a>
          </div>
          
          <div className="mt-8 pt-8 border-t border-white/20">
            <p className="text-indigo-200 mb-4">Open Roles:</p>
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-4 py-2 bg-white/10 rounded-lg text-sm">Content Writers</span>
              <span className="px-4 py-2 bg-white/10 rounded-lg text-sm">Web Developers</span>
              <span className="px-4 py-2 bg-white/10 rounded-lg text-sm">UX/UI Designers</span>
              <span className="px-4 py-2 bg-white/10 rounded-lg text-sm">Data Analysts</span>
              <span className="px-4 py-2 bg-white/10 rounded-lg text-sm">Research Contributors</span>
            </div>
          </div>
        </div>

        {/* Team Stats */}
        <div className="mt-16 grid md:grid-cols-4 gap-6">
          <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl p-6 border border-indigo-200 text-center">
            <div className="text-4xl mb-2 text-indigo-900">3</div>
            <div className="text-slate-700">Core Team Members</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 border border-purple-200 text-center">
            <div className="text-4xl mb-2 text-purple-900">15+</div>
            <div className="text-slate-700">Resource Sections</div>
          </div>
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200 text-center">
            <div className="text-4xl mb-2 text-blue-900">100%</div>
            <div className="text-slate-700">Aspirant Focused</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-xl p-6 border border-green-200 text-center">
            <div className="text-4xl mb-2 text-green-900">Student</div>
            <div className="text-slate-700">Led Initiative</div>
          </div>
        </div>
      </div>
    </section>
  );
}