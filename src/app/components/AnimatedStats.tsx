import React, { useState, useEffect, useRef } from 'react';
import { Users, Building2, GraduationCap, Globe, Briefcase, TrendingUp } from 'lucide-react';

interface StatItemProps {
  endValue: number;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  suffix?: string;
  prefix?: string;
  color: string;
  delay?: number;
}

function StatItem({ endValue, label, icon: Icon, suffix = '', prefix = '', color, delay = 0 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = endValue / steps;
    const stepDuration = duration / steps;

    const timer = setTimeout(() => {
      let currentCount = 0;
      const interval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= endValue) {
          setCount(endValue);
          clearInterval(interval);
        } else {
          setCount(Math.floor(currentCount));
        }
      }, stepDuration);

      return () => clearInterval(interval);
    }, delay);

    return () => clearTimeout(timer);
  }, [isVisible, endValue, delay]);

  return (
    <div 
      ref={elementRef}
      className={`group bg-white rounded-2xl p-8 shadow-xl border-2 border-slate-200 hover:border-${color}-400 transition-all hover:scale-105 hover:shadow-2xl`}
    >
      <div className={`w-16 h-16 bg-gradient-to-br ${color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className={`text-5xl lg:text-6xl font-bold bg-gradient-to-r ${color} bg-clip-text text-transparent mb-3`}>
        {prefix}{count.toLocaleString()}{suffix}
      </div>
      <div className="text-lg text-slate-600 font-medium">{label}</div>
    </div>
  );
}

export function AnimatedStats() {
  const stats = [
    {
      icon: Users,
      endValue: 500,
      suffix: '+',
      label: 'DH Professionals',
      color: 'from-blue-500 to-indigo-600',
      delay: 0
    },
    {
      icon: Building2,
      endValue: 100,
      suffix: '+',
      label: 'Partner Companies',
      color: 'from-purple-500 to-pink-600',
      delay: 200
    },
    {
      icon: GraduationCap,
      endValue: 65,
      suffix: '+',
      label: 'Global Universities',
      color: 'from-orange-500 to-rose-600',
      delay: 400
    },
    {
      icon: Globe,
      endValue: 25,
      suffix: '+',
      label: 'Countries Represented',
      color: 'from-green-500 to-emerald-600',
      delay: 600
    },
    {
      icon: Briefcase,
      endValue: 150,
      suffix: '+',
      label: 'Job Placements',
      color: 'from-cyan-500 to-blue-600',
      delay: 800
    },
    {
      icon: TrendingUp,
      endValue: 95,
      suffix: '%',
      label: 'Satisfaction Rate',
      color: 'from-teal-500 to-green-600',
      delay: 1000
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-white via-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-100 to-purple-100 text-indigo-700 px-6 py-3 rounded-full mb-6 border border-indigo-200">
            <TrendingUp className="w-5 h-5" />
            <span className="text-sm font-semibold">Our Impact</span>
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            DH Nexus by the Numbers
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Join thousands of professionals, students, and organizations shaping the future of Digital Humanities
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              icon={stat.icon}
              endValue={stat.endValue}
              suffix={stat.suffix}
              label={stat.label}
              color={stat.color}
              delay={stat.delay}
            />
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-10 lg:p-12 text-white shadow-2xl">
          <div className="grid lg:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-3">🚀</div>
              <div className="text-3xl font-bold mb-2">Growing Fast</div>
              <div className="text-blue-200">200% growth in the last year</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-3">🌟</div>
              <div className="text-3xl font-bold mb-2">Trusted Quality</div>
              <div className="text-blue-200">Backed by leading institutions</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-3">🤝</div>
              <div className="text-3xl font-bold mb-2">Community First</div>
              <div className="text-blue-200">Built by DH professionals for DH professionals</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
