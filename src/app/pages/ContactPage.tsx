import { Mail, Linkedin, Instagram, Globe, MessageSquare, Heart, Building2, Users, FileText, Send, MapPin, Phone, ArrowRight, GraduationCap, Calendar, BookOpen, ExternalLink } from 'lucide-react';
import { ContactFormBackend } from '../components/ContactFormBackend';
import { NewsletterSignup } from '../components/NewsletterSignup';
import { DHNexusWatermark } from '../components/DHNexusLogo';

export function ContactPage() {
  return (
    <div className="relative">
      {/* Subtle watermark background */}
      <DHNexusWatermark />
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 py-20 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-6 border border-white/30">
            <MessageSquare className="w-5 h-5" />
            <span className="text-sm">Get In Touch</span>
          </div>
          <h1 className="text-5xl lg:text-7xl text-white mb-6">
            Contact Us
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Have questions? Want to collaborate? Looking for partnerships? We'd love to hear from you!
          </p>
        </div>
      </section>

      {/* Main Contact Options */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl mb-6 text-slate-900">
              Choose How You'd Like to <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Different ways to reach us based on your needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* For Students/Aspirants */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-indigo-100 hover:border-indigo-300 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl text-slate-900 mb-3">Students & Aspirants</h3>
              <p className="text-slate-600 mb-6">
                Questions about DH, IIT Jodhpur program, career paths, or getting started?
              </p>
              <a
                href="https://www.linkedin.com/company/dh-nexus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all w-full justify-center"
              >
                <Linkedin className="w-5 h-5" />
                <span>Message on LinkedIn</span>
              </a>
            </div>

            {/* For Companies/Recruiters */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100 hover:border-purple-300 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-4">
                <Building2 className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl text-slate-900 mb-3">Companies & Recruiters</h3>
              <p className="text-slate-600 mb-6">
                Interested in hiring DH talent, partnerships, or collaborations?
              </p>
              <a
                href="https://forms.gle/6DrH5bSRQAuPqE997"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl transition-all w-full justify-center"
              >
                <FileText className="w-5 h-5" />
                <span>Register as Employer</span>
              </a>
            </div>

            {/* General Inquiries */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-green-100 hover:border-green-300 hover:shadow-xl transition-all">
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-4">
                <MessageSquare className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl text-slate-900 mb-3">General Inquiries</h3>
              <p className="text-slate-600 mb-6">
                Media, collaborations, speaking engagements, or other questions?
              </p>
              <a
                href="https://www.instagram.com/dh_nexus/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 py-3 rounded-xl transition-all w-full justify-center"
              >
                <Instagram className="w-5 h-5" />
                <span>DM on Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl mb-6 text-slate-900">
              Quick Actions
            </h2>
            <p className="text-xl text-slate-600">
              Looking for something specific? Here are direct links
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a
              href="https://forms.gle/927FLPxgbi7ww78K9"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-md border border-slate-200 hover:border-cyan-300 hover:shadow-lg transition-all group"
            >
              <Users className="w-10 h-10 text-cyan-600 mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg text-slate-900 mb-2">Register as Student</h4>
              <p className="text-sm text-slate-600 mb-3">Join our talent network and get hired</p>
              <div className="text-cyan-600 text-sm inline-flex items-center gap-1">
                Register Now <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            <a
              href="https://forms.gle/6DrH5bSRQAuPqE997"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-md border border-slate-200 hover:border-purple-300 hover:shadow-lg transition-all group"
            >
              <Building2 className="w-10 h-10 text-purple-600 mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg text-slate-900 mb-2">Register as Employer</h4>
              <p className="text-sm text-slate-600 mb-3">Access our talent pool of 150+ professionals</p>
              <div className="text-purple-600 text-sm inline-flex items-center gap-1">
                Register Now <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            <a
              href="https://forms.gle/VqqeGB2EvyXym5UW7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-md border border-slate-200 hover:border-pink-300 hover:shadow-lg transition-all group"
            >
              <Heart className="w-10 h-10 text-pink-600 mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg text-slate-900 mb-2">Help Us Build</h4>
              <p className="text-sm text-slate-600 mb-3">Share ideas, feedback, or contribute content</p>
              <div className="text-pink-600 text-sm inline-flex items-center gap-1">
                Contribute <ArrowRight className="w-4 h-4" />
              </div>
            </a>

            <a
              href="/partner"
              className="bg-white rounded-xl p-6 shadow-md border border-slate-200 hover:border-amber-300 hover:shadow-lg transition-all group"
            >
              <Globe className="w-10 h-10 text-amber-600 mb-3 group-hover:scale-110 transition-transform" />
              <h4 className="text-lg text-slate-900 mb-2">Partner With Us</h4>
              <p className="text-sm text-slate-600 mb-3">Collaborations, events, and research opportunities</p>
              <div className="text-amber-600 text-sm inline-flex items-center gap-1">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl mb-6 text-slate-900">
              Follow Our Journey
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Stay updated with the latest DH opportunities, resources, and community updates
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <a
              href="https://www.linkedin.com/company/dh-nexus"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Linkedin className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl text-slate-900 mb-2">LinkedIn</h3>
                  <p className="text-slate-600 mb-4">
                    Professional updates, job postings, industry insights, and networking opportunities
                  </p>
                  <div className="inline-flex items-center gap-2 text-blue-600">
                    <span>Follow DH Nexus</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>

            <a
              href="https://www.instagram.com/dh_nexus/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-2xl p-8 shadow-lg border border-pink-100 hover:border-pink-300 hover:shadow-xl transition-all group"
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <Instagram className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl text-slate-900 mb-2">Instagram</h3>
                  <p className="text-slate-600 mb-4">
                    Visual stories, community highlights, student projects, and behind-the-scenes content
                  </p>
                  <div className="inline-flex items-center gap-2 text-pink-600">
                    <span>Follow @dh_nexus</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About IIT Jodhpur */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          {/* Contact Form + Newsletter */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            <div className="lg:col-span-2">
              <ContactFormBackend />
            </div>
            <div>
              <NewsletterSignup />
            </div>
          </div>

          <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-purple-50 rounded-3xl p-10 border border-cyan-200">
            <div className="flex items-start gap-4 mb-6">
              <Globe className="w-8 h-8 text-cyan-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl text-slate-900 mb-2">DH Programs in India</h3>
                <p className="text-slate-700 mb-4">
                  Interested in Digital Humanities programs across India? Explore leading institutions offering DH education and research opportunities.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 border border-cyan-200">
                    <div className="text-sm text-slate-600 mb-2">Connect with DH Nexus:</div>
                    <a 
                      href="https://www.linkedin.com/company/dh-nexus" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-600 hover:text-cyan-700 inline-flex items-center gap-2"
                    >
                      <Globe className="w-4 h-4" />
                      <span>LinkedIn Network</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                  <div className="bg-white rounded-xl p-4 border border-purple-200">
                    <div className="text-sm text-slate-600 mb-2">Explore All DH Programs:</div>
                    <a 
                      href="/global-dh" 
                      className="text-purple-600 hover:text-purple-700 inline-flex items-center gap-2"
                    >
                      <MapPin className="w-4 h-4" />
                      <span>Global DH Landscape</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DH Workshops & College Events - NEW SECTION */}
      <section className="py-20 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-2 rounded-full mb-6 shadow-lg">
              <GraduationCap className="w-5 h-5" />
              <span className="text-sm font-medium">For Colleges & Institutions</span>
            </div>
            <h2 className="text-4xl lg:text-6xl mb-6 text-slate-900">
              Bring DH Nexus to <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">Your Campus</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Host DH workshops, invite us for guest lectures, or partner with us to establish DH awareness at your institution
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* DH Workshop Contact for Colleges */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-10 shadow-xl border-2 border-green-200 hover:border-green-400 hover:shadow-2xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <BookOpen className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl text-slate-900 mb-1">DH Workshop</h3>
                  <p className="text-green-600">For Colleges & Universities</p>
                </div>
              </div>
              
              <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                Want to organize a Digital Humanities workshop at your college? We conduct interactive sessions covering NLP, data visualization, text mining, and DH career pathways.
              </p>

              <div className="bg-white rounded-xl p-6 mb-6 border border-green-200">
                <h4 className="text-sm text-green-600 mb-4 font-semibold">What We Cover:</h4>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Introduction to Digital Humanities & Career Opportunities</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Hands-on NLP and Text Analysis with Python</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Data Visualization for Humanities Research</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Building DH Projects & Portfolio Development</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://forms.gle/q3GHqDS7GV5G6G446"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg w-full text-lg font-semibold"
              >
                <Calendar className="w-5 h-5" />
                <span>Request DH Workshop</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>

            {/* Become Part of DH Nexus at Your College */}
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-3xl p-10 shadow-xl border-2 border-purple-200 hover:border-purple-400 hover:shadow-2xl transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl text-slate-900 mb-1">Campus Chapter</h3>
                  <p className="text-purple-600">Start DH Community</p>
                </div>
              </div>
              
              <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                Establish a DH Nexus campus chapter at your college! Build a local DH community, organize events, and connect students with global opportunities.
              </p>

              <div className="bg-white rounded-xl p-6 mb-6 border border-purple-200">
                <h4 className="text-sm text-purple-600 mb-4 font-semibold">Benefits of Campus Chapter:</h4>
                <ul className="space-y-3 text-sm text-slate-700">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Access to DH resources, toolkits, and learning materials</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Priority invites to DH webinars and conferences</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Direct connection with industry recruiters</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Feature student projects on DH Nexus platform</span>
                  </li>
                </ul>
              </div>

              <a
                href="https://forms.gle/q3GHqDS7GV5G6G446"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-4 rounded-xl transition-all transform hover:scale-105 shadow-lg w-full text-lg font-semibold"
              >
                <GraduationCap className="w-5 h-5" />
                <span>Start Campus Chapter</span>
                <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Event Registration Card */}
          <div className="bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl p-12 text-white shadow-2xl">
            <div className="text-center mb-8">
              <Calendar className="w-16 h-16 text-yellow-300 mx-auto mb-6" />
              <h3 className="text-3xl lg:text-4xl mb-4">Register Your Event with DH Nexus</h3>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-2">
                Hosting a DH conference, workshop, hackathon, or academic event? List it on our platform!
              </p>
              <p className="text-lg text-indigo-200 max-w-2xl mx-auto">
                Get exposure to the global DH professional community across India and internationally
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {/* Workshop Registration Form */}
              <a
                href="https://forms.gle/a2iwwhsHKHMKBu9t9"
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-yellow-500 to-amber-600 p-8 rounded-2xl hover:shadow-2xl transition-all transform hover:scale-105 border-2 border-yellow-300"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <ExternalLink className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-2xl text-white mb-3">Host a Workshop</h4>
                <p className="text-yellow-100 mb-4">
                  Register to organize a DH workshop or seminar at your college/institution
                </p>
                <div className="flex items-center gap-2 text-white font-semibold">
                  <span>Register Workshop</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </a>

              {/* General Event Submission */}
              <button
                onClick={() => {
                  const form = document.getElementById('contactForm');
                  form?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group bg-gradient-to-br from-indigo-500 to-purple-600 p-8 rounded-2xl hover:shadow-2xl transition-all transform hover:scale-105 border-2 border-indigo-300 text-left"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center">
                    <Calendar className="w-8 h-8 text-white" />
                  </div>
                  <ArrowRight className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-2xl text-white mb-3">Other Events</h4>
                <p className="text-indigo-100 mb-4">
                  Submit conferences, hackathons, or other DH events to be listed on our platform
                </p>
                <div className="flex items-center gap-2 text-white font-semibold">
                  <span>Submit Event</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <Send className="w-16 h-16 text-white mx-auto mb-6" />
          <h2 className="text-4xl lg:text-5xl text-white mb-6">
            Let's Start a Conversation
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you're a curious student, a hiring company, a potential collaborator, or just want to say hello—we're excited to hear from you!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.linkedin.com/company/dh-nexus"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 hover:bg-blue-50 px-10 py-4 rounded-xl transition-all transform hover:scale-105 shadow-xl text-lg"
            >
              <Linkedin className="w-5 h-5" />
              <span className="font-semibold">Connect on LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com/dh_nexus/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white hover:bg-white/30 text-white px-8 py-4 rounded-xl transition-all text-lg"
            >
              <Instagram className="w-5 h-5" />
              <span>DM on Instagram</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}