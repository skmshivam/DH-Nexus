import { Globe, BookOpen, ExternalLink, ArrowRight } from 'lucide-react';

const dhOrganisations = [
  { name: 'ADHO', full: 'Alliance of Digital Humanities Organizations', desc: 'Global umbrella body for DH organisations worldwide.', url: 'https://adho.org' },
  { name: 'DARIAH', full: 'Digital Research Infrastructure for Arts & Humanities', desc: 'European research infrastructure supporting arts and humanities.', url: 'https://www.dariah.eu' },
  { name: 'DHARTI', full: 'Digital Humanities Alliance for Research & Teaching Innovations', desc: 'Leading DH network for South Asia — organiser of the DHARTI biennial conference.', url: 'https://dharti.in' },
  { name: 'ACH', full: 'Association for Computers and the Humanities', desc: 'North American DH professional association.', url: 'https://ach.org' },
  { name: 'GALE', full: 'Global Alliance of Literature and Environment', desc: 'Supports DH research on literature, environment, and digital culture.', url: '#' },
  { name: 'EADH', full: 'European Association for Digital Humanities', desc: 'European-focused DH scholarly association.', url: 'https://eadh.org' },
];

const learningLinks = [
  { name: 'Programming Historian', desc: 'Peer-reviewed DH tutorials for humanists', url: 'https://programminghistorian.org' },
  { name: 'DARIAH-Campus', desc: 'Open training materials for DH research', url: 'https://campus.dariah.eu' },
  { name: 'DH101 – UCLA', desc: 'Introductory Digital Humanities course materials', url: 'http://dh101.humanities.ucla.edu' },
  { name: 'Digital Pedagogy in the Humanities', desc: 'Curated teaching artifacts for DH educators', url: 'https://digitalpedagogy.hcommons.org' },
];

export function EventsCollaboration() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* DH Orgs */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">DH Organisations & Networks</h2>
          </div>
          <p className="text-slate-500 text-sm mb-8">
            Key professional bodies and networks in the global Digital Humanities community.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {dhOrganisations.map((org) => (
              <a
                key={org.name}
                href={org.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 rounded-xl p-5 hover:shadow-md hover:border-indigo-200 transition-all group"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <span className="font-bold text-indigo-700 text-sm">{org.name}</span>
                  <ExternalLink className="w-3.5 h-3.5 text-indigo-300 group-hover:text-indigo-500 flex-shrink-0 mt-0.5 transition-colors" />
                </div>
                <p className="text-xs font-medium text-slate-500 mb-1.5 leading-snug">{org.full}</p>
                <p className="text-xs text-slate-400 leading-relaxed">{org.desc}</p>
              </a>
            ))}
          </div>
        </div>

        {/* Learning Resources */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-emerald-100 rounded-lg flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-emerald-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Free Learning Resources</h2>
          </div>
          <p className="text-slate-500 text-sm mb-7">
            Open-access platforms where you can develop DH skills at your own pace.
          </p>

          <div className="grid sm:grid-cols-2 gap-4">
            {learningLinks.map((res) => (
              <a
                key={res.name}
                href={res.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 bg-white border border-slate-200 hover:border-emerald-200 hover:shadow-sm rounded-xl p-5 group transition-all"
              >
                <div>
                  <p className="font-semibold text-slate-900 text-sm group-hover:text-emerald-700 transition-colors">{res.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{res.desc}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-emerald-500 flex-shrink-0 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-900 rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="text-white font-bold text-lg mb-1">Want to host a DH event?</p>
            <p className="text-slate-400 text-sm">DH NEXUS can help promote and organise events for the DH community in India.</p>
          </div>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-3 rounded-xl font-semibold text-sm transition-all whitespace-nowrap flex-shrink-0"
          >
            Get in Touch <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
