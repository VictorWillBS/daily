import styled from "styled-components";
import { Link } from "react-router-dom";

export const FormStyled = styled.form`
  max-width: 350px;
  width: 100%;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  && > article {
    height: max-content;
    display: flex;
    margin: 30px 0;
    max-width: 326px;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  && > article input {
    background-color: #0e4984;
    width: 100%;
    height: 42px;
    margin-bottom: 15px;
    border: none;
    padding: 10px;
    text-align: center;
    border-radius: 8px;
    color: white;
  }
  input::placeholder {
    color: white;
  }

  button {
    cursor: pointer;
    max-width: 225px;
    width: 100%;
    height: 42px;
    border: none;
    padding: 10px;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    color: #b46909;
    text-align: center;
    border-radius: 8px;
    background-color: #ffcd8c;
  }
  button:active {
    filter: brightness(1.05);
  }
`;
export const TotalContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #003b76;
`;

export const UserInputSide = styled.section`
  width: 30%;
  height: 100%;
  display: flex;
  min-width: 300px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  H1 {
    color: #ffffff;
    font-weight: 600;
    font-size: 64px;
    font-family: "Kufam", sans-serif;
    text-shadow: 3px 5px 10px #000;
  }
  span {
    color: #ffcd8c;
  }
  @media (min-width: 0) and (max-width: 650px) {
    width: 100%;
  }
`;

export const StyledLink = styled(Link)`
  color: white;
  margin-top: 30px;
  text-align: center;
  padding: 0 10px;
  text-decoration: underline;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  word-break: break-word;
  font-weight: 700;
`;

export const BGFigure = styled.figure`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 0) and (max-width: 650px) {
    display: none;
  }
`;
export const BGImage = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  opacity: 78%;
  object-fit: cover;
  align-items: center;
  justify-content: center;
  object-position: 80% 60%;
`;
