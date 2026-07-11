import { EventsOpportunities } from '../components/EventsOpportunities';
import { EventsCollaboration } from '../components/EventsCollaboration';
import { SEO } from '../components/SEO';
import { StructuredData, structuredDataSchemas } from '../components/StructuredData';
import { DHNexusLogo, DHNexusWatermark } from '../components/DHNexusLogo';
import { Calendar } from 'lucide-react';

export function EventsPage() {
  return (
    <div className="min-h-screen relative">
      {/* Subtle watermark background */}
      <DHNexusWatermark />
      
      <SEO 
        title="Digital Humanities Events & Workshops | DH Nexus"
        description="Join DH workshops, conferences, and networking events. Connect with the global Digital Humanities community."
        keywords="digital humanities events, DH workshops, DH conferences, humanities networking, DH community events"
        url="https://dhnexus.com/events"
      />
      <StructuredData data={structuredDataSchemas.events} />
      
      {/* Page Header */}
      <section className="bg-gradient-to-br from-rose-600 via-pink-600 to-purple-600 py-20 relative">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-3 mb-6">
            <DHNexusLogo variant="default" className="h-14" />
          </div>
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-6 border border-white/30">
            <Calendar className="w-5 h-5" />
            <span className="text-sm">DH Events</span>
          </div>
          <h1 className="text-5xl lg:text-7xl mb-6">
            Events & Community
          </h1>
          <p className="text-xl lg:text-2xl text-blue-100 max-w-4xl mx-auto">
            Join workshops, conferences, and networking opportunities in the DH community
          </p>
        </div>
      </section>

      {/* Events & Opportunities */}
      <EventsOpportunities />

      {/* Events Collaboration */}
      <EventsCollaboration />
    </div>
  );
}