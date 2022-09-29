import LoginPage from "./LoginPage/LoginPage";
import GlobalStyled from "./GlobalStyle/globalStyled";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingupPage from "./SingUpPage/SignupPage";
function App() {
  return (
    <BrowserRouter>
      <GlobalStyled />
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/sign-up" element={<SingupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
