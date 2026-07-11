import { User, BookOpen, Brain, Film, Microscope, Cpu, Users as UsersIcon } from 'lucide-react';

const faculty = [
  {
    name: 'Dr. Kanak Yadav',
    title: 'Assistant Professor and Coordinator',
    expertise: 'Digital Culture and Technology, Literary studies',
    icon: BookOpen
  },
  {
    name: 'Dr. Rachel Philip',
    title: 'Associate Professor',
    expertise: 'Sociology of Digital Education, Digital Pedagogy and Learning',
    icon: UsersIcon
  },
  {
    name: 'Manish Aggarwal',
    title: 'Associate Professor',
    expertise: 'AI applications in Digital Humanities',
    icon: Brain
  },
  {
    name: 'Natasa Thoudam',
    title: 'Associate Professor',
    expertise: 'DH in India\'s Northeast, Digital Literary & Comics Studies, Digital Archiving',
    icon: BookOpen
  },
  {
    name: 'Parichay Patra',
    title: 'Associate Professor',
    expertise: 'Transnational Cinema, Global South Cinemas',
    icon: Film
  },
  {
    name: 'Pranjal Protim Borah',
    title: 'Assistant Professor',
    expertise: 'Human-Computer Interaction (HCI), Game Design, Extended Reality (XR)',
    icon: Cpu
  },
  {
    name: 'Sreedevi D',
    title: 'Associate Professor',
    expertise: 'Literary Studies, Senses and Writing',
    icon: BookOpen
  }
];

export function FacultyExpertise() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">
            Faculty from Diverse Departments
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Learn from interdisciplinary experts spanning multiple departments—bringing together Computer Science, Humanities, Social Sciences, and Design
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-12 text-white mb-12">
          <h3 className="text-3xl mb-4">True Interdisciplinary Expertise</h3>
          <p className="text-xl text-indigo-100 mb-4">
            Our faculty aren't just from one department—they come from diverse academic backgrounds across IIT Jodhpur, creating a truly interdisciplinary learning experience. From Computer Science and AI to Sociology, Literary Studies, Cinema, and Human-Computer Interaction, you'll learn from experts who bridge multiple worlds.
          </p>
          <p className="text-lg text-indigo-100">
            This diversity means you're not just learning Digital Humanities—you're experiencing it through the lens of multiple disciplines, preparing you for the hybrid roles that define the future of work.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faculty.map((member, index) => {
            const Icon = member.icon;
            
            return (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-slate-200 hover:shadow-xl hover:border-indigo-300 transition-all"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-slate-900 mb-1">{member.name}</h3>
                    <div className="text-sm text-indigo-600 mb-3">{member.title}</div>
                  </div>
                </div>
                <p className="text-slate-600 text-sm">
                  <span className="text-slate-500">Expertise:</span> {member.expertise}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200 text-center">
            <div className="text-4xl mb-2 text-indigo-900">7</div>
            <div className="text-slate-700">Expert Faculty Members</div>
          </div>
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200 text-center">
            <div className="text-4xl mb-2 text-purple-900">5+</div>
            <div className="text-slate-700">Research Domains</div>
          </div>
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200 text-center">
            <div className="text-4xl mb-2 text-green-900">100%</div>
            <div className="text-slate-700">Interdisciplinary Focus</div>
          </div>
        </div>
      </div>
    </section>
  );
}