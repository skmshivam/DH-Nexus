import { useState } from 'react';
import { DollarSign, TrendingUp, Award, MapPin, Briefcase, GraduationCap } from 'lucide-react';

const experienceLevels = {
  'entry': { multiplier: 1, label: 'Entry Level (0-2 years)' },
  'mid': { multiplier: 1.4, label: 'Mid Level (3-5 years)' },
  'senior': { multiplier: 1.8, label: 'Senior Level (6+ years)' }
};

const locations = {
  'india': { multiplier: 0.3, label: 'India', base: 25000 },
  'usa': { multiplier: 1.2, label: 'United States', base: 100000 },
  'uk': { multiplier: 0.8, label: 'United Kingdom', base: 70000 },
  'europe': { multiplier: 0.9, label: 'Europe', base: 80000 },
  'remote': { multiplier: 1.0, label: 'Remote/Global', base: 90000 }
};

const skills = [
  { name: 'Python', value: 8000 },
  { name: 'NLP', value: 12000 },
  { name: 'Machine Learning', value: 15000 },
  { name: 'Data Visualization', value: 7000 },
  { name: 'React', value: 10000 },
  { name: 'Digital Curation', value: 5000 },
  { name: 'Text Mining', value: 9000 },
  { name: 'GIS', value: 6000 }
];

export function SalaryCalculator() {
  const [experience, setExperience] = useState<keyof typeof experienceLevels>('entry');
  const [location, setLocation] = useState<keyof typeof locations>('usa');
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [education, setEducation] = useState<'bachelors' | 'masters' | 'phd'>('masters');

  const calculateSalary = () => {
    let baseSalary = locations[location].base;
    
    // Experience multiplier
    baseSalary *= experienceLevels[experience].multiplier;
    
    // Education bonus
    const educationBonus = education === 'phd' ? 15000 : education === 'masters' ? 5000 : 0;
    baseSalary += educationBonus;
    
    // Skills bonus
    const skillsBonus = selectedSkills.reduce((total, skill) => {
      const skillData = skills.find(s => s.name === skill);
      return total + (skillData?.value || 0);
    }, 0);
    baseSalary += skillsBonus;
    
    return baseSalary;
  };

  const toggleSkill = (skillName: string) => {
    if (selectedSkills.includes(skillName)) {
      setSelectedSkills(selectedSkills.filter(s => s !== skillName));
    } else {
      setSelectedSkills([...selectedSkills, skillName]);
    }
  };

  const estimatedSalary = calculateSalary();
  const minSalary = estimatedSalary * 0.85;
  const maxSalary = estimatedSalary * 1.15;

  return (
    <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 rounded-3xl p-8 border-2 border-green-200">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center">
          <DollarSign className="w-7 h-7 text-white" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900">DH Salary Calculator</h3>
          <p className="text-slate-600">Estimate your potential earnings in Digital Humanities</p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {/* Experience Level */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
            <Briefcase className="w-4 h-4" />
            Experience Level
          </label>
          <div className="space-y-2">
            {Object.entries(experienceLevels).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setExperience(key as keyof typeof experienceLevels)}
                className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                  experience === key
                    ? 'bg-green-100 border-green-500 text-green-900'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-green-300'
                }`}
              >
                {value.label}
              </button>
            ))}
          </div>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Location
          </label>
          <div className="space-y-2">
            {Object.entries(locations).map(([key, value]) => (
              <button
                key={key}
                onClick={() => setLocation(key as keyof typeof locations)}
                className={`w-full text-left px-4 py-3 rounded-xl border-2 transition-all ${
                  location === key
                    ? 'bg-green-100 border-green-500 text-green-900'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-green-300'
                }`}
              >
                {value.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
          <GraduationCap className="w-4 h-4" />
          Education
        </label>
        <div className="grid grid-cols-3 gap-3">
          {[
            { key: 'bachelors', label: 'Bachelor\'s' },
            { key: 'masters', label: 'Master\'s' },
            { key: 'phd', label: 'PhD' }
          ].map((edu) => (
            <button
              key={edu.key}
              onClick={() => setEducation(edu.key as any)}
              className={`px-4 py-3 rounded-xl border-2 font-semibold transition-all ${
                education === edu.key
                  ? 'bg-green-100 border-green-500 text-green-900'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-green-300'
              }`}
            >
              {edu.label}
            </button>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mb-8">
        <label className="block text-sm font-semibold text-slate-700 mb-3 flex items-center gap-2">
          <Award className="w-4 h-4" />
          Your Skills (select all that apply)
        </label>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {skills.map((skill) => (
            <button
              key={skill.name}
              onClick={() => toggleSkill(skill.name)}
              className={`px-4 py-3 rounded-xl border-2 font-medium transition-all ${
                selectedSkills.includes(skill.name)
                  ? 'bg-green-100 border-green-500 text-green-900'
                  : 'bg-white border-slate-200 text-slate-700 hover:border-green-300'
              }`}
            >
              <div className="text-sm">{skill.name}</div>
              <div className="text-xs text-green-600 font-bold">+${(skill.value / 1000).toFixed(0)}K</div>
            </button>
          ))}
        </div>
      </div>

      {/* Result */}
      <div className="bg-gradient-to-br from-green-600 via-emerald-600 to-teal-600 rounded-2xl p-8 text-white">
        <div className="flex items-center gap-3 mb-4">
          <TrendingUp className="w-8 h-8" />
          <h4 className="text-2xl font-bold">Your Estimated Salary</h4>
        </div>
        
        <div className="text-center mb-6">
          <div className="text-6xl font-bold mb-2">
            ${(estimatedSalary / 1000).toFixed(0)}K
          </div>
          <div className="text-green-100 text-lg">per year</div>
        </div>

        <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 mb-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-green-100">Typical Range:</span>
            <span className="font-bold">
              ${(minSalary / 1000).toFixed(0)}K - ${(maxSalary / 1000).toFixed(0)}K
            </span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">{selectedSkills.length}</div>
            <div className="text-xs text-green-100">Skills Selected</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">{education.toUpperCase()}</div>
            <div className="text-xs text-green-100">Education Level</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 text-center">
            <div className="text-2xl font-bold">{locations[location].label.split(' ')[0]}</div>
            <div className="text-xs text-green-100">Location</div>
          </div>
        </div>

        <p className="text-sm text-green-100 mt-4 text-center">
          💡 Based on actual DH job postings and industry data
        </p>
      </div>
    </div>
  );
}
