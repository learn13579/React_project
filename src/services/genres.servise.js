import axios from "axios";
import {BASE_URL, KEY} from "./const";

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: KEY,
    }
})

const getGenres = async () => await instance.get('/genre/movie/list');

export {getGenres}
