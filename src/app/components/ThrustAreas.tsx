import { Brain, Landmark, Users, Gamepad2 } from 'lucide-react';

const thrustAreas = [
  {
    title: 'Artificial Intelligence & Machine Learning',
    icon: Brain,
    focus: 'Merges computer science and critical theory',
    examples: [
      'Machine Learning-Based Classification Techniques',
      'Ethical AI and Posthuman Thought in Literary Cultures'
    ],
    color: 'blue'
  },
  {
    title: 'Cultural Heritage & Preservation',
    icon: Landmark,
    focus: 'Blends history, art history, and archiving technologies',
    examples: [
      'Digital Culture and Heritage Preservation',
      'Development of AI Tools for Digital Archives',
      'Digital Heritage, Knowledge Graphs, Metaverse, Heritage Crafts, Archiving'
    ],
    color: 'amber'
  },
  {
    title: 'Policy, Pedagogy & Social Impact',
    icon: Users,
    focus: 'Combines social science, economics, and governance',
    examples: [
      'FinTech and Financial Inclusion Projects',
      'Civic Data and Smart Governance Models',
      'Digital Pedagogy Frameworks for Modern Classrooms'
    ],
    color: 'green'
  },
  {
    title: 'Digital Media & Storytelling',
    icon: Gamepad2,
    focus: 'Integrates arts, communication, and engineering (XR/Game Design)',
    examples: [
      'AR/VR Applications in Sensory Comics',
      'Gamification of Collections and Archives',
      'Digital Storytelling in Educational Spaces'
    ],
    color: 'purple'
  }
];

const colorMap: Record<string, { bg: string; icon: string; border: string; text: string }> = {
  blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200', text: 'text-blue-900' },
  amber: { bg: 'bg-amber-50', icon: 'text-amber-600', border: 'border-amber-200', text: 'text-amber-900' },
  green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200', text: 'text-green-900' },
  purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200', text: 'text-purple-900' }
};

export function ThrustAreas() {
  return (
    <section className="bg-gradient-to-b from-slate-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">
            Ready for Projects in Every Domain
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our program equips students with skills across multiple research areas—we're open to collaborative projects spanning AI, heritage, policy, media, and beyond
          </p>
        </div>

        {/* Highlight section */}
        <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-12 text-white mb-12">
          <h3 className="text-3xl mb-4">Not Limited by Boundaries</h3>
          <p className="text-xl text-indigo-100 mb-4">
            While these are our core thrust areas, the beauty of Digital Humanities is its flexibility. Students and faculty are actively working on projects that span AI ethics, digital storytelling, cultural analytics, smart governance, heritage preservation, multilingual NLP, and more.
          </p>
          <p className="text-lg text-indigo-100">
            Have a project idea that combines technology with humanities? We're ready to explore it. This interdisciplinary approach means we can tackle challenges from multiple angles, bringing fresh perspectives to any domain.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {thrustAreas.map((area, index) => {
            const colors = colorMap[area.color];
            const Icon = area.icon;
            
            return (
              <div 
                key={index}
                className={`${colors.bg} border ${colors.border} rounded-xl p-8 hover:shadow-lg transition-shadow`}
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className={`w-12 h-12 ${colors.bg} border ${colors.border} rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-6 h-6 ${colors.icon}`} />
                  </div>
                  <div>
                    <h3 className={`text-2xl mb-2 ${colors.text}`}>
                      {area.title}
                    </h3>
                    <p className="text-slate-700 italic">
                      {area.focus}
                    </p>
                  </div>
                </div>
                
                <div>
                  <div className="text-sm uppercase tracking-wide text-slate-500 mb-3">
                    Source Examples
                  </div>
                  <ul className="space-y-2">
                    {area.examples.map((example, exIndex) => (
                      <li key={exIndex} className="flex items-start gap-2">
                        <span className={`${colors.icon} mt-1 flex-shrink-0`}>•</span>
                        <span className="text-slate-700">{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}