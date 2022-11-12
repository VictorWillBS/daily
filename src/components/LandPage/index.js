import Menu from "../Menu/Menu";
import NavBarr from "../NavBarr/NavBar";
import background from "../../assets/images/background.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
function DescriptionMobile() {
  return (
    <Mobile>
      <DescriptionSection>
        <Description>
          O Daily foi criado para ajudar pessoas a criarem e cultivarem o hábito
          de escrever sobre o seu próprio dia e monitorarem seus sentimentos.
        </Description>

        <Description>
          Aqui você pode ser Livre pra criar suas próprias perguntas diárias e
          respondê-las, além de poder acompanhar suas respostas e suas emoções
          durantes os meses.
        </Description>

        <Description>
          O hábito de escrita diária traz diversos benefícios não só para a
          saude mental, como também para jornada de auto conhecimento, essencial
          em diversar areas do desenvolvimento humano.
        </Description>

        <LinkStyled to={"/sign-up"}>
          Cadastre-se já e inicie sua jornada diária!
        </LinkStyled>
      </DescriptionSection>
    </Mobile>
  );
}
export function LandPage() {
  return (
    <Page>
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
        {DescriptionMobile()}
        <DesktopSection>
          <DescriptionSection>
            <Conner>
              <Description margin={"0 0 40px 0"}>
                O Daily foi criado para ajudar pessoas a criarem e cultivarem o
                hábito de escrever sobre o seu próprio dia e monitorarem seus
                sentimentos.
              </Description>
              <Description margin={"40px 0 0 0"}>
                O hábito de escrita diária traz diversos benefícios não só para
                a saude mental, como também para jornada de auto conhecimento,
                essencial em diversar areas do desenvolvimento humano.
              </Description>
            </Conner>
            <Conner>
              <Description margin={"80px 0"} text_align={"end"} width={"480px"}>
                Aqui você pode ser Livre pra criar suas próprias perguntas
                diárias e respondê-las, além de poder acompanhar suas respostas
                e suas emoções durantes os meses.
              </Description>
              <LinkStyled to={"/sign-up"}>
                Cadastre-se já e inicie sua jornada diária!
              </LinkStyled>
            </Conner>
          </DescriptionSection>
        </DesktopSection>
      </Content>
    </Page>
  );
}

const Content = styled.section`
  max-width: 1800px;
  width: 100%;
  height: 100vh;
  padding-top: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const TitleSection = styled.section`
  padding: 0 11% 3% 11%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Page = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-size: contain;
  background: #fff url(${background}) no-repeat scroll top center;
  @media (max-width: 1150px) {
    background-position: 30% 60%;
  }
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
  width: 100%;
  max-height: 450px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 1150px) {
    flex-direction: column;
    max-height: 700px;
    h3 {
      max-width: 100%;
    }
  }
`;

const Conner = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
`;

const Description = styled.h3`
  max-width: ${(props) => props.width || "450px"};
  width: 100%;
  font-size: 22px;
  font-weight: 400;
  font-family: "Roboto";
  line-height: 28px;
  margin: ${(props) => props.margin || ""};
  text-align: ${(props) => props.text_align || ""};
  @media (max-width: 1150px) {
    margin: 10px 0;
  }
`;

const LinkStyled = styled(Link)`
  color: black;
  text-decoration: underline;
  font-size: 22px;
  font-weight: 400;
  line-height: 28px;
  font-family: "Roboto";
  max-width: ${(props) => props.width || "450px"};
  width: 100%;
  margin: ${(props) => props.margin || ""};
  text-align: center;
  @media (max-width: 1150px) {
    margin: 10px 0;
  }
`;

const DesktopSection = styled.section`
  width: 100%;
  padding: 0 11% 3% 11%;

  display: initial;
  @media (max-width: 1150px) {
    display: none;
  }
`;

const Mobile = styled.section`
  display: none;
  width: 100%;
  padding: 0 11% 3% 11%;

  @media (max-width: 1150px) {
    display: initial;
  }
`;
