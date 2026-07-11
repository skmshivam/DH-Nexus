import { useEffect } from 'react';

interface StructuredDataProps {
  data: object;
}

export function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    script.id = `structured-data-${Math.random().toString(36).substring(7)}`;
    document.head.appendChild(script);

    return () => {
      // Cleanup on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [data]);

  return null;
}

// Predefined structured data for common page types
export const structuredDataSchemas = {
  jobBoard: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Digital Humanities Jobs",
    "description": "Browse curated Digital Humanities job opportunities from top companies worldwide",
    "url": "https://dhnexus.com/jobs",
    "numberOfItems": 127,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "JobPosting",
          "title": "Digital Humanities Jobs at Top Companies",
          "description": "Explore roles in Python, NLP, data science, and cultural analytics",
          "url": "https://dhnexus.com/jobs"
        }
      }
    ]
  },

  talentDirectory: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Digital Humanities Professionals Directory",
    "description": "Connect with DH talent from 60+ global universities",
    "url": "https://dhnexus.com/talent-directory",
    "numberOfItems": 2847,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Person",
          "name": "Digital Humanities Professional",
          "jobTitle": "DH Specialist",
          "description": "Skilled in Python, NLP, Machine Learning, and Cultural Analytics"
        }
      }
    ]
  },

  events: {
    "@context": "https://schema.org",
    "@type": "EventSeries",
    "name": "DH Nexus Workshops & Events",
    "description": "Digital Humanities workshops, webinars, and networking events",
    "url": "https://dhnexus.com/events",
    "organizer": {
      "@type": "Organization",
      "name": "DH Nexus",
      "url": "https://dhnexus.com"
    }
  },

  resources: {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": "Digital Humanities Resources",
    "description": "Curated resources, tools, and learning materials for DH professionals",
    "url": "https://dhnexus.com/resources",
    "publisher": {
      "@type": "Organization",
      "name": "DH Nexus",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dhnexus.com/dh-nexus-logo.png"
      }
    }
  },

  globalPrograms: {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Global Digital Humanities Programs",
    "description": "60+ DH programs from universities worldwide including IIT Jodhpur, Stanford, MIT",
    "url": "https://dhnexus.com/global-dh",
    "numberOfItems": 60,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": {
          "@type": "Course",
          "name": "Digital Humanities Programs",
          "description": "MA, MSc, PhD programs in Digital Humanities",
          "provider": {
            "@type": "Organization",
            "name": "DH Nexus"
          }
        }
      }
    ]
  },

  forRecruiters: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "DH Nexus Recruitment Services",
    "description": "Access pre-vetted Digital Humanities talent for your organization",
    "url": "https://dhnexus.com/for-recruiters",
    "serviceType": "Talent Recruitment",
    "provider": {
      "@type": "Organization",
      "name": "DH Nexus",
      "logo": {
        "@type": "ImageObject",
        "url": "https://dhnexus.com/dh-nexus-logo.png"
      }
    },
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://dhnexus.com/for-recruiters"
    }
  }
};
