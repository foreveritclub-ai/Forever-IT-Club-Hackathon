import React, { useState } from 'react';
import Header from './components/Header';
import IdeaGenerator from './components/IdeaGenerator';
import IdeaDisplay from './components/IdeaDisplay';
import Loader from './components/Loader';
import { generateProjectIdea } from './services/geminiService';
import type { ProjectIdea } from './types';
import { AutomationIcon, FrontendIcon, HardwareIcon } from './components/icons/Icons';

const App: React.FC = () => {
  const [idea, setIdea] = useState<ProjectIdea | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGenerateIdea = async (theme: string) => {
    setIsLoading(true);
    setError(null);
    setIdea(null);
    try {
      const newIdea = await generateProjectIdea(theme);
      setIdea(newIdea);
    } catch (err) {
      setError('Sorry, we couldn\'t generate an idea. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-slate-900 text-slate-200 min-h-screen font-sans">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top,_rgba(0,191,255,0.2),_transparent_40%)] -z-1"></div>
      <Header />
      <main className="container mx-auto px-4 py-8">
        
        <section id="challenge" className="my-16 scroll-mt-20">
            <h2 className="text-3xl font-bold text-center text-sky-300 mb-8">The Challenge: Idea Generator</h2>
            <p className="max-w-3xl mx-auto text-center text-slate-300 mb-8">
              Feeling stuck? Need a spark of inspiration for your hackathon project? Use our AI-powered Idea Generator. Just enter a theme or a piece of technology, and let Gemini craft a unique project concept for you.
            </p>
            <IdeaGenerator onGenerate={handleGenerateIdea} isLoading={isLoading} />
        </section>

        <div className="mt-8 min-h-[300px]">
          {isLoading && <Loader />}
          {error && <p className="text-center text-red-400">{error}</p>}
          {idea && <IdeaDisplay idea={idea} />}
        </div>
        
        <section id="tracks" className="my-20 scroll-mt-20">
          <h2 className="text-3xl font-bold text-center text-sky-300 mb-12">Hackathon Tracks</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 p-6 rounded-lg border border-sky-900/70 text-center">
              <div className="flex justify-center mb-4"><AutomationIcon /></div>
              <h3 className="text-xl font-semibold text-white mb-2">Campus Automation</h3>
              <p className="text-slate-400">Develop solutions to automate and improve daily processes and services for students and faculty at Forever Technical School.</p>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-lg border border-sky-900/70 text-center">
              <div className="flex justify-center mb-4"><FrontendIcon /></div>
              <h3 className="text-xl font-semibold text-white mb-2">Roy's Profile Picture</h3>
              <p className="text-slate-400">Design an innovative, interactive, and visually stunning new profile picture for Roy. The most creative design wins a special prize.</p>
            </div>
            <div className="bg-slate-900/50 p-6 rounded-lg border border-sky-900/70 text-center">
              <div className="flex justify-center mb-4"><HardwareIcon /></div>
              <h3 className="text-xl font-semibold text-white mb-2">Community Connect</h3>
              <p className="text-slate-400">Create a project that fosters connection and collaboration within the local community, addressing a real-world social or environmental need.</p>
            </div>
          </div>
        </section>

      </main>

      <footer className="text-center py-8 border-t border-sky-900/50">
          <p className="text-slate-400">&copy; 2025 Forever Technical School IT Club. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;
