import { Download, Share2, Mail, Phone, MapPin, Globe } from 'lucide-react';
import type { FormData } from '../../types/form';

interface CVGeneratorProps {
  data: FormData;
}

export function CVGenerator({ data }: CVGeneratorProps) {
  const handleDownload = () => {
    window.print();
  };

  const handleShare = async () => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: `${data.contact.name}'s CV`,
          text: 'Check out my professional CV',
          url: window.location.href
        });
      } else {
        await navigator.clipboard.writeText(window.location.href);
        alert('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="sticky top-20 z-10 bg-gray-50 py-4 mb-8 flex justify-between items-center">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
          Your Professional CV
        </h2>
        <div className="flex gap-4">
          <button
            onClick={handleShare}
            className="flex items-center px-4 py-2 text-indigo-600 border border-indigo-600 
                     rounded-lg hover:bg-indigo-50 transition-colors"
          >
            <Share2 className="w-4 h-4 mr-2" />
            Share
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center px-4 py-2 bg-indigo-600 text-white 
                     rounded-lg hover:bg-indigo-700 transition-colors"
          >
            <Download className="w-4 h-4 mr-2" />
            Download PDF
          </button>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden print:shadow-none" id="cv-content">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 mb-8">
          <h1 className="text-4xl font-bold mb-4">{data.contact.name}</h1>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center">
              <Mail className="w-5 h-5 mr-2" />
              {data.contact.email}
            </div>
            <div className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              {data.contact.phone}
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              {data.contact.location}
            </div>
          </div>
        </div>

        <div className="p-8">
          {/* Skills with visual representation */}
          {data.skills.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {Object.entries(
                  data.skills.reduce((acc, skill) => ({
                    ...acc,
                    [skill.category]: [...(acc[skill.category] || []), skill]
                  }), {} as Record<string, typeof data.skills>)
                ).map(([category, skills]) => (
                  <div key={category} className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-semibold text-lg mb-4 capitalize text-indigo-600">{category}</h3>
                    <div className="space-y-4">
                      {skills.map(skill => (
                        <div key={skill.name}>
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-indigo-600">{skill.level}/5</span>
                          </div>
                          <div className="h-2 bg-gray-200 rounded-full">
                            <div 
                              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
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
          )}

          {/* Experience with timeline design */}
          {data.experience.length > 0 && (
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Experience</h2>
              <div className="space-y-6">
                {data.experience.map((exp, _index) => (
                  <div key={exp.id} className="relative pl-8 pb-8 border-l-2 border-indigo-200 last:pb-0">
                    <div className="absolute left-[-9px] top-0 w-4 h-4 bg-indigo-600 rounded-full" />
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="font-bold text-lg text-indigo-600">{exp.position}</h3>
                        <span className="text-sm bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full">
                          {exp.startDate} - {exp.endDate}
                        </span>
                      </div>
                      <p className="font-medium text-gray-700 mb-2">{exp.company}</p>
                      <p className="text-gray-600">{exp.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Projects with modern cards */}
          {data.projects.length > 0 && (
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {data.projects.map(project => (
                  <div key={project.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
                    <h3 className="font-bold text-lg text-indigo-600 mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map(tag => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center mt-4 text-indigo-600 hover:text-indigo-700"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        View Project
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}