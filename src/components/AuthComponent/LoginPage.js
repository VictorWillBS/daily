import loginBg from "../../assets/images/loginBG.jpg";
import Form from "./Form";
import {
  TotalContainer,
  UserInputSide,
  StyledLink,
  BGFigure,
  BGImage,
} from "./authStyle";
export default function LoginPage() {
  return (
    <TotalContainer>
      <BGFigure>
        <BGImage src={loginBg} />
      </BGFigure>
      <UserInputSide>
        <h1>
          DAI<span>LY</span>
        </h1>

        <Form isSignUp={false} />
        <StyledLink to="/sign-up">Não tem conta ainda? Cadastre-se!</StyledLink>
      </UserInputSide>
    </TotalContainer>
  );
}
