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
exports.default = getParkingSpots;
const axios = require('axios');
function getParkingSpots(location, radius) {
    return __awaiter(this, void 0, void 0, function* () {
        const apiKey = process.env.GCP_MAPS_API;
        const PARKINGSPOTSAPI = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${apiKey}&location=${location}&radius=${radius}&type=parking`;
        try {
            const reqToPlacesAPI = yield axios.get(PARKINGSPOTSAPI);
            const data = reqToPlacesAPI.data;
            return data;
        }
        catch (err) {
            console.log(err);
            return { msg: `Serverside error is ${err}` };
        }
    });
}
