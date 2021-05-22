import axios from "axios";

import { apiBaseUrl } from "../constants/configs";
import { SearchOptions, SearchResponse } from "../../@types/search";

export const search = async (
  clientId: string,
  searchOptions: SearchOptions
): Promise<SearchResponse> => {
  const { query, limit = 10, offset = 0, filter = "all" } = searchOptions;
  const path = filter === "all" ? "" : `/${filter}`;
  const baseUrl = `${apiBaseUrl}/search${path}`;
  const url = encodeURI(
    `${baseUrl}?q=${query}&limit=${limit}&offset=${offset}&access=playable&client_id=${clientId}`
  );

  const response = await axios.get(url);
  return response.data as SearchResponse;
};
