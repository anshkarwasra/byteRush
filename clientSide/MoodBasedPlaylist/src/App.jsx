import { useState } from 'react'

import Navbar from './components/Navbar'
import './App.css'
import PlayListBanner from './components/playListBanner'
// import InpPage from './components/InputPage'
import EmojiCard from './components/EmojiCard';
import PlayerComponent from './components/PlayBar';


function App() {
  const  [trackId, settrackId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [background, setbackground] = useState("rgba(0,0,0,0)");
  
  const checkBackground =  ()=>{
    if(background!=="#444444"){
      setbackground("#444444")
    }
  }
  const handlePlay = () => {
    setIsPlaying(true);
};

const handlePause = () => {
    setIsPlaying(false);
};

  const handleTrackId = (trackId)=>{
    settrackId(trackId)
  };
  const emojiMoods = [
    { emoji: "😊", mood: "Happy" },
    { emoji: "😢", mood: "Sad" },
    { emoji: "😡", mood: "Angry" },
    { emoji: "😴", mood: "Sleepy" },
    { emoji: "🎉", mood: "Excited" },
    { emoji: "😎", mood: "Cool" },
    { emoji: "🤔", mood: "Thoughtful" },
    { emoji: "🥳", mood: "Celebratory" },
    { emoji: "😐", mood: "Neutral" },
    { emoji: "🤯", mood: "Mind-Blown" },
    { emoji: "😍", mood: "In Love" },
    { emoji: "😬", mood: "Awkward" },
    { emoji: "🥶", mood: "Cold" },
    { emoji: "😇", mood: "Blessed" },
    { emoji: "🤢", mood: "Disgusted" },
    { emoji: "😤", mood: "Frustrated" },
    { emoji: "😃", mood: "Cheerful" },
    { emoji: "🤗", mood: "Caring" },
    { emoji: "🥺", mood: "Pleading" },
    { emoji: "🙃", mood: "Silly" },
    { emoji: "🤪", mood: "Crazy" },
    { emoji: "😔", mood: "Down" },
    { emoji: "😅", mood: "Relieved" },
    { emoji: "🫠", mood: "Melting" },
    { emoji: "🥴", mood: "Dizzy" },
    { emoji: "😈", mood: "Mischievous" }
  ];
  
  return (
   <>
    <div className="HomePage">
    <Navbar onPlay={handlePlay} onPause={handlePause} background="#222222" />

    <h1>THE INQUISITOR</h1>
    </div>
    <div className="demo">

        <div className="heading">
          Our Playlists
        </div>
      <div className="grid">
      {checkBackground()}
      <PlayListBanner image="https://rascalsthemes.com/demo/spectra/demo1/wp-content/uploads/2014/08/portfolio-image01.jpg" />
      <PlayListBanner image="https://rascalsthemes.com/demo/spectra/demo1/wp-content/uploads/2014/08/portfolio-image01.jpg" />
      <PlayListBanner image="https://rascalsthemes.com/demo/spectra/demo1/wp-content/uploads/2014/08/portfolio-image01.jpg" />
      <PlayListBanner image="https://rascalsthemes.com/demo/spectra/demo1/wp-content/uploads/2014/08/portfolio-image01.jpg" />
      <PlayListBanner image="https://rascalsthemes.com/demo/spectra/demo1/wp-content/uploads/2014/08/portfolio-image01.jpg" />
      <PlayListBanner image="https://rascalsthemes.com/demo/spectra/demo1/wp-content/uploads/2014/08/portfolio-image01.jpg" />
      <PlayListBanner image="https://rascalsthemes.com/demo/spectra/demo1/wp-content/uploads/2014/08/portfolio-image01.jpg" />
      <PlayListBanner image="https://rascalsthemes.com/demo/spectra/demo1/wp-content/uploads/2014/08/portfolio-image01.jpg" />
      <PlayListBanner image="https://rascalsthemes.com/demo/spectra/demo1/wp-content/uploads/2014/08/portfolio-image01.jpg" />
      <PlayListBanner image="https://rascalsthemes.com/demo/spectra/demo1/wp-content/uploads/2014/08/portfolio-image01.jpg" />
      </div>
     
    </div>
    <div className="userInputs">
      <div className="heading" style={{"textAlign":"center",fontFamily:"roboto",color:"white"}}>
        <h1>Music For Every MOOD!</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' ,backgroundColor:'#222222'}}>
        {emojiMoods.map((item, index) => (
          <EmojiCard key={index} emoji={item.emoji} mood={item.mood} condition={true} onTrackSelect={handleTrackId} />
        ))}
      </div>
      <div className="add">
        <p>add more moods! according to your choice</p>
      </div>
      
    </div>
    <PlayerComponent isPlaying={isPlaying} trackId={trackId} />
   </>
  )
}

export default App




