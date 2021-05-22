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
exports.getClientId = void 0;
const axios_1 = __importDefault(require("axios"));
const regex_1 = require("../constants/regex");
const configs_1 = require("../constants/configs");
const getClientId = () => __awaiter(void 0, void 0, void 0, function* () {
    const response = yield axios_1.default(configs_1.clientIdUrl);
    const matchResult = response.data.match(regex_1.clientIdRegex);
    if (matchResult === null)
        throw new Error("Can't get client id");
    return matchResult[1];
});
exports.getClientId = getClientId;
