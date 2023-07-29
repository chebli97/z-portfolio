import React from 'react';
import styled from 'styled-components';
import flowers from "../images/flowers.png"
const Footer = () => {
  return (
    <FooterContainer>
        <div>
          <h1>'' Your next chapter is <br /> going to be amazing .</h1>

        </div>
      <FooterContent>
        <FooterText>© ∞. Maded with mush 💕</FooterText>
        <img src={flowers} alt="" />
      </FooterContent>
    </FooterContainer>
  );
};

const FooterContainer = styled.footer`
  display: flex;
 justify-content: space-around;
  align-items: flex-start;
  @media (max-width: 768px) {
    display: flex;
 justify-content: space-around;
 flex-direction: column;
  align-items: center;
  }
h1{
  color: black;
  font-size:55px;
  padding: 2rem;
  @media (max-width: 768px) {
    font-size:25px;
  padding: 2rem;
  }
}
  padding:  0;
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 768px) {
    display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: center;
  }
`;

const FooterText = styled.p`
  font-size: 15px;
  font-weight: bold;
`;

export default Footer;
