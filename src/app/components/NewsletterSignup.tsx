import React, { useState } from 'react';
import { Mail, CheckCircle2, AlertCircle, Loader2, Sparkles } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function NewsletterSignup() {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    interests: [] as string[]
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-abd08d6c/api/newsletter/subscribe`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${publicAnonKey}`
          },
          body: JSON.stringify(formData)
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to subscribe');
      }

      setStatus('success');
      setFormData({ email: '', name: '', interests: [] });

      // Reset after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  return (
    <div className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl p-8 text-white">
      <div className="flex items-center gap-2 mb-4">
        <Sparkles className="w-6 h-6 text-yellow-300" />
        <h3 className="text-2xl font-bold">Stay Updated</h3>
      </div>
      <p className="text-indigo-100 mb-6">
        Get the latest DH opportunities, events, and resources delivered to your inbox!
      </p>

      {status === 'success' ? (
        <div className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl p-6 flex items-start gap-3">
          <CheckCircle2 className="w-6 h-6 text-green-300 flex-shrink-0" />
          <div>
            <p className="font-medium">Welcome to DH Nexus! 🎉</p>
            <p className="text-sm text-indigo-100 mt-1">You're now subscribed to our newsletter.</p>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          {status === 'error' && (
            <div className="bg-red-500/20 border border-red-300/30 rounded-xl p-4 flex items-start gap-2">
              <AlertCircle className="w-5 h-5 text-red-200 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-red-100">{errorMessage}</p>
            </div>
          )}

          <div>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your Name (optional)"
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-indigo-200 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
            />
          </div>

          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
              className="w-full px-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-indigo-200 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all"
              required
            />
          </div>

          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-white hover:bg-indigo-50 text-indigo-600 px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'loading' ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Subscribing...
              </>
            ) : (
              <>
                <Mail className="w-5 h-5" />
                Subscribe Now
              </>
            )}
          </button>

          <p className="text-xs text-indigo-200 text-center">
            No spam, unsubscribe anytime. We respect your privacy.
          </p>
        </form>
      )}
    </div>
  );
}
