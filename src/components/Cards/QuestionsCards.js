import styled from "styled-components";
export default function QuestionCards() {
  return (
    <CardContainer>
      <h4>pergunta</h4>
    </CardContainer>
  );
}

const CardContainer = styled.article`
  max-width: 380px;
  width: 100%;
  min-height: 73px;
  margin: 20px 0;
  border-radius: 8px;
  box-shadow: 0 04px 10px #000;
  background-color: #17a1fa;
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
