import { Rocket, Heart, Cpu, Globe } from 'lucide-react';

const dhStartups = [
  { name: 'Zooniverse', sector: 'Citizen Science & Crowdsourcing', description: 'Platform for people-powered research in humanities and sciences' },
  { name: 'Replica Studios', sector: 'AI Voice & Media', description: 'AI voice actors for digital storytelling and games' },
  { name: 'Artivive', sector: 'AR for Art', description: 'Augmented reality platform for artists and cultural institutions' },
  { name: 'Historypin', sector: 'Digital Heritage', description: 'Platform for sharing and discovering local history through images' }
];

const culturalTechCompanies = [
  { name: 'Google Arts & Culture', focus: 'Digital heritage, virtual exhibitions, AI for art analysis' },
  { name: 'Smartify', focus: 'Museum guide app using image recognition' },
  { name: 'CultureConnect', focus: 'Platform connecting artists with audiences through data' },
  { name: 'Timelooper', focus: 'VR/AR historical experiences for tourism and education' }
];

const humanCenteredAI = [
  { name: 'Anthropic', focus: 'AI safety and interpretability with ethical focus' },
  { name: 'Hugging Face', focus: 'Open-source NLP tools, democratizing AI' },
  { name: 'Sentropy', focus: 'Content moderation using AI with human oversight' },
  { name: 'Ada', focus: 'Accessible, conversational AI for customer service' }
];

const innovationPartners = [
  { type: 'EdTech', companies: ['Coursera', 'Khan Academy', 'Duolingo'] },
  { type: 'Media & Publishing', companies: ['Medium', 'Substack', 'The Pudding'] },
  { type: 'Cultural Analytics', companies: ['Spotify (cultural data)', 'Netflix (content analytics)', 'Google Trends'] },
  { type: 'Heritage Tech', companies: ['CyArk', 'Sketchfab (3D heritage)', 'Arches (heritage management)'] }
];

export function StartupsEcosystem() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">
            Startups & Industry Ecosystem
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            DH-related startups, cultural-tech companies, and innovation partners
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-12 text-white mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Rocket className="w-10 h-10" />
            <h3 className="text-3xl">The DH Startup Opportunity</h3>
          </div>
          <p className="text-xl text-indigo-100 mb-8">
            Digital Humanities graduates are uniquely positioned to work in or found startups at the intersection of culture, technology, and society. From AI ethics to digital heritage, from EdTech to cultural analytics, the DH skillset opens doors to emerging markets.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl mb-2">Cultural Tech</div>
              <div className="text-indigo-200">Museums, heritage, arts, media</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl mb-2">Human-AI</div>
              <div className="text-indigo-200">Ethical AI, content moderation, NLP</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl mb-2">EdTech</div>
              <div className="text-indigo-200">Digital pedagogy, learning platforms</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Rocket className="w-8 h-8 text-blue-600" />
              <h3 className="text-3xl text-slate-900">DH-Related Startups</h3>
            </div>
            <div className="space-y-4">
              {dhStartups.map((startup, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg text-slate-900">{startup.name}</h4>
                    <span className="bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full">
                      {startup.sector}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">{startup.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <Heart className="w-8 h-8 text-pink-600" />
              <h3 className="text-3xl text-slate-900">Cultural-Tech Companies</h3>
            </div>
            <div className="space-y-4">
              {culturalTechCompanies.map((company, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                  <h4 className="text-lg text-slate-900 mb-2">{company.name}</h4>
                  <p className="text-sm text-slate-600">{company.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-12 border border-purple-200 mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Cpu className="w-10 h-10 text-purple-600" />
            <h3 className="text-3xl text-slate-900">Human-Centered AI Companies</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {humanCenteredAI.map((company, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-slate-200">
                <h4 className="text-xl text-slate-900 mb-2">{company.name}</h4>
                <p className="text-sm text-slate-600">{company.focus}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <Globe className="w-8 h-8 text-green-600" />
            <h3 className="text-3xl text-slate-900">Innovation Partners by Sector</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {innovationPartners.map((partner, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <h4 className="text-xl text-slate-900 mb-4">{partner.type}</h4>
                <div className="flex flex-wrap gap-2">
                  {partner.companies.map((company, cIndex) => (
                    <span 
                      key={cIndex}
                      className="bg-white text-green-700 text-sm px-3 py-1 rounded-full border border-green-200"
                    >
                      {company}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
