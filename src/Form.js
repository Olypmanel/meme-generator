import axios from "axios";
import React, { useState, useEffect } from "react";
import Meme from "./Meme";

import styled from "styled-components";
const Form = styled.form`
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  margin-top: 5rem;
  // background: violet;
  width: 500px;
`;
export const Input = styled.input`
  height: 2.5rem;
  border-radius: 6px;
  margin: 6px auto;
  outline: none;
  resize: none;
  padding-left: 10px;
  &:focus {
    border: blueviolet solid 1px;
  }
`;
const Button = styled.button`
  width: 10rem%;
  color: white;
  text-transform: capitalize;
  font-size: 1.4rem;
  border-radius: 6px;
  background-color: blueviolet;
  padding: 1rem;
  display: block;
  margin: 2rem auto;

  &:hover {
    filter: contrast(0.6);
  }
`;

export const Body = (props) => {
  const [states, setStates] = useState({
    topText: "",
    bottomText: "",
    ApiData: "",
    count: false,
  });
  useEffect(() => {
    async function getMemeData() {
      const response = await axios?.get("https://api.imgflip.com/get_memes");
      const newState = response?.data?.data?.memes;
      setStates((prevState) => ({
        ...prevState,
        ApiData: newState[Math?.floor(Math?.random() * newState?.length - 1)],
      }));
    }
    getMemeData();
  }, [states?.count]);
  const handleChange = (e) => {
    const { name, value } = e?.target;
    setStates((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (e) => e?.preventDefault;
  const handleClick = () =>
    setStates((prevState) => ({
      ...prevState,
      count: !prevState?.count,
      topText: "",
      bottomText: "",
    }));
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          name="topText"
          onChange={handleChange}
          value={states?.topText}
          placeholder="Top Text"
        />
        <Input
          type="text"
          n
          name="bottomText"
          onChange={handleChange}
          value={states?.bottomText}
          placeholder="Bottom Text"
        />
      </Form>
      <Meme
        topText={states?.topText}
        bottomText={states?.bottomText}
        img={states?.ApiData?.url}
      />
      <Button onClick={handleClick}>get new meme image</Button>
    </div>
  );
};

export default Body;
