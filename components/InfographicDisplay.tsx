


import React from 'react';
import { type SeriesData } from '../types';
import ContentCard from './ContentCard';
// Fix: Correctly import from constants.tsx to avoid module resolution conflict with constants.ts
import { ICONS } from '../constants.tsx';

interface InfographicDisplayProps {
  data: SeriesData;
  seriesName: string;
}

const InfographicDisplay: React.FC<InfographicDisplayProps> = ({ data, seriesName }) => {
  const { characters, movies, tvShows } = data;

  const renderSection = (title: string, items: any[], icon: JSX.Element, itemKey: 'name' | 'title') => {
    if (!items || items.length === 0) return null;
    return (
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-cyan-400 mb-6 flex items-center gap-3">
          {icon} {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <ContentCard
              key={item[itemKey]}
              title={item[itemKey]}
              description={item.description}
            />
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="animate-fade-in">
        <h2 className="text-4xl font-extrabold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400">{seriesName}</h2>
        {renderSection('Key Characters', characters, ICONS.CHARACTER, 'name')}
        {renderSection('Movies', movies, ICONS.MOVIE, 'title')}
        {renderSection('TV Shows', tvShows, ICONS.TV_SHOW, 'title')}
    </div>
  );
};

export default InfographicDisplay;