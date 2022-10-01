import {
  UserArticle,
  PageNameArticle,
  TitleArticle,
  NavBarrContainer,
} from "./NavBarStyle";
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
