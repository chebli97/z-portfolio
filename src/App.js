import './App.css';
import Loader from './components/Loader';
import { createGlobalStyle } from 'styled-components';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import About from './components/About';
import Skills from './components/Skills';
import Footer from './components/Footer';
import Education from './components/Education';
import Audio from './components/Audio';

import music1 from './images/Coldplay.mp3';
import music2 from './images/Pepas.mp3';
import music3 from './images/Taylor Swift.mp3';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

const App = () => {
  const [loaderComplete, setLoaderComplete] = useState(false);
  const [isMusicMuted, setIsMusicMuted] = useState(false);

  const musicPlaylist = [music1, music2, music3];

  const handleLoaderComplete = () => {
    setLoaderComplete(true);
  };

  useEffect(() => {
    const animationDuration = 3000; // 3 seconds
    setTimeout(handleLoaderComplete, animationDuration);
  }, []);

  const handleMusicToggle = () => {
    setIsMusicMuted((prevIsMuted) => !prevIsMuted);
  };

  return (
    <>
      <GlobalStyle />
      {!loaderComplete ? <Loader /> : null}

      {loaderComplete ? (
        <>
          <Navbar isMusicMuted={isMusicMuted} onMusicToggle={handleMusicToggle} />
          <Main />
          <About />
          <Education />
          <Skills />
          <Footer />

          <Audio playlist={musicPlaylist} isMuted={isMusicMuted} />
        </>
      ) : null}
    </>
  );
};

export default App;
