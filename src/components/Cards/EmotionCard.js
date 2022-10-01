import styled from "styled-components";

export default function EmotionCard() {
  return (
    <Container>
      <EmotionFace></EmotionFace>
      <EmotionName>
        <input type="text" placeholder="sua faixa etária" list="faixa" />
        <datalist id="faixa">
          <option value="">faixa etária:</option>
          <option value="-18">menor de idade</option>
          <option value="+18">maior de idade</option>
          <option value="+60">idoso</option>
        </datalist>
      </EmotionName>
    </Container>
  );
}

const Container = styled.section`
  max-width: 380px;
  width: 100%;
  height: 62px;
  display: flex;
  justify-content: space-between;
`;

const EmotionName = styled.article`
  max-width: 270px;
  width: 100%;
  height: 62px;
  border-radius: 8px;
  box-shadow: 0px 2px 10px #000;
  background-color: #ffcd8c;
  display: flex;
  justify-content: center;
  align-items: center;
  h4 {
    font-family: "Roboto", sans-serif;
    font-style: italic;
    font-weight: 400;
    font-size: 20px;
  }
`;

const EmotionFace = styled.article`
  width: 60px;
  height: 60px;
  margin-right: 10px;
  border-radius: 100%;
  box-shadow: 0px 2px 10px #000;

  background-color: #ffcd8c;
`;
