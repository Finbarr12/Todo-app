import React, { useState } from "react";
import styled from "styled-components";
import todo from "./Assets/Todo.avif";
import { useNavigate } from "react-router-dom";
const LandingScreen = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");

  const AddUser = () => {
    window.localStorage.setItem("TodoItem", JSON.stringify(name));
    navigate("/todo");
  };
  return (
    <Container>
      <Wrapper>
        <h2>Welcome To Todo App</h2>
        <p>Fill in your Name to begin your task for the day👍</p>
        <InputField
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Enter your Name"
        />
        {name !== "" ? (
          <Button onClick={AddUser} bg="orangered" tr="scale(0.99)">
            We move
          </Button>
        ) : (
          <Button disabled bg="silver" tr="">
            We move
          </Button>
        )}
      </Wrapper>
    </Container>
  );
};

export default LandingScreen;

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  backdrop-filter: blur(5px);

  @media screen and (max-width: 500px) {
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  flex-direction: column;
  background-image: url(${todo});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  h2 {
    margin: 0%;
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 10px;

    @media screen and (max-width: 500px) {
      font-size: 25px;
    }
  }
  p {
    margin: 0;
    font-size: 19px;
    margin-bottom: 25px;

    @media screen and (max-width: 500px) {
      font-size: 16px;
      text-align: center;
    }
  }
`;
const InputField = styled.input`
  width: 400px;
  height: 50px;
  border-radius: 30px;
  border: 0;
  outline: none;
  padding-left: 20px;
  @media screen and (max-width: 500px) {
    width: 89%;
  }

  ::placeholder {
    font-size: 17px;
  }
`;
const Button = styled.button<{ bg: string; tr: string }>`
  width: 400px;
  height: 50px;
  border-radius: 5px;
  border: 0;
  background-color: ${({ bg }) => bg};
  margin-top: 20px;
  font-size: 19px;
  cursor: pointer;
  :hover {
    transform: ${({ tr }) => tr};
    transition: all 350ms;
  }

  @media screen and (max-width: 500px) {
    width: 89%;
  }
`;
