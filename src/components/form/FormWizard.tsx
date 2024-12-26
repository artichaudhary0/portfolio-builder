import React, { useState } from 'react';
import { ProjectForm } from './ProjectForm';
import { SkillsForm } from './SkillsForm';
import { ExperienceForm } from './ExperienceForm';
import { ContactForm } from './ContactForm';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import type { FormData } from '../../types/form';

const STEPS = [
  {
    id: 'projects',
    title: 'Projects',
    description: 'Showcase your best work and achievements'
  },
  {
    id: 'skills',
    title: 'Skills',
    description: 'List your technical skills and expertise'
  },
  {
    id: 'experience',
    title: 'Experience',
    description: 'Share your professional journey'
  },
  {
    id: 'contact',
    title: 'Contact',
    description: 'Add your contact information'
  }
];

interface FormWizardProps {
  onComplete: (data: FormData) => void;
  initialData?: FormData;
}

export function FormWizard({ onComplete, initialData }: FormWizardProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>(initialData || {
    projects: [],
    skills: [],
    experience: [],
    contact: {
      name: '',
      email: '',
      phone: '',
      location: ''
    }
  });

  const nextStep = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(formData);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      <div className="mb-12">
        <div className="flex justify-between items-center mb-8">
          {STEPS.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className={`flex flex-col items-center ${
                index <= currentStep ? 'text-indigo-600' : 'text-gray-400'
              }`}>
                <div className={`w-10 h-10 rounded-full flex items-center justify-center mb-2 
                              transition-colors ${
                  index <= currentStep 
                    ? 'bg-indigo-600 text-white' 
                    : 'bg-gray-200'
                }`}>
                  {index + 1}
                </div>
                <span className="text-sm font-medium">{step.title}</span>
              </div>
              {index < STEPS.length - 1 && (
                <div className={`flex-1 h-0.5 transition-colors ${
                  index < currentStep ? 'bg-indigo-600' : 'bg-gray-200'
                }`} />
              )}
            </React.Fragment>
          ))}
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            {STEPS[currentStep].title}
          </h2>
          <p className="text-gray-600">
            {STEPS[currentStep].description}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8">
        {currentStep === 0 && (
          <ProjectForm
            projects={formData.projects}
            onChange={(projects) => setFormData({ ...formData, projects })}
          />
        )}
        {currentStep === 1 && (
          <SkillsForm
            skills={formData.skills}
            onChange={(skills) => setFormData({ ...formData, skills })}
          />
        )}
        {currentStep === 2 && (
          <ExperienceForm
            experience={formData.experience}
            onChange={(experience) => setFormData({ ...formData, experience })}
          />
        )}
        {currentStep === 3 && (
          <ContactForm
            contact={formData.contact}
            onChange={(contact) => setFormData({ ...formData, contact })}
          />
        )}

        <div className="flex justify-between mt-8 pt-6 border-t">
          <button
            onClick={prevStep}
            className={`flex items-center px-6 py-2 rounded-lg transition-colors ${
              currentStep === 0
                ? 'text-gray-400 cursor-not-allowed'
                : 'text-indigo-600 hover:bg-indigo-50'
            }`}
            disabled={currentStep === 0}
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </button>
          <button
            onClick={nextStep}
            className="flex items-center px-6 py-2 bg-indigo-600 text-white rounded-lg 
                     hover:bg-indigo-700 transition-colors shadow-sm hover:shadow-md"
          >
            {currentStep === STEPS.length - 1 ? (
              initialData ? 'Save Changes' : 'Complete'
            ) : (
              <>
                Next
                <ChevronRight className="w-5 h-5 ml-2" />
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}