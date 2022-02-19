import axios from "axios";
import _ from "lodash";
import { Track, TrendingOptions, TrendingTrackResponse } from "../@types/track";
import { apiBaseUrl } from "../constants/configs";
import { getSingleItemInfo } from "./base-info";

const IDS_LENGTH = 50;

export const getTracksByIds = async (
  clientId: string,
  ids: number[]
): Promise<Track[]> => {
  const chunkedIds = _.chunk(ids, IDS_LENGTH);
  const res: Track[] = [];
  try {
    for (const chunedId of chunkedIds) {
      const _ids = chunedId.join(",");
      const url = encodeURI(
        `${apiBaseUrl}/tracks?ids=${_ids}&client_id=${clientId}`
      );
      const response = await axios.get(url);
      res.push(...(response.data as Track[]));
    }
    return res;
  } catch (e) {
    throw `Invalid ids: ${ids}`;
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
    return tracks as TrendingTrackResponse;
  } catch (e) {
    throw "Error";
  }
};
