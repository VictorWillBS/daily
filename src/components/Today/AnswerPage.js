import styled from "styled-components";
import EmotionCard from "../Cards/EmotionCard";
import QuestionCards from "../Cards/QuestionsCards";
import Menu from "../Menu/Menu";
import NavBarr from "../NavBarr/NavBar";
export default function AnswerPage() {
  return (
    <ContainerPage>
      <NavBarr />
      <Menu />
      <DisplayContainer>
        <Console>
          <InputSide>
            <EmotionCard />
            <QuestionContainer>
              <QuestionCards />
              <QuestionCards />
              <QuestionCards />
              <QuestionCards />
              <QuestionCards />
              <QuestionCards />
              <QuestionCards />
              <QuestionCards />
            </QuestionContainer>
          </InputSide>
          <InputSide2></InputSide2>
        </Console>
      </DisplayContainer>
    </ContainerPage>
  );
}
const ContainerPage = styled.section`
  top: 150px;
  width: 100vw;
  height: 100vh;
  padding: 0 60px;
`;
const DisplayContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 130px;
  width: 100%;
  height: 100%;
`;
const Console = styled.section`
  max-width: 1030px;
  width: 100%;
  max-height: 750px;
  height: 100%;
  display: flex;
  padding-top: 1.5%;
  border-radius: 60px;
  background-color: #003b76;
  padding: 20px;
`;

const QuestionContainer = styled.section`
  width: 100%;
  height: 570px;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
  &&::-webkit-scrollbar {
    width: 0px;
  }
`;

const InputSide = styled.section`
  width: 50%;
  min-width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  padding: 20px;
`;
const InputSide2 = styled.section`
  width: 50%;
  height: 100%;
  background-color: yellow;
  padding: 20px;
`;
