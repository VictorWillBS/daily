import styled from "styled-components";
import { IconContext } from "react-icons";
import { IoCaretBackCircleOutline } from "react-icons/io5";
export default function QuestionCards({ children }) {
  return (
    <CardContainer>
      <TextContainer>
        <h4>{children} </h4>
      </TextContainer>
      <IconContext.Provider
        value={{
          style: {
            width: "28px",
            height: "28px",
            color: "black",
            fontWeight: "bolder",
          },
        }}
      >
        <IconContainer>
          <IoCaretBackCircleOutline />
        </IconContainer>
      </IconContext.Provider>
    </CardContainer>
  );
}

const CardContainer = styled.article`
  max-width: 380px;
  width: 100%;
  min-height: 73px;
  margin: 20px 0;
  padding: 20px;
  border-radius: 11px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  background-color: #17a1fa;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const TextContainer = styled.article`
  max-width: 80%;
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

const IconContainer = styled.article`
  max-width: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
