import {useEffect, useState} from "react";
import {getMovie} from "../../services/movies.service";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import './MoviesList.css';

export function MoviesList() {

    let [movie, setMovie] = useState([]);

    useEffect(() => {
        getMovie().then(value => setMovie([...value.data.results]));
    }, [])

    console.log(movie.genre_ids);

console.log(movie)

    return (
        <div>

            <div className={'movies'}>
                {
                    movie.map(value => <MoviesListCard item={value} key={value.id} genre_ids={value.genre_ids}/>)
                }
            </div>
        </div>
    );
}
