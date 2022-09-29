import styled from "styled-components";

export default function Form({ isSignUp }) {
  return (
    <FormStyled>
      <article>
        {isSignUp ? <input placeholder="name" /> : ""}
        <input placeholder="email" />
        <input placeholder="password" />
        {isSignUp ? <input placeholder="photo" /> : ""}
      </article>
      <button type="submit">entrar</button>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  width: 350px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  && > article {
    height: max-content;
    display: flex;
    margin: 30px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  && > article input {
    background-color: #0e4984;
    width: 326px;
    height: 42px;
    margin-bottom: 15px;
    border: none;
    padding: 10px;
    text-align: center;
    border-radius: 8px;
    color: white;
  }

  button {
    width: 225px;
    height: 42px;
    border: none;
    padding: 10px;
    font-size: 20px;
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    color: #b46909;
    text-align: center;
    border-radius: 8px;
    background-color: #ffcd8c;
  }
`;
