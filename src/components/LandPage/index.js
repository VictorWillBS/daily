import Menu from "../Menu/Menu";
import NavBarr from "../NavBarr/NavBar";
import background from "../../assets/images/background.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
export function LandPage() {
  return (
    <>
      <NavBarr />
      <Menu />
      <Content>
        <TitleSection>
          <Title>
            <h2> BEM VINDO </h2>
          </Title>
          <Subtitle>
            <h3>Você está no Daily</h3>
          </Subtitle>
        </TitleSection>
        <DescriptionSection>
          <Conner>
            <Description>
              O Daily foi criado para ajudar pessoas a criarem e cultivarem o
              hábito de escrever sobre o seu próprio dia e monitorarem seus
              sentimentos.
            </Description>
            <Description>
              O hábito de escrita diária traz diversos benefícios não só para a
              saude mental, como também para jornada de auto conhecimento,
              essencial em diversar areas do desenvolvimento humano.
            </Description>
          </Conner>
          <Conner>
            <Description margin={"80px 0"} text_align={"end"} width={"480px"}>
              Aqui você pode ser Livre pra criar suas próprias perguntas diárias
              e respondê-las, além de poder acompanhar suas respostas e suas
              emoções durantes os meses.
            </Description>
            <LinkStyled to={"/sign-up"}>
              Cadastre-se já e inicie sua jornada diária!
            </LinkStyled>
          </Conner>
        </DescriptionSection>
      </Content>
    </>
  );
}

const Content = styled.section`
  width: 100%;
  height: 100vh;
  background-size: contain;
  background: #fff url(${background}) no-repeat scroll top center;
  @media (min-width: 0) and (max-width: 700px) {
    background-position: 0 70px;
  }
`;
const TitleSection = styled.section`
  padding: 150px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.section`
  width: 100%;
  h2 {
    font-size: 50px;
    font-weight: 600;
    font-family: "Roboto";
  }
`;

const Subtitle = styled.section`
  margin-top: 10px;
  width: 100%;
  h3 {
    font-size: 24px;
    font-weight: 400;
    font-family: "Roboto";
  }
`;

const DescriptionSection = styled.section`
  max-width: 1500px;
  width: 100%;
  max-height: 450px;
  height: 100%;
  padding: 0 150px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Conner = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Description = styled.h3`
  width: ${(props) => props.width || "450px"};
  font-size: 22px;
  font-weight: 400;
  font-family: "Roboto";
  line-height: 28px;
  margin: ${(props) => props.margin || ""};
  text-align: ${(props) => props.text_align || ""};
`;

const LinkStyled = styled(Link)`
  color:black;
  text-decoration: underline;
  font-size: 22px;
  font-weight: 400;
  line-height: 28px;
  font-family: "Roboto";
  width: ${(props) => props.width || "450px"};
  margin: ${(props) => props.margin || ""};
  text-align: ${(props) => props.text_align || ""};
`;
