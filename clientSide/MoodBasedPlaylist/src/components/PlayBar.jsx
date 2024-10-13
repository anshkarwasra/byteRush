// Playbar.js
import React from 'react';
import { useState } from 'react';
import './Playbar.css'; // Optional CSS for styling
import play from "./assets/play.svg"
import prev from "./assets/prev.svg"
import next from "./assets/next.svg"
import volume from "./assets/volume.svg"


const Playbar = () => {
    const [songInfo, setsongInfo] = useState("")

  return (
    <div className="playbar">
      {/* Seekbar */}
      <div className="seekbar">
        <div className="circle"></div>
      </div>

      {/* Abovebar Section */}
      <div className="abovebar">
        {songInfo}
        <div className="songinfo">
          {/* Add song title and artist info here */}
        </div>

        {/* Song Control Buttons */}
        <div className="songbuttons">
          <img width="35" id="previous" src={prev} alt="Previous" />
          <img width="35" id="play" src={play} alt="Play/Pause" />
          <img width="35" id="next" src={next} alt="Next" />
        </div>

        {/* Time and Volume Section */}
        <div className="timevol">
          <div className="songtime">
            {/* Add current time / total duration */}
          </div>
          <div className="volume">
            <img width="25" src={volume} alt="Volume" />
            <div className="range">
              <input type="range" name="volume" min="0" max="100" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playbar;
