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
  if (categoryData.name === "Logout") {
    localStorage.clear();
    navigate(categoryData.link);
    return;
  }
  if (categoryData.name === "Respondidas") {
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
      link: "/answer",
    },
    calendario: {
      name: "Respondidas",
      icon: <IoCalendarOutline />,
      link: "/day",
    },
    logout: {
      name: "Logout",
      icon: <IoLogOutOutline />,
      link: "/",
    },
  };
  return categories.map((category) => {
    return (
      <article className={`category-${menuActive}`}>
        <div
          onClick={() => {
            redirect(hashCategories[category], navigate);
          }}
        >
          <figure>{hashCategories[category].icon}</figure>
          <article className="category-name">
            <h1>{hashCategories[category].name}</h1>
          </article>
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
              categories={["responder", "calendario", "logout"]}
            />
          </CategoryStyled>{" "}
        </IconContext.Provider>
      </MenuStyled>
    </TotalContainer>
  );
}
