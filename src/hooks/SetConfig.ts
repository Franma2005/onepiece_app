import { Config } from "../config/Config"
import { useState } from "react";

export default function setConfig():Config {
    const url = "https://api.api-onepiece.com";
    const [route, setRoute] = useState("/v2/characters/en");
    const [method, setMethod] = useState("axios");

    return {url, route, method};
}