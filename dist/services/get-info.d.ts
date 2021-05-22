import { Playlist } from "../../@types/playlist";
import { Track } from "../../@types/track";
import { User } from "../../@types/user";
export declare const getTracksByIds: (clientId: string, id: number[]) => Promise<Track[]>;
export declare const getPlaylistByPermalink: (clientId: string, url: string) => Promise<Playlist>;
export declare const getTrackByPermalink: (clientId: string, url: string) => Promise<Track>;
export declare const getUserByPermalink: (clientId: string, url: string) => Promise<User>;
