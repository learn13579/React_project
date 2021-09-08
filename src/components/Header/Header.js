import './Header.css';

import {useState} from "react";
import img from "./Logo.png";
import img2 from "./avagirls.png";

export default function Header() {

    const [searchTerm, setSearchTerm] = useState('');

    let [toggle, setToggle] = useState('AppLight');

    let onSubmit = (e) => {
        e.preventDefault();
    }

    const handleOnChange = (e) => {
        setSearchTerm(e.target.value);
    }

    return (
        <div className={toggle}>
            <button className={"butToggle"} onClick={() => {
                if (toggle === 'AppDark') {
                    setToggle('AppLight');
                } else if (toggle === 'AppLight') {
                    setToggle('AppDark');
                }
            }}>change background
            </button>

            <div className={"headerMoviesList"}>
                <img src={img} alt="logo"/>

                <form>
                    <input onSubmit={onSubmit} placeholder="write the title of the movie" type="search" value={searchTerm}
                           onChange={handleOnChange} className="form__field"/>
                    <button className={"button"}>search</button>
                </form>

                <div className={'avaUser'}>
                    <img className={'ava'} src={img2} alt="logo"/>
                    <h6>user 125</h6>
                </div>
            </div>

        </div>
    );
}