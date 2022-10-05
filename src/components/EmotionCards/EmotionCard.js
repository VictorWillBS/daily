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

export default function EmotionCard() {
  const day = generateDate(new Date());
  const [felling, setFelling] = useState("");
  const [color, setColor] = useState("");
  const [emoji, setEmoji] = useState("");
  const [answered, setAnswered] = useState(false);
  const { userData } = useContext(userContext);
  const config = {
    headers: {
      Authorization: `Bearer ${userData.token}`,
    },
  };
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
          placeholder="Como você se sente?"
          list="sentimentos"
          disabled={answered}
          value={felling}
          onChange={inputControl}
        >
          <option value="">Como foi seu Dia?</option>
          <option value="Feliz">Aconteceram coisas boas hoje.</option>
          <option value="Neutro">Foi um dia Neutro.</option>
          <option value="Triste">Aconteceram coisas ruins hoje.</option>
        </InputStyled>
      </EmotionName>
    </Container>
  );
}
