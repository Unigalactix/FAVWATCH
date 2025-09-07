
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900/50 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4">
        <h1 className="text-3xl font-bold text-center">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500">
            Infographic Series Universe
          </span>
        </h1>
        <p className="text-center text-slate-400 mt-1">
          Explore your favorite movie and TV universes
        </p>
      </div>
    </header>
  );
};

export default Header;
