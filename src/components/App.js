import LoginPage from "./AuthComponent/LoginPage";
import SingupPage from "./AuthComponent/SignupPage";
import TodayAnswerPage from "./Today/TodayAnswerPage";
import { userContext } from "../context/userContext";
import GlobalStyled from "./GlobalStyle/globalStyled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import DayPage from "./DayPage/DayPage";
import { LandPage } from "./LandPage";

function App() {
  const [userData, setUserData] = useState({});
  return (
    <userContext.Provider value={{ userData, setUserData }}>
      <BrowserRouter>
        <GlobalStyled />
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/home" element={<LandPage />} />
          <Route path="/sign-up" element={<SingupPage />} />
          <Route path="/answer" element={<TodayAnswerPage />} />
          <Route path="/day/:date" element={<DayPage />} />
          <Route path="*" element={<div>Not found!</div>} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );
}

export default App;
