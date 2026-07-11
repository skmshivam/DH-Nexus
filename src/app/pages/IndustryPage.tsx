import { IndustryHub } from '../components/IndustryHub';
import { ProjectsCaseStudies } from '../components/ProjectsCaseStudies';
import { TalentPipeline } from '../components/TalentPipeline';
import { DHNexusWatermark } from '../components/DHNexusLogo';

export function IndustryPage() {
  return (
    <div className="min-h-screen relative">
      {/* Subtle watermark background */}
      <DHNexusWatermark />
      
      {/* Page Header */}
      <div className="bg-gradient-to-br from-emerald-600 via-teal-600 to-cyan-600 text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-7xl mb-6">
            Industry Connections
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto">
            Bridging Digital Humanities talent with industry opportunities worldwide
          </p>
        </div>
      </div>

      {/* Industry Hub */}
      <IndustryHub />

      {/* Projects & Case Studies */}
      <ProjectsCaseStudies />

      {/* Talent Pipeline */}
      <TalentPipeline />
    </div>
  );
}