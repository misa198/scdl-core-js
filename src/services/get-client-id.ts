import axios from "axios";

import { clientIdRegex } from "../constants/regex";
import { clientIdUrl } from "../constants/configs";

export const getClientId = async (): Promise<string> => {
  const response = await axios(clientIdUrl);
  const matchResult = response.data.match(clientIdRegex);
  if (matchResult === null) throw new Error("Can't get client id");
  return matchResult[1] as string;
};
