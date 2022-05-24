import React, { useState } from "react";
import "./color.css";
export const Colors = (props) => {
  const [color, setColor] = useState("white");
  const white = () => setColor("white");
  const black = () => setColor("black");
  const yellow = () => setColor("yellow");
  const aqua = () => setColor("aqua");
  const green = () => setColor("green");
  const blue = () => setColor("blue");
  const brown = () => setColor("brown");
  const blueviolet = () => setColor("blueviolet");

  localStorage.setItem("color", color);
  return (
    <div id="colors">
      <section>
        <button onClick={white}></button>
        <button onClick={black}></button>
        <button onClick={yellow}></button>
        <button onClick={aqua}></button>
        <button onClick={green}></button>
        <button onClick={blue}></button>
        <button onClick={brown}></button>
        <button onClick={blueviolet}></button>
      </section>
    </div>
  );
};

export default Colors;
