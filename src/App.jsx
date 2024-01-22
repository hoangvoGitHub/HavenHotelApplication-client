import "./index.scss";
import RoomSearch from "./components/common/RoomSearch";
import MainHeader from "./components/layout/MainHeader";
import RoomCarousel from "./components/common/RoomCarousel";
import Parallax from "./components/common/Parallax";
import HotelService from "./components/common/HotelService";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();

  const message = location.state && location.state.message;
  const currentUser = localStorage.getItem("userId");

  return (
    <section>
      {message && <p className="text-warning px-5">{message}</p>}
      {currentUser && (
        <h6 className="text-success text-center">
          {" "}
          You are logged-In as {currentUser}
        </h6>
      )}
      <MainHeader />
      <div className="container">
        <RoomSearch />
        <RoomCarousel />
        <Parallax />
        <RoomCarousel />
        <HotelService />
        <Parallax />
        <RoomCarousel />
      </div>
    </section>
  );
}
export default App;
