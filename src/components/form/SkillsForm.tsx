import React from 'react';
import { Plus, X } from 'lucide-react';
import { Suggestions } from '../common/Suggestions';
import { skillSuggestions } from '../../data/suggestions';

interface SkillsFormProps {
  skills: FormData['skills'];
  onChange: (skills: FormData['skills']) => void;
}

export function SkillsForm({ skills, onChange }: SkillsFormProps) {
  const addSkill = () => {
    onChange([...skills, { name: '', level: 3, category: 'frontend' }]);
  };

  const removeSkill = (index: number) => {
    onChange(skills.filter((_, i) => i !== index));
  };

  const updateSkill = (index: number, field: string, value: any) => {
    onChange(skills.map((skill, i) => 
      i === index ? { ...skill, [field]: value } : skill
    ));
  };

  const handleSuggestionSelect = (index: number, skillName: string) => {
    updateSkill(index, 'name', skillName);
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Skills</h2>
          <p className="text-gray-600 mt-1">Add your technical skills and rate your proficiency</p>
        </div>
        <button
          onClick={addSkill}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg 
                   hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Skill
        </button>
      </div>

      {skills.map((skill, index) => (
        <div key={index} className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <button
            onClick={() => removeSkill(index)}
            className="absolute top-4 right-4 text-gray-400 hover:text-red-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Skill Name
              </label>
              <input
                type="text"
                value={skill.name}
                onChange={(e) => updateSkill(index, 'name', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g., React"
              />
              <Suggestions
                items={skillSuggestions[skill.category]}
                onSelect={(item) => handleSuggestionSelect(index, item)}
                className="mt-2"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Category
              </label>
              <select
                value={skill.category}
                onChange={(e) => updateSkill(index, 'category', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
              >
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
                <option value="tools">Tools & DevOps</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Proficiency Level
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={skill.level}
                  onChange={(e) => updateSkill(index, 'level', parseInt(e.target.value))}
                  className="flex-1"
                />
                <span className="text-indigo-600 font-medium w-8 text-center">
                  {skill.level}/5
                </span>
              </div>
              <div className="flex justify-between text-sm text-gray-500 mt-1">
                <span>Beginner</span>
                <span>Intermediate</span>
                <span>Expert</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}