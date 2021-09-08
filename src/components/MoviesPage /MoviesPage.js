import './MoviesPage.css';
import {Link} from "react-router-dom";
import img from "../MoviesListCard/5-Star.png";
import {GenresIds} from "../GenreBadge/GenreBadge";
// import StarRatings from "react-star-ratings/src";
import ReactStars from "react-rating-stars-component/dist/react-stars";

export default function MoviesPage(props) {

    let {location: {state}} = props
    console.log(state);

    return (
        <div className={'page_movie'}>

            <h1>{state.original_title}</h1>

            <img src={`https://image.tmdb.org/t/p/w500${state.poster_path}`} alt="foto"/>

            <p>Movie rating: <b className={"rating"}>{state.vote_average}</b><img className={'star'} src={img}
                                                                                  alt="star"/></p>
            <p>Popularity: {state.popularity}</p>

            <p><b>Genres:</b> <br/><GenresIds genre_ids={state.genre_ids}/></p>

            <br/>
            <p><b>Overview:</b> <br/>{state.overview}</p>

            <p> Please rate this movie: <ReactStars classNames={"reactStars"} count={state.vote_average} size={30}  /> </p>

            <br/>
            <p>release date: {state.release_date}</p>

            <p>original language: <b>{state.original_language}</b></p>

            <i>the number movie : {state.id}</i>
            <br/>
            <Link className={'link'} to={'/'}> return to all movies </Link>

        </div>
    );
}
