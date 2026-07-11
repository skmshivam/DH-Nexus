import { Network, Sparkles } from 'lucide-react';
import { DHNexusLogo } from './DHNexusLogo';

export function DHNexusBrand() {
  return (
    <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 text-white py-3 px-6 border-b-2 border-cyan-400/50">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
        {/* Logo */}
        <DHNexusLogo variant="default" className="h-8 animate-pulse" />
        
        {/* Brand Name */}
        <div className="flex items-center gap-3">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-100 to-white bg-clip-text text-transparent">
            DH NEXUS
          </h1>
          <div className="hidden sm:flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-xs font-semibold">DH Talent Network</span>
          </div>
        </div>
        
        {/* Network Icon */}
        <Network className="w-6 h-6 text-cyan-300 animate-pulse hidden md:block" />
      </div>
    </div>
  );
}