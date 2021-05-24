import * as m3u8stream from "m3u8stream";

import { getClientId } from "./services/get-client-id";
import { search } from "./services/search";
import { download } from "./services/download";

import { Track, TrendingOptions } from "../@types/track";
import { Playlist } from "../@types/playlist";
import { User } from "../@types/user";
import { DownloadOptions } from "../@types/download";
import { SearchOptions, SearchResponse } from "../@types/search";
import { getUser } from "./services/user";
import { getTrack, getTracksByIds, getTrending } from "./services/tracks";
import { getPlaylist } from "./services/playlist";

export class SoundCloud {
  private clientId: string;

  constructor() {
    this.clientId = "";
  }

  public connect = async (): Promise<void> => {
    const clientId = await getClientId();
    this.clientId = clientId;
  };

  public search = async (
    searchOptions: SearchOptions
  ): Promise<SearchResponse> => {
    if (!this.clientId) throw Error("Require client_id");
    return search(this.clientId, searchOptions);
  };

  public users = {
    getUser: async (url: string): Promise<User> =>
      await getUser(this.clientId, url),
  };

  public tracks = {
    getTracksByIds: async (ids: number[]): Promise<Track[]> =>
      await getTracksByIds(this.clientId, ids),

    getTrack: async (url: string): Promise<Track> =>
      await getTrack(this.clientId, url),

    getTrending: async (options?: TrendingOptions): Promise<Track> =>
      await getTrending(this.clientId, options),
  };

  public playlists = {
    getPlaylist: async (url: string): Promise<Playlist> =>
      await getPlaylist(this.clientId, url),
  };

  public download = async (
    url: string,
    downloadOptions?: DownloadOptions
  ): Promise<m3u8stream.Stream> => {
    return await download(this.clientId, url, downloadOptions);
  };
}

export { Playlist } from "../@types/playlist";
export { SearchOptions, SearchResponse } from "../@types/search";
export { Track } from "../@types/track";
export { User } from "../@types/user";
