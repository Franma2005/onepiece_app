import setConfig from "../hooks/SetConfig";
import { Character } from "../config/entities/Entities";
import HttpsAxios from "./https/HttpsAxios";
import HttpsFetch from "./https/HttpsFetch";
import { Config } from "../config/Config";

export default class Choose {

    static async getCharacters({url, route, method}: Config): Promise<Character[]> {
        let httpsRequest;
        switch (method) {
            case "axios":
                httpsRequest = new HttpsAxios({ url: url, route: route });
                break;
            case "fetch":
            default:
                httpsRequest = new HttpsFetch({ url: url, route: route });
                break;
        }

        const data = httpsRequest.getCharacters();

        return data;
    }
}