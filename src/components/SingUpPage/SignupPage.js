import styled from "styled-components";
import loginBg from "../../assets/images/loginBG.jpg";
import { Link } from "react-router-dom";
import Form from "../LoginPage/Form";
export default function SingupPage() {
  return (
    <TotalContainer>
      <BGFigure>
        <BGImage src={loginBg} />
      </BGFigure>
      <LoginSide>
        <h1>
          DAI<span>LY</span>
        </h1>

        <Form isSignUp={true} />
        <StyledLink to="/">Não tem conta ainda? Cadastre-se!</StyledLink>
      </LoginSide>
    </TotalContainer>
  );
}

const TotalContainer = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #003b76;
`;

const LoginSide = styled.section`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  H1 {
    color: #ffffff;
    font-weight: 600;
    font-size: 64px;
    font-family: "Kufam", sans-serif;
    text-shadow: 3px 5px 10px #000;
  }
  span {
    color: #ffcd8c;
  }
`;

const StyledLink = styled(Link)`
  color: white;
  margin-top: 30px;
  text-decoration: underline;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 700;
`;

const BGFigure = styled.figure`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const BGImage = styled.img`
  width: 100%;
  height: 100%;
  display: flex;
  opacity: 78%;
  object-fit: cover;
  align-items: center;
  justify-content: center;
  object-position: 80% 60%;
`;
