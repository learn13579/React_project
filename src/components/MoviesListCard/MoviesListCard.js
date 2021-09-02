import './MoviesListCard.css';

export default function MoviesListCard({item}) {

    return (
        <div className={'movie'}>

            <b>{item.id}</b>

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

