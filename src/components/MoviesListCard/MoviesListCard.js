import './MoviesListCard.css';
import img from "./5-Star.png";
import {Link, withRouter} from "react-router-dom";

function MoviesListCard({item, genre_ids}) {

    return (
        <div className={'movie'} >

            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="foto"/>
            <h3>{item.original_title}</h3>

            <p>Movie rating: <b className={"rating"}>{item.vote_average}</b> <img className={'star'} src={img} alt="star"/> </p>

            <p>Popularity: {item.popularity}</p>
            <p>GenresIds: {item.genre_ids}</p>

            <Link className={'link'} to={{pathname:`/moviesPage/${item.id}`, state:item}}>movies details</Link>
            <br/>
            <br/>
            <i>the number movie : {item.id}</i>

        </div>
    );
}
export default withRouter(MoviesListCard);