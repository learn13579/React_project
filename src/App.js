import './App.css';
import {MoviesList} from "./components/MoviesList/MoviesList";
import Header from "./components/Header/Header";

import Splash from ".components/SplashSceen"
import {useState} from  "react";
import {TremeProvaider} from "styled_components";

const LightTreme = {
    pageBackground: "blanchedalmond",
    titleColor: "#dc658b",
    tagLineColor: "black"
};

const DarkTreme = {
    pageBackground: "#",
    titleColor: "lightpink",
    tagLineColor: "lavender"
};

const tremes={
    light: LightTreme,
    dark: DarkTreme,
}



function App() {
const [treme, setTreme] = useState("lidht")
    return (
        <div className="App">
            <TremeProvaider treme={tremes[treme]}>
                <Splash treme={treme} setTreme={setTreme}></Splash>
            </TremeProvaider>

            <Header/>
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
