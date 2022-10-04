import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { userContext } from "../../context/userContext";
import EmotionCard from "../Cards/EmotionCard";
import QuestionCards from "../Cards/QuestionsCards";
import Menu from "../Menu/Menu";
import NavBarr from "../NavBarr/NavBar";
import CreateQuestion from "../Cards/createQuestion";
export default function AnswerPage() {
  const [questions, setQuestions] = useState(null);
  const [changeQuestion, setChangeQuestion] = useState(false);

  const { userData } = useContext(userContext);
  const navigate = useNavigate();
  useEffect(() => {
    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const promise = axios.get(
      `${process.env.REACT_APP_URL_API}/questions`,
      config
    );
    promise
      .then((res) => {
        setQuestions([...res.data].reverse());
      })
      .catch((err) => {
        alert("deu ruim");
        navigate("/");
      });
  }, [changeQuestion]);
  return (
    <ContainerPage>
      <NavBarr />
      <Menu />
      <DisplayContainer>
        <Console>
          <Decoration>
            <div />
          </Decoration>
          <div className="subConsole">
            <InputSide>
              <EmotionCard />
              <QuestionContainer>
                <div className="question-Box">
                  <CreateQuestion
                    changeQuestion={changeQuestion}
                    setChangeQuestion={setChangeQuestion}
                  />

                  {questions
                    ? questions.map((question, index) => {
                        if (question.answer.length) {
                          return (
                            <QuestionCards
                              id={question.id}
                              key={index}
                              isAnswered={true}
                              setChangeQuestion={setChangeQuestion}
                              changeQuestion={changeQuestion}
                            >
                              {question.answer[0].answer}
                            </QuestionCards>
                          );
                        }
                        return (
                          <QuestionCards
                            id={question.id}
                            key={index}
                            answered={false}
                            setChangeQuestion={setChangeQuestion}
                            changeQuestion={changeQuestion}
                          >
                            {question.question}
                          </QuestionCards>
                        );
                      })
                    : ""}
                </div>
              </QuestionContainer>
            </InputSide>
            <InputSide2
              onClick={() => console.log(changeQuestion)}
            ></InputSide2>
          </div>
        </Console>
      </DisplayContainer>
    </ContainerPage>
  );
}
const ContainerPage = styled.section`
  top: 150px;
  width: 100vw;
  height: 100vh;
  padding: 0 60px;
`;
const DisplayContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 130px;
  width: 100%;
  height: 100%;
`;
const Console = styled.section`
  max-width: 1030px;
  width: 100%;
  max-height: 750px;
  height: 100%;
  display: flex;
  padding-top: 1.5%;
  flex-direction: column;
  border-radius: 60px;
  background-color: #003b76;
  padding: 20px;
  && > div {
    display: flex;
    flex-direction: row;
  }
`;

const QuestionContainer = styled.section`
  width: 100%;
  min-height: 530px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
  &&::-webkit-scrollbar {
    width: 0px;
  }
  .question-Box {
    max-height: 500px;
  }
`;

const InputSide = styled.section`
  width: 50%;
  min-width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
`;
const InputSide2 = styled.section`
  width: 50%;
  height: 100%;
  background-color: yellow;
  padding: 20px;
`;

const Decoration = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
  div {
    width: 120px;
    background-color: #ffffff;
    height: 12px;
    border-radius: 50px;
  }
  margin-bottom: 5px;
`;
