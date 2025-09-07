import React from 'react';

interface ContentCardProps {
  title: string;
  description: string;
  accentColor: string;
}

const ContentCard: React.FC<ContentCardProps> = ({ title, description, accentColor }) => {
  const hoverClass = `hover:border-${accentColor}-500/50`;
  // Note: For dynamic class generation to work with Tailwind's JIT compiler,
  // you might need to list the full class names somewhere in your project if they don't appear naturally.
  // Or, use inline styles for dynamic properties. Here, we assume the classes are available or whitelisted.
  // A simple way is to add placeholder divs or a comment with the full class names.
  // e.g. /* hover:border-cyan-500/50 hover:border-red-500/50 */

  return (
    <div className={`bg-slate-800/50 border border-slate-700 rounded-lg p-6 shadow-lg transition-all duration-300 hover:shadow-${accentColor}-500/20 ${hoverClass} hover:-translate-y-1`}>
      <h3 className="text-xl font-bold text-slate-100 mb-2">{title}</h3>
      <p className="text-slate-400 text-base leading-relaxed">{description}</p>
    </div>
  );
};

export default ContentCard;