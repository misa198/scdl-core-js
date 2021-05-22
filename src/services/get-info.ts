import axios from "axios";

import { Playlist } from "../../@types/playlist";
import { Track } from "../../@types/track";
import { User } from "../../@types/user";

import { apiBaseUrl } from "../constants/configs";

export const getTracksInfoByIds = async (
  clientId: string,
  id: number[]
): Promise<Track> => {
  const ids = id.join(",");
  const url = encodeURI(
    `${apiBaseUrl}/tracks?ids=${ids}?client_id=${clientId}`
  );
  const response = await axios.get(url);
  return response.data;
};

const getSingleItemInfo = async (
  clientId: string,
  url: string
): Promise<Playlist | Track | User> => {
  const requestUrl = `${apiBaseUrl}/resolve?url=${url}&client_id=${clientId}`;
  const response = await axios.get(requestUrl);
  return response.data;
};

export const getPlaylistByPermalink = async (
  clientId: string,
  url: string
): Promise<Playlist> => {
  const playlist = (await getSingleItemInfo(clientId, url)) as Playlist;
  return playlist;
};

export const getTrackByPermalink = async (
  clientId: string,
  url: string
): Promise<Track> => {
  const track = (await getSingleItemInfo(clientId, url)) as Track;
  return track;
};
