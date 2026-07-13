import { Linkedin, Mail, Instagram, Github, ExternalLink, Users } from 'lucide-react';
import shivamImage from 'figma:asset/560f6b6a11e3e715b5e3cf15fa0fa15b09413e41.png';
import amanImage from 'figma:asset/290eac393af3502126b2889787cd3cc0e28c4032.png';
import anshikaImage from 'figma:asset/52d97cd76544faa139a5e80d358f932b1c47d00f.png';

interface Person {
  name: string;
  role: string;
  tag: 'Core Team' | 'Intern' | 'Collaborator' | 'Advisor';
  bio: string;
  image?: string;
  initials?: string;
  color: string;
  links?: {
    linkedin?: string;
    email?: string;
    instagram?: string;
    github?: string;
    website?: string;
  };
}

const tagStyles: Record<Person['tag'], string> = {
  'Core Team':    'bg-indigo-100 text-indigo-700 border border-indigo-200',
  'Intern':       'bg-emerald-100 text-emerald-700 border border-emerald-200',
  'Collaborator': 'bg-purple-100 text-purple-700 border border-purple-200',
  'Advisor':      'bg-amber-100 text-amber-700 border border-amber-200',
};

const people: Person[] = [
  // ── Core Team ──────────────────────────────────────
  {
    name: 'Shivam Kumar',
    role: 'Platform Head',
    tag: 'Core Team',
    bio: 'Leading DH Nexus to connect aspirants with authentic insights and opportunities in Digital Humanities. Passionate about making DH accessible to everyone.',
    image: shivamImage,
    color: 'indigo',
    links: {
      linkedin: 'https://www.linkedin.com/in/shivam-kumar-skm14',
      instagram: 'https://www.instagram.com/skmshivam14',
      email: 'm24id1009@iitj.ac.in',
      website: 'https://digitalhumanities.world',
    },
  },
  {
    name: 'Anshika Kashyap',
    role: 'Content & Research Head',
    tag: 'Core Team',
    bio: 'PG Placement Representative, content strategist, and policy researcher. Co-led QuCode (quantum computing education) and key contributor to Agen AI.',
    image: anshikaImage,
    color: 'purple',
    links: {
      linkedin: 'https://www.linkedin.com/in/anshika-kashyap',
    },
  },
  {
    name: 'Aman Badayuni',
    role: 'Social & Tech Head',
    tag: 'Core Team',
    bio: 'DH Scholar combining a physics background with digital humanities expertise. Leading social media strategy and technical development for DH Nexus.',
    image: amanImage,
    color: 'blue',
    links: {
      linkedin: 'https://www.linkedin.com/in/aman-badayuni',
    },
  },

  // ── Add more people below ──────────────────────────
  // Example placeholders — replace with real people
  // {
  //   name: 'Jane Doe',
  //   role: 'Research Intern',
  //   tag: 'Intern',
  //   bio: 'Short description of what they do / contribute.',
  //   initials: 'JD',
  //   color: 'emerald',
  //   links: { linkedin: 'https://linkedin.com/in/...' },
  // },
];

