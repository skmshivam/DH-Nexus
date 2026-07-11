import { Network, Mail, ExternalLink, AlertCircle, Linkedin, Github, Twitter, MessageCircle, Heart, Sparkles, Users, BookOpen, Instagram, Phone, Link2, Youtube, AtSign, Facebook } from 'lucide-react';
import { DHNexusLogo, DHNexusWatermark } from './DHNexusLogo';

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-slate-900 via-indigo-950 to-purple-950 text-white">
      {/* Collaboration CTA Section */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-purple-500 px-6 py-2 rounded-full mb-6">
              <Sparkles className="w-5 h-5" />
              <span className="text-sm">Open for Collaboration</span>
            </div>
            <h3 className="text-4xl lg:text-5xl mb-6 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Ready to Work Together?
            </h3>
            <p className="text-xl text-slate-300 mb-8">
              We're passionate about Digital Humanities and eager to collaborate on projects, research initiatives, or share insights about the DH ecosystem. Let's connect!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/team"
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl transition-all transform hover:scale-105 inline-flex items-center gap-2 shadow-lg"
              >
                <Users className="w-5 h-5" />
                Meet the Team
              </a>
              <a 
                href="/contact"
                className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl transition-all inline-flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About Section - First Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <DHNexusLogo variant="footer" />
              <span className="text-2xl bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent font-semibold">DH Nexus</span>
            </div>
            <p className="text-slate-400 mb-4">
              Connecting talent, knowledge, and opportunity in the Digital Humanities ecosystem—India and beyond.
            </p>
            <div className="flex items-center gap-2 text-sm text-cyan-300">
              <Heart className="w-4 h-4" />
              <span>Building the Future of DH</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-white mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="/what-is-dh" className="hover:text-cyan-300 transition-colors inline-flex items-center gap-2">
                  <span className="text-cyan-400">→</span> What is DH?
                </a>
              </li>
              <li>
                <a href="/global-dh" className="hover:text-cyan-300 transition-colors inline-flex items-center gap-2">
                  <span className="text-cyan-400">→</span> Global Programs
                </a>
              </li>
              <li>
                <a href="/jobs" className="hover:text-cyan-300 transition-colors inline-flex items-center gap-2">
                  <span className="text-cyan-400">→</span> Job Board
                </a>
              </li>
              <li>
                <a href="/talent-directory" className="hover:text-cyan-300 transition-colors inline-flex items-center gap-2">
                  <span className="text-cyan-400">→</span> Talent Directory
                </a>
              </li>
              <li>
                <a href="/faq" className="hover:text-cyan-300 transition-colors inline-flex items-center gap-2">
                  <span className="text-cyan-400">→</span> FAQ
                </a>
              </li>
            </ul>
          </div>
          
          {/* For Students */}
          <div>
            <h3 className="text-white mb-4 text-lg font-semibold">For Students</h3>
            <ul className="space-y-2 text-slate-400">
              <li>
                <a href="/join-talent" className="hover:text-cyan-300 transition-colors inline-flex items-center gap-2">
                  <span className="text-cyan-400">→</span> Join Talent Network
                </a>
              </li>
              <li>
                <a href="/jobs" className="hover:text-cyan-300 transition-colors inline-flex items-center gap-2">
                  <span className="text-cyan-400">→</span> Browse Jobs
                </a>
              </li>
              <li>
                <a href="/submit-resource" className="hover:text-cyan-300 transition-colors inline-flex items-center gap-2">
                  <span className="text-cyan-400">→</span> Submit Resource
                </a>
              </li>
              <li>
                <a href="/events" className="hover:text-cyan-300 transition-colors inline-flex items-center gap-2">
                  <span className="text-cyan-400">→</span> Events
                </a>
              </li>
              <li>
                <a href="/resources" className="hover:text-cyan-300 transition-colors inline-flex items-center gap-2">
                  <span className="text-cyan-400">→</span> Resources
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="text-lg mb-4 text-white">Connect With Us</h4>
            <div className="space-y-4 text-slate-400 text-sm mb-6">
              <div className="pt-4">
                <div className="flex items-start gap-2">
                  <ExternalLink className="w-4 h-4 flex-shrink-0 mt-0.5 text-cyan-400" />
                  <a
                    href="/team"
                    className="hover:text-cyan-300 transition-colors"
                  >
                    Meet the DH Community
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <div className="text-xs uppercase tracking-wide text-slate-500 mb-3">Follow Us</div>
              <div className="flex flex-wrap gap-2">
                <a 
                  href="https://linktr.ee/DHNexus" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-green-600 rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                  aria-label="Linktree"
                >
                  <Link2 className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.linkedin.com/company/dh-nexus" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.instagram.com/dh_nexus/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-gradient-to-br hover:from-pink-500 hover:to-rose-500 rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a 
                  href="https://www.threads.com/@dh_nexus" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-slate-800 rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                  aria-label="Threads"
                >
                  <AtSign className="w-5 h-5" />
                </a>
                <a 
                  href="https://youtube.com/@dhnexus26" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-red-600 rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com/dhnexus" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-blue-400 rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="https://fb.watch/EQV1E-szAn/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-blue-600 rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                  aria-label="Facebook Page"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a 
                  href="https://facebook.com/dhnexus" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-indigo-600 rounded-lg flex items-center justify-center transition-all transform hover:scale-110"
                  aria-label="Facebook Profile"
                >
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-slate-400 text-sm flex items-center gap-2">
              <span>&copy; {new Date().getFullYear()} DH Nexus</span>
              <span className="text-slate-600">•</span>
              <span className="flex items-center gap-1">
                Crafted with <Heart className="w-3 h-3 text-pink-500 fill-pink-500" /> for DH Aspirants
              </span>
            </div>
            
            {/* Legal Links */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-slate-400">
              <a href="/privacy" className="hover:text-cyan-300 transition-colors">
                Privacy Policy
              </a>
              <span className="text-slate-600">•</span>
              <a href="/terms" className="hover:text-cyan-300 transition-colors">
                Terms of Service
              </a>
              <span className="text-slate-600">•</span>
              <a href="/sitemap" className="hover:text-cyan-300 transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>

        {/* Additional Info Bar */}
        <div className="mt-8 pt-8 border-t border-white/10">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <MessageCircle className="w-6 h-6 mx-auto mb-2 text-indigo-400" />
              <div className="text-sm text-slate-300">Open to Questions</div>
              <div className="text-xs text-slate-500 mt-1">Ask us anything about DH</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <Users className="w-6 h-6 mx-auto mb-2 text-purple-400" />
              <div className="text-sm text-slate-300">Ready to Collaborate</div>
              <div className="text-xs text-slate-500 mt-1">Let's work on projects together</div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
              <BookOpen className="w-6 h-6 mx-auto mb-2 text-pink-400" />
              <div className="text-sm text-slate-300">Sharing Knowledge</div>
              <div className="text-xs text-slate-500 mt-1">From students, for students</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}