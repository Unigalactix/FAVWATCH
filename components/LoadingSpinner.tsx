
import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-cyan-500"></div>
        <p className="text-slate-400 mt-4 text-lg">Generating Universe Details...</p>
        <p className="text-slate-500 mt-2 text-sm">This may take a moment.</p>
    </div>
  );
};

export default LoadingSpinner;
