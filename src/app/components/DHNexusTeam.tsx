import { Linkedin, Mail, Instagram, ExternalLink, Users, ArrowRight, MapPin } from 'lucide-react';
import shivamImage from 'figma:asset/560f6b6a11e3e715b5e3cf15fa0fa15b09413e41.png';
import amanImage from 'figma:asset/290eac393af3502126b2889787cd3cc0e28c4032.png';
import anshikaImage from '../../imports/1781269048660.png';
import anirbanImage from '../../imports/1777237478413.png';
import simantaImage from '../../imports/simanta_nandi.png';
import vaishnaviImage from '../../imports/vaishanavi.png';
import aaravImage from '../../imports/WhatsApp_Image_2026-07-10_at_4.02.58_PM__1_.jpeg';
import chakrashenImage from '../../imports/WhatsApp_Image_2026-07-10_at_4.03.10_PM__2_.jpeg';

type Links = {
  linkedin?: string;
  email?: string;
  instagram?: string;
  website?: string;
};

interface Member {
  name: string;
  role: string;
  badge: string;
  institution: string;
  bio: string;
  image?: string;
  imagePosition?: string;
  links: Links;
}

// ── Core Team ─────────────────────────────────────────────────────────────
const coreTeam: Member[] = [
  {
    name: 'Shivam Kumar',
    role: 'Platform Head',
    badge: 'Core Team',
    institution: 'IIT Jodhpur',
    bio: 'Leading DH NEXUS to connect aspirants with authentic insights and opportunities in Digital Humanities.',
    image: shivamImage,
    imagePosition: 'object-[center_15%]',
    links: {
      linkedin: 'https://www.linkedin.com/in/shivam-kumar-skm14',
      instagram: 'https://www.instagram.com/skmshivam14',
      email: 'm24id1009@iitj.ac.in',
      website: 'https://digitalhumanities.world',
    },
  },
  {
    name: 'Anshika Kashyap',
    role: 'Strategic Advisor',
    badge: 'Core Team',
    institution: 'MBA 2028 · IIM Jammu',
    bio: 'Content strategist, policy researcher, and placement representative bridging campus and industry for Digital Humanities.',
    image: anshikaImage,
    imagePosition: 'object-[center_10%]',
    links: {
      linkedin: 'https://www.linkedin.com/in/anshika-kashyap',
    },
  },
  {
    name: 'Aman Badayuni',
    role: 'Social & Community Head',
    badge: 'Core Team',
    institution: 'PhD Scholar · IIIT Vadodara',
    bio: 'DH scholar and PhD researcher combining a physics background with digital humanities. Leading social media and community outreach for DH NEXUS.',
    image: amanImage,
    imagePosition: 'object-[center_10%]',
    links: {
      linkedin: 'https://www.linkedin.com/in/aman-badayuni',
    },
  },
  {
    name: 'Anirban Paul',
    role: 'Research & Community',
    badge: 'Core Team',
    institution: 'IIT Jodhpur',
    bio: 'Researcher in Multimodal Input Prediction in VR using Machine Learning. Bridging technology and humanities.',
    image: anirbanImage,
    links: {
      linkedin: 'https://www.linkedin.com/in/anirban-paul',
    },
  },
  {
    name: 'Simanta Nandi',
    role: 'Community Lead — Dhanbad',
    badge: 'Core Team',
    institution: "Master's DH · IIT (ISM) Dhanbad",
    bio: 'Digital Humanities scholar and intern at IIST Thiruvananthapuram, expanding the DH NEXUS community at IIT (ISM) Dhanbad.',
    image: simantaImage,
    imagePosition: 'object-top',
    links: {},
  },
  {
    name: 'Vaisnavi Sainath',
    role: 'Community Lead — Dhanbad',
    badge: 'Core Team',
    institution: 'MA DH · IIT (ISM) Dhanbad',
    bio: 'Public speaker and strategic debater representing the DH community at IIT (ISM) Dhanbad and driving outreach for DH NEXUS.',
    image: vaishnaviImage,
    imagePosition: 'object-top',
    links: {},
  },
  {
    name: 'Aarav Panchal',
    role: 'App Developer',
    badge: 'Core Team',
    institution: 'BS Online · IIT Jodhpur',
    bio: 'B24BS1006 · Building mobile and web applications to power the DH NEXUS platform.',
    image: aaravImage,
    imagePosition: 'object-[center_25%]',
    links: { email: 'b24bs1006@iitj.ac.in' },
  },
  {
    name: 'Chakrashen Maurya',
    role: 'Web Developer',
    badge: 'Core Team',
    institution: 'BS Online · IIT Jodhpur',
    bio: 'B24BS1541 · Frontend and web development contributor helping build DH NEXUS interfaces.',
    image: chakrashenImage,
    imagePosition: 'object-[center_20%]',
    links: { email: 'b24bs1006@iitj.ac.in' },
  },
];

