import { useState } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { SEO } from '../components/SEO';
import { ChevronDown, HelpCircle, Sparkles, Search, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const faqs: FAQItem[] = [
    // About DH Nexus
    {
      category: 'About DH Nexus',
      question: 'What is DH Nexus?',
      answer: 'DH Nexus is a comprehensive Digital Humanities Talent Network and Collaboration Platform that connects academia with industry partners globally. We showcase DH programs from multiple Indian institutes and international universities, facilitate job placements, and build a thriving community of DH professionals.',
    },
    {
      category: 'About DH Nexus',
      question: 'Who can use DH Nexus?',
      answer: 'DH Nexus is open to everyone! This includes students from ANY discipline (not just humanities), researchers, professionals, corporate recruiters, academic institutions, and industry partners. Our platform is designed to be inclusive and community-driven.',
    },
    {
      category: 'About DH Nexus',
      question: 'Is DH Nexus only for IIT Jodhpur students?',
      answer: 'No! While we showcase programs including IIT Jodhpur, DH Nexus is a global platform serving students and professionals from institutions worldwide. We feature 22 Indian DH programs and 65+ global programs across 6 continents.',
    },
    {
      category: 'About DH Nexus',
      question: 'Is DH Nexus free to use?',
      answer: 'Yes! DH Nexus is completely free for students, job seekers, and researchers. We believe in democratizing access to Digital Humanities opportunities globally.',
    },

    // About Digital Humanities
    {
      category: 'About Digital Humanities',
      question: 'What is Digital Humanities (DH)?',
      answer: 'Digital Humanities is an interdisciplinary field that combines humanities disciplines with computational methods and digital tools. It includes areas like computational linguistics, NLP, cultural analytics, digital heritage, AI ethics, and data-driven humanities research.',
    },
    {
      category: 'About Digital Humanities',
      question: 'Do I need a humanities background to pursue DH?',
      answer: 'No! DH welcomes students from ALL disciplines. Whether you come from engineering, sciences, arts, or any other field, you can contribute to Digital Humanities. The field thrives on diverse perspectives and interdisciplinary collaboration.',
    },
    {
      category: 'About Digital Humanities',
      question: 'What skills do I need for Digital Humanities careers?',
      answer: 'Key skills include programming (Python, R), data analysis, natural language processing, machine learning, critical thinking, research methodology, and domain knowledge in humanities or social sciences. Many professionals learn these skills through DH programs or self-study.',
    },
    {
      category: 'About Digital Humanities',
      question: 'Is Digital Humanities technology-focused or humanities-focused?',
      answer: 'DH is technology-first and corporate-ready! While rooted in humanities questions, modern DH emphasizes computational skills, data science, AI/ML applications, and technical expertise that make graduates highly competitive in the tech industry.',
    },

    // For Job Seekers
    {
      category: 'For Job Seekers',
      question: 'How do I find jobs on DH Nexus?',
      answer: 'Visit our Job Board at dhnexus.com/jobs to browse 127+ active positions from companies like Google, Microsoft, and Netflix. You can filter by location, job type, salary range, and required skills. Create a talent profile to get matched with relevant opportunities.',
    },
    {
      category: 'For Job Seekers',
      question: 'How do I join the Talent Directory?',
      answer: 'Go to "Join Talent Network" and create your professional profile. Include your skills, education, projects, and portfolio. This makes you discoverable by recruiters actively searching for DH talent.',
    },
    {
      category: 'For Job Seekers',
      question: 'What kind of jobs are available for DH graduates?',
      answer: 'DH graduates work as NLP Engineers, Data Scientists, AI Ethics Specialists, UX Researchers, Content Strategists, Digital Archivists, Computational Linguists, Research Analysts, and more. Average starting salary is $118K with 87% placement rate.',
    },
    {
      category: 'For Job Seekers',
      question: 'Can international students use DH Nexus?',
      answer: 'Absolutely! DH Nexus serves a global community. We list jobs worldwide, including positions with visa sponsorship. Our platform connects talent from every continent with opportunities globally.',
    },

    // For Recruiters
    {
      category: 'For Recruiters',
      question: 'How can my company hire DH talent?',
      answer: 'Visit our "Hire Talent" page to post jobs, browse our Talent Directory of 2,847+ professionals, or contact us for customized recruitment solutions. We offer free job postings and premium recruitment packages.',
    },
    {
      category: 'For Recruiters',
      question: 'Why should companies hire DH professionals?',
      answer: 'DH professionals bring unique skills: technical expertise (Python, ML, NLP), critical thinking, cultural awareness, ethical AI knowledge, and interdisciplinary problem-solving. They excel in roles requiring both analytical and humanistic perspectives.',
    },
    {
      category: 'For Recruiters',
      question: 'What makes DH graduates different from traditional CS graduates?',
      answer: 'DH graduates combine technical skills with humanities training, making them excellent at: understanding user needs, ethical AI development, cross-cultural communication, research methodology, and solving complex socio-technical problems.',
    },
    {
      category: 'For Recruiters',
      question: 'How much does it cost to post a job?',
      answer: 'Basic job postings are FREE! We also offer premium packages with featured listings, direct talent matching, and dedicated recruitment support. Contact us at contact@dhnexus.com for details.',
    },

    // For Students & Academics
    {
      category: 'For Students & Academics',
      question: 'Which universities offer DH programs?',
      answer: 'Explore our Global DH Programs page featuring 87+ programs from institutions like Stanford, Oxford, UCL, NUS, IIT Jodhpur, JNU, and many more across 6 continents. Each listing includes curriculum details, admission requirements, and contact information.',
    },
    {
      category: 'For Students & Academics',
      question: 'How can my university be listed on DH Nexus?',
      answer: 'Contact us at contact@dhnexus.com with your program details. Listing is free! We welcome all institutions offering DH, computational humanities, or related interdisciplinary programs.',
    },
    {
      category: 'For Students & Academics',
      question: 'Can I contribute resources to the platform?',
      answer: 'Yes! DH Nexus is community-driven. Visit our "Submit Resource" page to share tutorials, datasets, tools, papers, or any DH-related resources. We review and publish quality contributions with proper attribution.',
    },
    {
      category: 'For Students & Academics',
      question: 'Are there research collaboration opportunities?',
      answer: 'Yes! Check our Research page for ongoing projects, collaboration calls, and funding opportunities. You can also connect with researchers through our Talent Directory and Events section.',
    },

    // Technical & Platform
    {
      category: 'Technical & Platform',
      question: 'How do I contact the DH Nexus team?',
      answer: 'Reach us via email at m24id1009@iitj.ac.in or use our Contact Form. Follow us on LinkedIn, Instagram, and Twitter for updates. We typically respond within 24-48 hours.',
    },
    {
      category: 'Technical & Platform',
      question: 'How can I contribute to building DH Nexus?',
      answer: 'Visit our "Help Us Build" page! We welcome contributions in content creation, platform development, outreach, design, and more. Join our growing community of contributors making DH accessible to everyone.',
    },
    {
      category: 'Technical & Platform',
      question: 'Is my data safe on DH Nexus?',
      answer: 'Yes! We take privacy seriously. We don\'t collect personally identifiable information (PII) without consent. Read our Privacy Policy for full details on data handling and security measures.',
    },
    {
      category: 'Technical & Platform',
      question: 'Can I delete my profile?',
      answer: 'Yes. Contact us at contact@dhnexus.com to request profile deletion. We will remove your data within 7 business days in compliance with data protection regulations.',
    },

    // Events & Community
    {
      category: 'Events & Community',
      question: 'Does DH Nexus host events?',
      answer: 'Yes! Check our Events page for upcoming webinars, workshops, conferences, hackathons, and networking sessions. We host virtual and in-person events regularly, bringing together the global DH community.',
    },
    {
      category: 'Events & Community',
      question: 'How can I stay updated on DH opportunities?',
      answer: 'Subscribe to our newsletter for weekly updates on new jobs, programs, events, and resources. Follow us on social media @dh_nexus (Instagram), LinkedIn, and Twitter for daily insights.',
    },
    {
      category: 'Events & Community',
      question: 'Can I showcase my DH project on the platform?',
      answer: 'Absolutely! Submit your project through our Success Stories page or Resources section. We love highlighting innovative work from the DH community. Exceptional projects get featured on our homepage!',
    },
  ];

  const categories = ['all', ...Array.from(new Set(faqs.map(faq => faq.category)))];

  const filteredFaqs = faqs.filter(faq => {
    const matchesCategory = activeCategory === 'all' || faq.category === activeCategory;
    const matchesSearch = searchQuery === '' || 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO 
        title="FAQ - Frequently Asked Questions | DH Nexus"
        description="Get answers to common questions about DH Nexus, Digital Humanities careers, job opportunities, programs, and how to get started in the DH field."
        keywords="DH FAQ, Digital Humanities questions, DH careers FAQ, DH Nexus help"
      />
      
      <Navigation />

      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
        {/* Hero Section */}
        <div className="relative pt-24 pb-16 px-4">
          <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 to-transparent"></div>
          
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full mb-6">
              <HelpCircle className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-300 font-medium">Frequently Asked Questions</span>
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                How Can We Help?
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Find answers to common questions about DH Nexus, Digital Humanities careers, and how to get started.
            </p>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-slate-800/50 border border-slate-700 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500/50 focus:ring-2 focus:ring-cyan-500/20"
              />
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-5xl mx-auto px-4 pb-20">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === category
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                    : 'bg-slate-800/50 text-slate-300 hover:bg-slate-800 border border-slate-700'
                }`}
              >
                {category === 'all' ? 'All Questions' : category}
              </button>
            ))}
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12 bg-slate-800/30 rounded-xl border border-slate-700">
                <Search className="w-16 h-16 text-slate-600 mx-auto mb-4" />
                <p className="text-slate-400 text-lg">No questions found matching your search.</p>
                <p className="text-slate-500 text-sm mt-2">Try different keywords or browse all categories.</p>
              </div>
            ) : (
              filteredFaqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-slate-800/30 border border-slate-700 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all"
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full px-6 py-5 flex items-start justify-between gap-4 text-left hover:bg-slate-800/50 transition-colors"
                  >
                    <div className="flex-1">
                      <div className="text-xs text-cyan-400 font-medium mb-2">{faq.category}</div>
                      <div className="text-white font-semibold text-lg">{faq.question}</div>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-cyan-400 flex-shrink-0 transition-transform ${
                        openIndex === index ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  
                  {openIndex === index && (
                    <div className="px-6 pb-5 pt-2 text-slate-300 leading-relaxed border-t border-slate-700/50">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Still Have Questions */}
          <div className="mt-16 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8 text-center">
            <Sparkles className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">Still Have Questions?</h3>
            <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
              Can't find what you're looking for? Our team is here to help you get the answers you need.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white rounded-xl hover:from-cyan-500 hover:to-blue-500 transition-all shadow-lg hover:shadow-cyan-500/50"
              >
                <Mail className="w-5 h-5" />
                Contact Us
              </Link>
              
              <a
                href="https://instagram.com/dh_nexus"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 border border-slate-700 text-white rounded-xl hover:bg-slate-700 hover:border-cyan-500/50 transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Message on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
