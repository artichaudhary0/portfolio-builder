import { useState } from 'react';
import { Briefcase, Code, Layout, Share } from 'lucide-react';
import { FormWizard } from './components/form/FormWizard';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { EditButton } from './components/common/EditButton';
import { WelcomeHero } from './components/welcome/WelcomeHero';
import { FeatureCard } from './components/welcome/FeatureCard';
import { CVGenerator } from './components/CV/CVGenerator';
import { Footer } from './components/Footer';
import type { FormData } from './types/form';
import './styles/print.css';

export function App() {
  const [formData, setFormData] = useState<FormData | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [showCV, setShowCV] = useState(false);

  const handleFormComplete = (data: FormData) => {
    setFormData(data);
    setIsEditing(false);
  };

  if (!hasStarted) {
    return (
      <div>
        <WelcomeHero onStart={() => setHasStarted(true)} />
        <div className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-12">
              Build Your Professional Portfolio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={Layout}
                title="Beautiful Design"
                description="Create a stunning portfolio with our professionally designed templates"
              />
              <FeatureCard
                icon={Code}
                title="Project Showcase"
                description="Highlight your best work with detailed project presentations"
              />
              <FeatureCard
                icon={Briefcase}
                title="Experience Timeline"
                description="Display your professional journey in an engaging timeline"
              />
              <FeatureCard
                icon={Share}
                title="Easy Sharing"
                description="Share your portfolio with potential employers and clients"
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!formData || isEditing) {
    return (
      <div className="min-h-screen bg-gray-50">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-900">
              {isEditing ? 'Edit Your Portfolio' : 'Portfolio Builder'}
            </h1>
          </div>
        </header>
        <FormWizard 
          onComplete={handleFormComplete}
          initialData={isEditing && formData ? formData : undefined}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header contact={formData.contact} />
      {showCV ? (
        <CVGenerator data={formData} />
      ) : (
        <main>
          <Hero name={formData.contact.name} />
          <Projects projects={formData.projects} />
          <Skills skills={formData.skills} />
          <Experience experience={formData.experience} />
          <Contact contact={formData.contact} />
        </main>
      )}
      <div className="fixed bottom-6 right-6 flex gap-4">
        <button
          onClick={() => setShowCV(!showCV)}
          className="bg-white text-indigo-600 px-4 py-2 rounded-full shadow-lg 
                   hover:bg-indigo-50 transition-colors z-50"
        >
          {showCV ? 'View Portfolio' : 'View CV'}
        </button>
        <EditButton onClick={() => setIsEditing(true)} />
      </div>
      <Footer />
    </div>
  );
}