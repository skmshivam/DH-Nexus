import React, { useState } from 'react';
import { BookOpen, Link as LinkIcon, Send, CheckCircle2, AlertCircle, Loader2, Tag, User, Mail, FileText } from 'lucide-react';
import { projectId, publicAnonKey } from '../utils/supabase/info';

export function SubmitResourcePage() {
  const [formData, setFormData] = useState({
    title: '',
    url: '',
    description: '',
    category: 'article',
    submittedBy: '',
    submitterEmail: '',
    tags: [] as string[]
  });

  const [currentTag, setCurrentTag] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-abd08d6c/api/resources`,
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
        throw new Error(data.error || 'Failed to submit resource');
      }

      setStatus('success');
      setFormData({
        title: '',
        url: '',
        description: '',
        category: 'article',
        submittedBy: '',
        submitterEmail: '',
        tags: []
      });

      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Resource submission error:', error);
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong');
    }
  };

  const addTag = () => {
    if (currentTag.trim() && !formData.tags.includes(currentTag.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, currentTag.trim()]
      });
      setCurrentTag('');
    }
  };

  const removeTag = (tag: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(t => t !== tag)
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 py-20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full mb-6 border border-white/30">
            <BookOpen className="w-5 h-5" />
            <span className="text-sm">Community Contributions</span>
          </div>
          <h1 className="text-5xl lg:text-7xl text-white mb-6">
            Share DH Resources
          </h1>
          <p className="text-xl lg:text-2xl text-amber-100 max-w-4xl mx-auto leading-relaxed">
            Help build our community knowledge base by sharing articles, tools, papers, and tutorials
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-slate-900 mb-4">Why Share Resources?</h2>
            <p className="text-xl text-slate-600">Help the DH community grow and learn together</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200">
              <BookOpen className="w-12 h-12 text-amber-600 mb-4" />
              <h3 className="text-xl text-slate-900 mb-2 font-semibold">Build Knowledge</h3>
              <p className="text-slate-600 text-sm">
                Contribute to a comprehensive DH resource library
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-6 border-2 border-orange-200">
              <User className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl text-slate-900 mb-2 font-semibold">Get Recognition</h3>
              <p className="text-slate-600 text-sm">
                Your contributions will be credited and appreciated
              </p>
            </div>

            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-2xl p-6 border-2 border-red-200">
              <LinkIcon className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-xl text-slate-900 mb-2 font-semibold">Share Discoveries</h3>
              <p className="text-slate-600 text-sm">
                Help others discover valuable DH resources
              </p>
            </div>
          </div>

          {/* Submission Form */}
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-200">
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Submit a Resource</h3>
              <p className="text-slate-600">Share an article, tool, paper, tutorial, or any DH resource</p>
            </div>

            {status === 'success' && (
              <div className="mb-6 bg-green-50 border border-green-200 rounded-xl p-4 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-green-800 font-medium">Resource submitted successfully! 🎉</p>
                  <p className="text-green-700 text-sm">It will be reviewed and published soon. Thank you for contributing!</p>
                </div>
              </div>
            )}

            {status === 'error' && (
              <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-800 font-medium">Failed to submit resource</p>
                  <p className="text-red-700 text-sm">{errorMessage}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title */}
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-slate-700 mb-2">
                  <FileText className="w-4 h-4 inline mr-2" />
                  Resource Title *
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g., Introduction to Digital Humanities"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* URL */}
              <div>
                <label htmlFor="url" className="block text-sm font-medium text-slate-700 mb-2">
                  <LinkIcon className="w-4 h-4 inline mr-2" />
                  Resource URL *
                </label>
                <input
                  type="url"
                  id="url"
                  name="url"
                  value={formData.url}
                  onChange={handleChange}
                  placeholder="https://example.com/resource"
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  required
                />
              </div>

              {/* Category */}
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-slate-700 mb-2">
                  Category *
                </label>
                <select
                  id="category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  required
                >
                  <option value="article">Article / Blog Post</option>
                  <option value="tool">Tool / Software</option>
                  <option value="paper">Research Paper</option>
                  <option value="tutorial">Tutorial / Guide</option>
                  <option value="dataset">Dataset</option>
                  <option value="course">Online Course</option>
                  <option value="book">Book / eBook</option>
                  <option value="video">Video / Webinar</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Description */}
              <div>
                <label htmlFor="description" className="block text-sm font-medium text-slate-700 mb-2">
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="Brief description of the resource and why it's useful..."
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all resize-none"
                />
              </div>

              {/* Tags */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  <Tag className="w-4 h-4 inline mr-2" />
                  Tags
                </label>
                <div className="flex gap-2 mb-3">
                  <input
                    type="text"
                    value={currentTag}
                    onChange={(e) => setCurrentTag(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                    placeholder="Add tags (e.g., NLP, Python, Text Mining)"
                    className="flex-1 px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                  <button
                    type="button"
                    onClick={addTag}
                    className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl transition-all"
                  >
                    Add
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {formData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-700 rounded-xl text-sm"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeTag(tag)}
                        className="hover:bg-amber-200 rounded-full p-0.5 transition-colors"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Submitter Info */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="submittedBy" className="block text-sm font-medium text-slate-700 mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Your Name (optional)
                  </label>
                  <input
                    type="text"
                    id="submittedBy"
                    name="submittedBy"
                    value={formData.submittedBy}
                    onChange={handleChange}
                    placeholder="Leave blank to submit anonymously"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>

                <div>
                  <label htmlFor="submitterEmail" className="block text-sm font-medium text-slate-700 mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Your Email (optional)
                  </label>
                  <input
                    type="email"
                    id="submitterEmail"
                    name="submitterEmail"
                    value={formData.submitterEmail}
                    onChange={handleChange}
                    placeholder="For updates on your submission"
                    className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-transparent transition-all"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none shadow-lg"
              >
                {status === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Submit Resource
                  </>
                )}
              </button>

              <p className="text-sm text-slate-500 text-center">
                All submissions are reviewed before being published
              </p>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
