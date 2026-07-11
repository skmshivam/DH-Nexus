// Sample data for demo/expo presentation

export const sampleJobs = [
  {
    id: 'job_demo_1',
    companyName: 'Google Arts & Culture',
    jobTitle: 'Digital Humanities Researcher',
    description: 'Join our team to digitize and preserve cultural heritage using ML and NLP. Work with museums worldwide to make art accessible to everyone.',
    requirements: ['Python', 'NLP', 'TensorFlow', 'Cultural Heritage', 'Data Visualization'],
    location: 'Mountain View, CA (Hybrid)',
    jobType: 'Full-time',
    salary: '$120,000 - $150,000',
    applyUrl: 'https://careers.google.com',
    contactEmail: 'arts@google.com',
    postedAt: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'active',
    applicationsCount: 24
  },
  {
    id: 'job_demo_2',
    companyName: 'Stanford University',
    jobTitle: 'DH Developer - Literary Analysis Platform',
    description: 'Build tools for analyzing 19th century literature using computational methods. Collaborate with English and Computer Science departments.',
    requirements: ['JavaScript', 'React', 'Text Mining', 'API Development', 'Git'],
    location: 'Stanford, CA',
    jobType: 'Full-time',
    salary: '$95,000 - $115,000',
    applyUrl: 'https://stanford.edu/careers',
    contactEmail: 'litlab@stanford.edu',
    postedAt: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'active',
    applicationsCount: 18
  },
  {
    id: 'job_demo_3',
    companyName: 'Microsoft Research',
    jobTitle: 'AI for Historical Archives',
    description: 'Develop AI models to digitize and analyze historical manuscripts. Work on cutting-edge OCR and handwriting recognition.',
    requirements: ['Deep Learning', 'Computer Vision', 'PyTorch', 'Azure', 'Research'],
    location: 'Redmond, WA / Remote',
    jobType: 'Full-time',
    salary: '$140,000 - $180,000',
    applyUrl: 'https://microsoft.com/careers',
    contactEmail: 'research@microsoft.com',
    postedAt: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'active',
    applicationsCount: 31
  },
  {
    id: 'job_demo_4',
    companyName: 'British Library',
    jobTitle: 'Digital Curator - Medieval Manuscripts',
    description: 'Curate and digitize medieval manuscript collection. Create metadata and digital exhibitions for global access.',
    requirements: ['Digital Curation', 'Medieval Studies', 'XML', 'Metadata Standards', 'Latin'],
    location: 'London, UK',
    jobType: 'Full-time',
    salary: '£45,000 - £55,000',
    applyUrl: 'https://bl.uk/careers',
    contactEmail: 'curator@bl.uk',
    postedAt: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'active',
    applicationsCount: 12
  },
  {
    id: 'job_demo_5',
    companyName: 'Netflix',
    jobTitle: 'Content Analyst - Cultural Trends',
    description: 'Analyze viewing patterns across cultures using data science and humanities perspectives. Shape global content strategy.',
    requirements: ['Data Analysis', 'SQL', 'Cultural Studies', 'Statistics', 'Tableau'],
    location: 'Los Gatos, CA',
    jobType: 'Full-time',
    salary: '$110,000 - $140,000',
    applyUrl: 'https://netflix.com/jobs',
    contactEmail: 'talent@netflix.com',
    postedAt: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'active',
    applicationsCount: 42
  },
  {
    id: 'job_demo_6',
    companyName: 'Smithsonian Institution',
    jobTitle: 'DH Specialist - Museum Analytics',
    description: 'Build interactive digital experiences for museum visitors. Use data to understand visitor engagement and optimize exhibitions.',
    requirements: ['UX Design', 'Data Visualization', 'D3.js', 'Museum Studies', 'JavaScript'],
    location: 'Washington, DC',
    jobType: 'Full-time',
    salary: '$85,000 - $105,000',
    applyUrl: 'https://si.edu/careers',
    contactEmail: 'jobs@si.edu',
    postedAt: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'active',
    applicationsCount: 15
  },
  {
    id: 'job_demo_7',
    companyName: 'Amazon',
    jobTitle: 'Machine Learning Linguist',
    description: 'Improve Alexa\'s language understanding across cultures. Combine linguistics expertise with ML to enhance voice AI.',
    requirements: ['Linguistics', 'Machine Learning', 'Python', 'NLP', 'Multilingual'],
    location: 'Seattle, WA',
    jobType: 'Full-time',
    salary: '$130,000 - $165,000',
    applyUrl: 'https://amazon.jobs',
    contactEmail: 'alexa-jobs@amazon.com',
    postedAt: new Date(Date.now() - 6 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'active',
    applicationsCount: 28
  },
  {
    id: 'job_demo_8',
    companyName: 'New York Times',
    jobTitle: 'Digital Archivist',
    description: 'Preserve and organize 170 years of NYT history. Build search tools and digital archives for journalists and researchers.',
    requirements: ['Archival Science', 'Database Design', 'Metadata', 'Python', 'Journalism'],
    location: 'New York, NY',
    jobType: 'Full-time',
    salary: '$75,000 - $95,000',
    applyUrl: 'https://nytimes.com/jobs',
    contactEmail: 'careers@nytimes.com',
    postedAt: new Date(Date.now() - 8 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'active',
    applicationsCount: 19
  }
];

export const sampleProfiles = [
  {
    id: 'student_demo_1',
    name: 'Priya Sharma',
    email: 'priya.sharma@example.com',
    institute: 'IIT Jodhpur',
    program: 'M.Sc. Digital Humanities',
    graduationYear: '2024',
    skills: ['Python', 'NLP', 'Text Mining', 'React', 'TensorFlow', 'Data Visualization'],
    bio: 'Passionate about using computational methods to analyze Hindi literature. Currently working on a sentiment analysis project for ancient Sanskrit texts.',
    linkedin: 'https://linkedin.com/in/priyasharma',
    github: 'https://github.com/priyasharma',
    portfolio: 'https://priyasharma.dev',
    resume: 'https://drive.google.com/priya-resume',
    lookingFor: 'opportunities',
    location: 'Bangalore, India',
    interests: ['Natural Language Processing', 'Indian Literature', 'Cultural Analytics'],
    status: 'active',
    profileComplete: true
  },
  {
    id: 'student_demo_2',
    name: 'Rahul Desai',
    email: 'rahul.desai@example.com',
    institute: 'JNU Delhi',
    program: 'MA Digital Humanities',
    graduationYear: '2025',
    skills: ['JavaScript', 'D3.js', 'GIS', 'Historical Research', 'Web Development', 'SQL'],
    bio: 'Building interactive maps of historical trade routes in medieval India. Expertise in geospatial data visualization and historical cartography.',
    linkedin: 'https://linkedin.com/in/rahuldesai',
    github: 'https://github.com/rahuldesai',
    portfolio: 'https://rahuldesai.com',
    resume: 'https://drive.google.com/rahul-resume',
    lookingFor: 'internships',
    location: 'Delhi, India',
    interests: ['Digital Mapping', 'Historical GIS', 'Indian History'],
    status: 'active',
    profileComplete: true
  },
  {
    id: 'student_demo_3',
    name: 'Ananya Patel',
    email: 'ananya.patel@example.com',
    institute: 'IIT Bombay',
    program: 'B.Tech + M.Tech (Dual Degree)',
    graduationYear: '2025',
    skills: ['Machine Learning', 'Computer Vision', 'PyTorch', 'Art History', 'Image Processing'],
    bio: 'Developing AI models to authenticate and date ancient Indian artwork. Combining computer vision with art historical expertise.',
    linkedin: 'https://linkedin.com/in/ananyapatel',
    github: 'https://github.com/ananyapatel',
    portfolio: 'https://ananyapatel.ai',
    resume: 'https://drive.google.com/ananya-resume',
    lookingFor: 'opportunities',
    location: 'Mumbai, India',
    interests: ['AI in Art', 'Cultural Heritage', 'Computer Vision'],
    status: 'active',
    profileComplete: true
  },
  {
    id: 'student_demo_4',
    name: 'Arjun Kumar',
    email: 'arjun.kumar@example.com',
    institute: 'IIT Jodhpur',
    program: 'M.Sc. Digital Humanities',
    graduationYear: '2024',
    skills: ['Network Analysis', 'Social Network Theory', 'Python', 'Gephi', 'Data Science'],
    bio: 'Analyzing social networks in 19th century Indian literature. Using graph theory to understand character relationships and narrative structures.',
    linkedin: 'https://linkedin.com/in/arjunkumar',
    github: 'https://github.com/arjunkumar',
    portfolio: 'https://arjunkumar.net',
    resume: 'https://drive.google.com/arjun-resume',
    lookingFor: 'collaboration',
    location: 'Jodhpur, India',
    interests: ['Network Science', 'Literary Analysis', 'Graph Theory'],
    status: 'active',
    profileComplete: true
  },
  {
    id: 'student_demo_5',
    name: 'Sneha Reddy',
    email: 'sneha.reddy@example.com',
    institute: 'University of Hyderabad',
    program: 'PhD Digital Humanities',
    graduationYear: '2026',
    skills: ['Corpus Linguistics', 'R', 'Statistical Analysis', 'Translation Studies', 'TEI XML'],
    bio: 'Researching machine translation for low-resource Indian languages. Building parallel corpora for Telugu-English translation.',
    linkedin: 'https://linkedin.com/in/snehareddy',
    github: 'https://github.com/snehareddy',
    portfolio: 'https://snehareddy.research',
    resume: 'https://drive.google.com/sneha-resume',
    lookingFor: 'collaboration',
    location: 'Hyderabad, India',
    interests: ['Computational Linguistics', 'Translation', 'Indian Languages'],
    status: 'active',
    profileComplete: true
  },
  {
    id: 'student_demo_6',
    name: 'Vikram Singh',
    email: 'vikram.singh@example.com',
    institute: 'IIT Delhi',
    program: 'M.Tech Computer Science',
    graduationYear: '2024',
    skills: ['Blockchain', 'Smart Contracts', 'Digital Preservation', 'Cryptography', 'Solidity'],
    bio: 'Exploring blockchain for authenticating and preserving digital cultural heritage. Building decentralized archives for historical documents.',
    linkedin: 'https://linkedin.com/in/vikramsingh',
    github: 'https://github.com/vikramsingh',
    portfolio: 'https://vikramsingh.tech',
    resume: 'https://drive.google.com/vikram-resume',
    lookingFor: 'opportunities',
    location: 'Delhi, India',
    interests: ['Blockchain', 'Digital Archives', 'Preservation'],
    status: 'active',
    profileComplete: true
  },
  {
    id: 'student_demo_7',
    name: 'Meera Krishnan',
    email: 'meera.krishnan@example.com',
    institute: 'Ashoka University',
    program: 'BA Liberal Arts',
    graduationYear: '2025',
    skills: ['UX Research', 'Digital Storytelling', 'Adobe Creative Suite', 'User Testing', 'Wireframing'],
    bio: 'Designing interactive digital exhibitions for museums. Passionate about making cultural heritage accessible and engaging through technology.',
    linkedin: 'https://linkedin.com/in/meerakrishnan',
    github: 'https://github.com/meerakrishnan',
    portfolio: 'https://meerakrishnan.design',
    resume: 'https://drive.google.com/meera-resume',
    lookingFor: 'internships',
    location: 'Sonipat, India',
    interests: ['Museum Tech', 'UX Design', 'Digital Exhibitions'],
    status: 'active',
    profileComplete: true
  },
  {
    id: 'student_demo_8',
    name: 'Aditya Mehta',
    email: 'aditya.mehta@example.com',
    institute: 'Stanford University',
    program: 'MS Computer Science',
    graduationYear: '2024',
    skills: ['Full Stack Development', 'Node.js', 'MongoDB', 'React', 'Cloud Computing', 'DevOps'],
    bio: 'Building scalable platforms for digital humanities research. Previously developed a crowdsourcing platform for manuscript transcription.',
    linkedin: 'https://linkedin.com/in/adityamehta',
    github: 'https://github.com/adityamehta',
    portfolio: 'https://adityamehta.io',
    resume: 'https://drive.google.com/aditya-resume',
    lookingFor: 'opportunities',
    location: 'Palo Alto, CA',
    interests: ['Web Development', 'Digital Tools', 'Scalability'],
    status: 'active',
    profileComplete: true
  }
];

export const sampleResources = [
  {
    id: 'resource_demo_1',
    title: 'Introduction to Text Mining with Python',
    url: 'https://www.nltk.org/book/',
    description: 'Comprehensive guide to natural language processing and text mining using Python and NLTK. Perfect for DH beginners.',
    category: 'tutorial',
    submittedBy: 'Dr. Sarah Johnson',
    submitterEmail: 'sarah@example.com',
    tags: ['Python', 'NLP', 'Text Mining', 'NLTK', 'Beginners'],
    submittedAt: new Date(Date.now() - 10 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    upvotes: 47
  },
  {
    id: 'resource_demo_2',
    title: 'Voyant Tools - Text Analysis Platform',
    url: 'https://voyant-tools.org/',
    description: 'Web-based reading and analysis environment for digital texts. No coding required - great for literary analysis.',
    category: 'tool',
    submittedBy: 'Priya Sharma',
    submitterEmail: 'priya@example.com',
    tags: ['Text Analysis', 'No Code', 'Literary Studies', 'Visualization'],
    submittedAt: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    upvotes: 52
  },
  {
    id: 'resource_demo_3',
    title: 'The Programming Historian',
    url: 'https://programminghistorian.org/',
    description: 'Peer-reviewed tutorials for digital historians. Covers everything from web scraping to network analysis.',
    category: 'tutorial',
    submittedBy: 'Anonymous',
    submitterEmail: '',
    tags: ['History', 'Tutorials', 'Digital Methods', 'Research'],
    submittedAt: new Date(Date.now() - 20 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    upvotes: 68
  },
  {
    id: 'resource_demo_4',
    title: 'Stanford Literary Lab Publications',
    url: 'https://litlab.stanford.edu/pamphlets/',
    description: 'Cutting-edge research in computational literary analysis. Must-read for DH researchers.',
    category: 'paper',
    submittedBy: 'Rahul Desai',
    submitterEmail: 'rahul@example.com',
    tags: ['Literary Analysis', 'Research', 'Computational Methods'],
    submittedAt: new Date(Date.now() - 25 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    upvotes: 41
  },
  {
    id: 'resource_demo_5',
    title: 'Gephi - Network Visualization',
    url: 'https://gephi.org/',
    description: 'Open-source software for visualizing and analyzing networks. Essential for social network analysis in DH.',
    category: 'tool',
    submittedBy: 'Arjun Kumar',
    submitterEmail: 'arjun@example.com',
    tags: ['Network Analysis', 'Visualization', 'Social Networks', 'Graph Theory'],
    submittedAt: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000).toISOString(),
    status: 'approved',
    upvotes: 55
  }
];

export const successStories = [
  {
    name: 'Priya Sharma',
    role: 'NLP Researcher at Google',
    image: '👩‍💻',
    testimonial: 'DH Nexus connected me with Google Arts & Culture. Within 3 months, I went from student to researcher working on preserving Indian cultural heritage!',
    company: 'Google',
    salary: '$145K',
    previousRole: 'M.Sc. Student, IIT Jodhpur'
  },
  {
    name: 'Vikram Singh',
    role: 'Blockchain Developer at ConsenSys',
    image: '👨‍💻',
    testimonial: 'The platform helped me showcase my digital preservation projects. Got contacted by 5 companies, accepted offer from ConsenSys to build heritage NFTs.',
    company: 'ConsenSys',
    salary: '$130K',
    previousRole: 'M.Tech Student, IIT Delhi'
  },
  {
    name: 'Ananya Patel',
    role: 'Computer Vision Engineer at Microsoft',
    image: '👩‍🔬',
    testimonial: 'My AI art authentication project on DH Nexus got noticed by Microsoft Research. Now working on historical manuscript digitization!',
    company: 'Microsoft',
    salary: '$155K',
    previousRole: 'Dual Degree, IIT Bombay'
  },
  {
    name: 'Aditya Mehta',
    role: 'Full Stack Developer at Smithsonian',
    image: '👨‍🎨',
    testimonial: 'Built my profile on DH Nexus, got headhunted for museum tech role. Living the dream building interactive exhibitions for millions of visitors!',
    company: 'Smithsonian',
    salary: '$95K',
    previousRole: 'MS Student, Stanford'
  }
];

export const platformStats = {
  totalUsers: 2847,
  activeJobs: 127,
  companiesHiring: 64,
  successfulHires: 312,
  averageSalary: 118000,
  countriesRepresented: 23,
  institutionsPartnered: 45,
  resourcesShared: 489,
  weeklyGrowth: 12.5,
  placementRate: 87
};

export const recentActivity = [
  {
    type: 'job_posted',
    company: 'Google Arts & Culture',
    action: 'posted a new job',
    title: 'Digital Humanities Researcher',
    time: '2 hours ago',
    icon: '💼'
  },
  {
    type: 'profile_created',
    user: 'Priya Sharma',
    action: 'joined the talent network',
    title: 'IIT Jodhpur, M.Sc. DH',
    time: '5 hours ago',
    icon: '👤'
  },
  {
    type: 'application',
    user: 'Rahul Desai',
    action: 'applied to',
    title: 'Digital Curator at British Library',
    time: '8 hours ago',
    icon: '📝'
  },
  {
    type: 'resource_added',
    user: 'Dr. Sarah Johnson',
    action: 'shared a resource',
    title: 'Text Mining with Python Tutorial',
    time: '1 day ago',
    icon: '📚'
  },
  {
    type: 'hire',
    company: 'Microsoft Research',
    action: 'hired',
    title: 'Ananya Patel as Computer Vision Engineer',
    time: '2 days ago',
    icon: '🎉'
  }
];

export const skillsTrending = [
  { skill: 'Python', count: 342, growth: 15 },
  { skill: 'NLP', count: 298, growth: 22 },
  { skill: 'Machine Learning', count: 267, growth: 18 },
  { skill: 'React', count: 245, growth: 12 },
  { skill: 'Data Visualization', count: 223, growth: 20 },
  { skill: 'Text Mining', count: 198, growth: 25 },
  { skill: 'Digital Curation', count: 176, growth: 10 },
  { skill: 'GIS', count: 154, growth: 14 }
];

export const topCompanies = [
  { name: 'Google', jobs: 12, avgSalary: 145000 },
  { name: 'Microsoft', jobs: 9, avgSalary: 155000 },
  { name: 'Stanford University', jobs: 8, avgSalary: 105000 },
  { name: 'Netflix', jobs: 6, avgSalary: 135000 },
  { name: 'Amazon', jobs: 7, avgSalary: 148000 },
  { name: 'British Library', jobs: 5, avgSalary: 65000 },
  { name: 'Smithsonian', jobs: 4, avgSalary: 95000 },
  { name: 'New York Times', jobs: 3, avgSalary: 85000 }
];
