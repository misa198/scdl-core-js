import * as m3u8stream from "m3u8stream";

import { getClientId } from "./services/get-client-id";
import { search } from "./services/search";
import {
  getPlaylistByPermalink,
  getTrackByPermalink,
  getTracksByIds,
  getUserByPermalink,
} from "./services/get-info";
import { download } from "./services/download";

import { Track } from "../@types/track";
import { Playlist } from "../@types/playlist";
import { User } from "../@types/user";
import { DownloadOptions } from "../@types/download";
import { SearchOptions, SearchResponse } from "../@types/search";

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

  public info = {
    getTracksByIds: async (ids: number[]): Promise<Track[]> =>
      await getTracksByIds(this.clientId, ids),

    getPlaylistByPermalink: async (url: string): Promise<Playlist> =>
      await getPlaylistByPermalink(this.clientId, url),

    getTrackByPermalink: async (url: string): Promise<Track> =>
      await getTrackByPermalink(this.clientId, url),

    getUserByPermalink: async (url: string): Promise<User> =>
      await getUserByPermalink(this.clientId, url),
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