function PersonCard({ person }: { person: Person }) {
  const colorMap: Record<string, string> = {
    indigo:  'from-indigo-500 to-indigo-700',
    purple:  'from-purple-500 to-purple-700',
    blue:    'from-blue-500 to-blue-700',
    emerald: 'from-emerald-500 to-emerald-700',
    pink:    'from-pink-500 to-pink-700',
    amber:   'from-amber-500 to-amber-700',
  };

  return (
    <div className="group bg-white rounded-2xl border border-slate-200 hover:border-slate-300 hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col">
      {/* Photo / Initials */}
      <div className="relative h-52 overflow-hidden bg-slate-100">
        {person.image ? (
          <img
            src={person.image}
            alt={person.name}
            className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${colorMap[person.color] ?? colorMap.indigo} flex items-center justify-center`}>
            <span className="text-5xl font-bold text-white/90">{person.initials ?? person.name.slice(0, 2).toUpperCase()}</span>
          </div>
        )}

        {/* Tag pill */}
        <span className={`absolute top-3 left-3 text-[11px] font-semibold px-2.5 py-1 rounded-full backdrop-blur-sm ${tagStyles[person.tag]}`}>
          {person.tag}
        </span>
      </div>

      {/* Info */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="font-bold text-slate-900 text-lg leading-tight">{person.name}</h3>
        <p className="text-sm font-medium text-indigo-600 mb-3">{person.role}</p>
        <p className="text-slate-500 text-sm leading-relaxed flex-1">{person.bio}</p>

        {/* Social links */}
        {person.links && (
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-slate-100">
            {person.links.linkedin && (
              <a href={person.links.linkedin} target="_blank" rel="noopener noreferrer"
                aria-label={`${person.name} on LinkedIn`}
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-indigo-100 hover:text-indigo-600 flex items-center justify-center text-slate-500 transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
            )}
            {person.links.email && (
              <a href={`mailto:${person.links.email}`}
                aria-label={`Email ${person.name}`}
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-blue-100 hover:text-blue-600 flex items-center justify-center text-slate-500 transition-colors">
                <Mail className="w-4 h-4" />
              </a>
            )}
            {person.links.instagram && (
              <a href={person.links.instagram} target="_blank" rel="noopener noreferrer"
                aria-label={`${person.name} on Instagram`}
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-pink-100 hover:text-pink-600 flex items-center justify-center text-slate-500 transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
            )}
            {person.links.github && (
              <a href={person.links.github} target="_blank" rel="noopener noreferrer"
                aria-label={`${person.name} on GitHub`}
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-slate-200 hover:text-slate-800 flex items-center justify-center text-slate-500 transition-colors">
                <Github className="w-4 h-4" />
              </a>
            )}
            {person.links.website && (
              <a href={person.links.website} target="_blank" rel="noopener noreferrer"
                aria-label={`${person.name}'s website`}
                className="w-8 h-8 rounded-lg bg-slate-100 hover:bg-emerald-100 hover:text-emerald-600 flex items-center justify-center text-slate-500 transition-colors">
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export function DHNexusPeople() {
  const coreTeam    = people.filter(p => p.tag === 'Core Team');
  const interns     = people.filter(p => p.tag === 'Intern');
  const collabs     = people.filter(p => p.tag === 'Collaborator');
  const advisors    = people.filter(p => p.tag === 'Advisor');

  return (
    <section className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-5 py-2 rounded-full text-sm font-semibold mb-4">
            <Users className="w-4 h-4" />
            The People Behind DH Nexus
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-3">
            Meet Our Team
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-lg">
            DH Nexus is built by students, researchers, and collaborators who believe in the power of Digital Humanities. Everyone here contributes their time and expertise to grow this community.
          </p>
        </div>

        {/* Core Team */}
        <div className="mb-14">
          <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
            <span className="w-1 h-6 bg-indigo-500 rounded-full inline-block" />
            Core Team
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreTeam.map(p => <PersonCard key={p.name} person={p} />)}
          </div>
        </div>

        {/* Interns */}
        {interns.length > 0 && (
          <div className="mb-14">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-emerald-500 rounded-full inline-block" />
              Interns
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {interns.map(p => <PersonCard key={p.name} person={p} />)}
            </div>
          </div>
        )}

        {/* Collaborators */}
        {collabs.length > 0 && (
          <div className="mb-14">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-purple-500 rounded-full inline-block" />
              Collaborators
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {collabs.map(p => <PersonCard key={p.name} person={p} />)}
            </div>
          </div>
        )}

        {/* Advisors */}
        {advisors.length > 0 && (
          <div className="mb-14">
            <h3 className="text-xl font-bold text-slate-800 mb-6 flex items-center gap-2">
              <span className="w-1 h-6 bg-amber-500 rounded-full inline-block" />
              Advisors
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {advisors.map(p => <PersonCard key={p.name} person={p} />)}
            </div>
          </div>
        )}

        {/* Join CTA */}
        <div className="mt-10 bg-gradient-to-r from-indigo-50 to-purple-50 border border-indigo-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-slate-900 mb-2">Want to Contribute?</h3>
          <p className="text-slate-600 mb-6 max-w-xl mx-auto">
            We welcome interns, collaborators, and volunteers who are passionate about Digital Humanities. Whether you're a student, researcher, or professional — there's a place for you here.
          </p>
          <a href="https://forms.gle/uwmUJyDbyq5VVLUx7" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold rounded-xl transition-all hover:scale-105 shadow-lg shadow-indigo-200">
            <Users className="w-5 h-5" />
            Apply to Join the Team
          </a>
        </div>
      </div>
    </section>
  );
}
