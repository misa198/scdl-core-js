import axios from "axios";

import { Playlist } from "../../@types/playlist";
import { Track } from "../../@types/track";
import { User } from "../../@types/user";

import { apiBaseUrl } from "../constants/configs";

export const getTracksByIds = async (
  clientId: string,
  id: number[]
): Promise<Track[]> => {
  const ids = id.join(",");
  const url = encodeURI(
    `${apiBaseUrl}/tracks?ids=${ids}&client_id=${clientId}`
  );
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (e) {
    throw "Invalid ids";
  }
};

const getSingleItemInfo = async (
  clientId: string,
  url: string
): Promise<Playlist | Track | User> => {
  const requestUrl = `${apiBaseUrl}/resolve?url=${url}&client_id=${clientId}`;
  try {
    const response = await axios.get(requestUrl);
    return response.data;
  } catch (e) {
    throw "Invalid url";
  }
};

export const getPlaylistByPermalink = async (
  clientId: string,
  url: string
): Promise<Playlist> => {
  let playlist: Playlist;
  try {
    playlist = (await getSingleItemInfo(clientId, url)) as Playlist;
  } catch (e) {
    throw "Invalid url";
  }
  const tracks = playlist.tracks;

  let loadedTracks: Track[] = [];
  const unloadedTrackIds: number[] = [];

  tracks.forEach((track) => {
    if (track.title) loadedTracks.push(track);
    else unloadedTrackIds.push(track.id);
  });

  if (unloadedTrackIds.length > 0) {
    const response = await getTracksByIds(clientId, unloadedTrackIds);
    loadedTracks = loadedTracks.concat(response);
  }
  playlist.tracks = loadedTracks;

  return playlist;
};

export const getTrackByPermalink = async (
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

export const getUserByPermalink = async (
  clientId: string,
  url: string
): Promise<User> => {
  try {
    const user = (await getSingleItemInfo(clientId, url)) as User;
    return user;
  } catch (e) {
    throw "Invalid url";
  }
};
