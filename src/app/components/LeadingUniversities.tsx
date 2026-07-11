import { MapPin, GraduationCap, Award, Sparkles, Globe2, Building2, Users, BookOpen, Lightbulb, ExternalLink } from 'lucide-react';

const regions = [
  {
    name: 'India',
    color: 'from-orange-500 to-rose-600',
    universities: [
      { 
        name: 'Indian Institute of Technology (IIT) Jodhpur', 
        program: 'M.Sc. in Digital Humanities', 
        city: 'Jodhpur', 
        highlight: true,
        description: '2-year postgraduate degree focusing on digital technologies, culture, society, and data analysis. Also offers Ph.D. in DH.',
        link: 'https://www.linkedin.com/company/dh-nexus'
      },
      { 
        name: 'Indian Institute of Technology (IIT) Dhanbad', 
        program: 'MA in Digital Humanities & Social Sciences', 
        city: 'Dhanbad (ISM)', 
        description: 'Postgraduate program blending humanities with digital methods and social science research',
        link: 'https://admissions.iitism.ac.in/ma/assets/admission/ma/brochure/MA%20Information%20Brochure%2025-26.pdf'
      },
      { 
        name: 'Jadavpur University', 
        program: 'Post-Graduate Certificate in DH & Cultural Informatics', 
        city: 'Kolkata',
        description: '4-month certificate programme in digital tools, cultural data representation, and DH skills. Also hosts School of Cultural Texts and Records.',
        link: 'https://jadavpuruniversity.in/academics/school-of-cultural-texts-and-records-2/'
      },
      { 
        name: 'Shiv Nadar University', 
        program: 'Digital Humanities Research & Programs', 
        city: 'Greater Noida',
        description: 'Dedicated research areas in digital humanities with interdisciplinary approach',
        link: 'https://snu.edu.in/research-areas/digital-humanities/'
      },
      { 
        name: 'International Institute of Information Technology (IIIT) Bangalore', 
        program: 'Digital Humanities & Social Sciences (DHSS)', 
        city: 'Bangalore',
        description: 'Interdisciplinary program combining computational methods with social sciences and humanities research',
        link: 'https://dhss.iiitb.ac.in/'
      },
      { 
        name: 'Indian Institute of Technology (IIT) Guwahati', 
        program: 'Digital Humanities Courses (HSS Department)', 
        city: 'Guwahati',
        description: 'Humanities & Social Sciences courses incorporating digital methods and computational approaches',
        link: 'https://www.iitg.ac.in/hss/page_syllabus_details.php?slno=dXNjMnBzY1BYZnFBU0dhblpOdDRVZz09'
      },
      { 
        name: 'Indian Institute of Technology (IIT) Madras', 
        program: 'Digital Humanities Course (School Connect)', 
        city: 'Chennai',
        description: 'Introduction to Digital Humanities through IIT Madras School Connect platform',
        link: 'https://code.iitm.ac.in/schoolconnect/course-details?course=hu'
      },
      { 
        name: 'Indian Institute of Technology (IIT) Delhi', 
        program: 'Digital Humanities Winter School + SWAYAM Courses', 
        city: 'New Delhi',
        description: 'Intensive training workshop, online courses (Text, Textuality and Digital Media on SWAYAM/NPTEL)',
        link: 'https://iitddh.github.io/posts/dhws2/'
      },
      { 
        name: 'Symbiosis E-Learning Development Centre (SEDC)', 
        program: 'Digital Humanities Programs & Workshops', 
        city: 'Pune',
        description: 'Digital humanities training, workshops, and e-learning initiatives focusing on digital tools and methodologies',
        link: 'https://www.sedc.ac.in/uploads/latest-events/SEDC_DIGITAL_HUMANITIES_5.10.2020.pdf'
      },
      { 
        name: 'CHRIST (Deemed to be University)', 
        program: 'MA (English with Digital Humanities)', 
        city: 'Pune (Lavasa Campus)',
        description: 'Postgraduate course combining English literature with digital technologies, text analytics, and digital media',
        link: 'https://christuniversity.in'
      },
      { 
        name: 'FLAME University', 
        program: 'Foundation Courses in Digital Humanities', 
        city: 'Pune',
        description: 'Foundation courses in humanities with digital approaches, available via SWAYAM for self-paced learning',
        link: 'https://www.flame.edu.in/academics/ug/program-structure/foundation-courses/humanities'
      },
      { 
        name: 'K.R. Mangalam University', 
        program: 'Digital Humanities Programs & Career Tracks', 
        city: 'Gurugram',
        description: 'Career-oriented DH programs focusing on rapidly growing career domains in digital humanities',
        link: 'https://www.krmangalam.edu.in/digital-humanities-a-rapidly-growing-career-domain/'
      },
      { 
        name: 'Pondicherry University', 
        program: 'Building the Digital Humanities (SPARC Workshops)', 
        city: 'Puducherry',
        description: 'Short courses and workshops for introductory exposure to DH concepts and tools'
      },
      { 
        name: 'Chhatrapati Shahu Ji Maharaj University', 
        program: 'Diploma in Digital Humanities', 
        city: 'Kanpur',
        description: 'Diploma focused on DH skills. Eligibility: Graduation in any stream. Fee: ~₹10,000'
      },
      { 
        name: 'Christ University (Multi-campus)', 
        program: 'BA (English - Honours) with Digital Humanities', 
        city: 'Delhi NCR / Bangalore / Pune',
        description: 'Undergraduate degree integrating DH theory within English/Liberal Arts (digital storytelling, tools, research)',
        link: 'https://christuniversity.in'
      },
      { 
        name: 'University of Delhi (DU)', 
        program: 'Digital Humanities Module (BA Honours)', 
        city: 'New Delhi',
        description: 'Introduction to Digital Humanities paper teaching digital data, archives, metadata, and tools'
      },
      { 
        name: 'Digital University Kerala', 
        program: 'School of Digital Humanities and Liberal Arts', 
        city: 'Kerala',
        description: 'Focus on DH, computational methods in social sciences, digital culture, and interdisciplinary tech programs',
        link: 'https://duk.ac.in/school-of-digital-humanities-and-liberal-arts/'
      },
      { 
        name: 'O.P. Jindal Global University', 
        program: 'Digital Humanities and Social Science Programs', 
        city: 'Sonipat, Haryana',
        description: 'Interdisciplinary DH programs integrating technology with humanities research and teaching',
        link: 'https://libguides.jgu.edu.in/subjects/guide.php?subject=DHS'
      },
      { 
        name: 'Nirma University', 
        program: 'Digital Humanities Initiative', 
        city: 'Ahmedabad, Gujarat',
        description: 'Technology-focused Digital Humanities programs and research initiatives',
        link: 'https://technology.nirmauni.ac.in/digital-humanities/'
      },
      { 
        name: 'Vallath Institute', 
        program: 'Certificate Course on Digital Humanities', 
        city: 'Online',
        description: 'Professional certificate program in digital humanities methods, tools, and applications',
        link: 'https://vallath.in/program/certificate-course-on-digital-humanities/'
      },
      { 
        name: 'SWAYAM Platform', 
        program: 'Introduction to Digital Humanities (Online Course)', 
        city: 'Online (India)',
        description: 'Free online course available through SWAYAM/NPTEL platform covering fundamentals of digital humanities',
        link: 'https://www.classcentral.com/course/swayam-introduction-to-digital-humanities-455583'
      },
      { 
        name: 'Center for Digital Humanities (CDH) Pune', 
        program: 'DH Initiatives & Workshops', 
        city: 'Pune',
        description: 'Community center offering workshops, training programs, and collaborative DH initiatives',
        link: 'https://cdhpune.com/initiatives/'
      }
    ]
  },
  {
    name: 'United Kingdom & Ireland',
    color: 'from-blue-500 to-indigo-600',
    universities: [
      { name: 'University College London (UCL)', program: 'MA or MSc in Digital Humanities', city: 'London, UK', description: 'Choice between theoretical (MA) or technical/methodological (MSc) track', link: 'https://www.educations.com/institutions/ucl/digital-humanities-ma' },
      { name: 'King\'s College London', program: 'MA in Digital Humanities', city: 'London, UK', description: 'Focus on digital culture and humanistic inquiry', link: 'https://www.educations.com/institutions/kings-college-london-faculty-of-arts-and-humanities/ma-in-digital-humanities' },
      { name: 'University of Southampton', program: 'MSc in Digital Humanities and Data Science', city: 'Southampton, UK', description: 'Blends humanities with quantitative, data-driven methods', link: 'https://www.educations.com/institutions/university-of-southampton/msc-in-digital-humanities-data-science' },
      { name: 'University of St Andrews', program: 'MSc in Global Digital Humanities (Online)', city: 'St Andrews, UK', description: 'International perspectives and global accessibility', link: 'https://www.st-andrews.ac.uk/modern-languages/subjects/digital-humanities/' },
      { name: 'Trinity College Dublin', program: 'MPhil in Digital Humanities and Culture', city: 'Dublin, Ireland', description: 'Impact of digital technology on culture and heritage', link: 'https://www.st-andrews.ac.uk/modern-languages/subjects/digital-humanities/' },
      { name: 'National University of Ireland Maynooth', program: 'MA & PhD in Digital Arts and Humanities', city: 'Maynooth, Ireland' }
    ]
  },
  {
    name: 'Northern & Western Europe',
    color: 'from-purple-500 to-pink-600',
    universities: [
      { name: 'University of Bologna', program: 'Digital Humanities and Digital Knowledge (DHDK)', city: 'Bologna, Italy', description: 'Preservation and organization of humanistic culture', link: 'https://www.educations.com/institutions/university-of-bologna/master-in-digital-humanities-and-digital-knowledge-dhdk?fl=1' },
      { name: 'University of Groningen', program: 'MA in Communication and Information Studies: DH', city: 'Groningen, Netherlands', description: 'DH within information and communication networks', link: 'https://www.educations.com/institutions/university-of-groningen/ma-in-communication-information-studies-digital-humanities' },
      { name: 'Maastricht University', program: 'MA in Media Studies: Digital Cultures', city: 'Maastricht, Netherlands', description: 'Cultural and ethical implications of digital tech', link: 'https://www.educations.com/institutions/fasos/ma-media-studies-digital-cultures' },
      { name: 'University of Helsinki', program: 'Master in Linguistic Diversity and Digital Humanities', city: 'Helsinki, Finland', description: 'Languages through digital research methods', link: 'https://www.educations.com/institutions/university-of-helsinki/master-in-linguistic-diversity-and-digital-humanities' },
      { name: 'KU Leuven', program: 'Master of Digital Humanities', city: 'Leuven, Belgium', description: 'Advanced training in digital tools for research', link: 'https://www.educations.com/institutions/ku-leuven/master-of-digital-humanities?fl=3' },
      { name: 'Uppsala University', program: 'Digital Humanities Research (ALM)', city: 'Uppsala, Sweden', description: 'Focus on Archives, Libraries, and Museums', link: 'https://www.uu.se/en/department/alm/research/research-areas/digital-humanities' },
      { name: 'Linnaeus University', program: 'Master of Arts in Digital Humanities', city: 'Växjö/Kalmar, Sweden', description: 'Interdisciplinary program combining humanities and digital technologies', link: 'https://www.educations.com/institutions/linnaeus-university/master-of-arts-in-digital-humanities' }
    ]
  },
  {
    name: 'Southern & Eastern Europe',
    color: 'from-emerald-500 to-teal-600',
    universities: [
      { name: 'University of Turin (UniTo)', program: 'Master in Language Technologies and Digital Humanities', city: 'Turin, Italy', description: 'Specializes in computational linguistics', link: 'https://www.educations.com/institutions/unito/master-in-language-technologies-and-digital-humanities?fl=2' },
      { name: 'Ca\' Foscari University of Venice', program: 'MA in Digital and Public Humanities', city: 'Venice, Italy', description: 'Making research accessible to the public', link: 'https://www.educations.com/institutions/ca-foscari-university-of-venice/ma-in-digital-and-public-humanities' },
      { name: 'Riga Technical University', program: 'Master of Digital Humanities', city: 'Riga, Latvia', description: 'Technical and engineering aspects of DH', link: 'https://apply.rtu.lv/courses/course/227-msc-digital-humanities' },
      { name: 'University of Barcelona', program: 'Master\'s in Digital Humanities', city: 'Barcelona, Spain', description: 'Comprehensive study of digital methods', link: 'https://www.educations.com/institutions/universitat-de-barcelona/masters-degree-in-digital-humanities' },
      { name: 'EPFL', program: 'Master in Digital Humanities', city: 'Lausanne, Switzerland', description: 'Strong computational approaches to cultural data', link: 'https://www.epfl.ch/education/master/programs/digital-humanities/' }
    ]
  },
  {
    name: 'North America',
    color: 'from-cyan-500 to-blue-600',
    universities: [
      { name: 'Stanford University', program: 'Graduate Certificate in Digital Humanities', city: 'California, USA', description: 'Spatial and textual analysis', link: 'https://majors.stanford.edu/majors/digital-humanities' },
      { name: 'Harvard University', program: 'Introduction to Digital Humanities', city: 'Massachusetts, USA', description: 'Foundational online course', link: 'https://pll.harvard.edu/course/introduction-digital-humanities' },
      { name: 'CUNY Graduate Center', program: 'MA Track in Digital Humanities', city: 'New York, USA', description: 'Critical pedagogy and theory', link: 'https://jitp.commons.gc.cuny.edu/about-the-journal/' },
      { name: 'Michigan State University', program: 'Graduate Certificate in Digital Humanities', city: 'Michigan, USA' },
      { name: 'University of Iowa', program: 'Graduate Certificate in Public Digital Humanities', city: 'Iowa, USA', description: 'Public engagement and community projects' },
      { name: 'Carleton University', program: 'MA in Digital Humanities', city: 'Ottawa, Canada', description: 'Collaborative master\'s program' },
      { name: 'University of Alberta', program: 'MA in Humanities Computing', city: 'Alberta, Canada', description: 'One of the earliest established programs' },
      { name: 'UC Berkeley', program: 'DH Program, D-Lab', city: 'California, USA' },
      { name: 'MIT', program: 'Digital Humanities, HyperStudio', city: 'Massachusetts, USA' },
      { name: 'University of Toronto', program: 'Centre for Digital Humanities', city: 'Ontario, Canada' }
    ]
  },
  {
    name: 'Asia-Pacific',
    color: 'from-green-500 to-emerald-600',
    universities: [
      { name: 'Australian National University', program: 'Minor in Digital Humanities', city: 'Canberra, Australia', description: 'Undergraduate specialization' },
      { name: 'National University of Singapore', program: 'DH Research Groups', city: 'Singapore' },
      { name: 'University of Tokyo', program: 'Digital Humanities Center', city: 'Tokyo, Japan' },
      { name: 'Kyoto University', program: 'DH Research', city: 'Kyoto, Japan' },
      { name: 'University of Sydney', program: 'Sydney Informatics Hub', city: 'Sydney, Australia' },
      { name: 'Peking University', program: 'Digital Humanities Center', city: 'Beijing, China' },
      { name: 'National Taiwan University', program: 'DH Research Center', city: 'Taipei, Taiwan' }
    ]
  }
];

