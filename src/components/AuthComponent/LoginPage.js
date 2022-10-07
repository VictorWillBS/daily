import loginBg from "../../assets/images/loginBG.jpg";
import Form from "./Form";
import {
  TotalContainer,
  UserInputSide,
  StyledLink,
  BGFigure,
  BGImage,
} from "./authStyle";
import MessageAlert from "../MessageAlert/MessageAlert";
import { useState } from "react";
export default function LoginPage() {
  const [alert, setAlert] = useState();
  return (
    <TotalContainer>
      <BGFigure>
        <BGImage src={loginBg} />
      </BGFigure>
      <UserInputSide>
        <MessageAlert alert={alert} />
        <h1>
          DAI<span>LY</span>
        </h1>

        <Form isSignUp={false} setAlert={setAlert} />
        <StyledLink to="/sign-up">Não tem conta ainda? Cadastre-se!</StyledLink>
      </UserInputSide>
    </TotalContainer>
  );
}
