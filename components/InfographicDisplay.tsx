import React from 'react';
import { type SeriesData } from '../types';
import ContentCard from './ContentCard';
import Hero from './Hero';
import { ICONS } from '../constants.tsx';

interface InfographicDisplayProps {
  data: SeriesData;
}

const InfographicDisplay: React.FC<InfographicDisplayProps> = ({ data }) => {
  const { name, synopsis, bannerImage, accentColor, characters, movies, tvShows } = data;

  const renderSection = (title: string, items: any[], icon: JSX.Element, itemKey: 'name' | 'title') => {
    if (!items || items.length === 0) return null;
    
    const headerStyle = {
      color: `var(--color-${accentColor})`,
    };

    return (
      <section className="mb-12">
        <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={headerStyle}>
          {React.cloneElement(icon, { style: { color: `var(--color-${accentColor})` } })} {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <ContentCard
              key={item[itemKey]}
              title={item[itemKey]}
              description={item.description}
              accentColor={accentColor}
            />
          ))}
        </div>
      </section>
    );
  };

  return (
    <div className="animate-fade-in">
        <style>
        {`
          :root {
            --color-cyan: #22d3ee;
            --color-red: #f87171;
            --color-amber: #f59e0b;
            --color-emerald: #34d399;
          }
        `}
      </style>
      <Hero 
        title={name} 
        synopsis={synopsis}
        bannerImage={bannerImage} 
        accentColor={accentColor}
      />
      <div className="px-4 md:px-0 py-10">
        {renderSection('Key Characters', characters, ICONS.CHARACTER, 'name')}
        {renderSection('Movies', movies, ICONS.MOVIE, 'title')}
        {renderSection('TV Shows', tvShows, ICONS.TV_SHOW, 'title')}
      </div>
    </div>
  );
};

export default InfographicDisplay;