import React from 'react';

const ITClubIcon: React.FC = () => (
  <svg width="60" height="60" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="50" cy="50" r="48" stroke="#00bfff" strokeWidth="4"/>
    <path d="M40 30 C40 25, 60 25, 60 30 L60 70 C60 75, 40 75, 40 70 Z" fill="#00bfff" />
    <text x="50" y="58" fontFamily="Poppins, sans-serif" fontSize="30" fill="#020c1b" fontWeight="bold" textAnchor="middle">iT</text>
    <text x="50" y="85" fontFamily="Poppins, sans-serif" fontSize="12" fill="#00bfff" fontWeight="bold" textAnchor="middle">CLUB</text>
  </svg>
);

const Header: React.FC = () => {
  return (
    <header className="relative text-center w-full flex flex-col items-center py-20 px-4 min-h-[90vh]">
      <nav className="absolute top-0 left-0 right-0 p-4 flex justify-center space-x-4 sm:space-x-8 bg-black/10 backdrop-blur-sm">
        <a href="#tracks" className="text-slate-300 hover:text-sky-400 transition">Tracks</a>
        <a href="#challenge" className="text-slate-300 hover:text-sky-400 transition">Challenge</a>
        <a href="#schedule" className="text-slate-300 hover:text-sky-400 transition">Schedule</a>
        <a href="#register" className="text-slate-300 hover:text-sky-400 transition">Register</a>
      </nav>
      
      <div className="flex-grow flex flex-col items-center justify-center">
        <ITClubIcon />
        <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-100 tracking-wider mt-4">
          Hackathon Competition Challenge 2025
        </h1>
        <p className="mt-4 text-xl sm:text-2xl text-sky-300 italic tracking-wide">
          Innovate. Code. Create.
        </p>
        <p className="max-w-3xl mx-auto mt-4 text-slate-300">
          Join Forever Technical School's most electrifying 24-hour hackathon where bold ideas meet compassionate teamwork. Build solutions that uplift our campus and community—and conquer Roy's Profile Picture challenge.
        </p>

        <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 w-full max-w-4xl text-center">
            <div className="bg-sky-900/50 p-4 rounded-lg border border-sky-800">
                <p className="text-sm text-sky-300">Duration</p>
                <p className="font-bold text-xl text-white">24 Hours</p>
            </div>
            <div className="bg-sky-900/50 p-4 rounded-lg border border-sky-800">
                <p className="text-sm text-sky-300">Teams</p>
                <p className="font-bold text-xl text-white">Up to 5</p>
            </div>
            <div className="bg-sky-900/50 p-4 rounded-lg border border-sky-800">
                <p className="text-sm text-sky-300">Awards</p>
                <p className="font-bold text-xl text-white">Trophy</p>
            </div>
             <div className="bg-sky-900/50 p-4 rounded-lg border border-sky-800">
                <p className="text-sm text-sky-300">Date</p>
                <p className="font-bold text-xl text-white">12 Nov 2025</p>
            </div>
        </div>

        <a 
          href="#register"
          className="mt-10 px-10 py-4 bg-sky-600 text-white font-bold rounded-md hover:bg-sky-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-sky-500 transition-transform duration-200 ease-in-out transform hover:scale-105"
        >
          Register Now
        </a>
      </div>
    </header>
  );
};

export default Header;