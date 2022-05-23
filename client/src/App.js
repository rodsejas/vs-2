import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Equipments from "./pages/Equipments";
import Equipment from "./pages/Equipment";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/equipments" element={<Equipments />} />
          <Route path="/equipment/:id" element={<Equipment />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
