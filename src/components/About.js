import React from 'react';
import styled from 'styled-components';
import flower from "../images/flower.png"


const About= () => {
  return (
    <IntroWrapper>
      <FigureLeft>
        <div className='images'>
            <img
              src={flower}
              alt=""
              width="251"
            />
                    <h1>Hello, I'm Zeineb Romdhani,</h1>

              <img
              src={flower}
              alt=""
              width="251"
            />
        </div>


        <div className='text'>

      <p>
       an exceptional agricultural engineer with a profound passion for nature. The beauty of the natural world has always resonated with me, and I find solace in the harmonies of music, and I'm committed to making a positive impact on the world.

      </p>
      <p>
      Family means everything to me, and I cherish every moment spent with my loved ones. Their support and love fuel my determination to achieve greatness and leave a lasting mark on the world. With dreams as vast as the horizon, I embark on this extraordinary journey, guided by dedication and love for the environment I hold dear.

      </p>
        </div>
      </FigureLeft>
      <div className='flower'>
        <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flower"><path d="M12 7.5a4.5 4.5 0 1 1 4.5 4.5M12 7.5A4.5 4.5 0 1 0 7.5 12M12 7.5V9m-4.5 3a4.5 4.5 0 1 0 4.5 4.5M7.5 12H9m7.5 0a4.5 4.5 0 1 1-4.5 4.5m4.5-4.5H15m-3 4.5V15"/><circle cx="12" cy="12" r="3"/><path d="m8 16 1.5-1.5"/><path d="M14.5 9.5 16 8"/><path d="m8 8 1.5 1.5"/><path d="M14.5 14.5 16 16"/></svg>
      <div className="stick"></div>

      </div>
    </IntroWrapper>
  );
};

const IntroWrapper = styled.div`

  min-height: 90vh;

  .flower{
    flex-direction: column;
    display: flex;
align-items: center;
justify-content: center;
  }
  .stick{
    height: 70px;
    width: 3px;
    background-color: #000;
  }
  `;

const FigureLeft = styled.div`
padding: 1rem 6rem;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
margin-bottom: 30px;
  position: relative;
  margin-right: 20px;
  .images {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  } 
  h1{
    font-size: 33px;
    @media (max-width: 768px) {
      font-size: 20px;
      text-align:center;
  }
  }
  img {
    width: 201px;
    height: auto;
    @media (max-width: 768px) {
      width: 101px;

  }
  }
  .text{
    font-family: 'Cutive Mono', sans-serif;
  font-size: 1.4em;
  line-height: 1.4;
  font-weight: 600;
  text-align: center;
  letter-spacing: 0.1em;
    span{
      font-size: 45px;
      font-weight: bold;
    }
    @media (max-width: 768px) {
      letter-spacing: 0;
      font-size: 1em;
      font-weight: 400;
      padding: 0rem 1.5rem;

  }
  }
  @media (max-width: 768px) {
    padding: 14px;

  }
`;

const TextureOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const AnimationOverlayLeft = styled.div`
  transform: translate3d(203%, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg);
  transform-style: preserve-3d;
`;

export default About;
