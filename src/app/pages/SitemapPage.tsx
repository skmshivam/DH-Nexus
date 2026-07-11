import { Link } from 'react-router-dom';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { Map, Home, Briefcase, Users, BookOpen, Globe, Building2, TrendingUp, Mail, FileText, HelpCircle, Rocket, GraduationCap, Target, Award, Calendar } from 'lucide-react';

interface SitemapSection {
  title: string;
  icon: any;
  links: Array<{
    label: string;
    path: string;
    description: string;
  }>;
}

export function SitemapPage() {
  const sections: SitemapSection[] = [
    {
      title: 'Main Pages',
      icon: Home,
      links: [
        { label: 'Home', path: '/', description: 'Platform homepage and overview' },
        { label: 'What is Digital Humanities?', path: '/what-is-dh', description: 'Learn about DH field and careers' },
        { label: 'For Recruiters', path: '/for-recruiters', description: 'Hire DH talent for your company' },
      ],
    },
    {
      title: 'Talent & Jobs',
      icon: Briefcase,
      links: [
        { label: 'Job Board', path: '/jobs', description: '127+ active DH job listings' },
        { label: 'Talent Directory', path: '/talent-directory', description: '2,847+ DH professionals' },
        { label: 'Join Talent Network', path: '/join-talent', description: 'Create your talent profile' },
        { label: 'Hire Talent', path: '/hire-talent', description: 'Post jobs and find candidates' },
        { label: 'Career Resources', path: '/career-resources', description: 'Portfolio, resume, and career tips' },
        { label: 'Altac Careers', path: '/altac-careers', description: 'Alternative academic career paths' },
        { label: 'Mentorship', path: '/mentorship', description: 'Connect with industry mentors' },
      ],
    },
    {
      title: 'Programs & Education',
      icon: GraduationCap,
      links: [
        { label: 'Global DH Programs', path: '/global-dh', description: '87+ programs from 6 continents' },
        { label: 'DH at IIT Jodhpur', path: '/dh-at-iitj', description: 'Learn about IIT Jodhpur DH program' },
        { label: 'Interactive Global Map', path: '/interactive-map', description: 'Explore DH programs and jobs worldwide' },
        { label: 'DH Timeline', path: '/timeline', description: 'History of Digital Humanities from 1949' },
        { label: 'Resources', path: '/resources', description: 'Curated DH learning resources' },
        { label: 'Submit Resource', path: '/submit-resource', description: 'Share your DH resources' },
      ],
    },
    {
      title: 'Industry & Partners',
      icon: Building2,
      links: [
        { label: 'Industry Partners', path: '/industry', description: 'Corporate collaborations' },
        { label: 'Partner With Us', path: '/partner', description: 'Become a DH Nexus partner' },
        { label: 'Success Stories', path: '/success-stories', description: 'Alumni and placement stories' },
      ],
    },
    {
      title: 'Research & Innovation',
      icon: Target,
      links: [
        { label: 'Research Projects', path: '/research', description: 'Ongoing DH research initiatives' },
        { label: 'Events & Workshops', path: '/events', description: 'Upcoming webinars and conferences' },
      ],
    },
    {
      title: 'About & Support',
      icon: Users,
      links: [
        { label: 'Team', path: '/team', description: 'Meet the DH Nexus team' },
        { label: 'Contact Us', path: '/contact', description: 'Get in touch with us' },
        { label: 'Help Us Build', path: '/help-build', description: 'Contribute to the platform' },
        { label: 'FAQ', path: '/faq', description: 'Frequently asked questions' },
      ],
    },
    {
      title: 'Legal & Policies',
      icon: FileText,
      links: [
        { label: 'Privacy Policy', path: '/privacy', description: 'How we protect your data' },
        { label: 'Terms of Service', path: '/terms', description: 'Platform usage terms' },
        { label: 'Sitemap', path: '/sitemap', description: 'This page - all platform links' },
      ],
    },
  ];

  return (
    <>
      <SEO 
        title="Sitemap | DH Nexus"
        description="Navigate all pages on DH Nexus - jobs, talent directory, global programs, resources, events, and more."
        keywords="sitemap, site navigation, DH Nexus pages"
      />
      
      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        {/* Hero */}
        <div className="relative pt-24 pb-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <Map className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 font-medium">Site Navigation</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Sitemap
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Explore all pages and features on DH Nexus. Find jobs, programs, resources, and connect with the global Digital Humanities community.
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 pb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sections.map((section) => {
              const Icon = section.icon;
              return (
                <div
                  key={section.title}
                  className="bg-slate-800/30 border border-slate-700 rounded-2xl p-6 hover:border-cyan-500/30 transition-all"
                >
                  {/* Section Header */}
                  <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-700">
                    <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <h2 className="text-xl font-bold text-white">{section.title}</h2>
                  </div>

                  {/* Links */}
                  <div className="space-y-3">
                    {section.links.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block group"
                      >
                        <div className="p-3 bg-slate-900/30 rounded-lg border border-slate-700/50 hover:border-cyan-500/50 hover:bg-slate-900/50 transition-all">
                          <div className="font-medium text-white group-hover:text-cyan-400 transition-colors mb-1">
                            {link.label}
                          </div>
                          <div className="text-xs text-slate-400 group-hover:text-slate-300 transition-colors">
                            {link.description}
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Quick Stats */}
          <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-xl p-6 text-center">
              <Briefcase className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white mb-1">127+</div>
              <div className="text-sm text-slate-300">Active Jobs</div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 rounded-xl p-6 text-center">
              <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white mb-1">2,847+</div>
              <div className="text-sm text-slate-300">Professionals</div>
            </div>

            <div className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border border-green-500/30 rounded-xl p-6 text-center">
              <Globe className="w-8 h-8 text-green-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white mb-1">87+</div>
              <div className="text-sm text-slate-300">DH Programs</div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/10 to-amber-500/10 border border-orange-500/30 rounded-xl p-6 text-center">
              <Award className="w-8 h-8 text-orange-400 mx-auto mb-2" />
              <div className="text-3xl font-bold text-white mb-1">87%</div>
              <div className="text-sm text-slate-300">Placement Rate</div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-12 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 text-center">
            <Rocket className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Ready to Get Started?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Join the global Digital Humanities community. Explore opportunities, connect with professionals, and advance your DH career.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/join-talent"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg hover:shadow-cyan-500/50"
              >
                <Users className="w-5 h-5" />
                Join Talent Network
              </Link>
              
              <Link
                to="/jobs"
                className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 border border-slate-700 text-white rounded-xl hover:bg-slate-700 hover:border-cyan-500/50 transition-all"
              >
                <Briefcase className="w-5 h-5" />
                Browse Jobs
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
