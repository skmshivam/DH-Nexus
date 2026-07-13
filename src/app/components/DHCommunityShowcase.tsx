import { useState } from 'react';
import { GraduationCap, Microscope, ArrowRight, Users } from 'lucide-react';

// ─── Types ─────────────────────────────────────────────────────────────────
interface Student {
  name: string;
  program: string;
  background: string;
  category: string;
}

interface Group {
  label: string;
  students: Student[];
}

interface Institution {
  name: string;
  shortName: string;
  city: string;
  color: string;
  creditLabel: string;
  creditUrl: string;
  groups: Group[];
}

// ─── Category colors ────────────────────────────────────────────────────────
const categoryColor: Record<string, string> = {
  'Heritage & Culture':           'bg-amber-100 text-amber-700',
  'Digital Culture':              'bg-pink-100 text-pink-700',
  'Pedagogy & Literature':        'bg-violet-100 text-violet-700',
  'Computational Texts':          'bg-blue-100 text-blue-700',
  'Heritage Tech':                'bg-teal-100 text-teal-700',
  'AI & Ethics':                  'bg-red-100 text-red-700',
  'AI Ethics & Social Computing': 'bg-red-100 text-red-700',
  'Digital Health':               'bg-green-100 text-green-700',
  'Regional Studies':             'bg-orange-100 text-orange-700',
  'Computational Linguistics':    'bg-indigo-100 text-indigo-700',
  'Digital Media & Activism':     'bg-rose-100 text-rose-700',
  'Gaming & UX':                  'bg-purple-100 text-purple-700',
  'Digital Strategy':             'bg-cyan-100 text-cyan-700',
  'Digital Media':                'bg-sky-100 text-sky-700',
  'Social Computing':             'bg-fuchsia-100 text-fuchsia-700',
  'Linguistics':                  'bg-lime-100 text-lime-700',
  'UX Writing':                   'bg-emerald-100 text-emerald-700',
  'EdTech':                       'bg-yellow-100 text-yellow-700',
  'Fintech':                      'bg-green-100 text-green-700',
  'Literary Studies':             'bg-violet-100 text-violet-700',
  'Heritage & Archives':          'bg-amber-100 text-amber-700',
  'Business AI':                  'bg-blue-100 text-blue-700',
  'Film & Digital Media':         'bg-pink-100 text-pink-700',
  'Machine Learning':             'bg-indigo-100 text-indigo-700',
  'Digital Pedagogy':             'bg-teal-100 text-teal-700',
  'Gaming & AR/VR':               'bg-purple-100 text-purple-700',
  'VR & ML':                      'bg-sky-100 text-sky-700',
  'Language Learning':            'bg-rose-100 text-rose-700',
  'English Literature':           'bg-amber-100 text-amber-700',
  'Archives & Memory':            'bg-teal-100 text-teal-700',
  'Human Rights & Policy':        'bg-red-100 text-red-700',
  'Communication & Debate':       'bg-purple-100 text-purple-700',
  'Space & STEM Humanities':      'bg-indigo-100 text-indigo-700',
  'Digital Humanities':           'bg-slate-100 text-slate-600',
};

function colorFor(cat: string) {
  return categoryColor[cat] ?? 'bg-slate-100 text-slate-600';
}

