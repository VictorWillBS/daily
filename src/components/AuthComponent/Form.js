import { useContext, useState } from "react";
import axios from "axios";
import { FormStyled } from "./authStyle";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../context/userContext";
export default function Form({ isSignUp }) {
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState({});
  const { userData, setUserData } = useContext(userContext);
  async function submit(event) {
    event.preventDefault();
    try {
      if (isSignUp) {
        await axios.post(`${process.env.REACT_APP_URL_API}/signup`, dataUser);
        return;
      }

      const { data } = await axios.post(
        `${process.env.REACT_APP_URL_API}/signin`,
        {
          email: dataUser.email,
          password: dataUser.password,
        }
      );
      setUserData({ ...userData, ...data });
      localStorage.setItem("token", data.token);
      localStorage.setItem("user_img", data.photo);
      isSignUp ? navigate("/") : navigate("/answer");
    } catch (error) {
      alert(`não foi possível concluir ${isSignUp ? "cadastro" : "login"}.`);
    }
  }

  function controlInput(event, type) {
    console.log(+"asdasd");
    switch (type) {
      case "name":
        setDataUser({ ...dataUser, name: event.target.value });
        break;
      case "email":
        setDataUser({ ...dataUser, email: event.target.value });
        break;
      case "password":
        setDataUser({ ...dataUser, password: event.target.value });
        break;
      case "photo":
        setDataUser({ ...dataUser, photo: event.target.value });
        break;
      default:
        return;
    }
  }
  return (
    <FormStyled>
      <article>
        {isSignUp ? (
          <input
            placeholder="name"
            onChange={(e) => {
              controlInput(e, "name");
            }}
            value={dataUser.name}
          />
        ) : (
          ""
        )}
        <input
          placeholder="email"
          onChange={(e) => {
            controlInput(e, "email");
          }}
          value={dataUser.email}
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            controlInput(e, "password");
          }}
          value={dataUser.password}
        />
        {isSignUp ? (
          <input
            placeholder="photo"
            onChange={(e) => {
              controlInput(e, "photo");
            }}
            value={dataUser.photo}
          />
        ) : (
          ""
        )}
      </article>
      <button
        type="submit"
        onClick={async (e) => {
          await submit(e);
        }}
      >
        entrar
      </button>
    </FormStyled>
  );
}
