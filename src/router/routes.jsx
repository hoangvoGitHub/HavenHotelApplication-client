import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../pages/auth/Login";
import Logout from "../pages/auth/LogOut";
import Signup from "../pages/auth/Signup";
import Room from "../pages/room/Room";
import EditRoom from "../pages/room/EditRoom";
import ExistingRooms from "../pages/room/ExistingRooms";
import AddRoom from "../pages/room/AddRoom";
import Admin from "../pages/admin/Admin";
import Booking from "../pages/booking/Booking";

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
    path: "/room/edit/:roomId",
    element: <EditRoom />,
  },
  {
    path: "/rooms/exist",
    element: <ExistingRooms />,
  },
  {
    path: "/room/add",
    element: <AddRoom />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/admin",
    element: <Admin />,
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
