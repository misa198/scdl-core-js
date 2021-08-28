import { Playlist } from "../@types/playlist";
import { Track } from "../@types/track";

import { getSingleItemInfo } from "./base-info";
import { getTracksByIds } from "./tracks";

export const getPlaylist = async (
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
