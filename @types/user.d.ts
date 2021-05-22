export interface User {
  avatar_url: string;
  city?: string;
  comments_count: number;
  country_code?: number;
  created_at: Date;
  description?: string;
  followers_count: number;
  followings_count: number;
  first_name: string;
  full_name: string;
  groups_count: number;
  id: number;
  kind: string;
  last_modified: Date;
  last_name: string;
  likes_count: number;
  playlist_likes_count: number;
  permalink: string;
  permalink_url: string;
  playlist_count: number;
  reposts_count?: number;
  track_count: number;
  uri: string;
  urn: string;
  username: string;
  verified: boolean;
  badges: {
    pro: boolean;
    pro_unlimited: boolean;
    verified: boolean;
  };
  station_permalink: string;
}
