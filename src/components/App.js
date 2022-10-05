import LoginPage from "./AuthComponent/LoginPage";
import SingupPage from "./AuthComponent/SignupPage";
import AnswerPage from "./Today/AnswerPage";
import { userContext } from "../context/userContext";
import GlobalStyled from "./GlobalStyle/globalStyled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import DayPage from "./DayPage/DayPage";

function App() {
  const [userData, setUserData] = useState({});
  return (
    <userContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <GlobalStyled />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-up" element={<SingupPage />} />
          <Route path="/answer" element={<AnswerPage />} />
          <Route path="/day/:date" element={<DayPage />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
