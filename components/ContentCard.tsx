
import React from 'react';

interface ContentCardProps {
  title: string;
  description: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, description }) => {
  return (
    <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-cyan-500/20 hover:border-cyan-500/50 hover:-translate-y-1">
      <h3 className="text-xl font-bold text-slate-100 mb-2">{title}</h3>
      <p className="text-slate-400 text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default ContentCard;
