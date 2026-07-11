import { PartnerWithUs } from '../components/PartnerWithUs';
import { DHNexusWatermark } from '../components/DHNexusLogo';

export function PartnerPage() {
  return (
    <div className="min-h-screen relative">
      {/* Subtle watermark background */}
      <DHNexusWatermark />
      
      {/* Page Header */}
      <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 text-white py-20 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-5xl lg:text-7xl mb-6">
            Partner With Us
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto">
            Collaborate with IIT Jodhpur's Digital Humanities program to drive innovation and impact
          </p>
        </div>
      </div>

      {/* Partner With Us */}
      <PartnerWithUs />
    </div>
  );
}