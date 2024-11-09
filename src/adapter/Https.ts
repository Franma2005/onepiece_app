import { Character } from "../config/Entities";

interface HttpsConfig {
    url: string,
    route: string,
}

export default abstract class Https {
    
    url:string;
    route:string;

    constructor({ url, route }:HttpsConfig) {
        this.url = url;
        this.route = route;
    }

    abstract getCharacters(): Promise<Character>;
}