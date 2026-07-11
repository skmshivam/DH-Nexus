import { SEO } from '../components/SEO';
import { Clock, Calendar, TrendingUp, BookOpen, Code, Users, Globe, Award, Sparkles, ChevronRight, Filter, Search } from 'lucide-react';
import { useState } from 'react';

// Timeline data - Major DH milestones from 1000 AD to present
const timelineEvents = [
  { year: 1949, era: 'Pre-Digital', title: 'Father Busa\'s Index Thomisticus', description: 'Italian Jesuit priest Roberto Busa begins creating a concordance of Thomas Aquinas\'s works using IBM punch cards. Considered the first humanities computing project.', category: 'computing', impact: 'foundational' },
  { year: 1966, era: 'Pre-Digital', title: 'COCOA Software', description: 'Development of COCOA (Count and Concordance Generation on Atlas) at Oxford, enabling automated text analysis.', category: 'tools', impact: 'major' },
  { year: 1973, era: 'Early Computing', title: 'Association for Literary and Linguistic Computing', description: 'Founded as one of the first professional organizations for digital humanities scholars.', category: 'organization', impact: 'foundational' },
  { year: 1987, era: 'Early Computing', title: 'Text Encoding Initiative (TEI)', description: 'Established to develop guidelines for encoding machine-readable texts, becoming the standard for digital scholarly editions.', category: 'standards', impact: 'foundational' },
  { year: 1994, era: 'Internet Age', title: 'World Wide Web Opens to Public', description: 'The web becomes publicly accessible, revolutionizing how humanities scholars share and access digital resources.', category: 'technology', impact: 'transformative' },
  { year: 1999, era: 'Internet Age', title: 'Google Books Project Begins', description: 'Google starts digitizing millions of books, creating unprecedented access to historical texts for computational analysis.', category: 'digitization', impact: 'transformative' },
  { year: 2004, era: 'Web 2.0', title: 'Companion to Digital Humanities', description: 'Blackwell publishes the first comprehensive guide to the field, helping to define "Digital Humanities" as a discipline.', category: 'publication', impact: 'major' },
  { year: 2006, era: 'Web 2.0', title: 'Digital Humanities Quarterly Launched', description: 'Open-access journal dedicated to DH scholarship, providing a peer-reviewed venue for the field.', category: 'publication', impact: 'major' },
  { year: 2008, era: 'Web 2.0', title: 'Zotero 1.0 Released', description: 'Free citation management tool becomes essential for digital research workflows in humanities.', category: 'tools', impact: 'major' },
  { year: 2010, era: 'Social Media', title: 'HathiTrust Digital Library', description: 'Partnership of major research institutions creates a digital preservation repository with 17+ million volumes.', category: 'digitization', impact: 'major' },
  { year: 2011, era: 'Social Media', title: 'Stanford Literary Lab Founded', description: 'Franco Moretti establishes the Literary Lab, pioneering "distant reading" and computational literary analysis.', category: 'research', impact: 'major' },
  { year: 2013, era: 'Big Data', title: 'Digital Public Library of America (DPLA)', description: 'Launches to provide free access to millions of digitized items from libraries, archives, and museums across the US.', category: 'digitization', impact: 'transformative' },
  { year: 2015, era: 'Big Data', title: 'European Time Machine Project', description: 'Ambitious initiative to create a large-scale digitization and AI simulation of European history.', category: 'research', impact: 'major' },
  { year: 2016, era: 'AI Revolution', title: 'Deep Learning for Text Analysis', description: 'Neural networks like Word2Vec and LSTM models become accessible for humanities research, enabling new forms of semantic analysis.', category: 'technology', impact: 'transformative' },
  { year: 2018, era: 'AI Revolution', title: 'BERT and Transformer Models', description: 'Google releases BERT, revolutionizing natural language processing and enabling sophisticated cultural analytics.', category: 'technology', impact: 'transformative' },
  { year: 2019, era: 'AI Revolution', title: 'Climate Change in DH Debate', description: 'Field begins serious discussion of environmental impact of large-scale computing and digital preservation.', category: 'ethics', impact: 'major' },
  { year: 2020, era: 'AI Revolution', title: 'Pandemic Accelerates Digital Humanities', description: 'COVID-19 forces rapid adoption of digital tools for teaching, collaboration, and public engagement in humanities.', category: 'education', impact: 'transformative' },
  { year: 2021, era: 'Generative AI', title: 'NFTs and Digital Cultural Heritage', description: 'Museums and archives explore blockchain technology for provenance and preservation.', category: 'technology', impact: 'moderate' },
  { year: 2022, era: 'Generative AI', title: 'ChatGPT Launches', description: 'OpenAI\'s ChatGPT brings LLMs to mainstream, sparking intense debate about AI\'s role in humanities research and education.', category: 'technology', impact: 'transformative' },
  { year: 2023, era: 'Generative AI', title: 'AI Ethics Becomes Central to DH', description: 'Digital humanists lead in developing ethical frameworks for AI, addressing bias, representation, and cultural sensitivity.', category: 'ethics', impact: 'transformative' },
  { year: 2024, era: 'Generative AI', title: 'Multimodal AI for Cultural Analysis', description: 'GPT-4 Vision and similar models enable new forms of visual culture analysis and art history research.', category: 'technology', impact: 'major' },
  { year: 2025, era: 'AI Integration', title: 'DH Programs Expand Globally', description: 'India, Latin America, and Africa see major growth in DH programs as the field becomes truly global.', category: 'education', impact: 'major' },
  { year: 2026, era: 'AI Integration', title: 'DH Nexus Launches', description: 'Comprehensive platform connecting students, researchers, and industry partners worldwide, emphasizing AI-literate humanities professionals.', category: 'organization', impact: 'major' },
];

