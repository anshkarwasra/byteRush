// EmojiCard.js
import { useState } from 'react';
import React from 'react';
import './EmojiCard.css'; // Optional CSS for styling
import heart from "./assets/heart.svg"
import plus from "./assets/plus.svg"
import cross from "./assets/cross.svg"
import axios from 'axios';


const EmojiCard = ({ emoji, mood,condition,onTrackSelect,onMoodSelect,songParser }) => {
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
        <button style={{"background":"none","border":"none"}}> <img src={plus} alt=""   style={{cursor:"pointer"}} onClick={
          ()=>{
            let MoodData = axios.toFormData({
              "mood":mood,
            })
            axios(
              {
                method:"post",
                url:"http://127.0.0.1:5000/get_recommendations",
                data:MoodData,
                headers:{
                  "Content-Type":"multipart/form-data"
                }
              }
            ).then(res=>{
              const data = res.data.tracks
              onMoodSelect(data);
              songParser(data);
              const trackUris = data.map(track => track.uri);
              console.log(trackUris);
              trackUris.forEach(element => {
                const trackId = element.split(":")[2];
                onTrackSelect(trackId);
              });

            }).catch(err=>{
              console.log(err);
            })
          }

        }  /></button>
        </div>
      </div>
      </>
    );
  }
  return null;
};

export default EmojiCard;
