import { ResearchInnovation } from '../components/ResearchInnovation';
import { ProjectsCaseStudies } from '../components/ProjectsCaseStudies';
import { StartupsEcosystem } from '../components/StartupsEcosystem';
import { DHNexusWatermark } from '../components/DHNexusLogo';

export function ResearchPage() {
  return (
    <div className="min-h-screen relative">
      {/* Subtle watermark background */}
      <DHNexusWatermark />
      
      {/* Page Header */}
      <div className="bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-7xl mb-6">
            Research & Innovation
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto">
            Cutting-edge Digital Humanities research, projects, and startup ecosystem
          </p>
        </div>
      </div>

      {/* Research & Innovation */}
      <ResearchInnovation />

      {/* Projects & Case Studies */}
      <ProjectsCaseStudies />

      {/* Startups Ecosystem */}
      <StartupsEcosystem />
    </div>
  );
}