const eras = [
  { name: 'Pre-Digital', years: '1949-1972', color: 'from-slate-500 to-slate-600', description: 'Punch cards and mainframes' },
  { name: 'Early Computing', years: '1973-1993', color: 'from-blue-500 to-blue-600', description: 'Personal computers emerge' },
  { name: 'Internet Age', years: '1994-2003', color: 'from-cyan-500 to-cyan-600', description: 'World Wide Web revolution' },
  { name: 'Web 2.0', years: '2004-2009', color: 'from-green-500 to-green-600', description: 'Social and collaborative' },
  { name: 'Social Media', years: '2010-2012', color: 'from-yellow-500 to-yellow-600', description: 'Networked humanities' },
  { name: 'Big Data', years: '2013-2015', color: 'from-orange-500 to-orange-600', description: 'Massive digitization' },
  { name: 'AI Revolution', years: '2016-2020', color: 'from-red-500 to-red-600', description: 'Machine learning arrives' },
  { name: 'Generative AI', years: '2021-2024', color: 'from-purple-500 to-purple-600', description: 'LLMs transform research' },
  { name: 'AI Integration', years: '2025-Present', color: 'from-pink-500 to-pink-600', description: 'Humanities leads ethics' },
];

const categories = [
  { id: 'all', label: 'All Events', icon: Globe },
  { id: 'technology', label: 'Technology', icon: Code },
  { id: 'organization', label: 'Organizations', icon: Users },
  { id: 'research', label: 'Research', icon: BookOpen },
  { id: 'tools', label: 'Tools', icon: Sparkles },
  { id: 'education', label: 'Education', icon: Award },
  { id: 'ethics', label: 'Ethics', icon: TrendingUp },
];

