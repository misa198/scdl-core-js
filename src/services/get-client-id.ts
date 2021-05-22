import axios from "axios";

import { clientIdRegex } from "../constants/regex";
import { clientIdUrl } from "../constants/configs";

export const getClientId = async (): Promise<string> => {
  try {
    const response = await axios(clientIdUrl);
    const matchResult = response.data.match(clientIdRegex);
    if (matchResult === null) throw "Can't get client id";
    return matchResult[1] as string;
  } catch (e) {
    throw "Can't get client id";
  }
};
