import { Calendar, MapPin, ExternalLink, Users, Globe, ArrowRight } from 'lucide-react';

// Real DH events in India – past documented events
const pastIndiaEvents = [
  {
    name: 'DHARTI Biennial Conference 2024',
    organiser: 'IIT Jodhpur · DHARTI',
    date: 'Dec 10–13, 2024',
    location: 'IIT Jodhpur, Rajasthan',
    attendance: '200+ participants',
    highlights: '9 plenary speakers · QGIS workshop · Multilingual audiovisual data analysis · Sponsored by GALE',
    tag: 'Conference',
    tagColor: 'bg-indigo-100 text-indigo-700',
  },
  {
    name: 'DH Lecture Series with Christ University',
    organiser: 'IIT Jodhpur · CHRIST University Pune-Lavasa',
    date: 'Oct–Nov 2024',
    location: 'Online / Pune, Maharashtra',
    attendance: '100+ attendees',
    highlights: 'Emerging DH trends · Interdisciplinary collaborative discussions',
    tag: 'Lecture Series',
    tagColor: 'bg-rose-100 text-rose-700',
  },
  {
    name: 'Workshop on Disaster Resilience & Cultural Heritage',
    organiser: 'IIT Jodhpur · NIDM · IGNCA · Mehrangarh Museum Trust',
    date: 'Jan 17–18, 2024',
    location: 'Jodhpur, Rajasthan',
    attendance: '75 participants',
    highlights: 'Heritage preservation · Disaster documentation methods · Cross-institutional collaboration',
    tag: 'Workshop',
    tagColor: 'bg-amber-100 text-amber-700',
  },
  {
    name: 'IIT (ISM) Dhanbad DH Conference',
    organiser: 'IIT (ISM) Dhanbad',
    date: '2024',
    location: 'Dhanbad, Jharkhand',
    attendance: 'DH scholars & researchers',
    highlights: 'Digital Humanities research from across India · Student and faculty presentations',
    tag: 'Conference',
    tagColor: 'bg-emerald-100 text-emerald-700',
  },
];

// Recurring DH events across India and globally that DH practitioners attend
const recurringEvents = [
  {
    name: 'DHARTI Biennial Conference',
    frequency: 'Every 2 years',
    focus: 'South Asian Digital Humanities — largest DH conference in India',
    link: 'https://dharti.in',
  },
  {
    name: 'DH (ADHO Annual Conference)',
    frequency: 'Annual · Global',
    focus: 'International DH research, methodologies, and community',
    link: 'https://adho.org/conference',
  },
  {
    name: 'Digital Humanities Summer Institute (DHSI)',
    frequency: 'Annual · Victoria, Canada',
    focus: 'Intensive hands-on training in DH methods and tools',
    link: 'https://dhsi.org',
  },
  {
    name: 'ACH Conference',
    frequency: 'Annual · North America',
    focus: 'Association for Computers and the Humanities',
    link: 'https://ach.org',
  },
  {
    name: 'THATCamp',
    frequency: 'Various',
    focus: 'Unconference format — practical skills and open discussions',
    link: 'https://thatcamp.org',
  },
];

export function EventsOpportunities() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Past Events in India */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
              <MapPin className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Recent DH Events in India</h2>
          </div>
          <p className="text-slate-500 text-sm mb-8 ml-13">
            Notable Digital Humanities events that have taken place across India.
          </p>

          <div className="grid md:grid-cols-2 gap-5">
            {pastIndiaEvents.map((event) => (
              <div key={event.name} className="bg-white rounded-2xl border border-slate-200 hover:border-indigo-200 hover:shadow-md transition-all p-6">
                <div className="flex items-start justify-between gap-3 mb-3">
                  <h3 className="font-bold text-slate-900 text-base leading-snug">{event.name}</h3>
                  <span className={`flex-shrink-0 text-[10px] font-bold px-2.5 py-1 rounded-full ${event.tagColor}`}>
                    {event.tag}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
                  <Calendar className="w-3.5 h-3.5" />
                  {event.date}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-3">
                  <MapPin className="w-3.5 h-3.5" />
                  {event.location} · {event.attendance}
                </div>
                <p className="text-xs text-slate-400 leading-relaxed mb-2">{event.organiser}</p>
                <p className="text-xs text-indigo-600 leading-relaxed">{event.highlights}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Recurring DH Events */}
        <div className="mb-14">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900">Recurring DH Events</h2>
          </div>
          <p className="text-slate-500 text-sm mb-7">
            Established conferences and gatherings the DH community participates in regularly.
          </p>

          <div className="space-y-3">
            {recurringEvents.map((event) => (
              <a
                key={event.name}
                href={event.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 bg-white rounded-xl border border-slate-200 hover:border-purple-200 hover:shadow-sm transition-all p-5 group"
              >
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-slate-900 text-sm group-hover:text-purple-700 transition-colors">{event.name}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{event.frequency} · {event.focus}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-slate-300 group-hover:text-purple-500 flex-shrink-0 transition-colors" />
              </a>
            ))}
          </div>
        </div>

        {/* Submit / Notify CTA */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-5">
          <div>
            <p className="font-bold text-lg mb-1">Know of a DH event we missed?</p>
            <p className="text-indigo-100 text-sm">Help us keep the community calendar accurate and up to date.</p>
          </div>
          <a
            href="https://forms.gle/bhv57KaTLdVehiDg9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-indigo-700 hover:bg-indigo-50 px-6 py-3 rounded-xl font-semibold text-sm transition-all whitespace-nowrap flex-shrink-0"
          >
            <Users className="w-4 h-4" /> Submit an Event <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
}
