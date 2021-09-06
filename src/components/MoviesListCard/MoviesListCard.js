import './MoviesListCard.css';
import {GenresIds, getGenres} from "../../services/genres.servise";
import GenreBadge from "../GenreBadge/GenreBadge";
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

export default function MoviesListCard({item, genre_ids}) {

    const [genres, setGenres] = useState([])

    useEffect(() => {
        getGenres().then(value => {
            setGenres([...value.data.genres])
        })
    }, [])

    // const genre = argument.id.join(',');

    // const genresName = genres.filter(value => genresFilm.index0f(value.id) !== -1)

    function xxx() {
        for (const argument of genres) {
            console.log(argument.id)
        }
    }

    return (
        <div className={'movie'}>

            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="foto"/>
            <h3>{item.original_title}</h3>
            <p>Movie rating: {item.vote_average}</p>

            <p>Popularity: {item.popularity}</p>
            <p>GenresIds: {item.genre_ids}</p>
            <button onClick={xxx}>ggg</button>
            <br/>
            <i>film {item.id}</i>
        </div>
    );
}