const notableCenters = [
  { name: 'ADHO', full: 'Alliance of Digital Humanities Organizations', type: 'Global Network', icon: '🌍' },
  { name: 'DARIAH', full: 'Digital Research Infrastructure for Arts & Humanities', type: 'European Network', icon: '🇪🇺' },
  { name: 'CenterNet', full: 'International Network of DH Centers', type: 'Global Collaboration', icon: '🤝' },
  { name: 'Humanities Commons', full: 'Scholarly Network', type: 'Academic Community', icon: '📚' },
  { name: 'DHd', full: 'Digital Humanities (German-speaking)', type: 'Regional Network', icon: '🇩🇪' },
  { name: 'JADH', full: 'Japanese Association for Digital Humanities', type: 'Regional Network', icon: '🇯🇵' }
];

const learningResources = [
  { 
    name: 'DH Dharti', 
    description: 'Indian Digital Humanities platform for learning, resources, and community building',
    link: 'https://dhdharti.in/',
    icon: '🇮🇳',
    type: 'Platform'
  },
  { 
    name: 'IIT Delhi DH Faculty', 
    description: 'Digital Humanities faculty expertise and research at IIT Delhi Humanities & Social Sciences',
    link: 'https://hss.iitd.ac.in/faculty/arjun',
    icon: '👨‍🏫',
    type: 'Faculty Research'
  },
  { 
    name: 'NextMovez Career Guide', 
    description: 'Comprehensive career guide to Digital Humanities opportunities and pathways',
    link: 'https://nextmovez.in/career-guide-to-digital-humanities/',
    icon: '💼',
    type: 'Career Guide'
  },
  { 
    name: 'Harvard edX Course', 
    description: 'Introduction to Digital Humanities - Free online course from Harvard University',
    link: 'https://www.edx.org/learn/humanities/harvard-university-introduction-to-digital-humanities',
    icon: '🎓',
    type: 'Online Course'
  },
  { 
    name: 'Open University - OpenLearn', 
    description: 'Digital Humanities: Humanities Research in the Digital Age - Free learning materials',
    link: 'https://www.open.edu/openlearn/history-the-arts/digital-humanities-humanities-research-the-digital-age/',
    icon: '📖',
    type: 'Learning Materials'
  },
  { 
    name: 'CIS India DH Report', 
    description: 'Digital Humanities for Indian Higher Education - Research and insights',
    link: 'https://cis-india.org/digital-natives/digital-humanities-for-indian-higher-education',
    icon: '📊',
    type: 'Research'
  },
  { 
    name: 'Deccan Herald Article', 
    description: 'Reimagining the Humanities Stream in the Digital Age',
    link: 'https://www.deccanherald.com/education/reimagining-the-humanities-stream-in-the-digital-age-2-3852392',
    icon: '📰',
    type: 'Article'
  },
  {
    name: 'SWAYAM Introduction to DH',
    description: 'Free online course on Introduction to Digital Humanities on India\'s SWAYAM platform',
    link: 'https://onlinecourses.swayam2.ac.in/nou25_hs77/preview',
    icon: '🎓',
    type: 'Online Course'
  },
  {
    name: 'Study in Europe - DH Guide',
    description: 'Complete guide to studying Digital Humanities programs in Europe',
    link: 'https://www.study.eu/article/study-digital-humanities',
    icon: '🇪🇺',
    type: 'Study Guide'
  },
  {
    name: 'Educations.com DH Directory',
    description: 'Browse and compare Digital Humanities programs worldwide',
    link: 'https://www.educations.com/digital-humanities',
    icon: '🌍',
    type: 'Program Directory'
  },
  {
    name: 'Wikipedia - Digital Humanities',
    description: 'Comprehensive encyclopedia article on Digital Humanities field and history',
    link: 'https://en.wikipedia.org/wiki/Digital_humanities',
    icon: '📚',
    type: 'Reference'
  },
  {
    name: 'My German University - DH Programs',
    description: 'Digital Humanities programs in Germany without NC (admission restrictions)',
    link: 'https://www.mygermanuniversity.com/subjects/digital-humanities/nc-free',
    icon: '🇩🇪',
    type: 'Study Guide'
  },
  {
    name: 'EADH - DH Centres Europe',
    description: 'European Association for Digital Humanities - Directory of DH centres',
    link: 'https://eadh.org/education/digital-humanities-centres',
    icon: '🏛️',
    type: 'Directory'
  }
];

