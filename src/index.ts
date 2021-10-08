import * as m3u8stream from "m3u8stream";
import { DownloadOptions } from "./@types/download";
import { Playlist } from "./@types/playlist";
import { SearchOptions, SearchResponse } from "./@types/search";
import { Track, TrendingOptions, TrendingTrackResponse } from "./@types/track";
import { User } from "./@types/user";
import { download } from "./services/download";
import { getClientId } from "./services/get-client-id";
import { getPlaylist } from "./services/playlist";
import { search } from "./services/search";
import { getTrack, getTracksByIds, getTrending } from "./services/tracks";
import { getUser } from "./services/user";

export class SoundCloud {
  private clientId: string;

  constructor() {
    this.clientId = "";
  }

  public static async create(): Promise<SoundCloud> {
    const scdl = new SoundCloud();
    await scdl.connect();
    return scdl;
  }

  public connect = async (): Promise<void> => {
    const clientId = await getClientId();
    this.clientId = clientId;
  };

  public search = async (
    searchOptions: SearchOptions
  ): Promise<SearchResponse> => {
    this.checkClientId();
    return search(this.clientId, searchOptions);
  };

  public users = {
    getUser: async (url: string): Promise<User> => {
      this.checkClientId();
      return await getUser(this.clientId, url);
    },
  };

  public tracks = {
    getTracksByIds: async (ids: number[]): Promise<Track[]> => {
      this.checkClientId();
      return await getTracksByIds(this.clientId, ids);
    },

    getTrack: async (url: string): Promise<Track> => {
      this.checkClientId();
      return await getTrack(this.clientId, url);
    },

    getTrending: async (
      options?: TrendingOptions
    ): Promise<TrendingTrackResponse> => {
      this.checkClientId();
      return await getTrending(this.clientId, options);
    },
  };

  public playlists = {
    getPlaylist: async (url: string): Promise<Playlist> => {
      this.checkClientId();
      return await getPlaylist(this.clientId, url);
    },
  };

  public download = async (
    url: string,
    downloadOptions?: DownloadOptions
  ): Promise<m3u8stream.Stream> => {
    this.checkClientId();
    return await download(this.clientId, url, downloadOptions);
  };

  private checkClientId() {
    if (!this.clientId)
      throw Error("Require client_id. Run .connect() firstly");
  }
}

export * from "./@types/playlist";
export * from "./@types/search";
export * from "./@types/track";
export * from "./@types/user";
