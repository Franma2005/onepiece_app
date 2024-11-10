import { Character } from "../../config/entities/Entities";
import Https from "./Https";

export default class HttpsFetch extends Https {
    
    async getCharacters(): Promise<Character[]> {
        const data = await fetch(`${this.url}${this.route}`);
        const dataJson = await data.json();
        return dataJson;
    }      
}