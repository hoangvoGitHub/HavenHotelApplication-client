import { createBrowserRouter } from "react-router-dom";
import App from "../App";import Home from "../pages/Home/Home";
import Login from "../pages/Auth/Login";
import Logout from "../pages/Auth/LogOut";
import Signup from "../pages/Auth/Signup";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/auth/login",
    element: <Login/>
  },
  {
    path: "/auth/logout",
    element: <Logout/>
  },
  {
    path: "/auth/signup",
    element: <Signup/>
  },
  {
    path: "/home",
    element: <Home/>
  },
]);
