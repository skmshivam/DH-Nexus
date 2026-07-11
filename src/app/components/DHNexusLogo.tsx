import dhNexusLogo from 'figma:asset/951d00fc723ae8912305f3fb955112353119ba55.png';

interface DHNexusLogoProps {
  variant?: 'default' | 'hero' | 'footer' | 'navigation' | 'watermark';
  className?: string;
}

export function DHNexusLogo({ variant = 'default', className = '' }: DHNexusLogoProps) {
  const baseClasses = "object-contain transition-all duration-300";
  
  const variantStyles = {
    default: "h-12 w-auto",
    hero: "h-20 lg:h-24 w-auto drop-shadow-2xl hover:scale-105 hover:drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]",
    footer: "h-10 w-auto opacity-90 hover:opacity-100",
    navigation: "h-10 lg:h-12 w-auto hover:scale-105",
    watermark: "opacity-5 hover:opacity-10"
  };

  const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${className}`;

  return (
    <img 
      src={dhNexusLogo} 
      alt="DH Nexus - Digital Humanities Talent Network" 
      className={combinedClasses}
    />
  );
}

// Background watermark component for decorative use
export function DHNexusWatermark({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div className="absolute top-1/4 right-0 transform translate-x-1/4 rotate-12 opacity-[0.02]">
        <img 
          src={dhNexusLogo} 
          alt="" 
          className="h-[600px] w-auto"
        />
      </div>
      <div className="absolute bottom-0 left-0 transform -translate-x-1/4 -rotate-12 opacity-[0.02]">
        <img 
          src={dhNexusLogo} 
          alt="" 
          className="h-[500px] w-auto"
        />
      </div>
    </div>
  );
}

// Logo with gradient glow effect
export function DHNexusLogoGlow({ className = '' }: { className?: string }) {
  return (
    <div className={`relative inline-block ${className}`}>
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 blur-2xl rounded-full"></div>
      
      {/* Logo */}
      <div className="relative">
        <img 
          src={dhNexusLogo} 
          alt="DH Nexus - Digital Humanities Talent Network" 
          className="h-20 lg:h-24 w-auto object-contain drop-shadow-2xl"
        />
      </div>
    </div>
  );
}