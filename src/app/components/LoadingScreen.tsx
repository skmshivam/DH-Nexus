import dhNexusLogo from 'figma:asset/951d00fc723ae8912305f3fb955112353119ba55.png';

interface LoadingScreenProps {
  message?: string;
}

export function LoadingScreen({ message = "Loading DH Nexus..." }: LoadingScreenProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Loading content */}
      <div className="relative text-center">
        {/* Logo with pulse animation */}
        <div className="mb-8 relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-pink-500/30 blur-3xl rounded-full animate-pulse"></div>
          
          {/* Logo */}
          <div className="relative">
            <img 
              src={dhNexusLogo} 
              alt="DH Nexus" 
              className="h-32 w-auto object-contain mx-auto animate-bounce"
            />
          </div>
        </div>

        {/* Loading text */}
        <div className="text-white text-xl mb-4">{message}</div>
        
        {/* Loading bar */}
        <div className="w-64 h-2 bg-white/10 rounded-full overflow-hidden mx-auto">
          <div className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-full animate-loading-bar"></div>
        </div>

        {/* Loading dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          <div className="w-3 h-3 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-pink-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>
    </div>
  );
}

// Mini loading spinner with logo
export function LogoSpinner({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-16',
    lg: 'h-24'
  };

  return (
    <div className="inline-flex items-center justify-center">
      <div className="relative">
        {/* Spinning border */}
        <div className="absolute inset-0 border-4 border-transparent border-t-cyan-500 border-r-purple-500 rounded-full animate-spin"></div>
        
        {/* Logo */}
        <div className="p-2">
          <img 
            src={dhNexusLogo} 
            alt="Loading..." 
            className={`${sizeClasses[size]} w-auto object-contain animate-pulse`}
          />
        </div>
      </div>
    </div>
  );
}