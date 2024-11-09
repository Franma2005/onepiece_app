import setConfig from "../hooks/SetConfig";
import { Character } from "../config/entities/Entities";
import HttpsAxios from "./https/HttpsAxios";
import HttpsFetch from "./https/HttpsFetch";

export default class Choose {

    async getCharacters(): Promise<Character> {
        let httpsRequest;
        const config = setConfig();
        switch (config.method) {
            case "axios":
                httpsRequest = new HttpsAxios({ url: config.url, route: config.route });
                break;
            case "fetch":
            default:
                httpsRequest = new HttpsFetch({ url: config.url, route: config.route });
                break;
        }

        const data = httpsRequest.getCharacters();

        return data;
    }
}