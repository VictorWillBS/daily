import LoginPage from "./AuthComponent/LoginPage";
import GlobalStyled from "./GlobalStyle/globalStyled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingupPage from "./AuthComponent/SignupPage";
import { userContext } from "../context/userContext";
import { useState } from "react";
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
    </userContext.Provider>
  );
}

export default App;
