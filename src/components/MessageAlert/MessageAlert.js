import { useEffect, useState } from "react";
import styled from "styled-components";

function errorTratment(alert) {
  if (alert.type === "sucess") {
    return alert.msg;
  }
  if (alert.status === 422) {
    return "Por favor, preencha todos os campos necessários.";
  }
  if (alert.status === 401 && alert.msg === "Invalid Token.") {
    return "Desculpe,você foi desconectado.";
  }
  return alert.msg;
}

export default function MessageAlert({ alert }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!alert || (!alert.msg && !alert.status)) {
      console.log(alert);
      setVisible(false);
      return;
    }
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 5000);
  }, [alert]);
  return (
    <>
      {visible && (
        <Container>
          <MessageBox type={alert.type}>{errorTratment(alert)}</MessageBox>
        </Container>
      )}
    </>
  );
}
const Container = styled.section`
  width: 100%;
  height: 70px;
  position: absolute;
  z-index: 1;
  top: 110px;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MessageBox = styled.article`
  max-width: 800px;
  width: 100%;
  height: 100%;
  background-color: ${(props) =>
    props.type === "sucess" ? "#75F081" : "#FB8484"};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
