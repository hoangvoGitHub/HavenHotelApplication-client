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
import FindBooking from "../pages/booking/FindBooking";
import SuccessBooking from "../pages/booking/SuccessBooking";
import Checkout from "../pages/booking/Checkout";
import RoomListing from "../pages/room/RoomListing";
import Profile from "../pages/auth/Profile";

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
    path: "room/listing",
    element: <RoomListing />,
  },
  {
    path: "/booking",
    element: <Booking />,
  },
  {
    path: "/booking/find",
    element: <FindBooking />,
  },
  {
    path: "booking/success",
    element: <SuccessBooking />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/profile",
    element: <Profile />,
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
