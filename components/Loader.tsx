
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 py-8">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-sky-500"></div>
      <p className="text-sky-300 text-lg">Brewing an awesome idea...</p>
    </div>
  );
};

export default Loader;
