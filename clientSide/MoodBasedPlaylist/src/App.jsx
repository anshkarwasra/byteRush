import { useState } from 'react'

import Navbar from './components/Navbar'
import './App.css'
import PlayListBanner from './components/playListBanner'
// import InpPage from './components/InputPage'
import EmojiCard from './components/EmojiCard';
import PlayerComponent from './components/PlayBar';
import SideBar from './components/SideBar';

function App() {
  const  [trackId, settrackId] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [background, setbackground] = useState("rgba(0,0,0,0)");
  const [invisibility, setinvisibility] = useState(true)
  
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

  const handleInvisibility = ()=>{
    console.log(invisibility)
    setinvisibility(!invisibility)
  }

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
  // const playListCovers = [
  //   "https://rascalsthemes.com/demo/spectra/demo1/wp-content/uploads/2014/08/portfolio-image02.jpg",
  //   "https://rascalsthemes.com/demo/spectra/demo1/wp-content/uploads/2014/08/portfolio-image01.jpg",
  //   "https://rascalsthemes.com/demo/spectra/demo1/wp-content/uploads/2014/08/portfolio-image03.jpg",
  //   "https://rascalsthemes.com/demo/spectra/demo1/wp-content/uploads/2014/08/portfolio-image04.jpg",
  //   "https://rascalsthemes.com/demo/spectra/demo1/wp-content/uploads/2014/08/portfolio-image05.jpg",
  //   "https://rascalsthemes.com/demo/spectra/demo1/wp-content/uploads/2014/08/portfolio-image06.jpg",
  //   "https://rascalsthemes.com/demo/spectra/demo1/wp-content/uploads/2014/08/portfolio-image07.jpg",
  //   "https://rascalsthemes.com/demo/spectra/demo1/wp-content/uploads/2014/08/portfolio-image08.jpg",
  //   "https://rascalsthemes.com/demo/spectra/demo1/wp-content/uploads/2014/08/portfolio-image09.jpg",
  //   "https://rascalsthemes.com/demo/spectra/demo1/wp-content/uploads/2014/08/portfolio-image10.jpg"

  // ]
  
  const [visibleSidebar, setVisibleSidebar] = useState(null);
  const handlePlaylistClick = (playlistId) => {
    setVisibleSidebar(visibleSidebar === playlistId ? null : playlistId);
  };

  const playListCovers = [
    { id: 1, image: "https://rascalsthemes.com/demo/spectra/demo1/wp-content/uploads/2014/08/portfolio-image02.jpg", mood: 'Happy', songs: [
      "Whispers in the Rain",
      "Chasing Midnight Dreams",
      "Echoes of Tomorrow",
      "Lost Between Stars",
      "Flicker of Hope",
      "Dancing Through Shadows"
    ] },
    { id: 2, image:  "https://rascalsthemes.com/demo/spectra/demo1/wp-content/uploads/2014/08/portfolio-image01.jpg", mood: 'Sad', songs: [
      "Whispers in the Rain",
      "Chasing Midnight Dreams",
      "Echoes of Tomorrow",
      "Lost Between Stars",
      "Flicker of Hope",
      "Dancing Through Shadows"
    ]  },
    { id: 3, image: "https://rascalsthemes.com/demo/spectra/demo1/wp-content/uploads/2014/08/portfolio-image03.jpg", mood: 'Energetic', songs: [
      "Whispers in the Rain",
      "Chasing Midnight Dreams",
      "Echoes of Tomorrow",
      "Lost Between Stars",
      "Flicker of Hope",
      "Dancing Through Shadows"
    ]  },
    // ... more playlists
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
        {playListCovers.map((playlist) => (
          <PlayListBanner 
            key={playlist.id}
            image={playlist.image} 
            onClick={() => handlePlaylistClick(playlist.id)}
          />
        ))}
      </div>
      {playListCovers.map((playlist) => (
        <SideBar 
          key={playlist.id}
          invisibility={visibleSidebar !== playlist.id}
          mood={playlist.mood}
          songs={playlist.songs}
          onClose={() => setVisibleSidebar(null)}
        />
      ))}
     
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




