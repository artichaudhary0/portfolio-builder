import React from 'react';
import { ArrowRight, Code, Briefcase, Star } from 'lucide-react';

interface WelcomeHeroProps {
  onStart: () => void;
}

export function WelcomeHero({ onStart }: WelcomeHeroProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 overflow-hidden">
      <div className="relative">
        {/* Floating icons background */}
        <div className="absolute inset-0 -z-10">
          <Code className="absolute top-10 left-10 w-8 h-8 text-indigo-200 animate-float" style={{ animationDelay: '0s' }} />
          <Briefcase className="absolute top-40 right-20 w-8 h-8 text-purple-200 animate-float" style={{ animationDelay: '0.5s' }} />
          <Star className="absolute bottom-20 left-20 w-8 h-8 text-indigo-200 animate-float" style={{ animationDelay: '1s' }} />
        </div>

        <div className="text-center px-6 py-16 max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-8 bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio Builder
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            Create a stunning portfolio in minutes. Showcase your projects, skills, and experience
            with our beautiful and professional portfolio builder.
          </p>
          <button
            onClick={onStart}
            className="group inline-flex items-center px-8 py-4 text-lg font-medium text-white 
                     bg-indigo-600 rounded-xl hover:bg-indigo-700 transition-all duration-300
                     shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            Get Started
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}