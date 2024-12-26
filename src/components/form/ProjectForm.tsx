import React from 'react';
import { Plus, X } from 'lucide-react';
import { Suggestions } from '../common/Suggestions';
import { projectTagSuggestions } from '../../data/suggestions';

interface ProjectFormProps {
  projects: FormData['projects'];
  onChange: (projects: FormData['projects']) => void;
}

export function ProjectForm({ projects, onChange }: ProjectFormProps) {
  const addProject = () => {
    onChange([
      ...projects,
      { id: crypto.randomUUID(), title: '', description: '', imageUrl: '', tags: [] }
    ]);
  };

  const removeProject = (id: string) => {
    onChange(projects.filter(p => p.id !== id));
  };

  const updateProject = (id: string, field: string, value: string) => {
    onChange(projects.map(p => 
      p.id === id ? { ...p, [field]: value } : p
    ));
  };

  const addTag = (id: string, tag: string) => {
    onChange(projects.map(p => 
      p.id === id && !p.tags.includes(tag)
        ? { ...p, tags: [...p.tags, tag] }
        : p
    ));
  };

  const removeTag = (id: string, tagToRemove: string) => {
    onChange(projects.map(p => 
      p.id === id
        ? { ...p, tags: p.tags.filter(tag => tag !== tagToRemove) }
        : p
    ));
  };

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Projects</h2>
          <p className="text-gray-600 mt-1">Showcase your best work</p>
        </div>
        <button
          onClick={addProject}
          className="flex items-center px-4 py-2 bg-indigo-600 text-white rounded-lg 
                   hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md"
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Project
        </button>
      </div>

      {projects.map((project) => (
        <div key={project.id} className="relative p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow">
          <button
            onClick={() => removeProject(project.id)}
            className="absolute top-4 right-4 text-gray-400 hover:text-red-600 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Title
              </label>
              <input
                type="text"
                value={project.title}
                onChange={(e) => updateProject(project.id, 'title', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="e.g., E-commerce Platform"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                value={project.description}
                onChange={(e) => updateProject(project.id, 'description', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                rows={3}
                placeholder="Describe your project and its key features..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Image URL
              </label>
              <input
                type="url"
                value={project.imageUrl}
                onChange={(e) => updateProject(project.id, 'imageUrl', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="https://example.com/image.jpg"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Technologies & Tags
              </label>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm
                             bg-indigo-100 text-indigo-700"
                  >
                    {tag}
                    <button
                      onClick={() => removeTag(project.id, tag)}
                      className="ml-2 text-indigo-500 hover:text-indigo-700"
                    >
                      <X className="w-3 h-3" />
                    </button>
                  </span>
                ))}
              </div>
              <Suggestions
                items={projectTagSuggestions.filter(tag => !project.tags.includes(tag))}
                onSelect={(tag) => addTag(project.id, tag)}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Project Link
              </label>
              <input
                type="url"
                value={project.link || ''}
                onChange={(e) => updateProject(project.id, 'link', e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
                placeholder="https://github.com/yourusername/project"
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}