// ── Contributors ───────────────────────────────────────────────────────────
const contributors: Member[] = [
  {
    name: 'Nishi Yadav',
    role: 'Creative Technology',
    badge: 'Contributor',
    institution: 'BCom · BHU Varanasi',
    bio: 'Exploring the intersection of commerce and creative technology, contributing fresh perspectives on digital innovation.',
    links: {},
  },
  {
    name: 'Swati Kumari',
    role: 'Digital Marketing',
    badge: 'Contributor',
    institution: 'Banaras Hindu University',
    bio: 'Digital marketing strategist helping DH NEXUS grow its online presence and community engagement.',
    links: {},
  },
  {
    name: 'Aanchal Singh',
    role: 'Graphic Design',
    badge: 'Contributor',
    institution: 'Banaras Hindu University',
    bio: 'Visual designer bringing creative direction and graphic design expertise to the DH NEXUS brand.',
    links: {},
  },
  {
    name: 'Shivam',
    role: 'Backend Developer',
    badge: 'Contributor',
    institution: 'BS Online · IIT Jodhpur',
    bio: 'Backend developer building the server-side infrastructure and APIs that power the DH NEXUS platform.',
    links: {},
  },
];

// ── Badge colors ───────────────────────────────────────────────────────────
const badgeStyle: Record<string, string> = {
  'Core Team':   'bg-indigo-100 text-indigo-700',
  'Contributor': 'bg-emerald-100 text-emerald-700',
};

// ── Card ───────────────────────────────────────────────────────────────────
function TeamCard({ person }: { person: Member }) {
  const initials = person.name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();

  return (
    <div className="bg-white rounded-2xl border border-slate-200 hover:shadow-lg hover:border-indigo-200 transition-all duration-300 overflow-hidden flex flex-col">
      <div className="h-56 overflow-hidden bg-slate-100">
        {person.image ? (
          <img src={person.image} alt={person.name} className={`w-full h-full object-cover ${person.imagePosition ?? 'object-top'}`} style={{ imageRendering: 'auto' }} />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-purple-600 flex items-center justify-center">
            <span className="text-4xl font-bold text-white">{initials}</span>
          </div>
        )}
      </div>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-1">
          <p className="font-bold text-slate-900 leading-tight">{person.name}</p>
          <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full flex-shrink-0 ${badgeStyle[person.badge] ?? 'bg-slate-100 text-slate-600'}`}>
            {person.badge}
          </span>
        </div>
        <p className="text-indigo-600 text-sm font-medium">{person.role}</p>
        <div className="flex items-center gap-1 mt-0.5 mb-3">
          <MapPin className="w-3 h-3 text-slate-400 flex-shrink-0" />
          <p className="text-xs text-slate-400 leading-tight">{person.institution}</p>
        </div>
        <p className="text-slate-500 text-sm leading-relaxed flex-1">{person.bio}</p>
        {Object.values(person.links).some(Boolean) && (
          <div className="flex gap-2 mt-4 pt-3 border-t border-slate-100">
            {person.links.linkedin && (
              <a href={person.links.linkedin} target="_blank" rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-indigo-100 hover:text-indigo-600 text-slate-400 flex items-center justify-center transition-colors">
                <Linkedin className="w-3.5 h-3.5" />
              </a>
            )}
            {person.links.email && (
              <a href={`mailto:${person.links.email}`}
                className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-indigo-100 hover:text-indigo-600 text-slate-400 flex items-center justify-center transition-colors">
                <Mail className="w-3.5 h-3.5" />
              </a>
            )}
            {person.links.instagram && (
              <a href={person.links.instagram} target="_blank" rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-pink-100 hover:text-pink-500 text-slate-400 flex items-center justify-center transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
            )}
            {person.links.website && (
              <a href={person.links.website} target="_blank" rel="noopener noreferrer"
                className="w-7 h-7 rounded-lg bg-slate-100 hover:bg-indigo-100 hover:text-indigo-600 text-slate-400 flex items-center justify-center transition-colors">
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Main export ────────────────────────────────────────────────────────────
export function DHNexusTeam() {
  return (
    <section className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 bg-indigo-50 text-indigo-700 border border-indigo-100 px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
              <Users className="w-4 h-4" />
              The Team
            </div>
            <h2 className="text-3xl font-bold text-slate-900">People Behind DH NEXUS</h2>
            <p className="text-slate-500 mt-1 text-sm max-w-md">
              Students and researchers from across India building this global community — independent of any single institution.
            </p>
          </div>
          <a href="/team" className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-600 hover:text-indigo-800 transition-colors whitespace-nowrap flex-shrink-0">
            View full DH community <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Core Team */}
        <div className="mb-4">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Core Team</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreTeam.map(p => <TeamCard key={p.name} person={p} />)}
          </div>
        </div>

        <div className="border-t border-slate-100 my-8" />

        {/* Contributors */}
        <div className="mb-8">
          <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">Contributors</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {contributors.map(p => <TeamCard key={p.name} person={p} />)}
            {/* Open slot */}
            <div className="bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 flex flex-col items-center justify-center text-center p-8 min-h-[200px]">
              <Users className="w-8 h-8 text-slate-300 mb-3" />
              <p className="text-slate-500 text-sm font-semibold mb-1">Want to contribute?</p>
              <p className="text-slate-400 text-xs mb-4">Open to volunteers from any institution</p>
              <a href="https://forms.gle/uwmUJyDbyq5VVLUx7" target="_blank" rel="noopener noreferrer"
                className="text-xs font-semibold text-indigo-600 hover:text-indigo-800 transition-colors flex items-center gap-1">
                Apply <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-semibold text-slate-900 mb-0.5">Join the DH NEXUS team</p>
            <p className="text-slate-500 text-sm">Open to volunteers, researchers, developers, and ambassadors from any university.</p>
          </div>
          <a href="https://forms.gle/uwmUJyDbyq5VVLUx7" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all text-sm whitespace-nowrap flex-shrink-0">
            Apply to Join
          </a>
        </div>

      </div>
    </section>
  );
}
