// import './MoviesPage.css';

// export default function MoviesPage(value){
//
//     let [moviesPage, setMoviesPage] = useState([]);
//
//     useEffect(() => {
//         getMoviesPage().then(value => setMoviesPage([...value]))
//     }, [])
//
//
//     return(
//             <div className={'page_movie'}>
//
//                 <b>{value.id}. {value.original_title}</b>
//                 <p>{value.genres.name}</p>
//
//                 {/*foto*/}
//                 <p>{value.backdrop_path}</p>
//
//                 {/*opus*/}
//                 <p>overview: {value.overview}</p>
//
//                 <p>production countries: {value.production_countries.name}</p>
//                 <p>release date:  {value.release_date}</p>
//                 <p>original language: {value.original_language}</p>
//                 <p>popularity: {value.popularity}</p>
//
//             </div>
//     );
// }