export function TimelinePage() {
  const [selectedEra, setSelectedEra] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredEvents = timelineEvents.filter(event => {
    if (selectedEra !== 'all' && event.era !== selectedEra) return false;
    if (selectedCategory !== 'all' && event.category !== selectedCategory) return false;
    if (searchQuery && !event.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !event.description.toLowerCase().includes(searchQuery.toLowerCase())) return false;
    return true;
  });

  const getImpactBadge = (impact: string) => {
    switch (impact) {
      case 'transformative':
        return 'bg-gradient-to-r from-purple-500 to-pink-500 text-white';
      case 'foundational':
        return 'bg-gradient-to-r from-indigo-500 to-purple-500 text-white';
      case 'major':
        return 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white';
      default:
        return 'bg-slate-200 text-slate-700';
    }
  };

  const getCategoryIcon = (category: string) => {
    const cat = categories.find(c => c.id === category);
    return cat ? cat.icon : Globe;
  };

  return (
    <>
      <SEO 
        title="DH Timeline | DH Nexus"
        description="Explore the evolution of Digital Humanities from 1949 to present through our interactive chronological timeline featuring major milestones, technologies, and transformative moments."
        keywords="DH history, digital humanities timeline, DH evolution, humanities computing, DH milestones, chronological view"
      />

      <div className="min-h-screen bg-gradient-to-b from-white via-slate-50 to-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-2 rounded-full mb-6">
                <Clock className="w-5 h-5" />
                <span>Chronological Visualization</span>
              </div>
              <h1 className="text-5xl lg:text-6xl mb-6">
                The Evolution of Digital Humanities
              </h1>
              <p className="text-xl text-indigo-100 max-w-3xl mx-auto leading-relaxed">
                Journey through 75+ years of innovation, from punch cards to generative AI, and discover how technology has transformed humanities research
              </p>
            </div>
          </div>
        </section>

        {/* Stats Banner */}
        <section className="bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-indigo-600 mb-1">{timelineEvents.length}</div>
                <div className="text-sm text-slate-600">Major Events</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-1">77</div>
                <div className="text-sm text-slate-600">Years Covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-600 mb-1">{eras.length}</div>
                <div className="text-sm text-slate-600">Distinct Eras</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-cyan-600 mb-1">6</div>
                <div className="text-sm text-slate-600">Transformative Moments</div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 p-6 mb-8">
              <div className="flex items-center gap-4 mb-6">
                <Filter className="w-6 h-6 text-slate-600" />
                <h2 className="text-2xl text-slate-900">Filter Timeline</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                {/* Search */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Search events..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                {/* Era Filter */}
                <select
                  value={selectedEra}
                  onChange={(e) => setSelectedEra(e.target.value)}
                  className="px-4 py-3 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none"
                >
                  <option value="all">All Eras</option>
                  {eras.map(era => (
                    <option key={era.name} value={era.name}>{era.name} ({era.years})</option>
                  ))}
                </select>
              </div>

              {/* Category Filters */}
              <div className="flex flex-wrap gap-3">
                {categories.map(cat => {
                  const Icon = cat.icon;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl transition-all ${
                        selectedCategory === cat.id
                          ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg'
                          : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      <span className="text-sm font-medium">{cat.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Era Overview */}
        <section className="py-12 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl text-slate-900 mb-8 text-center">Eras of Digital Humanities</h2>
            <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-4">
              {eras.map((era, idx) => (
                <button
                  key={era.name}
                  onClick={() => setSelectedEra(era.name)}
                  className={`bg-white rounded-xl p-6 shadow-lg border-2 transition-all hover:scale-105 ${
                    selectedEra === era.name ? 'border-indigo-500' : 'border-slate-200'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${era.color} flex items-center justify-center text-white font-bold text-lg mb-3 mx-auto`}>
                    {idx + 1}
                  </div>
                  <h3 className="text-lg text-slate-900 mb-1 font-semibold text-center">{era.name}</h3>
                  <p className="text-sm text-slate-600 mb-2 text-center">{era.years}</p>
                  <p className="text-xs text-slate-500 text-center">{era.description}</p>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Visualization */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl text-slate-900 mb-8">
              Timeline Events ({filteredEvents.length})
            </h2>

            {/* Timeline */}
            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"></div>

              {/* Events */}
              <div className="space-y-8">
                {filteredEvents.map((event, idx) => {
                  const Icon = getCategoryIcon(event.category);
                  const eraInfo = eras.find(e => e.name === event.era);
                  
                  return (
                    <div key={idx} className="relative pl-20">
                      {/* Year Marker */}
                      <div className={`absolute left-0 top-0 w-16 h-16 rounded-full bg-gradient-to-br ${eraInfo?.color || 'from-slate-500 to-slate-600'} flex items-center justify-center text-white font-bold shadow-lg border-4 border-white`}>
                        <span className="text-sm">{event.year}</span>
                      </div>

                      {/* Event Card */}
                      <div className="bg-white rounded-2xl shadow-lg border-2 border-slate-200 p-6 hover:shadow-xl hover:border-indigo-300 transition-all group">
                        <div className="flex items-start justify-between mb-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${eraInfo?.color || 'from-slate-500 to-slate-600'} flex items-center justify-center`}>
                                <Icon className="w-5 h-5 text-white" />
                              </div>
                              <div>
                                <h3 className="text-xl text-slate-900 font-bold group-hover:text-indigo-600 transition-colors">
                                  {event.title}
                                </h3>
                                <p className="text-sm text-slate-600">{event.era}</p>
                              </div>
                            </div>
                          </div>
                          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getImpactBadge(event.impact)}`}>
                            {event.impact}
                          </span>
                        </div>
                        
                        <p className="text-slate-700 leading-relaxed mb-4">
                          {event.description}
                        </p>

                        <div className="flex items-center gap-4">
                          <span className="text-sm text-slate-500">
                            <Calendar className="w-4 h-4 inline mr-1" />
                            {event.year}
                          </span>
                          <span className="px-3 py-1 bg-slate-100 rounded-full text-xs text-slate-700 capitalize">
                            {event.category}
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Impact Categories */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
          <div className="max-w-7xl mx-auto px-6">
            <h2 className="text-3xl text-slate-900 mb-8 text-center">Impact Levels</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-purple-200">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                  T
                </div>
                <h3 className="text-2xl text-slate-900 mb-4 text-center">Transformative</h3>
                <p className="text-slate-600 text-center mb-4">
                  Events that fundamentally changed how humanities research is conducted
                </p>
                <div className="text-center text-3xl font-bold text-purple-600">
                  {timelineEvents.filter(e => e.impact === 'transformative').length}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-indigo-200">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                  F
                </div>
                <h3 className="text-2xl text-slate-900 mb-4 text-center">Foundational</h3>
                <p className="text-slate-600 text-center mb-4">
                  Events that established core infrastructure and standards for the field
                </p>
                <div className="text-center text-3xl font-bold text-indigo-600">
                  {timelineEvents.filter(e => e.impact === 'foundational').length}
                </div>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-cyan-200">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center text-white text-2xl font-bold mb-4 mx-auto">
                  M
                </div>
                <h3 className="text-2xl text-slate-900 mb-4 text-center">Major</h3>
                <p className="text-slate-600 text-center mb-4">
                  Significant developments that expanded capabilities or reach
                </p>
                <div className="text-center text-3xl font-bold text-cyan-600">
                  {timelineEvents.filter(e => e.impact === 'major').length}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What's Next */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-3xl p-12 text-white text-center shadow-2xl">
              <TrendingUp className="w-16 h-16 mx-auto mb-6" />
              <h2 className="text-3xl lg:text-4xl mb-6">What's Next for DH?</h2>
              <p className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto leading-relaxed">
                As we enter the AI Integration era, digital humanists are leading the conversation on ethical AI development, cultural sensitivity in machine learning, and ensuring technology serves humanity's deepest questions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="/career-resources" className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-xl hover:bg-indigo-50 transition-all transform hover:scale-105 shadow-lg">
                  <Award className="w-5 h-5" />
                  Explore DH Careers
                </a>
                <a href="/research" className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white px-8 py-4 rounded-xl transition-all">
                  <BookOpen className="w-5 h-5" />
                  View Research Projects
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
