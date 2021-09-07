import './Header.css';
import {useState} from "react";
import img from "./Logo.png";
import img2 from "./avagirls.png";

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

                <div className={'avaUser'}>
                    <img className={'ava'} src={img2} alt="logo"/>
                    <h6>user 125</h6>
                </div>
            </div>



        </div>
    );
}