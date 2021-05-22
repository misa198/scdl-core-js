import { Playlist } from "./playlist";
import { Track } from "./track";
import { User } from "./user";

type Filter = "tracks" | "users" | "albums" | "playlists" | "all";

export interface SearchOptions {
  query: string;
  limit?: number;
  offset?: number;
  filter?: Filter;
}

export interface SearchResponse<T = Playlist | Track | User> {
  collection: T[];
  total_results: number;
  next_href?: string;
  query_urn: string;
}
