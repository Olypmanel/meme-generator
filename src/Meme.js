import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { deviceSize } from "./responsive";

export const MemeCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 400px;
  margin: 2rem auto 6px;
  // min-height: 300px;
  @media screen and (max-width: ${deviceSize.mobile}px) {
    width: 300px;
    height: 400px;
  }
  p {
    font-size: 2rem;
    text-align: center;
  }
`;

export const TopContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Meme = ({ img, topText, bottomText }) => {
  const [color, setColor] = useState("white");
  const [modes, setMode] = useState({ darkMode: false });

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

  useEffect(() => {
    function getColor() {
      setInterval(() => {
        const result = localStorage.getItem("color");
        setColor(result);
      }, 100);
    }
    getColor();
  }, []);
  document.querySelector("body").style.background = `${
    modes.darkMode ? "#111" : "#fff"
  }`;
  return (
    <TopContainer>
      <MemeCont style={{ background: `url(${img}) no-repeat center/cover` }}>
        <p style={{ color: `${color}` }} className="top-text">
          {topText}
        </p>
        <p style={{ color: `${color}` }} className="bottom-text">
          {bottomText}
        </p>
      </MemeCont>
    </TopContainer>
  );
};

export default Meme;
