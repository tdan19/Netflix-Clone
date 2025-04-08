import axios from "axios";

const instance = axios.create({ baseURL: "https://api.themoviedb.org/3" });

export default instance;
// https://api.themoviedb.org/3/trending/all/week?api_key=7c20fcfd19c65e00fab771ebcf54fd8f&language-en=US
