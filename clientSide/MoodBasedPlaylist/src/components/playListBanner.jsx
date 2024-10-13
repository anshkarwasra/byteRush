import React from "react";
import "./playListBanner.css";

// TODO:make a filter fucntion

const PlayListBanner = (props) => {
  return (
    <div className="banner">
      <img src={props.image} alt="Playlist banner" /> 
      <div className="filter">
        <p style={{color:"white",textAlign: "center",fontFamily:"roboto",fontSize:25,marginTop:75}}>your title goes here</p>
      </div>
    </div>
  );
};

export default PlayListBanner;
