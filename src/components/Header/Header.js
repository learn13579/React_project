import './Header.css';
import {useState} from "react";
import img from "./Logo.png";

export default function Header(){

    let [toggle, setToggle] = useState('light');

    return (
        <div className={toggle}>
            <button className={"butToggle"} onClick={()=>{
                if (toggle === 'dark'){
                    setToggle('light');
                } else if (toggle === 'light'){
                    setToggle('dark');
                }
            }}>change background</button>

            <div className={"headerMoviesList"}>
                <img src={img} alt="logo"/>

                <form>
                <input  placeholder="search movie" type="text" className="form__field" />
                <button className={"butToggle"}>go</button>
                </form>

            </div>

        </div>
    );
}