import React, { useState, useEffect } from "react";
import styled from "styled-components";

export const MemeCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 400px;
  height: 400px;
  margin: 2rem auto 6px;
  // min-height: 300px;
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

  useEffect(() => {
    function getColor() {
      setInterval(() => {
        const result = localStorage.getItem("color");
        setColor(result);
      }, 100);
    }
    getColor();
  });
  return (
    <TopContainer>
      <MemeCont style={{ background: `url(${img}) no-repeat center/cover` }}>
        <p style={{ color: `${color}` }} className="top-text">
          {topText}
        </p>
        <p className="bottom-text">{bottomText}</p>
      </MemeCont>
    </TopContainer>
  );
};

export default Meme;
