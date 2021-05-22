import axios from "axios";

import { clientIdUrl } from "../constants/configs";

export const getClientId = async (): Promise<string> => {
  const response = await axios(clientIdUrl);
  return response.data;
};
