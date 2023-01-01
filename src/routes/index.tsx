import { Routes, Route } from "react-router-dom";
import { CardProvider } from "../context/cardContext";
import { Home } from "../pages/home";
import { Login } from "../pages/login";
import { Register } from "../pages/register";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route
        path="/home"
        element={
          <CardProvider>
            <Home />
          </CardProvider>
        }
      />
    </Routes>
  );
};
