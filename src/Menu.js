import React, { useState, useEffect } from "react";
// import Colors from "./Color";
import styled from "styled-components";
import Colors from "./Color";
import { deviceSize } from "./responsive";

export const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  top: 0px;
  right: 0;
  width: 10rem;
  height: calc(100vh - 0);
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  background: rgb(116, 83, 146);

  z-index: 2;
  transition: all 300ms ease-in-out;
  button {
    text-align: left;
    background: inherit;
    margin-top: 1rem;
    padding: 1rem;
    text-transform: capitalize;
    font-size: 1.5rem;
    border: none;
    cursor: pointer;
    outline: none;
    color: white;
    &:nth-child(1) {
      margin-top: 8rem;
    }
    @media screen and (max-width: ${deviceSize.mobile}px) {
      font-size: 1rem;
    }
  }
`;
export const Menu = (props) => {
  const [modes, setMode] = useState({ darkMode: false, colorDeterminer: true });
  function moreColors() {
    setMode((prevState) => ({
      ...prevState,
      colorDeterminer: !prevState?.colorDeterminer,
    }));
  }
  useEffect(() => {
    function getMode() {
      setInterval(() => {
        const result = JSON.parse(localStorage.getItem("mode"));
        // console.log(result);
        setMode((prevState) => ({ ...prevState, darkMode: !result }));
        // console.log(modes.darkMode);
      }, 100);
    }
    getMode();
  }, [modes.darkMode]);

  const handleClick = () => {
    setMode((prevState) => ({
      ...prevState,
      darkMode: !prevState?.darkMode,
    }));
    // localStorage.clear("mode");
    localStorage.setItem("mode", JSON.stringify(modes.darkMode));
  };

  return (
    <>
      {modes?.colorDeterminer ? (
        <Nav>
          <button onClick={handleClick}>
            {modes.darkMode ? "light mode" : "dark mode"}
          </button>
          <button onClick={moreColors}>text color</button>
          <button> font size</button>
          <button>back</button>
        </Nav>
      ) : (
        <Colors />
      )}
    </>
  );
};

export default Menu;
