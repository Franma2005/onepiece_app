import { Character } from "../config/Entities";
import Https from "./Https";

class HttpsFetch extends Https {
    
    async getCharacters(): Promise<Character> {
        throw new Error("Method not implemented.");
        const data = await fetch(`${this.url}${this.route}`);
        const dataJson = await data.json()
    }      
}