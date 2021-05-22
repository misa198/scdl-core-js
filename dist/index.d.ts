import { SearchOptions, SearchResponse } from "../@types/search";
export declare class SoundCloud {
    private clientId;
    constructor();
    connect: () => Promise<void>;
    search: (searchOptions: SearchOptions) => Promise<SearchResponse>;
}
export { SearchOptions, SearchResponse } from "../@types/search";
export { Track } from "../@types/track";
