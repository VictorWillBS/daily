import { CategoryStyled, MenuStyled, TotalContainer } from "./MenuStyle";
import {
  IoAddCircleOutline,
  IoCalendarOutline,
  IoMailOutline,
  IoChevronBackOutline,
  IoLogOutOutline,
} from "react-icons/io5";
import generateDate from "../../functions/generateDate";

import { IconContext } from "react-icons";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function redirect(categoryData, navigate) {
  if (categoryData.name === "logout") {
    localStorage.clear();
    navigate(categoryData.link);
    return;
  }
  if (categoryData.name === "Calendário") {
    const date = generateDate(new Date());
    navigate(`${categoryData.link}/${date}`);
    return;
  }
  navigate(categoryData.link);
}

function Category({ categories, menuActive }) {
  const navigate = useNavigate();
  const hashCategories = {
    responder: {
      name: "Responder",
      icon: <IoAddCircleOutline />,
      link: "/",
    },
    calendario: {
      name: "Calendário",
      icon: <IoCalendarOutline />,
      link: "/day",
    },
    mensagem: {
      name: "Mensagem",
      icon: <IoMailOutline />,
      link: "/testeMen",
    },
    logout: {
      name: "logout",
      icon: <IoLogOutOutline />,
      link: "/sign-in",
    },
  };
  return categories.map((category) => {
    return (
      <article className={`category-${menuActive}`}>
        <div>
          <figure
            onClick={() => {
              redirect(hashCategories[category], navigate);
            }}
          >
            {hashCategories[category].icon}
          </figure>
          <Link to={hashCategories[category].link}>
            <h1>{hashCategories[category].name}</h1>
          </Link>
        </div>
      </article>
    );
  });
}
function togleActive(menuActive, setMenuActive) {
  if (menuActive === "not-active") {
    setMenuActive("active");
  } else {
    setMenuActive("not-active");
  }
}

export default function Menu() {
  const [menuActive, setMenuActive] = useState("not-active");
  return (
    <TotalContainer>
      <MenuStyled className={`${menuActive}`}>
        <IconContext.Provider
          value={{
            style: {
              width: "28px",
              height: "28px",
              color: "white",
              fontWeight: "bolder",
            },
          }}
        >
          <figure
            className="mobile-arrow"
            onClick={() => {
              togleActive(menuActive, setMenuActive);
            }}
          >
            <IoChevronBackOutline />
          </figure>
          <CategoryStyled>
            <Category
              menuActive={menuActive}
              categories={["responder", "calendario", "mensagem", "logout"]}
            />
          </CategoryStyled>{" "}
        </IconContext.Provider>
      </MenuStyled>
    </TotalContainer>
  );
}
