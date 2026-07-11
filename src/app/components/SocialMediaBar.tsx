import { useState, useEffect } from 'react';
import { Instagram, Linkedin, Twitter, Youtube, Facebook, Share2, X, Link2, AtSign } from 'lucide-react';

export function SocialMediaBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const socialLinks = [
    {
      name: 'Linktree',
      icon: Link2,
      url: 'https://linktr.ee/DHNexus',
      color: 'from-green-600 to-emerald-700',
      hoverColor: 'hover:from-green-500 hover:to-emerald-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/dh-nexus',
      color: 'from-blue-600 to-blue-700',
      hoverColor: 'hover:from-blue-500 hover:to-blue-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/dh_nexus',
      color: 'from-pink-600 to-rose-600',
      hoverColor: 'hover:from-pink-500 hover:to-rose-500'
    },
    {
      name: 'Threads',
      icon: AtSign,
      url: 'https://www.threads.com/@dh_nexus',
      color: 'from-slate-800 to-slate-900',
      hoverColor: 'hover:from-slate-700 hover:to-slate-800'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@dhnexus26',
      color: 'from-red-600 to-red-700',
      hoverColor: 'hover:from-red-500 hover:to-red-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/dhnexus',
      color: 'from-blue-400 to-blue-500',
      hoverColor: 'hover:from-blue-300 hover:to-blue-400'
    },
    {
      name: 'Facebook Page',
      icon: Facebook,
      url: 'https://fb.watch/EQV1E-szAn/',
      color: 'from-blue-600 to-indigo-700',
      hoverColor: 'hover:from-blue-500 hover:to-indigo-600'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/dhnexus',
      color: 'from-indigo-600 to-purple-700',
      hoverColor: 'hover:from-indigo-500 hover:to-purple-600'
    }
  ];

  if (!isVisible) return null;

  return (
    <>
      {/* Desktop - Right Side Floating Bar */}
      <div className="hidden lg:block fixed right-0 top-1/2 -translate-y-1/2 z-50">
        <div className="bg-white/95 backdrop-blur-sm rounded-l-2xl shadow-2xl border-2 border-r-0 border-slate-200 overflow-hidden">
          <div className="flex flex-col">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group bg-gradient-to-r ${social.color} ${social.hoverColor} p-4 transition-all hover:pr-16 relative overflow-hidden`}
                  title={`Follow us on ${social.name}`}
                >
                  <Icon className="w-6 h-6 text-white relative z-10" />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Follow
                  </span>
                </a>
              );
            })}
          </div>
          
          {/* Follow Us Label */}
          <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-3 text-xs font-semibold text-center">
            FOLLOW US
          </div>
        </div>
      </div>

      {/* Mobile - Bottom Floating Button */}
      <div className="lg:hidden fixed bottom-6 right-6 z-50">
        {isExpanded && (
          <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl border-2 border-slate-200 p-4 mb-2 animate-fadeIn">
            <div className="flex flex-col gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 bg-gradient-to-r ${social.color} ${social.hoverColor} text-white px-4 py-3 rounded-xl transition-all shadow-lg`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm font-semibold">{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        )}
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110"
        >
          {isExpanded ? (
            <X className="w-6 h-6" />
          ) : (
            <Share2 className="w-6 h-6" />
          )}
        </button>
      </div>
    </>
  );
}