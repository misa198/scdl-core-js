import axios from "axios";
import { Playlist } from "../@types/playlist";
import { Track } from "../@types/track";
import { User } from "../@types/user";
import { apiBaseUrl } from "../constants/configs";

export const getSingleItemInfo = async (
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
