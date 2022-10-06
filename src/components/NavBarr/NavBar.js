import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import defaultAvatar from "../../assets/images/user_default_avatar.svg";
import { userContext } from "../../context/userContext";
import {
  UserArticle,
  PageNameArticle,
  TitleArticle,
  NavBarrContainer,
} from "./NavBarStyle";
export default function NavBarr() {
  const { userData } = useContext(userContext);
  const navigate = useNavigate();
  const pageName = "Responder";
  return (
    <NavBarrContainer>
      <TitleArticle
        onClick={() => {
          navigate("/");
        }}
      >
        <h1 className="lg">
          DAI<span>LY</span>
        </h1>
        <h1 className="sm">D</h1>
      </TitleArticle>
      <PageNameArticle>
        <h1>{pageName}</h1>
      </PageNameArticle>
      <UserArticle>
        <img
          src={
            userData.photo || localStorage.getItem("user_img") || defaultAvatar
          }
          alt="User"
        />
      </UserArticle>
    </NavBarrContainer>
  );
}
