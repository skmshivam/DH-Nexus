import { GlobalLandscape } from '../components/GlobalLandscape';
import { LeadingUniversities } from '../components/LeadingUniversities';
import { DHOverview } from '../components/DHOverview';
import { DHNexusWatermark } from '../components/DHNexusLogo';

export function GlobalDHPage() {
  return (
    <div className="min-h-screen relative">
      {/* Subtle watermark background */}
      <DHNexusWatermark />
      
      {/* Page Header */}
      <div className="bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-7xl mb-6">
            Global Digital Humanities Landscape
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto">
            Explore how Digital Humanities is transforming academia, research, and industry worldwide
          </p>
        </div>
      </div>

      {/* DH Overview */}
      <DHOverview />

      {/* Global Landscape */}
      <GlobalLandscape />

      {/* Leading Universities */}
      <LeadingUniversities />
    </div>
  );
}