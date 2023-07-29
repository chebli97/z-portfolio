import React , {useEffect} from 'react';
import { motion, useAnimation } from 'framer-motion';
import styled from 'styled-components';

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust the height to your preference */
`;

const FlowerContainer = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FlowerCenter = styled(motion.div)`
  width: 50px;
  z-index: 2;
  height: 50px;
  border-radius: 50%;
  background: #FFBB00;
  position: absolute;
  top: 25px;
  left: 25px;
`;

const FlowerLeaves = styled.div`
  display: flex; /* Add flexbox to align leaves */
  justify-content: center;
  align-items: center;
`;

const FlowerLeaf = styled(motion.div)`
  width: 30%;
  transform-origin: center bottom;
  position: absolute;
`;

const FlowerLeafInner = styled.div`
  transform-origin: center bottom;
  svg path {
    fill: #fff;
  }
`;

const Loader = () => {
  const numberOfLeaves = 7;
  const rotation = 360 / numberOfLeaves;

  const centerAnimation = useAnimation();
  const leavesAnimation = useAnimation();

  useEffect(() => {
    const animateFlower = async () => {
      await centerAnimation.start({ scale: 1, transition: { type: 'spring', stiffness: 400, damping: 25 } });
      await leavesAnimation.start({ scale: 1, transition: { type: 'spring', stiffness: 400, damping: 25 } });
      await leavesAnimation.start({ scale: 1.25, transition: { duration: 1.5 } });
      await centerAnimation.start({ scale: 0, transition: { duration: 2.5, type: 'spring', stiffness: 300, damping: 25 } });
      await leavesAnimation.start({ scale: 0, transition: { duration: 2, type: 'spring', stiffness: 300, damping: 25 } });
    };

     animateFlower();
  }, [centerAnimation, leavesAnimation]);

  return (
    <CenteredContainer>
      <FlowerContainer>
        {/* <FlowerCenter animate={centerAnimation} initial={{ scale: 0 }} /> */}
        <FlowerLeaves>
          {Array.from({ length: numberOfLeaves }).map((_, index) => (
            <FlowerLeaf
              key={index}
              style={{ originX: 'center', originY: 'bottom', rotate: `${rotation * index - 90}deg` }}
              animate={leavesAnimation}
            >
              <FlowerLeafInner>
                <svg
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  x="0px"
                  y="0px"
                  viewBox="0 0 23.7 51.8"
                  style={{ enableBackground: 'new 0 0 23.7 51.8' }}
                  xmlSpace="preserve"
                >
                  <path d="M11.8,0c0,0-26.6,24.1,0,51.8C38.5,24.1,11.8,0,11.8,0z" />
                </svg>
              </FlowerLeafInner>
            </FlowerLeaf>
          ))}
        </FlowerLeaves>
      </FlowerContainer>
    </CenteredContainer>
  );
};

export default Loader;
