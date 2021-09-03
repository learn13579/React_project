import './Header.css';
import {useState} from "react";
import img from "./Logo.png";

export default function Header(){

    let [toggle, setToggle] = useState('light');

    return (
        <div className={toggle}>
            <div className={"headerMoviesList"}>
                <img src={img} alt="logo"/>
                <input/>
                <button>search movies</button>

                <button onClick={()=>{
                    if (toggle === 'dark'){
                        setToggle('light');
                    } else if (toggle === 'light'){
                        setToggle('dark');
                    }
                }}>change background</button>
            </div>

        </div>
    );
}