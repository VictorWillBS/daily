import Form from "./Form";
import loginBg from "../../assets/images/loginBG.jpg";
import {
  TotalContainer,
  UserInputSide,
  StyledLink,
  BGFigure,
  BGImage,
  HelpSection,
  HelpText,
} from "./authStyle";
import { useState } from "react";
import MessageAlert from "../MessageAlert/MessageAlert";

export default function SingupPage() {
  const [inputdata, setInputdata] = useState({ email: false, password: false });
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

        <Form
          isSignUp={true}
          setInputdata={setInputdata}
          inputdata={inputdata}
          setAlert={setAlert}
        />
        <StyledLink to="/sign-in">Não tem conta ainda? Cadastre-se!</StyledLink>
        <HelpSection>
          <HelpText>Photo: Não é obrigatória.</HelpText>
          <HelpText correct={inputdata.email}>
            Email: Deve ser um email valido.
          </HelpText>
          <HelpText correct={inputdata.password}>
            Senha: Deve ter entre 10 - 30 caracteres.
          </HelpText>
        </HelpSection>
      </UserInputSide>
    </TotalContainer>
  );
}
