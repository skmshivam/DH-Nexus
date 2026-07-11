import { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function SEO({ 
  title = "DH Nexus - Hire Digital Humanities Tech Talent | AI, NLP & Data Science Professionals",
  description = "Connect with enterprise-ready DH professionals skilled in Python, ML, NLP & cultural intelligence. Access pre-vetted talent from 60+ global programs. Post jobs free.",
  keywords = "hire digital humanities talent, DH professionals, AI ethics specialist, NLP engineer jobs, cultural data scientist, Python humanities, machine learning humanities, tech recruiter DH, digital humanities careers, computational linguist jobs",
  image = "https://dhnexus.com/dh-nexus-logo.png",
  url = "https://dhnexus.com",
  type = "website"
}: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name: string, content: string, property?: boolean) => {
      const attribute = property ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}=\"${name}\"]`);
      
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Primary Meta Tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'DH Nexus Team');
    updateMetaTag('robots', 'index, follow');
    updateMetaTag('language', 'English');
    
    // Open Graph / Facebook
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:site_name', 'DH Nexus', true);
    
    // Twitter
    updateMetaTag('twitter:card', 'summary_large_image', true);
    updateMetaTag('twitter:url', url, true);
    updateMetaTag('twitter:title', title, true);
    updateMetaTag('twitter:description', description, true);
    updateMetaTag('twitter:image', image, true);

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, keywords, image, url, type]);

  return null;
}

// Pre-configured SEO for different pages
export const SEOConfig = {
  home: {
    title: "DH Nexus - Digital Humanities Talent Network & Global Platform",
    description: "Connect with Digital Humanities professionals globally. Access talent from 60+ universities. Explore DH careers combining tech (Python, ML, NLP) with cultural intelligence.",
    keywords: "digital humanities jobs, DH careers, tech jobs humanities, Python jobs humanities, NLP careers, computational humanities, digital humanities India, global DH network",
    url: "https://dhnexus.com"
  },
  
  jobs: {
    title: "Digital Humanities Jobs | DH Career Opportunities | DH Nexus",
    description: "Browse curated Digital Humanities job opportunities. Explore roles in Python, NLP, data science, text mining, and cultural analytics. Post jobs free.",
    keywords: "digital humanities jobs, DH job openings, Python jobs, NLP jobs, data science jobs, text mining careers, digital curator jobs, computational humanities positions",
    url: "https://dhnexus.com/jobs"
  },
  
  talent: {
    title: "Digital Humanities Professionals | Hire DH Talent | DH Nexus",
    description: "Access global Digital Humanities talent pool from top universities. Search by skills: Python, NLP, Machine Learning, data visualization. Hire DH experts today.",
    keywords: "hire digital humanities, DH talent, computational humanities professionals, Python developers humanities, NLP experts, data science humanities, hire DH graduates",
    url: "https://dhnexus.com/talent-directory"
  },
  
  successStories: {
    title: "DH Career Success Stories | Digital Humanities Careers | DH Nexus",
    description: "Real Digital Humanities career transformations. Learn how DH professionals transitioned from academia to tech companies and cultural institutions.",
    keywords: "digital humanities success stories, DH career transformation, humanities to tech, computational humanities careers, DH professional journey",
    url: "https://dhnexus.com/success-stories"
  },
  
  whatIsDH: {
    title: "What is Digital Humanities? | Guide to DH Careers | DH Nexus",
    description: "Complete guide to Digital Humanities. Learn about DH skills (Python, NLP, ML), career paths, and why tech companies value DH professionals' unique skillset.",
    keywords: "what is digital humanities, DH definition, digital humanities skills, computational humanities, DH career guide, digital humanities education",
    url: "https://dhnexus.com/what-is-dh"
  },
  
  programs: {
    title: "60+ Digital Humanities Programs Worldwide | DH Nexus",
    description: "Discover Digital Humanities programs at top universities globally. IIT Jodhpur, Stanford, MIT, JNU, Ashoka, Christ University. Find MA, MSc, PhD programs.",
    keywords: "digital humanities programs, DH degrees, computational humanities courses, DH masters, digital humanities PhD, IIT Jodhpur DH, global DH programs",
    url: "https://dhnexus.com/global-dh"
  }
};