"use strict";
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
exports.getUserByPermalink = exports.getTrackByPermalink = exports.getPlaylistByPermalink = exports.getTracksByIds = void 0;
var axios_1 = __importDefault(require("axios"));
var configs_1 = require("../constants/configs");
var getTracksByIds = function (clientId, id) { return __awaiter(void 0, void 0, void 0, function () {
    var ids, url, response, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                ids = id.join(",");
                url = encodeURI(configs_1.apiBaseUrl + "/tracks?ids=" + ids + "&client_id=" + clientId);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios_1.default.get(url)];
            case 2:
                response = _a.sent();
                return [2 /*return*/, response.data];
            case 3:
                e_1 = _a.sent();
                throw "Invalid ids";
            case 4: return [2 /*return*/];
        }
    });
}); };
exports.getTracksByIds = getTracksByIds;
var getSingleItemInfo = function (clientId, url) { return __awaiter(void 0, void 0, void 0, function () {
    var requestUrl, response, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                requestUrl = configs_1.apiBaseUrl + "/resolve?url=" + url + "&client_id=" + clientId;
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, axios_1.default.get(requestUrl)];
            case 2:
                response = _a.sent();
                return [2 /*return*/, response.data];
            case 3:
                e_2 = _a.sent();
                throw "Invalid url";
            case 4: return [2 /*return*/];
        }
    });
}); };
var getPlaylistByPermalink = function (clientId, url) { return __awaiter(void 0, void 0, void 0, function () {
    var playlist, e_3, tracks, loadedTracks, unloadedTrackIds, response;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, getSingleItemInfo(clientId, url)];
            case 1:
                playlist = (_a.sent());
                return [3 /*break*/, 3];
            case 2:
                e_3 = _a.sent();
                throw "Invalid url";
            case 3:
                tracks = playlist.tracks;
                loadedTracks = [];
                unloadedTrackIds = [];
                tracks.forEach(function (track) {
                    if (track.title)
                        loadedTracks.push(track);
                    else
                        unloadedTrackIds.push(track.id);
                });
                if (!(unloadedTrackIds.length > 0)) return [3 /*break*/, 5];
                return [4 /*yield*/, exports.getTracksByIds(clientId, unloadedTrackIds)];
            case 4:
                response = _a.sent();
                loadedTracks = loadedTracks.concat(response);
                _a.label = 5;
            case 5:
                playlist.tracks = loadedTracks;
                return [2 /*return*/, playlist];
        }
    });
}); };
exports.getPlaylistByPermalink = getPlaylistByPermalink;
var getTrackByPermalink = function (clientId, url) { return __awaiter(void 0, void 0, void 0, function () {
    var track, e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, getSingleItemInfo(clientId, url)];
            case 1:
                track = (_a.sent());
                return [2 /*return*/, track];
            case 2:
                e_4 = _a.sent();
                throw "Invalid url";
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getTrackByPermalink = getTrackByPermalink;
var getUserByPermalink = function (clientId, url) { return __awaiter(void 0, void 0, void 0, function () {
    var user, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, getSingleItemInfo(clientId, url)];
            case 1:
                user = (_a.sent());
                return [2 /*return*/, user];
            case 2:
                e_5 = _a.sent();
                throw "Invalid url";
            case 3: return [2 /*return*/];
        }
    });
}); };
exports.getUserByPermalink = getUserByPermalink;
//# sourceMappingURL=get-info.js.map