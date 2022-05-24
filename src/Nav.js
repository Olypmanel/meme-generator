import Menu from "./Menu";
import React, { useState } from "react";
import styled from "styled-components";
import logo from "./logo512.png";
import menu from "./menu.png";
import { deviceSize } from "./responsive";
export const TopCont = styled.div`
  width: 100vw;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background: grey;
  align-items: center;
  color: white;
  max-height: 70px;
  img {
    z-index: 6;
    width: 50px;
    object-fit: contain;
    margin-right: 6px;

    &:last-of-type {
      width: 40px;
      &:hover {
        transform: scale(1.09);
      }
    }
    @media screen and (max-width: ${deviceSize.mobile}px) {
      width: 40px;
    }
  }
`;
const Title = styled.h1`
  margin-right: auto;
  font-size: 1.5625rem;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    font-size: 1rem;
  }
`;
// const body = document.querySelector("body");
export const Nav = (props) => {
  const [showMenu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  return (
    <TopCont>
      {showMenu && <Menu />}
      <img src={logo} alt="logo" />
      <Title>memeGenerator</Title>
      <img src={menu} alt="logo" onClick={toggleMenu} />
    </TopCont>
  );
};

export default Nav;
