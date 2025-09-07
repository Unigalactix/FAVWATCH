import React from 'react';

interface SeriesSelectorProps {
  seriesList: string[];
  selectedSeries: string;
  onSeriesChange: (series: string) => void;
}

const SeriesSelector: React.FC<SeriesSelectorProps> = ({ seriesList, selectedSeries, onSeriesChange }) => {
  return (
    <div className="flex flex-col items-center">
      <label htmlFor="series-select" className="text-lg font-semibold text-slate-300 mb-2">
        Choose a Universe
      </label>
      <div className="relative">
        <select
          id="series-select"
          value={selectedSeries}
          onChange={(e) => onSeriesChange(e.target.value)}
          className="appearance-none w-72 md:w-96 bg-slate-800 border border-slate-600 text-white py-3 px-4 pr-8 rounded-lg leading-tight focus:outline-none focus:bg-slate-700 focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/50 transition duration-300 ease-in-out"
        >
          <option value="">-- Select a Series --</option>
          {seriesList.map((series) => (
            <option key={series} value={series}>
              {series}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-slate-400">
          <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SeriesSelector;