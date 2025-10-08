
import React from 'react';
import type { ProjectIdea } from '../types';
import { FeaturesIcon, TechStackIcon, RocketIcon } from './icons/Icons';

interface IdeaDisplayProps {
  idea: ProjectIdea;
}

const IdeaDisplay: React.FC<IdeaDisplayProps> = ({ idea }) => {
  return (
    <div className="bg-slate-900/50 border border-sky-900/70 rounded-xl shadow-2xl backdrop-blur-sm p-6 sm:p-8 animate-fade-in">
      <div className="flex items-center gap-4 border-b border-sky-900/50 pb-4 mb-4">
        <RocketIcon />
        <h2 className="text-3xl font-bold text-sky-300">{idea.title}</h2>
      </div>
      
      <p className="text-slate-300 leading-relaxed mb-6">{idea.description}</p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="flex items-center gap-3 text-xl font-semibold text-sky-400 mb-3">
            <FeaturesIcon />
            Key Features
          </h3>
          <ul className="space-y-2">
            {idea.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-sky-500 mr-3 mt-1">&#9679;</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div>
          <h3 className="flex items-center gap-3 text-xl font-semibold text-sky-400 mb-3">
            <TechStackIcon />
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-2">
            {idea.techStack.map((tech, index) => (
              <span key={index} className="bg-slate-700 text-sky-300 text-sm font-medium px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdeaDisplay;
