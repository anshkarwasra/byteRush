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
  const  [songData, setsongData] = useState(null)
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
    console.log(typeof(trackId))
  };


  const handleSongData = (songData)=>{
    setsongData(songData);
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

  
  const [visibleSidebar, setVisibleSidebar] = useState(null);
  const handlePlaylistClick = (playlistId) => {
    setVisibleSidebar(visibleSidebar === playlistId ? null : playlistId);
  };

  const [playListCovers, setPlayListCovers] = useState([]);
  const [playListId, setPlayListId] = useState(playListCovers.length + 1);
  const parseSongResponse = (songData) => {
    setPlayListId((prevId) => prevId + 1); // Increment playlist ID

    const songArr = []
    songData.forEach(element => {
      songArr.push(
        {
          name:element.name,
          id:element.id,
        }
      )
    });


    const newPlayList = {
      id: playListId,
      image: songData[0].album.images[0].url,
      mood: songData[0].album.name,
      songs: songArr,
    };

    // Update the playlist state by creating a new array
    setPlayListCovers((prevCovers) => [...prevCovers, newPlayList]);

    console.log("Updated Playlists:", playListCovers);
  };
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
            mood={playlist.mood}

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
          onPlay={handleTrackId}
        />
      ))}
     
    </div>
    <div className="userInputs">
      <div className="heading" style={{"textAlign":"center",fontFamily:"roboto",color:"white"}}>
        <h1>Music For Every MOOD!</h1>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' ,backgroundColor:'#222222'}}>
        {emojiMoods.map((item, index) => (
          <EmojiCard key={index} emoji={item.emoji} mood={item.mood} condition={true} onTrackSelect={handleTrackId} onMoodSelect ={handleSongData} songParser={parseSongResponse} />
        ))}
      </div>
      <div className="add">
        <p>add more moods! according to your choice</p>
      </div>
      
    </div>
    <PlayerComponent isPlaying={isPlaying} trackId={trackId}  />
   </>
  )
}

export default App




