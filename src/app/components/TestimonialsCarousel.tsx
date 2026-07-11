import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star, Linkedin, Building2 } from 'lucide-react';
import shivamImage from 'figma:asset/560f6b6a11e3e715b5e3cf15fa0fa15b09413e41.png';
import amanImage from 'figma:asset/cf8be4ae40cb033d447aa284907c3010074e960c.png';
import anshikaImage from 'figma:asset/52d97cd76544faa139a5e80d358f932b1c47d00f.png';

const testimonials = [
  {
    name: 'Shivam Kumar',
    role: 'Platform Lead',
    organization: 'DH Nexus',
    image: shivamImage,
    quote: 'Digital Humanities is not just about technology or humanities in isolation—it\'s about creating innovative solutions at their intersection. Through DH Nexus, we\'re building bridges between academia and industry, connecting talented individuals with opportunities that truly understand the value of hybrid skills.',
    rating: 5,
    linkedin: 'https://www.linkedin.com/in/shivam-kumar-skm14'
  },
  {
    name: 'Anshika Kashyap',
    role: 'Content & Research Contributor',
    organization: 'DH Nexus',
    image: anshikaImage,
    quote: 'The Digital Humanities program has transformed how I approach problems—combining computational thinking with cultural awareness. This unique perspective is exactly what modern workplaces need, and DH Nexus helps showcase that to the world.',
    rating: 5,
    linkedin: '#'
  },
  {
    name: 'Aman Kumar',
    role: 'Technical Development Contributor',
    organization: 'DH Nexus',
    image: amanImage,
    quote: 'Building DH Nexus has been an incredible journey of applying what we learn in Digital Humanities to solve real-world challenges. We\'re creating a platform that not only connects talent with opportunities but also demonstrates the practical impact of DH skills in action.',
    rating: 5,
    linkedin: '#'
  }
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-cyan-300 px-6 py-3 rounded-full mb-6 border border-white/20">
            <Quote className="w-5 h-5" />
            <span className="text-sm font-semibold">Testimonials</span>
          </div>
          <h2 className="text-4xl lg:text-6xl mb-6 text-white">
            Voices from the Community
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Hear from DH professionals, faculty, and industry leaders about their experiences
          </p>
        </div>

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-10 lg:p-12 shadow-2xl">
                    <div className="flex flex-col lg:flex-row gap-8 items-center lg:items-start">
                      {/* Profile Image */}
                      <div className="flex-shrink-0">
                        <div className="relative">
                          <img 
                            src={testimonial.image} 
                            alt={testimonial.name}
                            className="w-32 h-32 rounded-2xl object-cover shadow-xl border-4 border-white/20"
                          />
                          <div className="absolute -bottom-3 -right-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-2 shadow-lg">
                            <Quote className="w-6 h-6 text-white" />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 text-center lg:text-left">
                        {/* Stars */}
                        <div className="flex gap-1 mb-4 justify-center lg:justify-start">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>

                        {/* Quote */}
                        <blockquote className="text-2xl lg:text-3xl text-white mb-6 leading-relaxed italic">
                          "{testimonial.quote}"
                        </blockquote>

                        {/* Author Info */}
                        <div className="flex flex-col lg:flex-row items-center lg:items-center gap-4">
                          <div className="flex-1">
                            <div className="text-xl font-bold text-white mb-1">{testimonial.name}</div>
                            <div className="text-cyan-300 font-semibold mb-1">{testimonial.role}</div>
                            <div className="flex items-center gap-2 text-blue-200 justify-center lg:justify-start">
                              <Building2 className="w-4 h-4" />
                              <span>{testimonial.organization}</span>
                            </div>
                          </div>

                          {/* LinkedIn Link */}
                          {testimonial.linkedin !== '#' && (
                            <a
                              href={testimonial.linkedin}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition-all shadow-lg"
                            >
                              <Linkedin className="w-5 h-5" />
                              <span className="text-sm font-semibold">Connect</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all shadow-xl border border-white/20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white p-4 rounded-full transition-all shadow-xl border border-white/20"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center gap-3 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all rounded-full ${
                index === currentIndex 
                  ? 'w-12 h-3 bg-cyan-400' 
                  : 'w-3 h-3 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <p className="text-xl text-blue-200 mb-6">Want to share your story?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-indigo-600 hover:bg-cyan-50 px-8 py-4 rounded-xl transition-all shadow-xl hover:scale-105 font-semibold text-lg"
          >
            Get Featured
            <ChevronRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}