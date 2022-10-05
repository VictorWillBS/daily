import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { userContext } from "../../context/userContext";
import CardAnswered from "../QuestionCards/cardAnswered";
import NavBarr from "../NavBarr/NavBar";
import CalendarContent from "../Today/calendar";
import {
  ContainerPage,
  Decoration,
  DisplayContainer,
  Console,
  RightContent,
  InputSide,
  LeftContent,
} from "./DayPageStyle";
import EmotionAnswered from "../EmotionCards/EmotionAnswerd";

export default function DayPage() {
  const { userData } = useContext(userContext);
  const navigate = useNavigate();
  const [answered, setAnswered] = useState([]);
  const { date } = useParams();
  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  };
  useEffect(() => {
    const promise = axios.get(
      `${process.env.REACT_APP_URL_API}/questions/${date}`,
      config
    );
    promise
      .then((res) => {
        setAnswered([...res.data].reverse());
      })
      .catch((err) => {
        alert("deu ruim");
        navigate("/");
      });
  }, [date]);
  return (
    <ContainerPage>
      <NavBarr />
      <DisplayContainer>
        <Console>
          <Decoration>
            <div />
          </Decoration>
          <div className="subConsole">
            <LeftContent>
              <EmotionAnswered date={date} config={config} />
              <CalendarContent />
            </LeftContent>
            <RightContent>
              {answered.length
                ? answered.map((answer) => {
                    return (
                      <CardAnswered
                        answer={answer.answer}
                        question={answer.question}
                      ></CardAnswered>
                    );
                  })
                : ""}
            </RightContent>
          </div>
        </Console>
      </DisplayContainer>
    </ContainerPage>
  );
}
