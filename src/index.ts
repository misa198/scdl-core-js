import { SearchOptions, SearchResponse } from "../@types/search";

import { getClientId } from "./services/get-client-id";
import { search } from "./services/search";

export class SoundCloud {
  private clientId: string;

  constructor() {
    this.clientId = "";
  }

  public connect = async (): Promise<void> => {
    const clientId = await getClientId();
    this.clientId = clientId;
  };

  public search = async (
    searchOptions: SearchOptions
  ): Promise<SearchResponse> => {
    if (!this.clientId) throw Error("Require client_id");
    return search(this.clientId, searchOptions);
  };
}
