import React from "react";
import { useState } from "react";
import music from "./assets/music.svg";
import play from "./assets/play.svg";

import "./SideBar.css";



const SideBar = ({ invisibility, mood, songs, onClose }) => {
    return (
      <div className="sideBar" style={{left: invisibility ? "-755px" : "0"}}>
        <div className="heading">Your {mood} playlist</div>
        <button onClick={onClose}>Close</button>
        <div className="songUl">
          {songs.map((song, index) => (
            <div className="song" key={index}>
              <div className="music">
                <img src={music} />
              </div>
              <div className="songName">
                {song}
              </div>
              <div className="play">
                <img src={play}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default SideBar;