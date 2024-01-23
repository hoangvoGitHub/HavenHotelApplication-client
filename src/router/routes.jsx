import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/Auth/Login";
import Logout from "../pages/Auth/LogOut";
import Signup from "../pages/Auth/Signup";
import Room from "../pages/Room/Room";
import EditRoom from "../pages/Room/EditRoom";
import ExistingRooms from "../pages/Room/ExistingRooms";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/rooms",
    element: <Room />,
  },
  {
    path: "/rooms/edit/:roomId",
    element: <EditRoom />,
  },
  {
    path: "/rooms/exist",
    element: <ExistingRooms />
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
