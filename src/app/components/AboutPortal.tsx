import { Info, AlertCircle, Target } from 'lucide-react';
import { DHNexusLogo } from './DHNexusLogo';

export function AboutPortal() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <DHNexusLogo variant="default" />
          </div>
          <h2 className="text-4xl lg:text-5xl mb-4 text-slate-900">
            About DH Nexus
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Your gateway to Digital Humanities careers, global programs, and opportunities — connecting talent worldwide
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Info className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="text-2xl mb-4 text-slate-900">About DH Nexus</h3>
            <p className="text-slate-700 mb-3">
              DH Nexus is a comprehensive Digital Humanities platform connecting aspirants, professionals, and organizations with authentic insights, career opportunities, and global DH programs. Created with a vision to make DH accessible to students from ALL backgrounds (humanities, tech, management, any field) who want to explore or transition into this exciting interdisciplinary field.
            </p>
            <p className="text-slate-700">
              We provide real experiences and authentic program insights, not just marketing materials—helping you make informed decisions about your DH journey.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-8 border border-purple-200 hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
              <Target className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="text-2xl mb-4 text-slate-900">Who This Is For</h3>
            <p className="text-slate-700 mb-3">
              Whether you're a curious high schooler, college student considering DH, professional looking to pivot, or industry partner exploring collaborations—this portal demystifies Digital Humanities with honest, comprehensive information.
            </p>
            <p className="text-slate-700">
              We aggregate information from multiple sources to provide comprehensive insights into the DH ecosystem worldwide.
            </p>
          </div>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-2xl p-12 text-white">
          <h3 className="text-3xl mb-6">The End of the 'Two Cultures' Divide</h3>
          <p className="text-xl text-blue-100 mb-6">
            For decades, higher education has been defined by a perceived chasm between two cultures: the technical, data-driven world of science and engineering, and the interpretive, qualitative world of the arts and humanities.
          </p>
          <p className="text-lg text-purple-200">
            Digital Humanities challenges and dismantles this outdated division. It operates on the principle that the most pressing challenges and exciting opportunities of our time exist at the <span className="text-yellow-300">intersection of technology, culture, and society</span>.
          </p>
        </div>

        {/* Disclaimer */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-8 border-2 border-amber-200">
          <div className="w-14 h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center mb-6">
            <AlertCircle className="w-6 h-6 text-white" />
          </div>
          <h3 className="text-2xl mb-4 text-slate-900">Platform Information</h3>
          <p className="text-slate-700 mb-3">
            DH Nexus is a <span className="text-amber-800">professional networking platform</span> connecting Digital Humanities talent globally with industry partners and academic institutions.
          </p>
          <p className="text-slate-700">
            We aggregate information from multiple sources to provide comprehensive insights into the DH ecosystem worldwide.
          </p>
        </div>
      </div>
    </section>
  );
}