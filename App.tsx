

import React, { useState, useCallback, useEffect } from 'react';
// Fix: Correctly import from constants.tsx to avoid module resolution conflict with constants.ts
import { SERIES_LIST } from './constants.tsx';
import { type SeriesData } from './types';
import { fetchSeriesData } from './services/geminiService';

import Header from './components/Header';
import SeriesSelector from './components/SeriesSelector';
import InfographicDisplay from './components/InfographicDisplay';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorMessage from './components/ErrorMessage';
import Welcome from './components/Welcome';

const App: React.FC = () => {
  const [selectedSeries, setSelectedSeries] = useState<string>('');
  const [seriesData, setSeriesData] = useState<SeriesData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleFetchData = useCallback(async (seriesName: string) => {
    if (!seriesName) return;

    setIsLoading(true);
    setError(null);
    setSeriesData(null);

    try {
      const data = await fetchSeriesData(seriesName);
      setSeriesData(data);
    } catch (err) {
      console.error('Failed to fetch series data:', err);
      setError('Failed to generate content. The model may be unavailable. Please try again later.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (selectedSeries) {
      handleFetchData(selectedSeries);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedSeries]);

  const handleSeriesChange = (series: string) => {
    setSelectedSeries(series);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 font-sans">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <SeriesSelector
          seriesList={SERIES_LIST}
          selectedSeries={selectedSeries}
          onSeriesChange={handleSeriesChange}
          isLoading={isLoading}
        />
        
        <div className="mt-8">
          {isLoading && <LoadingSpinner />}
          {error && <ErrorMessage message={error} />}
          {seriesData && !isLoading && <InfographicDisplay data={seriesData} seriesName={selectedSeries}/>}
          {!selectedSeries && !isLoading && <Welcome />}
        </div>
      </main>
      <footer className="text-center py-4 text-slate-500 text-sm">
        <p>Powered by Google Gemini. Content is AI-generated and may not be fully accurate.</p>
      </footer>
    </div>
  );
};

export default App;