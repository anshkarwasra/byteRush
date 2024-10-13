import React from "react"
import search from "./assets/search.svg"
import home from "./assets/home.svg"
import "./Navbar.css"
import logo from "./assets/logo.svg"
import about from "./assets/about.svg"
import contact from "./assets/contact.svg"
import login from "./assets/login.svg"
import play from "./assets/play.svg"



const Navbar = ({ onPlay,onPause}) => {
    

    return (
        <>
        <nav style={{background: "#222222"}} >
            <div className="logo">
            <img src={logo} alt="" srcset="" />
            </div>
            <div className="rightPart">
            <div className="menuList">
                <ul>
                    <li><img src={home} alt="" srcset="" /><a href="">Home</a></li>
                    <li><img src={about} alt="" srcset="" /><a href="">about</a></li>
                    <li><img src={contact} alt="" srcset="" /><a href="">contact</a></li>
                    <li><img src={login} alt="" srcset="" /><a href="">login</a></li>
                </ul>
            </div>
            <div className="line"></div>
            <div className="icons">
                <i><img src={search} alt="" srcset="" /></i>
                <button  onClick={onPlay} style={{"background":"none","border":"none"}} >
                    <img src={play} alt="" srcset="" style={{cursor:"pointer"}} />
                    </button>
            </div>
            </div>
        </nav>
        </>
    );
};

export default Navbar