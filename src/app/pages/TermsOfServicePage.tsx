import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { FileText, Shield, AlertTriangle, CheckCircle, Mail, Calendar } from 'lucide-react';

export function TermsOfServicePage() {
  return (
    <>
      <SEO 
        title="Terms of Service | DH Nexus"
        description="Read the terms and conditions for using DH Nexus platform. User responsibilities, acceptable use, and legal agreements."
        keywords="terms of service, terms and conditions, user agreement, DH Nexus"
      />
      
      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        {/* Hero */}
        <div className="relative pt-24 pb-12 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <FileText className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 font-medium">Terms of Service</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                Terms of Service
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-4">
              Please read these terms carefully before using DH Nexus.
            </p>
            
            <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
              <Calendar className="w-4 h-4" />
              <span>Effective Date: March 24, 2026</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto px-4 pb-20">
          <div className="bg-slate-800/30 border border-slate-700 rounded-2xl p-8 space-y-8">
            
            {/* Agreement */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">1. Agreement to Terms</h2>
                  <p className="text-slate-300 leading-relaxed">
                    By accessing and using DH Nexus (dhnexus.com), you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this platform.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-slate-700"></div>

            {/* Platform Description */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Shield className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">2. Platform Description</h2>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    DH Nexus is a Digital Humanities Talent Network and Collaboration Platform that:
                  </p>
                  <ul className="text-slate-300 leading-relaxed space-y-2 ml-4 list-disc">
                    <li>Connects DH professionals with industry partners globally</li>
                    <li>Showcases DH programs from institutions worldwide</li>
                    <li>Facilitates job postings and talent discovery</li>
                    <li>Provides educational resources and community features</li>
                    <li>Enables networking and collaboration</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed mt-3">
                    <strong className="text-white">Important:</strong> DH Nexus is a professional networking platform and is NOT designed for collecting sensitive personal information (PII) or financial data.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-slate-700"></div>

            {/* User Accounts */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">3. User Accounts and Responsibilities</h2>
                  
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">3.1 Account Creation</h3>
                  <ul className="text-slate-300 leading-relaxed space-y-2 ml-4 list-disc">
                    <li>You must be at least 16 years old to use DH Nexus</li>
                    <li>You must provide accurate and complete information</li>
                    <li>You are responsible for maintaining account security</li>
                    <li>You must not share your account credentials</li>
                    <li>You must notify us immediately of any unauthorized access</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-cyan-300 mb-2 mt-4">3.2 User Conduct</h3>
                  <p className="text-slate-300 leading-relaxed mb-2">You agree NOT to:</p>
                  <ul className="text-slate-300 leading-relaxed space-y-2 ml-4 list-disc">
                    <li>Post false, misleading, or fraudulent information</li>
                    <li>Impersonate others or misrepresent affiliations</li>
                    <li>Harass, abuse, or harm other users</li>
                    <li>Upload malicious code, viruses, or harmful content</li>
                    <li>Scrape, copy, or steal platform content without permission</li>
                    <li>Use the platform for illegal activities</li>
                    <li>Spam users with unwanted communications</li>
                    <li>Violate intellectual property rights</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="border-t border-slate-700"></div>

            {/* Content Ownership */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <FileText className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">4. Content Ownership and License</h2>
                  
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">4.1 Your Content</h3>
                  <p className="text-slate-300 leading-relaxed mb-2">
                    You retain ownership of content you submit (profiles, resources, comments, etc.). By posting content, you grant DH Nexus a worldwide, non-exclusive, royalty-free license to:
                  </p>
                  <ul className="text-slate-300 leading-relaxed space-y-2 ml-4 list-disc">
                    <li>Display and distribute your content on the platform</li>
                    <li>Use your content for promotional purposes (with attribution)</li>
                    <li>Modify content formatting for platform compatibility</li>
                    <li>Share content with recruiters and partners (as applicable)</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-cyan-300 mb-2 mt-4">4.2 Platform Content</h3>
                  <p className="text-slate-300 leading-relaxed">
                    All platform features, designs, logos, and content created by DH Nexus are protected by copyright and intellectual property laws. You may not copy, reproduce, or distribute platform content without written permission.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-slate-700"></div>

            {/* Job Postings */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">5. Job Postings and Applications</h2>
                  
                  <h3 className="text-lg font-semibold text-cyan-300 mb-2">5.1 For Employers/Recruiters</h3>
                  <ul className="text-slate-300 leading-relaxed space-y-2 ml-4 list-disc">
                    <li>Job postings must be legitimate and accurate</li>
                    <li>You must have authority to post on behalf of the company</li>
                    <li>Jobs must comply with employment laws and anti-discrimination regulations</li>
                    <li>You agree to handle candidate data responsibly and legally</li>
                    <li>DH Nexus is not responsible for hiring decisions or employment disputes</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-cyan-300 mb-2 mt-4">5.2 For Job Seekers</h3>
                  <ul className="text-slate-300 leading-relaxed space-y-2 ml-4 list-disc">
                    <li>Applications must contain truthful information</li>
                    <li>You are responsible for verifying job legitimacy before applying</li>
                    <li>DH Nexus does not guarantee employment or interview opportunities</li>
                    <li>We are not responsible for employer actions or hiring decisions</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="border-t border-slate-700"></div>

            {/* Disclaimers */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">6. Disclaimers</h2>
                  
                  <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-4">
                    <p className="text-yellow-200 font-semibold mb-2">IMPORTANT DISCLAIMERS:</p>
                    <ul className="text-yellow-100/90 text-sm space-y-1 ml-4 list-disc">
                      <li>DH Nexus is provided "AS IS" without warranties of any kind</li>
                      <li>We do not guarantee platform availability or error-free operation</li>
                      <li>We are not responsible for third-party content or external links</li>
                      <li>We do not verify employer legitimacy or job authenticity</li>
                      <li>We are not liable for user interactions or offline meetings</li>
                      <li>Platform information may be incomplete or outdated</li>
                    </ul>
                  </div>

                  <p className="text-slate-300 leading-relaxed">
                    <strong className="text-white">Use at Your Own Risk:</strong> You acknowledge that internet-based platforms carry inherent risks. Exercise caution when sharing personal information or meeting with strangers.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-slate-700"></div>

            {/* Limitation of Liability */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Shield className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">7. Limitation of Liability</h2>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    To the maximum extent permitted by law, DH Nexus and its team members shall not be liable for:
                  </p>
                  <ul className="text-slate-300 leading-relaxed space-y-2 ml-4 list-disc">
                    <li>Indirect, incidental, or consequential damages</li>
                    <li>Loss of profits, data, or business opportunities</li>
                    <li>User errors or misuse of the platform</li>
                    <li>Third-party actions (employers, users, partners)</li>
                    <li>Platform downtime or technical issues</li>
                    <li>Security breaches despite reasonable precautions</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed mt-3">
                    Our total liability shall not exceed $100 USD or the amount you paid to use premium features (if any).
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-slate-700"></div>

            {/* Indemnification */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">8. Indemnification</h2>
                  <p className="text-slate-300 leading-relaxed">
                    You agree to indemnify and hold harmless DH Nexus, its team, and partners from any claims, damages, or expenses arising from:
                  </p>
                  <ul className="text-slate-300 leading-relaxed space-y-2 ml-4 list-disc mt-2">
                    <li>Your use or misuse of the platform</li>
                    <li>Your violation of these Terms of Service</li>
                    <li>Your violation of any laws or third-party rights</li>
                    <li>Content you submit to the platform</li>
                    <li>Your interactions with other users</li>
                  </ul>
                </div>
              </div>
            </section>

            <div className="border-t border-slate-700"></div>

            {/* Termination */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <AlertTriangle className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">9. Termination</h2>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    We reserve the right to suspend or terminate your account at any time, without notice, for:
                  </p>
                  <ul className="text-slate-300 leading-relaxed space-y-2 ml-4 list-disc">
                    <li>Violation of these Terms of Service</li>
                    <li>Fraudulent or illegal activity</li>
                    <li>Abusive behavior toward other users</li>
                    <li>Extended inactivity</li>
                    <li>Any reason we deem necessary to protect the platform</li>
                  </ul>
                  <p className="text-slate-300 leading-relaxed mt-3">
                    You may delete your account at any time by contacting us at <a href="mailto:contact@dhnexus.com" className="text-cyan-400 hover:text-cyan-300 underline">contact@dhnexus.com</a>.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-slate-700"></div>

            {/* Changes to Terms */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <FileText className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">10. Changes to Terms</h2>
                  <p className="text-slate-300 leading-relaxed">
                    We may update these Terms of Service periodically. Significant changes will be communicated via email or a prominent platform notice. Continued use after changes constitutes acceptance of the updated terms. We recommend reviewing this page regularly.
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-slate-700"></div>

            {/* Governing Law */}
            <section>
              <div className="flex items-start gap-3 mb-4">
                <Shield className="w-6 h-6 text-cyan-400 flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-bold text-white mb-3">11. Governing Law</h2>
                  <p className="text-slate-300 leading-relaxed">
                    These Terms of Service are governed by the laws of India. Any disputes shall be resolved in the courts of India. For international users, local laws may also apply.
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
                  <h2 className="text-2xl font-bold text-white mb-3">12. Contact Information</h2>
                  <p className="text-slate-300 leading-relaxed mb-3">
                    For questions about these Terms of Service:
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
              By using DH Nexus, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
