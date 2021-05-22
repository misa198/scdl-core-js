import * as m3u8stream from "m3u8stream";
import { Track } from "../@types/track";
import { Playlist } from "../@types/playlist";
import { User } from "../@types/user";
import { DownloadOptions } from "../@types/download";
import { SearchOptions, SearchResponse } from "../@types/search";
export declare class SoundCloud {
    private clientId;
    constructor();
    connect: () => Promise<void>;
    search: (searchOptions: SearchOptions) => Promise<SearchResponse>;
    info: {
        getTracksByIds: (ids: number[]) => Promise<Track[]>;
        getPlaylistByPermalink: (url: string) => Promise<Playlist>;
        getTrackByPermalink: (url: string) => Promise<Track>;
        getUserByPermalink: (url: string) => Promise<User>;
    };
    download: (url: string, downloadOptions?: DownloadOptions | undefined) => Promise<m3u8stream.Stream>;
}
export { Playlist } from "../@types/playlist";
export { SearchOptions, SearchResponse } from "../@types/search";
export { Track } from "../@types/track";
export { User } from "../@types/user";
