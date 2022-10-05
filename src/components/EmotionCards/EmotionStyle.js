import styled from "styled-components";

export const Container = styled.form`
  max-width: 380px;
  width: 100%;
  height: 73px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const EmotionName = styled.article`
  max-width: 270px;
  width: 100%;
  min-height: 73px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  background-color: ${(props) => props.color || "#FFCD8C"};
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    font-family: "Roboto", sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 20px;
  }
`;

export const EmotionFace = styled.article`
  width: 60px;
  height: 60px;
  margin-right: 10px;
  padding-top: 4px;
  border-radius: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.color || "#FFCD8C"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InputStyled = styled.select`
  width: 100%;
  height: 30px;
  background-color: ${(props) => props.color || "#FFCD8C"};

  border: none;
  text-align: center;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  &&::placeholder {
    color: #000;
    font-family: "Roboto", sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 20px;
  }
  &&:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;
