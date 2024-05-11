import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "./components/Login";
import { Main } from "./components/Main";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};
