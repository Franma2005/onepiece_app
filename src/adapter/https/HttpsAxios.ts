import { Character } from "../../config/entities/Entities";
import { HttpsConfig } from "./Https";
import axios, { AxiosInstance } from "axios";
import Https from "./Https";

class HttpsAxios extends Https {
    
    axios: AxiosInstance;

    constructor({url, route}: HttpsConfig) {
        super({url, route});
        this.axios = axios.create({
            baseURL: url,
            timeout: 5000,
            headers: {'X-Custom-Header': 'foobar'},
        });
    }

    async getCharacters(): Promise<Character> {
        return (await this.axios.get(
            this.route,
            {
                responseType: "json",
            },
        )).data;
    }      
}