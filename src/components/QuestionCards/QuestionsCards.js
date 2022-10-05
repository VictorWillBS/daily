import styled from "styled-components";
import axios from "axios";
import { IconContext } from "react-icons";
import { useContext, useState } from "react";
import { userContext } from "../../context/userContext";
import {
  IoCaretBackCircleOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";
export default function QuestionCards({
  id,
  children,
  isAnswered,
  setChangeQuestion,
  changeQuestion,
  config,
}) {
  const [describe, setDescribe] = useState("");
  const [answered, setAnswered] = useState(isAnswered);

  const { userData } = useContext(userContext);
  function inputControl(e) {
    setDescribe(e.target.value);
  }

  async function submit(event) {
    event.preventDefault();
    if (answered) {
      return;
    }
    const body = { questionId: id, answer: describe };
    await axios
      .post(`${process.env.REACT_APP_URL_API}/answer`, body, config)
      .then((res) => {
        console.log("postei");
        setAnswered(true);
        setChangeQuestion(!changeQuestion);
      });
  }

  async function deleteQuestion(event) {
    event.preventDefault();
    if (answered) {
      return;
    }
    await axios
      .delete(`${process.env.REACT_APP_URL_API}/questions/${id}`, config)
      .then((res) => {
        setChangeQuestion(!changeQuestion);
      });
  }

  return (
    <CardContainer color={answered}>
      <IconContext.Provider
        value={{
          style: {
            width: "28px",
            height: "28px",
            color: "black",
            fontWeight: "bolder",
          },
        }}
      >
        <IconContainer>
          <button
            onClick={(e) => {
              deleteQuestion(e);
            }}
          >
            <IoCloseCircleOutline />
          </button>
        </IconContainer>
        <InputStyled
          rows="3"
          type="textarea"
          placeholder={children}
          value={describe}
          disabled={answered}
          onChange={(e) => {
            inputControl(e);
          }}
        />
        <IconContainer>
          <button
            onClick={(e) => {
              submit(e);
            }}
          >
            <IoCaretBackCircleOutline />
          </button>
        </IconContainer>
      </IconContext.Provider>
    </CardContainer>
  );
}

const CardContainer = styled.article`
  max-width: 380px;
  width: 100%;
  min-height: 73px;
  margin: 20px 0;
  padding: 20px;
  border-radius: 11px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3);
  background-color: ${(props) => (props.color ? "#17FAA8" : "#17a1fa")};

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconContainer = styled.form`
  max-width: 20%;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    border: none;
    background-color: rgba(0, 0, 0, 0);
  }
`;

const InputStyled = styled.textarea`
  width: 100%;
  height: auto !important;
  resize: none;
  border: none;
  overflow-y: scroll;
  text-align: center;
  text-decoration: none;
  background-color: rgba(0, 0, 0, 0);
  &&,
  &&::placeholder {
    text-align: center;
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
  &&::-webkit-scrollbar {
    width: 0px;
  }
`;
