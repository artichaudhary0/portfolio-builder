import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react';

interface HeaderProps {
  contact: {
    email: string;
  };
}

export function Header({ contact }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm z-50 shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Portfolio
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
            <a href="#projects" className="text-gray-600 hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#experience" className="text-gray-600 hover:text-indigo-600 transition-colors">Experience</a>
            <a href="#skills" className="text-gray-600 hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href={`mailto:${contact.email}`} className="text-gray-600 hover:text-indigo-600 transition-colors">
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <button 
            className="md:hidden text-gray-600 hover:text-indigo-600 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <a href="#about" className="block text-gray-600 hover:text-indigo-600 transition-colors">About</a>
            <a href="#projects" className="block text-gray-600 hover:text-indigo-600 transition-colors">Projects</a>
            <a href="#experience" className="block text-gray-600 hover:text-indigo-600 transition-colors">Experience</a>
            <a href="#skills" className="block text-gray-600 hover:text-indigo-600 transition-colors">Skills</a>
            <a href="#contact" className="block text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
          </div>
        )}
      </nav>
    </header>
  );
}