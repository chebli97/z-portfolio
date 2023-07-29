import React from 'react';
import { styled } from 'styled-components';

const Navbar = () => {
  const currentDate = new Date();
  const isBirthday = currentDate.getMonth() === 6 && currentDate.getDate() === 29; // Month is zero-indexed, so July is 6.

  return (
    <NavbarStyle>
      <div className="logo">
        Zeineb Romdhani
      </div>
      <div>
      {isBirthday ? "It's my birthday!" : `Today is ${currentDate.toLocaleDateString()}`}
      </div>
    </NavbarStyle>
  );
};

const NavbarStyle = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  font-size: 18px;
  font-family: 'Dancing Script', cursive;
`;

export default Navbar;
