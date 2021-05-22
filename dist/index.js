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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SoundCloud = void 0;
const get_client_id_1 = require("./services/get-client-id");
const search_1 = require("./services/search");
class SoundCloud {
    constructor() {
        this.connect = () => __awaiter(this, void 0, void 0, function* () {
            const clientId = yield get_client_id_1.getClientId();
            this.clientId = clientId;
        });
        this.search = (searchOptions) => __awaiter(this, void 0, void 0, function* () {
            if (!this.clientId)
                throw Error("Require client_id");
            return search_1.search(this.clientId, searchOptions);
        });
        this.clientId = "";
    }
}
exports.SoundCloud = SoundCloud;
