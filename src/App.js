import "./index.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { HOME } from "./constants/routes";

function App() {
  return (
    <div className="h-screen w-screen">
      <Routes>
        <Route path={HOME} element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
