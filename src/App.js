import './App.css';
import {MoviesList} from "./components/MoviesList/MoviesList";

function App() {
    return (
        <div className="App">

            <MoviesList/>

        </div>
    );
}

export default App;


// <Router>
//     <div className={'header'}>
//         <Link to={'/'}>Main</Link>
//         <br/>
//         <Link to={'/MoviesList'}>MoviesList</Link>
//         <br/>
//         <Link to={'/MoviesPage'}>MoviesPage</Link>
//     </div>
//     <hr/>
//
//     <div>
//         <Switch>
//             <Route path={'/MoviesList'} component={MoviesList}/>
//
//             <Route path={'/MoviesPage'} render={(props) => {
//                 return <MoviesPage/>
//             }}/>
//         </Switch>
//     </div>
//
// </Router>
