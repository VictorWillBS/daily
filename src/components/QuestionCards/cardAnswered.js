import styled from "styled-components";
export default function CardAnswered({ answer, question, children }) {
  if (!answer.length) {
    return;
  }
  return (
    <CardContainer>
      <div>
        <QuestionText>
          <p>{question}</p>
        </QuestionText>
        <DivisionDoted />
      </div>
      <AnswerText>{answer.length ? answer[0].answer : "n to aq"}</AnswerText>
    </CardContainer>
  );
}
const CardContainer = styled.article`
  max-width: 380px;
  width: 100%;
  padding: 10px 0;
  min-height: 73px;
  margin: 20px 0;
  border-radius: 11px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  background-color: ${(props) => (props.color ? "#17FAA8" : "#17a1fa")};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  div {
    width: 100%;
  }
`;

const QuestionText = styled.article`
  width: 100%;
  max-height: fit-content;
  padding: 0 10px;
  text-align: center;
  p {
    font-size: 18px;
    color: #363636;
  }
`;
const AnswerText = styled.article`
  max-height: max-content;
  p {
    font-size: 18px;
    color: #000;
  }
`;
const DivisionDoted = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
`;
