import { useContext, useState } from "react";
import styled from "styled-components";
import { IconContext } from "react-icons";
import axios from "axios";
import { userContext } from "../../context/userContext";
import { IoAddCircleOutline } from "react-icons/io5";

export default function CreateQuestion({ setChangeQuestion, changeQuestion }) {
  const [describe, setDescribe] = useState("");
  const { userData } = useContext(userContext);
  function inputControl(e) {
    setDescribe(e.target.value);
  }

  async function submit(event) {
    event.preventDefault();

    const config = {
      headers: {
        Authorization: `Bearer ${userData.token}`,
      },
    };
    const body = { question: describe };
    await axios
      .post(`${process.env.REACT_APP_URL_API}/question/create`, body, config)
      .then((res) => {
        setDescribe("");
        setChangeQuestion(!changeQuestion);
      });
  }

  return (
    <>
      <CardContainer>
        <InputStyled
          rows="3"
          type="textarea"
          placeholder="Criar Nova Pergunta"
          value={describe}
          onChange={(e) => {
            inputControl(e);
          }}
        />
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
                submit(e);
              }}
            >
              <IoAddCircleOutline />
            </button>
          </IconContainer>
        </IconContext.Provider>
      </CardContainer>
    </>
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
  background-color: #ffe177;
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