export function LeadingUniversities() {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-6 py-3 rounded-full mb-6 border border-indigo-200">
            <Globe2 className="w-5 h-5" />
            <span className="text-sm font-semibold">Global DH Ecosystem</span>
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            Leading Universities in Digital Humanities
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Explore world-class DH programs across India and globally—from pioneering research centers to collaborative networks shaping the future
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          <div className="bg-gradient-to-br from-orange-500 to-rose-600 rounded-2xl p-8 text-white shadow-xl">
            <Building2 className="w-10 h-10 mb-4 opacity-80" />
            <div className="text-5xl font-bold mb-2">20+</div>
            <div className="text-orange-100">Major DH Programs in India</div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white shadow-xl">
            <GraduationCap className="w-10 h-10 mb-4 opacity-80" />
            <div className="text-5xl font-bold mb-2">60+</div>
            <div className="text-blue-100">Global DH Programs</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-8 text-white shadow-xl">
            <Globe2 className="w-10 h-10 mb-4 opacity-80" />
            <div className="text-5xl font-bold mb-2">6</div>
            <div className="text-purple-100">Continents Represented</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-8 text-white shadow-xl">
            <Users className="w-10 h-10 mb-4 opacity-80" />
            <div className="text-5xl font-bold mb-2">Global</div>
            <div className="text-green-100">Collaborative Networks</div>
          </div>
        </div>

        {/* India Spotlight Section */}
        <div className="mb-20 bg-gradient-to-br from-orange-50 via-rose-50 to-pink-50 rounded-3xl p-10 lg:p-16 border border-orange-200 shadow-xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="text-5xl">🇮🇳</div>
            <div>
              <h3 className="text-3xl lg:text-4xl text-slate-900 mb-2">Digital Humanities in India</h3>
              <p className="text-lg text-slate-600">Leading the DH revolution in South Asia</p>
            </div>
          </div>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed">
            India is emerging as a powerhouse in Digital Humanities, with institutions from IITs to central universities establishing dedicated programs. These programs uniquely blend India's rich cultural heritage with cutting-edge technology, creating opportunities for students from diverse backgrounds.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {regions[0].universities.map((uni, idx) => (
              <div 
                key={idx} 
                className={`bg-white rounded-xl p-6 shadow-lg border-2 transition-all hover:scale-105 hover:shadow-2xl ${
                  uni.highlight 
                    ? 'border-orange-400 bg-gradient-to-br from-orange-50 to-white' 
                    : 'border-orange-200 hover:border-orange-400'
                }`}
              >
                {uni.highlight && (
                  <div className="inline-flex items-center gap-1 bg-orange-500 text-white text-xs px-3 py-1 rounded-full mb-3">
                    <Sparkles className="w-3 h-3" />
                    <span>Featured</span>
                  </div>
                )}
                <div className="flex items-start gap-3 mb-3">
                  <GraduationCap className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                  <div className="flex-1">
                    <h4 className="font-semibold text-slate-900 mb-1 text-lg">{uni.name}</h4>
                    <p className="text-sm text-slate-600 mb-2">{uni.program}</p>
                    <div className="flex items-center gap-1 text-xs text-orange-600 mb-2">
                      <MapPin className="w-3 h-3" />
                      <span>{uni.city}</span>
                    </div>
                    {uni.description && (
                      <p className="text-xs text-slate-500 leading-relaxed">{uni.description}</p>
                    )}
                  </div>
                </div>
                {uni.link && (
                  <a
                    href={uni.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs text-orange-600 hover:text-orange-700 font-medium mt-2"
                  >
                    <ExternalLink className="w-3 h-3" />
                    <span>Visit Website</span>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Global Programs by Region */}
        <div className="mb-16">
          <h3 className="text-3xl lg:text-4xl mb-10 text-slate-900 text-center">DH Programs Around the World</h3>
          <div className="grid lg:grid-cols-3 gap-8">
            {regions.slice(1).map((region, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden hover:shadow-2xl transition-all">
                <div className={`bg-gradient-to-r ${region.color} text-white p-6`}>
                  <div className="flex items-center gap-3 mb-2">
                    <MapPin className="w-7 h-7" />
                    <h4 className="text-2xl font-bold">{region.name}</h4>
                  </div>
                  <p className="text-sm opacity-90">{region.universities.length} Leading Institutions</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {region.universities.map((uni, uIndex) => (
                      <div key={uIndex} className="border-l-4 border-indigo-200 pl-4 py-2 hover:border-indigo-500 hover:bg-indigo-50 transition-all rounded-r-lg">
                        <div className="font-semibold text-slate-900 mb-1">{uni.name}</div>
                        <div className="text-sm text-slate-600 mb-1">{uni.program}</div>
                        <div className="flex items-center gap-1 text-xs text-slate-500 mb-2">
                          <MapPin className="w-3 h-3" />
                          <span>{uni.city}</span>
                        </div>
                        {uni.description && (
                          <p className="text-xs text-slate-500 mb-2 leading-relaxed">{uni.description}</p>
                        )}
                        {uni.link && (
                          <a
                            href={uni.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-700 font-semibold mt-1"
                          >
                            <ExternalLink className="w-3 h-3" />
                            <span>Visit Website</span>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Notable Centers & Networks */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 rounded-3xl p-10 lg:p-16 text-white shadow-2xl">
          <div className="flex items-center gap-4 mb-10">
            <Award className="w-12 h-12 text-yellow-400" />
            <div>
              <h3 className="text-3xl lg:text-4xl mb-2">Global DH Research Networks</h3>
              <p className="text-blue-200">Connecting scholars, researchers, and practitioners worldwide</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {notableCenters.map((center, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 hover:scale-105 transition-all">
                <div className="text-4xl mb-3">{center.icon}</div>
                <div className="text-xl font-semibold mb-2">{center.name}</div>
                <div className="text-sm text-blue-200 mb-2">{center.full}</div>
                <div className="inline-block bg-indigo-500/30 text-indigo-100 text-xs px-3 py-1 rounded-full">
                  {center.type}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Resources */}
        <div className="bg-gradient-to-br from-slate-900 via-indigo-900 to-purple-900 rounded-3xl p-10 lg:p-16 text-white shadow-2xl mt-10">
          <div className="flex items-center gap-4 mb-10">
            <BookOpen className="w-12 h-12 text-yellow-400" />
            <div>
              <h3 className="text-3xl lg:text-4xl mb-2">Learning Resources for Digital Humanities</h3>
              <p className="text-blue-200">Explore platforms, courses, and materials to enhance your DH knowledge</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {learningResources.map((resource, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 hover:bg-white/20 hover:scale-105 transition-all">
                <div className="text-4xl mb-3">{resource.icon}</div>
                <div className="text-xl font-semibold mb-2">{resource.name}</div>
                <div className="text-sm text-blue-200 mb-2">{resource.description}</div>
                <div className="inline-block bg-indigo-500/30 text-indigo-100 text-xs px-3 py-1 rounded-full">
                  {resource.type}
                </div>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs text-indigo-100 hover:text-indigo-200 font-medium mt-2"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Visit Resource</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl">
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
          <h3 className="text-3xl lg:text-4xl mb-4">Join the Global DH Community</h3>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Whether you're in India or anywhere in the world, Digital Humanities offers pathways to innovative careers and transformative research
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://forms.gle/BRnw51wzHxXp9jVS6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-indigo-600 hover:bg-blue-50 px-10 py-4 rounded-xl transition-all transform hover:scale-105 shadow-xl text-lg font-semibold"
            >
              <GraduationCap className="w-5 h-5" />
              Join DH Network
            </a>
            <a
              href="/dh-at-iitj"
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border-2 border-white hover:bg-white/30 text-white px-8 py-4 rounded-xl transition-all text-lg"
            >
              Explore IIT Jodhpur Program
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}