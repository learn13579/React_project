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
import {useState} from "react";

function App() {

    // let [toggle, setToggle] = useState('AppLight');

    return (
        <Router>

            <div className="AppLight">

                {/*<button className={"butToggle"} onClick={()=>{*/}
                {/*    if (toggle === 'AppLight'){*/}
                {/*        setToggle('AppDark');*/}
                {/*    } else if (toggle === 'AppLight'){*/}
                {/*        setToggle('AppDark');*/}
                {/*    }*/}
                {/*}}>change background (app) </button>*/}

                <Header/>

                <div>
                    <Switch>
                        <Route path={'/moviesPage/:id'} component={MoviesPage}/>
                        <Route path={'/'} component={MoviesList}/>

                    </Switch>
                </div>

            </div>
        </Router>
    );
}

export default App;