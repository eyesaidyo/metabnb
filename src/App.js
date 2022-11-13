import "./styles.css";
import { Nav } from "./Components/Nav";
import { Home } from "./Components/Home";
import { PlaceToStay } from "./Components/PlaceToStay";
import { Routes, Route, Link } from "react-router-dom";
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<Home />} />
          <Route path="place-to-stay" element={<PlaceToStay />} />
        </Route>
      </Routes>
    </div>
  );
}
