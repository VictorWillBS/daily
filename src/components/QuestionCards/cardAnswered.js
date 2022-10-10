import styled from "styled-components";
export default function CardAnswered({ answer, question, children }) {
  return (
    <CardContainer answered={Boolean(answer.length)} data-cy="cardAnswered">
      <div>
        <QuestionText data-cy="questionTitle">
          <p>{question}</p>
        </QuestionText>
        <DivisionDoted />
      </div>
      <AnswerText data-cy="answer">
        <p>{answer.length ? answer[0].answer : "Não respondida"}</p>
      </AnswerText>
    </CardContainer>
  );
}
const CardContainer = styled.article`
  max-width: 380px;
  width: 100%;
  padding: 10px 0;
  min-height: 73px;
  margin: 20px 0;
  opacity: ${(props) => (props.answered ? "100% " : "20%")};
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
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color: #363636;
  }
`;
const AnswerText = styled.article`
  max-height: max-content;
  p {
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color: #000;
  }
`;
const DivisionDoted = styled.div`
  width: 100%;
  height: 1px;
  background-color: rgba(0, 0, 0, 0.2);
`;
