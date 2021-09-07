import './MoviesPage.css';
import {Link} from "react-router-dom";

export default function MoviesPage(props) {

    let {location: {state}} = props;

    return (
        <div className={'page_movie'}>

            <h3>{state.original_title}</h3>
            <br/>
            <i>the number movie : {state.id}</i>
            <br/>
            <img src={`https://image.tmdb.org/t/p/w500${state.poster_path}`} alt="foto"/>

            <p>Movie rating: <b className={"rating"}>{state.vote_average}</b></p>

            <p>Popularity: {state.popularity}</p>
            <p>GenresIds: {state.genre_ids}</p>

            <p>Overview: {state.overview}</p>

            <p>production countries: {state.production_countries.name}</p>
            <p>release date: {state.release_date}</p>
            <p>original language: {state.original_language}</p>

            <Link className={'link'}  to={'/'} > return to all movies </Link>

        </div>
    );
}
