import React from "react";
import "./playListBanner.css";

// TODO:make a filter fucntion

const PlayListBanner = ({ image,onClick,mood }) => {
  return (
    
    <button onClick={onClick} >
      
      <div className="banner">
      <img src={image} alt="Playlist banner" /> 
      <div className="filter">
        <p style={{color:"white",textAlign: "center",fontFamily:"roboto",fontSize:25,marginTop:75}}>{mood}</p>
      </div>
    </div>
    </button>

  );
};

export default PlayListBanner;
