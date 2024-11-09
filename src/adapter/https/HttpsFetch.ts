import { Character } from "../../config/entities/Entities";
import Https from "./Https";

class HttpsFetch extends Https {
    
    async getCharacters(): Promise<Character> {
        const data = await fetch(`${this.url}${this.route}`);
        const dataJson = await data.json();
        return dataJson;
    }      
}