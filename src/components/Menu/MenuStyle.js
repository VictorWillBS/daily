import styled from "styled-components";
export const MenuStyled = styled.section`
  position: absolute;
  right: 0px;
  top: 110px;
  width: 236px;
  height: 360px;
  padding-top: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #003b76;
  border-radius: 10px 10px 10px 96px;
  @media (min-width: 0) and (max-width: 1180px) {
    display: none;
  }
`;

export const CategoryStyled = styled.article`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  div {
    width: 180px;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  article {
    width: 100%;
    height: 50px;
    display: flex;
    background-color: #003b76;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    :hover {
      filter: brightness(1.1);
    }
  }

  div > figure {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
  }
  h1 {
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 25px;
    font-weight: 700;
  }
`;
