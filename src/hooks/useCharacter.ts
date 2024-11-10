import { useState, useEffect } from "react";
import { Character } from "../config/entities/Entities";
import Choose from "../adapter/Choose";
import setConfig from "./SetConfig";

export const useCharacter = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
    const [loading, setLoading] =useState(false);
    let config = setConfig();
    const loadCharacters = async () => {
        const persons = await Choose.getCharacters(config);
        setCharacters(persons);
        setLoading(true);
    }
    useEffect(() => {
      loadCharacters();
    }, [])
    
    return {
        characters, loading
    }
}