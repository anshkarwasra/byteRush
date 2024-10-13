import React from "react";
import { useState } from "react";
import music from "./assets/music.svg";
import play from "./assets/play.svg";

import "./SideBar.css";
import close from "./assets/cross.svg";



const SideBar = ({ invisibility, mood, songs, onClose,onPlay }) => {
    return (
      <div className="sideBar" style={{left: invisibility ? "-755px" : "0"}}>
        <div className="heading">Your {mood} playlist</div>
        <button onClick={onClose} style={{background:"none",border:"none", cursor:"pointer"}}><img src={close}  /></button>
        <div className="songUl">
          {songs.map((song, index) => (
            <div className="song" key={index}>
              <div className="music">
                <img src={music} />
              </div>
              <div className="songName">
                {song.name}
              </div>
              <div className="play">
                <button style={{"background":"none","border":"none",cursor:"pointer"}} onClick={()=> onPlay(song.id)}  ><img src={play}/></button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };

export default SideBar;