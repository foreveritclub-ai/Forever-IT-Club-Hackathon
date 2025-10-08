import React from 'react';

export const AutomationIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-1.04 1.11-1.04h1.093c.55 0 1.02.498 1.11 1.04l.16 1.046c.487.112.95.29 1.386.518l.95-.346c.524-.19 1.076.13 1.266.638l.535 1.07a1.213 1.213 0 01-.41 1.455l-.784.625a1.212 1.212 0 010 1.942l.784.625c.49.39.563 1.06.154 1.455l-.535 1.07c-.19.508-.742.828-1.266.638l-.95-.346a1.213 1.213 0 00-1.386.518l-.16 1.046c-.09.542-.56 1.04-1.11 1.04h-1.093c-.55 0-1.02-.498-1.11-1.04l-.16-1.046a1.213 1.213 0 00-1.386-.518l-.95.346c-.524.19-1.076-.13-1.266-.638l-.535-1.07a1.213 1.213 0 01.41-1.455l.784-.625a1.212 1.212 0 010-1.942l-.784-.625a1.213 1.213 0 01-.154-1.455l.535-1.07c.19-.508.742-.828 1.266-.638l.95.346c.436-.228.9-.406 1.386-.518l.16-1.046z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
  </svg>
);

export const FrontendIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

export const HardwareIcon: React.FC = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V5m0 14v-1M9 6l1.07-1.07M15 6l-1.07-1.07M9 18l1.07 1.07M15 18l-1.07 1.07" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
  </svg>
);

// FIX: Add and export RocketIcon, FeaturesIcon, and TechStackIcon to be used in IdeaDisplay.tsx
export const RocketIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
    </svg>
);

export const FeaturesIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);

export const TechStackIcon: React.FC = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1.5-1.5m1.5 1.5l1.5-1.5m1.5 1.5l-1.5-1.5m1.5 1.5l1.5-1.5m-7.5 4.5v3H6a2.25 2.25 0 00-2.25 2.25v1.5A2.25 2.25 0 006 24h12a2.25 2.25 0 002.25-2.25v-1.5A2.25 2.25 0 0018 18h-2.25v-3m-7.5 0h7.5" />
    </svg>
);
