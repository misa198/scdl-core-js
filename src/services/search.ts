import axios from "axios";
import queryString from "query-string";

import { apiBaseUrl } from "../constants/configs";
import { SearchOptions, SearchResponse } from "../../@types/search";

export const search = async (
  clientId: string,
  searchOptions: SearchOptions
): Promise<SearchResponse> => {
  const { query, limit, offset, filter } = searchOptions;
  const path = filter === "all" ? "/" : `/${filter}`;
  const baseUrl = `${apiBaseUrl}${path}`;
  const url = queryString.stringifyUrl({
    url: baseUrl,
    query: {
      client_id: clientId,
      q: query,
      limit,
      offset,
      access: "playable",
    },
  });

  const response = await axios(url);
  return response.data;
};
