
export interface ContentItem {
  name: string;
  description: string;
}

export interface MovieItem {
    title: string;
    description: string;
}

export interface TvShowItem {
    title: string;
    description: string;
}

export interface SeriesData {
  characters: ContentItem[];
  movies: MovieItem[];
  tvShows: TvShowItem[];
}
