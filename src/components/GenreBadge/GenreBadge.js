import "./GenreBadge.css"
// import {getGenres} from "../../services/genres.servise";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
// import {useEffect, useState} from "react";

export function GenresIds({genre_ids}) {

    const genres = useSelector(({genres}) => genres)

    const genresFilm = genre_ids.join(',');

    const genresName = genres.filter(value => genresFilm.indexOf(value.id) !== -1)

    // const [genres, setGenres] = useState([])
    //
    // useEffect(() => {
    //     getGenres().then(value => {
    //         setGenres([...value.data.genres])
    //     })
    // }, [])

    // function xxx() {
    //     for (const argument of genres) {
    //         console.log(argument.id)
    //     }
    // }



    return (
        <div>
            {
                genresName.map(value =>
                    <Link to={{pathname: `/genre/id:${value.id}`, state: value.id}}><h5>{value.name}</h5></Link>)
            }
        </div>
    )
}