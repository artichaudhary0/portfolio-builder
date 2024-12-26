import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <div className="group p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300
                    hover:-translate-y-1 cursor-pointer">
      <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4
                    group-hover:bg-indigo-600 transition-colors duration-300">
        <Icon className="w-6 h-6 text-indigo-600 group-hover:text-white transition-colors duration-300" />
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-indigo-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}