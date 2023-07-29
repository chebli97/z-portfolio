import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import z from "../images/z.png";

const Main = () => {
  const [showIntro, setShowIntro] = useState(false);
  const [transformValues, setTransformValues] = useState({ x: 0, y: 0 });

  // Function to handle the cursor movement
  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    setTransformValues({ x: clientX / 10, y: clientY / 10 });
  };

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    // Clean up the event listener on unmount
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <MainStyle>
      <ImageContainer>
        <img src={z} alt="" />
        <ImageShadow />
      </ImageContainer>
      <IntroContainer
        style={{
          willChange: 'transform',
          transform: `translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(${transformValues.x / 10}deg) rotateY(${transformValues.y / 10}deg) rotateZ(0deg) skew(0deg, 0deg)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div>
          <Subtitle>Welcome to my world!</Subtitle>
          <MainTitle>ZEINEB Romdhani</MainTitle>
          <Subtitle>or you can call me ZEINEB</Subtitle>
          <Subtitle>An agricultural engineer with a deep-rooted love for nature</Subtitle>
        </div>
      </IntroContainer>
    </MainStyle>
  );
};

const MainStyle = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 20px; */

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  position: relative;
  margin-right: 20px;
  img {
    border-radius: 50%;
    @media (max-width: 768px) {
    width:400px;
  }
  }
`;

const ImageShadow = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  top: 0;
  left: 0;
  z-index: -1;
  background: rgba(0, 0, 0, 0.1);
  opacity: 0;
  transition: opacity 0.3s ease;
`;

const introAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const IntroContainer = styled.div`
  animation: ${introAnimation} 1s ease-out forwards;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 30px;
  }
`;

const Subtitle = styled.div`
  /* Add your styles here */
  font-family: 'Cutive Mono', sans-serif;
  color: #247BA0;
  font-size: 1.4em;
  line-height: 1.4;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.1em;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 1em;
    padding: 8px;
  }
`;

const MainTitle = styled.h1`
  /* Add your styles here */
  margin-bottom: 30px;
  font-family: 'Fredericka the Great', sans-serif;
  color: #247BA0;
  font-size: 2.8em;
  line-height: 0.7;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  @media (max-width: 768px) {
    text-align: center;
    font-size: 1em;
    padding: 8px;
  }
`;

export default Main;
