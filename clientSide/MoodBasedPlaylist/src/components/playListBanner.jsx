import React from "react";
import "./playListBanner.css";

// TODO:make a filter fucntion

const PlayListBanner = (props) => {
  return (
    <div className="banner">
      <img src={props.image} alt="Playlist banner" /> 
      <div className="filter">
      </div>
    </div>
  );
};

export default PlayListBanner;
