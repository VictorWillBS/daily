import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContainerPage,
  Decoration,
  DisplayContainer,
  Console,
  QuestionContainer,
  InputSide,
  CalendarSide,
} from "./TodayAnswerStyle";
import { userContext } from "../../context/userContext";
import EmotionCard from "../EmotionCards/EmotionCard";
import QuestionCards from "../QuestionCards/QuestionsCards";
import Menu from "../Menu/Menu";
import NavBarr from "../NavBarr/NavBar";
import CreateQuestion from "../QuestionCards/createQuestion";
import CalendarContent from "./calendar";
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
                              key={question.id}
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
                            key={question.id}
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
            <CalendarSide onClick={() => console.log(changeQuestion)}>
              <CalendarContent />
            </CalendarSide>
          </div>
        </Console>
      </DisplayContainer>
    </ContainerPage>
  );
}
