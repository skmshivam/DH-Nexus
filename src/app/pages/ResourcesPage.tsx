import { SEO } from '../components/SEO';
import { StructuredData, structuredDataSchemas } from '../components/StructuredData';
import { ResourcesNetworks } from '../components/ResourcesNetworks';
import dhNexusLogo from 'figma:asset/951d00fc723ae8912305f3fb955112353119ba55.png';
import { BookOpen } from 'lucide-react';

export function ResourcesPage() {
  return (
    <div className="min-h-screen">
      <SEO 
        title="Digital Humanities Resources & Networks | DH Nexus"
        description="Curated resources, tools, and learning materials for Digital Humanities professionals. Connect with global DH networks and communities."
        keywords="digital humanities resources, DH tools, DH learning, computational humanities, DH networks, digital humanities communities"
        url="https://dhnexus.com/resources"
      />
      <StructuredData data={structuredDataSchemas.resources} />
      
      {/* Page Header */}
      <div className="bg-gradient-to-br from-slate-800 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <img 
              src={dhNexusLogo} 
              alt="DH Nexus Logo" 
              className="h-14 w-auto object-contain"
            />
          </div>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-6 border border-white/30">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm">DH Resources</span>
          </div>
          <h1 className="text-5xl lg:text-7xl mb-6">
            Resources & Networks
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto">
            Essential tools, learning materials, and global DH networks to advance your journey
          </p>
        </div>
      </div>

      {/* Resources & Networks */}
      <ResourcesNetworks />
    </div>
  );
}