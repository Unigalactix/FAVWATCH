import React from 'react';

const Welcome: React.FC = () => {
  return (
    <div className="text-center py-16 px-6 bg-slate-800/30 border border-slate-700/50 rounded-lg animate-fade-in">
      <h2 className="text-4xl font-bold text-slate-100 mb-4">Welcome to the Universe Explorer</h2>
      <p className="text-lg text-slate-400 max-w-2xl mx-auto">
        Select a movie series, TV show, or fictional universe from the dropdown above to explore a beautiful, interactive infographic. Discover key characters, movies, and shows with curated details.
      </p>
    </div>
  );
};

export default Welcome;