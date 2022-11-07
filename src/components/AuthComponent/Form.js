import { useContext, useState } from "react";
import axios from "axios";
import { FormStyled } from "./authStyle";
import { useNavigate } from "react-router-dom";
import { userContext } from "../../context/userContext";
export default function Form({ isSignUp, inputdata, setInputdata, setAlert }) {
  const navigate = useNavigate();
  const [dataUser, setDataUser] = useState({});
  const { userData, setUserData } = useContext(userContext);

  async function submit(event) {
    event.preventDefault();
    try {
      if (isSignUp) {
        await axios.post(`${process.env.REACT_APP_URL_API}/signup`, dataUser);
        navigate("/sign-in");
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
      if (data.photo) {
        localStorage.setItem("user_img", data.photo);
      }
      navigate("/answer");
    } catch (error) {
      setAlert({
        type: "error",
        status: error.response.status,
        msg: error.response.data,
      });
    }
  }
  function controlInput(event, type) {
    console.log(+"asdasd");
    switch (type) {
      case "name":
        setDataUser({ ...dataUser, name: event.target.value });
        break;
      case "email":
        setDataUser({
          ...dataUser,
          email: event.target.value.replace(" ", ""),
        });
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
            data-cy="name"
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
          data-cy="email"
        />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => {
            controlInput(e, "password");
          }}
          value={dataUser.password}
          data-cy="password"
        />
        {isSignUp ? (
          <input
            placeholder="photo"
            onChange={(e) => {
              controlInput(e, "photo");
            }}
            value={dataUser.photo}
            data-cy="photo"
          />
        ) : (
          ""
        )}
      </article>
      <button
        type="submit"
        data-cy="submit"
        onClick={async (e) => {
          await submit(e);
        }}
      >
        entrar
      </button>
    </FormStyled>
  );
}
