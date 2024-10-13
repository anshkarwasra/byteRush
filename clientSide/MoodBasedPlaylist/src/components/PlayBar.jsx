import React, { useEffect, useState } from 'react';

const PlayerComponent = ({ isPlaying,trackId }) => {

    const [iframeSrc, setIframeSrc] = useState('https://open.spotify.com/embed/track/7ouMYWpwJ422jRcDASZB7P');

    useEffect(() => {
        if (isPlaying) {
            setIframeSrc(`https://open.spotify.com/embed/track/${trackId}`); // Replace with your track URI

        } else {
            setIframeSrc(''); // Clear iframe src to simulate stop
        }
    }, [isPlaying]);

    return (
        <div>
            {iframeSrc && (
                <iframe
                    style={{"width":"100%",position:'fixed',bottom:0,left:0}}
                    src={iframeSrc}
                    height="80"
                    frameBorder="0"
                    allow="encrypted-media"
                    title="Spotify Player"
                ></iframe>
            )}
        </div>
    );
};

export default PlayerComponent;
