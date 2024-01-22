import "./index.scss";
import RoomSearch from "./components/common/RoomSearch";
import MainHeader from "./components/layout/MainHeader";

function App() {
  return (
    <section>
      <MainHeader />
      <div className="container">
        <RoomSearch />
      </div>
    </section>
  );
}
export default App;
