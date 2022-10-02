import { useContext } from "react";
import { userContext } from "../../context/userContext";
import {
  UserArticle,
  PageNameArticle,
  TitleArticle,
  NavBarrContainer,
} from "./NavBarStyle";
export default function NavBarr() {
  const { userData } = useContext(userContext);

  const pageName = "Responder";
  console.log(userData);
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
      <UserArticle>
        <img src={userData.photo} alt="User" />
      </UserArticle>
    </NavBarrContainer>
  );
}
