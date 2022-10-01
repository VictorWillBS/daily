import styled from "styled-components";
export default function NavBarr() {
  const pageName = "Responder";
  return (
    <NavBarrContainer>
      <TitleArticle>
        <h1 className="lg">
          DAI<span>LY</span>
        </h1>
        <h1 className="sm">D</h1>
      </TitleArticle>
      <PageNameArticle>
        <h1>{pageName}</h1>
      </PageNameArticle>
      <UserArticle></UserArticle>
    </NavBarrContainer>
  );
}

const NavBarrContainer = styled.section`
  min-width: 300px;
  width: 100vw;
  height: 107px;
  padding: 0 1em;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 0 0 10px 10px;
  background-color: #003b76;
  position: absolute;
  left: 0;
  top: 0;
`;

const TitleArticle = styled.article`
  width: max-content;
  height: fit-content;
  padding-top: 7px;
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

const PageNameArticle = styled.article`
  h1 {
    color: white;
    font-family: "Roboto", sans-serif;
    font-size: 25px;
    font-weight: 700;
  }
`;

const UserArticle = styled.article`
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background-color: white;
  img {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 100%;
  }
`;
