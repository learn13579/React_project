import {useEffect, useState} from "react";
import {getGenres} from "../../services/genres.servise";

export function GenresIds({genre_ids}) {
    console.log(genre_ids)

    const [genres, setGenres] = useState([])
    useEffect(() => {
        getGenres().then(value => {
            setGenres([...value.data.genres])
        })
    }, [])
    const genresFilm = genre_ids.join(',');

    const genresName = genres.filter(value => genresFilm.indexOf(value.id) !== -1)

    return (
        <div>
            {
                genresName.map(value => <div>{value.name}</div>)
            }
        </div>
    )
}
