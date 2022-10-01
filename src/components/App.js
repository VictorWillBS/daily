import LoginPage from "./AuthComponent/LoginPage";
import SingupPage from "./AuthComponent/SignupPage";
import AnswerPage from "./Today/AnswerPage";
import { userContext } from "../context/userContext";
import GlobalStyled from "./GlobalStyle/globalStyled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBarr from "./NavBarr/NavBar";
import Menu from "./Menu/Menu";
function App() {
  const [userData, setUserData] = useState({});
  return (
    <userContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <GlobalStyled />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-up" element={<SingupPage />} />
        </Routes>
      </BrowserRouter>
      <BrowserRouter>
        {/* <Menu /> */}
        <Routes>
          <Route path="/answer" element={<AnswerPage />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
