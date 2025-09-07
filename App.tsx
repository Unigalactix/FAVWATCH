
import React, { useState, useCallback } from 'react';
import { SERIES_LIST } from './constants';
import { seriesDataStore } from './data/seriesData';
import { type SeriesData } from './types';

import Header from './components/Header';
import SeriesSelector from './components/SeriesSelector';
import InfographicDisplay from './components/InfographicDisplay';
import Welcome from './components/Welcome';

const App: React.FC = () => {
  const [selectedSeries, setSelectedSeries] = useState<string>('');
  const [seriesData, setSeriesData] = useState<SeriesData | null>(null);

  const handleSeriesChange = useCallback((series: string) => {
    setSelectedSeries(series);
    if (series) {
      const data = seriesDataStore[series];
      setSeriesData(data || null);
    } else {
      setSeriesData(null);
    }
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SeriesSelector
          seriesList={SERIES_LIST}
          selectedSeries={selectedSeries}
          onSeriesChange={handleSeriesChange}
        />
        
        <div className="mt-8">
          {seriesData ? (
            <InfographicDisplay data={seriesData} />
          ) : (
            <Welcome />
          )}
        </div>
      </main>
      <footer className="text-center py-4 text-slate-500 text-sm">
        <p>Content inspired by fan wikis and community data.</p>
      </footer>
    </div>
  );
};

export default App;