import './MoviesPage.css';
import {Link} from "react-router-dom";
import img from "../MoviesListCard/5-Star.png";

export default function MoviesPage(props) {

    let {location: {state}} = props
console.log(state)
    return (
        <div className={'page_movie'}>

            <h3>{state.original_title}</h3>

            <img src={`https://image.tmdb.org/t/p/w500${state.poster_path}`} alt="foto"/>

            <p>Movie rating: <b className={"rating"}>{state.vote_average}</b><img className={'star'} src={img} alt="star"/> </p>

            <p>Popularity: {state.popularity}</p>

            <p>GenresIds: {state.genre_ids}</p>
            <br/>
            <p>Overview: <br/>{state.overview}</p>
            <br/>
            <p>release date: {state.release_date}</p>
            <p>original language: {state.original_language}</p>

            <i>the number movie : {state.id}</i>
            <br/>
            <Link className={'link'}  to={'/'} > return to all movies </Link>

        </div>
    );
}