// ─── Institution data ───────────────────────────────────────────────────────
const institutions: Institution[] = [
  {
    name: 'IIT Jodhpur',
    shortName: 'IIT Jodhpur',
    city: 'Rajasthan',
    color: 'indigo',
    creditLabel: 'IIT Jodhpur – M.Sc. Digital Humanities official site',
    creditUrl: 'https://iitj.ac.in/department/hss/dh/',
    groups: [
      {
        label: 'PhD Scholars',
        students: [
          { name: 'Mehak Sejwal',             program: 'PhD Digital Humanities',   background: 'History · History of Art',                        category: 'Heritage & Culture' },
          { name: 'Jyoti',                    program: 'PhD Digital Humanities',   background: 'English Literature',                              category: 'Digital Culture' },
          { name: 'Sharanya Ghosh',           program: 'PhD Digital Humanities',   background: 'English Literature',                              category: 'Pedagogy & Literature' },
          { name: 'Srabani Biswas',           program: 'PhD Digital Humanities',   background: 'English Literature',                              category: 'Computational Texts' },
          { name: 'Supreet Kaur',             program: 'PhD Digital Humanities',   background: 'B.Tech CSE · M.Tech Software Engineering',        category: 'Heritage Tech' },
          { name: 'Pushan Kumar',             program: 'PhD Digital Humanities',   background: 'English Literature',                              category: 'AI & Ethics' },
          { name: 'Vasundhra Dahiya',         program: 'PhD Digital Humanities',   background: 'B.Tech CS · M.Tech Data Science',                 category: 'AI Ethics & Social Computing' },
          { name: 'Debarati Sarkar',          program: 'PhD Digital Humanities',   background: 'M.Sc. Population Studies',                        category: 'Digital Health' },
          { name: 'Uddipana Kalita',          program: 'PhD Digital Humanities',   background: 'English Literature',                              category: 'Regional Studies' },
          { name: 'Himanshu Sihag',           program: 'PhD Digital Humanities',   background: 'Sociology · Political Science · MA English',       category: 'Computational Linguistics' },
          { name: 'Sabeela Rasheed',          program: 'PhD Digital Humanities',   background: 'Mass Communication · Journalism · EdTech',         category: 'Digital Media & Activism' },
        ],
      },
      {
        label: 'M.Sc. 2024',
        students: [
          { name: 'Pratishruti Bandyopadhyay', program: 'M.Sc. Digital Humanities', background: 'B.A. Sociology (Hons)',                         category: 'Literary Studies' },
          { name: 'Sanskriti Tripathi',         program: 'M.Sc. Digital Humanities', background: 'B.A. History (Hons)',                           category: 'Heritage & Archives' },
          { name: 'Anshika Kashyap',            program: 'M.Sc. Digital Humanities', background: 'B.A. Philosophy (Hons)',                        category: 'Business AI' },
          { name: 'Madhav Pradhan',             program: 'M.Sc. Digital Humanities', background: 'B.A. Economics & History · MA Film Direction',  category: 'Film & Digital Media' },
          { name: 'Shreyasi Singh',             program: 'M.Sc. Digital Humanities', background: 'B.A. Economics and Maths',                      category: 'Machine Learning' },
          { name: 'Pankhuri Gupta',             program: 'M.Sc. Digital Humanities', background: 'B.A. English (Hons)',                           category: 'Digital Pedagogy' },
          { name: 'Priyanka Das',               program: 'M.Sc. Digital Humanities', background: 'B.A. English (Hons)',                           category: 'Gaming & AR/VR' },
          { name: 'Anirban Paul',               program: 'M.Sc. Digital Humanities', background: 'B.A. Economics (Hons)',                         category: 'VR & ML' },
          { name: 'Aman Badayuni',              program: 'M.Sc. Digital Humanities', background: 'B.Sc. Physics (Hons)',                          category: 'Language Learning' },
          { name: 'Shivam Kumar',               program: 'M.Sc. Digital Humanities', background: 'B.A. Ancient Indian History, Culture & Archaeology', category: 'Fintech' },
        ],
      },
      {
        label: 'M.Sc. 2025',
        students: [
          { name: 'Aditya Tiwari',            program: 'M.Sc. Digital Humanities', background: 'BSc (Hons.) Psychology · PGDM Marketing',              category: 'Computational Linguistics' },
          { name: 'Anusuya K.',               program: 'M.Sc. Digital Humanities', background: 'BSc Radiation Therapy Technology',                      category: 'Digital Health' },
          { name: 'Avanthika Ajay Menon',     program: 'M.Sc. Digital Humanities', background: 'B.A. (Hons.) Sociology',                               category: 'Film & Digital Media' },
          { name: 'Harshit Singh',            program: 'M.Sc. Digital Humanities', background: 'B.A. (Hons.) English · M.A. English',                  category: 'Gaming & UX' },
          { name: 'Kishan Kumar Dev',         program: 'M.Sc. Digital Humanities', background: 'B.A. Economics & Operational Research · M.A. English',  category: 'Digital Media & Activism' },
          { name: 'Lakshmi Chandana O',       program: 'M.Sc. Digital Humanities', background: 'B.A. Geography + Sanskrit',                            category: 'Literary Studies' },
          { name: 'Prithvi Raj Inukonda',     program: 'M.Sc. Digital Humanities', background: 'B.A. Political Science · B.Ed.',                       category: 'Digital Pedagogy' },
          { name: 'Rishav Balo',              program: 'M.Sc. Digital Humanities', background: 'B.Sc. (Hons.) Anthropology · M.Sc. Anthropology',      category: 'Gaming & AR/VR' },
          { name: 'Sachin Kumar',             program: 'M.Sc. Digital Humanities', background: 'B.Sc. (Hons.) Statistics',                             category: 'Heritage & Archives' },
        ],
      },
      {
        label: 'M.Sc. 2023',
        students: [
          { name: 'Barun Mahaldar',            program: 'M.Sc. Digital Humanities', background: 'English Language & Literature · MA English',     category: 'Gaming & UX' },
          { name: 'Bharati Verma',             program: 'M.Sc. Digital Humanities', background: 'BBA',                                           category: 'Digital Strategy' },
          { name: 'Mohit Prakash',             program: 'M.Sc. Digital Humanities', background: 'Bachelor in Journalism',                        category: 'Digital Media' },
          { name: 'Talha Mohammed Ansari',     program: 'M.Sc. Digital Humanities', background: 'B.A. Statistics-Psychology',                    category: 'Social Computing' },
          { name: 'Bhasswati Bhattacharjee',  program: 'M.Sc. Digital Humanities', background: 'English Literature · Library & Information Sc.', category: 'Linguistics' },
          { name: 'Anushka Sharma',            program: 'M.Sc. Digital Humanities', background: 'B.A. English Literature (Hons)',                 category: 'UX Writing' },
          { name: 'Arun V.B',                  program: 'M.Sc. Digital Humanities', background: 'BA Sociology · B.Ed. Social Science',           category: 'EdTech' },
          { name: 'Diksha Rani',               program: 'M.Sc. Digital Humanities', background: 'B.A. Journalism (Hons)',                        category: 'Digital Media' },
          { name: 'Paramita Paul',             program: 'M.Sc. Digital Humanities', background: 'B.Sc. Economics (Hons)',                        category: 'Fintech' },
        ],
      },
    ],
  },
  {
    name: 'IIT (ISM) Dhanbad',
    shortName: 'IIT (ISM) Dhanbad',
    city: 'Jharkhand',
    color: 'emerald',
    creditLabel: 'IIT (ISM) Dhanbad – Department of Humanities & Social Sciences',
    creditUrl: 'https://www.iitism.ac.in/index.php/dept-hss',
    groups: [
      {
        label: 'MA / Master\'s Students',
        students: [
          { name: 'Disha Pramanik',               program: 'MA Digital Humanities & Social Sciences', background: 'English Literature',            category: 'English Literature' },
          { name: 'Krishna Pillai',                program: 'MA Digital Humanities & Social Sciences', background: 'Archives Intern, IIM Ahmedabad', category: 'Archives & Memory' },
          { name: 'Neha Yeshvi',                   program: 'MA Digital Humanities',                   background: 'GATE Qualified (Sociology)',     category: 'Human Rights & Policy' },
          { name: 'Vaisnavi Sainath',              program: 'MA Digital Humanities',                   background: 'Public Speaking, Strategic Debating', category: 'Communication & Debate' },
          { name: 'Nikhat Parween',                program: 'MA Digital Humanities & Social Sciences', background: 'Digital Humanities',            category: 'Digital Humanities' },
          { name: 'Simanta Nandi',                 program: "Master's Scholar, Digital Humanities",    background: 'Intern at IIST Thiruvananthapuram', category: 'Space & STEM Humanities' },
        ],
      },
    ],
  },
  {
    name: 'CHRIST University, Pune–Lavasa',
    creditLabel: 'CHRIST (Deemed to be University), Pune Lavasa Campus',
    creditUrl: 'https://christuniversity.in',
    shortName: 'CHRIST University',
    city: 'Pune, Maharashtra',
    color: 'rose',
    groups: [
      {
        label: 'MA Students',
        students: [
          { name: 'Taarina Therese Chandiramani', program: 'MA English with Digital Humanities', background: 'English Literature & Digital Humanities', category: 'Pedagogy & Literature' },
        ],
      },
    ],
  },
];

