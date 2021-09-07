import {useEffect, useState} from "react";
import {getMovie} from "../../services/movies.service";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import './MoviesList.css';
import {Route, Switch} from "react-router-dom";
import MoviesPage from "../MoviesPage /MoviesPage";

export function MoviesList(props) {
    let {match: {url}, history} = props;
    let [movie, setMovie] = useState([]);

    useEffect(() => {
        getMovie().then(value => setMovie([...value.data.results]));
    }, [])

    console.log(movie)

    return (
        <div>

            <div className={'movies'}>
                {
                    movie.map(value => <MoviesListCard item={value} history={history} key={value.id} genre_ids={value.genre_ids}/>)
                }
            </div>

            <Switch>
            <div>
                <Route path={`${url}/:id`} component={MoviesPage}/>
            </div>
            </Switch>
        </div>
    );
}