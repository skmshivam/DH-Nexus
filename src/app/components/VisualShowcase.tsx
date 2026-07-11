import { Code, Users, Globe, Sparkles, TrendingUp, Award } from 'lucide-react';

export function VisualShowcase() {
  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-2 rounded-full mb-6">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm">Visual Story</span>
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6 text-slate-900">
            See Digital Humanities in Action
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From cutting-edge research labs to innovative tech startups—DH graduates are shaping the future
          </p>
        </div>

        {/* Featured Image Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Large Feature */}
          <div className="md:col-span-2 relative rounded-3xl overflow-hidden shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1617049037028-d4746ed5e6bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwdGVjaG5vbG9neSUyMGRhdGElMjB2aXN1YWxpemF0aW9ufGVufDF8fHx8MTc2NjcwODA5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Data visualization"
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform duration-500"
              width="1080"
              height="384"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent flex items-end p-10">
              <div>
                <div className="inline-flex items-center gap-2 bg-cyan-500 text-white px-4 py-2 rounded-full mb-4 text-sm">
                  <Code className="w-4 h-4" />
                  <span>Data Visualization</span>
                </div>
                <h3 className="text-3xl text-white mb-2">
                  Turning Data Into Visual Stories
                </h3>
                <p className="text-blue-100 text-lg">
                  DH professionals create interactive visualizations that make complex data accessible to everyone
                </p>
              </div>
            </div>
          </div>

          {/* Smaller Features */}
          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img 
              src="https://images.unsplash.com/photo-1742440710136-1976b1cad864?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBjb2xsYWJvcmF0aW9ufGVufDF8fHx8MTc2NjY3MzEzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Team collaboration"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              width="1080"
              height="256"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 to-transparent flex items-end p-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-purple-500 text-white px-3 py-1 rounded-full mb-3 text-sm">
                  <Users className="w-4 h-4" />
                  <span>Collaboration</span>
                </div>
                <h4 className="text-xl text-white mb-1">Cross-Functional Teams</h4>
                <p className="text-blue-100 text-sm">
                  Bridging technical and creative minds
                </p>
              </div>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl group">
            <img 
              src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwbmV0d29ya3xlbnwxfHx8fDE3NjY2MTU4NDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="AI and networks"
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              width="1080"
              height="256"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 to-transparent flex items-end p-6">
              <div>
                <div className="inline-flex items-center gap-2 bg-pink-500 text-white px-3 py-1 rounded-full mb-3 text-sm">
                  <Globe className="w-4 h-4" />
                  <span>AI & Networks</span>
                </div>
                <h4 className="text-xl text-white mb-1">Machine Learning</h4>
                <p className="text-pink-100 text-sm">
                  Building intelligent systems that understand humans
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Impact Stats with Images */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1603351130949-476794ec3dff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMHNjcmVlbnxlbnwxfHx8fDE3NjY2NjkxMjh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Coding"
              className="w-full h-full object-cover absolute inset-0"
              width="1080"
              height="288"
            />
            <div className="relative bg-gradient-to-t from-slate-900/90 to-slate-900/60 p-8 h-72 flex flex-col justify-end">
              <div className="text-5xl text-cyan-400 mb-3">100%</div>
              <h4 className="text-2xl text-white mb-2">Job Placement</h4>
              <p className="text-blue-100">
                DH graduates are in high demand across industries
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1651243894771-fbc2527029f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjB3b3JsZCUyMG1hcHxlbnwxfHx8fDE3NjY3MDgwOTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Global"
              className="w-full h-full object-cover absolute inset-0"
              width="1080"
              height="288"
            />
            <div className="relative bg-gradient-to-t from-indigo-900/90 to-indigo-900/60 p-8 h-72 flex flex-col justify-end">
              <div className="text-5xl text-purple-400 mb-3">50+</div>
              <h4 className="text-2xl text-white mb-2">Countries</h4>
              <p className="text-purple-100">
                DH programs and opportunities worldwide
              </p>
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src="https://images.unsplash.com/photo-1733925457822-64c3e048fa1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbm5vdmF0aW9uJTIwc3RhcnR1cCUyMHRlY2h8ZW58MXx8fHwxNzY2NzA4MDk2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Innovation"
              className="w-full h-full object-cover absolute inset-0"
              width="1080"
              height="288"
            />
            <div className="relative bg-gradient-to-t from-pink-900/90 to-pink-900/60 p-8 h-72 flex flex-col justify-end">
              <div className="text-5xl text-yellow-400 mb-3">$120K+</div>
              <h4 className="text-2xl text-white mb-2">Avg Salary</h4>
              <p className="text-pink-100">
                Starting salaries for DH graduates in tech
              </p>
            </div>
          </div>
        </div>

        {/* Workspace Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 items-center mb-16">
          <div>
            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-6">
              <Award className="w-5 h-5" />
              <span className="text-sm">IIT Jodhpur Excellence</span>
            </div>
            <h3 className="text-3xl lg:text-4xl mb-6 text-slate-900">
              World-Class Infrastructure
            </h3>
            <p className="text-xl text-slate-600 mb-6">
              State-of-the-art facilities, cutting-edge research labs, and collaborative workspaces designed for interdisciplinary innovation
            </p>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <strong>Advanced Computing Labs</strong>
                  <p className="text-sm text-slate-600">High-performance systems for data analysis and AI research</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <strong>Digital Archives</strong>
                  <p className="text-sm text-slate-600">Access to extensive digital collections and databases</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <strong>Collaborative Spaces</strong>
                  <p className="text-sm text-slate-600">Open workspaces fostering cross-disciplinary teamwork</p>
                </div>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src="https://images.unsplash.com/photo-1631599143424-5bc234fbebf1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwY2FtcHVzJTIwYnVpbGRpbmd8ZW58MXx8fHwxNzY2NjA5NTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="IIT Jodhpur campus"
              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              width="1080"
              height="384"
            />
          </div>
        </div>

        {/* Research & Innovation Showcase */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
            <img 
              src="https://images.unsplash.com/photo-1634872583967-6417a8638a59?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXNlYXJjaCUyMGxhYm9yYXRvcnklMjBzY2llbmNlfGVufDF8fHx8MTc2NjY2NDAzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Research laboratory"
              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
              width="1080"
              height="384"
            />
          </div>

          <div className="order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full mb-6">
              <TrendingUp className="w-5 h-5" />
              <span className="text-sm">Cutting-Edge Research</span>
            </div>
            <h3 className="text-3xl lg:text-4xl mb-6 text-slate-900">
              Innovation at the Intersection
            </h3>
            <p className="text-xl text-slate-600 mb-6">
              Students work on groundbreaking projects that blend computational methods with humanistic inquiry
            </p>
            <ul className="space-y-4 text-slate-700">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <strong>NLP & AI Projects</strong>
                  <p className="text-sm text-slate-600">Building language models for multilingual applications</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <strong>Cultural Analytics</strong>
                  <p className="text-sm text-slate-600">Analyzing social media and cultural trends at scale</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-white text-sm">✓</span>
                </div>
                <div>
                  <strong>Digital Preservation</strong>
                  <p className="text-sm text-slate-600">Creating systems for preserving cultural heritage</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}