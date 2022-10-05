import { useState, useEffect } from "react";
import { Container, EmotionFace, EmotionName } from "./EmotionStyle";
import { ImSmile, ImSad, ImNeutral } from "react-icons/im";
import { IconContext } from "react-icons";
import { MdOutlineHelpOutline } from "react-icons/md";
import axios from "axios";
export default function EmotionAnswered({ date, config }) {
  const [felling, setFelling] = useState("Não Lembro:/");
  const [color, setColor] = useState("");
  const [emoji, setEmoji] = useState("");

  useEffect(() => {
    switch (felling) {
      case "TRISTE":
        setColor("#8CC1FF");
        setEmoji(<ImSad />);
        break;
      case "NEUTRO":
        setColor("#DCDCDC");
        setEmoji(<ImNeutral />);

        break;
      case "FELIZ":
        setColor("#FFCD8C");
        setEmoji(<ImSmile />);
        break;
      default:
        setEmoji(<MdOutlineHelpOutline />);
        setColor("#FFCD8C");

        return;
    }
  }, [felling]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL_API}/felling/${date}`, config)
      .then((res) => {
        if (res.data.length) {
          setFelling(res.data[0].felling);
        } else {
          setFelling("Não Lembro:/");
        }
      });
  }, [date]);
  return (
    <Container>
      <EmotionFace color={color}>
        <IconContext.Provider
          value={{
            style: {
              width: "40px",
              height: "40px",
              color: "black",
              paddingBottom: "4px",
              fontWeight: "bolder",
            },
          }}
        >
          {emoji}
        </IconContext.Provider>
      </EmotionFace>
      <EmotionName color={color}>{felling}</EmotionName>
    </Container>
  );
}
