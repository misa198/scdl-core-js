import axios from "axios";
import * as m3u8stream from "m3u8stream";
import { DownloadOptions } from "../@types/download";
import { getTrack } from "./tracks";

const getTrackStream = (url: string, downloadOptions?: DownloadOptions) => {
  try {
    return m3u8stream.default(url, {
      highWaterMark: downloadOptions?.highWaterMark || 16 * 1024,
    });
  } catch (e) {
    throw "Invalid url";
  }
};

const getM3u8Url = async (clientId: string, url: string): Promise<string> => {
  const _url = `${url}?client_id=${clientId}`;
  try {
    const response = await axios.get(_url, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
        Accept: "*/*",
        "Accept-Encoding": "gzip, deflate, br",
      },
    });
    return response.data.url;
  } catch (e) {
    throw "Invalid url";
  }
};

export const download = async (
  clientId: string,
  url: string,
  downloadOptions?: DownloadOptions
): Promise<m3u8stream.Stream> => {
  const track = await getTrack(clientId, url);
  const transcodings = track.media.transcodings;
  let transcoding = null;
  let i = 0;
  while (i < transcodings.length) {
    if (transcodings[i].format.protocol === "hls") {
      transcoding = transcodings[i];
      break;
    }
    i++;
  }
  if (!transcoding) throw "Invalid url!";

  const m3u8Url = await getM3u8Url(clientId, transcoding.url);

  return getTrackStream(m3u8Url, downloadOptions);
};
