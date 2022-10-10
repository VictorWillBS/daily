import {
  Container,
  EmotionName,
  EmotionFace,
  InputStyled,
} from "./EmotionStyle";
import { IconContext } from "react-icons";
import { useContext, useEffect, useState } from "react";
import { ImSmile, ImSad, ImNeutral } from "react-icons/im";
import generateDate from "../../functions/generateDate";
import { MdOutlineHelpOutline } from "react-icons/md";

import { userContext } from "../../context/userContext";
import axios from "axios";

export default function EmotionCard({ config }) {
  const day = generateDate(new Date());
  const [felling, setFelling] = useState("");
  const [color, setColor] = useState("");
  const [emoji, setEmoji] = useState("");
  const [answered, setAnswered] = useState(false);

  useEffect(() => {
    switch (felling) {
      case "Triste":
        setColor("#8CC1FF");
        setEmoji(<ImSad />);
        break;
      case "Neutro":
        setColor("#DCDCDC");
        setEmoji(<ImNeutral />);

        break;
      case "Feliz":
        setColor("#FFCD8C");
        setEmoji(<ImSmile />);
        break;
      default:
        setEmoji(<MdOutlineHelpOutline />);
        setColor("#BF7EFF");

        return;
    }
  }, [felling]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/felling/today`, config)
      .then((res) => {
        if (res.data.length) {
          setAnswered(true);
        }
      });
  }, []);

  function inputControl(e) {
    console.log();
    setFelling(e.target.value);
  }

  async function submit(e, day, felling) {
    e.preventDefault();
    if (answered) {
      return;
    }
    const body = {
      felling,
      day,
    };

    await axios
      .post(`${process.env.REACT_APP_URL_API}/felling`, body, config)
      .then(() => {
        setAnswered(true);
      });
  }

  return (
    <Container>
      <EmotionFace color={color}>
        <figure
          data-cy="emotionSubmit"
          onClick={(e) => {
            submit(e, day, felling);
          }}
        >
          <IconContext.Provider
            value={{
              style: {
                width: "40px",
                height: "40px",
                color: "black",
                fontWeight: "bolder",
              },
            }}
          >
            {emoji}
          </IconContext.Provider>
        </figure>
      </EmotionFace>
      <EmotionName color={color}>
        <InputStyled
          color={color}
          type="option"
          list="sentimentos"
          data-cy="emotionInput"
          disabled={answered}
          value={felling}
          onChange={inputControl}
        >
          <option value="">Como foi seu Dia?</option>
          <option value="Feliz" data-cy="Feliz">
            Aconteceram coisas boas hoje.
          </option>
          <option value="Neutro">Foi um dia Neutro.</option>
          <option value="Triste">Aconteceram coisas ruins hoje.</option>
        </InputStyled>
      </EmotionName>
    </Container>
  );
}
