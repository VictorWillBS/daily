import styled from "styled-components";

export const NavBarrContainer = styled.section`
  min-width: 300px;
  width: 100vw;
  height: 107px;
  padding: 0 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 0 10px 10px;
  background-color: #04294f;
  position: absolute;
  left: 0;
  top: 0;
`;

export const TitleArticle = styled.article`
  width: max-content;
  height: fit-content;
  padding-top: 7px;
  cursor: pointer;
  h1 {
    color: #ffffff;
    font-size: 55px;
    font-weight: 600;
    text-shadow: 3px 5px 10px #000;
    font-family: "Kufam", sans-serif;
    text-align: start;
  }
  .sm {
    display: none;
  }
  span {
    color: #ffcd8c;
  }
  @media (min-width: 0) and (max-width: 600px) {
    .lg {
      display: none;
    }
    .sm {
      display: flex;
    }
  }
`;

export const PageNameArticle = styled.article`
  h1 {
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 25px;
    font-weight: 700;
    text-align: center;
  }
`;

export const UserArticle = styled.article`
  width: 74px;
  height: 74px;
  border-radius: 100%;
  border: 2px solid #000;

  background-color: white;
  img {
    width: 70px;
    height: 70px;
    object-fit: cover;
    border-radius: 100%;
  }
`;
