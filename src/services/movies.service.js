import axios from "axios";

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    headers: {
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTc0NGIzYmVkYjQ5NWIzNzAzNDA2OTJkNjYxNjg2YiIsInN1YiI6IjYxMmY2YWI4Mzk1NDlhMDA4NDRiYmQ0YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SAs60Cbu4_GLCnHKyNZw1AlkKdfAKFMPZ6iLcOASWxA'
    }
})

const getMovies = async () => await instance.get('/discover/movie');

export {getMovies}
