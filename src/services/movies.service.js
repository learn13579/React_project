import axios from "axios";
import {BASE_URL, KEY} from "./const";

const instance = axios.create({
    baseURL: BASE_URL,
    headers: {
        Authorization: KEY
    }
})

const getMovies = async (page) => await instance.get(`/discover/movie?page=${page}`);

// const getMovie = (id) =>{
//     return instance.get('/discover/movie/' + id);
// };

export {getMovies}
// `/discover/movie?pageNumber=${page}`