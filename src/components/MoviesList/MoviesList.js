import {useEffect, useState} from "react";
import {getMovies} from "../../services/movies.service";
import MoviesListCard from "../MoviesListCard/MoviesListCard";
import './MoviesList.css';
import {Route, Switch} from "react-router-dom";
import MoviesPage from "../MoviesPage /MoviesPage";

export function MoviesList(props) {
    let {match: {url}, history} = props;
    let [movies, setMovies] = useState([]);

    useEffect(() => {
        getMovies().then(value => setMovies([...value.data.results]));
    }, [])

    console.log(movies)

    return (
        <div>

            <div className={'movies'}>
                {
                    movies.length>0 &&  movies.map(value => <MoviesListCard item={value} history={history} key={value.id} genre_ids={value.genre_ids}/>)
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