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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.search = void 0;
const axios_1 = __importDefault(require("axios"));
const configs_1 = require("../constants/configs");
const search = (clientId, searchOptions) => __awaiter(void 0, void 0, void 0, function* () {
    const { query, limit = 10, offset = 0, filter = "all" } = searchOptions;
    const path = filter === "all" ? "" : `/${filter}`;
    const baseUrl = `${configs_1.apiBaseUrl}/search${path}`;
    const url = encodeURI(`${baseUrl}?q=${query}&limit=${limit}&offset=${offset}&access=playable&client_id=${clientId}`);
    const response = yield axios_1.default.get(url);
    return response.data;
});
exports.search = search;
