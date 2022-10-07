import styled from "styled-components";
export const MenuStyled = styled.section`
  position: absolute;
  right: 0px;
  top: 110px;
  max-width: 236px;
  width: 100%;
  height: 360px;
  padding-top: 30px;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  background-color: #04294f;
  border-radius: 10px 10px 10px 96px;

  .mobile-arrow {
    display: none;
  }

  @media (min-width: 0) and (max-width: 1500px) {
    width: 70px;
    height: 240px;
    padding: 20px 0;
    border-radius: 10px 0 0 30px;
  }
  @media (min-width: 0) and (max-width: 1100px) {
    .mobile-arrow {
      display: inherit;
    }

    width: fit-content;
    height: fit-content;
    border-radius: 10px 0 0 10px;
    .active {
      width: 70px;
      height: 240px;
      padding: 20px 0;
    }
  }
`;

export const CategoryStyled = styled.article`
  width: 100%;
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  div {
    max-width: 180px;
    width: 100%;
    height: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  article {
    width: 100%;
    height: 50px;
    cursor: pointer;
    display: flex;
    background-color: #04294f;
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
  div > a {
    width: 100%;
    text-align: center;
  }
  h1 {
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 25px;
    font-weight: 700;
  }
  @media (min-width: 0) and (max-width: 1500px) {
    && {
      height: 90%;
    }
    div {
      justify-content: center;
    }
    a {
      display: none;
    }
  }
  @media (min-width: 0) and (max-width: 1100px) {
    article {
      display: none;
    }
    .category-active {
      display: flex;
    }
  }
`;

export const TotalContainer = styled.div`
  width: 100%;
  @media (min-width: 0) and (max-width: 1100px) {
    .active {
      width: 70px;
      height: 240px;
      padding: 20px 0;
    }
  }
`;
