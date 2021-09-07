import './MoviesListCard.css';

export default function MoviesListCard({item, genre_ids}) {

    return (
        <div className={'movie'}>

            <img src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt="foto"/>
            <h3>{item.original_title}</h3>
            <p>Movie rating: {item.vote_average}</p>

            <p>Popularity: {item.popularity}</p>
            <p>GenresIds: {item.genre_ids}</p>
            <br/>
            <i>the number movie : {item.id}</i>
        </div>
    );
}
