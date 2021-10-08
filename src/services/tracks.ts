import axios from "axios";
import { Track, TrendingOptions, TrendingTrackResponse } from "../@types/track";
import { apiBaseUrl } from "../constants/configs";
import { getSingleItemInfo } from "./base-info";

export const getTracksByIds = async (
  clientId: string,
  ids: number[]
): Promise<Track[]> => {
  const _ids = ids.join(",");
  const url = encodeURI(
    `${apiBaseUrl}/tracks?ids=${_ids}&client_id=${clientId}`
  );
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    throw "Invalid ids";
  }
};

export const getTrack = async (
  clientId: string,
  url: string
): Promise<Track> => {
  try {
    const track = (await getSingleItemInfo(clientId, url)) as Track;
    return track;
  } catch (e) {
    throw "Invalid url";
  }
};

export const getTrending = async (
  clientId: string,
  options?: TrendingOptions
): Promise<TrendingTrackResponse> => {
  try {
    const { offset = 0, limit = 20 } = options || { offset: 0, limit: 20 };
    const requestUrl = `${apiBaseUrl}/featured_tracks/top/all-music?offset=${offset}&limit=${limit}&client_id=${clientId}`;
    const tracks = (await axios.get(requestUrl)).data;
    return tracks;
  } catch (e) {
    throw "Error";
  }
};
