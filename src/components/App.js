import LoginPage from "./AuthComponent/LoginPage";
import SingupPage from "./AuthComponent/SignupPage";
import LoginPage2 from "./Today/LoginPage2";
import { userContext } from "../context/userContext";
import GlobalStyled from "./GlobalStyle/globalStyled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import NavBarr from "./NavBarr/NavBar";
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
        <NavBarr></NavBarr>
        <Routes>
          <Route path="/teste" element={<LoginPage2 />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
