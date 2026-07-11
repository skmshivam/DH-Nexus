import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { Shield, Lock, Eye, UserCheck, Database, AlertCircle, Mail, Calendar } from 'lucide-react';

export function PrivacyPolicyPage() {
  return (
    <>
      <SEO 
        title="Privacy Policy | DH Nexus"
        description="Learn how DH Nexus protects your privacy and handles your data. Our commitment to transparency and data security."
        keywords="privacy policy, data protection, security, DH Nexus"
      />
      
      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        {/* Hero */}
        <div className="relative pt-24 pb-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <Shield className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 font-medium">Privacy Policy</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Your Privacy Matters
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-4">
              We are committed to protecting your privacy and being transparent about how we handle your data.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
              <Calendar className="w-4 h-4" />
              <span>Last Updated: March 24, 2026</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 pb-20">
          <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8 space-y-8">
            
            {/* Introduction */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <UserCheck className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">1. Introduction</h2>
                  <p className="text-slate-300 leading-relaxed">
                    DH Nexus ("we," "our," or "us") operates dhnexus.com. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Digital Humanities Talent Network platform.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-3">
                    <strong className="text-white">Important:</strong> DH Nexus is not designed for collecting personally identifiable information (PII) or securing sensitive data. We recommend not sharing sensitive personal information on public profiles.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-slate-700"></div>

            {/* Information We Collect */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Database className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">2. Information We Collect</h2>
                  
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">2.1 Information You Provide</h3>
                  <ul className="text-slate-300 leading-relaxed space-y-2 ml-4 list-disc">
                    <li><strong>Profile Information:</strong> Name, email, education, skills, portfolio links</li>
                    <li><strong>Job Applications:</strong> Resume/CV, cover letters, application responses</li>
                    <li><strong>User Content:</strong> Resources, comments, project submissions</li>
                    <li><strong>Contact Forms:</strong> Messages sent through our contact page</li>
                    <li><strong>Newsletter Signup:</strong> Email address for updates</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-cyan-300 mb-2 mt-4">2.2 Automatically Collected Information</h3>
                  <ul className="text-slate-300 leading-relaxed space-y-2 ml-4 list-disc">
                    <li><strong>Usage Data:</strong> Pages visited, time spent, clicks</li>
                    <li><strong>Device Information:</strong> Browser type, operating system, IP address</li>
                    <li><strong>Cookies:</strong> Session cookies for authentication and preferences</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-cyan-300 mb-2 mt-4">2.3 Information from Third Parties</h3>
                  <ul className="text-slate-300 leading-relaxed space-y-2 ml-4 list-disc">
                    <li>Social media profile information (if you connect accounts)</li>
                    <li>Professional information from public sources (LinkedIn, GitHub)</li>
                    <li>Analytics from Google Analytics (anonymized)</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="border-t border-slate-700"></div>

            {/* How We Use Your Information */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Eye className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">3. How We Use Your Information</h2>
                  <ul className="text-slate-300 leading-relaxed space-y-2 ml-4 list-disc">
                    <li>Operate and maintain the DH Nexus platform</li>
                    <li>Match job seekers with relevant opportunities</li>
                    <li>Connect recruiters with qualified candidates</li>
                    <li>Send newsletters and updates (with your consent)</li>
                    <li>Improve our services and user experience</li>
                    <li>Respond to your inquiries and support requests</li>
                    <li>Analyze platform usage for improvements</li>
                    <li>Prevent fraud and ensure platform security</li>
                    <li>Comply with legal obligations</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="border-t border-slate-700"></div>

            {/* Data Sharing */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Lock className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">4. How We Share Your Information</h2>
                  
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">We May Share Your Information With:</h3>
                  <ul className="text-slate-300 leading-relaxed space-y-2 ml-4 list-disc">
                    <li><strong>Recruiters:</strong> If you apply for jobs or opt into the talent directory</li>
                    <li><strong>Service Providers:</strong> Hosting, analytics, email services (under strict contracts)</li>
                    <li><strong>Academic Partners:</strong> For program information and collaborations</li>
                    <li><strong>Legal Authorities:</strong> When required by law or to protect rights</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-cyan-300 mb-2 mt-4">We NEVER:</h3>
                  <ul className="text-slate-300 leading-relaxed space-y-2 ml-4 list-disc">
                    <li>Sell your personal information to third parties</li>
                    <li>Share your data for marketing without consent</li>
                    <li>Disclose sensitive information publicly without permission</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="border-t border-slate-700"></div>

            {/* Your Rights */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Shield className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">5. Your Rights</h2>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    You have the right to:
                  </p>
                  <ul className="text-slate-300 leading-relaxed space-y-2 ml-4 list-disc">
                    <li><strong>Access:</strong> Request a copy of your personal data</li>
                    <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your account and data</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from emails at any time</li>
                    <li><strong>Data Portability:</strong> Receive your data in a structured format</li>
                    <li><strong>Object:</strong> Object to processing of your data</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed mt-3">
                    To exercise these rights, contact us at <a href="mailto:contact@dhnexus.com" className="text-cyan-400 hover:text-cyan-300 underline">contact@dhnexus.com</a>
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-slate-700"></div>

            {/* Data Security */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Lock className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">6. Data Security</h2>
                  <p className="text-slate-300 leading-relaxed">
                    We implement reasonable security measures to protect your information from unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is 100% secure. We cannot guarantee absolute security.
                  </p>
                  <p className="text-slate-300 leading-relaxed mt-3">
                    <strong className="text-yellow-400">Important:</strong> Do not share highly sensitive information (financial data, passwords for other services, government IDs) on public profiles or forms.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-slate-700"></div>

            {/* Cookies */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Database className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">7. Cookies & Tracking</h2>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    We use cookies and similar technologies for:
                  </p>
                  <ul className="text-slate-300 leading-relaxed space-y-2 ml-4 list-disc">
                    <li>Authentication and security</li>
                    <li>Remembering your preferences</li>
                    <li>Analytics and performance monitoring</li>
                    <li>Improving user experience</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed mt-3">
                    You can control cookies through your browser settings. Disabling cookies may limit platform functionality.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-slate-700"></div>

            {/* Data Retention */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Calendar className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">8. Data Retention</h2>
                  <p className="text-slate-300 leading-relaxed">
                    We retain your information for as long as necessary to:
                  </p>
                  <ul className="text-slate-300 leading-relaxed space-y-2 ml-4 list-disc mt-2">
                    <li>Provide our services</li>
                    <li>Comply with legal obligations</li>
                    <li>Resolve disputes</li>
                    <li>Enforce our agreements</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed mt-3">
                    When you request account deletion, we will remove your data within 7 business days, except where retention is required by law.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-slate-700"></div>

            {/* Children's Privacy */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">9. Children's Privacy</h2>
                  <p className="text-slate-300 leading-relaxed">
                    DH Nexus is intended for users 16 years and older. We do not knowingly collect information from children under 16. If you believe we have collected information from a child under 16, please contact us immediately.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-slate-700"></div>

            {/* International Users */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Database className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">10. International Users</h2>
                  <p className="text-slate-300 leading-relaxed">
                    DH Nexus serves a global community. Your information may be transferred to and processed in countries other than your own. By using our platform, you consent to such transfers. We ensure appropriate safeguards are in place for international data transfers.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-slate-700"></div>

            {/* Changes to Privacy Policy */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <AlertCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">11. Changes to This Policy</h2>
                  <p className="text-slate-300 leading-relaxed">
                    We may update this Privacy Policy periodically. We will notify you of significant changes via email or a prominent notice on our platform. Continued use after changes constitutes acceptance of the updated policy.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-slate-700"></div>

            {/* Contact */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Mail className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">12. Contact Us</h2>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    If you have questions about this Privacy Policy or your data:
                  </p>
                  <div className="bg-slate-900/50 rounded-lg p-4 border border-slate-700">
                    <p className="text-white font-medium mb-2">DH Nexus Team</p>
                    <p className="text-slate-300">Email: <a href="mailto:m24id1009@iitj.ac.in" className="text-cyan-400 hover:text-cyan-300 underline">m24id1009@iitj.ac.in</a></p>
                    <p className="text-slate-300">Website: <a href="https://dhnexus.com/contact" className="text-cyan-400 hover:text-cyan-300 underline">dhnexus.com/contact</a></p>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* Acknowledgment */}
          <div className="mt-8 bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-6">
            <p className="text-slate-300 text-center">
              By using DH Nexus, you acknowledge that you have read and understood this Privacy Policy and agree to its terms.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
