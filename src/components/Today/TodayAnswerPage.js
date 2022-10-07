import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  ContainerPage,
  Decoration,
  DisplayContainer,
  Console,
  QuestionContainer,
  InputSide,
  CalendarSide,
  SectionTitle,
} from "./TodayAnswerStyle";
import EmotionCard from "../EmotionCards/EmotionCard";
import QuestionCards from "../QuestionCards/QuestionsCards";
import Menu from "../Menu/Menu";
import NavBarr from "../NavBarr/NavBar";
import CreateQuestion from "../QuestionCards/createQuestion";
import CalendarContent from "./calendar";
import MessageAlert from "../MessageAlert/MessageAlert";

export default function TodayAnswerPage() {
  const [questions, setQuestions] = useState(null);
  const [alert, setAlert] = useState(null);
  const [changeQuestion, setChangeQuestion] = useState(false);
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
  };
  const navigate = useNavigate();
  useEffect(() => {
    const promise = axios.get(
      `${process.env.REACT_APP_URL_API}/questions`,
      config
    );
    promise
      .then((res) => {
        setQuestions([...res.data].reverse());
      })
      .catch((err) => {
        setAlert({
          type: "error",
          status: err.response.status,
          msg: err.response.data,
        });
        setTimeout(() => {
          navigate("/sign-in");
          localStorage.clear();
        }, 3000);
      });
  }, [changeQuestion]);
  return (
    <ContainerPage>
      <MessageAlert alert={alert} />
      <NavBarr name="Perguntas do Dia" />
      <Menu />
      <DisplayContainer>
        <Console>
          <Decoration>
            <div />
          </Decoration>
          <div className="subConsole">
            <InputSide>
              <SectionTitle>
                <h3>Registre sua emoção</h3>
              </SectionTitle>
              <EmotionCard config={config} />

              <QuestionContainer>
                <SectionTitle>
                  <h3>Responder as perguntas diárias</h3>
                </SectionTitle>
                <div className="question-Box">
                  <CreateQuestion
                    changeQuestion={changeQuestion}
                    setChangeQuestion={setChangeQuestion}
                    config={config}
                    setAlert={setAlert}
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
                              config={config}
                              setAlert={setAlert}
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
                            config={config}
                            setAlert={setAlert}
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
              <SectionTitle>
                <h3>Veja suas repostas de qualquer dia</h3>
              </SectionTitle>
              <CalendarContent />
            </CalendarSide>
          </div>
        </Console>
      </DisplayContainer>
    </ContainerPage>
  );
}
