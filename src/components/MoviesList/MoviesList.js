import './MoviesList.css';
import {useEffect, useState} from "react";
import {getMovies} from "../../services/movies.service";
import MoviesListCard from "../MoviesListCard/MoviesListCard";

export function MoviesList(props) {
    let {match: history} = props;
    let [movies, setMovies] = useState([]);
    let [page, setPage] = useState(1);

    useEffect(() => {
        getMovies(page).then(value => setMovies([...value.data.results]));
    }, [page])

    console.log(movies)

    const nextPage = () => {
        setPage(page + 1);
    }

    return (
        <div className={'moviesDiv'}>

            <div className={'movies'}>
                {
                    movies.length > 0 && movies.map(value => <MoviesListCard item={value} history={history}
                                                                             key={value.id}{...value}/>)
                }
            </div>

            <button onClick={nextPage} className={'nextPage'}>next page...</button>
        </div>
    );
}