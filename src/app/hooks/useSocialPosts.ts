import { useState, useEffect } from 'react';

export interface SocialPost {
  platform: 'linkedin' | 'instagram' | 'twitter' | 'threads' | 'youtube';
  id: string;
  url: string;
  content: string;
  image: string;
  date: string;
  likes: number;
  comments: number;
}

// Fallback posts if API fails
const fallbackPosts: SocialPost[] = [
  {
    platform: 'youtube',
    id: 'vEaWR77pdqQ',
    url: 'https://youtu.be/vEaWR77pdqQ?si=zkxsOL6uMojQbQlV',
    content: 'What is Digital Humanities? Discover how DH combines technology, data analysis, and cultural studies to transform traditional humanities research. Learn about career opportunities and the growing DH ecosystem! 🎓',
    image: 'https://img.youtube.com/vi/vEaWR77pdqQ/maxresdefault.jpg',
    date: '2025-01-24',
    likes: 156,
    comments: 28
  },
  {
    platform: 'linkedin',
    id: '7415898776092950528',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:7415898776092950528',
    content: 'Excited to announce the launch of DH Nexus - a comprehensive platform connecting Digital Humanities talent with industry opportunities! 🚀',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
    date: '2025-01-13',
    likes: 45,
    comments: 12
  },
  {
    platform: 'instagram',
    id: 'dh-nexus-1',
    url: 'https://www.instagram.com/dh_nexus',
    content: 'Building bridges between academia and industry in Digital Humanities. Join our growing community! 🌐 #DigitalHumanities #DHNexus',
    image: 'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=800',
    date: '2025-01-12',
    likes: 89,
    comments: 23
  },
  {
    platform: 'linkedin',
    id: 'dh-nexus-2',
    url: 'https://www.linkedin.com/company/dh-nexus',
    content: 'Digital Humanities professionals combine technical skills with cultural intelligence. Discover why companies are hiring DH graduates! 💼',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    date: '2025-01-10',
    likes: 67,
    comments: 15
  },
  {
    platform: 'instagram',
    id: 'dh-nexus-3',
    url: 'https://www.instagram.com/dh_nexus',
    content: '22 Indian DH programs, 65+ global universities - all in one platform. Explore your options! 🎓 #DHEducation #HigherEd',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
    date: '2025-01-09',
    likes: 102,
    comments: 18
  }
];

export function useSocialPosts() {
  const [posts, setPosts] = useState<SocialPost[]>(fallbackPosts);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchSocialPosts();
    
    // Refresh posts every 30 minutes
    const interval = setInterval(fetchSocialPosts, 30 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  async function fetchSocialPosts() {
    try {
      setLoading(true);
      setError(null);

      // Fetch from your backend API endpoint
      const response = await fetch('/api/social-posts', {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      // Check if response is actually JSON (not HTML error page)
      const contentType = response.headers.get('content-type');
      if (!contentType || !contentType.includes('application/json')) {
        // API endpoint not set up yet, use fallback posts silently
        setPosts(fallbackPosts);
        setLoading(false);
        return;
      }

      if (!response.ok) {
        throw new Error('Failed to fetch posts');
      }

      const data = await response.json();
      
      if (data.posts && data.posts.length > 0) {
        setPosts(data.posts);
        setError(null); // Clear any previous errors
      } else {
        setPosts(fallbackPosts);
      }
    } catch (err) {
      // Silently use fallback posts - this is expected behavior when API isn't set up
      setPosts(fallbackPosts);
    } finally {
      setLoading(false);
    }
  }

  return { posts, loading, error, refresh: fetchSocialPosts };
}