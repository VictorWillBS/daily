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
import Menu from "../Menu/Menu";
import MessageAlert from "../MessageAlert/MessageAlert";

export default function DayPage() {
  const [alert, setAlert] = useState(null);

  const navigate = useNavigate();
  const [answered, setAnswered] = useState([]);
  const { date } = useParams();
  const config = {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
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
        setAlert({
          type: "Error",
          msg: err.response.data,
          status: err.response.status,
        });
        setTimeout(() => {
          navigate("/sign-in");
        }, 5000);
      });
  }, [date]);
  return (
    <ContainerPage>
      <MessageAlert alert={alert} />

      <NavBarr name={`Dias Respondidos`} />
      <Menu />
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
              <div className="emotion-box">
                <EmotionAnswered date={date} config={config} />
              </div>

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
