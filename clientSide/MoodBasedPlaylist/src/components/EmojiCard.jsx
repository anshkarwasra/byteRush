// EmojiCard.js
import { useState } from 'react';
import React from 'react';
import './EmojiCard.css'; // Optional CSS for styling
import heart from "./assets/heart.svg"
import plus from "./assets/plus.svg"
import cross from "./assets/cross.svg"



const EmojiCard = ({ emoji, mood,condition }) => {
  const [showComponent, setShowComponent] = useState(condition);
  
  if (showComponent) {
    console.log("yess yes")
    return (
      <>
        <div className="emoji-card" style={{padding:"30px"}}>
        <div className="emoji-image">{emoji}</div>
        <div className="emoji-mood">{mood}</div>
        <div className="logo" style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginTop:"20px",width:"inherit"}}>
        <img src={heart} alt=""  />
        <button onClick={ () => setShowComponent(false)} style={{"background":"none","border":"none"}}><img src={cross} alt=""   style={{cursor:"pointer"}}  /></button>
        <img src={plus} alt=""  />
        </div>
      </div>
      </>
    );
  }
  return null;
};

export default EmojiCard;
