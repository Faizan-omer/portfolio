import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import { ABOUT, HOME } from "./constants/routes";

function App() {
  return (
    <div className="h-screen w-screen">
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={ABOUT} element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
