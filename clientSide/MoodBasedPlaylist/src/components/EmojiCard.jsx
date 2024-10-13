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
  const moodToSeedGenresExtended = {
    Happy: ["pop", "dance", "happy", "funk", "indie-pop"],
    Sad: ["sad", "acoustic", "folk", "emo", "piano"],
    Angry: ["metal", "hardcore", "punk", "rock", "grunge"],
    Sleepy: ["chill", "ambient", "lo-fi", "jazz", "new-age"],
    Excited: ["party", "dance", "house", "pop", "electronic"],
    Cool: ["indie", "alternative", "hip-hop", "chill-hop", "r&b"],
    Thoughtful: ["instrumental", "jazz", "acoustic", "folk", "classical"],
    Celebratory: ["party", "pop", "dance", "upbeat", "electronic"],
    Neutral: ["ambient", "chill", "soft-rock", "pop", "instrumental"],
    "Mind-Blown": ["experimental", "psychedelic", "progressive", "electronic", "alternative"],
    "In Love": ["romance", "soul", "ballad", "acoustic", "chill"],
    Awkward: ["indie-pop", "quirky", "alternative", "folk", "acoustic"],
    Cold: ["ambient", "chill", "classical", "minimal", "new-age"],
    Blessed: ["gospel", "soul", "uplifting", "happy", "chill"],
    Disgusted: ["punk", "metal", "hardcore", "grunge", "industrial"],
    Frustrated: ["rock", "metal", "emo", "alternative", "hardcore"],
    Cheerful: ["pop", "happy", "dance", "upbeat", "funk"],
    Caring: ["soft-rock", "acoustic", "folk", "jazz", "soul"],
    Pleading: ["emo", "acoustic", "indie", "ballad", "slow"],
    Silly: ["quirky", "fun", "indie-pop", "children", "cartoon"],
    Crazy: ["experimental", "electronic", "punk", "hardcore", "indie"],
    Down: ["sad", "acoustic", "folk", "emo", "blues"],
    Relieved: ["chill", "ambient", "soft-rock", "jazz", "lo-fi"],
    Melting: ["ambient", "chill", "electronic", "new-age", "minimal"],
    Dizzy: ["psychedelic", "experimental", "electronic", "alternative", "pop"],
    Mischievous: ["playful", "indie", "alternative", "rock", "pop"],
  };
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
              "mood":moodToSeedGenresExtended[mood][0],
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
