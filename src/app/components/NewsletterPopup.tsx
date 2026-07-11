import React, { useState, useEffect } from 'react';
import { X, Mail, Bell, Instagram, Linkedin, Twitter, Facebook, Youtube, CheckCircle2, Link2 } from 'lucide-react';

export function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Check if user has already seen the popup
    const hasSeenPopup = localStorage.getItem('hasSeenNewsletterPopup');
    
    if (!hasSeenPopup) {
      // Show popup after 10 seconds
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10000);

      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('hasSeenNewsletterPopup', 'true');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the email to your backend
    setIsSubmitted(true);
    setTimeout(() => {
      handleClose();
    }, 2000);
  };

  const socialLinks = [
    {
      name: 'Linktree',
      icon: Link2,
      url: 'https://linktr.ee/DHNexus',
      color: 'hover:text-green-600'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/company/dh-nexus',
      color: 'hover:text-blue-600'
    },
    {
      name: 'Instagram',
      icon: Instagram,
      url: 'https://www.instagram.com/dh_nexus',
      color: 'hover:text-pink-600'
    },
    {
      name: 'Twitter',
      icon: Twitter,
      url: 'https://twitter.com/dhnexus',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Facebook',
      icon: Facebook,
      url: 'https://facebook.com/dhnexus',
      color: 'hover:text-blue-700'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: 'https://youtube.com/@dhnexus',
      color: 'hover:text-red-600'
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      ></div>

      {/* Popup */}
      <div className="relative bg-white rounded-3xl shadow-2xl max-w-2xl w-full overflow-hidden animate-slideUp">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 bg-white/80 backdrop-blur-sm hover:bg-white text-slate-600 hover:text-slate-900 p-2 rounded-full transition-all shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {isSubmitted ? (
          // Success State
          <div className="p-12 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900 mb-4">Welcome to DH Nexus! 🎉</h3>
            <p className="text-lg text-slate-600">
              Thank you for subscribing. You'll receive our latest updates and opportunities.
            </p>
          </div>
        ) : (
          <>
            {/* Header with Gradient */}
            <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 p-8 text-white text-center">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                <Bell className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-3">
                Stay Connected with DH Nexus
              </h3>
              <p className="text-blue-100 text-lg">
                Get the latest opportunities, resources, and insights delivered to your inbox
              </p>
            </div>

            {/* Content */}
            <div className="p-8">
              {/* Benefits */}
              <div className="grid md:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: '📧', title: 'Weekly Updates', desc: 'Latest DH news & opportunities' },
                  { icon: '🎓', title: 'Learning Resources', desc: 'Exclusive educational content' },
                  { icon: '💼', title: 'Job Alerts', desc: 'Get notified of new positions' }
                ].map((benefit, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl mb-2">{benefit.icon}</div>
                    <div className="font-semibold text-slate-900 text-sm mb-1">{benefit.title}</div>
                    <div className="text-xs text-slate-600">{benefit.desc}</div>
                  </div>
                ))}
              </div>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="mb-6">
                <div className="flex gap-3">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      required
                      className="w-full pl-12 pr-4 py-4 border-2 border-slate-200 rounded-xl focus:border-indigo-500 focus:outline-none text-slate-900 placeholder:text-slate-400"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white px-8 py-4 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl"
                  >
                    Subscribe
                  </button>
                </div>
                <p className="text-xs text-slate-500 mt-3 text-center">
                  We respect your privacy. Unsubscribe anytime.
                </p>
              </form>

              {/* Divider */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex-1 h-px bg-slate-200"></div>
                <span className="text-sm text-slate-500 font-semibold">OR FOLLOW US</span>
                <div className="flex-1 h-px bg-slate-200"></div>
              </div>

              {/* Social Media Links */}
              <div className="flex justify-center gap-3">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-12 h-12 border-2 border-slate-200 ${social.color} rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:shadow-lg text-slate-600`}
                      title={`Follow us on ${social.name}`}
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>

              {/* Skip Button */}
              <div className="text-center mt-6">
                <button
                  onClick={handleClose}
                  className="text-sm text-slate-500 hover:text-slate-700 underline"
                >
                  Maybe later
                </button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}