import * as m3u8stream from "m3u8stream";
import { DownloadOptions } from "../../@types/download";
export declare const download: (clientId: string, url: string, downloadOptions?: DownloadOptions | undefined) => Promise<m3u8stream.Stream>;
