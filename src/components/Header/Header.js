import './Header.css';

import {useState} from "react";
import img from "./Logo.png";
import img2 from "./avagirls.png";

export default function Header(){

    const [seargTerm, setseargTerm] = useState('');

    let [toggle, setToggle] = useState('AppLight');

    let onSubmit = (e)=>{
        e.preventDefault();
    }

  const  handleOnChange= (e)=>{
      setseargTerm(e.target.value);
  }

    return (
        <div className={toggle}>
            <button className={"butToggle"} onClick={()=>{
                if (toggle === 'AppDark'){
                    setToggle('AppLight');
                } else if (toggle === 'AppLight'){
                    setToggle('AppDark');
                }
            }}>change background</button>

            <div className={"headerMoviesList"}>
                <img src={img} alt="logo"/>

                <form>
                <input onSubmit={onSubmit} placeholder="search movie" type="search" value={seargTerm} onChange={handleOnChange} className="form__field" />
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