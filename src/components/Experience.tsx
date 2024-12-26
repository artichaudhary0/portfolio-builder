import { Briefcase } from 'lucide-react';
import type { Experience as ExperienceType } from '../types';

interface ExperienceProps {
  experience: ExperienceType[];
}

export function Experience({ experience }: ExperienceProps) {
  if (experience.length === 0) {
    return null;
  }

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experience.map((exp, index) => (
            <div 
              key={exp.id}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {index !== experience.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-[2px] bg-gray-200" />
              )}
              <div className="absolute left-0 top-2 bg-indigo-600 rounded-full p-2">
                <Briefcase className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-semibold">{exp.position}</h3>
                  <span className="text-gray-600 text-sm">
                    {exp.startDate} - {exp.endDate}
                  </span>
                </div>
                <p className="text-indigo-600 mb-3">{exp.company}</p>
                <p className="text-gray-600">{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}