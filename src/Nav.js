import Menu from "./Menu";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import logo from "./logo512.png";
import menu from "./menu.png";
export const TopCont = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  background: grey;
  align-items: center;
  color: white;
  img {
    width: 50px;
    object-fit: contain;
    margin-right: 6px;
    &:last-of-type {
      width: 40px;
      z-index: 6;
      &:hover {
        transform: scale(1.09);
      }
    }
  }
`;
const Title = styled.h1`
  margin-right: auto;
  font-size: 25px;
`;
// const body = document.querySelector("body");
export const Nav = (props) => {
  const [showMenu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu((prevState) => !prevState);
  };

  // alert(body);
  return (
    <TopCont>
      {showMenu || <Menu />}
      <img src={logo} alt="logo" />
      <Title>memeGenerator</Title>
      <img src={menu} alt="logo" onClick={toggleMenu} />
    </TopCont>
  );
};

export default Nav;
