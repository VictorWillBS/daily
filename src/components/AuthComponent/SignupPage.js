import Form from "./Form";
import loginBg from "../../assets/images/loginBG.jpg";
import {
  TotalContainer,
  UserInputSide,
  StyledLink,
  BGFigure,
  BGImage,
} from "./authStyle";

export default function SingupPage() {
  return (
    <TotalContainer>
      <BGFigure>
        <BGImage src={loginBg} />
      </BGFigure>
      <UserInputSide>
        <h1>
          DAI<span>LY</span>
        </h1>

        <Form isSignUp={true} />
        <StyledLink to="/">Não tem conta ainda? Cadastre-se!</StyledLink>
      </UserInputSide>
    </TotalContainer>
  );
}
