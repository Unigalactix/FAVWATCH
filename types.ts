export interface ContentItem {
  name: string;
  description: string;
}

export interface TitledItem {
  title: string;
  description: string;
}

export interface SeriesData {
  name: string;
  synopsis: string;
  bannerImage: string;
  accentColor: string; // e.g., 'cyan', 'red', 'yellow' for TailwindCSS color theming
  characters: ContentItem[];
  movies: TitledItem[];
  tvShows: TitledItem[];
}