// ─── Student card ───────────────────────────────────────────────────────────
function StudentCard({ student }: { student: Student }) {
  const initials = student.name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return (
    <div className="bg-white rounded-xl border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-200 p-4 flex flex-col gap-2">
      <div className="flex items-center gap-3">
        <div className="w-9 h-9 rounded-full bg-gradient-to-br from-indigo-400 to-indigo-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
          {initials}
        </div>
        <div className="min-w-0">
          <p className="font-semibold text-slate-900 text-sm leading-tight truncate">{student.name}</p>
          <p className="text-xs text-slate-400 truncate">{student.program}</p>
        </div>
      </div>
      <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{student.background}</p>
      <span className={`self-start text-[10px] font-semibold px-2 py-0.5 rounded-full ${colorFor(student.category)}`}>
        {student.category}
      </span>
    </div>
  );
}

// ─── Institution badge colors ───────────────────────────────────────────────
const instColors: Record<string, { active: string; dot: string }> = {
  indigo: { active: 'bg-indigo-600 text-white', dot: 'bg-indigo-500' },
  emerald: { active: 'bg-emerald-600 text-white', dot: 'bg-emerald-500' },
  rose: { active: 'bg-rose-600 text-white', dot: 'bg-rose-400' },
};

// ─── Main component ─────────────────────────────────────────────────────────
export function DHCommunityShowcase() {
  const [activeInstitution, setActiveInstitution] = useState(0);
  const [activeGroup, setActiveGroup] = useState(0);

  const inst = institutions[activeInstitution];
  const group = inst.groups[activeGroup];
  const colors = instColors[inst.color] ?? instColors.indigo;

  const handleInstitution = (i: number) => {
    setActiveInstitution(i);
    setActiveGroup(0);
  };

  return (
    <div>
      {/* Institution tabs */}
      <div className="flex flex-wrap gap-2 mb-5">
        {institutions.map((ins, i) => {
          const c = instColors[ins.color] ?? instColors.indigo;
          return (
            <button
              key={ins.shortName}
              onClick={() => handleInstitution(i)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all border ${
                i === activeInstitution
                  ? `${c.active} border-transparent shadow-sm`
                  : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              {ins.shortName}
              <span className={`text-[10px] opacity-70 hidden sm:inline`}>· {ins.city}</span>
            </button>
          );
        })}
      </div>

      {/* Group sub-tabs */}
      {inst.groups.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-5">
          {inst.groups.map((g, i) => (
            <button
              key={g.label}
              onClick={() => setActiveGroup(i)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                i === activeGroup
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
              }`}
            >
              {g.label}
              <span className="ml-1 opacity-50">({g.students.length})</span>
            </button>
          ))}
        </div>
      )}

      {/* Student grid or empty state */}
      {group.students.length > 0 ? (
        <>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {group.students.map(s => (
              <StudentCard key={s.name} student={s} />
            ))}
          </div>
          <p className="text-xs text-slate-400 mt-4">
            {group.students.length} {group.students.length === 1 ? 'student' : 'students'} listed · {inst.name}
          </p>
        </>
      ) : (
        <div className="rounded-2xl border-2 border-dashed border-slate-200 bg-slate-50 p-12 text-center">
          <Microscope className="w-10 h-10 text-slate-300 mx-auto mb-3" />
          <h4 className="text-base font-bold text-slate-700 mb-1">Coming Soon</h4>
          <p className="text-slate-400 text-sm mb-5 max-w-sm mx-auto">
            Collecting profiles from {inst.name} DH students. If you're from here, get featured.
          </p>
          <a href="https://forms.gle/VqqeGB2EvyXym5UW7" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-lg text-sm font-semibold hover:bg-slate-700 transition-all">
            Submit Your Profile <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}

      {/* Credit – per institution */}
      <p className="text-[11px] text-slate-400 mt-4">
        Student data referenced from the{' '}
        <a href={inst.creditUrl} target="_blank" rel="noopener noreferrer"
          className="underline hover:text-indigo-500 transition-colors">
          {inst.creditLabel}
        </a>
        {' '}· No copyright infringement intended · Shared with community consent.
      </p>

      {/* Cross-inst CTA */}
      <div className="mt-6 bg-indigo-50 border border-indigo-100 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-semibold text-slate-900 mb-0.5">Are you a DH student or researcher?</p>
          <p className="text-slate-500 text-sm">
            From any university — get featured in the DH community directory.
          </p>
        </div>
        <a href="https://forms.gle/VqqeGB2EvyXym5UW7" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-xl transition-all text-sm whitespace-nowrap flex-shrink-0">
          <Users className="w-4 h-4" />
          Get Featured
        </a>
      </div>
    </div>
  );
}
