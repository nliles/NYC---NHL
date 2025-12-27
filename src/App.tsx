import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import LandmarkFinder from "./components/LandmarkFinder";
import "./styles/fonts.scss";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<LandmarkFinder />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
