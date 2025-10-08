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

  const handleRegistrationSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("Thank you for registering! We'll be in touch with more details soon.");
    e.currentTarget.reset();
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

        <section id="register" className="my-20 scroll-mt-20">
          <h2 className="text-3xl font-bold text-center text-sky-300 mb-4">Secure Your Slot</h2>
          <p className="max-w-3xl mx-auto text-center text-slate-300 mb-12">
            Complete the form to reserve your space. We'll send confirmation, onboarding materials, and mentorship pairings once your spot is locked in.
          </p>

          <div className="bg-slate-900/50 border border-sky-900/70 rounded-xl shadow-2xl backdrop-blur-sm p-8 max-w-4xl mx-auto">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleRegistrationSubmit}>
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-slate-300 mb-1">Full Name *</label>
                <input type="text" id="full-name" name="full-name" required className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none placeholder-slate-500 transition duration-200" placeholder="e.g. Norah Namanya" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email *</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none placeholder-slate-500 transition duration-200" placeholder="hello@foreveritclub.org" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">Phone Number *</label>
                <input type="tel" id="phone" name="phone" required className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none placeholder-slate-500 transition duration-200" placeholder="+256 700 000 000" />
              </div>
              <div>
                <label htmlFor="school" className="block text-sm font-medium text-slate-300 mb-1">School / Organization</label>
                <input type="text" id="school" name="school" className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none placeholder-slate-500 transition duration-200" placeholder="Forever Technical Secondary School" />
              </div>
              <div className="md:col-span-2">
                <label htmlFor="team-name" className="block text-sm font-medium text-slate-300 mb-1">Team Name (optional)</label>
                <input type="text" id="team-name" name="team-name" className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none placeholder-slate-500 transition duration-200" placeholder="Innovation Ninjas" />
              </div>
              <div>
                <label htmlFor="experience" className="block text-sm font-medium text-slate-300 mb-1">Experience Level *</label>
                <select id="experience" name="experience" required className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none transition duration-200">
                  <option value="">Select experience</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
              <div>
                <label htmlFor="track" className="block text-sm font-medium text-slate-300 mb-1">Preferred Track *</label>
                <select id="track" name="track" required className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none transition duration-200">
                  <option value="">Choose your track</option>
                  <option value="automation">Campus Automation</option>
                  <option value="profile-picture">Roy's Profile Picture</option>
                  <option value="community">Community Connect</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label htmlFor="reason" className="block text-sm font-medium text-slate-300 mb-1">Why do you want to join?</label>
                <textarea id="reason" name="reason" rows={4} className="w-full px-4 py-2 bg-slate-800 border border-slate-600 rounded-md focus:ring-2 focus:ring-sky-500 focus:outline-none placeholder-slate-500 transition duration-200" placeholder="Share your goals, the problem you hope to solve, or what excites you most about this challenge."></textarea>
              </div>
              <div className="md:col-span-2 flex items-start">
                <input type="checkbox" id="confirm" name="confirm" required className="h-4 w-4 mt-1 rounded border-slate-600 bg-slate-800 text-sky-600 focus:ring-sky-500" />
                <label htmlFor="confirm" className="ml-3 text-sm text-slate-300">I confirm I can attend the full 24-hour hackathon on 12 November 2025 and agree to Forever IT Club's participation guidelines.</label>
              </div>
              <div className="md:col-span-2 flex justify-center">
                <button type="submit" className="px-10 py-3 bg-sky-600 text-white font-bold rounded-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-sky-500 transition-transform duration-200 ease-in-out transform hover:scale-105">
                  Submit Registration
                </button>
              </div>
            </form>
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