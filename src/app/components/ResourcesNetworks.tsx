import { BookOpen, Users, Award, Wrench } from 'lucide-react';

const dhAssociations = [
  { name: 'ADHO (Alliance of Digital Humanities Organizations)', description: 'Umbrella organization for DH organizations worldwide', url: 'https://adho.org' },
  { name: 'EADH (European Association for Digital Humanities)', description: 'European DH network', url: 'https://eadh.org' },
  { name: 'ACDH (Australasian Association for Digital Humanities)', description: 'DH organization for Australia and New Zealand', url: 'https://aa-dh.org' },
  { name: 'JADH (Japanese Association for Digital Humanities)', description: 'Japanese DH network', url: 'https://www.jadh.org' },
  { name: 'CenterNet', description: 'International network of DH centers', url: 'https://dhcenternet.org' },
  { name: 'DARIAH', description: 'Digital Research Infrastructure for Arts and Humanities', url: 'https://www.dariah.eu' }
];

const conferences = [
  { name: 'DH (ADHO Annual Conference)', frequency: 'Annual', focus: 'Global DH research and methodologies' },
  { name: 'DHARTI (Digital Humanities Alliance for Research and Teaching Innovations)', frequency: 'Biennial', focus: 'South Asian DH' },
  { name: 'ACH (Association for Computers and the Humanities)', frequency: 'Annual', focus: 'North American DH' },
  { name: 'THATCamp (The Humanities and Technology Camp)', frequency: 'Various', focus: 'Unconference format, practical skills' },
  { name: 'Digital Humanities Summer Institute (DHSI)', frequency: 'Annual', focus: 'Training and workshops' }
];

const toolDirectories = [
  { category: 'Text Analysis', tools: ['Voyant Tools', 'AntConc', 'NLTK', 'spaCy', 'MALLET'] },
  { category: 'Visualization', tools: ['Gephi', 'Palladio', 'RAWGraphs', 'D3.js', 'Tableau Public'] },
  { category: 'Mapping', tools: ['ArcGIS', 'QGIS', 'Google My Maps', 'Carto', 'Mapbox'] },
  { category: 'Digital Publishing', tools: ['Omeka', 'WordPress', 'Scalar', 'Manifold', 'PubPub'] },
  { category: 'Annotation', tools: ['Hypothesis', 'Recogito', 'ELAN', 'WebAnnotator'] },
  { category: 'Digital Editions', tools: ['TEI Publisher', 'Edition Visualization Technology (EVT)', 'Versioning Machine'] }
];

const learningPlatforms = [
  { name: 'Programming Historian', description: 'Peer-reviewed tutorials for humanists', url: 'https://programminghistorian.org' },
  { name: 'DARIAH-Campus', description: 'Training and resources for DH', url: 'https://campus.dariah.eu' },
  { name: 'Digital Pedagogy in the Humanities', description: 'Curated collection of teaching artifacts', url: 'https://digitalpedagogy.hcommons.org' },
  { name: 'DH101', description: 'Introductory DH course materials', url: 'http://dh101.humanities.ucla.edu' }
];

export function ResourcesNetworks() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">
            Resources & Networks
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Essential DH associations, conferences, tools, and learning platforms
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <Users className="w-8 h-8 text-indigo-600" />
              <h3 className="text-3xl text-slate-900">DH Associations</h3>
            </div>
            <div className="space-y-4">
              {dhAssociations.map((assoc, index) => (
                <div key={index} className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl p-6 border border-indigo-200">
                  <h4 className="text-lg text-slate-900 mb-2">{assoc.name}</h4>
                  <p className="text-sm text-slate-600 mb-3">{assoc.description}</p>
                  <a 
                    href={assoc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-indigo-600 hover:underline"
                  >
                    Visit Website →
                  </a>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-8">
              <Award className="w-8 h-8 text-purple-600" />
              <h3 className="text-3xl text-slate-900">Major DH Conferences</h3>
            </div>
            <div className="space-y-4">
              {conferences.map((conf, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-md border border-slate-200">
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="text-lg text-slate-900">{conf.name}</h4>
                    <span className="bg-purple-100 text-purple-700 text-xs px-3 py-1 rounded-full">
                      {conf.frequency}
                    </span>
                  </div>
                  <p className="text-sm text-slate-600">{conf.focus}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-2xl p-12 text-white mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Wrench className="w-10 h-10" />
            <h3 className="text-3xl">DH Tool Directories</h3>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {toolDirectories.map((dir, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6">
                <div className="text-xl mb-4">{dir.category}</div>
                <ul className="space-y-2">
                  {dir.tools.map((tool, tIndex) => (
                    <li key={tIndex} className="text-sm text-indigo-200">• {tool}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div>
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-green-600" />
            <h3 className="text-3xl text-slate-900">Learning Platforms</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {learningPlatforms.map((platform, index) => (
              <div key={index} className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                <h4 className="text-xl text-slate-900 mb-2">{platform.name}</h4>
                <p className="text-slate-600 mb-3">{platform.description}</p>
                <a 
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Explore Resources →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
