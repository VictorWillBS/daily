import styled from "styled-components";
import { IconContext } from "react-icons";
import { useEffect, useState } from "react";
import { ImSmile, ImSad, ImNeutral } from "react-icons/im";

export default function EmotionCard() {
  const [felling, setFelling] = useState("");
  const [color, setColor] = useState("");
  const [emoji, setEmoji] = useState("");
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
        return;
    }
  }, [felling]);
  function inputControl(e) {
    console.log();
    setFelling(e.target.value);
  }
  return (
    <Container>
      <EmotionFace color={color}>
        <figure>
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
          type="text"
          placeholder="Como você se sente?"
          list="sentimentos"
          value={felling}
          onChange={inputControl}
        />
        <datalist id="sentimentos">
          <option value="Alegre">Aconteceram coisas boas hoje.</option>
          <option value="Neutro">Não foi nem muito bom e nem ruim.</option>
          <option value="Triste">Aconteceram algumas coisas ruins hoje.</option>
        </datalist>
      </EmotionName>
    </Container>
  );
}

const Container = styled.section`
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
  height: 73px;
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

const InputStyled = styled.input`
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
