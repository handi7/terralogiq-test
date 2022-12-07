import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import { useEffect } from "react";
import { LOCAL_TOKEN } from "./constants";
import { keepLogin } from "./redux/actions/authActions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem(LOCAL_TOKEN);
    if (token) {
      keepLogin(token, dispatch);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Login />} path="/login" />
        <Route element={<Admin />} path="/admin" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
