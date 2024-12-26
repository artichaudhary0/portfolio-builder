import React from 'react';
import { Plus } from 'lucide-react';

interface SuggestionsProps {
  items: string[];
  onSelect: (item: string) => void;
  className?: string;
}

export function Suggestions({ items, onSelect, className = '' }: SuggestionsProps) {
  return (
    <div className={`flex flex-wrap gap-2 mt-2 ${className}`}>
      {items.map((item) => (
        <button
          key={item}
          onClick={() => onSelect(item)}
          className="group inline-flex items-center px-3 py-1 text-sm bg-gray-100 
                   hover:bg-indigo-100 text-gray-700 hover:text-indigo-700 rounded-full 
                   transition-all duration-300 hover:-translate-y-0.5"
          type="button"
        >
          <Plus className="w-3 h-3 mr-1 opacity-0 group-hover:opacity-100 transition-opacity" />
          {item}
        </button>
      ))}
    </div>
  );
}