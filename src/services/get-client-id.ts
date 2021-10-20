import axios from "axios";
import { soundCloudUrl } from "../constants/configs";
import { clientIdRegex, scriptUrl } from "../constants/regex";

export const getClientId = async (): Promise<string> => {
  try {
    const soundCloudDom = (await axios.get(soundCloudUrl)).data as string;
    const paths = soundCloudDom.split('<script crossorigin src="');
    const urls: string[] = [];
    paths.forEach((path: string) => {
      const url = path.replace('"></script>', "");
      const res = url.split("\n")[0];
      if (scriptUrl.test(res)) urls.push(res);
    });

    for (const url of urls) {
      const response = await axios(url);
      const matchResult = (response.data as string).match(clientIdRegex);
      if (matchResult !== null) {
        return matchResult[1] as string;
      }
    }
    throw "Can't get client id";
  } catch (e) {
    throw "Can't get client id";
  }
};
