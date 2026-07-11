import { Mail, Phone, Send, User, Building } from 'lucide-react';

const contacts = [
  {
    name: 'Prof. Harshit Agarwal',
    role: 'Professor-In-Charge, Training and Placement',
    email: 'pic_tp@iitj.ac.in',
    phone: '0291-280-1376',
    icon: User
  },
  {
    name: 'Mr. Puneet Garg',
    role: 'Training & Placement Officer',
    email: 'puneetgarg@iitj.ac.in',
    phone: '09815964823',
    icon: Building
  },
  {
    name: 'Anshika Kashyap',
    role: 'Placement Representative, M.Sc. Digital Humanities',
    email: 'm24id1012@iitj.ac.in',
    phone: '+91 9411815902',
    icon: User
  }
];

export function PartnerWithUs() {
  return (
    <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">
            Partner With Us
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Connect with the next generation of problem-solvers and discover how their unique skills can drive your organization forward
          </p>
        </div>

        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-2xl p-12 text-white mb-16">
          <div className="flex items-center gap-3 mb-6">
            <Send className="w-10 h-10" />
            <h3 className="text-3xl">Ready to Collaborate?</h3>
          </div>
          <p className="text-xl text-indigo-100 mb-8">
            Partnering with the IIT Jodhpur M.Sc. Digital Humanities program provides your organization with unparalleled access to uniquely skilled, future-ready talent capable of driving innovation where technology, data, and human experience converge.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl mb-2">Hybrid Talent</div>
              <div className="text-indigo-200">Technical mastery + deep humanistic insight</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl mb-2">Proven Impact</div>
              <div className="text-indigo-200">McKinsey, NITI Aayog, government projects</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <div className="text-2xl mb-2">Future-Ready</div>
              <div className="text-indigo-200">Solving tomorrow's challenges today</div>
            </div>
          </div>
        </div>

        <div className="mb-16">
          <h3 className="text-3xl mb-8 text-slate-900 text-center">Contact Training & Placement Office</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              
              return (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg border border-slate-200 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div>
                      <div className="text-xl text-slate-900">{contact.name}</div>
                      <div className="text-sm text-slate-600">{contact.role}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <Mail className="w-5 h-5 text-indigo-600" />
                      <a href={`mailto:${contact.email}`} className="text-indigo-600 hover:underline text-sm">
                        {contact.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-5 h-5 text-indigo-600" />
                      <a href={`tel:${contact.phone}`} className="text-slate-700 text-sm">
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200">
            <h3 className="text-2xl text-slate-900 mb-6">Partnership Opportunities</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span className="text-slate-700">Internships & Talent Acquisition</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span className="text-slate-700">Sponsored Capstone Projects</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span className="text-slate-700">Joint Research & Development</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span className="text-slate-700">Workshops & Training Programs</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 mt-1">•</span>
                <span className="text-slate-700">Consulting Services</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg border border-slate-200">
            <h3 className="text-2xl text-slate-900 mb-6">General Inquiries</h3>
            <div className="flex items-center gap-3 mb-6">
              <Mail className="w-8 h-8 text-indigo-600" />
              <div>
                <div className="text-slate-900">placement@iitj.ac.in</div>
                <div className="text-sm text-slate-600">For recruitment inquiries and campus engagement</div>
              </div>
            </div>
            <div className="bg-indigo-50 border border-indigo-200 rounded-lg p-6">
              <p className="text-slate-700">
                For further information about our M.Sc. Digital Humanities program, collaboration opportunities, and to schedule a discussion with our team, please reach out via the contacts above.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
