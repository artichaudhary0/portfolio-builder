import React from 'react';

interface ContactFormProps {
  contact: FormData['contact'];
  onChange: (contact: FormData['contact']) => void;
}

export function ContactForm({ contact, onChange }: ContactFormProps) {
  const updateContact = (field: string, value: string) => {
    onChange({ ...contact, [field]: value });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Contact Information</h2>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
          <input
            type="text"
            value={contact.name}
            onChange={(e) => updateContact('name', e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            value={contact.email}
            onChange={(e) => updateContact('email', e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            value={contact.phone}
            onChange={(e) => updateContact('phone', e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            value={contact.location}
            onChange={(e) => updateContact('location', e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-indigo-500"
            placeholder="e.g., San Francisco, CA"
          />
        </div>
      </div>
    </div>
  );
}