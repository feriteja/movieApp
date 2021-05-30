export type item = {
  Title?: string;
  Year?: string;
  imdbID: string;
  Type?: string;
  Poster?: string;
};

export type searchResponse = {
  Search: item[];
  totalResults: string;
  Response: string;
};
