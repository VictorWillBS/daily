import { CategoryStyled, MenuStyled } from "./MenuStyle";
import {
  IoAddCircleOutline,
  IoCalendarOutline,
  IoMailOutline,
} from "react-icons/io5";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

function Category({ categories }) {
  const hashCategories = {
    responder: {
      name: "Responder",
      icon: <IoAddCircleOutline />,
      link: "/testeRes",
    },
    calendario: {
      name: "Calendário",
      icon: <IoCalendarOutline />,
      link: "/testeCal",
    },
    mensagem: {
      name: "Mensagem",
      icon: <IoMailOutline />,
      link: "/testeMen",
    },
  };
  return categories.map((category) => {
    return (
      <article>
        <div>
          <figure>{hashCategories[category].icon}</figure>
          <Link to={hashCategories[category].link}>
            <h1>{hashCategories[category].name}</h1>
          </Link>
        </div>
      </article>
    );
  });
}

export default function Menu() {
  return (
    <MenuStyled>
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
        <CategoryStyled>
          <Category categories={["responder", "calendario", "mensagem"]} />
        </CategoryStyled>
      </IconContext.Provider>
    </MenuStyled>
  );
}
