import { Album } from "../@types/album";
import { Playlist } from "../@types/playlist";
import { SearchOptions, SearchResponse } from "../@types/search";
import { Track } from "../@types/track";
import { User } from "../@types/user";
export declare class SoundCloud {
    private clientId;
    constructor();
    connect: () => Promise<void>;
    search: (searchOptions: SearchOptions) => Promise<SearchResponse<Album | Playlist | User | Track>>;
}
export { Album } from "../@types/album";
export { Playlist } from "../@types/playlist";
export { SearchOptions, SearchResponse } from "../@types/search";
export { Track } from "../@types/track";
export { User } from "../@types/user";
