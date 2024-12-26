import type { Skill } from '../types';

interface SkillsProps {
  skills: Skill[];
}

export function Skills({ skills }: SkillsProps) {
  if (skills.length === 0) {
    return null;
  }

  const categories = Array.from(new Set(skills.map(skill => skill.category)));

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16">Skills</h2>
        <div className="max-w-3xl mx-auto">
          {categories.map(category => (
            <div key={category} className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 capitalize">{category}</h3>
              <div className="space-y-6">
                {skills
                  .filter(skill => skill.category === category)
                  .map((skill) => (
                    <div key={skill.name} className="mb-6">
                      <div className="flex justify-between mb-2">
                        <span className="text-lg font-medium">{skill.name}</span>
                        <span className="text-gray-600">{skill.level}/5</span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full">
                        <div 
                          className="h-full bg-indigo-600 rounded-full transition-all duration-500"
                          style={{ width: `${(skill.level / 5) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}