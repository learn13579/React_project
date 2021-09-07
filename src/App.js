import './App.css';
import {MoviesList} from "./components/MoviesList/MoviesList";
import Header from "./components/Header/Header";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    withRouter
} from "react-router-dom";
import MoviesPage from "./components/MoviesPage /MoviesPage";

function App() {

    return (
        <Router>
            <div className="App">

                <Header/>

                <div>
                    <Switch>
                        <Route path={'/'} component={MoviesList}/>
                        <Route path={'/moviesPage'} component={MoviesPage}/>
                    </Switch>
                </div>

            </div>
        </Router>
    );
}

export default App;

// {/*<div>*/}
// {/*    <Link to={'/'}> MoviesList </Link>*/}
// {/*    <Link to={'/moviesPage'}> Movies page </Link>*/}
// {/*</div>*/}