import React, { useState, useEffect } from 'react';

const Audio= ({ playlist, isMuted }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const audioElement = document.getElementById('audio-player');

    const handleMusicChange = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    };

    audioElement.addEventListener('ended', handleMusicChange);
    return () => {
      audioElement.removeEventListener('ended', handleMusicChange);
    };
  }, [playlist]);

  return (
    <audio id="audio-player" loop autoPlay={!isMuted}>
      <source src={playlist[currentIndex]} type="audio/mpeg" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default Audio;
