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
  private static clientId: string | null = null;

  public static connect = async (): Promise<void> => {
    const clientId = await getClientId();
    SoundCloud.clientId = clientId;
  };

  public static search = async (
    searchOptions: SearchOptions
  ): Promise<SearchResponse> => {
    this.checkClientId();
    return search(SoundCloud.clientId as string, searchOptions);
  };

  public static users = {
    getUser: async (url: string): Promise<User> => {
      this.checkClientId();
      return await getUser(SoundCloud.clientId as string, url);
    },
  };

  public static tracks = {
    getTracksByIds: async (ids: number[]): Promise<Track[]> => {
      SoundCloud.checkClientId();
      return await getTracksByIds(SoundCloud.clientId as string, ids);
    },

    getTrack: async (url: string): Promise<Track> => {
      SoundCloud.checkClientId();
      return await getTrack(SoundCloud.clientId as string, url);
    },

    getTrending: async (
      options?: TrendingOptions
    ): Promise<TrendingTrackResponse> => {
      SoundCloud.checkClientId();
      return await getTrending(SoundCloud.clientId as string, options);
    },
  };

  public static playlists = {
    getPlaylist: async (url: string): Promise<Playlist> => {
      SoundCloud.checkClientId();
      return await getPlaylist(SoundCloud.clientId as string, url);
    },
  };

  public static download = async (
    url: string,
    downloadOptions?: DownloadOptions
  ): Promise<m3u8stream.Stream> => {
    SoundCloud.checkClientId();
    return await download(SoundCloud.clientId as string, url, downloadOptions);
  };

  private static checkClientId() {
    if (!SoundCloud.clientId)
      throw Error("Require client_id. Run .connect() firstly");
  }
}

export * from "./@types/playlist";
export * from "./@types/search";
export * from "./@types/track";
export * from "./@types/user";
