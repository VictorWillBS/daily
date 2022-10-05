import styled from "styled-components";

export const ContainerPage = styled.section`
  top: 150px;
  width: 100vw;
  height: 100vh;
  padding: 0 5%;
`;
export const DisplayContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding-top: 130px;
  width: 100%;
  height: 100%;
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

export const RightContent = styled.section`
  width: 100%;
  min-height: 530px;
  max-height: 600px;

  margin-top: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow: scroll;
  .emotion-box {
    display: none;
    width: 100%;
  }
  &&::-webkit-scrollbar {
    width: 0px;
  }
  @media (min-width: 0) and (max-width: 750px) {
    .emotion-box {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const InputSide = styled.section`
  width: 50%;
  min-width: 380px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  padding: 20px;
`;
export const LeftContent = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  @media (min-width: 0) and (max-width: 750px) {
    && {
      display: none;
    }
  }
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
