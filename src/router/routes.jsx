import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Auth/Login";
import Logout from "../pages/Auth/LogOut";
import Signup from "../pages/Auth/Signup";
import Room from "../pages/Room/Room";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/room",
    element: <Room />,
  },
  {
    path: "/auth/login",
    element: <Login />,
  },
  {
    path: "/auth/logout",
    element: <Logout />,
  },
  {
    path: "/auth/signup",
    element: <Signup />,
  },
]);
