import { DHNexusTeam } from '../components/DHNexusTeam';
import { DHCommunityShowcase } from '../components/DHCommunityShowcase';
import { DHNexusLogo } from '../components/DHNexusLogo';
import { Users, GraduationCap } from 'lucide-react';

export function TeamPage() {
  return (
    <div>
      {/* Page header */}
      <section className="bg-slate-900 py-16 border-b border-slate-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center mb-6">
            <DHNexusLogo variant="default" className="h-12" />
          </div>
          <div className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-semibold mb-5">
            <Users className="w-4 h-4" />
            Community Directory
          </div>
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            The DH Community
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            Meet the team behind DH Nexus and the scholars, researchers, and students advancing Digital Humanities across universities in India.
          </p>
        </div>
      </section>

      {/* Core team */}
      <DHNexusTeam />

      {/* Student directory */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-white border border-slate-200 text-slate-600 px-4 py-1.5 rounded-full text-sm font-semibold mb-3">
              <GraduationCap className="w-4 h-4" />
              Student Directory
            </div>
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900 mb-2">
              DH Students & Scholars
            </h2>
            <p className="text-slate-500 max-w-2xl text-sm">
              A growing directory of Digital Humanities students across institutions — representing diverse backgrounds, research areas, and career paths. Not affiliated to any one university.
            </p>
          </div>

          <DHCommunityShowcase />
        </div>
      </section>
    </div>
  );
}
