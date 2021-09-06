import './MoviesListCard.css';

export default function MoviesListCard({item}) {

    return (
        <div className={'movie'}>

            <p>Film ({item.id}):</p>

            <h3>{item.original_title}</h3>
            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="foto" />

            <p>{item.popularity}</p>
            <p>{item.genre_ids}</p>

        </div>
    );
}

// <div className={'movie'}>
//     <p>{item.backdrop_path}</p>
//     <b>{item.id}. {item.original_title}</b>
//     <p>{item.popularity}</p>
// <a href={<MoviesPage/>}>in more detail</a>
// </div>


// import {useEffect, useState} from "react";
// import {getMovies} from "../../services/movies.service";

// let [movies, setMovies] = useState([]);
// useEffect(() => {
//     getMovies().then(value => setMovies([...value]))
// }, [])

