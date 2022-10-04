import styled from "styled-components";
import { IconContext } from "react-icons";
import { useContext, useEffect, useState } from "react";
import { ImSmile, ImSad, ImNeutral } from "react-icons/im";
import generateDate from "../../functions/generateDate";
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
      case "Alegre":
        setColor("#FFCD8C");
        setEmoji(<ImSmile />);
        break;
      default:
        setEmoji("");

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
          <option value="Alegre">Aconteceram coisas boas hoje.</option>
          <option value="Neutro">Foi um dia Neutro.</option>
          <option value="Triste">Aconteceram coisas ruins hoje.</option>
        </InputStyled>
      </EmotionName>
    </Container>
  );
}

const Container = styled.form`
  max-width: 380px;
  width: 100%;
  height: 73px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const EmotionName = styled.article`
  max-width: 270px;
  width: 100%;
  min-height: 73px;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.4);
  background-color: ${(props) => props.color || "#FFCD8C"};
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

const EmotionFace = styled.article`
  width: 60px;
  height: 60px;
  margin-right: 10px;
  padding-top: 4px;
  border-radius: 100%;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  background-color: ${(props) => props.color || "#FFCD8C"};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputStyled = styled.select`
  width: 100%;
  height: 30px;
  background-color: ${(props) => props.color || "#FFCD8C"};

  border: none;
  text-align: center;
  text-decoration: none;
  font-family: "Roboto", sans-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 20px;
  &&::placeholder {
    color: #000;
    font-family: "Roboto", sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 20px;
  }
  &&:focus {
    box-shadow: 0 0 0 0;
    border: 0 none;
    outline: 0;
  }
`;
