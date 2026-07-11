import { Mail, Phone, User, Building2, Send } from 'lucide-react';

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
    icon: Building2
  },
  {
    name: 'Anshika Kashyap',
    role: 'Placement Representative, M.Sc. Digital Humanities',
    email: 'm24id1012@iitj.ac.in',
    phone: '+91 9411815902',
    icon: User
  }
];

export function RecruitmentContact() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl mb-4">
            Ready to Recruit Top Talent?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Connect with the M.Sc. Digital Humanities Batch of 2024-26 and discover how their unique skills can drive your organization forward
          </p>
        </div>
        
        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-12 mb-12">
          <h3 className="text-3xl mb-6 text-center">Why Partner with Us?</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Send className="w-8 h-8 text-blue-300" />
              </div>
              <h4 className="text-xl mb-2">Adaptable Professionals</h4>
              <p className="text-blue-100">
                Graduates ready to meet complex demands of the modern corporate world
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Building2 className="w-8 h-8 text-purple-300" />
              </div>
              <h4 className="text-xl mb-2">Technically Proficient</h4>
              <p className="text-blue-100">
                Strong skills in Python, ML, AI, data analytics, and digital tools
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-pink-300" />
              </div>
              <h4 className="text-xl mb-2">Analytically Sharp</h4>
              <p className="text-blue-100">
                Operate at the intersection of data, technology, business, and human-centric design
              </p>
            </div>
          </div>
        </div>
        
        <div className="mb-12">
          <h3 className="text-3xl mb-8 text-center">Contact Training & Placement Office</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {contacts.map((contact, index) => {
              const Icon = contact.icon;
              
              return (
                <div 
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/15 transition-colors"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-lg">{contact.name}</div>
                      <div className="text-sm text-blue-200">{contact.role}</div>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <Mail className="w-4 h-4 text-blue-300" />
                      <a href={`mailto:${contact.email}`} className="text-blue-200 hover:text-white transition-colors">
                        {contact.email}
                      </a>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Phone className="w-4 h-4 text-blue-300" />
                      <a href={`tel:${contact.phone}`} className="text-blue-200 hover:text-white transition-colors">
                        {contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        <div className="text-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
          <h4 className="text-2xl mb-4">General Inquiries</h4>
          <div className="flex items-center justify-center gap-3 text-xl">
            <Mail className="w-6 h-6 text-blue-300" />
            <a href="mailto:placement@iitj.ac.in" className="text-blue-200 hover:text-white transition-colors">
              placement@iitj.ac.in
            </a>
          </div>
          <p className="text-blue-100 mt-6 max-w-2xl mx-auto">
            For recruitment inquiries, campus engagement opportunities, and further information about our M.Sc. Digital Humanities program
          </p>
        </div>
      </div>
    </section>
  );
}
