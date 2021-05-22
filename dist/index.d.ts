import { SearchOptions, SearchResponse } from "../@types/search";
import { Track } from "../@types/track";
import { Playlist } from "../@types/playlist";
export declare class SoundCloud {
    private clientId;
    constructor();
    connect: () => Promise<void>;
    search: (searchOptions: SearchOptions) => Promise<SearchResponse>;
    info: {
        getTracksByIds: (ids: number[]) => Promise<Track[]>;
        getPlaylistByPermalink: (url: string) => Promise<Playlist>;
        getTrackByPermalink: (url: string) => Promise<Track>;
    };
}
export { Playlist } from "../@types/playlist";
export { SearchOptions, SearchResponse } from "../@types/search";
export { Track } from "../@types/track";
export { User } from "../@types/user";
