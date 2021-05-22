"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.download = void 0;
var axios_1 = __importDefault(require("axios"));
var m3u8stream = __importStar(require("m3u8stream"));
var get_info_1 = require("./get-info");
var getTrackStream = function (url, downloadOptions) {
    console.log(url);
    return m3u8stream.default(url, {
        highWaterMark: (downloadOptions === null || downloadOptions === void 0 ? void 0 : downloadOptions.highWaterMark) || 16,
    });
};
var getM3u8Url = function (clientId, url) { return __awaiter(void 0, void 0, void 0, function () {
    var _url, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _url = url + "?client_id=" + clientId;
                return [4 /*yield*/, axios_1.default.get(_url, {
                        headers: {
                            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36",
                            Accept: "*/*",
                            "Accept-Encoding": "gzip, deflate, br",
                        },
                    })];
            case 1:
                response = _a.sent();
                return [2 /*return*/, response.data.url];
        }
    });
}); };
var download = function (clientId, url, downloadOptions) { return __awaiter(void 0, void 0, void 0, function () {
    var track, transcodings, transcoding, i, m3u8Url;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, get_info_1.getTrackByPermalink(clientId, url)];
            case 1:
                track = _a.sent();
                transcodings = track.media.transcodings;
                transcoding = null;
                i = 0;
                while (i < transcodings.length) {
                    if (transcodings[i].format.protocol === "hls") {
                        transcoding = transcodings[i];
                        break;
                    }
                    i++;
                }
                if (!transcoding)
                    throw new Error("Invalid url!");
                return [4 /*yield*/, getM3u8Url(clientId, transcoding.url)];
            case 2:
                m3u8Url = _a.sent();
                return [2 /*return*/, getTrackStream(m3u8Url, downloadOptions)];
        }
    });
}); };
exports.download = download;
//# sourceMappingURL=download.js.map