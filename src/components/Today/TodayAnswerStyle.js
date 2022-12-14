import styled from "styled-components";

export const CalendarSide = styled.section`
  width: 50%;
  height: 100%;
  padding: 20px;
  @media (min-width: 0) and (max-width: 800px) {
    && {
      display: none;
    }
  }
`;
export const Console = styled.section`
  max-width: 1030px;
  width: 100%;
  max-height: 750px;
  height: 100%;
  display: flex;
  padding-top: 1.5%;
  flex-direction: column;
  border-radius: 60px;
  background-color: #003b76;
  padding: 20px;
  && > div {
    display: flex;
    flex-direction: row;
  }
`;
export const ContainerPage = styled.section`
  top: 150px;
  width: 100vw;
  height: 80%;
  padding: 0 5%;
`;
export const Decoration = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 20px;
  div {
    width: 120px;
    background-color: #ffffff;
    height: 12px;
    border-radius: 50px;
  }
  margin-bottom: 5px;
`;
export const DisplayContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 130px;
  width: 100%;
  height: 100%;
`;
export const InputSide = styled.section`
  width: 50%;
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
  @media (min-width: 0) and (max-width: 800px) {
    && {
      width: 100%;
    }
  }
`;
export const SectionTitle = styled.article`
  width: 100%;
  text-align: center;
  margin: 10px 0;
  h3 {
    font-family: "Roboto", sans-serif;

    color: #fff;
    font-size: 20px;
    font-weight: 700;
  }
`;
export const QuestionContainer = styled.section`
  width: 100%;
  min-height: 530px;
  max-height: 600px;

  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  .question-Box::-webkit-scrollbar {
    width: 0px;
  }
  .question-Box {
    border-radius: 10px;
    overflow: scroll;
    max-height: 500px;
  }
`;
