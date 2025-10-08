
import React, { useState } from 'react';

interface IdeaGeneratorProps {
  onGenerate: (theme: string) => void;
  isLoading: boolean;
}

const IdeaGenerator: React.FC<IdeaGeneratorProps> = ({ onGenerate, isLoading }) => {
  const [theme, setTheme] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (theme.trim() && !isLoading) {
      onGenerate(theme.trim());
    }
  };

  return (
    <div className="p-6 bg-slate-900/50 border border-sky-900/70 rounded-xl shadow-2xl backdrop-blur-sm">
      <form onSubmit={handleSubmit}>
        <label htmlFor="theme-input" className="block text-lg font-medium text-sky-300 mb-2">
          Enter a Theme or Technology
        </label>
        <div className="flex flex-col sm:flex-row gap-4">
          <input
            id="theme-input"
            type="text"
            value={theme}
            onChange={(e) => setTheme(e.target.value)}
            placeholder="e.g., Sustainability, AI in Healthcare, Web3..."
            className="flex-grow w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none placeholder-slate-500 transition duration-200"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="px-8 py-3 bg-sky-600 text-white font-bold rounded-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-sky-500 transition-transform duration-200 ease-in-out transform hover:scale-105 disabled:bg-slate-700 disabled:cursor-not-allowed disabled:transform-none"
          >
            {isLoading ? 'Generating...' : 'Generate Idea'}
          </button>
        </div>
        <p className="text-sm text-slate-500 mt-3">
          Let our AI spark your creativity for the next big thing!
        </p>
      </form>
    </div>
  );
};

export default IdeaGenerator;
