import React from 'react';
import { ArrowDown } from 'lucide-react';

interface HeroProps {
  name: string;
}

export function Hero({ name }: HeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50 pt-16">
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8">
          Hi, I'm {name}
        </h1>
        <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
          Welcome to my portfolio. I'm passionate about creating amazing digital experiences.
        </p>
        <a 
          href="#projects" 
          className="inline-flex items-center mt-16 text-gray-600 hover:text-gray-900"
        >
          <span className="mr-2">View my work</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </a>
      </div>
    </section>
  );
}